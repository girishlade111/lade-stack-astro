"""Temporary post-build SEO verification for Fixes 1-6."""
import pathlib

dist = pathlib.Path(__file__).resolve().parent.parent / "dist"
b1 = (dist / "blog" / "index.html").read_text(encoding="utf-8")
b2 = (dist / "blog" / "2" / "index.html").read_text(encoding="utf-8")
b3 = (dist / "blog" / "3" / "index.html").read_text(encoding="utf-8")
post = (dist / "blog" / "building-ai-powered-code-review-systems" / "index.html").read_text(encoding="utf-8")
zh = (dist / "zh" / "index.html").read_text(encoding="utf-8")
zh_app = (dist / "zh" / "ai-code-viewer-ai" / "index.html").read_text(encoding="utf-8")
en_app = (dist / "ai-code-viewer-ai" / "index.html").read_text(encoding="utf-8")

checks = [
    ("b1: no hreflang", "hreflang" not in b1),
    ("b1: self canonical", '<link rel="canonical" href="https://ladestack.in/blog"' in b1),
    ("b1: rel=next to /blog/2", 'rel="next" href="https://ladestack.in/blog/2"' in b1),
    ("b1: no rel=prev", 'rel="prev"' not in b1),
    ("b1: pagination UI with /blog/3", 'aria-label="Blog pagination"' in b1 and "/blog/3" in b1),
    ("b1: no google fonts refs", "fonts.googleapis.com" not in b1 and "fonts.gstatic.com" not in b1),
    ("b1: no lang switcher", "data-lang-switcher" not in b1),
    ("b1: 12 article cards", b1.count("article-card group") == 12),
    ("b2: prev+next links", 'rel="prev" href="https://ladestack.in/blog"' in b2 and 'rel="next" href="https://ladestack.in/blog/3"' in b2),
    ("b2: 12 article cards", b2.count("article-card group") == 12),
    ("b3: 3 article cards (27 total)", b3.count("article-card group") == 3),
    ("post: no hreflang", "hreflang" not in post),
    ("post: self canonical", "canonical\" href=\"https://ladestack.in/blog/building-ai-powered-code-review-systems\"" in post),
    ("post: related tool card", "Related Tool" in post and "CodeEnhance AI" in post),
    ("post: no google fonts refs", "fonts.googleapis.com" not in post),
    ("post: related posts section", "/blog/building-rag-applications-vector-databases" in post or "/blog/future-of-ai-in-software-development" in post),
    ("post: no Updated line (no updatedDate set)", "Updated " not in post),
    ("zh home: canonical /blog link", 'href="/blog"' in zh),
    ("zh home: no /zh/blog link", "/zh/blog" not in zh),
    ("zh app: from-the-blog canonical links", "/blog/building-rag-applications-vector-databases" in zh_app or "/blog/future-of-ai-in-software-development" in zh_app),
    ("en app: from-the-blog block", "From the blog" in en_app),
    ("en app: no google fonts refs", "fonts.googleapis.com" not in en_app),
]

failed = 0
for name, ok in checks:
    print(("PASS" if ok else "FAIL"), "-", name)
    if not ok:
        failed += 1
print(f"{len(checks) - failed}/{len(checks)} passed")
raise SystemExit(1 if failed else 0)
