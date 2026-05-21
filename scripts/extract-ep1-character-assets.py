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

PC_CODES = {
    "kin": {1, 2, 3},
    "kla": {1, 2},
    "nat": {1, 2},
    "jes": {1, 2},
    "nan": {1, 2},
    "eva": {1, 2},
    "hid": {1, 2},
    "geo": {1, 2},
    "bea": {1, 2},
    "rud": {1, 2},
    "kir": {1, 2},
    "but": {1, 2},
    "gen": {1, 2},
    "ros": {1, 2},
    "mar": {1, 2},
    "sha": {1, 2},
    "kan": {1, 2},
    "goh": {1, 2},
    "kum": {1, 2},
}

TACHI = {
    "kin": ["kin", "kin_m", "kin_d"],
    "kla": ["kla", "kla_d"],
    "nat": ["nat", "nat_d"],
    "jes": ["jes", "jes_d"],
    "nan": ["nan", "nan_d"],
    "eva": ["eva", "eva_d"],
    "hid": ["hid", "hid_d"],
    "geo": ["geo", "geo_d"],
    "bea": ["bea", "bea_d"],
    "rud": ["rud", "rud_d"],
    "kir": ["kir", "kir_d"],
    "but": ["but", "but_d"],
    "gen": ["gen", "gen_d"],
    "ros": ["ros", "ros_d"],
    "mar": ["mar", "mar_d"],
    "sha": ["sha", "sha_d"],
    "kan": ["kan", "kan_d"],
    "goh": ["goh", "goh_d"],
    "kum": ["kum", "kum_d"],
}

ASSET_MAP = {
    "assets/ui/characters/ep1/backdrop/cha_back.png": r"bmp\r_click\cha_btn\cha_back.png",
    "assets/ui/characters/ep1/icons/non.png": r"bmp\r_click\cha_btn\non.png",
    "assets/ui/characters/ep1/text/txt_def.png": r"bmp\r_click\text\txt_def.png",
    "assets/ui/system/r_jp.png": r"bmp\r_click\sys_btn\r_jp.png",
    "assets/ui/system/r_new.png": r"bmp\r_click\sys_btn\r_new.png",
}

for code in PC_CODES:
    for suffix in ("l", "d"):
        ASSET_MAP[f"assets/ui/characters/ep1/icons/{code}_{suffix}.png"] = (
            rf"bmp\r_click\cha_btn\{code}_{suffix}.png"
        )

ASSET_MAP["assets/ui/characters/ep1/icons/kin_m.png"] = r"bmp\r_click\cha_btn\kin_m.png"

for code, names in TACHI.items():
    for name in names:
        ASSET_MAP[f"assets/ui/characters/ep1/tachi/{name}.png"] = (
            rf"bmp\r_click\cha_tati\{name}.png"
        )

for code, page_numbers in PC_CODES.items():
    for page in page_numbers:
        ASSET_MAP[f"assets/ui/characters/ep1/reference-text/{code}_{page}.png"] = (
            rf"en\bmp\r_click\text\cha\{code}_{page}.png"
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
    return image.size


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
        width, height = save_png(raw, target)
        extracted.append({
            "target": target_rel,
            "source": source_name,
            "archive": str(entry["archive"]),
            "width": width,
            "height": height,
        })

    report = {
        "extracted": extracted,
        "missing": missing,
    }
    (ROOT / "assets" / "extracted-ep1-character.report.json").write_text(
        json.dumps(report, indent=2),
        encoding="utf-8",
    )

    print(f"Extracted EP1 character assets: {len(extracted)}")
    print(f"Missing EP1 character assets: {len(missing)}")
    if missing:
        for item in missing:
            print(f"- {item['target']} <- {item['source']}")
        sys.exit(1)


if __name__ == "__main__":
    main()
