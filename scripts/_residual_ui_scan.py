# -*- coding: utf-8 -*-
"""Quick residual English UI scan across main pages."""
from pathlib import Path
import re

root = Path(__file__).resolve().parents[1]
pages = [
    "index.html",
    "News.html",
    "Members.html",
    "Projects.html",
    "Datasets.html",
    "Publications.html",
    "Professor.html",
    "Heroface_Restoration.html",
    "Foren_ins.html",
    "Gallery.html",
]

# Common UI English that should likely be translated if untagged
patterns = [
    r"\b(Back to|Read more|Learn more|View all|Show more|Load more|Search|Filter|All|Close|Open|Submit|Download|Contact|Join Us|Featured|About|Home|News|Members|Projects|Datasets|Publications|Professor|Gallery)\b",
]

for page in pages:
    p = root / page
    if not p.exists():
        print("MISSING PAGE", page)
        continue
    html = p.read_text(encoding="utf-8")
    body = re.sub(r"<script[\s\S]*?</script>", "", html, flags=re.I)
    body = re.sub(r"<style[\s\S]*?</style>", "", body, flags=re.I)
    hits = []
    for m in re.finditer(r"<([a-zA-Z0-9]+)([^>]*)>([^<]{3,120})", body):
        tag, attrs, text = m.group(1).lower(), m.group(2), " ".join(m.group(3).split())
        if "data-i18n" in attrs:
            continue
        if tag in {"script", "style", "code", "pre", "svg", "path", "meta", "link"}:
            continue
        if not re.search(r"[A-Za-z]{4,}", text):
            continue
        # skip pure conference acronyms / years
        if re.fullmatch(r"[A-Z0-9 /&().\-–—,]+", text):
            continue
        if re.search(patterns[0], text, re.I) or re.search(
            r"\b(Welcome|Looking for|Upload|Drag|Drop|Select|Reset|Locked|Snapshot|Workshop|Award|Editor|University|College|Department)\b",
            text,
            re.I,
        ):
            hits.append(f"<{tag}> {text[:100]}")
    print(f"=== {page}: {len(hits)} suspects ===")
    for h in hits[:25]:
        print(" ", h)

# Verify i18n JS field helpers for news/gallery
news_js = (root / "js" / "news.js").read_text(encoding="utf-8")
print("news uses text_ko/field:", "text_ko" in news_js or "DashI18n.field" in news_js)
img_usage = ""
for f in ["js/common.js", "js/gallery.js", "Gallery.html", "index.html"]:
    fp = root / f
    if fp.exists() and "desc_ko" in fp.read_text(encoding="utf-8"):
        img_usage += f + " "
print("desc_ko referenced in:", img_usage or "(check imagedata consumers)")

# Foren langchange
foren = (root / "Foren_ins.html").read_text(encoding="utf-8")
print("foren dash:langchange:", "dash:langchange" in foren)
print("foren updateStatusUI:", "updateStatusUI" in foren)

# Dictionary key existence for newly added
i18n = (root / "js" / "i18n.js").read_text(encoding="utf-8")
for k in ["prof.org.skku", "prof.ansdHtml", "prof.aimmHtml", "prof.award7", "poster"]:
    print(k, "present" if f"'{k}'" in i18n or f'"{k}"' in i18n else "ABSENT")
