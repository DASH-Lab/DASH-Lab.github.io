from pathlib import Path
import re

# Find gallery items where desc_ko == desc (English fallback)
text = Path('js/imagedata.js').read_text(encoding='utf-8')
# Split objects roughly
objs = re.findall(r"\{[^{}]*?src:\s*'([^']*)'[^{}]*?desc:\s*((?:'(?:\\'|[^'])*')|(?:\"(?:\\\"|[^\"])*\"))[^{}]*?desc_ko:\s*((?:'(?:\\'|[^'])*')|(?:\"(?:\\\"|[^\"])*\"))[^{}]*?\}", text, re.S)
print('matched objects', len(objs))
same = []
for src, d, dk in objs:
    den = d[1:-1].replace("\\'", "'")
    dko = dk[1:-1].replace("\\'", "'")
    if den == dko:
        same.append((src, den[:80]))
print('English fallbacks', len(same))
for s in same:
    print('-', s[0], '::', s[1])
