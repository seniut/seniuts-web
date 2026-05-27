#!/usr/bin/env python3
"""
prepare-profile-photo.py — Prepare a circular profile photo for CV use.

Input:  assets/profile/photo-original.jpeg
Output: assets/profile/photo-cv-round.png
"""

import sys
import os

try:
    from PIL import Image, ImageDraw
except ImportError:
    print("Error: Pillow is not installed.")
    print("Install it with:")
    print("  python -m pip install pillow")
    sys.exit(1)

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)

INPUT_PATH = os.path.join(PROJECT_ROOT, "assets", "profile", "photo-original.jpeg")
OUTPUT_PATH = os.path.join(PROJECT_ROOT, "assets", "profile", "photo-cv-round.png")
SIZE = 400


def crop_to_centered_square(img: Image.Image) -> Image.Image:
    w, h = img.size
    side = min(w, h)
    left = (w - side) // 2
    top = (h - side) // 2
    return img.crop((left, top, left + side, top + side))


def apply_circular_mask(img: Image.Image) -> Image.Image:
    img = img.convert("RGBA")
    mask = Image.new("L", img.size, 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, img.size[0], img.size[1]), fill=255)
    result = Image.new("RGBA", img.size, (0, 0, 0, 0))
    result.paste(img, mask=mask)
    return result


def main():
    if not os.path.isfile(INPUT_PATH):
        print(f"Error: Input file not found: {INPUT_PATH}")
        print("Place the original photo at:")
        print(f"  assets/profile/photo-original.jpeg")
        sys.exit(1)

    print(f"Input:  {INPUT_PATH}")

    img = Image.open(INPUT_PATH)
    img = crop_to_centered_square(img)
    img = img.resize((SIZE, SIZE), Image.LANCZOS)
    img = apply_circular_mask(img)

    os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
    img.save(OUTPUT_PATH, "PNG")

    print(f"Output: {OUTPUT_PATH}")
    print("Done.")


if __name__ == "__main__":
    main()
