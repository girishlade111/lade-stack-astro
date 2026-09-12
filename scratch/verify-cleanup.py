import pathlib, re


def main_of(rel):
    raw = pathlib.Path(f"dist/{rel}").read_text(encoding="utf-8")
    m = re.search(r"(?s)<main.*?</main>", raw)
    return m.group(0) if m else "", raw


checks = [
    # (dist page, token that MUST appear in <main>, tokens that MUST NOT appear)
    ("ru/docs/index.html", ["\u0414\u041e\u041a\u0423\u041c\u0415\u041d\u0422\u0410\u0426\u0418\u042f"], ["DOCUMENTATION", ">SECTIONS<", "SECTION 0"]),
    ("zh/apps/index.html", ["\u5de5\u5177\u5e93"], [">GALLERY<"]),
    ("tr/support/index.html", ["DESTEK"], [">SUPPORT<"]),
    ("ja/blog/index.html", ["\u30a4\u30f3\u30b5\u30a4\u30c8"], [">INSIGHTS<"]),
    ("ru/blog/index.html", ["\u041c\u0410\u0422\u0415\u0420\u0418\u0410\u041b\u042b"], [">INSIGHTS<"]),
]
def safe(s):
    return s.encode("ascii", "backslashreplace").decode("ascii")


ok = True
for rel, must, must_not in checks:
    main, _ = main_of(rel)
    for tok in must:
        hit = tok in main
        print(f"{rel}: HAS {safe(tok)!r}: {hit}")
        ok = ok and hit
    for tok in must_not:
        hit = tok in main
        print(f"{rel}: OFF {safe(tok)!r}: {not hit}")
        ok = ok and not hit

# switcher title translated on a localized page (header, full doc)
_, full_ru = main_of("ru/docs/index.html")
ru_title = "title=\"\u041d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u043d\u0430 \u044d\u0442\u043e\u043c \u044f\u0437\u044b\u043a\u0435\""
print("ru switcher title translated:", safe(ru_title), ru_title in full_ru)
print("ru hardcoded EN title gone:", "Not available in this language" not in full_ru)
# dead keys gone from sources
ui = pathlib.Path("src/i18n/ui.ts").read_text(encoding="utf-8")
print("dead statTools gone:", "statTools'" not in ui and "statUsers'" not in ui and "statFree'" not in ui)
print("spreads gone:", "...en," not in ui)
print("ALL OK:", ok)
