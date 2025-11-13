---
layout: page
title: Publications
permalink: /Publications/
---
 <style>
                /* 표 기반 텍스트 블록을 컴팩트하게 */
        #publications-content table{
          border-collapse:collapse;
          width:100%;
          border: none;
        }
        #publications-content thead th{
          text-align:left;
          padding:0 0 4px 0;           /* 제목 아래 약간의 간격만 */
          line-height:1.2;
           border-bottom: none;
        }
        #publications-content tbody td{
          padding:0;                   /* tr/td 기본 패딩 제거 */
        }
        
        #publications-content small{
          font-size:0.92em;            /* small을 너무 작지 않게 */
        }

        .year-header {
            cursor: pointer;
            font-size: 20px;
            font-weight: bold;
            margin: 10px 0;
            color: #007BFF;
        }
        .year-header:hover {
            text-decoration: underline;
        }
        .publications {
            display: none;
            margin-left: 20px;
        }
        .year-section {
            display: none;
        }
        .year-section.active {
            display: block;
        }
        .pagination {
            text-align: center;
            margin: 40px 0;
            padding: 20px;
        }
        .pagination button {
            background-color: #f8f9fa;
            border: 1px solid #dee2e6;
            color: #007bff;
            padding: 8px 16px;
            margin: 0 4px;
            cursor: pointer;
            border-radius: 4px;
            font-weight: bold;
        }
        .pagination button:hover {
            background-color: #e9ecef;
        }
        .pagination button.active {
            background-color: #007bff;
            color: white;
            border-color: #007bff;
        }
        .pagination button:disabled {
            background-color: #e9ecef;
            color: #6c757d;
            cursor: not-allowed;
        }

        /* abstract 토글용 */
        .abstract-toggle {
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 4px;
            font-size: 0.85em;
            color: #007bff;
        }
        .abstract-toggle img {
            height: 16px;
            width: 16px;
        }
        .abstract-content {
            display: none;
            margin-top: 4px;
        }
        .abstract-content.open {
            display: block;
        }

    </style>

<h1 class="page-title">Publications</h1>
<center>
<a href="https://github.com/DASH-Lab/deepfakeResearch" target="_blank"> 
<img  loading="lazy" alt="deepfakes"     src="https://img.shields.io/badge/Deepfakes Research-Visit-brightgreen"      height="22">
</a>
	
<a href="https://github.com/DASH-Lab/anomaly_detection_research" target="_blank"> 
<img  loading="lazy" alt="anomaly"   src="https://img.shields.io/badge/Anomaly Detection-Visit-brightgreen"      height="22">
</a>

<a href="https://github.com/DASH-Lab/ML_privacy_research" target="_blank"> 
<img  loading="lazy" alt="privacyResearch"   src="https://img.shields.io/badge/ML Privacy Research-Visit-brightgreen"      height="22">
</a>

<a href="https://github.com/DASH-Lab/FaceRecogRecovery" target="_blank"> 
<img  loading="lazy" alt="FaceRecovery"   src="https://img.shields.io/badge/Face Recog Recovery-Visit-brightgreen"      height="22">
</a>	
	
	
</center>

{% comment %}
Bedge Generation (자동 생성)
{% endcomment %}


{% assign pubs = site.data.Publications_data %}
{% comment %}
<script>
  // Jekyll 데이터 -> 클라이언트로 전달
  window.PUBS = {{ pubs | jsonify }};
</script>

<div style="margin-top:2vw;">
    <p style="font-family: times, serif; font-size:30pt; font-style:italic">
        <center>    
          {% comment %}
          How: Change the number after the Conference Name to indicate # of paper accepted
          {% endcomment %}
              

                  <div id="badges-root" style="text-align:center">

                  <br><br><h5><strong>Main Papers</strong></h5>
                  <div id="badges-main"></div>

                  <br><br><h5><strong>Dataset • Benchmark | Short Papers</strong></h5>
                  <div id="badges-dataset"></div>

                  <br><br><h5><strong>SCIE Journals</strong></h5>
                  <div id="badges-journal"></div>

                  <br><br><h5><strong>Other Papers | Workshops</strong></h5>
                  <div id="badges-etc"></div>

                </div>

        </center>
  </p>
{% endcomment %}


{% comment %} 2018+ 버튼/섹션용 {% endcomment %}
{% assign years_buttons = pubs
  | where_exp: "item", "item.year > 2017"
  | map: "year" | uniq | sort | reverse %}

{% comment %} 2017 & Earlier 묶음 {% endcomment %}
{% assign older = pubs | where_exp: "item", "item.year <= 2017" %}

<div class="pagination">
  <button onclick="previousYear()" id="prevBtn">◄ Previous</button>
  {% for y in years_buttons %}
    <button onclick="showYear('{{ y }}')" class="year-btn{% if forloop.first %} active{% endif %}" data-year="{{ y }}">{{ y }}</button>
  {% endfor %}
  {% if older and older.size > 0 %}
    <button onclick="showYear('older')" class="year-btn" data-year="older">2017 & Earlier</button>
  {% endif %}
  <button onclick="nextYear()" id="nextBtn">Next ►</button>
</div>

<div id="publications-content">
  {% comment %} 연도별 섹션 출력 {% endcomment %}
  {% for y in years_buttons %}
    {% assign list = pubs | where: "year", y %}
    <div class="year-section{% if forloop.first %} active{% endif %}" id="year-{{ y }}">
      <h4 style="margin-top:40px"><b>{{ y }}</b></h4>
      <hr>
      {% for p in list %}
        <div style="display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start;flex-wrap:nowrap;">
          <div style="margin-left:25px;margin-right:10px;flex:1;min-width:0;">
            <table>
              <thead>
                <tr>
                  <th style="text-align:left;">
                    <b>{{ p.title }}</b>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p style="margin:0;text-align:justify;"><small>
                      {% if p.authors %}
                        {% assign author_count = p.authors | size %}
                        {% if author_count == 1 %}
                          {{ p.authors[0] }}
                        {% elsif author_count == 2 %}
                          {{ p.authors[0] }} and {{ p.authors[1] }}
                        {% else %}
                          {% for a in p.authors %}
                            {% if forloop.first %}
                              {{ a }},
                            {% elsif forloop.last %}
                              and {{ a }}
                            {% else %}
                              {{ a }},
                            {% endif %}
                          {% endfor %}
                        {% endif %}
                      {% endif %}
                    </small></p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p style="margin:0;text-align:justify;"><small><b>
                      {% if p.links and p.links.conf %}<a href="{{ p.links.conf }}" target="_blank">{% endif %}
                      {{ p.venue_full }}
                      {% if p.venue %}({{ p.venue }}){% endif %}
                      {% if p.location %}, {{ p.location }}{% endif %}, {{ p.year }}
                      {% if p.links and p.links.conf %}</a>{% endif %}
                    </b></small></p>
                  </td>
                </tr>
                {% assign three_tracks = "Main,Short,Dataset" | split: "," %}
                {% if p.track and p.track != "Etc." %}
                <tr>
                  <td>
                    <p style="margin:0;text-align:justify;">
                      <small>
                        <b>
                          <span style="color:#003B8E;">
                            {% assign special = "Main,Short,Dataset" | split: "," %}
                            {% if special contains p.track %}
                              {{ p.track }} Track
                            {% else %}
                              {{ p.track }}
                            {% endif %}
                          </span>
                        </b>
                      </small>
                    </p>
                  </td>
                </tr>
                {% endif %}
                {% if p.Factor and p.Factor[0] and p.Factor[0] != "" and p.Factor[1] and p.Factor[1] != 0 %}
                <tr>
                  <td>
                    <p style="margin:0;text-align:justify;">
                      <small><b><span style="color:#1E90FF;">{{ p.Factor[0] }}{{ p.Factor[1] }}</span></b></small>
                    </p>
                  </td>
                </tr>
                {% endif %}
                {% if p.abstract %}
                <tr>
                  <td>
                    <!-- thumbs.png 버튼 -->
                    <span class="abstract-toggle">
                      <img src="/Publications/paper.svg" alt="Toggle abstract">
                      <small>Show abstract</small>
                    </span>
                    <!-- 실제 abstract (처음엔 숨김) -->
                    <div class="abstract-content">
                      <p style="margin:0;margin-top:4px;text-align:justify;">
                        <small>{{ p.abstract }}</small>
                      </p>
                    </div>
                  </td>
                </tr>
                {% endif %}
              </tbody>
            </table>
          </div>
          {% if p.img %}
          <div style="flex:0 0 auto;margin-left:15px;display:flex;align-items:flex-start;justify-content:center;max-width:493px;">
            <img loading="lazy" src="{{ p.img }}" style="max-height:330px;max-width:493px;margin-bottom:10px;height:auto;aspect-ratio:auto;">
          </div>
          {% endif %}
        </div>
        <hr>
      {% endfor %}
    </div>
  {% endfor %}

  {% comment %} 2017 & Earlier: 단일 섹션(id=year-older) {% endcomment %}
  {% if older and older.size > 0 %}
    {% assign older_sorted = older | sort: "year" %}
    <div class="year-section" id="year-older">
      <h4 style="margin-top:40px"><b>2017 & Earlier</b></h4>
      <hr>
      {% for p in older_sorted %}
        <div style="display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start;flex-wrap:nowrap;">
          <div style="margin-left:25px;margin-right:10px;flex:1;min-width:0;">
            <table>
              <thead>
                <tr>
                  <th style="text-align:left;">
                    <b>{{ p.title }}</b>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p style="margin:0;text-align:justify;"><small>
                      {% if p.authors %}
                        {% assign author_count = p.authors | size %}
                        {% if author_count == 1 %}
                          {{ p.authors[0] }}
                        {% elsif author_count == 2 %}
                          {{ p.authors[0] }} and {{ p.authors[1] }}
                        {% else %}
                          {% for a in p.authors %}
                            {% if forloop.first %}
                              {{ a }},
                            {% elsif forloop.last %}
                              and {{ a }}
                            {% else %}
                              {{ a }},
                            {% endif %}
                          {% endfor %}
                        {% endif %}
                      {% endif %}
                    </small></p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p style="margin:0;text-align:justify;"><small><b>
                      {% if p.links and p.links.conf %}<a href="{{ p.links.conf }}" target="_blank">{% endif %}
                      {{ p.venue_full }}
                      {% if p.venue %}({{ p.venue }}){% endif %}
                      {% if p.location %}, {{ p.location }}{% endif %}, {{ p.year }}
                      {% if p.links and p.links.conf %}</a>{% endif %}
                    </b></small></p>
                  </td>
                </tr>
                {% if p.Factor and p.Factor[0] and p.Factor[0] != "" and p.Factor[1] and p.Factor[1] != 0 %}
                <tr>
                  <td>
                    <p style="margin:0;text-align:justify;">
                      <small><b><span style="color:#1E90FF;">{{ p.Factor[0] }}{{ p.Factor[1] }}</span></b></small>
                    </p>
                  </td>
                </tr>
                {% endif %}
                {% if p.abstract and p.abstract != "" and p.abstract != null %}
                <tr>
                  <td>
                    <!-- thumbs.png 버튼 -->
                    <span class="abstract-toggle">
                      <img src="/Publications/paper.svg" alt="Toggle abstract">
                      <small>Show abstract</small>
                    </span>
                    <!-- 실제 abstract (처음엔 숨김) -->
                    <div class="abstract-content">
                      <p style="margin:0;margin-top:4px;text-align:justify;">
                        <small>{{ p.abstract }}</small>
                      </p>
                    </div>
                  </td>
                </tr>
                {% endif %}
              </tbody>
            </table>
          </div>

          {% if p.img %}
          <div style="flex:0 0 auto;margin-left:15px;display:flex;align-items:flex-start;justify-content:center;max-width:493px;">
            <img loading="lazy" src="{{ p.img }}" style="max-height:330px;max-width:493px;margin-bottom:10px;height:auto;aspect-ratio:auto;">
          </div>
          {% endif %}
        </div>
        <hr>
      {% endfor %}
    </div>
  {% endif %}
</div>

<script>
let currentYear = null;
let years = [];

// 1) DOM에서 연도 목록 자동 수집 (버튼 우선, 없으면 섹션에서)
function collectYears() {
  const btnYears = Array.from(document.querySelectorAll('.year-btn'))
    .map(b => b.dataset.year)
    .filter(Boolean);

  const sectionYears = Array.from(document.querySelectorAll('.year-section[id^="year-"]'))
    .map(sec => sec.id.replace('year-', ''))
    .filter(Boolean);

  const raw = btnYears.length ? btnYears : sectionYears;
  const uniq = Array.from(new Set(raw));

  // 숫자 연도 내림차순 정렬, 'older'는 맨 뒤
  uniq.sort((a, b) => {
    if (a === 'older') return 1;
    if (b === 'older') return -1;
    return Number(b) - Number(a);
  });

  years = uniq;
}

function showYear(year) {
  // 모든 연도 섹션 숨기기
  document.querySelectorAll('.year-section').forEach(section => {
    section.classList.remove('active');
  });
  // 해당 연도 섹션 보이기
  const selected = document.getElementById('year-' + year);
  if (selected) selected.classList.add('active');

  // 버튼 active 토글
  document.querySelectorAll('.year-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.querySelector(`.year-btn[data-year="${year}"]`);
  if (activeBtn) activeBtn.classList.add('active');

  currentYear = year;
  updateNavigationButtons();

  // URL 해시에 반영(깊은 링크/뒤로가기 지원)
  if (location.hash !== '#' + year) {
    history.replaceState(null, '', '#' + year);
  }
}

function previousYear() {
  const i = years.indexOf(currentYear);
  if (i > 0) showYear(years[i - 1]);
}

function nextYear() {
  const i = years.indexOf(currentYear);
  if (i >= 0 && i < years.length - 1) showYear(years[i + 1]);
}

function updateNavigationButtons() {
  const i = years.indexOf(currentYear);
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  if (prevBtn) prevBtn.disabled = i <= 0;
  if (nextBtn) nextBtn.disabled = i === -1 || i >= years.length - 1;
}

// 해시 변경 시에도 연도 전환(뒤로/앞으로 버튼 대응)
window.addEventListener('hashchange', () => {
  const y = (location.hash || '').replace('#','');
  if (y && years.includes(y)) showYear(y);
});

// 초기화
document.addEventListener('DOMContentLoaded', () => {
  collectYears();

  // 초기 표시 연도: URL 해시 > .year-btn 중 active 가진 것 > 첫 번째 연도
  const hashYear   = (location.hash || '').replace('#','');
  const activeBtn  = document.querySelector('.year-btn.active');
  const btnDefault = activeBtn ? activeBtn.dataset.year : null;
  const fallback   = years.length ? years[0] : null;

  const initial = hashYear || btnDefault || fallback;
  if (initial) showYear(initial);
});
//--------------------------

// =============================
// 트랙: Main / Dataset / SCIE Journals / Etc
// 규칙 요약
//  - Main, Dataset: Factor[0] != "" AND Number(Factor[1]) > 0 인 항목만 카운트, venue별 집계
//  - SCIE Journals, Etc: 조건 없이 집계, 트랙명 단일 배지로 표시
// =============================

// 색상
const COLORS = {
  main: "brightgreen",
  dataset: "purple",
  journal: "red",
  etc: "gray",
};

// 라벨
const TRACK_LABEL = {
  main: "Main",
  short: "Short",
  workshop: "Workshop",
  dataset: "Dataset",
  journal: "SCIE Journal",
  etc: "Etc.",
};
/* 
function inferTrack(p) {
  const tRaw = (p.track || "").trim();
  const t = tRaw.toLowerCase(); // "SCIE Journal" → "scie journal"
  const vf   = (p.venue_full || "").toLowerCase();
  const v    = (p.venue || "").toLowerCase();

  // 명시 track 우선
   // 1) 명확한 SCIE Journal 케이스
  if (t === "scie journal") return "journal";
  if (t === "main")     return "main";
  if (t === "dataset")  return "dataset";
  if (t === "short")    return "short";
  if (t === "workshop") return "workshop";
  if (t === "etc.")      return "etc";
 // 저널 트랙을 명시로 받는 경우 (예: "journal", "scie", "sci", "sciejournal")
  if (t === "journal" || t.includes("scie") || t === "sci" || t.replace(/\s+/g,"") === "sciejournal") return "journal";

  // 3) 휴리스틱
  if (p.is_journal === true) return "journal";
  if (/journal|transactions|letters/.test(vf) || /journal|transactions|letters/.test(v))
    return "journal";
  if (/dataset|benchmark/.test(vf)) return "dataset";

  return "etc";
}


// Factor 유효성: ["문자열", 숫자]이며 0 초과
function factorValid(p) {
  const F = p.Factor || p.factor || null;
  if (!Array.isArray(F) || F.length < 2) return false;
  const f0 = String(F[0] ?? "").trim();
  const f1 = Number(F[1]);
  return f0 !== "" && Number.isFinite(f1) && f1 > 0;
} 

// venue 정규화
function venueLabel(p) {
  return (p.venue || p.venue_full || "Unknown").replace(/\s+/g, " ").trim();
}
function mergeCounts(...dicts) {
  const out = {};
  for (const d of dicts) {
    for (const [k, v] of Object.entries(d)) {
      out[k] = (out[k] || 0) + v;
    }
  }
  return out;
}

// 배지 HTML
function makeShield(label, count, color) {
  const encoded = encodeURIComponent(label);
  const url = `https://img.shields.io/badge/${encoded}-${count}-${color}?style=social`;
  return `<img loading="lazy" alt="${label}" src="${url}" height="20" style="margin-right:6px;">`;
}

// 카운트: 트랙별
// - main/dataset: venue별 dict
// - journal/etc: 단일 키(트랙표시 라벨)로 집계
function countForTrack(items, track) {
  const dict = {};
  for (const p of items || []) {
    const tr  = inferTrack(p);
    // ★ 트랙 필터 필수
    if (tr !== track) continue;

    if (track === "main" || track === "dataset" || track === "short") {
          // Factor 조건 필수(기존 규칙 유지)
          if (!factorValid(p)) continue;
          const key = venueLabel(p);          // venue 단위 집계
          dict[key] = (dict[key] || 0) + 1;
        } else {
          // journal / etc: 조건 없이 합산, 트랙명 단일 라벨
          const key = TRACK_LABEL[track];
          dict[key] = (dict[key] || 0) + 1;
        }
  }
  return dict;
}

// 정렬: count desc > 알파벳
function sortCounts(dict, track) {
  const arr = Object.entries(dict);
  if (arr.length <= 1) return arr;

  // --- Main / Short / Dataset: BK factor 기준 + 알파벳 정렬 ---
  if (track === "main" || track === "short" || track === "dataset") {
    const bkMap = {}; // bkMap[venueLabel] = 최대 BK 값(Factor[1])

    (window.PUBS || []).forEach(p => {
      const label = venueLabel(p);
      if (!Object.prototype.hasOwnProperty.call(dict, label)) return;

      const F = p.Factor || p.factor || null;
      if (!Array.isArray(F) || F.length < 2) return;

      const f1 = Number(F[1]);
      if (!Number.isFinite(f1)) return;

      if (!(label in bkMap) || f1 > bkMap[label]) {
        bkMap[label] = f1;
      }
    });

    return arr.sort((a, b) => {
      const [labelA] = a;
      const [labelB] = b;

      const bkA = bkMap[labelA] || 0;
      const bkB = bkMap[labelB] || 0;

      // 1) BK 내림차순
      if (bkB !== bkA) return bkB - bkA;
      // 2) 같은 BK 안에서는 학회명 알파벳순
      return labelA.localeCompare(labelB);
    });
  }

  // --- 나머지 트랙들(journal, etc): 알파벳만 ---
  return arr.sort((a, b) => {
    const [labelA] = a;
    const [labelB] = b;
    return labelA.localeCompare(labelB);
  });
}

function badgeListFor(track, suffix, color) {
  const dict = countForTrack(window.PUBS, track);
  return sortCounts(dict,track)
    .map(([label, n]) => makeShield(label + suffix, n, color))
    .join("&nbsp;");
}

function renderDatasetSection(mountId) {
  const el = document.getElementById(mountId);
  if (!el) return;

  const color = COLORS.dataset;

  // 1) 각 트랙 카운트
  const dictDataset = countForTrack(window.PUBS, "dataset");
  const dictShort   = countForTrack(window.PUBS, "short");

  // 2) 트랙별 정렬 후 라벨에 접미사 부여
  //    → 여기서 sortCounts가 BK 기준 정렬을 이미 해줌
  const entriesDataset = sortCounts(dictDataset, "dataset")
    .map(([label, n]) => [label + " Dataset", n]);

  const entriesShort   = sortCounts(dictShort, "short")
    .map(([label, n]) => [label + " Short", n]);

  // 3) 병합: Dataset 먼저, 그다음 Short
  //    (각 그룹 내부는 BK 기준으로 정렬된 상태)
  const merged = [...entriesDataset, ...entriesShort];

  // 4) 렌더
  const html = merged
    .map(([label, n]) => makeShield(label, n, color))
    .join("&nbsp;");
  el.innerHTML = html;
}


function renderBadges(track, mountId) {
  const el = document.getElementById(mountId);
  if (!el) return;

  const dict  = countForTrack(window.PUBS, track);
  const color = COLORS[track];

  let html = "";

  if (track === "main") {
    // 메인: venue별 배지
    html = sortCounts(dict,"main")
      .map(([label, n]) => makeShield(label + " Main", n, color))
      .join("&nbsp;");

  } else if (track === "dataset") {
    // 참고: 실제 화면은 renderDatasetSection에서 처리하지만,
    // 혹시 호출되더라도 안전하게 동작하도록 기본 렌더 유지
    html = sortCounts(dict,"dataset")
      .map(([label, n]) => makeShield(label + " Dataset", n, color))
      .join("&nbsp;");

  } else {
    // journal / etc: 단일 배지
    const total = Object.values(dict).reduce((s, v) => s + v, 0);
    html = total > 0 ? makeShield(TRACK_LABEL[track], total, color) : "";
  }

  el.innerHTML = html;
}

function renderDomesticWorkshopsBadges(mountId) {
  const el = document.getElementById(mountId);
  if (!el) return;

  // track 값: 'etc'와 'workshop'을 그대로 카운트
  const etcDict = countForTrack(window.PUBS, "etc");
  const wksDict = countForTrack(window.PUBS, "workshop");

  const etcTotal = Object.values(etcDict).reduce((s,v)=>s+v,0);
  const wksTotal = Object.values(wksDict).reduce((s,v)=>s+v,0);

  // 표시용 라벨을 JSON track 대신 고정 텍스트로
  const html = [
    makeShield("Other Papers", etcTotal, COLORS.etc),
    makeShield("Workshops",       wksTotal, COLORS.etc),
  ].join("&nbsp;");

  el.innerHTML = html;
}
*/
document.addEventListener("DOMContentLoaded", () => {
  //renderBadges("main", "badges-main");
  //renderDatasetSection("badges-dataset");
  //renderBadges("journal", "badges-journal");
  //renderDomesticWorkshopsBadges("badges-etc");

  // -------------------------
  // thumbs 버튼 클릭 → abstract 토글
  // -------------------------
  document.querySelectorAll(".abstract-toggle").forEach(btn => {
    const content = btn.nextElementSibling;  // 바로 뒤 div.abstract-content
    if (!content) return;

    btn.addEventListener("click", () => {
      content.classList.toggle("open");
    });
  });
});

</script>


