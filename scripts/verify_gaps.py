from pathlib import Path
import re

# News text_ko coverage
nd = Path('js/newsdata.js').read_text(encoding='utf-8')
texts = len(re.findall(r"\btext:\s*'", nd))
text_kos = len(re.findall(r"\btext_ko:\s*'", nd))
print(f'news text={texts} text_ko={text_kos}')

# Sample a few Korean translations that were hard patterns
for needle in ['Best Paper Award at WISA', 'Finance Chair', 'Dagstuhl', 'NeurIPS 2021']:
    i = nd.find(needle)
    if i > 0:
        snippet = nd[i:i+200].replace('\n', ' ')
        print('EN sample:', snippet[:120])
        # find following text_ko
        j = nd.find('text_ko:', i)
        print('KO near:', nd[j:j+160].replace('\n', ' ')[:160])
        print('---')

# Professor checks
pf = Path('Professor.html').read_text(encoding='utf-8')
checks = [
    'data-i18n="prof.services"',
    'data-i18n="prof.rap"',
    'data-i18n="prof.award5"',
    'data-i18n="prof.tpc"',
    'data-i18n="prof.wsOrg"',
    'data-i18n-html="prof.award1"',
    'data-i18n="prof.hs"',
]
for c in checks:
    print(c, 'OK' if c in pf else 'MISSING')

# broken nesting?
if '</span></p>' in pf and 'data-i18n="prof.hs"' in pf:
    idx = pf.find('data-i18n="prof.hs"')
    print('hs context:', pf[idx-40:idx+80].replace('\n',' '))

# Foren
fi = Path('Foren_ins.html').read_text(encoding='utf-8')
for c in ['foren.source', 'foren.selectFile', 'foren.snapshot', 'foren.origView', 'dash:langchange']:
    print('foren', c, 'OK' if c in fi else 'MISSING')

# i18n keys
i18n = Path('js/i18n.js').read_text(encoding='utf-8')
for c in ['prof.services', 'prof.award1', 'foren.source', 'prof.venues7', 'prof.award7suffix']:
    print('dict', c, 'OK' if f"'{c}':" in i18n else 'MISSING')

# Gallery AGC
im = Path('js/imagedata.js').read_text(encoding='utf-8')
print('AGC ko', 'AI Grand Challenge(AGC) 2022' in im)

# Remaining obvious English UI on Members/News/Home
for page in ['Members.html', 'News.html', 'Datasets.html', 'Publication.html', 'Projects.html', 'index.html']:
    t = Path(page).read_text(encoding='utf-8')
    # crude: find visible English phrases without data-i18n nearby - just report known leftovers
    leftovers = []
    for phrase in ['Click to enlarge', 'Show abstract', 'Join the Lab', 'Now Recruiting', 'Open Application', 'Back to']:
        if phrase in t and f'data-i18n' not in t[max(0,t.find(phrase)-80):t.find(phrase)]:
            leftovers.append(phrase)
    print(page, 'possible leftovers', leftovers or 'none')
