# -*- coding: utf-8 -*-
import re
import pathlib

root = pathlib.Path(__file__).resolve().parents[1]

# --- News ---
news = (root / "js" / "newsdata.js").read_text(encoding="utf-8")
# Split on top-level objects heuristically
parts = re.split(r"\n\s*\{", news)
missing_news = []
has_text_ko = 0
has_text = 0
for p in parts:
    if "text:" not in p:
        continue
    has_text += 1
    if "text_ko:" in p:
        has_text_ko += 1
    else:
        m = re.search(r'text:\s*"((?:\\.|[^"\\])*)"', p) or re.search(
            r"text:\s*'((?:\\.|[^'\\])*)'", p
        )
        missing_news.append((m.group(1)[:100] if m else p[:100]))
print(f"NEWS: text={has_text} text_ko={has_text_ko} missing={len(missing_news)}")
for x in missing_news[:15]:
    print("  MISSING:", x)

# Check text_ko still mostly English (heuristic: few Hangul)
en_ko = []
for m in re.finditer(r'text_ko:\s*"((?:\\.|[^"\\])*)"', news):
    s = m.group(1)
    hangul = len(re.findall(r"[\uac00-\ud7a3]", s))
    latin = len(re.findall(r"[A-Za-z]", s))
    if hangul < 3 and latin > 20:
        en_ko.append(s[:100])
print(f"NEWS: text_ko looking English-heavy: {len(en_ko)}")
for x in en_ko[:20]:
    print("  EN-KO:", x)

# --- Gallery ---
img = (root / "js" / "imagedata.js").read_text(encoding="utf-8")
blocks = re.split(r"\},\s*\{", img)
no_ko = []
same_ko = []
for b in blocks:
    if "desc:" not in b:
        continue
    dm = re.search(r'desc:\s*"((?:\\.|[^"\\])*)"', b) or re.search(
        r"desc:\s*'((?:\\.|[^'\\])*)'", b
    )
    km = re.search(r'desc_ko:\s*"((?:\\.|[^"\\])*)"', b) or re.search(
        r"desc_ko:\s*'((?:\\.|[^'\\])*)'", b
    )
    if not dm:
        continue
    desc = dm.group(1)
    if not km:
        no_ko.append(desc[:100])
    else:
        dko = km.group(1)
        if dko == desc and re.search(r"[A-Za-z]{4,}", desc):
            same_ko.append(desc[:100])
print(f"GALLERY: missing desc_ko={len(no_ko)} same-as-en={len(same_ko)}")
for x in no_ko[:15]:
    print("  NO-KO:", x)
for x in same_ko[:15]:
    print("  SAME:", x)

# --- Professor HTML: visible English without data-i18n ---
prof = (root / "Professor.html").read_text(encoding="utf-8")
# Strip scripts
prof_body = re.sub(r"<script[\s\S]*?</script>", "", prof, flags=re.I)
# Find text nodes-ish in tags without data-i18n on same opening tag
suspects = []
for m in re.finditer(
    r"<([a-zA-Z0-9]+)([^>]*)>([^<]{12,})", prof_body
):
    tag, attrs, text = m.group(1), m.group(2), m.group(3).strip()
    if "data-i18n" in attrs:
        continue
    if tag.lower() in {"script", "style", "code", "pre", "a"} and "href" in attrs:
        pass
    # skip if mostly not latin
    if not re.search(r"[A-Za-z]{4,}", text):
        continue
    # skip short or punctuation-only leftovers
    if re.search(
        r"\b(Professor|Award|Teaching|Service|University|Conference|Workshop|Best Paper|Invited|Associate|Assistant|PhD|M\.S|B\.S|Courses|Professional)\b",
        text,
        re.I,
    ):
        suspects.append((tag, text[:120]))
print(f"PROFESSOR: suspect untagged EN snippets={len(suspects)}")
for t, x in suspects[:40]:
    print(f"  <{t}> {x}")

# --- Foren: hardcoded English strings in JS ---
foren = (root / "Foren_ins.html").read_text(encoding="utf-8")
for m in re.finditer(r'["\']([A-Za-z][^"\']{8,})["\']', foren):
    s = m.group(1)
    if any(
        k in s.lower()
        for k in (
            "original",
            "filter",
            "heat",
            "histogram",
            "ready",
            "upload",
            "select",
            "snapshot",
            "locked",
            "reset",
            "magnif",
            "standard",
            "guide",
            "source",
            "analysis",
            "drag",
        )
    ):
        # check if preceded by DashI18n nearby
        start = max(0, m.start() - 80)
        ctx = foren[start : m.end() + 20]
        if "DashI18n" not in ctx and "data-i18n" not in ctx:
            print("FOREN hard EN:", s[:80])

print("DONE")
