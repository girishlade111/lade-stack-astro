import pathlib, re

pages = ["support", "ru/support", "zh/support", "ja/support"]
for p in pages:
    html = pathlib.Path(f"dist/{p}/index.html").read_text(encoding="utf-8")
    m = re.search(r"(?s)<main.*?</main>", html)
    main = m.group(0) if m else ""
    print(f"--- dist/{p} <main> ---")
    for tok in [
        "feature-card-dark",
        "bg-canvas-light",
        "group-open:rotate-180",
        "mono-eyebrow",
        "display-md text-on-primary",
        "heading-md text-on-primary",
        "btn-primary",
        "data-reveal",
        "lift-on-hover",
        "marketing-section-dark",
        "max-w-[1640px]",
    ]:
        print(f"  HAS {tok}: {main.count(tok)}")
    for tok in [
        "rounded-2xl",
        "rounded-3xl",
        "bg-card",
        "border-border",
        "text-foreground",
        "font-serif",
        "text-primary",
        "open:border-primary",
        "max-w-7xl",
    ]:
        print(f"  OFF-SYSTEM {tok}: {main.count(tok)}")
