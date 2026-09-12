import pathlib, re

pages = ["ai-code-viewer-ai", "ru/ai-code-viewer-ai", "zh/ai-code-viewer-ai", "ja/ai-code-viewer-ai"]
for p in pages:
    html = pathlib.Path(f"dist/{p}/index.html").read_text(encoding="utf-8")
    m = re.search(r"(?s)<main.*?</main>", html)
    main = m.group(0) if m else ""
    print(f"--- dist/{p} <main> ---")
    for tok in [
        "feature-card-dark",
        "mono-eyebrow",
        "display-md text-on-primary",
        "btn-brand",
        "btn-secondary-dark",
        "marketing-section-dark",
        "max-w-[1640px]",
        "data-reveal",
        "lift-on-hover",
        # mockup must survive
        "bg-red-400",
        "bg-amber-400",
        "bg-emerald-400",
        "button class=",  # code sample text
        "border-radius: 999px",  # code sample text
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
        "6E8F6A",
        "max-w-7xl",
        "inline-flex h-12 px-8",
    ]:
        print(f"  OFF-SYSTEM {tok}: {main.count(tok)}")
