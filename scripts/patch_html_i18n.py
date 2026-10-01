"""Apply data-i18n attributes and page-title keys to main HTML pages."""
from pathlib import Path

ROOT = Path('.')


def patch_file(name: str, replacements: list[tuple[str, str]], html_attrs: dict | None = None):
    path = ROOT / name
    text = path.read_text(encoding='utf-8')
    orig = text
    if html_attrs:
        # update <html ...>
        import re
        m = re.search(r'<html([^>]*)>', text, re.I)
        if m:
            attrs = m.group(1)
            for k, v in html_attrs.items():
                if f'{k}=' in attrs:
                    attrs = re.sub(rf'{k}="[^"]*"', f'{k}="{v}"', attrs)
                else:
                    attrs += f' {k}="{v}"'
            text = text[:m.start()] + f'<html{attrs}>' + text[m.end():]
    for old, new in replacements:
        if old not in text:
            print(f'  WARN missing in {name}: {old[:60]!r}...')
            continue
        text = text.replace(old, new, 1)
    if text != orig:
        path.write_text(text, encoding='utf-8')
        print(f'Patched {name}')
    else:
        print(f'No content change {name}')


# --- index.html ---
patch_file('index.html', [
    ('<title>DASH LAB - Home</title>', '<title>DASH LAB - Home</title>'),
    ('Our Research | Computer Vision | Anomaly Detection | AI Security | DeepFakes | Machine Learning | Data Science Applications',
     ''),  # handled below carefully
], {'data-i18n-page-title': 'home.title', 'lang': 'en'})

# More careful index patches
idx = Path('index.html')
t = idx.read_text(encoding='utf-8')
t = t.replace(
    '<p class="text-base md:text-xl font-light max-w-3xl mx-auto px-4 text-center">\n                    Our Research | Computer Vision | Anomaly Detection | AI Security | DeepFakes | Machine Learning | Data Science Applications\n                </p>',
    '<p class="text-base md:text-xl font-light max-w-3xl mx-auto px-4 text-center" data-i18n="home.heroTagline">\n                    Our Research | Computer Vision | Anomaly Detection | AI Security | DeepFakes | Machine Learning | Data Science Applications\n                </p>'
)
t = t.replace('<h3 class="feature-title">Data Science</h3>', '<h3 class="feature-title" data-i18n="home.feat.dataTitle">Data Science</h3>')
t = t.replace(
    '<p class="feature-desc">\n                    Innovating at the intersection of <strong>Applied Data Science</strong>, Data Engineering, and <strong>Satellite Systems</strong>.\n                </p>',
    '<p class="feature-desc" data-i18n-html="home.feat.dataDesc">\n                    Innovating at the intersection of <strong>Applied Data Science</strong>, Data Engineering, and <strong>Satellite Systems</strong>.\n                </p>'
)
t = t.replace('<h3 class="feature-title">Artificial Intelligence</h3>', '<h3 class="feature-title" data-i18n="home.feat.aiTitle">Artificial Intelligence</h3>')
t = t.replace(
    '<p class="feature-desc">\n                    Advancing the frontiers of <strong>DeepFake detection</strong> and high-performance <strong>Anomaly modeling</strong>.\n                </p>',
    '<p class="feature-desc" data-i18n-html="home.feat.aiDesc">\n                    Advancing the frontiers of <strong>DeepFake detection</strong> and high-performance <strong>Anomaly modeling</strong>.\n                </p>'
)
t = t.replace('<h3 class="feature-title">Security & Privacy</h3>', '<h3 class="feature-title" data-i18n="home.feat.secTitle">Security & Privacy</h3>')
t = t.replace(
    '<p class="feature-desc">\n                    Protecting digital frontiers through <strong>Privacy Preservation</strong> and <strong>Secure Machine Learning</strong> architectures.\n                </p>',
    '<p class="feature-desc" data-i18n-html="home.feat.secDesc">\n                    Protecting digital frontiers through <strong>Privacy Preservation</strong> and <strong>Secure Machine Learning</strong> architectures.\n                </p>'
)
t = t.replace('Now Recruiting', '<span data-i18n="home.recruit.badge">Now Recruiting</span>', 1)
# fix double wrap if any
t = t.replace('<span data-i18n="home.recruit.badge"><span data-i18n="home.recruit.badge">Now Recruiting</span></span>', '<span data-i18n="home.recruit.badge">Now Recruiting</span>')
t = t.replace(
    'Shape the Future of <span class="text-blue-600">AI & Security</span> with us.',
    ''
)
# headline
t = t.replace(
    '''<h3 class="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">
                        
                    </h3>''',
    '''<h3 class="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight" data-i18n-html="home.recruit.headline">
                        Shape the Future of <span class="text-blue-600">AI & Security</span> with us.
                    </h3>'''
)
# If empty headline happened, restore properly
if 'home.recruit.headline' not in t:
    t = t.replace(
        '''<h3 class="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">
                        Shape the Future of <span class="text-blue-600">AI & Security</span> with us.
                    </h3>''',
        '''<h3 class="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight" data-i18n-html="home.recruit.headline">
                        Shape the Future of <span class="text-blue-600">AI & Security</span> with us.
                    </h3>'''
    )

t = t.replace(
    '''<p class="text-lg text-gray-600 mb-6 leading-relaxed max-w-2xl">
                        We are looking for dedicated individuals whose research interests align with Computer Vision, Anomaly Detection, and Applied Data Science. 
                        <strong>Coding proficiency and passion for research are highly valued.</strong>
                    </p>''',
    '''<p class="text-lg text-gray-600 mb-6 leading-relaxed max-w-2xl" data-i18n-html="home.recruit.body">
                        We are looking for dedicated individuals whose research interests align with Computer Vision, Anomaly Detection, and Applied Data Science. 
                        <strong>Coding proficiency and passion for research are highly valued.</strong>
                    </p>'''
)
t = t.replace(
    '''Only the applicants who fill out this form have their applications looked through. 
                                Any emails sent directly will be ignored and only the Google Forms will be accepted.''',
    '''<span data-i18n="home.recruit.notice">Only the applicants who fill out this form have their applications looked through. Any emails sent directly will be ignored and only the Google Forms will be accepted.</span>'''
)
t = t.replace('<span>Open Application Form</span>', '<span data-i18n="common.openForm">Open Application Form</span>', 1)
t = t.replace(
    '* Recommended for dedicated researchers',
    '<span data-i18n="home.recruit.note">* Recommended for dedicated researchers</span>',
    1
)
t = t.replace('<h2 class="text-3xl font-black text-blue-900 mb-2 tracking-tight">Join Our Lab</h2>',
              '<h2 class="text-3xl font-black text-blue-900 mb-2 tracking-tight" data-i18n="home.modal.title">Join Our Lab</h2>')
t = t.replace(
    'For those interested in joining our research team, please fill out the official <strong>Application Form</strong> below.',
    ''
)
if 'home.modal.body' not in t:
    t = t.replace(
        '<p class="text-gray-600 mb-6 px-4"></p>',
        '<p class="text-gray-600 mb-6 px-4" data-i18n-html="home.modal.body">For those interested in joining our research team, please fill out the official <strong>Application Form</strong> below.</p>'
    )
    t = t.replace(
        '''<p class="text-gray-600 mb-6 px-4">
            </p>''',
        '''<p class="text-gray-600 mb-6 px-4" data-i18n-html="home.modal.body">For those interested in joining our research team, please fill out the official <strong>Application Form</strong> below.</p>'''
    )
# restore modal body if emptied
t = t.replace(
    '''<p class="text-gray-600 mb-6 px-4"></p>''',
    '''<p class="text-gray-600 mb-6 px-4" data-i18n-html="home.modal.body">For those interested in joining our research team, please fill out the official <strong>Application Form</strong> below.</p>'''
)
if 'data-i18n-html="home.modal.body"' not in t:
    t = t.replace(
        '''<p class="text-gray-600 mb-6 px-4">For those interested in joining our research team, please fill out the official <strong>Application Form</strong> below.</p>''',
        '''<p class="text-gray-600 mb-6 px-4" data-i18n-html="home.modal.body">For those interested in joining our research team, please fill out the official <strong>Application Form</strong> below.</p>'''
    )

t = t.replace(
    '''Only the applicants who fill out the official form will have their applications reviewed. 
                        Direct emails will be ignored.''',
    '''<span data-i18n="home.modal.notice">Only the applicants who fill out the official form will have their applications reviewed. Direct emails will be ignored.</span>'''
)
t = t.replace('Apply Now', '<span data-i18n="common.applyNow">Apply Now</span>', 1)
# poster labels
t = t.replace('<span class="poster-ad-toggle-label">Join Us</span>', '<span class="poster-ad-toggle-label" data-i18n="common.joinUs">Join Us</span>', 1)
t = t.replace('<span class="poster-ad-stack-title">Join Us</span>', '<span class="poster-ad-stack-title" data-i18n="common.joinUs">Join Us</span>', 1)
t = t.replace('<span class="poster-ad-toggle-label">Posters</span>', '<span class="poster-ad-toggle-label" data-i18n="common.posters">Posters</span>', 1)
t = t.replace('<span class="poster-ad-stack-title">Lab posters</span>', '<span class="poster-ad-stack-title" data-i18n="common.labPosters">Lab posters</span>', 1)
t = t.replace('>Click to view</span>', ' data-i18n="common.clickToView">Click to view</span>')
# aria labels
t = t.replace('aria-label="Recruitment poster"', 'data-i18n-aria="common.recruitPosterAria" aria-label="Recruitment poster"')
t = t.replace('aria-label="Lab poster advertisements"', 'data-i18n-aria="common.labPosterAria" aria-label="Lab poster advertisements"')
t = t.replace('aria-label="Hide recruitment poster"', 'data-i18n-aria="common.hideRecruit" aria-label="Hide recruitment poster"')
t = t.replace('aria-label="Hide poster thumbnails"', 'data-i18n-aria="common.hidePosters" aria-label="Hide poster thumbnails"')
t = t.replace('aria-label="Close poster details"', 'data-i18n-aria="common.closePoster" aria-label="Close poster details"')

idx.write_text(t, encoding='utf-8')
print('Wrote index.html')

# --- News.html ---
news = Path('News.html')
nt = news.read_text(encoding='utf-8')
nt = nt.replace('<html lang="en">', '<html lang="en" data-i18n-page-title="news.title">', 1)
nt = nt.replace('<h1 class="text-4xl font-bold text-gray-900 mb-8 text-center md:text-left">News & Events</h1>',
                '<h1 class="text-4xl font-bold text-gray-900 mb-8 text-center md:text-left" data-i18n="news.heading">News & Events</h1>')
nt = nt.replace('<h4 class="text-2xl font-bold text-gray-900 flex-grow">News Archive</h4>',
                '<h4 class="text-2xl font-bold text-gray-900 flex-grow" data-i18n="news.archive">News Archive</h4>')
nt = nt.replace('''<button onclick="filterNews('All')">All</button>''',
                '''<button onclick="filterNews('All')" data-news-filter="All" data-i18n="common.all">All</button>''')
nt = nt.replace('''<button onclick="filterNews('Archive')">Archive</button>''',
                '''<button onclick="filterNews('Archive')" data-news-filter="Archive" data-i18n="common.archive">Archive</button>''')
nt = nt.replace('''<button id="prev-page-btn" onclick="changePage(-1)">Previous</button>''',
                '''<button id="prev-page-btn" onclick="changePage(-1)" data-i18n="common.previous">Previous</button>''')
nt = nt.replace('''<button id="next-page-btn" onclick="changePage(1)">Next</button>''',
                '''<button id="next-page-btn" onclick="changePage(1)" data-i18n="common.next">Next</button>''')
news.write_text(nt, encoding='utf-8')
print('Wrote News.html')

# --- Members.html ---
mem = Path('Members.html')
mt = mem.read_text(encoding='utf-8')
mt = mt.replace('<html lang="en">', '<html lang="en" data-i18n-page-title="members.title">', 1)
for en, key in [
    ('Industry Positions', 'members.industry'),
    ('Research Professors/Post-Doc Researcher', 'members.researchProf'),
    ('Ph.D. Students', 'members.phd'),
    ('Masters Students', 'members.ms'),
    ('Undergraduate Students', 'members.ug'),
    ('Alumni', 'members.alumni'),
    ('Master Thesis/Capstone Project Supervision', 'members.supervision'),
]:
    mt = mt.replace(f'>{en}</h5>', f' data-i18n="{key}">{en}</h5>')
    mt = mt.replace(f'>{en}</h5>', f' data-i18n="{key}">{en}</h5>')  # noop if already
# table headers
mt = mt.replace('<th data-label="Name">Name</th>', '<th data-label="Name" data-i18n="members.th.name">Name</th>')
mt = mt.replace('<th data-label="Major">Major</th>', '<th data-label="Major" data-i18n="members.th.major">Major</th>', 1)
mt = mt.replace('<th data-label="Employment">Current employment</th>',
                '<th data-label="Employment" data-i18n="members.th.employment">Current employment</th>')
mt = mt.replace('<th data-label="Major" class="w-1/4">Major</th>',
                '<th data-label="Major" class="w-1/4" data-i18n="members.th.major">Major</th>')
mt = mt.replace('<th data-label="Employment" class="w-1/4">Current Employment</th>',
                '<th data-label="Employment" class="w-1/4" data-i18n="members.th.employment2">Current Employment</th>')
mt = mt.replace('<th data-label="Topic" class="w-2/5">Topic</th>',
                '<th data-label="Topic" class="w-2/5" data-i18n="members.th.topic">Topic</th>')
mt = mt.replace('<h2 class="text-2xl font-bold text-gray-800 mb-2">Join DASH Lab</h2>',
                '<h2 class="text-2xl font-bold text-gray-800 mb-2" data-i18n="members.modal.title">Join DASH Lab</h2>')
mt = mt.replace('Close Window', '<span data-i18n="members.modal.close">Close Window</span>')
mem.write_text(mt, encoding='utf-8')
print('Wrote Members.html')

# --- Publication.html ---
pub = Path('Publication.html')
pt = pub.read_text(encoding='utf-8')
pt = pt.replace('<html lang="en">', '<html lang="en" data-i18n-page-title="pubs.title">', 1)
pt = pt.replace('<span>Deepfake Research</span>', '<span data-i18n="pubs.deepfake">Deepfake Research</span>')
pt = pt.replace('<span>Anomaly Detection</span>', '<span data-i18n="pubs.anomaly">Anomaly Detection</span>')
pt = pt.replace('<span>ML Privacy</span>', '<span data-i18n="pubs.privacy">ML Privacy</span>')
pt = pt.replace('<span>Face Recog. Recovery</span>', '<span data-i18n="pubs.face">Face Recog. Recovery</span>')
pt = pt.replace('placeholder="Loading data..."',
                'placeholder="Loading data..." data-i18n-placeholder="common.searchPubs"')
pub.write_text(pt, encoding='utf-8')
print('Wrote Publication.html')

# --- Projects.html ---
prj = Path('Projects.html')
jt = prj.read_text(encoding='utf-8')
jt = jt.replace('<html lang="en">', '<html lang="en" data-i18n-page-title="projects.title">', 1)
jt = jt.replace(
    '''Previous & Ongoing Project Associates''',
    ''''''
)
# restore with attribute
jt = jt.replace(
    '''<h5 class="text-lg font-bold text-blue-700 pb-2 border-b-2 border-blue-700 mb-4 text-center">
                
            </h5>''',
    '''<h5 class="text-lg font-bold text-blue-700 pb-2 border-b-2 border-blue-700 mb-4 text-center" data-i18n="projects.associates">
                Previous & Ongoing Project Associates
            </h5>'''
)
if 'projects.associates' not in jt:
    jt = jt.replace(
        'Previous & Ongoing Project Associates',
        'Previous & Ongoing Project Associates'
    )
    jt = jt.replace(
        '''<h5 class="text-lg font-bold text-blue-700 pb-2 border-b-2 border-blue-700 mb-4 text-center">
                Previous & Ongoing Project Associates
            </h5>''',
        '''<h5 class="text-lg font-bold text-blue-700 pb-2 border-b-2 border-blue-700 mb-4 text-center" data-i18n="projects.associates">
                Previous & Ongoing Project Associates
            </h5>'''
    )

# org lines
org_map = [
    ('• 과학기술정보통신부 (과기부)', 'projects.org.msit'),
    ('• 한국연구재단 (NRF)', 'projects.org.nrf'),
    ('• 항공우주연구원', 'projects.org.kari'),
    ('• 경찰청', 'projects.org.police'),
    ('• 국립과학수사연구소', 'projects.org.nfs'),
    ('• 국가보안기술연구소', 'projects.org.nsr'),
    ('• ETRI', 'projects.org.etri'),
    ('• IITP', 'projects.org.iitp'),
]
for en, key in org_map:
    jt = jt.replace(f'<div>{en}</div>', f'<div data-i18n="{key}">{en}</div>')

jt = jt.replace(
    '<h4 class="project-header">🎭 Computer Vision (Deepfake 딥페이크 탐지 및 생성 억제)</h4>',
    '<h4 class="project-header" data-i18n="projects.cvHeader">🎭 Computer Vision (Deepfake 딥페이크 탐지 및 생성 억제)</h4>'
)

# CV paragraphs - mark with data-i18n-html by wrapping
# Simpler: replace the four <p> contents' opening tags
cv_keys = ['projects.cv.p1', 'projects.cv.p2', 'projects.cv.p3', 'projects.cv.p4']
# Find the cv section paragraphs
import re
cv_block = re.search(r'(<div class="leading-relaxed text-gray-700 text-base space-y-4">)(.*?)(</div>\s*</div>\s*</div>\s*\n\s*<!-- Individual)', jt, re.S)
if cv_block:
    inner = cv_block.group(2)
    ps = re.findall(r'<p>.*?</p>', inner, re.S)
    if len(ps) >= 4:
        new_inner = inner
        for i, key in enumerate(cv_keys):
            old_p = ps[i]
            # extract content
            content = re.sub(r'^<p>|</p>$', '', old_p)
            new_p = f'<p data-i18n-html="{key}">{content}</p>'
            new_inner = new_inner.replace(old_p, new_p, 1)
        jt = jt[:cv_block.start(2)] + new_inner + jt[cv_block.end(2):]

# project cards titles/meta
proj_pairs = [
    ('📌 Project 1. 악의적 변조 콘텐츠 대응을 위한 딥페이크 탐지 고도화, 생성억제, 유포 방지 플랫폼 개발', 'projects.p1.title'),
    ('<strong>과기정통부/IITP: 2023-2025, 진행중</strong> (연구책임자)', 'projects.p1.meta'),
    ('📌 Project 2. 개인정보보호 관련 정책 변화를 유연하게 반영하여 준수하는 AI 플랫폼 연구 및 개발', 'projects.p2.title'),
    ('<strong>과기정통부: 2022-2026, 진행중</strong> (연구책임자)', 'projects.p2.meta'),
    ('📌 Project 3. 인공지능 기반의 딥페이크(Deep Fake) 멀티미디어 탐지 연구', 'projects.p3.title'),
    ('<strong>한국연구재단 개인기초연구(과기정통부): 2020-2022, 완료</strong> (연구책임자)', 'projects.p3.meta'),
    ('📌 Project 4. 딥페이크 기술을 활용한 온라인 불법행위 대응방안 연구용역', 'projects.p4.title'),
    ('<strong>경찰청: 2020, 완료</strong> (연구책임자)', 'projects.p4.meta'),
    ('📌 Project 5. 지능형 동영상 합성(딥페이크) 검출을 위한 연구 용역', 'projects.p5.title'),
    ('<strong>행안부/국립과학수사연구원: 2020, 완료</strong> (연구책임자)', 'projects.p5.meta'),
    ('📌 Project 6. 기술이전. 딥페이크 탐지 및 칩페이크 탐지 모델 연구 및 고도화', 'projects.p6.title'),
    ('<strong>삼성SDS: 2022, 완료</strong> (연구책임자)', 'projects.p6.meta'),
    ('📌 Project 7. Deepfake Dataset and Detection Research', 'projects.p7.title'),
    ('<strong>호주 CSIRO Data61: 2022-현재, No Funding</strong> (연구책임자)', 'projects.p7.meta'),
]
for text, key in proj_pairs:
    if 'title' in key:
        jt = jt.replace(f'>{text}</h6>', f' data-i18n="{key}">{text}</h6>')
    else:
        # meta inside <p>
        jt = jt.replace(text, f'<span data-i18n-html="{key}">{text}</span>', 1)

jt = jt.replace(
    '<h4 class="project-header">🖼️ AI를 활용한 인물 복원기술</h4>',
    '<h4 class="project-header" data-i18n="projects.heroHeader">🖼️ AI를 활용한 인물 복원기술</h4>'
)
jt = jt.replace(
    '<h4 class="project-header">📊 Time Series Data</h4>',
    '<h4 class="project-header" data-i18n="projects.tsHeader">📊 Time Series Data</h4>'
)

# hero body and ts paragraphs
jt = jt.replace(
    '''<p class="text-lg leading-relaxed text-gray-700 mb-3">
                    • <a class="text-blue-700 font-bold hover:text-blue-900 underline"  href="Heroface_Restoration"><strong>(보훈부-자생의료재단) AI 기술을 활용한 6.25 전쟁영웅 사진 복원 사업</strong></a> (<a href="Heroface_Restoration" class="text-blue-600 hover:text-blue-800 underline">Click</a>)
                </p>''',
    '''<p class="text-lg leading-relaxed text-gray-700 mb-3" data-i18n-html="projects.heroBody">
                    • <a class="text-blue-700 font-bold hover:text-blue-900 underline"  href="Heroface_Restoration"><strong>(보훈부-자생의료재단) AI 기술을 활용한 6.25 전쟁영웅 사진 복원 사업</strong></a> (<a href="Heroface_Restoration" class="text-blue-600 hover:text-blue-800 underline">Click</a>)
                </p>'''
)
jt = jt.replace(
    '• <strong>(항공우주연구원)</strong> AI 기반 위성상태데이터 고장탐지 구현 및 검증방안 연구',
    ''
)
# careful restore
if 'projects.ts.p1' not in jt:
    jt = jt.replace(
        '''<div class="leading-relaxed text-gray-700 text-base space-y-2">
                    <p></p>
                    <p>• <strong>(현대케피코)</strong> EV smart regenerative braking system to train driving patterns</p>
                </div>''',
        '''<div class="leading-relaxed text-gray-700 text-base space-y-2">
                    <p data-i18n-html="projects.ts.p1">• <strong>(항공우주연구원)</strong> AI 기반 위성상태데이터 고장탐지 구현 및 검증방안 연구</p>
                    <p data-i18n-html="projects.ts.p2">• <strong>(현대케피코)</strong> EV smart regenerative braking system to train driving patterns</p>
                </div>'''
    )
if 'projects.ts.p1' not in jt:
    jt = jt.replace(
        '<p>• <strong>(항공우주연구원)</strong> AI 기반 위성상태데이터 고장탐지 구현 및 검증방안 연구</p>',
        '<p data-i18n-html="projects.ts.p1">• <strong>(항공우주연구원)</strong> AI 기반 위성상태데이터 고장탐지 구현 및 검증방안 연구</p>'
    )
    jt = jt.replace(
        '<p>• <strong>(현대케피코)</strong> EV smart regenerative braking system to train driving patterns</p>',
        '<p data-i18n-html="projects.ts.p2">• <strong>(현대케피코)</strong> EV smart regenerative braking system to train driving patterns</p>'
    )

prj.write_text(jt, encoding='utf-8')
print('Wrote Projects.html')

# --- Datasets.html ---
ds = Path('Datasets.html')
dt = ds.read_text(encoding='utf-8')
dt = dt.replace('<html lang="en">', '<html lang="en" data-i18n-page-title="datasets.title">', 1)
# remove legacy language link (global toggle replaces it)
dt = re.sub(
    r'<!-- Language Link -->\s*<p class="text-right mb-5">\s*<a href="Datasets_kor"[^>]*>.*?</a>\s*</p>',
    '<!-- Language toggle is in the navbar (EN | 한국어) -->',
    dt,
    count=1,
    flags=re.S
)
dt = dt.replace('<h3 class="dash-header-dataset">📦 COCO Spliced Datasets</h3>',
                '<h3 class="dash-header-dataset" data-i18n="datasets.coco.title">📦 COCO Spliced Datasets</h3>')
# first paragraph after coco title
dt = re.sub(
    r'(<h3 class="dash-header-dataset"[^>]*>📦 COCO Spliced Datasets</h3>\s*)<p class="leading-relaxed text-gray-700 mb-4">(.*?)</p>',
    r'\1<p class="leading-relaxed text-gray-700 mb-4" data-i18n-html="datasets.coco.body">\2</p>',
    dt, count=1, flags=re.S
)
dt = dt.replace('<h3 class="dash-header-dataset">🛰️ Satellite Forgery Image Dataset</h3>',
                '<h3 class="dash-header-dataset" data-i18n="datasets.sat.title">🛰️ Satellite Forgery Image Dataset</h3>')
dt = re.sub(
    r'(🛰️ Satellite Forgery Image Dataset</h3>\s*)<p class="leading-relaxed text-gray-700 mb-4">(.*?)</p>',
    r'\1<p class="leading-relaxed text-gray-700 mb-4" data-i18n-html="datasets.sat.body">\2</p>',
    dt, count=1, flags=re.S
)
dt = dt.replace('<h3 class="dash-header-dataset">🎬 RWDF-23 Dataset</h3>',
                '<h3 class="dash-header-dataset" data-i18n="datasets.rwdf.title">🎬 RWDF-23 Dataset</h3>')
dt = re.sub(
    r'(🎬 RWDF-23 Dataset</h3>\s*)<p class="leading-relaxed text-gray-700 mb-4">(.*?)</p>',
    r'\1<p class="leading-relaxed text-gray-700 mb-4" data-i18n-html="datasets.rwdf.body">\2</p>',
    dt, count=1, flags=re.S
)
dt = re.sub(
    r'<strong class="text-gray-800">📝 To obtain the dataset, please fill out the form <a href="https://docs.google.com/forms/d/e/1FAIpQLScsxskSEI0LkmUdI7ClAqs-xslyviDNoKHhiZC3FsBqFG4NJA/viewform" target="_blank" class="text-blue-700 hover:text-blue-900 underline">HERE</a></strong>',
    '<strong class="text-gray-800" data-i18n-html="datasets.obtain">📝 To obtain the dataset, please fill out the form <a href="https://docs.google.com/forms/d/e/1FAIpQLScsxskSEI0LkmUdI7ClAqs-xslyviDNoKHhiZC3FsBqFG4NJA/viewform" target="_blank" class="text-blue-700 hover:text-blue-900 underline">HERE</a></strong>',
    dt, count=1
)
dt = dt.replace('<h3 class="dash-header-dataset">🎭 FakeAVCeleb Dataset</h3>',
                '<h3 class="dash-header-dataset" data-i18n="datasets.fakeav.title">🎭 FakeAVCeleb Dataset</h3>')
dt = re.sub(
    r'(🎭 FakeAVCeleb Dataset</h3>\s*)<p class="leading-relaxed text-gray-700 mb-4">(.*?)</p>',
    r'\1<p class="leading-relaxed text-gray-700 mb-4" data-i18n-html="datasets.fakeav.body">\2</p>',
    dt, count=1, flags=re.S
)
dt = dt.replace('<h3 class="dash-header-dataset">🚨 VFP290K Dataset</h3>',
                '<h3 class="dash-header-dataset" data-i18n="datasets.vfp.title">🚨 VFP290K Dataset</h3>')
dt = re.sub(
    r'(🚨 VFP290K Dataset</h3>\s*)<p class="leading-relaxed text-gray-700 mb-4">(.*?)</p>',
    r'\1<p class="leading-relaxed text-gray-700 mb-4" data-i18n-html="datasets.vfp.body">\2</p>',
    dt, count=1, flags=re.S
)
dt = re.sub(
    r'(<div class="mt-4 p-4 bg-yellow-100 rounded-lg border-l-4 border-yellow-600">\s*)<strong class="text-gray-800">(.*?)</strong>',
    r'\1<strong class="text-gray-800" data-i18n="datasets.vfp.badge">\2</strong>',
    dt, count=1, flags=re.S
)
dt = dt.replace('<h3 class="dash-header-dataset">📹 SKKU AGC Anomaly Detection Dataset</h3>',
                '<h3 class="dash-header-dataset" data-i18n="datasets.agc.title">📹 SKKU AGC Anomaly Detection Dataset</h3>')
dt = re.sub(
    r'(📹 SKKU AGC Anomaly Detection Dataset</h3>\s*)<p class="leading-relaxed text-gray-700 mb-6">(.*?)</p>',
    r'\1<p class="leading-relaxed text-gray-700 mb-6" data-i18n="datasets.agc.body">\2</p>',
    dt, count=1, flags=re.S
)
ds.write_text(dt, encoding='utf-8')
print('Wrote Datasets.html')

# --- Professor.html core labels ---
pf = Path('Professor.html')
ptx = pf.read_text(encoding='utf-8')
ptx = ptx.replace('<html lang="en">', '<html lang="en" data-i18n-page-title="prof.title">', 1)
ptx = ptx.replace('Associate Professor', '<span data-i18n="prof.role">Associate Professor</span>', 1)
ptx = ptx.replace('<p class="text-xl text-blue-800 font-bold">Sungkyunkwan University (SKKU)</p>',
                  '<p class="text-xl text-blue-800 font-bold" data-i18n="prof.univ">Sungkyunkwan University (SKKU)</p>')
ptx = ptx.replace('>Email</p>', ' data-i18n="prof.emailLabel">Email</p>', 1)
ptx = ptx.replace('>Office</p>', ' data-i18n="prof.officeLabel">Office</p>', 1)
ptx = ptx.replace('>Research Philosophy</h4>', ' data-i18n="prof.philosophy">Research Philosophy</h4>')
ptx = ptx.replace('>Breaking Boundaries.</p>', ' data-i18n="prof.phil1.title">Breaking Boundaries.</p>')
ptx = ptx.replace('>Global Excellence.</p>', ' data-i18n="prof.phil2.title">Global Excellence.</p>')
ptx = ptx.replace('>Diversity as Strength.</p>', ' data-i18n="prof.phil3.title">Diversity as Strength.</p>')
# philosophy bodies - mark italic paragraphs under each
ptx = ptx.replace('>Work Experience</h4>', ' data-i18n="prof.workExp">Work Experience</h4>')
ptx = ptx.replace('>Education</h4>', ' data-i18n="prof.education">Education</h4>')
ptx = ptx.replace('>Research Interests</h4>', ' data-i18n="prof.interests">Research Interests</h4>')
ptx = ptx.replace('>Research Visualization</h4>', ' data-i18n="prof.viz">Research Visualization</h4>')
ptx = ptx.replace('>International Honors and Awards</h4>', ' data-i18n="prof.awards">International Honors and Awards</h4>')
ptx = ptx.replace('>Fluent in Korean and English</p>', ' data-i18n="prof.fluent">Fluent in Korean and English</p>')
ptx = ptx.replace('READ ARTICLE', '<span data-i18n="prof.readArticle">READ ARTICLE</span>', 1)
ptx = ptx.replace('>Generative AI Model</p>', ' data-i18n="prof.genAI">Generative AI Model</p>')
ptx = ptx.replace('>Media\n                                Coverage</p>', ' data-i18n="prof.mediaCoverage">Media Coverage</p>')
ptx = ptx.replace('>Early Tenure Granted, 2024</p>', ' data-i18n="prof.tenureGranted">Early Tenure Granted, 2024</p>')
ptx = ptx.replace('>Tenure</p>', ' data-i18n="prof.tenure">Tenure</p>', 1)
ptx = ptx.replace('>Fellowship</p>', ' data-i18n="prof.fellowship">Fellowship</p>', 1)
pf.write_text(ptx, encoding='utf-8')
print('Wrote Professor.html')

print('Done')
