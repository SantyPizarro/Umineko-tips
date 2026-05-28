import bz2
import io
import json
import struct
import sys
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
ARCHIVES = [
    Path(r"C:\Program Files (x86)\Steam\steamapps\common\Umineko Chiru\arc.nsa"),
    Path(r"C:\Program Files (x86)\Steam\steamapps\common\Umineko Chiru\arc1.nsa"),
    Path(r"C:\Program Files (x86)\Steam\steamapps\common\Umineko Chiru\arc2.nsa"),
    Path(r"C:\Program Files (x86)\Steam\steamapps\common\Umineko Chiru\arc3.nsa"),
]

PREFIX_MAP = [
    ("bmp\\r_click\\cha_btn\\ep5\\", "assets/ui/characters/ep5/icons/"),
    ("bmp\\r_click\\cha_tati\\ep5\\", "assets/ui/characters/ep5/tachi/"),
    ("en\\bmp\\r_click\\text\\cha\\ep5\\", "assets/ui/characters/ep5/reference-text/"),
    ("bmp\\r_click\\cha_btn\\ep5_2\\", "assets/ui/characters/ep5_2/icons/"),
    ("bmp\\r_click\\cha_tati\\ep5_2\\", "assets/ui/characters/ep5_2/tachi/"),
    ("en\\bmp\\r_click\\text\\cha\\ep5_2\\", "assets/ui/characters/ep5_2/reference-text/"),
    ("en\\bmp\\r_click\\tips_btn\\", "assets/ui/tips/ep5/buttons/"),
    ("en\\bmp\\r_click\\text\\tips\\ep5\\", "assets/tips/ep5/"),
]

EXACT_MAP = {
    "assets/ui/characters/ep5/backdrop/cha_back.png": r"bmp\r_click\cha_btn\cha_back.png",
    "assets/ui/characters/ep5_2/backdrop/cha_back.png": r"bmp\r_click\cha_btn\cha_back.png",
    "assets/ui/characters/ep5_2/backdrop/cha_back_29.png": r"bmp\r_click\cha_btn\cha_back_29.png",
    "assets/ui/characters/ep5_2/backdrop/cha_back20.png": r"bmp\r_click\cha_btn\cha_back20.png",
    "assets/ui/characters/ep5_2/backdrop/cha_back3.png": r"bmp\r_click\cha_btn\cha_back3.png",
    "assets/ui/characters/ep5/text/txt_def2.png": r"bmp\r_click\text\txt_def2.png",
    "assets/ui/hana3_back.png": r"en\bmp\r_click\hana3_back.png",
    "assets/ui/system/cha_next.png": r"bmp\r_click\sys_btn\cha_next.png",
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
    return image.size


def target_for_source(source_name):
    source_lower = source_name.lower()
    for prefix, target_prefix in PREFIX_MAP:
        prefix_lower = prefix.lower()
        if not source_lower.startswith(prefix_lower):
            continue
        filename = source_lower.removeprefix(prefix_lower).replace("\\", "/")
        if not filename.endswith(".png"):
            return None
        if target_prefix.endswith("/buttons/") and not filename.startswith("tips5_"):
            return None
        return f"{target_prefix}{filename}"
    return None


def main():
    archives = {}
    for archive in ARCHIVES:
        if not archive.exists():
            print(f"Missing archive: {archive}", file=sys.stderr)
            sys.exit(1)
        archives.update(parse_archive(archive))

    requested = {}
    for source_name in archives:
        target = target_for_source(source_name)
        if target:
            requested[target] = source_name
    requested.update({target: source.lower() for target, source in EXACT_MAP.items()})

    extracted = []
    missing = []
    for target_rel, source_name in sorted(requested.items()):
        entry = archives.get(source_name.lower())
        if not entry:
            missing.append({"target": target_rel, "source": source_name})
            continue
        raw = read_entry(entry)
        width, height = save_png(raw, ROOT / target_rel)
        extracted.append({
            "target": target_rel,
            "source": source_name,
            "archive": str(entry["archive"]),
            "width": width,
            "height": height,
        })

    report = {"extracted": extracted, "missing": missing}
    (ROOT / "assets" / "extracted-ep5.report.json").write_text(
        json.dumps(report, indent=2),
        encoding="utf-8"
    )
    print(f"Extracted EP5 assets: {len(extracted)}")
    print(f"Missing EP5 assets: {len(missing)}")
    if missing:
        for item in missing[:25]:
            print(f"  missing {item['source']} -> {item['target']}")
        sys.exit(1)


if __name__ == "__main__":
    main()
