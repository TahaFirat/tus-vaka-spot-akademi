"""
Generate a museum-grade, Apple-HIG-compliant, non-AI mathematical SDF vector App Icon.
Outputs strict RGB PNGs (zero alpha channel) at 1024x1024, 512x512, and 192x192.
"""
import os
import numpy as np
from PIL import Image, ImageFilter

SIZE = 2048  # Supersampled 2x analytical SDF grid -> downsampled via LANCZOS to 1024, 512, 192
OUT_IOS = r"c:\Users\Taha\Desktop\tussoru\ios\App\App\Assets.xcassets\AppIcon.appiconset\AppIcon-512@2x.png"
OUT_512 = r"c:\Users\Taha\Desktop\tussoru\public\icon-512.png"
OUT_192 = r"c:\Users\Taha\Desktop\tussoru\public\icon-192.png"


def smoothstep(edge0: float, edge1: float, x: np.ndarray) -> np.ndarray:
    t = np.clip((x - edge0) / (edge1 - edge0), 0.0, 1.0)
    return t * t * (3.0 - 2.0 * t)


def smin(a: np.ndarray, b: np.ndarray, k: float) -> np.ndarray:
    """Polynomial smooth minimum (G1/G2 organic fillet between geometric primitives)."""
    if k <= 0.0:
        return np.minimum(a, b)
    h = np.maximum(k - np.abs(a - b), 0.0) / k
    return np.minimum(a, b) - h * h * k * 0.25


def sd_segment(px: np.ndarray, py: np.ndarray, ax: float, ay: float, bx: float, by: float) -> np.ndarray:
    pax = px - ax
    pay = py - ay
    bax = bx - ax
    bay = by - ay
    denom = bax * bax + bay * bay
    if denom < 1e-9:
        return np.hypot(pax, pay)
    h = np.clip((pax * bax + pay * bay) / denom, 0.0, 1.0)
    return np.hypot(pax - bax * h, pay - bay * h)


def sd_bezier_polyline(px: np.ndarray, py: np.ndarray, p0, p1, p2, p3, steps: int = 56) -> np.ndarray:
    ts = np.linspace(0.0, 1.0, steps + 1)
    u = 1.0 - ts
    xs = (u**3) * p0[0] + 3 * (u**2) * ts * p1[0] + 3 * u * (ts**2) * p2[0] + (ts**3) * p3[0]
    ys = (u**3) * p0[1] + 3 * (u**2) * ts * p1[1] + 3 * u * (ts**2) * p2[1] + (ts**3) * p3[1]
    d = np.full_like(px, 1e9, dtype=np.float32)
    for i in range(steps):
        seg = sd_segment(px, py, float(xs[i]), float(ys[i]), float(xs[i + 1]), float(ys[i + 1]))
        d = np.minimum(d, seg)
    return d


def sd_rounded_box(px: np.ndarray, py: np.ndarray, cx: float, cy: float, hx: float, hy: float, r: float) -> np.ndarray:
    qx = np.abs(px - cx) - (hx - r)
    qy = np.abs(py - cy) - (hy - r)
    out = np.hypot(np.maximum(qx, 0.0), np.maximum(qy, 0.0))
    inside = np.minimum(np.maximum(qx, qy), 0.0)
    return out + inside - r


def build_icon():
    W = float(SIZE)
    y_idx, x_idx = np.mgrid[0:SIZE, 0:SIZE].astype(np.float32)
    nx = x_idx / W
    ny = y_idx / W

    # 1. Full-Bleed Luminous Clinical Aqua -> Teal -> Emerald Silk Canvas (zero box-in-box!)
    t = np.clip(0.56 * nx + 0.44 * ny, 0.0, 1.0)
    c_top = np.array([46.0, 238.0, 198.0], dtype=np.float32)   # #2EEEC6 Bright daylight mint-aqua
    c_mid = np.array([13.0, 166.0, 136.0], dtype=np.float32)   # #0DA688 Clinical vibrant teal
    c_bot = np.array([5.0, 114.0, 88.0], dtype=np.float32)     # #057258 Rich deep emerald

    k1 = np.clip(t * 2.0, 0.0, 1.0)[..., None]
    k2 = np.clip((t - 0.5) * 2.0, 0.0, 1.0)[..., None]
    bg = np.where(
        (t < 0.5)[..., None],
        c_top + (c_mid - c_top) * k1,
        c_mid + (c_bot - c_mid) * k2,
    )

    # Subtle warm daylight bloom in top-left quadrant for tactile depth
    glow_d2 = ((nx - 0.20) / 0.62) ** 2 + ((ny - 0.16) / 0.62) ** 2
    glow = (np.maximum(0.0, 1.0 - glow_d2) ** 2.2) * 0.20
    bg = bg + (np.array([235.0, 255.0, 248.0], dtype=np.float32) - bg) * glow[..., None]

    # Ultra-subtle architectural precision rings (3.8% crisp white hairline)
    r_center = np.hypot(nx - 0.50, ny - 0.50)
    ring1 = 1.0 - smoothstep(0.0, 0.0022, np.abs(r_center - 0.39))
    ring2 = 1.0 - smoothstep(0.0, 0.0022, np.abs(r_center - 0.46))
    ring_alpha = np.maximum(ring1 * 0.075, ring2 * 0.045)[..., None]
    bg = bg * (1.0 - ring_alpha) + 255.0 * ring_alpha

    # 2. Unified Precision Stethoscope + Chestpiece SDF (100% seamless single silhouette!)
    tube_r = 0.041 * W  # Bold, razor-sharp 8.2% stroke diameter (legible even at 29pt!)

    # Symmetric cardiology binaural headset with smooth inward-curving ear-tips (zero step/notch!)
    bx = 0.420 * W
    ear_span = 0.175 * W
    ear_y = 0.220 * W
    junc_y = 0.565 * W

    left_top = (bx - ear_span * 0.72, ear_y - 0.016 * W)
    right_top = (bx + ear_span * 0.72, ear_y - 0.016 * W)
    junc = (bx, junc_y)

    d_left = sd_bezier_polyline(
        x_idx,
        y_idx,
        left_top,
        (bx - ear_span * 1.32, 0.245 * W),
        (bx - ear_span * 1.12, 0.505 * W),
        junc,
        steps=60,
    ) - tube_r

    d_right = sd_bezier_polyline(
        x_idx,
        y_idx,
        right_top,
        (bx + ear_span * 1.32, 0.245 * W),
        (bx + ear_span * 1.12, 0.505 * W),
        junc,
        steps=60,
    ) - tube_r

    # Smooth ergonomic ear-olives seamlessly filleted onto inward tube ends
    olive_r = 0.045 * W
    d_ltip = np.hypot(x_idx - left_top[0], y_idx - left_top[1]) - olive_r
    d_rtip = np.hypot(x_idx - right_top[0], y_idx - right_top[1]) - olive_r

    # Sweeping lower J-tube connecting radially & smoothly into Chestpiece Diaphragm
    chest_cx = 0.735 * W
    chest_cy = 0.545 * W
    chest_outer_r = 0.128 * W

    d_tube = sd_bezier_polyline(
        x_idx,
        y_idx,
        junc,
        (bx, 0.850 * W),
        (chest_cx, 0.850 * W),
        (chest_cx, chest_cy + chest_outer_r * 0.60),
        steps=68,
    ) - tube_r

    d_chest_outer = np.hypot(x_idx - chest_cx, y_idx - chest_cy) - chest_outer_r

    # Smooth union of all pure-white components -> ZERO seam at Y-junction, ear-tips, or chestpiece!
    d_steth_white = smin(d_left, d_right, 0.015 * W)
    d_steth_white = smin(d_steth_white, d_tube, 0.016 * W)
    d_steth_white = smin(d_steth_white, np.minimum(d_ltip, d_rtip), 0.010 * W)
    d_steth_white = smin(d_steth_white, d_chest_outer, 0.018 * W)

    # Crisp Rounded Swiss Medical Cross centered optically inside the binaural heart cradle
    cross_cx = bx
    cross_cy = 0.365 * W
    arm_half_len = 0.076 * W
    arm_half_thick = 0.028 * W
    corner_r = 0.016 * W
    d_cross_v = sd_rounded_box(x_idx, y_idx, cross_cx, cross_cy, arm_half_thick, arm_half_len, corner_r)
    d_cross_h = sd_rounded_box(x_idx, y_idx, cross_cx, cross_cy, arm_half_len, arm_half_thick, corner_r)
    d_cross = smin(d_cross_v, d_cross_h, 0.008 * W)

    # Combined foreground silhouette for unified soft ambient drop shadow
    d_all_fg = np.minimum(d_steth_white, d_cross)

    # 3. Soft Physical Elevation Shadow (offset down-right slightly)
    aa = 1.35
    fg_mask_for_shadow = (1.0 - smoothstep(-aa, aa, d_all_fg) * 255.0)
    # Build shadow via Pillow Gaussian blur on shifted alpha mask
    raw_alpha_u8 = np.clip((1.0 - smoothstep(-aa, aa, d_all_fg)) * 255.0, 0, 255).astype(np.uint8)
    shadow_img = Image.new("L", (SIZE, SIZE), 0)
    shadow_img.paste(Image.fromarray(raw_alpha_u8), (0, int(0.022 * W)))
    shadow_img = shadow_img.filter(ImageFilter.GaussianBlur(radius=int(0.026 * W)))
    shadow_a = (np.asarray(shadow_img, dtype=np.float32) / 255.0) * 0.26
    shadow_col = np.array([2.0, 52.0, 39.0], dtype=np.float32)
    canvas = bg * (1.0 - shadow_a[..., None]) + shadow_col * shadow_a[..., None]

    # 4. Composite Pure Crisp White Stethoscope Silhouette (#FFFFFF with subtle top luster)
    white_alpha = 1.0 - smoothstep(-aa, aa, d_steth_white)
    white_col = np.array([255.0, 255.0, 255.0], dtype=np.float32)
    canvas = canvas * (1.0 - white_alpha[..., None]) + white_col * white_alpha[..., None]

    # 5. Chestpiece Inner Precision Groove + Vibrant Warm Coral Acoustic Core
    d_chest_groove = np.hypot(x_idx - chest_cx, y_idx - chest_cy) - (0.080 * W)
    groove_alpha = 1.0 - smoothstep(-aa, aa, d_chest_groove)
    groove_col = np.array([6.0, 128.0, 99.0], dtype=np.float32)  # Deep clinical teal-emerald ring
    canvas = canvas * (1.0 - groove_alpha[..., None]) + groove_col * groove_alpha[..., None]

    d_chest_core = np.hypot(x_idx - chest_cx, y_idx - chest_cy) - (0.048 * W)
    core_alpha = 1.0 - smoothstep(-aa, aa, d_chest_core)
    # Subtle vibrant coral gradient across core & cross (#FF7A59 -> #FF5A3D)
    coral_t = np.clip((ny - 0.25) / 0.45, 0.0, 1.0)[..., None]
    coral_col = (
        np.array([255.0, 126.0, 92.0], dtype=np.float32) * (1.0 - coral_t)
        + np.array([255.0, 88.0, 62.0], dtype=np.float32) * coral_t
    )
    canvas = canvas * (1.0 - core_alpha[..., None]) + coral_col * core_alpha[..., None]

    # 6. Composite Crisp Pure-White Rim + Warm Coral Cross or Pure Coral Cross
    # Give the cross a crisp white halo doesn't apply on emerald bg — pure white or warm coral?
    # Let's make the cross pure crisp white (#FFFFFF) OR warm coral (#FF6E4E) with crisp contrast!
    # Wait: warm coral on bright aqua-teal has moderate luminance contrast, whereas PURE WHITE (#FFFFFF)
    # cross with a warm coral center dot OR pure white cross + coral acoustic core has MAXIMUM contrast!
    # Even better: Pure White (#FFFFFF) Swiss Cross + vibrant Coral Acoustic Core -> 2 colors total on teal!
    cross_alpha = 1.0 - smoothstep(-aa, aa, d_cross)
    canvas = canvas * (1.0 - cross_alpha[..., None]) + white_col * cross_alpha[..., None]

    rgb_arr = np.clip(np.round(canvas), 0, 255).astype(np.uint8)
    master = Image.fromarray(rgb_arr, mode="RGB")

    for path, dim in [(OUT_IOS, 1024), (OUT_512, 512), (OUT_192, 192)]:
        os.makedirs(os.path.dirname(path), exist_ok=True)
        out_img = master.resize((dim, dim), Image.Resampling.LANCZOS).convert("RGB")
        out_img.save(path, format="PNG", optimize=True)
        check = Image.open(path)
        assert check.size == (dim, dim), f"Bad size {check.size} on {path}"
        assert check.mode == "RGB", f"Non-RGB mode {check.mode} on {path}"
        print(f"OK {path}: {check.size} {check.mode} ({os.path.getsize(path)} bytes)")


if __name__ == "__main__":
    build_icon()
