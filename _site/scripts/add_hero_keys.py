from pathlib import Path

i18n = Path('js/i18n.js')
t = i18n.read_text(encoding='utf-8')
extra = """
        'hero.back': { en: 'Back to Projects', ko: '연구과제로 돌아가기' },
        'hero.methods': { en: 'Methods Used', ko: '사용한 방법들' },
        'hero.press': { en: 'Press Coverage', ko: '보도자료' },
        'hero.partners': { en: 'Participating Organizations', ko: '참여기관' },
"""
if "'hero.back':" not in t:
    if "'hero.title':" in t:
        t = t.replace("'hero.title':", extra + "\n        'hero.title':", 1)
    else:
        # insert near foren or end of dict
        t = t.replace("'foren.source':", extra + "\n        'foren.source':", 1)
    i18n.write_text(t, encoding='utf-8')
    print('added hero section keys')
else:
    print('hero keys exist')

# Ensure prof.dept.ads exists
if "'prof.dept.ads':" not in t and "'prof.dept.ads':" not in i18n.read_text(encoding='utf-8'):
    t2 = i18n.read_text(encoding='utf-8')
    if "'prof.dept.ads':" not in t2:
        t2 = t2.replace("'prof.present':", "'prof.dept.ads': { en: 'Applied Data Science (데이터사이언스)', ko: '데이터사이언스융합학과' },\n        'prof.present':", 1)
        i18n.write_text(t2, encoding='utf-8')
        print('added prof.dept.ads')
