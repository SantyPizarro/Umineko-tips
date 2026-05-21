import bz2
import io
import json
import struct
import sys
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
ARCHIVE = Path(r"C:\Program Files (x86)\Steam\steamapps\common\Umineko\arc.nsa")
EN_ARCHIVE = Path(r"C:\Program Files (x86)\Steam\steamapps\common\Umineko\arc3.nsa")

ASSET_MAP = {
    "assets/ui/tips/ep1/backdrop/tips1_back.png": r"bmp\r_click\tips_btn\tips1_back.bmp",
    "assets/ui/tips/back.png": r"bmp\r_click\tips_btn\tips_back.png",
    "assets/ui/tips/next.png": r"bmp\r_click\tips_btn\tips_next.png",
    "assets/ui/system/tips.png": r"en\bmp\r_click\sys_btn\tips.png",
    "assets/ui/system/character.png": r"en\bmp\r_click\sys_btn\cha.png",
    "assets/ui/system/execute.png": r"en\bmp\r_click\sys_btn\execute.png",
    "assets/ui/system/resurrect.png": r"en\bmp\r_click\sys_btn\resur.png",
    "assets/ui/system/title.png": r"en\bmp\r_click\sys_btn\title.png",
    "assets/ui/system/exit.png": r"en\bmp\r_click\sys_btn\exit.png",
    "assets/ui/hana_back.png": r"bmp\r_click\hana_back.png",
}

for index in range(1, 8):
    ASSET_MAP[f"assets/ui/tips/ep1/buttons/tips1_{index}.png"] = (
        rf"en\bmp\r_click\tips_btn\tips1_{index}.png"
    )

for tip_index, page_count in {
    1: 3,
    2: 6,
    3: 1,
    4: 1,
    5: 4,
    6: 1,
    7: 1,
}.items():
    for page_index in range(1, page_count + 1):
        ASSET_MAP[f"assets/tips/ep1/{tip_index}_{page_index}.png"] = (
            rf"en\bmp\r_click\text\tips\{tip_index}_{page_index}.png"
        )


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
    archives = {}
    for archive in (ARCHIVE, EN_ARCHIVE):
        if not archive.exists():
            print(f"Missing archive: {archive}", file=sys.stderr)
            sys.exit(1)
        archives.update(parse_archive(archive))

    extracted = []
    missing = []

    for target_rel, source_name in ASSET_MAP.items():
        source_key = source_name.lower()
        entry = archives.get(source_key)
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
    (ROOT / "assets" / "extracted-ep1-tips.report.json").write_text(
        json.dumps(report, indent=2),
        encoding="utf-8",
    )

    print(f"Extracted EP1 tips assets: {len(extracted)}")
    print(f"Missing EP1 tips assets: {len(missing)}")
    if missing:
        for item in missing:
            print(f"- {item['target']} <- {item['source']}")
        sys.exit(1)


if __name__ == "__main__":
    main()
