// --- Heroface Restoration Project Data ---

const herofaceProjectInfo = {
    title: "AI 기술을 활용한 6.25 전쟁영웅 사진 복원 사업",
    researchers: "우 사이먼 교수, 박은일 교수, 손건호(M.S.), 백승연(M.S.), 정다혜(Ph.D.), 문학준(M.S.), 이강준(M.S.), 김정호(M.S.)",
    description: "6.25전쟁 73주년을 맞아 대한민국의 자유를 지키기 위해 6.25 전쟁에 참전했던 용사들의 헌신을 기리며 국가보훈부와 성균관대 인공지능학과가 협업하여 참전 영웅들의 젊은 시절이 담긴 빛바랜 흑백사진을 인공지능 기술로 복원하였습니다. 노이즈 제거 (DDNM), 고해상도 복원 (GFP-GAN), iColoriT (컬러 복원), PaddleSeg (배경 합성) 등 최신 복원 기술을 사용 후 전문가의 고증을 받아 저화질 사진을 고품질의 이미지로 만들었습니다. 해당 사진들은 6.25 전쟁 73주년 전시 및 유가족에게 전달되었습니다.",
    mainImage: "img/projects/heroface-restoration/heroface_restoration_main.jpg",
    mainImageCaption: "Jul 2025: Three full papers accepted at MM 2025 (BK IF=4)"
};

const herofaceMethods = [
    { title: "GFP-GAN", img: "img/projects/heroface-restoration/gfpgan.png" },
    { title: "iColoriT", img: "img/projects/heroface-restoration/icolorit.png" },
    { title: "DDNM", img: "img/projects/heroface-restoration/ddnm.png" },
    { title: "PaddleSeg", img: "img/projects/heroface-restoration/paddleseg.png" }
];

const herofaceMedia = {
    youtube: "https://www.youtube.com/embed/QPwrMIbc7AY?si=eUTkn9MPCh0SXavJ",
    links: [
        { 
            title: "뉴스원, 보훈부, 6·25전쟁영웅 컬러로 변환해 전시", 
            url: "https://www.news1.kr/photos/view/?6128278" 
        },
        { 
            title: "아시아투데이, [정전 70주년] 부산서 6·25전쟁 사진전…흑백사진 속 전쟁영웅 컬러로 복원", 
            url: "https://www.asiatoday.co.kr/view.php?key=20230727010016220" 
        },
        { 
            title: "대한민국 정책브리핑, 색채사진으로 복원된 독립운동가 15인, 광화문서 만난다", 
            url: "https://www.korea.kr/news/policyNewsView.do?newsId=148912176&call_from=naver_news" 
        },
        { 
            title: "연합뉴스, 안중근·윤봉길 등 독립운동가 15인 AI 기술로 컬러 복원", 
            url: "https://www.yonhapnewstv.co.kr/news/MYH20230228001600641?input=1825m" 
        },
        { 
            title: "연합뉴스, 보훈처, 인공지능 기술로 독립운동가 색채 사진 복원", 
            url: "https://www.yna.co.kr/view/PYH20230227216600013?input=1196m" 
        },
        { 
            title: "KTV 국민방송, 6·25 전쟁 영웅, AI로 흑백사진 컬러 복원", 
            url: "https://www.ktv.go.kr/content/view?content_id=671997" 
        },
        { 
            title: "YTN, 컬러사진'으로 복원된 독립지사…더 생생하게 만난다", 
            url: "https://www.ytn.co.kr/_ln/0101_202303010533215891" 
        },
        { 
            title: "빙그레, 세상에서 가장 늦은 졸업식", 
            url: "https://youtu.be/QPwrMIbc7AY?si=S185zjEOKZaNxor3" 
        },
        { 
            title: "Arirang TV, Restoration of Korean War veterans' photos", 
            url: "https://www.arirang.com/tv/37/archive?board=147&id=28137&sort=episode" 
        }
    ],
    extraImage: "img/projects/heroface-restoration/pat2.png"
};

const herofaceParticipants = [
    { name: "국가보훈부", img: "img/heroface-restoration/bohun.png" },
    { name: "DASH Lab", img: "img/heroface-restoration/dash.png" },
    { name: "자생의료재단", img: "img/heroface-restoration/jaseng.png" }
];