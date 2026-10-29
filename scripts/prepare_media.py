"""Create web-ready copies of the Phase 0 image selection."""

from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "img"
DESTINATION = ROOT / "public" / "media"

SELECTED = {
    "Gart/File_000.png": "gart-workshop.webp",
    "Gart/IMG_6982.JPG": "gart-build.webp",
    "FTC trong nuoc/1K1V2Q6AK_5836GL.JPG": "ftc-vietnam.webp",
    "FTC quoc te/1.jpg": "ftc-worlds-team.webp",
    "FTC quoc te/_T3A1874.jpg": "ftc-worlds-robot.webp",
    "Gart Camp 2025/File_000.png": "gart-camp.webp",
    "Gart expo 2025/IMG_6986.JPG": "gart-expo.webp",
    "Wico/Wico/File_000(3).png": "envirotrack-wico-poster.webp",
    "Wico/Wico/IMG_6964.JPG": "envirotrack-wico-event.webp",
    "Conrad/File_000.png": "conrad-event.webp",
    "Conrad/IMG_6991.JPG": "conrad-team.webp",
    "Hoithao_HCM/IMG_5639.JPG": "gtsd-presentation.webp",
    "Stembridge/File_000(2).png": "stembridge-fair.webp",
    "Stembridge/Trường Xã Đàn/IMG_7172.JPG": "xa-dan-workshop.webp",
    "buồng lái/1K1MLI9VP_5836GL.jpg": "a320-cockpit-build.webp",
}

DESTINATION.mkdir(parents=True, exist_ok=True)
for source_name, output_name in SELECTED.items():
    with Image.open(SOURCE / source_name) as source:
        image = ImageOps.exif_transpose(source).convert("RGB")
        image.thumbnail((2200, 2200), Image.Resampling.LANCZOS)
        output = DESTINATION / output_name
        image.save(output, "WEBP", quality=84, method=6)
        print(f"{output_name}: {image.width}x{image.height}, {output.stat().st_size} bytes")
