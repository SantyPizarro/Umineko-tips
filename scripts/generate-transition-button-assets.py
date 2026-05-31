from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
FONT_PATH = ROOT / "assets" / "fonts" / "face0.otf"
OUTPUT_DIR = ROOT / "assets" / "ui" / "system"

SPRITE_WIDTH = 480
SPRITE_HEIGHT = 36
STATE_WIDTH = SPRITE_WIDTH // 2


def fit_font(draw, text):
    for size in range(22, 11, -1):
        font = ImageFont.truetype(FONT_PATH, size)
        bbox = draw.textbbox((0, 0), text, font=font, stroke_width=3)
        if bbox[2] - bbox[0] <= STATE_WIDTH - 14 and bbox[3] - bbox[1] <= SPRITE_HEIGHT - 4:
            return font, bbox
    font = ImageFont.truetype(FONT_PATH, 12)
    return font, draw.textbbox((0, 0), text, font=font, stroke_width=3)


def draw_state(draw, x, text, background):
    draw.rectangle((x, 0, x + STATE_WIDTH, SPRITE_HEIGHT), fill=background)
    font, bbox = fit_font(draw, text)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    tx = x + (STATE_WIDTH - text_width) // 2 - bbox[0]
    ty = (SPRITE_HEIGHT - text_height) // 2 - bbox[1] - 1
    draw.text(
        (tx, ty),
        text,
        font=font,
        fill=(255, 255, 255, 255),
        stroke_width=3,
        stroke_fill=(0, 0, 0, 255),
    )


def make_button(filename, text):
    image = Image.new("RGBA", (SPRITE_WIDTH, SPRITE_HEIGHT), (0, 0, 0, 0))
    draw = ImageDraw.Draw(image)
    draw_state(draw, 0, text, (57, 23, 26, 255))
    draw_state(draw, STATE_WIDTH, text, (248, 13, 13, 255))
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    image.save(OUTPUT_DIR / filename)


def main():
    make_button("disable_transitions.png", "Disable Transitions")
    make_button("enable_transitions.png", "Enable Transitions")


if __name__ == "__main__":
    main()
