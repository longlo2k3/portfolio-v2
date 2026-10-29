"""Generate a compact inventory of the source media without changing it."""

from pathlib import Path
from PIL import Image
import struct

ROOT = Path(__file__).resolve().parents[1]
MEDIA = ROOT / "img"
OUT = ROOT / "docs" / "asset-inventory.md"
SELECTED = {
    "Gart/File_000.png": "Journey: GART workshop",
    "Gart/IMG_6982.JPG": "Journey: GART build",
    "FTC trong nuoc/1K1V2Q6AK_5836GL.JPG": "Journey: FTC Vietnam",
    "FTC quoc te/1.jpg": "Journey: FTC Worlds",
    "FTC quoc te/_T3A1874.jpg": "Journey: FTC robot",
    "Gart Camp 2025/File_000.png": "Journey: GART Camp",
    "Gart expo 2025/IMG_6986.JPG": "Journey: GART Expo",
    "Wico/Wico/File_000(3).png": "Case study: EnviroTrack/WICO",
    "Wico/Wico/IMG_6964.JPG": "Case study: EnviroTrack/WICO",
    "Conrad/File_000.png": "Case study: Conrad event",
    "Conrad/IMG_6991.JPG": "Case study: Conrad event",
    "Hoithao_HCM/IMG_5639.JPG": "Diving Deeper: GTSD conference",
    "Stembridge/File_000(2).png": "Social Impact: Stembridge fair",
    "Stembridge/Trường Xã Đàn/IMG_7172.JPG": "Social Impact: Xa Đàn activities",
    "buồng lái/1K1MLI9VP_5836GL.jpg": "Personal Corner: cockpit build",
}


def heic_dimensions(data: bytes):
    candidates = []
    pos = 0
    while (pos := data.find(b"ispe", pos)) != -1:
        if pos + 16 <= len(data):
            width, height = struct.unpack_from(">II", data, pos + 8)
            if 100 <= width <= 20000 and 100 <= height <= 20000:
                candidates.append((width, height))
        pos += 4
    return max(candidates, key=lambda d: d[0] * d[1]) if candidates else None


def movie_metadata(data: bytes):
    duration = None
    pos = data.find(b"mvhd")
    if pos != -1:
        payload = pos + 4
        version = data[payload]
        if version == 0 and payload + 20 <= len(data):
            scale, ticks = struct.unpack_from(">II", data, payload + 12)
        elif version == 1 and payload + 32 <= len(data):
            scale = struct.unpack_from(">I", data, payload + 20)[0]
            ticks = struct.unpack_from(">Q", data, payload + 24)[0]
        else:
            scale = ticks = 0
        if scale:
            duration = ticks / scale

    dimensions = []
    pos = 0
    while (pos := data.find(b"tkhd", pos)) != -1:
        if pos >= 4:
            size = struct.unpack_from(">I", data, pos - 4)[0]
            end = pos - 4 + size
            if 32 <= size and end <= len(data):
                width, height = struct.unpack_from(">II", data, end - 8)
                pair = (width >> 16, height >> 16)
                if pair[0] and pair[1]:
                    dimensions.append(pair)
        pos += 4
    dims = max(dimensions, key=lambda d: d[0] * d[1]) if dimensions else None
    return dims, duration


files = sorted(MEDIA.rglob("*"), key=lambda p: str(p.relative_to(MEDIA)).casefold())
rows = []
for path in files:
    if not path.is_file():
        continue
    ext = path.suffix.lower()
    details = "unavailable"
    try:
        if ext in (".jpg", ".jpeg", ".png"):
            with Image.open(path) as image:
                details = f"{image.width} × {image.height}"
        elif ext == ".heic":
            dims = heic_dimensions(path.read_bytes())
            details = f"{dims[0]} × {dims[1]}" if dims else "unavailable"
        elif ext in (".mp4", ".mov"):
            dims, duration = movie_metadata(path.read_bytes())
            detail_parts = []
            if dims:
                detail_parts.append(f"{dims[0]} × {dims[1]}")
            if duration is not None:
                detail_parts.append(f"{duration:.1f} s")
            details = ", ".join(detail_parts) or "unavailable"
    except Exception as error:
        details = f"unavailable ({type(error).__name__})"
    rel = path.relative_to(MEDIA).as_posix()
    rows.append((rel, ext.lstrip(".").upper(), details, path.stat().st_size))

lines = [
    "# Source media inventory",
    "",
    "Generated from `img/` during Phase 0. Dimensions are encoded pixel dimensions; video duration is rounded to 0.1 second. The source files were not changed.",
    "",
    f"Total: **{len(rows)} files**, **{sum(row[3] for row in rows) / 1024 ** 3:.2f} GiB**.",
    "",
    "Phase 0 selection is provisional. `Selected` means planned for the initial page; `Unselected` files remain available in `img/` for later curation.",
    "",
    "| File under `img/` | Type | Dimensions / duration | Size (MiB) | Initial use |",
    "| --- | --- | --- | ---: | --- |",
]
for rel, file_type, details, size in rows:
    usage = SELECTED.get(rel, "Unselected")
    lines.append(f"| `{rel}` | {file_type} | {details} | {size / 1024 ** 2:.2f} | {usage} |")
OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text("\n".join(lines) + "\n", encoding="utf-8")
print(f"Wrote {OUT} with {len(rows)} files")
