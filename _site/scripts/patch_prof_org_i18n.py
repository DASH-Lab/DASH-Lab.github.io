# -*- coding: utf-8 -*-
"""Close remaining Professor org/workshop i18n gaps + quick leftover scan."""
from pathlib import Path
import re

root = Path(__file__).resolve().parents[1]
prof_path = root / "Professor.html"
i18n_path = root / "js" / "i18n.js"

prof = prof_path.read_text(encoding="utf-8")

replacements = [
    (
        '''<p class="text-sm font-bold text-blue-600 uppercase tracking-wide mt-1">Sungkyunkwan
                                    University (SKKU)</p>''',
        '''<p class="text-sm font-bold text-blue-600 uppercase tracking-wide mt-1" data-i18n="prof.org.skku">Sungkyunkwan University (SKKU)</p>''',
    ),
    (
        '''<p class="text-[11px] font-bold text-gray-500 uppercase tracking-widest mt-1">Stony
                                        Brook University (SBU)</p>
                                    <p class="text-[10px] text-gray-400 font-bold mt-1">Stonybrook, NY | 2017 - 2019</p>''',
        '''<p class="text-[11px] font-bold text-gray-500 uppercase tracking-widest mt-1" data-i18n="prof.org.sbu">Stony Brook University (SBU)</p>
                                    <p class="text-[10px] text-gray-400 font-bold mt-1" data-i18n="prof.org.sbuLoc">Stonybrook, NY | 2017 - 2019</p>''',
    ),
    (
        '''<p class="text-[11px] font-bold text-gray-500 uppercase tracking-widest mt-1">SUNY
                                        Korea</p>''',
        '''<p class="text-[11px] font-bold text-gray-500 uppercase tracking-widest mt-1" data-i18n="prof.org.suny">SUNY Korea</p>''',
    ),
    (
        '''<p class="text-[11px] font-bold text-gray-500 uppercase tracking-widest mt-1">NASA Jet
                                    Propulsion Lab (JPL)</p>
                                <p class="text-[10px] text-gray-400 font-bold mt-1">Pasadena, CA | 2005 - 2014</p>''',
        '''<p class="text-[11px] font-bold text-gray-500 uppercase tracking-widest mt-1" data-i18n="prof.org.jpl">NASA Jet Propulsion Lab (JPL)</p>
                                <p class="text-[10px] text-gray-400 font-bold mt-1" data-i18n="prof.org.jplLoc">Pasadena, CA | 2005 - 2014</p>''',
    ),
    (
        '''<p class="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">
                                        Verisign Research Lab, Reston, VA</p>''',
        '''<p class="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1" data-i18n="prof.org.verisign">Verisign Research Lab, Reston, VA</p>''',
    ),
    (
        '''<p class="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Intel
                                        Corp</p>''',
        '''<p class="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1" data-i18n="prof.org.intel">Intel Corp</p>''',
    ),
    (
        '''<p class="text-xs text-gray-500 font-medium leading-tight">University of Southern
                                    California (USC),<br>Los Angeles, CA</p>''',
        '''<p class="text-xs text-gray-500 font-medium leading-tight" data-i18n-html="prof.edu.usc">University of Southern California (USC),<br>Los Angeles, CA</p>''',
    ),
    (
        '''<p class="text-xs text-gray-500 font-medium leading-tight">University of California, San
                                    Diego (UCSD), CA</p>''',
        '''<p class="text-xs text-gray-500 font-medium leading-tight" data-i18n="prof.edu.ucsd">University of California, San Diego (UCSD), CA</p>''',
    ),
    (
        '''<p class="text-xs text-gray-500 font-medium leading-tight">University of Washington
                                    (UW), Seattle, WA</p>''',
        '''<p class="text-xs text-gray-500 font-medium leading-tight" data-i18n="prof.edu.uw">University of Washington (UW), Seattle, WA</p>''',
    ),
    (
        '''<p class="text-base font-black text-gray-800 mb-1">Lynnwood High School</p>
                                <p class="text-xs text-gray-500 font-medium leading-tight">Lynnwood, WA, USA</p>''',
        '''<p class="text-base font-black text-gray-800 mb-1" data-i18n="prof.edu.lynnwood">Lynnwood High School</p>
                                <p class="text-xs text-gray-500 font-medium leading-tight" data-i18n="prof.edu.lynnwoodLoc">Lynnwood, WA, USA</p>''',
    ),
    (
        '''<p class="text-[12px] font-black text-gray-800 leading-snug">ACM CoNext Finance Chair</p>''',
        '''<p class="text-[12px] font-black text-gray-800 leading-snug" data-i18n="prof.chair1">ACM CoNext Finance Chair</p>''',
    ),
    (
        '''<p class="text-[12px] font-black text-gray-800 leading-snug">EAI CyDiP Technical Program Committee Chair</p>''',
        '''<p class="text-[12px] font-black text-gray-800 leading-snug" data-i18n="prof.chair2">EAI CyDiP Technical Program Committee Chair</p>''',
    ),
    (
        '''<p class="text-[12px] font-black text-gray-800 mb-1">CSET Workshop</p>''',
        '''<p class="text-[12px] font-black text-gray-800 mb-1" data-i18n="prof.cset">CSET Workshop</p>''',
    ),
    (
        '''<p class="text-[12px] font-black text-gray-800 mb-1">ACM SAC ML App Track</p>''',
        '''<p class="text-[12px] font-black text-gray-800 mb-1" data-i18n="prof.sacMl">ACM SAC ML App Track</p>''',
    ),
    (
        '''<p class="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">TIIS Editor
                            </p>''',
        '''<p class="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1" data-i18n="prof.tiis">TIIS Editor</p>''',
    ),
    (
        '''<p class="text-[12px] font-bold text-gray-700 leading-tight"><a href="https://sites.google.com/view/ansd23?pli=1" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">The 1st International Workshop on Anomaly and Novelty Detection in Satellite and Drones Systems (ANSD)</a> at <a href="https://uobevents.eventsair.com/cikm2023/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">CIKM 2023</a>, Birmingham UK</p>''',
        '''<p class="text-[12px] font-bold text-gray-700 leading-tight" data-i18n-html="prof.ansdHtml"><a href="https://sites.google.com/view/ansd23?pli=1" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">The 1st International Workshop on Anomaly and Novelty Detection in Satellite and Drones Systems (ANSD)</a> at <a href="https://uobevents.eventsair.com/cikm2023/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">CIKM 2023</a>, Birmingham UK</p>''',
    ),
    (
        '''<p class="text-[12px] font-bold text-gray-700 leading-tight">The First International Workshop on AI-Driven Modeling and Management of Data (AIMM 2024) at <a href="https://insights.sei.cmu.edu/news/international-conference-on-conceptual-modeling-er-2024-opens-call-for-papers/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">International Conference on Conceptual Modeling (ER) 2024</a>, Carnegie Mellon University, PA, USA</p>''',
        '''<p class="text-[12px] font-bold text-gray-700 leading-tight" data-i18n-html="prof.aimmHtml">The First International Workshop on AI-Driven Modeling and Management of Data (AIMM 2024) at <a href="https://insights.sei.cmu.edu/news/international-conference-on-conceptual-modeling-er-2024-opens-call-for-papers/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">International Conference on Conceptual Modeling (ER) 2024</a>, Carnegie Mellon University, PA, USA</p>''',
    ),
    (
        '''target="_blank" class="hover:text-blue-700 hover:underline">PLP 2021 Best Paper Award</a><span data-i18n="prof.award7suffix">, 27th ACM SIGKDD (KDD)</span>''',
        '''target="_blank" class="hover:text-blue-700 hover:underline" data-i18n="prof.award7">PLP 2021 Best Paper Award</a><span data-i18n="prof.award7suffix">, 27th ACM SIGKDD (KDD)</span>''',
    ),
    (
        '''class="hover:text-blue-600 hover:underline">CSE (소프트웨어/융합보안대학원)</a>''',
        '''class="hover:text-blue-600 hover:underline" data-i18n="prof.dept.cse">CSE (소프트웨어/융합보안대학원)</a>''',
    ),
    (
        '''class="hover:text-blue-600 hover:underline">Applied AI Dept. (인공지능융합학과)</a>''',
        '''class="hover:text-blue-600 hover:underline" data-i18n="prof.dept.aai">Applied AI Dept. (인공지능융합학과)</a>''',
    ),
    (
        '''class="hover:text-blue-600 hover:underline">AI (인공지능학과)</a>''',
        '''class="hover:text-blue-600 hover:underline" data-i18n="prof.dept.ai">AI (인공지능학과)</a>''',
    ),
    (
        '''class="hover:text-blue-600 hover:underline">지능형소프트웨어학과</a>''',
        '''class="hover:text-blue-600 hover:underline" data-i18n="prof.dept.isw">지능형소프트웨어학과</a>''',
    ),
]

missing = []
for old, new in replacements:
    if old not in prof:
        missing.append(old[:80].replace("\n", " "))
    else:
        prof = prof.replace(old, new, 1)

# USC appears twice (PhD + MS) — replace remaining identical without attr
usc_plain = '''<p class="text-xs text-gray-500 font-medium leading-tight">University of Southern
                                    California (USC),<br>Los Angeles, CA</p>'''
usc_i18n = '''<p class="text-xs text-gray-500 font-medium leading-tight" data-i18n-html="prof.edu.usc">University of Southern California (USC),<br>Los Angeles, CA</p>'''
while usc_plain in prof:
    prof = prof.replace(usc_plain, usc_i18n, 1)

prof_path.write_text(prof, encoding="utf-8")
print("Professor replacements missing:", len(missing))
for m in missing:
    print(" ", m)

# Inject new dict keys before 'foren.source'
i18n = i18n_path.read_text(encoding="utf-8")
new_keys = '''
        'prof.org.skku': { en: 'Sungkyunkwan University (SKKU)', ko: '성균관대학교 (SKKU)' },
        'prof.org.sbu': { en: 'Stony Brook University (SBU)', ko: 'Stony Brook University (SBU)' },
        'prof.org.sbuLoc': { en: 'Stonybrook, NY | 2017 - 2019', ko: 'Stonybrook, NY | 2017 – 2019' },
        'prof.org.suny': { en: 'SUNY Korea', ko: 'SUNY Korea (한국뉴욕주립대학교)' },
        'prof.org.jpl': { en: 'NASA Jet Propulsion Lab (JPL)', ko: 'NASA Jet Propulsion Lab (JPL)' },
        'prof.org.jplLoc': { en: 'Pasadena, CA | 2005 - 2014', ko: 'Pasadena, CA | 2005 – 2014' },
        'prof.org.verisign': { en: 'Verisign Research Lab, Reston, VA', ko: 'Verisign Research Lab, Reston, VA' },
        'prof.org.intel': { en: 'Intel Corp', ko: 'Intel Corp' },
        'prof.edu.usc': { en: 'University of Southern California (USC),<br>Los Angeles, CA', ko: 'University of Southern California (USC),<br>Los Angeles, CA' },
        'prof.edu.ucsd': { en: 'University of California, San Diego (UCSD), CA', ko: 'University of California, San Diego (UCSD), CA' },
        'prof.edu.uw': { en: 'University of Washington (UW), Seattle, WA', ko: 'University of Washington (UW), Seattle, WA' },
        'prof.edu.lynnwood': { en: 'Lynnwood High School', ko: 'Lynnwood High School' },
        'prof.edu.lynnwoodLoc': { en: 'Lynnwood, WA, USA', ko: 'Lynnwood, WA, USA' },
        'prof.chair1': { en: 'ACM CoNext Finance Chair', ko: 'ACM CoNext 재무 위원장' },
        'prof.chair2': { en: 'EAI CyDiP Technical Program Committee Chair', ko: 'EAI CyDiP 기술프로그램위원회 위원장' },
        'prof.cset': { en: 'CSET Workshop', ko: 'CSET 워크숍' },
        'prof.sacMl': { en: 'ACM SAC ML App Track', ko: 'ACM SAC ML App Track' },
        'prof.tiis': { en: 'TIIS Editor', ko: 'TIIS 편집위원' },
        'prof.award7': { en: 'PLP 2021 Best Paper Award', ko: 'PLP 2021 Best Paper Award' },
        'prof.ansdHtml': {
            en: '<a href="https://sites.google.com/view/ansd23?pli=1" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">The 1st International Workshop on Anomaly and Novelty Detection in Satellite and Drones Systems (ANSD)</a> at <a href="https://uobevents.eventsair.com/cikm2023/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">CIKM 2023</a>, Birmingham UK',
            ko: '<a href="https://sites.google.com/view/ansd23?pli=1" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">제1회 International Workshop on Anomaly and Novelty Detection in Satellite and Drones Systems (ANSD)</a>, <a href="https://uobevents.eventsair.com/cikm2023/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">CIKM 2023</a> (영국 버밍엄)'
        },
        'prof.aimmHtml': {
            en: 'The First International Workshop on AI-Driven Modeling and Management of Data (AIMM 2024) at <a href="https://insights.sei.cmu.edu/news/international-conference-on-conceptual-modeling-er-2024-opens-call-for-papers/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">International Conference on Conceptual Modeling (ER) 2024</a>, Carnegie Mellon University, PA, USA',
            ko: '제1회 International Workshop on AI-Driven Modeling and Management of Data (AIMM 2024), <a href="https://insights.sei.cmu.edu/news/international-conference-on-conceptual-modeling-er-2024-opens-call-for-papers/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">International Conference on Conceptual Modeling (ER) 2024</a> (Carnegie Mellon University, 미국)'
        },

'''

marker = "        'foren.source':"
if "'prof.org.skku':" not in i18n:
    if marker not in i18n:
        raise SystemExit("marker not found")
    i18n = i18n.replace(marker, new_keys + marker, 1)
    i18n_path.write_text(i18n, encoding="utf-8")
    print("i18n keys inserted")
else:
    print("i18n keys already present")

print("done")
