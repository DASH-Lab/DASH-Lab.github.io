/**
 * DASH Lab bilingual i18n (EN ↔ KO)
 * - Preference: localStorage key "dash-lang" ("en" | "ko")
 * - Static copy: data-i18n / data-i18n-html / data-i18n-placeholder / data-i18n-aria / data-i18n-title / data-i18n-alt
 * - Dynamic data: DashI18n.field(obj, 'text') → obj.text_ko when lang=ko
 * - Listeners: window event "dash:langchange" with detail.lang
 */
(function (global) {
    'use strict';

    const STORAGE_KEY = 'dash-lang';
    const SUPPORTED = ['en', 'ko'];

    const MONTH_KO = {
        Jan: '1월', Feb: '2월', Mar: '3월', Apr: '4월', May: '5월', Jun: '6월',
        Jul: '7월', Aug: '8월', Sep: '9월', Oct: '10월', Nov: '11월', Dec: '12월'
    };

    /** @type {Record<string, {en: string, ko: string}>} */
    const DICT = {
        // --- Navigation ---
        'nav.home': { en: 'Home', ko: '홈' },
        'nav.professor': { en: 'Professor', ko: '교수' },
        'nav.datasets': { en: 'Datasets', ko: '데이터셋' },
        'nav.members': { en: 'Members', ko: '구성원' },
        'nav.news': { en: 'News', ko: '소식' },
        'nav.projects': { en: 'Projects', ko: '연구과제' },
        'nav.publications': { en: 'Publications', ko: '논문' },
        'nav.homeAria': { en: 'DASH Lab Home', ko: 'DASH Lab 홈' },
        'nav.langToggle': { en: 'Language', ko: '언어' },
        'nav.langEn': { en: 'EN', ko: 'EN' },
        'nav.langKo': { en: '한국어', ko: '한국어' },

        // --- Footer ---
        'footer.contact': { en: 'DASH Lab', ko: 'DASH Lab' },
        'footer.address': {
            en: 'N Center 86401, Sungkyunkwan University<br>2066 Seobu-ro Jangan-gu Suwon, South Korea',
            ko: '성균관대학교 N센터 86401<br>경기도 수원시 장안구 서부로 2066'
        },
        'footer.visitors': { en: 'Visitors Map', ko: '방문자 지도' },
        'footer.visitorsAria': { en: 'Visitor map', ko: '방문자 지도' },
        'footer.quickLinks': { en: 'Quick Links', ko: '바로가기' },
        'footer.twitter': { en: 'DASH LAB Twitter', ko: 'DASH LAB 트위터' },
        'footer.gradSchool': { en: 'SKKU Graduate School', ko: '성균관대학교 대학원' },
        'footer.dataScience': { en: 'Applied Data Science Dept', ko: '데이터사이언스융합학과' },
        'footer.cs': { en: 'CS & Engineering Dept', ko: '소프트웨어학과' },
        'footer.ai': { en: 'Dept of AI', ko: '인공지능학과' },
        'footer.madeBy': { en: 'Made by', ko: '제작' },
        'footer.copyright': { en: 'Copyright ©', ko: 'Copyright ©' },

        // --- Common UI ---
        'common.close': { en: 'Close', ko: '닫기' },
        'common.click': { en: 'Click', ko: '바로가기' },
        'common.applyNow': { en: 'Apply Now', ko: '지원하기' },
        'common.openForm': { en: 'Open Application Form', ko: '지원서 작성하기' },
        'common.joinUs': { en: 'Join Us', ko: '연구실 지원' },
        'common.posters': { en: 'Posters', ko: '포스터' },
        'common.labPosters': { en: 'Lab posters', ko: '연구실 포스터' },
        'common.clickToView': { en: 'Click to view', ko: '클릭하여 보기' },
        'common.featured': { en: 'Featured', ko: '주요' },
        'common.hideRecruit': { en: 'Hide recruitment poster', ko: '채용 포스터 숨기기' },
        'common.hidePosters': { en: 'Hide poster thumbnails', ko: '포스터 썸네일 숨기기' },
        'common.closePoster': { en: 'Close poster details', ko: '포스터 상세 닫기' },
        'common.recruitPosterAria': { en: 'Recruitment poster', ko: '채용 포스터' },
        'common.labPosterAria': { en: 'Lab poster advertisements', ko: '연구실 포스터 안내' },
        'common.showAbstract': { en: 'Show abstract', ko: '초록 보기' },
        'common.hideAbstract': { en: 'Hide abstract', ko: '초록 숨기기' },
        'common.all': { en: 'All', ko: '전체' },
        'common.archive': { en: 'Archive', ko: '이전' },
        'common.previous': { en: 'Previous', ko: '이전' },
        'common.next': { en: 'Next', ko: '다음' },
        'common.pageOf': { en: 'Page {0} of {1}', ko: '{0} / {1} 페이지' },
        'common.loading': { en: 'Loading data...', ko: '데이터 불러오는 중...' },
        'common.searchPubs': { en: 'Search by title, author, or venue...', ko: '제목, 저자, 학술대회명으로 검색...' },
        'common.noResults': { en: 'No publications found.', ko: '검색된 논문이 없습니다.' },
        'common.earlier': { en: '2017 & Earlier', ko: '2017년 이전' },
        'common.track': { en: 'Track', ko: '트랙' },
        'common.and': { en: 'and', ko: '및' },
        'common.media': { en: 'media', ko: '관련 기사' },
        'common.news': { en: 'News', ko: '뉴스' },
        'common.clickEnlarge': { en: 'Click to enlarge', ko: '클릭하여 확대' },

        // --- Home ---
        'home.title': { en: 'DASH LAB - Home', ko: 'DASH LAB - 홈' },
        'home.heroTagline': {
            en: 'Our Research | Computer Vision | Anomaly Detection | AI Security | DeepFakes | Machine Learning | Data Science Applications',
            ko: '연구 분야 | 컴퓨터 비전 | 이상 탐지 | AI 보안 | 딥페이크 | 머신러닝 | 데이터사이언스 응용'
        },
        'home.feat.dataTitle': { en: 'Data Science', ko: '데이터사이언스' },
        'home.feat.dataDesc': {
            en: 'Innovating at the intersection of <strong>Applied Data Science</strong>, Data Engineering, and <strong>Satellite Systems</strong>.',
            ko: '<strong>응용 데이터사이언스</strong>, 데이터 엔지니어링, <strong>위성 시스템</strong>의 교차점에서 혁신을 추구합니다.'
        },
        'home.feat.aiTitle': { en: 'Artificial Intelligence', ko: '인공지능' },
        'home.feat.aiDesc': {
            en: 'Advancing the frontiers of <strong>DeepFake detection</strong> and high-performance <strong>Anomaly modeling</strong>.',
            ko: '<strong>딥페이크 탐지</strong>와 고성능 <strong>이상 탐지 모델링</strong> 연구의 최전선을 개척합니다.'
        },
        'home.feat.secTitle': { en: 'Security & Privacy', ko: '보안 및 프라이버시' },
        'home.feat.secDesc': {
            en: 'Protecting digital frontiers through <strong>Privacy Preservation</strong> and <strong>Secure Machine Learning</strong> architectures.',
            ko: '<strong>프라이버시 보호</strong>와 <strong>안전한 머신러닝</strong> 아키텍처를 통해 디지털 환경을 보호합니다.'
        },
        'home.recruit.badge': { en: 'Now Recruiting', ko: '모집 중' },
        'home.recruit.headline': {
            en: 'Shape the Future of <span class="text-blue-600">AI & Security</span> with us.',
            ko: '함께 <span class="text-blue-600">AI와 보안</span>의 미래를 만들어가십시오.'
        },
        'home.recruit.body': {
            en: 'We are looking for dedicated individuals whose research interests align with Computer Vision, Anomaly Detection, and Applied Data Science. <strong>Coding proficiency and passion for research are highly valued.</strong>',
            ko: '컴퓨터 비전, 이상 탐지, 응용 데이터사이언스에 관심 있는 열정적인 연구자를 모집합니다. <strong>코딩 역량과 연구에 대한 열정을 높이 평가합니다.</strong>'
        },
        'home.recruit.notice': {
            en: 'Only the applicants who fill out this form have their applications looked through. Any emails sent directly will be ignored and only the Google Forms will be accepted.',
            ko: '공식 지원서를 작성하신 분에 한해 지원서를 검토합니다. 개별 이메일로 보내신 지원은 접수되지 않으며, Google Forms를 통한 지원만 수락됩니다.'
        },
        'home.recruit.note': { en: '* Recommended for dedicated researchers', ko: '* 연구에 열정을 가진 분께 권장합니다' },
        'home.modal.title': { en: 'Join Our Lab', ko: '연구실 지원 안내' },
        'home.modal.body': {
            en: 'For those interested in joining our research team, please fill out the official <strong>Application Form</strong> below.',
            ko: '본 연구실 지원에 관심이 있으신 분은 아래 공식 <strong>지원서</strong>를 작성해 주시기 바랍니다.'
        },
        'home.modal.notice': {
            en: 'Only the applicants who fill out the official form will have their applications reviewed. Direct emails will be ignored.',
            ko: '공식 지원서를 작성하신 분에 한해 지원서를 검토합니다. 개별 이메일은 접수되지 않습니다.'
        },

        // --- News ---
        'news.title': { en: 'DASH LAB - News', ko: 'DASH LAB - 소식' },
        'news.heading': { en: 'News & Events', ko: '소식 및 행사' },
        'news.archive': { en: 'News Archive', ko: '소식 아카이브' },

        // --- Members ---
        'members.title': { en: 'DASH LAB - Members', ko: 'DASH LAB - 구성원' },
        'members.industry': { en: 'Industry Positions', ko: '산업계 진출' },
        'members.researchProf': { en: 'Research Professors/Post-Doc Researcher', ko: '연구교수/박사후연구원' },
        'members.phd': { en: 'Ph.D. Students', ko: '박사과정' },
        'members.ms': { en: 'Masters Students', ko: '석사과정' },
        'members.ug': { en: 'Undergraduate Students', ko: '학부연구생' },
        'members.alumni': { en: 'Alumni', ko: '졸업생' },
        'members.supervision': { en: 'Master Thesis/Capstone Project Supervision', ko: '석사논문/캡스톤 지도' },
        'members.th.name': { en: 'Name', ko: '성명' },
        'members.th.major': { en: 'Major', ko: '전공' },
        'members.th.employment': { en: 'Current employment', ko: '현 소속' },
        'members.th.employment2': { en: 'Current Employment', ko: '현 소속' },
        'members.th.topic': { en: 'Topic', ko: '주제' },
        'members.role.phd': { en: 'Ph.D. Student', ko: '박사과정' },
        'members.role.ms': { en: 'Masters Student', ko: '석사과정' },
        'members.role.ug': { en: 'Undergraduate Student', ko: '학부연구생' },
        'members.role.rp': { en: 'Research Professor', ko: '연구교수' },
        'members.joinLab': { en: 'Join the Lab', ko: '연구실 지원' },
        'members.openPositions': { en: 'Open Positions', ko: '모집 중' },
        'members.industryPlacement': { en: 'Industry Placement', ko: '산업계 진출' },
        'members.interestsAria': { en: 'Research interests', ko: '연구 관심분야' },
        'members.modal.title': { en: 'Join DASH Lab', ko: 'DASH Lab 지원' },
        'members.modal.body': {
            en: 'We are looking for students who can code and have a deep passion for AI research.',
            ko: '코딩 역량을 갖추고 AI 연구에 깊은 열정을 가진 학생을 모집합니다.'
        },
        'members.modal.focusLabel': { en: 'Research Focus', ko: '연구 분야' },
        'members.modal.focus': {
            en: 'Computer Vision, Anomaly Detection, NLP, and AI Security.',
            ko: '컴퓨터 비전, 이상 탐지, 자연어처리, AI 보안'
        },
        'members.modal.applyLabel': { en: 'How to Apply', ko: '지원 방법' },
        'members.modal.emailLabel': { en: 'Email your resume to:', ko: '이력서를 다음 주소로 보내 주십시오:' },
        'members.modal.close': { en: 'Close Window', ko: '닫기' },

        // --- Publications ---
        'pubs.title': { en: 'DASH LAB - Publications', ko: 'DASH LAB - 논문' },
        'pubs.deepfake': { en: 'Deepfake Research', ko: '딥페이크 연구' },
        'pubs.anomaly': { en: 'Anomaly Detection', ko: '이상 탐지' },
        'pubs.privacy': { en: 'ML Privacy', ko: '머신러닝 프라이버시' },
        'pubs.face': { en: 'Face Recog. Recovery', ko: '얼굴인식 복원' },

        // --- Projects ---
        'projects.title': { en: 'DASH LAB - Projects', ko: 'DASH LAB - 연구과제' },
        'projects.associates': { en: 'Previous & Ongoing Project Associates', ko: '이전 및 진행 중 연구 협력기관' },
        'projects.cvHeader': {
            en: '🎭 Computer Vision (Deepfake Detection & Generation Control)',
            ko: '🎭 Computer Vision (Deepfake 딥페이크 탐지 및 생성 억제)'
        },
        'projects.cv.p1': {
            en: '• Since <b>2017</b>, <b>DASH Lab</b> has independently conducted deepfake research and published results at leading venues including <b>NeurIPS, AAAI, ICML, WWW, and CIKM</b>.',
            ko: '• 본 <b>DASH Lab</b> 연구실에서는 <b>2017</b>년부터 자체적으로 딥페이크 연구를 시작하여, <b>NeurIPS, AAAI, ICML, WWW, CIKM</b> 등 최고의 학술대회에 연구결과를 발표하고 있습니다.'
        },
        'projects.cv.p2': {
            en: '• In 2021, we released the world\'s first multimodal deepfake benchmark <b class="text-blue-700">FakeAVCeleb</b> (<a href="https://sites.google.com/view/fakeavcelebdash-lab/" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Click</a>), distributed for research use to over 1,000 researchers in 50+ countries (<a href="https://sites.google.com/view/fakeavcelebdash-lab/dataset-request-usage?authuser=0" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Click</a>).',
            ko: '• 2021년 세계 최초로 멀티모달 딥페이크 벤치마크 데이터 셋인 <b class="text-blue-700">FakeAVCeleb</b> (<a href="https://sites.google.com/view/fakeavcelebdash-lab/" target="_blank" class="text-blue-600 hover:text-blue-800 underline">바로가기</a>) 데이터 셋을 제작하여 현재 50개국 이상 1,000여명(<a href="https://sites.google.com/view/fakeavcelebdash-lab/dataset-request-usage?authuser=0" target="_blank" class="text-blue-600 hover:text-blue-800 underline">바로가기</a>)의 국제 연구자들에게 연구용으로 배포하였습니다.'
        },
        'projects.cv.p3': {
            en: '• Our deepfake detection research is internationally recognized. Related outcomes are available here (<a href="https://github.com/DASH-Lab/deepfakeResearch" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Click</a>).',
            ko: '• 현재 딥페이크 탐지 관련 세계적으로 연구성과를 인정받고 있습니다. 관련 연구 성과는 여기서 찾아보실 수 있습니다. (<a href="https://github.com/DASH-Lab/deepfakeResearch" target="_blank" class="text-blue-600 hover:text-blue-800 underline">바로가기</a>)'
        },
        'projects.cv.p4': {
            en: '• Since 2021, we have organized the international Workshop on the security implications of Deepfakes and Cheapfakes (WDC) (<a href="https://sites.google.com/view/wdc-2024/" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Click</a>), fostering global collaboration to mitigate deepfakes.',
            ko: '• 2021년부터 딥페이크 관련 국제 워크숍(WDC) Workshop on the security implications of Deepfakes and Cheapfakes (<a href="https://sites.google.com/view/wdc-2024/" target="_blank" class="text-blue-600 hover:text-blue-800 underline">바로가기</a>)을 주관 및 개최하여, 딥페이크 연구 관련 성과를 해외 연구자들과 같이 공유, 토의, 논의하여 딥페이크를 근절할 수 있도록 국제적인 협력과 노력 중입니다.'
        },
        'projects.p1.title': {
            en: '📌 Project 1. Advanced Deepfake Detection, Generation Control, and Dissemination Prevention Platform for Malicious Content',
            ko: '📌 Project 1. 악의적 변조 콘텐츠 대응을 위한 딥페이크 탐지 고도화, 생성억제, 유포 방지 플랫폼 개발'
        },
        'projects.p1.meta': {
            en: '<strong>MSIT/IITP: 2023–2025, Ongoing</strong> (PI)',
            ko: '<strong>과기정통부/IITP: 2023-2025, 진행중</strong> (연구책임자)'
        },
        'projects.p2.title': {
            en: '📌 Project 2. AI Platform Research and Development for Flexible Compliance with Evolving Privacy Policies',
            ko: '📌 Project 2. 개인정보보호 관련 정책 변화를 유연하게 반영하여 준수하는 AI 플랫폼 연구 및 개발'
        },
        'projects.p2.meta': {
            en: '<strong>MSIT: 2022–2026, Ongoing</strong> (PI)',
            ko: '<strong>과기정통부: 2022-2026, 진행중</strong> (연구책임자)'
        },
        'projects.p3.title': {
            en: '📌 Project 3. AI-based Deepfake Multimedia Detection Research',
            ko: '📌 Project 3. 인공지능 기반의 딥페이크(Deep Fake) 멀티미디어 탐지 연구'
        },
        'projects.p3.meta': {
            en: '<strong>NRF Individual Basic Research (MSIT): 2020–2022, Completed</strong> (PI)',
            ko: '<strong>한국연구재단 개인기초연구(과기정통부): 2020-2022, 완료</strong> (연구책임자)'
        },
        'projects.p4.title': {
            en: '📌 Project 4. Research Service on Countermeasures against Online Illegal Acts Using Deepfake Technology',
            ko: '📌 Project 4. 딥페이크 기술을 활용한 온라인 불법행위 대응방안 연구용역'
        },
        'projects.p4.meta': {
            en: '<strong>Korean National Police Agency: 2020, Completed</strong> (PI)',
            ko: '<strong>경찰청: 2020, 완료</strong> (연구책임자)'
        },
        'projects.p5.title': {
            en: '📌 Project 5. Research Service for Intelligent Video Synthesis (Deepfake) Detection',
            ko: '📌 Project 5. 지능형 동영상 합성(딥페이크) 검출을 위한 연구 용역'
        },
        'projects.p5.meta': {
            en: '<strong>MOI/National Forensic Service: 2020, Completed</strong> (PI)',
            ko: '<strong>행안부/국립과학수사연구원: 2020, 완료</strong> (연구책임자)'
        },
        'projects.p6.title': {
            en: '📌 Project 6. Technology Transfer: Deepfake and Cheapfake Detection Model Research & Advancement',
            ko: '📌 Project 6. 기술이전. 딥페이크 탐지 및 칩페이크 탐지 모델 연구 및 고도화'
        },
        'projects.p6.meta': {
            en: '<strong>Samsung SDS: 2022, Completed</strong> (PI)',
            ko: '<strong>삼성SDS: 2022, 완료</strong> (연구책임자)'
        },
        'projects.p7.title': {
            en: '📌 Project 7. Deepfake Dataset and Detection Research',
            ko: '📌 Project 7. Deepfake Dataset and Detection Research'
        },
        'projects.p7.meta': {
            en: '<strong>CSIRO Data61 (Australia): 2022–Present, No Funding</strong> (PI)',
            ko: '<strong>호주 CSIRO Data61: 2022-현재, No Funding</strong> (연구책임자)'
        },
        'projects.heroHeader': {
            en: '🖼️ AI-based Portrait Restoration',
            ko: '🖼️ AI를 활용한 인물 복원기술'
        },
        'projects.heroBody': {
            en: '• <a class="text-blue-700 font-bold hover:text-blue-900 underline" href="Heroface_Restoration"><strong>(Ministry of Patriots and Veterans Affairs – Jaseng Medical Foundation) Korean War Hero Photo Restoration Using AI</strong></a> (<a href="Heroface_Restoration" class="text-blue-600 hover:text-blue-800 underline">Click</a>)',
            ko: '• <a class="text-blue-700 font-bold hover:text-blue-900 underline" href="Heroface_Restoration"><strong>(보훈부-자생의료재단) AI 기술을 활용한 6.25 전쟁영웅 사진 복원 사업</strong></a> (<a href="Heroface_Restoration" class="text-blue-600 hover:text-blue-800 underline">바로가기</a>)'
        },
        'projects.tsHeader': { en: '📊 Time Series Data', ko: '📊 Time Series Data' },
        'projects.ts.p1': {
            en: '• <strong>(Korea Aerospace Research Institute)</strong> AI-based satellite telemetry fault detection implementation and validation research',
            ko: '• <strong>(항공우주연구원)</strong> AI 기반 위성상태데이터 고장탐지 구현 및 검증방안 연구'
        },
        'projects.ts.p2': {
            en: '• <strong>(Hyundai Kefico)</strong> EV smart regenerative braking system to train driving patterns',
            ko: '• <strong>(현대케피코)</strong> EV smart regenerative braking system to train driving patterns'
        },
        'projects.org.msit': { en: '• Ministry of Science and ICT (MSIT)', ko: '• 과학기술정보통신부 (과기부)' },
        'projects.org.nrf': { en: '• National Research Foundation of Korea (NRF)', ko: '• 한국연구재단 (NRF)' },
        'projects.org.kari': { en: '• Korea Aerospace Research Institute', ko: '• 항공우주연구원' },
        'projects.org.police': { en: '• Korean National Police Agency', ko: '• 경찰청' },
        'projects.org.nfs': { en: '• National Forensic Service', ko: '• 국립과학수사연구소' },
        'projects.org.nsr': { en: '• National Security Research Institute', ko: '• 국가보안기술연구소' },
        'projects.org.etri': { en: '• ETRI', ko: '• ETRI' },
        'projects.org.iitp': { en: '• IITP', ko: '• IITP' },

        // --- Professor (core labels) ---
        'prof.title': { en: 'DASH LAB - Professor Simon S. Woo Profile', ko: 'DASH LAB - 우사이먼성일 교수 소개' },
        'prof.role': { en: 'Associate Professor', ko: '부교수' },
        'prof.univ': { en: 'Sungkyunkwan University (SKKU)', ko: '성균관대학교 (SKKU)' },
        'prof.emailLabel': { en: 'Email', ko: '이메일' },
        'prof.officeLabel': { en: 'Office', ko: '연구실' },
        'prof.philosophy': { en: 'Research Philosophy', ko: '연구 철학' },
        'prof.phil1.title': { en: 'Breaking Boundaries.', ko: '경계를 넘어서.' },
        'prof.phil1.body': {
            en: 'My mission is to guide students beyond their comfort zones, fostering intellectual growth that transcends technical expertise. I encourage them to embrace diverse perspectives and challenge conventional thinking, cultivating both professional excellence and personal development.',
            ko: '학생들이 안락한 영역을 넘어 성장하도록 지도하는 것이 저의 사명입니다. 기술적 전문성을 넘어선 지적 성장을 도모하며, 다양한 관점을 수용하고 기존 사고에 도전하도록 장려하여 전문적 역량과 개인적 성장을 함께 키워 나갑니다.'
        },
        'prof.phil2.title': { en: 'Global Excellence.', ko: '세계적 수월성.' },
        'prof.phil2.body': {
            en: 'Our vision extends far beyond institutional or national recognition. I am committed to developing globally competitive scholars who contribute meaningfully to the international research community, establishing themselves as leaders in their fields.',
            ko: '우리의 비전은 기관이나 국가 차원의 인정을 넘어섭니다. 국제 연구 공동체에 의미 있게 기여하고 해당 분야의 리더로 자리매김할 수 있는 세계적 경쟁력을 갖춘 학자를 양성하는 데 전념하고 있습니다.'
        },
        'prof.phil3.title': { en: 'Diversity as Strength.', ko: '다양성이 곧 힘.' },
        'prof.phil3.body': {
            en: 'Having experienced two decades as an immigrant and minority scholar, I have witnessed firsthand the transformative power of diversity and mutual respect. I am dedicated to creating synergistic collaborations between Korean and international students, where different backgrounds and perspectives become catalysts for innovation and growth.',
            ko: '이민자이자 소수자 학자로서 20여 년을 경험하며, 다양성과 상호 존중이 가진 변혁적 힘을 직접 목격하였습니다. 한국 학생과 해외 학생 간의 시너지적 협력을 조성하여, 서로 다른 배경과 관점이 혁신과 성장의 촉매가 되도록 힘쓰고 있습니다.'
        },
        'prof.workExp': { en: 'Work Experience', ko: '경력' },
        'prof.assocProf': { en: 'Associate Professor', ko: '부교수' },
        'prof.rap': { en: 'Research Assistant Professor', ko: '연구조교수' },
        'prof.asstProf': { en: 'Assistant Professor', ko: '조교수' },
        'prof.mts': { en: 'Member of Technical Staff', ko: '기술직원 (Member of Technical Staff)' },
        'prof.researcher': { en: 'Researcher', ko: '연구원' },
        'prof.intern': { en: 'Co-op Intern', ko: '인턴십 (Co-op)' },
        'prof.workNote': {
            en: 'Note: Part-time cook at Burger King, Waiter & Dishwasher, once upon a time in highschool/college years.',
            ko: '참고: 고등학교·대학 시절 Burger King 아르바이트, 웨이터 및 주방 보조 경험이 있습니다.'
        },
        'prof.education': { en: 'Education', ko: '학력' },
        'prof.tenure': { en: 'Tenure', ko: '정년보장' },
        'prof.tenureGranted': { en: 'Early Tenure Granted, 2024', ko: '조기 정년보장 승인, 2024' },
        'prof.fellowship': { en: 'Fellowship', ko: '펠로우십' },
        'prof.fellowshipGranted': { en: 'SKKU Fellowship Professor, 2022', ko: '성균관대학교 Fellowship 교수, 2022' },
        'prof.newsLink': { en: '(News)', ko: '(뉴스)' },
        'prof.fluent': { en: 'Fluent in Korean and English', ko: '한국어·영어 능통' },
        'prof.interests': { en: 'Research Interests', ko: '연구 관심분야' },
        'prof.genAI': { en: 'Generative AI Model', ko: '생성형 AI 모델' },
        'prof.mediaCoverage': { en: 'Media Coverage', ko: '언론 보도' },
        'prof.int.aiSec': { en: 'AI Security', ko: 'AI 보안' },
        'prof.int.df': { en: 'Deepfake Detection and Generation', ko: '딥페이크 탐지 및 생성' },
        'prof.int.ts': { en: 'Time Series Analysis / Anomaly Detection', ko: '시계열 분석 / 이상 탐지' },
        'prof.int.sec': {
            en: 'Computer Security <span class="font-medium text-gray-500">(Usable Security, Blockchain, Intrusion/Anomaly Detection)</span>',
            ko: '컴퓨터 보안 <span class="font-medium text-gray-500">(사용성 보안, 블록체인, 침입/이상 탐지)</span>'
        },
        'prof.int.sat': {
            en: 'Satellite Image Processing <span class="font-medium text-gray-500">(Object Detection, Communications and Protocols)</span>',
            ko: '위성 영상 처리 <span class="font-medium text-gray-500">(객체 탐지, 통신 및 프로토콜)</span>'
        },
        'prof.int.ds': { en: 'Data Science', ko: '데이터사이언스' },
        'prof.viz': { en: 'Research Visualization', ko: '연구 시각화' },
        'prof.readArticle': { en: 'READ ARTICLE', ko: '기사 읽기' },
        'prof.awards': { en: 'International Honors and Awards', ko: '국제 수상 및 영예' },
        'prof.place2': { en: '2nd Place', ko: '2위' },
        'prof.cs': { en: 'Computer Science', ko: '컴퓨터과학' },
        'prof.ece': { en: 'Electrical and Computer Engineering', ko: '전기·컴퓨터공학' },
        'prof.ee': { en: 'Electrical Engineering', ko: '전기공학' },
        'prof.hs': { en: 'High School', ko: '고등학교' },

        // --- Datasets ---
        'datasets.title': { en: 'DASH LAB - Datasets', ko: 'DASH LAB - 데이터셋' },
        'datasets.langSwitch': { en: '', ko: '' }, // legacy separate pages; toggle replaces this
        'datasets.coco.title': { en: '📦 COCO Spliced Datasets', ko: '📦 COCO Spliced Datasets' },
        'datasets.coco.body': {
            en: 'We utilized the <a href="https://cocodataset.org/#home" target="_blank" class="text-blue-600 hover:text-blue-800">COCO dataset</a> to generate a manipulated dataset. Given that the dataset comes with provided labels (masks), we initially identified the desired portions in the original images by applying the mask to them. Subsequently, we used these specific regions to manipulate other images. Each image was altered with approximately 8 to 10 objects, resulting in a total of around 900k manipulated images.',
            ko: '우리는 <a href="https://cocodataset.org/#home" target="_blank" class="text-blue-600 hover:text-blue-800">COCO 데이터셋</a>을 활용하여 조작된 데이터셋을 생성하였습니다. 제공된 레이블(정답 마스크)을 원본 이미지에 적용하여 원하는 영역을 식별한 뒤, 해당 영역을 다른 이미지에 합성하였습니다. 각 이미지에는 약 8~10개의 객체가 사용되었으며, 그 결과 약 90만 장의 조작 이미지가 생성되었습니다.'
        },
        'datasets.sat.title': { en: '🛰️ Satellite Forgery Image Dataset', ko: '🛰️ Satellite Forgery Image Dataset' },
        'datasets.sat.body': {
            en: 'We used <a href="http://deepglobe.org/" target="_blank" class="text-blue-600 hover:text-blue-800">DeepGlobe dataset</a> to create Satellite Forgery images by following the method proposed in <a href="https://openaccess.thecvf.com/content_CVPRW_2020/papers/w39/Horvath_Manipulation_Detection_in_Satellite_Images_Using_Deep_Belief_Networks_CVPRW_2020_paper.pdf" target="_blank" class="text-blue-600 hover:text-blue-800">Deep Belief networks</a>. A total of 293 orthorectified images with an image resolution of 1000 × 1000 pixels were collected. We use 100 of the 293 orthorectified images to create manipulated images. 19 different objects are spliced into the 100 images generating a total of 500 manipulated images with their corresponding manipulation ground truth masks. The 19 objects include rockets, planes, and drone images. The figure shown below illustrates some examples from the manipulated dataset.',
            ko: '우리는 <a href="http://deepglobe.org/" target="_blank" class="text-blue-600 hover:text-blue-800">DeepGlobe 데이터셋</a>과 <a href="https://openaccess.thecvf.com/content_CVPRW_2020/papers/w39/Horvath_Manipulation_Detection_in_Satellite_Images_Using_Deep_Belief_Networks_CVPRW_2020_paper.pdf" target="_blank" class="text-blue-600 hover:text-blue-800">Deep Belief Networks</a>에서 제안된 방법을 사용하여 위성 조작 이미지를 생성하였습니다. 해상도 1000×1000의 정사보정 이미지 293장을 수집하였으며, 이 중 100장을 사용해 조작 이미지를 만들었습니다. 19종의 객체를 합성하여 총 500장의 조작 이미지와 정답 마스크를 생성하였습니다. 객체에는 로켓, 비행기, 드론 등이 포함됩니다. 아래 그림은 데이터셋 예시를 보여줍니다.'
        },
        'datasets.rwdf.title': { en: '🎬 RWDF-23 Dataset', ko: '🎬 RWDF-23 Dataset' },
        'datasets.rwdf.body': {
            en: 'The RWDF-23 is collected from the wild, consisting of 2,000 deepfake videos collected from 4 platforms targeting 4 different languages span created from 21 countries: Reddit, YouTube, TikTok, and Bilibili. By expanding the dataset\'s scope beyond the previous research, we capture a broader range of real-world deepfake content, reflecting the ever-evolving landscape of online platforms.',
            ko: 'RWDF-23 데이터셋은 21개국·4개 언어를 대상으로 Reddit, YouTube, TikTok, Bilibili 등 4개 플랫폼에서 수집한 2,000개의 딥페이크 영상으로 구성됩니다. 기존 연구를 넘어 범위를 확장함으로써, 끊임없이 변화하는 온라인 환경의 실제 딥페이크 콘텐츠를 폭넓게 담았습니다.'
        },
        'datasets.obtain': {
            en: '📝 To obtain the dataset, please fill out the form <a href="https://docs.google.com/forms/d/e/1FAIpQLScsxskSEI0LkmUdI7ClAqs-xslyviDNoKHhiZC3FsBqFG4NJA/viewform" target="_blank" class="text-blue-700 hover:text-blue-900 underline">HERE</a>',
            ko: '📝 데이터셋 요청을 위해 <a href="https://docs.google.com/forms/d/e/1FAIpQLScsxskSEI0LkmUdI7ClAqs-xslyviDNoKHhiZC3FsBqFG4NJA/viewform" target="_blank" class="text-blue-700 hover:text-blue-900 underline">여기</a>에서 양식을 작성해 주십시오'
        },
        'datasets.fakeav.title': { en: '🎭 FakeAVCeleb Dataset', ko: '🎭 FakeAVCeleb Dataset' },
        'datasets.fakeav.body': {
            en: 'In FakeAVCeleb, we propose a novel Audio-Video Deepfake dataset that contains synthesized lip-synced fake audios. To generate a more realistic dataset, we selected real YouTube videos of celebrities having four racial backgrounds (Caucasian, Black, East Asian, and South Asian) to counter the racial bias issue.',
            ko: 'FakeAVCeleb에서는 립싱크된 합성 오디오를 포함하는 새로운 오디오·비디오 딥페이크 데이터셋을 제안합니다. 보다 현실적인 데이터셋을 위해 백인, 흑인, 동아시아인, 남아시아인 등 4개 인종 배경의 유명인 YouTube 영상을 선정하여 인종 편향 문제를 완화하였습니다.'
        },
        'datasets.vfp.title': { en: '🚨 VFP290K Dataset', ko: '🚨 VFP290K Dataset' },
        'datasets.vfp.body': {
            en: 'Vision-based Fallen Person (VFP290K) dataset consists of 294,714 frames of fallen persons extracted from 178 videos from 49 backgrounds, composing 131 scenes. We empirically demonstrate the effectiveness of the features through extensive experiments comparing the performance shift based on object detection models. In addition, we evaluate our VFP290K dataset with properly divided datasets by measuring the performance of fallen person detecting systems.',
            ko: 'Vision-based Fallen Person (VFP290K) 데이터셋은 49개 배경·131개 장면의 178개 영상에서 추출한 낙상 인물 프레임 294,714장으로 구성됩니다. 객체 탐지 모델에 따른 성능 변화를 광범위하게 비교하여 feature의 효과를 실증하였으며, 낙상 탐지 시스템 성능 측정을 통해 데이터셋을 평가하였습니다.'
        },
        'datasets.vfp.badge': {
            en: '🏆 We ranked first in the first round of the anomalous behavior recognition track of AI Grand Challenge 2020, South Korea, using our VFP290K dataset, which can further extend to other applications, such as intelligent CCTV or monitoring systems, as well.',
            ko: '🏆 VFP290K 데이터셋을 활용하여 2020년 AI Grand Challenge 비정상 행동 인식 트랙 1차에서 1위를 달성하였으며, 지능형 CCTV·감시 시스템 등에도 확대 적용될 수 있습니다.'
        },
        'datasets.agc.title': { en: '📹 SKKU AGC Anomaly Detection Dataset', ko: '📹 SKKU AGC Anomaly Detection Dataset' },
        'datasets.agc.body': {
            en: 'SKKU AGC Anomaly Detection Dataset was acquired with a stationary camera mounted at an elevation, overlooking pedestrians, both day and night from various locations. Abnormal event is when a person\'s head touches the ground. The data was split into detection data and classification data.',
            ko: 'SKKU AGC Anomaly Detection Dataset은 다양한 장소에서 낮·밤 모두 보행자가 내려다보이는 높이에 고정 카메라를 설치하여 촬영하였으며, Detection Data와 Classification Data로 구성됩니다. 이상 사건은 사람의 머리가 땅에 닿는 경우입니다.'
        },
        'datasets.agc.detTitle': { en: '1. Detection Data', ko: '1. Detection Data' },
        'datasets.agc.detBody': {
            en: 'Consists of 1920×1080 images and anomaly labels (.xml). Images are in day and night folders; labels are in day_anno and night_anno folders.',
            ko: '1920×1080 이미지와 anomaly label(.xml)로 구성되며, 이미지는 day·night 폴더에, 라벨은 day_anno·night_anno 폴더에 있습니다.'
        },
        'datasets.agc.clsTitle': { en: '2. Classification Data', ko: '2. Classification Data' },
        'datasets.agc.clsBody': {
            en: 'Consists of cropped person images with two classes: normal and falldown. Normal images are in normal day/night folders; falldown images are in falldown_day/falldown_night folders.',
            ko: '사람을 크롭한 이미지로 구성되며, normal과 falldown 두 클래스가 있습니다. 정상 이미지는 normal day·night 폴더에, falldown 이미지는 falldown_day·falldown_night 폴더에 있습니다.'
        },
        'datasets.inspector.badge': { en: 'Tool Beta', ko: '도구 Beta' },
        'datasets.inspector.title': { en: '🔍 Interactive Deepfake Inspector', ko: '🔍 대화형 딥페이크 검사기' },
        'datasets.inspector.body': {
            en: 'Beyond providing datasets, we offer an interactive workstation for real-time analysis. Use our <strong>Histogram Analysis</strong> tool to reveal hidden manipulation artifacts and edge inconsistencies. Select the workstation on the right to begin.',
            ko: '데이터셋 제공을 넘어, 실시간 분석을 위한 대화형 워크스테이션을 제공합니다. <strong>히스토그램 분석</strong> 도구로 숨겨진 조작 흔적과 가장자리 불일치를 확인하실 수 있습니다. 오른쪽 워크스테이션을 선택하여 시작하십시오.'
        },
        'datasets.inspector.hist': { en: 'Histogram analysis', ko: '히스토그램 분석' },
        'datasets.inspector.zoom': { en: 'Adjustable Zoom', ko: '배율 조절' },
        'datasets.inspector.snap': { en: 'Evidence Snapshots', ko: '증거 스냅샷' },
        'datasets.inspector.launch': { en: 'Launch Station', ko: '스테이션 실행' },
        'datasets.inspector.click': { en: 'Click to Enter Analysis Mode', ko: '클릭하여 분석 모드로 이동' },

        // --- Hero Face Restoration ---
        
        'hero.back': { en: 'Back to Projects', ko: '연구과제로 돌아가기' },
        'hero.methods': { en: 'Methods Used', ko: '사용한 방법들' },
        'hero.press': { en: 'Press Coverage', ko: '보도자료' },
        'hero.partners': { en: 'Participating Organizations', ko: '참여기관' },

        'hero.title': { en: 'DASH LAB - Hero Face Restoration', ko: 'DASH LAB - 전쟁영웅 얼굴 복원' },
        'hero.heading': {
            en: 'AI-based Korean War Hero Photo Restoration',
            ko: 'AI 기반 6.25 전쟁영웅 사진 복원'
        },

        // --- Foren_ins ---
        'foren.title': { en: 'DASH LAB - Forensic Inspection', ko: 'DASH LAB - 포렌식 검사' },

        // --- Dept common translations used in members ---
        'dept.cse': { en: 'Computer Science & Engineering', ko: '컴퓨터과학과/소프트웨어학과' },
        'dept.ai': { en: 'Artificial Intelligence', ko: '인공지능학과' },
        'dept.aai': { en: 'Applied Artificial Intelligence', ko: '인공지능융합학과' },
        'dept.sde': { en: 'Semiconductor Display Engineering', ko: '반도체디스플레이공학' },
        'dept.cse2': { en: 'Computer Science and Engineering', ko: '컴퓨터과학과/소프트웨어학과' },
        'dept.ads': { en: 'Applied Data Science (데이터사이언스)', ko: '데이터사이언스융합학과' },

        // --- Forensic Inspector ---


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
        
        'prof.venues7': { en: '7 venues', ko: '7개 학술대회' },
        'prof.venues4': { en: '4 venues', ko: '4개 학술대회' },
        'prof.venues3': { en: '3 venues', ko: '3개 학술대회' },
        'prof.venues1': { en: '1 venue', ko: '1개 학술대회' },

        'prof.services': { en: 'Professional Services', ko: '학술 봉사 활동' },
        'prof.leadership': { en: 'Leadership Roles (2024–2025)', ko: '리더십 역할 (2024–2025)' },
        'prof.lead1': { en: 'KDD Research Track Area Chair', ko: 'KDD Research Track Area Chair (영역 위원장)' },
        'prof.lead2': { en: 'CIKM Senior PC on Resource/Demo Track', ko: 'CIKM Resource/Demo Track Senior PC' },
        'prof.lead3': { en: 'IJCAI Web Chair', ko: 'IJCAI Web Chair (웹 위원장)' },
        'prof.lead4': { en: 'ACML Area Chair', ko: 'ACML Area Chair (영역 위원장)' },
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

        'foren.back': { en: 'Back to Datasets', ko: '데이터셋으로 돌아가기' },
        'foren.locked': { en: 'Area Locked', ko: '영역 고정됨' },
        'foren.reset': { en: 'Reset Station', ko: '초기화' },
        'foren.heading': { en: '🔍 Deepfake Inspector (Beta)', ko: '🔍 딥페이크 검사기 (Beta)' },
        'foren.ready': { en: 'Ready for Analysis', ko: '분석 준비 완료' },
        'foren.upload': { en: 'Upload or Drag & Drop an image', ko: '이미지를 업로드하거나 끌어다 놓으십시오' },
        'foren.title': { en: 'DASH LAB - Deepfake Inspector', ko: 'DASH LAB - 딥페이크 검사기' },
    };

    function normalizeLang(raw) {
        if (!raw) return null;
        const v = String(raw).trim().toLowerCase();
        if (v === 'kr' || v === 'kor' || v === 'korean' || v === '한국어') return 'ko';
        if (v === 'en' || v === 'eng' || v === 'english') return 'en';
        if (SUPPORTED.includes(v)) return v;
        return null;
    }

    function getLang() {
        try {
            const q = normalizeLang(new URLSearchParams(window.location.search).get('lang'));
            if (q) {
                try { localStorage.setItem(STORAGE_KEY, q); } catch (e) { /* ignore */ }
                return q;
            }
        } catch (e) { /* ignore */ }
        try {
            const stored = normalizeLang(localStorage.getItem(STORAGE_KEY));
            if (stored) return stored;
        } catch (e) { /* ignore */ }
        return 'en';
    }

    function setLang(lang, options) {
        const opts = options || {};
        const next = normalizeLang(lang) || 'en';
        try { localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* ignore */ }

        if (opts.updateUrl) {
            try {
                const url = new URL(window.location.href);
                url.searchParams.set('lang', next);
                window.history.replaceState({}, document.title, url.pathname + url.search + url.hash);
            } catch (e) { /* ignore */ }
        }

        apply(next);
        try {
            window.dispatchEvent(new CustomEvent('dash:langchange', { detail: { lang: next } }));
        } catch (e) { /* ignore */ }
        return next;
    }

    function t(key, vars) {
        const lang = getLang();
        const entry = DICT[key];
        let str = entry ? (entry[lang] || entry.en || key) : key;
        if (vars && Array.isArray(vars)) {
            vars.forEach((v, i) => {
                str = str.replace(new RegExp('\\{' + i + '\\}', 'g'), String(v));
            });
        }
        return str;
    }

    function has(key) {
        return !!DICT[key];
    }

    /** Pick bilingual field: obj.text_ko / obj.text, or nested {en,ko} */
    function field(obj, baseKey) {
        if (!obj) return '';
        const lang = getLang();
        const nested = obj[baseKey];
        if (nested && typeof nested === 'object' && (nested.en != null || nested.ko != null)) {
            return (lang === 'ko' ? (nested.ko || nested.en) : (nested.en || nested.ko)) || '';
        }
        if (lang === 'ko') {
            const koKey = baseKey + '_ko';
            if (obj[koKey] != null && obj[koKey] !== '') return obj[koKey];
        }
        return obj[baseKey] != null ? obj[baseKey] : '';
    }

    function translateDate(dateStr) {
        if (!dateStr || getLang() !== 'ko') return dateStr;
        let out = String(dateStr);
        Object.keys(MONTH_KO).forEach((m) => {
            out = out.replace(new RegExp('\\b' + m + '\\b', 'g'), MONTH_KO[m]);
        });
        // "Sep 2026" → "2026년 9월" style when pattern matches
        const m = out.match(/^(\d{1,2}월)\s+(\d{4})$/);
        if (m) return m[2] + '년 ' + m[1];
        const m2 = out.match(/^(\d{4})$/);
        if (m2) return m2[1] + '년';
        return out;
    }

    function applyAttrs(root) {
        const scope = root || document;
        const lang = getLang();

        scope.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (!key || !DICT[key]) return;
            el.textContent = t(key);
        });

        scope.querySelectorAll('[data-i18n-html]').forEach((el) => {
            const key = el.getAttribute('data-i18n-html');
            if (!key || !DICT[key]) return;
            el.innerHTML = t(key);
        });

        scope.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (!key || !DICT[key]) return;
            el.setAttribute('placeholder', t(key));
        });

        scope.querySelectorAll('[data-i18n-aria]').forEach((el) => {
            const key = el.getAttribute('data-i18n-aria');
            if (!key || !DICT[key]) return;
            el.setAttribute('aria-label', t(key));
        });

        scope.querySelectorAll('[data-i18n-title]').forEach((el) => {
            const key = el.getAttribute('data-i18n-title');
            if (!key || !DICT[key]) return;
            el.setAttribute('title', t(key));
        });

        scope.querySelectorAll('[data-i18n-alt]').forEach((el) => {
            const key = el.getAttribute('data-i18n-alt');
            if (!key || !DICT[key]) return;
            el.setAttribute('alt', t(key));
        });

        // Page <title> via data-i18n-page-title on <html> or meta
        const pageTitleKey = document.documentElement.getAttribute('data-i18n-page-title');
        if (pageTitleKey && DICT[pageTitleKey]) {
            document.title = t(pageTitleKey);
        }

        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('data-lang', lang);

        // Sync toggle buttons
        document.querySelectorAll('[data-lang-set]').forEach((btn) => {
            const on = btn.getAttribute('data-lang-set') === lang;
            btn.classList.toggle('is-active', on);
            btn.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
    }

    function apply(langOverride) {
        if (langOverride) {
            try { localStorage.setItem(STORAGE_KEY, normalizeLang(langOverride) || 'en'); } catch (e) { /* ignore */ }
        }
        applyAttrs(document);
    }

    function register(partial) {
        if (!partial || typeof partial !== 'object') return;
        Object.keys(partial).forEach((k) => {
            DICT[k] = partial[k];
        });
    }

    const api = {
        STORAGE_KEY,
        DICT,
        getLang,
        setLang,
        t,
        has,
        field,
        translateDate,
        apply,
        applyAttrs,
        register,
        normalizeLang
    };

    global.DashI18n = api;

    // Early apply html lang before paint when possible
    try {
        document.documentElement.setAttribute('lang', getLang());
        document.documentElement.setAttribute('data-lang', getLang());
    } catch (e) { /* ignore */ }
})(typeof window !== 'undefined' ? window : this);
