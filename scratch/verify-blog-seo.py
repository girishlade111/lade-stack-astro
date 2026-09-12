import pathlib, re, html as htmllib

pages = {
    "blog (en)": "blog/index.html",
    "zh/blog": "zh/blog/index.html",
    "ru/blog": "ru/blog/index.html",
    "ja/blog": "ja/blog/index.html",
}

for label, rel in pages.items():
    raw = pathlib.Path(f"dist/{rel}").read_text(encoding="utf-8")
    title = re.search(r"<title>(.*?)</title>", raw, re.S)
    desc = re.search(r'<meta name="description" content="(.*?)"', raw, re.S)
    print(f"--- dist/{label} ---")
    print("  title:", htmllib.unescape(title.group(1)) if title else "MISSING")
    print("  meta description:", htmllib.unescape(desc.group(1)[:120]) + "..." if desc else "MISSING")
    print("  BreadcrumbList count:", raw.count('"@type":"BreadcrumbList"') + raw.count('"@type": "BreadcrumbList"'))
    print("  Blog inLanguage:", re.findall(r'inLanguage.{0,12}', raw)[:3])
    pills = re.search(r'id="category-pills"[^>]*aria-label="([^"]*)"', raw)
    print("  pills aria-label:", pills.group(1) if pills else "MISSING")
    one = re.search(r'data-count-one="([^"]*)"', raw)
    other = re.search(r'data-count-other="([^"]*)"', raw)
    print("  count-one:", one.group(1) if one else "MISSING")
    print("  count-other:", other.group(1) if other else "MISSING")
    print("  counter script uses data-count:", "data-count-other" in raw and "getAttribute" in raw)
