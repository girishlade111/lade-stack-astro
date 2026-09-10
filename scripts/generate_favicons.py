import os
from PIL import Image, ImageDraw

def create_favicon():
    # 512x512 master canvas
    size = 512
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Background squircle: canvas #0b0b0b with rounded corners
    bg_color = (11, 11, 11, 255) # #0b0b0b
    border_color = (33, 33, 33, 255) # #212121
    coral_brand = (243, 100, 88, 255) # #f36458
    white = (255, 255, 255, 255)

    radius = 110
    draw.rounded_rectangle([16, 16, size - 16, size - 16], radius=radius, fill=bg_color, outline=border_color, width=8)

    # Modern Architectural "L" and Stack Monogram
    # Vertical stem of L: x from 120 to 184 (width 64), y from 130 to 380
    draw.rounded_rectangle([128, 130, 192, 382], radius=16, fill=white)
    
    # Horizontal base of L: x from 128 to 330, y from 318 to 382 (height 64)
    draw.rounded_rectangle([128, 318, 340, 382], radius=16, fill=white)

    # Second stack bar (subtle technical accent, showing "stack" architecture)
    # x from 220 to 384, y from 224 to 288 (height 64) in white
    draw.rounded_rectangle([228, 224, 384, 288], radius=16, fill=(255, 255, 255, 240))

    # The Iconic Coral-Red Brand Dot in top right
    # center at (344, 150), radius 48 (diameter 96)
    dot_x, dot_y = 344, 150
    dot_r = 46
    draw.ellipse([dot_x - dot_r, dot_y - dot_r, dot_x + dot_r, dot_y + dot_r], fill=coral_brand)

    # Save master 512x512 PNG
    master_png_path = "public/icon-512.png"
    img.save(master_png_path, "PNG")

    # Save apple-touch-icon 180x180
    apple_icon = img.resize((180, 180), Image.Resampling.LANCZOS)
    apple_icon.save("public/apple-touch-icon.png", "PNG")

    # Save 32x32 and 192x192 PNGs
    img.resize((192, 192), Image.Resampling.LANCZOS).save("public/icon-192.png", "PNG")
    img.resize((32, 32), Image.Resampling.LANCZOS).save("public/favicon-32x32.png", "PNG")
    img.resize((16, 16), Image.Resampling.LANCZOS).save("public/favicon-16x16.png", "PNG")

    # Generate true multi-resolution .ico containing 16, 32, 48, 64, 128, 256
    ico_sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
    img.save("public/favicon.ico", format="ICO", sizes=ico_sizes)
    print("Favicon generation successful!")

if __name__ == "__main__":
    create_favicon()
