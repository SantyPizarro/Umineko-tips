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

NORMAL_CODES = [
    "kin", "kla", "nat", "jes", "nan", "eva", "hid", "geo", "rud", "kir",
    "but", "gen", "ros", "mar", "sha", "kan", "goh", "kum", "bea", "ber",
    "lam",
]

NORMAL_ICON_NAMES = [
    "non", "bea_d", "bea_l", "bea_l2", "ber_d", "ber_l", "but_d",
    "but_l", "eva_d", "eva_l", "gen_d", "gen_l", "geo_d", "geo_l",
    "geo_l2", "goh_d", "goh_l", "hid_d", "hid_l", "jes_d", "jes_l",
    "kan_d", "kan_l", "kan_l2", "kan_m", "kin_d", "kin_l", "kir_d",
    "kir_l", "kla_d", "kla_l", "kum_d", "kum_d2", "kum_l", "mar_d",
    "mar_l", "nan_d", "nan_d2", "nan_l", "nat_d", "nat_l", "ros_d",
    "ros_l", "rud_d", "rud_l", "sha_d", "sha_l", "sha_l2",
]

NORMAL_TACHI_NAMES = [
    "bea", "bea2", "bea_d", "ber", "ber_d", "but", "but_d", "eva",
    "eva_d", "gen", "gen_d", "geo", "geo2", "geo_d", "goh", "goh_d",
    "hid", "hid_d", "jes", "jes_d", "kan", "kan2", "kan_d", "kan_m",
    "kin", "kin_d", "kir", "kir_d", "kla", "kla_d", "kum", "kum_d",
    "kum_d2", "mar", "mar_d", "nan", "nan_d", "nan_d2", "nat", "nat_d",
    "ros", "ros_d", "rud", "rud_d", "sha", "sha2", "sha_d",
]

FANTASY_ICON_NAMES = [
    "bea_l", "ber_l", "but_l", "gen_l", "kan_l", "kin_l", "lam_l",
    "mar_l", "rg_l", "sha_l",
]

FANTASY_TACHI_NAMES = [
    "bea", "ber", "ber_d", "but", "gen", "kan", "kin", "lam", "mar",
    "rg1", "rg2", "rg3", "rg4", "rg5", "rg6", "rg7", "sha",
]

NORMAL_TEXT_NAMES = [
    "bea_2", "but_2", "eva_2", "gen_2", "geo_2", "goh_2", "hid_2",
    "jes_2", "kan_2", "kan_3", "kin_2", "kir_2", "kla_2", "kum_2",
    "kum_3", "mar_2", "nan_2", "nan_3", "nat_2", "ros_2", "rud_2",
    "sha_2",
]

FANTASY_TEXT_NAMES = [
    "bea_1", "ber_1", "but_1", "gen_1", "kan_1", "kin_1", "lam_1",
    "mar_1", "rg1_1", "rg2_1", "rg3_1", "rg4_1", "rg5_1", "rg6_1",
    "rg7_1", "sha_1",
]

ASSET_MAP = {
    "assets/ui/characters/ep2/backdrop/cha_back.png": r"bmp\r_click\cha_btn\cha_back.png",
    "assets/ui/characters/ep2_2/backdrop/cha_back3.png": r"bmp\r_click\cha_btn\cha_back3.png",
    "assets/ui/characters/ep2_2/backdrop/cha_back_ma.png": r"bmp\r_click\cha_btn\cha_back_ma.png",
    "assets/ui/characters/ep2/text/txt_def2.png": r"bmp\r_click\text\txt_def2.png",
    "assets/ui/hana3_back.png": r"en\bmp\r_click\hana3_back.png",
    "assets/ui/system/cha_next.png": r"bmp\r_click\sys_btn\cha_next.png",
    "assets/backgrounds/different_space_1a.png": r"bmp\background\efe\different_space_1a.bmp",
}

for name in NORMAL_ICON_NAMES:
    ASSET_MAP[f"assets/ui/characters/ep2/icons/{name}.png"] = (
        rf"bmp\r_click\cha_btn\ep2\{name}.png"
    )

for name in NORMAL_TACHI_NAMES:
    ASSET_MAP[f"assets/ui/characters/ep2/tachi/{name}.png"] = (
        rf"bmp\r_click\cha_tati\ep2\{name}.png"
    )

for name in NORMAL_TEXT_NAMES:
    ASSET_MAP[f"assets/ui/characters/ep2/reference-text/{name}.png"] = (
        rf"en\bmp\r_click\text\cha\ep2\{name}.png"
    )

for name in FANTASY_ICON_NAMES:
    ASSET_MAP[f"assets/ui/characters/ep2_2/icons/{name}.png"] = (
        rf"bmp\r_click\cha_btn\ep2_2\{name}.png"
    )

for name in FANTASY_TACHI_NAMES:
    ASSET_MAP[f"assets/ui/characters/ep2_2/tachi/{name}.png"] = (
        rf"bmp\r_click\cha_tati\ep2_2\{name}.png"
    )

for name in FANTASY_TEXT_NAMES:
    ASSET_MAP[f"assets/ui/characters/ep2_2/reference-text/{name}.png"] = (
        rf"en\bmp\r_click\text\cha\ep2_2\{name}.png"
    )

for index in range(1, 8):
    ASSET_MAP[f"assets/ui/tips/ep2/buttons/tips2_{index}.png"] = (
        rf"en\bmp\r_click\tips_btn\tips2_{index}.png"
    )

for tip_index, page_count in {
    1: 3,
    2: 6,
    3: 1,
    4: 1,
    5: 1,
    6: 4,
    7: 1,
}.items():
    for page_index in range(1, page_count + 1):
        ASSET_MAP[f"assets/tips/ep2/{tip_index}_{page_index}.png"] = (
            rf"en\bmp\r_click\text\tips\ep2\{tip_index}_{page_index}.png"
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
    (ROOT / "assets" / "extracted-ep2.report.json").write_text(
        json.dumps(report, indent=2),
        encoding="utf-8",
    )

    print(f"Extracted EP2 assets: {len(extracted)}")
    print(f"Missing EP2 assets: {len(missing)}")
    if missing:
        for item in missing:
            print(f"- {item['target']} <- {item['source']}")
        sys.exit(1)


if __name__ == "__main__":
    main()
