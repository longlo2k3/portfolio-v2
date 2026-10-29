"""Make a representative contact sheet for reviewing local JPEG/PNG assets."""

from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageOps
import random

root = Path(__file__).resolve().parents[1]
folders = [p for p in (root / "img").rglob("*") if p.is_dir()]
items = []
for folder in sorted(folders, key=lambda p: str(p).casefold()):
    pictures = sorted((p for p in folder.iterdir() if p.suffix.lower() in (".jpg", ".jpeg", ".png")), key=lambda p: p.name.casefold())
    if not pictures:
        continue
    rng = random.Random(folder.as_posix())
    chosen = pictures[:2] + rng.sample(pictures[2:], min(2, max(0, len(pictures) - 2)))
    items.extend(chosen)

cell_w, cell_h, columns = 260, 205, 4
rows = (len(items) + columns - 1) // columns
sheet = Image.new("RGB", (cell_w * columns, cell_h * rows), "#f4f1eb")
draw = ImageDraw.Draw(sheet)
font = ImageFont.load_default()
for index, path in enumerate(items):
    x, y = index % columns * cell_w, index // columns * cell_h
    with Image.open(path) as source:
        image = ImageOps.exif_transpose(source).convert("RGB")
        image.thumbnail((cell_w - 16, cell_h - 48))
        sheet.paste(image, (x + (cell_w - image.width) // 2, y + 4 + (cell_h - 48 - image.height) // 2))
    label = f"{path.parent.relative_to(root / 'img').as_posix()}/{path.name}"
    draw.text((x + 7, y + cell_h - 35), label[:38], fill="#1a1a1a", font=font)
out = root / "docs" / "contact-sheet.jpg"
sheet.save(out, quality=85)
print(f"Wrote {out} ({len(items)} samples)")
