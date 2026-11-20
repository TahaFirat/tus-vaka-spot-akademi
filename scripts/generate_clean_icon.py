"""Generate bright, vibrant, Swiss-minimalist non-AI vector app icons (RGB, zero alpha)."""
import math
import os
from PIL import Image, ImageDraw, ImageFilter

SIZE = 4096
OUT_IOS = r"c:\Users\Taha\Desktop\tussoru\ios\App\App\Assets.xcassets\AppIcon.appiconset\AppIcon-512@2x.png"
OUT_512 = r"c:\Users\Taha\Desktop\tussoru\public\icon-512.png"
OUT_192 = r"c:\Users\Taha\Desktop\tussoru\public\icon-192.png"


def make_diagonal_gradient(size: int) -> Image.Image:
    # Build smooth gradient at 512x512 then bicubic upscale for C-speed & zero banding
    g = 512
    base = Image.new("RGB", (g, g))
    px = base.load()
    c1 = (208, 255, 242)  # Luminous mint daylight
    c2 = (52, 224, 190)   # Fresh turquoise
    c3 = (14, 174, 130)   # Vibrant emerald
    for y in range(g):
        for x in range(g):
            t = (0.58 * x + 0.42 * y) / g
            if t < 0.5:
                k = t * 2.0
                r = int(c1[0] + (c2[0] - c1[0]) * k)
                gr = int(c1[1] + (c2[1] - c1[1]) * k)
                b = int(c1[2] + (c2[2] - c1[2]) * k)
            else:
                k = (t - 0.5) * 2.0
                r = int(c2[0] + (c3[0] - c2[0]) * k)
                gr = int(c2[1] + (c3[1] - c2[1]) * k)
                b = int(c2[2] + (c3[2] - c2[2]) * k)
            # Subtle warm sunlight corner bloom top-left
            dx = (x - g * 0.18) / (g * 0.72)
            dy = (y - g * 0.14) / (g * 0.72)
            glow = max(0.0, 1.0 - (dx * dx + dy * dy)) ** 2 * 0.22
            r = min(255, int(r + (255 - r) * glow))
            gr = min(255, int(gr + (255 - gr) * glow))
            b = min(255, int(b + (255 - b) * glow))
            px[x, y] = (r, gr, b)
    return base.resize((size, size), Image.Resampling.BICUBIC).convert("RGBA")


def draw_thick_polyline(draw: ImageDraw.ImageDraw, pts, width: int, color):
    if len(pts) < 2:
        return
    r = width // 2
    draw.line(pts, fill=color, width=width, joint="curve")
    for x, y in pts:
        draw.ellipse((x - r, y - r, x + r, y + r), fill=color)


def cubic_bezier(p0, p1, p2, p3, steps=80):
    pts = []
    for i in range(steps + 1):
        t = i / steps
        u = 1.0 - t
        x = (u**3) * p0[0] + 3 * (u**2) * t * p1[0] + 3 * u * (t**2) * p2[0] + (t**3) * p3[0]
        y = (u**3) * p0[1] + 3 * (u**2) * t * p1[1] + 3 * u * (t**2) * p2[1] + (t**3) * p3[1]
        pts.append((x, y))
    return pts


def build_icon():
    canvas = make_diagonal_gradient(SIZE)

    # Subtle crisp geometric background ring motif (ultra-light 6% white hairline)
    ring_layer = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    rd = ImageDraw.Draw(ring_layer)
    rd.ellipse((-500, -500, SIZE - 1400, SIZE - 1400), outline=(255, 255, 255, 42), width=28)
    rd.ellipse((1450, 1450, SIZE + 500, SIZE + 500), outline=(255, 255, 255, 34), width=28)
    canvas = Image.alpha_composite(canvas, ring_layer)

    # Crisp elevated white squircle card in center (clean tactile Apple aesthetic)
    card_margin = 690
    card_rect = (card_margin, card_margin, SIZE - card_margin, SIZE - card_margin)
    card_radius = 680

    shadow_layer = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow_layer)
    sd.rounded_rectangle(
        (card_rect[0], card_rect[1] + 64, card_rect[2], card_rect[3] + 64),
        radius=card_radius,
        fill=(6, 95, 70, 56),
    )
    shadow_layer = shadow_layer.filter(ImageFilter.GaussianBlur(radius=90))
    canvas = Image.alpha_composite(canvas, shadow_layer)

    card_layer = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    cd = ImageDraw.Draw(card_layer)
    cd.rounded_rectangle(card_rect, radius=card_radius, fill=(255, 255, 255, 250))
    canvas = Image.alpha_composite(canvas, card_layer)

    # Vector Emblem inside white card: Minimalist Stethoscope + vibrant Coral Pulse Core + Cross accent
    fg = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    d = ImageDraw.Draw(fg)

    emerald = (5, 150, 105, 255)      # #059669
    emerald_dark = (4, 120, 87, 255)  # #047857
    teal_accent = (20, 184, 166, 255) # #14B8A6
    coral = (255, 107, 74, 255)       # #FF6B4A
    stroke = 185

    # Optically centered stethoscope assembly inside white card
    sx = -110
    left_ear = (1330 + sx, 1170)
    right_ear = (2290 + sx, 1170)
    junction = (1810 + sx, 2310)

    left_curve = cubic_bezier(left_ear, (1240 + sx, 1800), (1440 + sx, 2250), junction, steps=70)
    right_curve = cubic_bezier(right_ear, (2380 + sx, 1800), (2180 + sx, 2250), junction, steps=70)

    # Tubing curve from Y-junction down and sweeping gracefully right to chestpiece
    chest_center = (2775 + sx, 2340)
    tube_curve = cubic_bezier(
        junction,
        (1810 + sx, 3150),
        (2775 + sx, 3150),
        (chest_center[0], chest_center[1] + 190),
        steps=90,
    )

    draw_thick_polyline(d, left_curve, stroke, emerald)
    draw_thick_polyline(d, right_curve, stroke, emerald)
    draw_thick_polyline(d, tube_curve, stroke, teal_accent)

    # Ear tips
    tip_r = 128
    for ex, ey in [(left_ear[0] + 65, left_ear[1] - 25), (right_ear[0] - 65, right_ear[1] - 25)]:
        d.ellipse((ex - tip_r, ey - tip_r, ex + tip_r, ey + tip_r), fill=emerald_dark)

    # Clean stethoscope chestpiece (double concentric rings + lively coral core)
    cx, cy = chest_center
    outer_r = 310
    inner_white_r = 195
    core_r = 108
    d.ellipse((cx - outer_r, cy - outer_r, cx + outer_r, cy + outer_r), fill=emerald)
    d.ellipse((cx - inner_white_r, cy - inner_white_r, cx + inner_white_r, cy + inner_white_r), fill=(255, 255, 255, 255))
    d.ellipse((cx - core_r, cy - core_r, cx + core_r, cy + core_r), fill=coral)

    # Minimal crisp Swiss medical cross centered in top-inside loop of stethoscope
    mx, my = 1810 + sx, 1610
    arm_w = 136
    arm_l = 350
    d.rounded_rectangle((mx - arm_w // 2, my - arm_l // 2, mx + arm_w // 2, my + arm_l // 2), radius=52, fill=coral)
    d.rounded_rectangle((mx - arm_l // 2, my - arm_w // 2, mx + arm_l // 2, my + arm_w // 2), radius=52, fill=coral)

    canvas = Image.alpha_composite(canvas, fg)

    # Convert strictly to RGB (NO alpha channel allowed on App Store 1024x1024 AppIcon)
    rgb = Image.new("RGB", (SIZE, SIZE), (255, 255, 255))
    rgb.paste(canvas, mask=canvas.split()[3])

    for path, dim in [(OUT_IOS, 1024), (OUT_512, 512), (OUT_192, 192)]:
        os.makedirs(os.path.dirname(path), exist_ok=True)
        out_img = rgb.resize((dim, dim), Image.Resampling.LANCZOS).convert("RGB")
        out_img.save(path, format="PNG", optimize=True)
        check = Image.open(path)
        assert check.size == (dim, dim), f"Bad size {check.size} on {path}"
        assert check.mode == "RGB", f"Alpha/non-RGB mode {check.mode} on {path}"
        print(f"OK {path}: {check.size} {check.mode} ({os.path.getsize(path)} bytes)")


if __name__ == "__main__":
    build_icon()
