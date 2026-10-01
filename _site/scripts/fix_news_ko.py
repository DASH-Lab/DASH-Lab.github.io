# -*- coding: utf-8 -*-
from pathlib import Path
import re

path = Path('js/newsdata.js')
text = path.read_text(encoding='utf-8')

# Find text_ko values that still contain long English phrases (heuristic)
issues = []
for m in re.finditer(r"text_ko:\s*'((?:\\'|[^'])*)'", text):
    ko = m.group(1).replace("\\'", "'")
    # if still has common English leftovers after Korean verb endings
    if re.search(r'\b(accepted|paper track|Congrats|Organizing|Invited|Gave a|Won the|Benchmark and Dataset)\b', ko, re.I):
        # allow if mostly hangul already and only venue names
        hangul = len(re.findall(r'[\uAC00-\uD7A3]', ko))
        if hangul < 10 or 'Benchmark and Dataset' in ko or 'paper track' in ko.lower():
            issues.append(ko[:140])

print('suspicious text_ko count', len(issues))
for i in issues[:30]:
    print('-', i)
    print()

# Fix known bad entries by exact EN text match
fixes = {
    "Two papers accepted at <b>NeurIPS 2021 (BK+ CS IF=4)</b> Benchmark and Dataset paper track":
        "<b>NeurIPS 2021 (BK+ CS IF=4)</b> Benchmark and Dataset 트랙에 논문 2편이 게재 확정되었습니다",
    "Organizing <b>The 3rd Workshop on the security implications of Deepfakes and Cheapfakes (<a href=\"https://sites.google.com/view/wdc-2024/\" target=\"_blank\">WDC '24</a>)</b>, co-located with ACM ASIACCS 2024":
        "<b>The 3rd Workshop on the security implications of Deepfakes and Cheapfakes (<a href=\"https://sites.google.com/view/wdc-2024/\" target=\"_blank\">WDC '24</a>)</b>를 조직·개최합니다 (ACM ASIACCS 2024과 공동 개최)",
}

# Better approach: rewrite text_ko for objects whose English matches regex
def set_text_ko_for_en(en_substr: str, ko: str, blob: str) -> str:
    # Find object containing this English text literal and replace its text_ko
    pattern = re.compile(
        r"(text:\s*'(?:\\'|[^'])*" + re.escape(en_substr).replace("\\'", "(?:\\\\'|')") + r"(?:\\'|[^'])*',\s*text_ko:\s*)'(?:\\'|[^'])*'",
        re.S,
    )
    # Simpler: find text_ko that contains the leftover
    return blob

# Direct replace of bad text_ko strings
replacements = [
    (
        "text_ko: '<b>NeurIPS 2021 (BK+ CS IF=4)</b>에 논문 2편이 게재 확정되었습니다 Benchmark and Dataset paper track'",
        "text_ko: '<b>NeurIPS 2021 (BK+ CS IF=4)</b> Benchmark and Dataset 트랙에 논문 2편이 게재 확정되었습니다'",
    ),
]

# Also fix any text_ko that ends with leftover English after Korean sentence
def cleanup(ko: str) -> str:
    ko = re.sub(r'(되었습니다)\s+Benchmark and Dataset paper track\s*$',
                r'\1'.replace('되었습니다', '') + 'Benchmark and Dataset 트랙에 논문이 게재 확정되었습니다', ko)
    # more general cleanups
    ko = ko.replace('에 논문 2편이 게재 확정되었습니다 Benchmark and Dataset paper track',
                    ' Benchmark and Dataset 트랙에 논문 2편이 게재 확정되었습니다')
    return ko

def repl_text_ko(m):
    raw = m.group(1).replace("\\'", "'")
    cleaned = cleanup(raw)
    return "text_ko: '" + cleaned.replace("\\", "\\\\").replace("'", "\\'") + "'"

new_text = re.sub(r"text_ko:\s*'((?:\\'|[^'])*)'", repl_text_ko, text)
for old, new in replacements:
    new_text = new_text.replace(old, new)

path.write_text(new_text, encoding='utf-8')
print('cleaned newsdata')

# re-check
text = path.read_text(encoding='utf-8')
issues2 = []
for m in re.finditer(r"text_ko:\s*'((?:\\'|[^'])*)'", text):
    ko = m.group(1)
    if 'Benchmark and Dataset paper track' in ko or re.search(r'\b(accepted at|Congrats to|Gave a talk|Won the grant)\b', ko):
        issues2.append(ko[:160])
print('remaining issues', len(issues2))
for i in issues2[:20]:
    print('-', i)
