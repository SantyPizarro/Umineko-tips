import bz2
import io
import json
import struct
import sys
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]

ARCHIVES = [
    Path(r"C:\Program Files (x86)\Steam\steamapps\common\Umineko\arc.nsa"),
    Path(r"C:\Program Files (x86)\Steam\steamapps\common\Umineko Chiru\arc.nsa"),
]

BACKGROUND_MAP = {
    "assets/backgrounds/mansion_day.png": r"bmp\background\mainbuilding\m1f_p1b.bmp",
    "assets/backgrounds/mansion_night_funeral.png": r"bmp\background\mainbuilding\m1f_p1bn.bmp",
    "assets/backgrounds/golden_land.png": r"bmp\background\efe\gold1.bmp",
    "assets/backgrounds/golden_land_final.png": r"bmp\background\efe\gold3.bmp",
    "assets/backgrounds/city_of_books.png": r"bmp\background\efe\book1.bmp",
    "assets/backgrounds/meta_world_silver.png": r"bmp\background\efe\book1.bmp",
    "assets/backgrounds/meta_world_dawn.png": r"bmp\background\efe\gold2.bmp",
    "assets/backgrounds/skyscraper_roof.png": r"bmp\background\city\bui_h1a.bmp",
    "assets/backgrounds/skyscraper_roof_night.png": r"bmp\background\city\bui_h1b.bmp",
    "assets/backgrounds/tea_party_hall.png": r"bmp\title\title_menu\tea.png",
}


def parse_archive(archive_path):
    data = archive_path.read_bytes()
    count = struct.unpack_from(">H", data, 0)[0]
    base_offset = struct.unpack_from(">I", data, 2)[0]
    pos = 6
    entries = {}

    for _ in range(count):
        end = data.index(0, pos)
        name = data[pos:end].decode("latin-1").lower()
        pos = end + 1
        compression = data[pos]
        pos += 1
        offset, length, original_length = struct.unpack_from(">III", data, pos)
        pos += 12
        entries[name] = {
            "archive": archive_path,
            "data": data,
            "base_offset": base_offset,
            "compression": compression,
            "offset": offset,
            "length": length,
            "original_length": original_length,
        }

    return entries


def read_entry(entry):
    start = entry["base_offset"] + entry["offset"]
    payload = entry["data"][start:start + entry["length"]]

    if entry["compression"] == 0:
        return payload
    if entry["compression"] == 4:
        return bz2.decompress(payload[4:])

    raise ValueError(f"Unsupported NSA compression type {entry['compression']}")


def save_png(raw, target):
    target.parent.mkdir(parents=True, exist_ok=True)
    image = Image.open(io.BytesIO(raw))
    image.save(target, "PNG")


def main():
    available_entries = {}
    for archive in ARCHIVES:
        if not archive.exists():
            continue
        available_entries.update(parse_archive(archive))

    extracted = []
    missing = []

    for target_rel, source_name in BACKGROUND_MAP.items():
        source_key = source_name.lower()
        entry = available_entries.get(source_key)
        if not entry:
            missing.append({"target": target_rel, "source": source_name})
            continue

        target = ROOT / target_rel
        raw = read_entry(entry)
        save_png(raw, target)
        extracted.append({
            "target": target_rel,
            "source": source_name,
            "archive": str(entry["archive"]),
        })

    report = {
        "extracted": extracted,
        "missing": missing,
    }
    (ROOT / "assets" / "extracted-backgrounds.report.json").write_text(
        json.dumps(report, indent=2),
        encoding="utf-8",
    )

    print(f"Extracted backgrounds: {len(extracted)}")
    print(f"Missing backgrounds: {len(missing)}")
    if missing:
        for item in missing:
            print(f"- {item['target']} <- {item['source']}")
        sys.exit(1)


if __name__ == "__main__":
    main()
