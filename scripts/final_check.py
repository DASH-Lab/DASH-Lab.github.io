from pathlib import Path
import re
import runpy

runpy.run_path('scripts/add_hero_keys.py')

t = Path('js/newsdata.js').read_text(encoding='utf-8')
bad = []
for m in re.finditer(r"text_ko: '((?:\\'|[^'])*)'", t):
    ko = m.group(1)
    if ko.startswith('Won the') or 'Benchmark and Dataset paper track' in ko:
        bad.append(ko[:120])
print('bad news', len(bad))
for b in bad:
    print(' -', b)

i18n = Path('js/i18n.js').read_text(encoding='utf-8')
print('hero.back', "'hero.back':" in i18n)
print('prof.dept.ads', "'prof.dept.ads':" in i18n)
pf = Path('Professor.html').read_text(encoding='utf-8')
print('venues7 html', 'data-i18n="prof.venues7"' in pf)
print('venuesN gone', 'prof.venuesN' not in pf)
print('hero methods attr', 'data-i18n="hero.methods"' in Path('Heroface_Restoration.html').read_text(encoding='utf-8'))
print('foren source', 'data-i18n="foren.source"' in Path('Foren_ins.html').read_text(encoding='utf-8'))
print('news text_ko count', t.count('text_ko:'))
