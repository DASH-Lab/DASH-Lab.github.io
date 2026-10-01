# -*- coding: utf-8 -*-
from pathlib import Path

root = Path(__file__).resolve().parents[1]
i18n = (root / "js" / "i18n.js").read_text(encoding="utf-8")
keys = [
    "datasets.inspector.body",
    "members.modal.body",
    "prof.org.skku",
    "prof.ansdHtml",
    "prof.aimmHtml",
    "prof.award7",
    "foren.source",
    "prof.chair1",
]
for k in keys:
    print(k, "OK" if ("'%s':" % k) in i18n else "MISSING")

checks = [
    ("Members.html", 'data-i18n="members.modal.body"'),
    ("Datasets.html", 'data-i18n-html="datasets.inspector.body"'),
    ("Professor.html", 'data-i18n="prof.org.skku"'),
    ("Professor.html", 'data-i18n-html="prof.ansdHtml"'),
    ("index.html", "localizePoster"),
    ("index.html", "dash:langchange"),
]
for page, needle in checks:
    t = (root / page).read_text(encoding="utf-8")
    print(page, needle[:40], "OK" if needle in t else "MISSING")

news = (root / "js" / "newsdata.js").read_text(encoding="utf-8")
img = (root / "js" / "imagedata.js").read_text(encoding="utf-8")
print("news text_ko", news.count("text_ko:"))
print("gallery desc_ko", img.count("desc_ko:"))
