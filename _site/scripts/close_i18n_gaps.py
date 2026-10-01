# -*- coding: utf-8 -*-
"""Close remaining i18n gaps: news text_ko, professor labels, foren controls, gallery."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def js_escape(s: str) -> str:
    return s.replace("\\", "\\\\").replace("'", "\\'")


# ---------------------------------------------------------------------------
# NEWS: generate text_ko for every entry
# ---------------------------------------------------------------------------

def translate_news(text: str) -> str:
    t = text.strip()
    hangul = len(re.findall(r"[\uAC00-\uD7A3]", t))
    letters = len(re.findall(r"[A-Za-z]", t))
    if hangul > 8 and hangul >= letters * 0.35:
        return (
            t.replace(">media<", ">관련 기사<")
            .replace(">News<", ">뉴스<")
            .replace(">media</", ">관련 기사</")
        )

    patterns = [
        (r"Won 1st Place in the Image Edit Detection and Localization Challenge \(IEDAL2\) at <b>(.*?)</b>",
         r"<b>\1</b> Image Edit Detection and Localization Challenge(IEDAL2)에서 1위를 수상하였습니다"),
        (r"Three paper(?:s)? accepted at Main Paper track of <b>(.*?)</b>",
         r"<b>\1</b> Main Paper 트랙에 논문 3편이 게재 확정되었습니다"),
        (r"One paper accepted at Main Paper track of <b>(.*?)</b>",
         r"<b>\1</b> Main Paper 트랙에 논문 1편이 게재 확정되었습니다"),
        (r"One paper accepted at Research Paper track of <b>(.*?)</b>",
         r"<b>\1</b> Research Paper 트랙에 논문 1편이 게재 확정되었습니다"),
        (r"One paper accepted at Demo & Challenge track of <b>(.*?)</b>\s*",
         r"<b>\1</b> Demo & Challenge 트랙에 논문 1편이 게재 확정되었습니다"),
        (r"Two papers accepted at findings track of <b>(.*?)</b>\s*",
         r"<b>\1</b> Findings 트랙에 논문 2편이 게재 확정되었습니다"),
        (r"One paper accepted at main paper track of <b>(.*?)</b>\s*",
         r"<b>\1</b> Main Paper 트랙에 논문 1편이 게재 확정되었습니다"),
        (r"One paper accepted at short paper track of <b>(.*?)</b>\s*",
         r"<b>\1</b> Short Paper 트랙에 논문 1편이 게재 확정되었습니다"),
        (r"One paper accepted at MLA track of <b>(.*?)</b>\s*",
         r"<b>\1</b> MLA 트랙에 논문 1편이 게재 확정되었습니다"),
        (r"One paper accepted at workshop paper track of <b>(.*?)</b>",
         r"<b>\1</b> Workshop Paper 트랙에 논문 1편이 게재 확정되었습니다"),
        (r"One paper accepted at industry paper track of <b>(.*?)</b>",
         r"<b>\1</b> Industry Paper 트랙에 논문 1편이 게재 확정되었습니다"),
        (r"Two paper(?:s)? accepted at <b>(.*?)</b>",
         r"<b>\1</b>에 논문 2편이 게재 확정되었습니다"),
        (r"One applied research paper, two full papers and three short papers accepted at <b>(.*?)</b>",
         r"<b>\1</b>에 Applied Research 논문 1편, Full Paper 2편, Short Paper 3편이 게재 확정되었습니다"),
        (r"Three full papers accepted at <b>(.*?)</b>",
         r"<b>\1</b>에 Full Paper 3편이 게재 확정되었습니다"),
        (r"One full paper accepted at <b>(.*?)</b>",
         r"<b>\1</b>에 Full Paper 1편이 게재 확정되었습니다"),
        (r"Three short papers accepted at <b>(.*?)</b> Congrats, All!",
         r"<b>\1</b>에 Short Paper 3편이 게재 확정되었습니다. 모두 축하합니다!"),
        (r"Won the <b>Best Paper Award at CISC-W 2024</b>",
         r"<b>CISC-W 2024 Best Paper Award</b>를 수상하였습니다"),
        (r"Two full papers accepted at <b>(.*?)</b> including 1 Oral paper! Congrats, All!",
         r"<b>\1</b>에 Full Paper 2편(Oral 1편 포함)이 게재 확정되었습니다. 모두 축하합니다!"),
        (r"Three full papers <b>(.*?)</b> and one demo paper <b>(.*?)</b> accepted at <b>(.*?)</b>",
         r"<b>\3</b>에 Full Paper 3편 <b>\1</b> 및 Demo Paper 1편 <b>\2</b>이 게재 확정되었습니다"),
        (r"One journal paper accepted at <b>(.*?)</b>",
         r"<b>\1</b>에 저널 논문 1편이 게재 확정되었습니다"),
        (r"One conference paper accepted at <b>(.*?)</b>",
         r"<b>\1</b>에 학회 논문 1편이 게재 확정되었습니다"),
        (r"One short paper accepted at <b>(.*?)</b>",
         r"<b>\1</b>에 Short Paper 1편이 게재 확정되었습니다"),
        (r"Won the Best Paper Running-Up Award at <b>(.*?)</b>",
         r"<b>\1</b> Best Paper Running-Up Award를 수상하였습니다"),
        (r"Four papers accepted at <b>(.*?)</b>",
         r"<b>\1</b>에 논문 4편이 게재 확정되었습니다"),
        (r"Three papers accepted at <b>(.*?)</b> \(Acceptance rate: (.*?)\)",
         r"<b>\1</b>에 논문 3편이 게재 확정되었습니다 (채택률: \2)"),
        (r"Three papers accepted at <b>(.*?)</b>",
         r"<b>\1</b>에 논문 3편이 게재 확정되었습니다"),
        (r"One paper accepted at <b>(.*?)</b> \(Acceptance rate: (.*?)\)",
         r"<b>\1</b>에 논문 1편이 게재 확정되었습니다 (채택률: \2)"),
        (r"One paper accepted at <b>(.*?)</b>",
         r"<b>\1</b>에 논문 1편이 게재 확정되었습니다"),
        (r"Five full conference papers accepted at <b>(.*?)</b>\. Congrats to Everyone!!!",
         r"<b>\1</b>에 Full Paper 5편이 게재 확정되었습니다. 모두 축하합니다!"),
        (r"Three full conference papers accepted at <b>(.*?)</b>",
         r"<b>\1</b>에 Full Paper 3편이 게재 확정되었습니다"),
        (r"Two full papers acceptance at <b>(.*?)</b>",
         r"<b>\1</b>에 Full Paper 2편이 게재 확정되었습니다"),
        (r"Two papers acceptance at <b>(.*?)</b>",
         r"<b>\1</b>에 논문 2편이 게재 확정되었습니다"),
        (r"Two papers accepted at <b>(.*?)</b> Benchmark and Dataset paper track",
         r"<b>\1</b> Benchmark and Dataset 트랙에 논문 2편이 게재 확정되었습니다"),
        (r"Two papers accepted at <b>(.*?)</b>",
         r"<b>\1</b>에 논문 2편이 게재 확정되었습니다"),
        (r"One paper acceptance at <b>(.*?)</b>",
         r"<b>\1</b>에 논문 1편이 게재 확정되었습니다"),
        (r"<b>(.*?)</b> paper acceptance \(acceptance rate=(.*?)\)",
         r"<b>\1</b>에 논문이 게재 확정되었습니다 (채택률=\2)"),
        (r"1 short paper \(BK IF=3\) and 1 full paper \(BK IF=4\) accepted at <b>(.*?)</b>",
         r"<b>\1</b>에 Short Paper 1편(BK IF=3) 및 Full Paper 1편(BK IF=4)이 게재 확정되었습니다"),
        (r"Organizing <b>(.*?)</b>, co-located with (.*)",
         r"<b>\1</b>를 조직·개최합니다 (\2과 공동 개최)"),
        (r"Invited to participate in the prestigious seminar at <b>(.*?)</b> on (.*)",
         r"<b>\1</b>의 저명 세미나에 초청받아 참가하였습니다 — \2"),
        (r"Invited to serve as a reviewer for <b>(.*?)</b>",
         r"<b>\1</b>의 심사위원으로 초청되었습니다"),
        (r"Congrats Keeyoung Kim and Youjin Shin for passing the final PhD defense! Now, 3 PhDs graduated from our lab!",
         r"김기영·신유진 학생의 박사학위 최종 심사를 통과하였습니다. 본 연구실에서 박사 3명이 배출되었습니다!"),
        (r'Won the grant from IITP "(.*?)" \(PI: (.*?)\)',
         r'IITP 연구비 과제 "\1"에 선정되었습니다 (연구책임자: \2)'),
        (r"Won the special prize for KoGas Big Data Competition <b>(.*?)</b>",
         r"한국가스공사 빅데이터경진대회 특별상을 수상하였습니다 — <b>\1</b>"),
        (r"Gave a talk at Authentication Workshop, '(.*?)', 차세대인증연구회",
         r"'\1' 차세대인증연구회 Authentication Workshop에서 발표하였습니다"),
        (r"Open Energy Cloud Platform, a joint security \+ ML project with KAIST and SNU is funded",
         r"KAIST·서울대와 공동으로 수행하는 Open Energy Cloud Platform(보안+ML) 과제가 선정되었습니다"),
        (r"Best Paper \(국보연원장상\) CISC-W",
         r"CISC-W Best Paper(국보연원장상)를 수상하였습니다"),
        (r'Nominated for the "Best Student Paper" at IFIP-SEC 2018',
         r'IFIP-SEC 2018 "Best Student Paper" 후보에 선정되었습니다'),
        (r"Won the grant from Korea Aerospace Research Institute \(KARI\)",
         r"한국항공우주연구원(KARI) 연구과제를 수주하였습니다"),
        (r"Won the top 7th place \(top 3rd among universities\) among 400 teams in Korea for AI R&D Challenge on Fake Face Image Detection",
         r"가짜얼굴 이미지 탐지 AI R&D Challenge에서 전국 400팀 중 7위(대학 중 3위)를 달성하였습니다"),
        (r"Gave a keynote talk at International Conference on Software Security and Assurance \(ICSSA\) 2018",
         r"ICSSA 2018에서 키노트 발표를 하였습니다"),
        (r"Gave a talk at NetSec-Kr'18",
         r"NetSec-Kr'18에서 발표하였습니다"),
        (r"Student Research Workshop paper accepted at ACM CoNEXT2017",
         r"ACM CoNEXT 2017 Student Research Workshop에 논문이 게재 확정되었습니다"),
        (r"NRF Grant Awarded \(2017-2020, KRW 90K\)",
         r"한국연구재단(NRF) 연구비를 수주하였습니다 (2017–2020)"),
        (r"Finance Chair for <a",
         r"Finance Chair로 활동 — <a"),
        (r"Gave a talk at Korea University, Seoul, Korea",
         r"고려대학교에서 발표하였습니다"),
        (r"Gave a CS Colloquium talk at Hanyang University and Inha University",
         r"한양대학교·인하대학교 CS Colloquium에서 발표하였습니다"),
        (r'Best Paper Award \(우수 논문상\) at CISC-W 2017 - "Towards Machine Generated Passwords"',
         r'CISC-W 2017 Best Paper Award(우수 논문상) 수상 — "Towards Machine Generated Passwords"'),
        (r"Won the 2nd place at National Data Science Challenge",
         r"전국 데이터사이언스 챌린지에서 2위를 수상하였습니다"),
        (r'Best Paper Award at WISA 2016 - "3D CAPTCHAs"',
         r'WISA 2016 Best Paper Award 수상 — "3D CAPTCHAs"'),
        (r"Two papers acceptance at <b>(.*?)</b> \(acceptance rate=(.*?)\)",
         r"<b>\1</b>에 논문 2편이 게재 확정되었습니다 (채택률=\2)"),
    ]

    out = t
    for pat, repl in patterns:
        if re.search(pat, out, flags=re.I):
            out = re.sub(pat, repl, out, count=1, flags=re.I)
            break

    out = out.replace(">media<", ">관련 기사<")
    return out


def patch_newsdata():
    path = ROOT / "js" / "newsdata.js"
    text = path.read_text(encoding="utf-8")
    # Match each news object that has text: '...'
    pattern = re.compile(
        r"(\{\s*icon:\s*'[^']*',\s*date:\s*'[^']*',\s*year:\s*\d+,\s*text:\s*)((?:'(?:\\'|[^'])*')|(?:\"(?:\\\"|[^\"])*\"))(\s*\})",
        re.S,
    )

    def repl(m: re.Match) -> str:
        prefix, lit, suffix = m.group(1), m.group(2), m.group(3)
        raw = lit[1:-1].replace("\\'", "'").replace('\\"', '"')
        # skip if already has text_ko nearby (shouldn't in this match)
        ko = translate_news(raw)
        return f"{prefix}{lit},\n        text_ko: '{js_escape(ko)}'{suffix}"

    # Avoid double-patch
    if "text_ko:" in text:
        # Strip existing text_ko then re-add for consistency
        text = re.sub(r",\s*text_ko:\s*(?:'(?:\\'|[^'])*'|\"(?:\\\"|[^\"])*\")", "", text)

    new_text, n = pattern.subn(repl, text)
    path.write_text(new_text, encoding="utf-8")
    print(f"newsdata: patched {n} items with text_ko")


# ---------------------------------------------------------------------------
# GALLERY: fix AGC captions
# ---------------------------------------------------------------------------

def patch_gallery():
    path = ROOT / "js" / "imagedata.js"
    text = path.read_text(encoding="utf-8")
    text2 = text.replace(
        "desc_ko: 'AGC 2022'",
        "desc_ko: 'AI Grand Challenge(AGC) 2022'",
    )
    if text2 != text:
        path.write_text(text2, encoding="utf-8")
        print("gallery: updated AGC captions")
    else:
        print("gallery: no AGC change needed")


# ---------------------------------------------------------------------------
# FOREN_INS
# ---------------------------------------------------------------------------

FOREN_EXTRA = r"""
        'foren.source': { en: '1. Source Image', ko: '1. 원본 이미지' },
        'foren.selectFile': { en: 'Select File', ko: '파일 선택' },
        'foren.res': { en: 'Res:', ko: '해상도:' },
        'foren.mode': { en: '2. Analysis Mode', ko: '2. 분석 모드' },
        'foren.magnification': { en: 'MAGNIFICATION', ko: '배율' },
        'foren.guide': { en: 'Forensic Guide', ko: '포렌식 가이드' },
        'foren.stdTitle': { en: 'Standard View', ko: '표준 보기' },
        'foren.stdBody': { en: 'Checked (ON): Check for unnatural blurring or "ghosting" around edges.', ko: '켜짐(ON): 가장자리의 부자연스러운 흐림이나 고스팅 현상을 확인하십시오.' },
        'foren.heatTitle': { en: 'Heat Map Filter', ko: '히트맵 필터' },
        'foren.heatBody': { en: 'Unchecked (OFF): Amplifies sensor noise to find mismatched pixel patterns.', ko: '꺼짐(OFF): 센서 노이즈를 증폭하여 불일치하는 픽셀 패턴을 찾습니다.' },
        'foren.magTitle': { en: 'Magnification', ko: '확대 배율' },
        'foren.magBody': { en: 'Adjust the zoom power (2x to 10x) for deep pixel inspection.', ko: '정밀 픽셀 검사를 위해 확대 배율(2x~10x)을 조정하십시오.' },
        'foren.snapshot': { en: 'Save Snapshot', ko: '스냅샷 저장' },
        'foren.lockHint': { en: 'Click image to lock area.', ko: '이미지를 클릭하면 영역을 고정합니다.' },
        'foren.origView': { en: 'Original View', ko: '원본 보기' },
        'foren.noFilter': { en: 'NO FILTER', ko: '필터 없음' },
        'foren.histActive': { en: 'Histogram Active', ko: '히스토그램 활성' },
        'foren.heatMap': { en: 'HEAT MAP', ko: '히트맵' },
"""


def patch_foren():
    # dict
    i18n = ROOT / "js" / "i18n.js"
    it = i18n.read_text(encoding="utf-8")
    if "'foren.source':" not in it:
        # insert before foren.back if present, else before closing of DICT after foren.title duplicate
        anchor = "        'foren.back':"
        if anchor in it:
            it = it.replace(anchor, FOREN_EXTRA + "\n" + anchor, 1)
        else:
            raise SystemExit("foren.back missing")
        i18n.write_text(it, encoding="utf-8")
        print("i18n: added foren control keys")
    else:
        print("i18n: foren controls already present")

    fp = ROOT / "Foren_ins.html"
    ft = fp.read_text(encoding="utf-8")

    reps = [
        (
            '''<a href="Datasets.html" class="inline-flex items-center gap-2 text-blue-700 font-bold hover:text-blue-900 transition-colors">
                        <i class="fas fa-arrow-left"></i> Back to Datasets
                    </a>''',
            '''<a href="Datasets.html" class="inline-flex items-center gap-2 text-blue-700 font-bold hover:text-blue-900 transition-colors">
                        <i class="fas fa-arrow-left"></i> <span data-i18n="foren.back">Back to Datasets</span>
                    </a>''',
        ),
        (
            '<label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">1. Source Image</label>',
            '<label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3" data-i18n="foren.source">1. Source Image</label>',
        ),
        (
            '<i class="fas fa-file-image"></i> Select File',
            '<i class="fas fa-file-image"></i> <span data-i18n="foren.selectFile">Select File</span>',
        ),
        (
            'Res: <span id="meta-res"',
            '<span data-i18n="foren.res">Res:</span> <span id="meta-res"',
        ),
        (
            '<label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">2. Analysis Mode</label>',
            '<label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3" data-i18n="foren.mode">2. Analysis Mode</label>',
        ),
        (
            '<span>MAGNIFICATION</span>',
            '<span data-i18n="foren.magnification">MAGNIFICATION</span>',
        ),
        (
            '<h4 class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Forensic Guide</h4>',
            '<h4 class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4" data-i18n="foren.guide">Forensic Guide</h4>',
        ),
        (
            '<p class="text-[11px] font-bold text-gray-700">Standard View</p>',
            '<p class="text-[11px] font-bold text-gray-700" data-i18n="foren.stdTitle">Standard View</p>',
        ),
        (
            '<p class="text-[10px] text-gray-500 leading-normal mt-0.5">Checked (ON): Check for unnatural blurring or "ghosting" around edges.</p>',
            '<p class="text-[10px] text-gray-500 leading-normal mt-0.5" data-i18n="foren.stdBody">Checked (ON): Check for unnatural blurring or "ghosting" around edges.</p>',
        ),
        (
            '<p class="text-[11px] font-bold text-gray-700">Heat Map Filter</p>',
            '<p class="text-[11px] font-bold text-gray-700" data-i18n="foren.heatTitle">Heat Map Filter</p>',
        ),
        (
            '<p class="text-[10px] text-gray-500 leading-normal mt-0.5">Unchecked (OFF): Amplifies sensor noise to find mismatched pixel patterns.</p>',
            '<p class="text-[10px] text-gray-500 leading-normal mt-0.5" data-i18n="foren.heatBody">Unchecked (OFF): Amplifies sensor noise to find mismatched pixel patterns.</p>',
        ),
        (
            '<p class="text-[11px] font-bold text-gray-700">Magnification</p>',
            '<p class="text-[11px] font-bold text-gray-700" data-i18n="foren.magTitle">Magnification</p>',
        ),
        (
            '<p class="text-[10px] text-gray-500 leading-normal mt-0.5">Adjust the zoom power (2x to 10x) for deep pixel inspection.</p>',
            '<p class="text-[10px] text-gray-500 leading-normal mt-0.5" data-i18n="foren.magBody">Adjust the zoom power (2x to 10x) for deep pixel inspection.</p>',
        ),
        (
            '<i class="fas fa-camera"></i> Save Snapshot',
            '<i class="fas fa-camera"></i> <span data-i18n="foren.snapshot">Save Snapshot</span>',
        ),
        (
            '<p class="text-[10px] text-gray-400 mt-2 text-center font-medium italic">Click image to lock area.</p>',
            '<p class="text-[10px] text-gray-400 mt-2 text-center font-medium italic" data-i18n="foren.lockHint">Click image to lock area.</p>',
        ),
        # JS dynamic labels
        (
            'modeTitle.textContent = "Original View";',
            'modeTitle.textContent = (typeof DashI18n !== "undefined") ? DashI18n.t("foren.origView") : "Original View";',
        ),
        (
            'modeSubtitle.textContent = "NO FILTER";',
            'modeSubtitle.textContent = (typeof DashI18n !== "undefined") ? DashI18n.t("foren.noFilter") : "NO FILTER";',
        ),
        (
            'modeTitle.textContent = "Histogram Active";',
            'modeTitle.textContent = (typeof DashI18n !== "undefined") ? DashI18n.t("foren.histActive") : "Histogram Active";',
        ),
        (
            'modeSubtitle.textContent = "HEAT MAP";',
            'modeSubtitle.textContent = (typeof DashI18n !== "undefined") ? DashI18n.t("foren.heatMap") : "HEAT MAP";',
        ),
        (
            'updateStatusUI();\n\n        modeToggle.addEventListener',
            'updateStatusUI();\n        window.addEventListener("dash:langchange", updateStatusUI);\n\n        modeToggle.addEventListener',
        ),
    ]

    for old, new in reps:
        if old not in ft:
            print("WARN foren missing:", old[:70])
        else:
            ft = ft.replace(old, new, 1)

    fp.write_text(ft, encoding="utf-8")
    print("Foren_ins.html patched")


# ---------------------------------------------------------------------------
# PROFESSOR
# ---------------------------------------------------------------------------

PROF_DICT = r"""
        'prof.present': { en: '2019 - Present', ko: '2019 – 현재' },
        'prof.dept.ads': { en: 'Applied Data Science (데이터사이언스)', ko: '데이터사이언스융합학과' },
        'prof.dept.cse': { en: 'CSE (소프트웨어/융합보안대학원)', ko: 'CSE (소프트웨어/융합보안대학원)' },
        'prof.dept.aai': { en: 'Applied AI Dept. (인공지능융합학과)', ko: '인공지능융합학과' },
        'prof.dept.ai': { en: 'AI (인공지능학과)', ko: '인공지능학과' },
        'prof.dept.isw': { en: '지능형소프트웨어학과', ko: '지능형소프트웨어학과' },
        'prof.cs': { en: 'Computer Science', ko: '컴퓨터과학' },
        'prof.ece': { en: 'Electrical and Computer Engineering', ko: '전기·컴퓨터공학' },
        'prof.ee': { en: 'Electrical Engineering', ko: '전기공학' },
        'prof.hs': { en: 'High School', ko: '고등학교' },
        'prof.fellowshipLine': { en: 'SKKU Fellowship Professor, 2022', ko: '성균관대학교 Fellowship 교수, 2022' },
        'prof.newsLink': { en: '(News)', ko: '(뉴스)' },
        'prof.award1': { en: '<a href="https://sites.google.com/view/synrdinbaswacv2026" target="_blank" class="hover:text-amber-700 hover:underline">SAFE: Image Edit Detection and Localization Challenge</a> (Workshop, 2nd Place)', ko: '<a href="https://sites.google.com/view/synrdinbaswacv2026" target="_blank" class="hover:text-amber-700 hover:underline">SAFE: Image Edit Detection and Localization Challenge</a> (워크숍, 2위)' },
        'prof.award2': { en: '<a href="https://sites.google.com/berkeley.edu/apai-iccv2025" target="_blank" class="hover:text-amber-700 hover:underline">SAFE: Synthetic Video Detection Challenge</a> (Workshop – APAI, 2nd Place)', ko: '<a href="https://sites.google.com/berkeley.edu/apai-iccv2025" target="_blank" class="hover:text-amber-700 hover:underline">SAFE: Synthetic Video Detection Challenge</a> (워크숍 – APAI, 2위)' },
        'prof.award3': { en: '<a href="https://pakdd2024.org/award24awardpakdd24/" target="_blank" class="hover:text-amber-700 hover:underline">PAKDD Best Paper Running-Up Award</a> (2nd Place out of 720 papers)', ko: '<a href="https://pakdd2024.org/award24awardpakdd24/" target="_blank" class="hover:text-amber-700 hover:underline">PAKDD Best Paper Running-Up Award</a> (전체 720편 중 2위)' },
        'prof.award4': { en: '<a href="https://www.sigapp.org/sac/sac2023/" target="_blank" class="hover:text-blue-700 hover:underline">ACM/SIGAPP SAC Best Paper Award</a> (AI and Agents)', ko: '<a href="https://www.sigapp.org/sac/sac2023/" target="_blank" class="hover:text-blue-700 hover:underline">ACM/SIGAPP SAC Best Paper Award</a> (AI and Agents)' },
        'prof.award4arch': { en: 'ACM Best Paper Awards Archive', ko: 'ACM Best Paper Awards 아카이브' },
        'prof.award5': { en: 'Invited for Schloss Dagstuhl (Leibniz Center for Informatics) on 23021 Media Forensics and the Challenge of Big Data', ko: 'Schloss Dagstuhl(라이프니츠 정보학 센터) 세미나 23021 Media Forensics and the Challenge of Big Data에 초청되었습니다' },
        'prof.award6': { en: 'KSC 2022 Best Paper Award', ko: 'KSC 2022 Best Paper Award' },
        'prof.award7suffix': { en: ', 27th ACM SIGKDD (KDD)', ko: ', 제27회 ACM SIGKDD (KDD)' },
        'prof.award8': { en: 'The 17th World Conference on Information Security Applications (WISA), Best Paper Award, Korea', ko: '제17회 WISA Best Paper Award (대한민국)' },
        'prof.award9': { en: 'Mary Gates Scholar, University of Washington, Seattle, USA', ko: 'Mary Gates Scholar, University of Washington (시애틀, 미국)' },
        'prof.inviteLabel': { en: 'Invitation • 2023', ko: '초청 • 2023' },
        'prof.scholarLabel': { en: 'Scholar • 2003', ko: '장학생 • 2003' },
        'prof.services': { en: 'Professional Services', ko: '학술 봉사 활동' },
        'prof.leadership': { en: 'Leadership Roles (2024–2025)', ko: '리더십 역할 (2024–2025)' },
        'prof.lead1': { en: 'KDD Research Track Area Chair', ko: 'KDD Research Track Area Chair' },
        'prof.lead2': { en: 'CIKM Senior PC on Resource/Demo Track', ko: 'CIKM Resource/Demo Track Senior PC' },
        'prof.lead3': { en: 'IJCAI Web Chair', ko: 'IJCAI Web Chair' },
        'prof.lead4': { en: 'ACML Area Chair', ko: 'ACML Area Chair' },
        'prof.chairing': { en: 'Conference/Workshop Chairing', ko: '학회/워크숍 좌장' },
        'prof.tpc': { en: 'Technical Program Committees', ko: '기술프로그램위원회(TPC)' },
        'prof.areas': { en: 'Areas:', ko: '분야:' },
        'prof.area.vision': { en: 'Vision', ko: '비전' },
        'prof.area.ml': { en: 'ML & AI', ko: '머신러닝·AI' },
        'prof.area.dm': { en: 'Data Mining', ko: '데이터 마이닝' },
        'prof.area.sec': { en: 'Security', ko: '보안' },
        'prof.area.web': { en: 'Web', ko: '웹' },
        'prof.tier1': { en: 'Tier-1 venue', ko: '최우수 학술대회' },
        'prof.cvArea': { en: 'Computer Vision', ko: '컴퓨터 비전' },
        'prof.mlArea': { en: 'Machine Learning & AI', ko: '머신러닝 및 AI' },
        'prof.dmArea': { en: 'Data Mining', ko: '데이터 마이닝' },
        'prof.secArea': { en: 'Security & Privacy', ko: '보안 및 프라이버시' },
        'prof.webArea': { en: 'Web', ko: '웹' },
        'prof.venues': { en: 'venues', ko: '개 학술대회' },
        'prof.editorial': { en: 'Editorial Boards', ko: '편집위원회' },
        'prof.sessionChair': { en: 'Session Chair', ko: '세션 체어' },
        'prof.wsOrg': { en: 'Workshop Organizer', ko: '워크숍 조직위원' },
        'prof.wdc': { en: 'ACM AsiaCCS Workshop on the Security Implications of Deepfakes and Cheapfakes (WDC)', ko: 'ACM AsiaCCS Workshop on the Security Implications of Deepfakes and Cheapfakes (WDC)' },
        'prof.ansd': { en: 'The 1st International Workshop on Anomaly and Novelty Detection in Satellite and Drones Systems (ANSD) at CIKM 2023, Birmingham UK', ko: '제1회 International Workshop on Anomaly and Novelty Detection in Satellite and Drones Systems (ANSD), CIKM 2023 (영국 버밍엄)' },
        'prof.aimm': { en: 'The First International Workshop on AI-Driven Modeling and Management of Data (AIMM 2024) at International Conference on Conceptual Modeling (ER) 2024, Carnegie Mellon University, PA, USA', ko: '제1회 International Workshop on AI-Driven Modeling and Management of Data (AIMM 2024), ER 2024 (Carnegie Mellon University, 미국)' },
"""


def patch_professor_dict():
    i18n = ROOT / "js" / "i18n.js"
    it = i18n.read_text(encoding="utf-8")
    if "'prof.services':" in it:
        print("i18n: professor extras already present")
        return
    anchor = "        'foren.back':"
    # Prefer insert before foren extras if foren.source exists
    if "'foren.source':" in it:
        anchor = "        'foren.source':"
    if anchor not in it:
        anchor = "        'foren.locked':"
    it = it.replace(anchor, PROF_DICT + "\n" + anchor, 1)
    i18n.write_text(it, encoding="utf-8")
    print("i18n: added professor remaining keys")


def patch_professor_html():
    path = ROOT / "Professor.html"
    t = path.read_text(encoding="utf-8")

    reps = [
        # Job titles
        (
            '<h5 class="text-base font-black text-gray-800 leading-tight">Research Assistant\n                                        Professor</h5>',
            '<h5 class="text-base font-black text-gray-800 leading-tight" data-i18n="prof.rap">Research Assistant Professor</h5>',
        ),
        (
            '<h5 class="text-base font-black text-gray-800 leading-tight">Assistant Professor\n                                    </h5>',
            '<h5 class="text-base font-black text-gray-800 leading-tight" data-i18n="prof.asstProf">Assistant Professor</h5>',
        ),
        (
            '<h5 class="text-base font-black text-gray-800 leading-tight">Member of Technical Staff\n                                </h5>',
            '<h5 class="text-base font-black text-gray-800 leading-tight" data-i18n="prof.mts">Member of Technical Staff</h5>',
        ),
        (
            '<h5 class="text-sm font-black text-gray-800 leading-tight">Researcher</h5>',
            '<h5 class="text-sm font-black text-gray-800 leading-tight" data-i18n="prof.researcher">Researcher</h5>',
        ),
        (
            '<h5 class="text-sm font-black text-gray-800 leading-tight">Co-op Intern</h5>',
            '<h5 class="text-sm font-black text-gray-800 leading-tight" data-i18n="prof.intern">Co-op Intern</h5>',
        ),
        (
            '''Note: Part-time cook at Burger King, Waiter & Dishwasher, once upon a time in
                                highschool/college years.''',
            '''<span data-i18n="prof.workNote">Note: Part-time cook at Burger King, Waiter & Dishwasher, once upon a time in highschool/college years.</span>''',
        ),
        (
            '<p class="text-xs text-gray-400 font-bold mt-1">2019 - Present</p>',
            '<p class="text-xs text-gray-400 font-bold mt-1" data-i18n="prof.present">2019 - Present</p>',
        ),
        (
            '''<p class="font-bold text-gray-900 leading-snug">SKKU Fellowship Professor, 2022 <a
                                    href="https://cs.skku.edu/ko/edures/education/view/7054" target="_blank"
                                    class="text-blue-500 hover:underline italic font-sans">(News)</a></p>''',
            '''<p class="font-bold text-gray-900 leading-snug"><span data-i18n="prof.fellowshipLine">SKKU Fellowship Professor, 2022</span> <a
                                    href="https://cs.skku.edu/ko/edures/education/view/7054" target="_blank"
                                    class="text-blue-500 hover:underline italic font-sans" data-i18n="prof.newsLink">(News)</a></p>''',
        ),
        # Education degrees
        (
            'High School</p>',
            '<span data-i18n="prof.hs">High School</span></p>',
        ),
        (
            '<h4 class="section-accent text-xl font-black text-gray-900 mb-10">Professional Services</h4>',
            '<h4 class="section-accent text-xl font-black text-gray-900 mb-10" data-i18n="prof.services">Professional Services</h4>',
        ),
        (
            '''<h5 class="text-base font-black text-blue-600 uppercase tracking-wide">Leadership Roles
                            (2024–2025)</h5>''',
            '''<h5 class="text-base font-black text-blue-600 uppercase tracking-wide" data-i18n="prof.leadership">Leadership Roles (2024–2025)</h5>''',
        ),
        (
            '<p class="text-[13px] font-bold text-gray-700">KDD Research Track Area Chair</p>',
            '<p class="text-[13px] font-bold text-gray-700" data-i18n="prof.lead1">KDD Research Track Area Chair</p>',
        ),
        (
            '<p class="text-[13px] font-bold text-gray-700">CIKM Senior PC on Resource/Demo Track</p>',
            '<p class="text-[13px] font-bold text-gray-700" data-i18n="prof.lead2">CIKM Senior PC on Resource/Demo Track</p>',
        ),
        (
            '<p class="text-[13px] font-bold text-gray-700">IJCAI Web Chair</p>',
            '<p class="text-[13px] font-bold text-gray-700" data-i18n="prof.lead3">IJCAI Web Chair</p>',
        ),
        (
            '<p class="text-[13px] font-bold text-gray-700">ACML Area Chair</p>',
            '<p class="text-[13px] font-bold text-gray-700" data-i18n="prof.lead4">ACML Area Chair</p>',
        ),
        (
            '''<h5 class="text-sm font-black text-gray-800 uppercase tracking-wider">Conference/Workshop
                            Chairing</h5>''',
            '''<h5 class="text-sm font-black text-gray-800 uppercase tracking-wider" data-i18n="prof.chairing">Conference/Workshop Chairing</h5>''',
        ),
        (
            '''<h5 class="text-sm font-black text-gray-800 uppercase tracking-wider">Technical Program
                            Committees</h5>''',
            '''<h5 class="text-sm font-black text-gray-800 uppercase tracking-wider" data-i18n="prof.tpc">Technical Program Committees</h5>''',
        ),
        (
            '<span class="text-[10px] font-black text-gray-400 uppercase tracking-widest mr-2">Areas:</span>',
            '<span class="text-[10px] font-black text-gray-400 uppercase tracking-widest mr-2" data-i18n="prof.areas">Areas:</span>',
        ),
        (
            '>Vision</span>',
            ' data-i18n="prof.area.vision">Vision</span>',
        ),
        (
            '>ML &amp; AI</span>',
            ' data-i18n="prof.area.ml">ML &amp; AI</span>',
        ),
        (
            '>Data Mining</span>',
            ' data-i18n="prof.area.dm">Data Mining</span>',
            # careful - first occurrence in areas chips
        ),
        (
            '>Security</span>',
            ' data-i18n="prof.area.sec">Security</span>',
        ),
        (
            '>Web</span>',
            ' data-i18n="prof.area.web">Web</span>',
            # first chip
        ),
        (
            '<span class="ml-auto text-[10px] font-black text-amber-500"><i class="fas fa-star"></i> Tier-1 venue</span>',
            '<span class="ml-auto text-[10px] font-black text-amber-500"><i class="fas fa-star"></i> <span data-i18n="prof.tier1">Tier-1 venue</span></span>',
        ),
        (
            '<h6 class="text-[11px] font-black text-indigo-700 uppercase tracking-widest">Computer Vision</h6>',
            '<h6 class="text-[11px] font-black text-indigo-700 uppercase tracking-widest" data-i18n="prof.cvArea">Computer Vision</h6>',
        ),
        (
            '<h6 class="text-[11px] font-black text-rose-700 uppercase tracking-widest">Machine Learning &amp; AI</h6>',
            '<h6 class="text-[11px] font-black text-rose-700 uppercase tracking-widest" data-i18n="prof.mlArea">Machine Learning &amp; AI</h6>',
        ),
        (
            '<h6 class="text-[11px] font-black text-amber-700 uppercase tracking-widest">Data Mining</h6>',
            '<h6 class="text-[11px] font-black text-amber-700 uppercase tracking-widest" data-i18n="prof.dmArea">Data Mining</h6>',
        ),
        (
            '<h6 class="text-[11px] font-black text-red-700 uppercase tracking-widest">Security &amp; Privacy</h6>',
            '<h6 class="text-[11px] font-black text-red-700 uppercase tracking-widest" data-i18n="prof.secArea">Security &amp; Privacy</h6>',
        ),
        (
            '<h6 class="text-[11px] font-black text-sky-700 uppercase tracking-widest">Web</h6>',
            '<h6 class="text-[11px] font-black text-sky-700 uppercase tracking-widest" data-i18n="prof.webArea">Web</h6>',
        ),
        (
            '<h5 class="text-sm font-black text-gray-800 uppercase tracking-wider">Editorial Boards</h5>',
            '<h5 class="text-sm font-black text-gray-800 uppercase tracking-wider" data-i18n="prof.editorial">Editorial Boards</h5>',
        ),
        (
            '<h5 class="text-sm font-black text-gray-800 uppercase tracking-wider">Session Chair</h5>',
            '<h5 class="text-sm font-black text-gray-800 uppercase tracking-wider" data-i18n="prof.sessionChair">Session Chair</h5>',
        ),
        (
            '<h5 class="text-sm font-black text-gray-800 uppercase tracking-wider">Workshop Organizer</h5>',
            '<h5 class="text-sm font-black text-gray-800 uppercase tracking-wider" data-i18n="prof.wsOrg">Workshop Organizer</h5>',
        ),
        (
            '<p class="text-sm font-black text-gray-900 mb-4">ACM AsiaCCS Workshop on the Security Implications of Deepfakes and Cheapfakes (WDC)</p>',
            '<p class="text-sm font-black text-gray-900 mb-4" data-i18n="prof.wdc">ACM AsiaCCS Workshop on the Security Implications of Deepfakes and Cheapfakes (WDC)</p>',
        ),
        (
            'Invitation • 2023</p>',
            '<span data-i18n="prof.inviteLabel">Invitation • 2023</span></p>',
        ),
        (
            'Scholar • 2003</p>',
            '<span data-i18n="prof.scholarLabel">Scholar • 2003</span></p>',
        ),
    ]

    # Awards - replace descriptive paragraphs carefully with data-i18n-html wrappers
    award_reps = [
        (
            '''<a href="https://sites.google.com/view/synrdinbaswacv2026" target="_blank"
                            class="hover:text-amber-700 hover:underline">SAFE: Image Edit Detection and Localization Challenge</a> (Workshop, 
                            2nd Place)''',
            '''<span data-i18n-html="prof.award1"><a href="https://sites.google.com/view/synrdinbaswacv2026" target="_blank" class="hover:text-amber-700 hover:underline">SAFE: Image Edit Detection and Localization Challenge</a> (Workshop, 2nd Place)</span>''',
        ),
        (
            '''<a href="https://sites.google.com/berkeley.edu/apai-iccv2025" target="_blank"
                            class="hover:text-amber-700 hover:underline">SAFE: Synthetic Video Detection Challenge</a> (Workshop – APAI,
                             2nd Place)''',
            '''<span data-i18n-html="prof.award2"><a href="https://sites.google.com/berkeley.edu/apai-iccv2025" target="_blank" class="hover:text-amber-700 hover:underline">SAFE: Synthetic Video Detection Challenge</a> (Workshop – APAI, 2nd Place)</span>''',
        ),
        (
            '''<a href="https://pakdd2024.org/award24awardpakdd24/" target="_blank"
                                class="hover:text-amber-700 hover:underline">PAKDD Best Paper Running-Up Award</a> (2nd
                            Place out of 720 papers)''',
            '''<span data-i18n-html="prof.award3"><a href="https://pakdd2024.org/award24awardpakdd24/" target="_blank" class="hover:text-amber-700 hover:underline">PAKDD Best Paper Running-Up Award</a> (2nd Place out of 720 papers)</span>''',
        ),
        (
            '''<a href="https://www.sigapp.org/sac/sac2023/" target="_blank"
                                class="hover:text-blue-700 hover:underline">ACM/SIGAPP SAC Best Paper Award</a> (AI and
                            Agents)
                            <span class="block mt-1 text-[11px]"><a
                                    href="https://www.acm.org/conferences/best-paper-awards" target="_blank"
                                    class="text-blue-600 hover:underline">ACM Best Paper Awards Archive</a></span>''',
            '''<span data-i18n-html="prof.award4"><a href="https://www.sigapp.org/sac/sac2023/" target="_blank" class="hover:text-blue-700 hover:underline">ACM/SIGAPP SAC Best Paper Award</a> (AI and Agents)</span>
                            <span class="block mt-1 text-[11px]"><a href="https://www.acm.org/conferences/best-paper-awards" target="_blank" class="text-blue-600 hover:underline" data-i18n="prof.award4arch">ACM Best Paper Awards Archive</a></span>''',
        ),
        (
            '''Invited for Schloss Dagstuhl (Leibniz Center for Informatics) on 23021 Media Forensics and the Challenge of Big Data''',
            '''<span data-i18n="prof.award5">Invited for Schloss Dagstuhl (Leibniz Center for Informatics) on 23021 Media Forensics and the Challenge of Big Data</span>''',
        ),
        (
            '''class="hover:text-amber-700 hover:underline">KSC 2022 Best Paper
                                Award</a>''',
            '''class="hover:text-amber-700 hover:underline" data-i18n="prof.award6">KSC 2022 Best Paper Award</a>''',
        ),
        (
            '''class="hover:text-blue-700 hover:underline">PLP 2021 Best Paper Award</a>, 27th ACM SIGKDD (KDD)''',
            '''class="hover:text-blue-700 hover:underline">PLP 2021 Best Paper Award</a><span data-i18n="prof.award7suffix">, 27th ACM SIGKDD (KDD)</span>''',
        ),
        (
            '''The 17th World Conference on Information Security Applications (WISA), Best Paper Award, Korea''',
            '''<span data-i18n="prof.award8">The 17th World Conference on Information Security Applications (WISA), Best Paper Award, Korea</span>''',
        ),
        (
            '''Mary Gates Scholar, University of Washington, Seattle, USA''',
            '''<span data-i18n="prof.award9">Mary Gates Scholar, University of Washington, Seattle, USA</span>''',
        ),
    ]

    # Degree field labels - Computer Science appears multiple times
    # Use more specific replacements for education section only via count-limited replaces
    edu_reps = [
        # First CS under Ph.D.
        (
            '''Ph.D.</p>
                                <p class="text-base font-black text-gray-800 mb-1">Computer Science</p>''',
            '''Ph.D.</p>
                                <p class="text-base font-black text-gray-800 mb-1" data-i18n="prof.cs">Computer Science</p>''',
        ),
        (
            '''M.S.</p>
                                <p class="text-base font-black text-gray-800 mb-1">Computer Science</p>''',
            '''M.S.</p>
                                <p class="text-base font-black text-gray-800 mb-1" data-i18n="prof.cs">Computer Science</p>''',
        ),
        (
            '''M.S.</p>
                                <p class="text-base font-black text-gray-800 mb-1">Electrical and Computer Engineering
                                </p>''',
            '''M.S.</p>
                                <p class="text-base font-black text-gray-800 mb-1" data-i18n="prof.ece">Electrical and Computer Engineering</p>''',
        ),
        (
            '''B.S.</p>
                                <p class="text-base font-black text-gray-800 mb-1">Electrical Engineering</p>''',
            '''B.S.</p>
                                <p class="text-base font-black text-gray-800 mb-1" data-i18n="prof.ee">Electrical Engineering</p>''',
        ),
    ]

    for old, new in reps + award_reps + edu_reps:
        if old not in t:
            print("WARN prof missing:", repr(old[:80]))
        else:
            t = t.replace(old, new, 1)

    # venue count labels "7 venues" etc.
    t = t.replace('>7 venues</span>', '><span data-i18n-html="prof.venuesN" data-n="7">7 venues</span></span>', 1)
    # Actually simpler: leave venue counts as numbers+word with a helper - or translate via data-i18n with full string
    t = t.replace(
        '<span class="text-[10px] text-gray-400 font-bold">7 venues</span>',
        '<span class="text-[10px] text-gray-400 font-bold" data-i18n="prof.venues7">7 venues</span>',
        1,
    )
    t = t.replace(
        '<span class="text-[10px] text-gray-400 font-bold">4 venues</span>',
        '<span class="text-[10px] text-gray-400 font-bold" data-i18n="prof.venues4">4 venues</span>',
        1,
    )
    t = t.replace(
        '<span class="text-[10px] text-gray-400 font-bold">3 venues</span>',
        '<span class="text-[10px] text-gray-400 font-bold" data-i18n="prof.venues3">3 venues</span>',
        1,
    )
    # remaining 4 venues for security
    t = t.replace(
        '<span class="text-[10px] text-gray-400 font-bold">4 venues</span>',
        '<span class="text-[10px] text-gray-400 font-bold" data-i18n="prof.venues4">4 venues</span>',
        1,
    )
    t = t.replace(
        '<span class="text-[10px] text-gray-400 font-bold">1 venue</span>',
        '<span class="text-[10px] text-gray-400 font-bold" data-i18n="prof.venues1">1 venue</span>',
        1,
    )

    # Fix accidental broken tags from Vision/Web if double-applied
    t = t.replace(' data-i18n="prof.area.vision" data-i18n="prof.area.vision"', ' data-i18n="prof.area.vision"')

    path.write_text(t, encoding="utf-8")
    print("Professor.html patched")


def patch_professor_venue_keys():
    i18n = ROOT / "js" / "i18n.js"
    it = i18n.read_text(encoding="utf-8")
    extra = """
        'prof.venues7': { en: '7 venues', ko: '7개 학술대회' },
        'prof.venues4': { en: '4 venues', ko: '4개 학술대회' },
        'prof.venues3': { en: '3 venues', ko: '3개 학술대회' },
        'prof.venues1': { en: '1 venue', ko: '1개 학술대회' },
"""
    if "'prof.venues7':" not in it:
        it = it.replace("'prof.services':", extra + "\n        'prof.services':", 1)
        i18n.write_text(it, encoding="utf-8")
        print("i18n: venue count keys added")


def main():
    patch_newsdata()
    patch_gallery()
    patch_foren()
    patch_professor_dict()
    patch_professor_html()
    patch_professor_venue_keys()
    print("DONE")


if __name__ == "__main__":
    main()
