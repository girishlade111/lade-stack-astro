"""Validate every application/ld+json block across dist/ HTML (Step 04/10 SEO audit)."""
import json
import re
import sys
from pathlib import Path

dist = Path(__file__).resolve().parent.parent / "dist"
pattern = re.compile(r'<script type="application/ld\+json">(.*?)</script>', re.S)
files, blocks, errors = 0, 0, []
for html_file in dist.rglob("*.html"):
    files += 1
    html = html_file.read_text(encoding="utf-8")
    for m in pattern.finditer(html):
        blocks += 1
        try:
            json.loads(m.group(1))
        except json.JSONDecodeError as e:
            errors.append(f"{html_file.relative_to(dist)}: {e}")
print(f"files: {files}, json-ld blocks: {blocks}, invalid: {len(errors)}")
for e in errors[:10]:
    print("INVALID:", e)
sys.exit(1 if errors else 0)
