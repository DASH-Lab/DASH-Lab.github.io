from pathlib import Path
t = Path('js/common.js').read_text(encoding='utf-8')
print('broken a tag', '<a"' in t)
print('footer copyright ok', 'footer.copyright' in t)
print('lang toggle buttons', t.count('data-lang-set'))
print('initLangToggle present', 'function initLangToggle' in t)
