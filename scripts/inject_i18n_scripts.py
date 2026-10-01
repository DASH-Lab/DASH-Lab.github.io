from pathlib import Path

ROOT = Path('.')
pages = list(ROOT.glob('*.html'))
print('Pages:', [p.name for p in pages])

I18N_DEFER = '<script src="js/i18n.js" defer></script>\n    '
I18N_SYNC = '<script src="js/i18n.js"></script>\n    '
CONTENT_DEFER = '<script src="js/i18n-content.js" defer></script>\n    '
MEMBERS_DEFER = '<script src="js/i18n-members.js" defer></script>\n    '


def ensure_i18n(html: str, defer: bool) -> str:
    if 'js/i18n.js' in html:
        return html
    tag = I18N_DEFER if defer else I18N_SYNC
    return html.replace('<script src="js/common.js"', tag + '<script src="js/common.js"', 1)


for p in pages:
    text = p.read_text(encoding='utf-8')
    orig = text
    defer = 'common.js" defer' in text or "common.js' defer" in text
    text = ensure_i18n(text, defer)

    if 'js/news.js' in text and 'i18n-content.js' not in text:
        if 'js/newsdata.js' in text:
            text = text.replace('<script src="js/newsdata.js"', CONTENT_DEFER + '<script src="js/newsdata.js"', 1)
        else:
            text = text.replace('<script src="js/news.js"', CONTENT_DEFER + '<script src="js/news.js"', 1)

    if 'js/members.js' in text and 'i18n-members.js' not in text:
        text = text.replace('<script src="js/membersdata.js"', MEMBERS_DEFER + '<script src="js/membersdata.js"', 1)

    if text != orig:
        p.write_text(text, encoding='utf-8')
        print('Updated scripts:', p.name)
    else:
        print('No script change:', p.name)
