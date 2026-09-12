---
title: "Your Post Title"
description: "..."
pubDate: 2026-09-15
coverImage: "/blog-covers/your-image-name.svg"
category: "..."
readTime: 8
---

## Body content — text only, no image tags here

Rules to keep following:

Cover image only — one hero image per post, referenced via coverImage frontmatter field. Don't embed extra images inside the article body via markdown ![](<>) syntax — if a post genuinely needs an inline diagram/screenshot, that needs a small code change (a custom remark/rehype step or an <Image /> wrapped **MDX** component), not plain markdown — flag it to me before doing that, since your current architecture deliberately avoids inline body images. File location: drop the actual image file in public/blog-covers/, then reference it by that exact filename in coverImage — always double-check the filename matches exactly (this typo is proof it's easy to typo-drift). Format: prefer .svg for illustrations/diagrams (what you're already using — scales infinitely, tiny file size). For photos/screenshots, use .webp or .avif directly if you have them, or a .png/.jpg — Astro's <Image /> will still re-optimize it at build time regardless of source format. One cover image per post is reused across **ALL** 7 locale translations of that post (same filename referenced in each locale's frontmatter) — you don't need 7 separate image files per post, just 7 correct references to the same file. Good for consistency, also why the typo only broke 1 of 7 — the other 6 pointed correctly.
