import re
import pathlib

t = pathlib.Path('js/i18n.js').read_text(encoding='utf-8')
keys = re.findall(r"'([^']+)':\s*\{\s*en:", t)
print('DICT keys:', len(keys))
need = [
    'nav.home', 'home.heroTagline', 'projects.cv.p1', 'datasets.coco.body',
    'prof.phil1.body', 'foren.heading', 'common.searchPubs'
]
for k in need:
    print(k, 'OK' if k in keys else 'MISSING')

ix = pathlib.Path('index.html').read_text(encoding='utf-8')
print('heroTagline attr', 'data-i18n="home.heroTagline"' in ix)
print('hero text present', 'Computer Vision' in ix)
print(
    'script order ok',
    ix.find('i18n.js') < ix.find('common.js') < ix.find('i18n-content.js') < ix.find('news.js')
)

# Count pages with i18n.js
for p in pathlib.Path('.').glob('*.html'):
    txt = p.read_text(encoding='utf-8')
    has = 'js/i18n.js' in txt or 'lang=ko' in txt
    print(p.name, 'i18n' if 'js/i18n.js' in txt else 'redirect/other')
