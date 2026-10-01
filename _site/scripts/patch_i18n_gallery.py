#!/usr/bin/env python3
"""Generate Korean desc_ko / text_ko overlays for gallery and news data files."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

# --- Gallery: English desc -> Korean (exact match on desc string) ---
GALLERY_KO = {
    "Summer 2026 Graduate Yurim Jang with DASH Lab Researchers":
        "2026년 여름 졸업생 장유림과 DASH Lab 연구진",
    "Celebrate Binh joining Meta USA,<br> Sangyup joining Incheon National Univ,<br> and Youjin's successful reappointment at Catholic Univ of Korea":
        "Binh의 Meta USA 입사, Sangyup의 인천대학교 임용,<br> Youjin의 가톨릭대학교 재임용을 축하하며",
    "DASH Lab Alumni Dinner with Professor Woo":
        "우사이먼성일 교수님과 함께한 DASH Lab 졸업생 만찬",
    "DASH Lab Researcher Presenting their Poster at (NeurIPS 2025 San Diego!)":
        "NeurIPS 2025(샌디에이고)에서 포스터를 발표하는 DASH Lab 연구자",
    "DASH Lab Researchers and Simon S.Woo at (NeurIPS 2025 San Diego!)":
        "NeurIPS 2025(샌디에이고)의 DASH Lab 연구진과 우사이먼성일 교수",
    "DASH Lab Researchers celebrating early christmas":
        "이른 크리스마스를 축하하는 DASH Lab 연구진",
    "Summer 2025 Graduates, DASH Lab Researchers and Professor Simon S. Woo":
        "2025년 여름 졸업생, DASH Lab 연구진과 우사이먼성일 교수",
    "Congratulations to the Summer 2025 graduates: Minji, Minseon, Inho, Razaib, and Binh. Wishing you all the best in your future endeavors!":
        "2025년 여름 졸업생 Minji, Minseon, Inho, Razaib, Binh에게 축하를 전합니다. 앞날의 건승을 기원합니다!",
    "Visiting Prof. Luisa Verdoliva and Prof. Davide Cozzolino at University Federico II of Naples, March, 2025":
        "2025년 3월, 나폴리 Federico II 대학 Luisa Verdoliva·Davide Cozzolino 교수 방문",
    "Geonho, Sangyong, Seungyeon, and Jiwon, congratulations on your Master's graduation in February 2025!":
        "2025년 2월 석사 졸업을 축하합니다 — Geonho, Sangyong, Seungyeon, Jiwon!",
    "Feb 2025 Graduation with Professor Simon S. Woo.":
        "2025년 2월 졸업식 — 우사이먼성일 교수님과 함께",
    "Feb 2025. DASH lab members and professors celebrate the master's graduation together.":
        "2025년 2월. DASH Lab 구성원과 교수진이 석사 졸업을 함께 축하하였습니다.",
    "Professor Simon, Tenure Celebrations @ <strong>DASH Lab</strong> (Sept, 2024)":
        "우사이먼성일 교수 정년보장 축하 @ <strong>DASH Lab</strong> (2024년 9월)",
    "Minha's Graduation (Aug, 2024)":
        "Minha 졸업식 (2024년 8월)",
    "IJCAI Web Chair Certificate (South Korea, Jeju, August, 2024)":
        "IJCAI Web Chair 인증서 (대한민국 제주, 2024년 8월)",
    "SKKU@IJCAI (South Korea, Jeju, August, 2024)":
        "SKKU@IJCAI (대한민국 제주, 2024년 8월)",
    "Successful Organization of The 3rd Workshop by <strong>DASH Lab</strong> on the security implications of Deepfakes and Cheapfakes (WDC '24) @ AsiaCCS 2024":
        "<strong>DASH Lab</strong>이 주관한 제3회 Deepfakes and Cheapfakes 보안 워크숍(WDC '24) 성공적 개최 @ AsiaCCS 2024",
    "WDC 2024 @ AsiaCCS2024 Organized by <strong>DASH Lab</strong>":
        "WDC 2024 @ AsiaCCS2024 — <strong>DASH Lab</strong> 주관",
    "Lab's poster @ CVPR (Seattle, June 2024)":
        "CVPR 연구실 포스터 (시애틀, 2024년 6월)",
    "Best Paper Running-up Award @PAKDD (Taiwan, May 2024)":
        "PAKDD Best Paper Running-up Award (대만, 2024년 5월)",
    "Binh & Simon @PAKDD (Taiwan, May 2024)":
        "Binh & Simon @PAKDD (대만, 2024년 5월)",
    "Student Travel Award Acceptance @PAKDD (Taiwan, May 2024)":
        "PAKDD Student Travel Award 수상 (대만, 2024년 5월)",
    "Lab's poster @AAAI (Canada, Feb 2024)":
        "AAAI 연구실 포스터 (캐나다, 2024년 2월)",
    "DASH group @AAAI (Canada, Feb 2024)":
        "DASH 그룹 @AAAI (캐나다, 2024년 2월)",
    "SKKU@AAAI (Canada, Feb 2024)":
        "SKKU@AAAI (캐나다, 2024년 2월)",
    "Taejun's graduation (Feb 2024)":
        "Taejun 졸업식 (2024년 2월)",
    "DASH group at ASVSpoof workshop (Japan - Nov 2023)":
        "ASVSpoof 워크숍의 DASH 그룹 (일본, 2023년 11월)",
    "Diner at ASVSpoof workshop (Japan - Nov 2023)":
        "ASVSpoof 워크숍 만찬 (일본, 2023년 11월)",
    "Deliver Speech at ASVSpoof workshop (Japan - Nov 2023)":
        "ASVSpoof 워크숍 발표 (일본, 2023년 11월)",
    "Visiting and meeting at University of Glasgow (Oct 2023)":
        "글래스고 대학교 방문 및 미팅 (2023년 10월)",
    "AI workshop (Nov 2023)":
        "AI 워크숍 (2023년 11월)",
    "DASH lab group @CIKM23 (UK - Oct 2023)":
        "DASH Lab 그룹 @CIKM23 (영국, 2023년 10월)",
    "Group dinner at Birmingham (UK - Oct 2023)":
        "버밍엄 그룹 만찬 (영국, 2023년 10월)",
    "Lab's poster @CIKM23 (UK - Oct 2023)":
        "CIKM23 연구실 포스터 (영국, 2023년 10월)",
    "ANSD Workshop @CIKM23 (UK - Oct 2023)":
        "ANSD 워크숍 @CIKM23 (영국, 2023년 10월)",
    "With Hassam Khalid (MS alumni) at Oxford University":
        "옥스퍼드 대학교에서 Hassam Khalid(석사 졸업생)와 함께",
    "Session @CIKM23 (UK - Oct 2023)":
        "세션 @CIKM23 (영국, 2023년 10월)",
    "Visiting Dr. Chan at University of Malaya (Malaysia - Oct 2023)":
        "말라야 대학교 Dr. Chan 방문 (말레이시아, 2023년 10월)",
    "Visiting research group at University of Malaya (Malaysia - Oct 2023)":
        "말라야 대학교 연구그룹 방문 (말레이시아, 2023년 10월)",
    "With Session Chair @ICIP23 (Malaysia - Oct 2023)":
        "세션 체어와 함께 @ICIP23 (말레이시아, 2023년 10월)",
    "Lab's poster @ICCV23 (France - Oct 2023)":
        "ICCV23 연구실 포스터 (프랑스, 2023년 10월)",
    "With Dr. Son (CY Cergy Paris University) @ICCV23 (France - Oct 2023)":
        "Dr. Son(CY Cergy Paris University)과 함께 @ICCV23 (프랑스, 2023년 10월)",
    "Having David Crandall (Indiana University) Visiting our lab (Aug 2023)":
        "David Crandall(Indiana University) 교수님의 연구실 방문 (2023년 8월)",
    "Jeongho & Sam's graduation (Feb 2023)":
        "Jeongho & Sam 졸업식 (2023년 2월)",
    "Lab dinner (Feb 2023)":
        "연구실 만찬 (2023년 2월)",
    "Lab members (2022)":
        "연구실 구성원 (2022)",
    "Ph.D. students (2022)":
        "박사과정 학생들 (2022)",
    "Simon S.Woo with other Professors":
        "우사이먼성일 교수와 다른 교수님들",
    "AGC 2022":
        "AGC 2022",
    "DASH Lab group @CIKM22 (USA - Oct 2022)":
        "DASH Lab 그룹 @CIKM22 (미국, 2022년 10월)",
    "Lab's presentation @CIKM22 (USA - Oct 2022)":
        "CIKM22 연구실 발표 (미국, 2022년 10월)",
    "Lab's poster @CIKM22 (USA - Oct 2022)":
        "CIKM22 연구실 포스터 (미국, 2022년 10월)",
    "Professor Simon S.Woo with SKKU Professors":
        "우사이먼성일 교수와 성균관대 교수님들",
    "Lab dinner":
        "연구실 만찬",
    "Lab members (2021)":
        "연구실 구성원 (2021)",
    "Annual retreat (2021)":
        "연례 워크숍/리트릿 (2021)",
    "MS students (2021)":
        "석사과정 학생들 (2021)",
}


def js_escape(s: str) -> str:
    return s.replace("\\", "\\\\").replace("'", "\\'").replace("\n", "\\n")


def patch_gallery(path: Path) -> int:
    text = path.read_text(encoding="utf-8")
    # Match each gallery object roughly
    pattern = re.compile(
        r"(\{\s*src:\s*'[^']*',\s*desc:\s*)((?:'(?:\\'|[^'])*')|(?:\"(?:\\\"|[^\"])*\"))",
        re.M,
    )
    count = 0

    def repl(m: re.Match) -> str:
        nonlocal count
        prefix, desc_lit = m.group(1), m.group(2)
        quote = desc_lit[0]
        raw = desc_lit[1:-1]
        # unescape for lookup
        en = raw.encode("utf-8").decode("unicode_escape") if "\\" in raw else raw
        # simpler unescape
        en = raw.replace("\\'", "'").replace('\\"', '"').replace("\\n", "\n")
        # normalize curly apostrophe variants
        key = en
        ko = GALLERY_KO.get(key)
        if not ko:
            # try without HTML strong tags differences
            for k, v in GALLERY_KO.items():
                if k.replace("<strong>", "").replace("</strong>", "") == key.replace("<strong>", "").replace("</strong>", ""):
                    ko = v
                    break
        if not ko:
            # fallback: keep English if already partly Korean or unknown
            ko = en
        # Avoid double-patching
        if "desc_ko:" in m.group(0):
            return m.group(0)
        count += 1
        return f"{prefix}{desc_lit},\n        desc_ko: '{js_escape(ko)}'"

    # Different structure - objects may have newlines. Use a more robust approach.
    objs = re.split(r"(?=\n\s*\{\s*\n\s*src:)", text)
    if len(objs) < 2:
        # try alternate
        pass

    new_parts = [objs[0]]
    patched = 0
    for part in objs[1:]:
        dm = re.search(r"desc:\s*((?:'(?:\\'|[^'])*')|(?:\"(?:\\\"|[^\"])*\"))", part)
        if not dm or "desc_ko:" in part:
            new_parts.append(part)
            continue
        desc_lit = dm.group(1)
        quote = desc_lit[0]
        raw = desc_lit[1:-1].replace("\\'", "'").replace('\\"', '"')
        ko = GALLERY_KO.get(raw)
        if not ko:
            for k, v in GALLERY_KO.items():
                if re.sub(r"<[^>]+>", "", k) == re.sub(r"<[^>]+>", "", raw):
                    ko = v
                    break
        if not ko:
            ko = raw
        insert = f",\n        desc_ko: '{js_escape(ko)}'"
        # insert before closing of object - after desc line
        part2 = part[: dm.end()] + insert + part[dm.end():]
        new_parts.append(part2)
        patched += 1

    path.write_text("".join(new_parts), encoding="utf-8")
    return patched


def main():
    gallery = ROOT / "js" / "imagedata.js"
    n = patch_gallery(gallery)
    print(f"Patched {n} gallery items in {gallery}")


if __name__ == "__main__":
    main()
