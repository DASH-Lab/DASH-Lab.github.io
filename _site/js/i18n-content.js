/**
 * Localize common English news phrases to formal academic Korean.
 * Prefer item.text_ko when present; otherwise pattern-translate item.text.
 */
function localizeNewsText(item) {
    if (!item) return '';
    if (typeof DashI18n !== 'undefined') {
        const explicit = DashI18n.field(item, 'text');
        // field() falls back to text; only treat as explicit if text_ko exists when ko
        if (DashI18n.getLang() === 'ko' && item.text_ko) return item.text_ko;
        if (DashI18n.getLang() === 'en') return item.text || '';
    }
    if (typeof DashI18n === 'undefined' || DashI18n.getLang() !== 'ko') {
        return item.text || '';
    }

    let text = item.text || '';

    // Already largely Korean (media headlines, Korean awards) — keep as-is
    const hangul = (text.match(/[\uAC00-\uD7A3]/g) || []).length;
    const letters = (text.match(/[A-Za-z]/g) || []).length;
    if (hangul > 8 && hangul >= letters * 0.35) {
        return text
            .replace(/>media</g, '>관련 기사<')
            .replace(/>News</g, '>뉴스<');
    }

    const mediaLink = (typeof DashI18n !== 'undefined')
        ? (s) => s.replace(/>media</gi, '>' + DashI18n.t('common.media') + '<')
        : (s) => s.replace(/>media</gi, '>관련 기사<');

    const patterns = [
        [/Won 1st Place in the Image Edit Detection and Localization Challenge \(IEDAL2\) at <b>(.*?)<\/b>/i,
            '<b>$1</b> Image Edit Detection and Localization Challenge (IEDAL2)에서 1위를 수상하였습니다'],
        [/Three paper(?:s)? accepted at Main Paper track of <b>(.*?)<\/b>/i,
            '<b>$1</b> Main Paper 트랙에 논문 3편이 게재 확정되었습니다'],
        [/One paper accepted at Main Paper track of <b>(.*?)<\/b>/i,
            '<b>$1</b> Main Paper 트랙에 논문 1편이 게재 확정되었습니다'],
        [/One paper accepted at Research Paper track of <b>(.*?)<\/b>/i,
            '<b>$1</b> Research Paper 트랙에 논문 1편이 게재 확정되었습니다'],
        [/One paper accepted at Demo &amp; Challenge track of <b>(.*?)<\/b>/i,
            '<b>$1</b> Demo &amp; Challenge 트랙에 논문 1편이 게재 확정되었습니다'],
        [/One paper accepted at Demo & Challenge track of <b>(.*?)<\/b>/i,
            '<b>$1</b> Demo & Challenge 트랙에 논문 1편이 게재 확정되었습니다'],
        [/Two papers accepted at findings track of <b>(.*?)<\/b>/i,
            '<b>$1</b> Findings 트랙에 논문 2편이 게재 확정되었습니다'],
        [/One paper accepted at main paper track of <b>(.*?)<\/b>/i,
            '<b>$1</b> Main Paper 트랙에 논문 1편이 게재 확정되었습니다'],
        [/One paper accepted at short paper track of <b>(.*?)<\/b>/i,
            '<b>$1</b> Short Paper 트랙에 논문 1편이 게재 확정되었습니다'],
        [/One paper accepted at MLA track of <b>(.*?)<\/b>/i,
            '<b>$1</b> MLA 트랙에 논문 1편이 게재 확정되었습니다'],
        [/One paper accepted at workshop paper track of <b>(.*?)<\/b>/i,
            '<b>$1</b> Workshop Paper 트랙에 논문 1편이 게재 확정되었습니다'],
        [/One paper accepted at industry paper track of <b>(.*?)<\/b>/i,
            '<b>$1</b> Industry Paper 트랙에 논문 1편이 게재 확정되었습니다'],
        [/Two paper(?:s)? accepted at <b>(.*?)<\/b>/i,
            '<b>$1</b>에 논문 2편이 게재 확정되었습니다'],
        [/One applied research paper, two full papers and three short papers accepted at <b>(.*?)<\/b>/i,
            '<b>$1</b>에 Applied Research 논문 1편, Full Paper 2편, Short Paper 3편이 게재 확정되었습니다'],
        [/Three full papers accepted at <b>(.*?)<\/b>/i,
            '<b>$1</b>에 Full Paper 3편이 게재 확정되었습니다'],
        [/One full paper accepted at <b>(.*?)<\/b>/i,
            '<b>$1</b>에 Full Paper 1편이 게재 확정되었습니다'],
        [/Three short papers accepted at <b>(.*?)<\/b> Congrats, All!/i,
            '<b>$1</b>에 Short Paper 3편이 게재 확정되었습니다. 모두 축하합니다!'],
        [/Won the <b>Best Paper Award at CISC-W 2024<\/b>/i,
            '<b>CISC-W 2024 Best Paper Award</b>를 수상하였습니다'],
        [/Two full papers accepted at <b>(.*?)<\/b> including 1 Oral paper! Congrats, All!/i,
            '<b>$1</b>에 Full Paper 2편(Oral 1편 포함)이 게재 확정되었습니다. 모두 축하합니다!'],
        [/Three full papers accepted at <b>(.*?)<\/b>/i,
            '<b>$1</b>에 Full Paper 3편이 게재 확정되었습니다'],
        [/Three full papers <b>(.*?)<\/b> and one demo paper <b>(.*?)<\/b> accepted at <b>(.*?)<\/b>/i,
            '<b>$3</b>에 Full Paper 3편 <b>$1</b> 및 Demo Paper 1편 <b>$2</b>이 게재 확정되었습니다'],
        [/One paper accepted at <b>(.*?)<\/b>/i,
            '<b>$1</b>에 논문 1편이 게재 확정되었습니다'],
        [/One journal paper accepted at <b>(.*?)<\/b>/i,
            '<b>$1</b>에 저널 논문 1편이 게재 확정되었습니다'],
        [/One conference paper accepted at <b>(.*?)<\/b>/i,
            '<b>$1</b>에 학회 논문 1편이 게재 확정되었습니다'],
        [/One short paper accepted at <b>(.*?)<\/b>/i,
            '<b>$1</b>에 Short Paper 1편이 게재 확정되었습니다'],
        [/Won the Best Paper Running-Up Award at <b>(.*?)<\/b>/i,
            '<b>$1</b> Best Paper Running-Up Award를 수상하였습니다'],
        [/Four papers accepted at <b>(.*?)<\/b>/i,
            '<b>$1</b>에 논문 4편이 게재 확정되었습니다'],
        [/Three papers accepted at <b>(.*?)<\/b>/i,
            '<b>$1</b>에 논문 3편이 게재 확정되었습니다'],
        [/Five full conference papers accepted at <b>(.*?)<\/b>\. Congrats to Everyone!!!/i,
            '<b>$1</b>에 Full Paper 5편이 게재 확정되었습니다. 모두 축하합니다!'],
        [/Three full conference papers accepted at <b>(.*?)<\/b>/i,
            '<b>$1</b>에 Full Paper 3편이 게재 확정되었습니다'],
        [/Two full papers acceptance at <b>(.*?)<\/b>/i,
            '<b>$1</b>에 Full Paper 2편이 게재 확정되었습니다'],
        [/Two papers acceptance at <b>(.*?)<\/b>/i,
            '<b>$1</b>에 논문 2편이 게재 확정되었습니다'],
        [/Two papers accepted at <b>(.*?)<\/b>/i,
            '<b>$1</b>에 논문 2편이 게재 확정되었습니다'],
        [/One paper acceptance at <b>(.*?)<\/b>/i,
            '<b>$1</b>에 논문 1편이 게재 확정되었습니다'],
        [/<b>(.*?)<\/b> paper acceptance/i,
            '<b>$1</b>에 논문이 게재 확정되었습니다'],
        [/1 short paper \(BK IF=3\) and 1 full paper \(BK IF=4\) accepted at <b>(.*?)<\/b>/i,
            '<b>$1</b>에 Short Paper 1편(BK IF=3) 및 Full Paper 1편(BK IF=4)이 게재 확정되었습니다'],
        [/Organizing <b>(.*?)<\/b>/i,
            '<b>$1</b>를 조직·개최합니다'],
        [/Invited to participate in the prestigious seminar at <b>(.*?)<\/b> on/i,
            '<b>$1</b>의 저명 세미나에 초청받아 참가하였습니다 — 주제:'],
        [/Invited to serve as a reviewer for <b>(.*?)<\/b>/i,
            '<b>$1</b>의 심사위원으로 초청되었습니다'],
        [/Congrats Keeyoung Kim and Youjin Shin for passing the final PhD defense! Now, 3 PhDs graduated from our lab!/i,
            '김기영·신유진 학생의 박사학위 최종 심사를 통과하였습니다. 본 연구실에서 박사 3명이 배출되었습니다!'],
        [/Won the grant from IITP "(.*?)" \(PI: (.*?)\)/i,
            'IITP 연구비 과제 "$1"에 선정되었습니다 (연구책임자: $2)'],
        [/Won the special prize for KoGas Big Data Competition <b>(.*?)<\/b>/i,
            '한국가스공사 빅데이터경진대회 특별상을 수상하였습니다 — <b>$1</b>'],
        [/Gave a talk at Authentication Workshop, '(.*?)', 차세대인증연구회/i,
            "'$1' 차세대인증연구회 Authentication Workshop에서 발표하였습니다"],
        [/Open Energy Cloud Platform, a joint security \+ ML project with KAIST and SNU is funded/i,
            'KAIST·서울대와 공동으로 수행하는 Open Energy Cloud Platform(보안+ML) 과제가 선정되었습니다'],
        [/Best Paper \(국보연원장상\) CISC-W/i,
            'CISC-W Best Paper(국보연원장상)를 수상하였습니다'],
        [/Nominated for the "Best Student Paper" at IFIP-SEC 2018/i,
            'IFIP-SEC 2018 "Best Student Paper" 후보에 선정되었습니다'],
        [/Won the grant from Korea Aerospace Research Institute \(KARI\)/i,
            '한국항공우주연구원(KARI) 연구과제를 수주하였습니다'],
        [/Won the top 7th place \(top 3rd among universities\) among 400 teams in Korea for AI R&D Challenge on Fake Face Image Detection/i,
            '가짜얼굴 이미지 탐지 AI R&D Challenge에서 전국 400팀 중 7위(대학 중 3위)를 달성하였습니다'],
        [/Gave a keynote talk at International Conference on Software Security and Assurance \(ICSSA\) 2018/i,
            'ICSSA 2018에서 키노트 발표를 하였습니다'],
        [/Gave a talk at NetSec-Kr'18/i,
            "NetSec-Kr'18에서 발표하였습니다"],
        [/Student Research Workshop paper accepted at ACM CoNEXT2017/i,
            'ACM CoNEXT 2017 Student Research Workshop에 논문이 게재 확정되었습니다'],
        [/NRF Grant Awarded \(2017-2020, KRW 90K\)/i,
            '한국연구재단(NRF) 연구비를 수주하였습니다 (2017–2020)'],
        [/Finance Chair for/i,
            'Finance Chair로 활동 — '],
        [/Gave a talk at Korea University, Seoul, Korea/i,
            '고려대학교에서 발표하였습니다'],
        [/Gave a CS Colloquium talk at Hanyang University and Inha University/i,
            '한양대학교·인하대학교 CS Colloquium에서 발표하였습니다'],
        [/Best Paper Award \(우수 논문상\) at CISC-W 2017 - "Towards Machine Generated Passwords"/i,
            'CISC-W 2017 Best Paper Award(우수 논문상) 수상 — "Towards Machine Generated Passwords"'],
        [/Won the 2nd place at National Data Science Challenge/i,
            '전국 데이터사이언스 챌린지에서 2위를 수상하였습니다'],
    ];

    for (const [re, repl] of patterns) {
        if (re.test(text)) {
            text = text.replace(re, repl);
            break;
        }
    }

    return mediaLink(text);
}

function localizeNewsDate(item) {
    if (!item) return '';
    const d = item.date || '';
    if (typeof DashI18n !== 'undefined') return DashI18n.translateDate(d);
    return d;
}

function localizeGalleryDesc(item) {
    if (!item) return '';
    if (typeof DashI18n !== 'undefined') return DashI18n.field(item, 'desc');
    return item.desc || '';
}
