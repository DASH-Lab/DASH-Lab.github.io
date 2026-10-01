from pathlib import Path

p = Path('js/i18n.js')
text = p.read_text(encoding='utf-8')
marker = "'dept.ads':"
if "'foren.back':" in text:
    print('foren already present')
else:
    # Insert before closing of DICT object (the "    };" after dept.ads)
    idx = text.find(marker)
    if idx < 0:
        raise SystemExit('dept.ads not found')
    close = text.find('    };', idx)
    insert = """
        // --- Forensic Inspector ---
        'foren.back': { en: 'Back to Datasets', ko: '데이터셋으로 돌아가기' },
        'foren.locked': { en: 'Area Locked', ko: '영역 고정됨' },
        'foren.reset': { en: 'Reset Station', ko: '초기화' },
        'foren.heading': { en: '🔍 Deepfake Inspector (Beta)', ko: '🔍 딥페이크 검사기 (Beta)' },
        'foren.ready': { en: 'Ready for Analysis', ko: '분석 준비 완료' },
        'foren.upload': { en: 'Upload or Drag & Drop an image', ko: '이미지를 업로드하거나 끌어다 놓으십시오' },
        'foren.title': { en: 'DASH LAB - Deepfake Inspector', ko: 'DASH LAB - 딥페이크 검사기' },
"""
    text = text[:close] + insert + text[close:]
    p.write_text(text, encoding='utf-8')
    print('added foren entries')

# Patch Foren_ins.html key strings
fp = Path('Foren_ins.html')
ft = fp.read_text(encoding='utf-8')
ft2 = ft
ft2 = ft2.replace('<html lang="en">', '<html lang="en" data-i18n-page-title="foren.title">', 1)
ft2 = ft2.replace(
    '> Back to Datasets</a>',
    '><span data-i18n="foren.back">Back to Datasets</span></a>',
    1
)
ft2 = ft2.replace(
    '> Area Locked\n                        </span>',
    '><span data-i18n="foren.locked">Area Locked</span>\n                        </span>',
    1
)
ft2 = ft2.replace(
    '> Reset Station\n                        </button>',
    '><span data-i18n="foren.reset">Reset Station</span>\n                        </button>',
    1
)
ft2 = ft2.replace(
    '>🔍 Deepfake Inspector (Beta)</h3>',
    ' data-i18n="foren.heading">🔍 Deepfake Inspector (Beta)</h3>',
    1
)
ft2 = ft2.replace(
    '>Ready for Analysis</p>',
    ' data-i18n="foren.ready">Ready for Analysis</p>',
    1
)
ft2 = ft2.replace(
    '>Upload or Drag & Drop an image</p>',
    ' data-i18n="foren.upload">Upload or Drag & Drop an image</p>',
    1
)
if ft2 != ft:
    fp.write_text(ft2, encoding='utf-8')
    print('patched Foren_ins.html')
else:
    print('Foren_ins.html unchanged')
