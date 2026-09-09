// Generates brand placeholder assets (Step 10). Run: python scripts/generate-assets.py
from PIL import Image, ImageDraw

SAGE = (110, 143, 106)
CHARCOAL = (28, 28, 28)
WARM = (245, 243, 235)
WHITE = (255, 255, 255)

def og_image(path, title, subtitle):
    img = Image.new("RGB", (1200, 630), CHARCOAL)
    d = ImageDraw.Draw(img)
    d.rectangle([60, 60, 1140, 570], outline=SAGE, width=6)
    d.rectangle([90, 90, 320, 320], fill=SAGE)
    d.text((130, 150), "L", fill=WHITE)
    d.text((400, 200), title, fill=WARM)
    d.text((400, 280), subtitle, fill=SAGE)
    d.text((90, 500), "ladestack.in  |  Free forever", fill=WARM)
    img.save(path)

def favicon(path):
    img = Image.new("RGBA", (64, 64), SAGE + (255,))
    d = ImageDraw.Draw(img)
    d.text((18, 8), "L", fill=WHITE)
    img.save(path)

og_image("public/og-image.png", "Lade Stack", "Build Smarter, Ship Faster")
og_image("public/AIcode.png", "CodeEnhance AI", "AI Frontend Development Tool")
favicon("public/favicon.ico")
print("assets written")
