// --- Members Data ---
// Load this in your HTML before members.js

const industryAlumni = [
    {
        name: "Binh M. Le",
        role: "Research Scientist",
        company: "Meta",
        location: "USA",
        city: "San Francisco",
        img: "img/member_images/BinhMLe.jpg",
        link: "https://sites.google.com/view/binhminhle/home",
        companyLogo: "fa-brands fa-meta",
        companyColor: "#0668E1" // Meta Blue
    }
];

const researchProfessors = [
    // { name: "Simon S. Woo", dept: "Computer Science & Engineering", interests: "Deepfakes", email: "cindi01@g.skku.edu", img: "img/member_images/EunjuPark.jpg" },
];

const phdStudents = [
    { name: "Eunju Park", dept: "Computer Science & Engineering", interests: "Deepfakes", email: "cindi01@g.skku.edu", img: "img/member_images/EunjuPark.jpg" },
    { name: "Seunghoo Hong", dept: "Artificial Intelligence", interests: "Multi-modal, Deepfake detection, Representation learning", email: "hoo0681@g.skku.edu", img: "img/member_images/SeungHooHong.jpg" },
    { name: "Juhun Lee", dept: "Artificial Intelligence", interests: "Computer Vision", email: "josejhlee@g.skku.edu", img: "img/member_images/JuhunLee.jpg" },
    { name: "Kangjun Lee", dept: "Computer Science & Engineering", interests: "Time-Series Anomaly Detection & Forecasting", email: "gkdl677@g.skku.edu", img: "img/member_images/KangjunLee.jpg" },
    { name: "Geonho Son", dept: "Computer Science & Engineering", interests: "Multi-modal & Super Resolution", email: "sohn1029@g.skku.edu", img: "img/member_images/Geonho_Son.jpg" },
    { name: "Sangyong Lee", dept: "Computer Science & Engineering", interests: "Differential privacy", email: "sang8961@g.skku.edu", img: "img/member_images/Sangyong.jpg" },
    { name: "Jiwon Kim", dept: "Computer Science & Engineering", interests: "Computer Vision & Multi-modal", email: "jiwon.merily.kim@gmail.com", img: "img/member_images/JiwonKim.png" },
    { name: "Seungyeon Back", dept: "Computer Science & Engineering", interests: "Computer Vision", email: "syon1203@g.skku.edu", img: "img/member_images/Seungyeon_Baek.jpg" },
    { name: "Hyunjune Kim", dept: "Computer Science & Engineering", interests: "Machine Unlearning, Deepfake detection, LLM", email: "hyunjune.kim@g.skku.edu", img: "img/member_images/HyunjuneKim.jpg" },
    { name: "Inzamamul Alam", dept: "Computer Science and Engineering", interests: "Multi-modal, Image Manupulation, Deepfake Detection, Representation learning", email: "inzi15@g.skku.edu", img: "img/member_images/inzi.jpg" },
    { name: "Razaib Tariq", dept: "Computer Science & Engineering", interests: "Deepfake Detection", email: "razaibtariq@g.skku.edu", img: "img/member_images/razaibtariq.jpg" },
    { name: "M. Shahid Muneer", dept: "Computer Science and Engineering", interests: "DeepFake detection, VLMs, LLMs", email: "shahidmuneer@g.skku.edu", img: "img/member_images/shahid.png", link: "https://scholar.google.com/citations?user=aOz3PaoAAAAJ&hl=en" },
    { name: "이현근", dept: "Applied Artificial Intelligence", interests: "Anomaly Detection", email: "—", img: "img/member_images/HynegeunLee.jpg" },
    { name: "Sanghyeok Park", dept: "Semiconductor Display Engineering", interests: "Large Language Models, Industrial AI Applications", email: "sh88park@g.skku.edu", img: "img/member_images/ParkSangHyeok.jpg" },
    { name: "Tran Van Khoa", dept: "Computer Science & Engineering", interests: "Machine Learning, AI Privacy, Representation Learning", email: "khoa.tr@g.skku.edu", img: "img/member_images/Khoa Tran.jpg" },
    { name: "Tuan V. Nguyen", dept: "Computer Science & Engineering", interests: "Deepfake Generation, Deepfake Detection, PINNs", email: "tuannv99@g.skku.edu", img: "img/member_images/tuannguyen.jpg" },
    { name: "Seungbin Yim", dept: "Computer Science & Engineering", interests: "Time-Series Forcasting, Multi-modal, LLMs", email: "ysb06@g.skku.edu", img: "img/member_images/SeungbinYim.png" }
];

const msStudents = [
    { name: "Beomsang Cho", dept: "Computer Science & Engineering", interests: "Computer Vision", email: "gababsang@g.skku.edu", img: "img/member_images/BeomSang Cho.png" },
    { name: "Hyeongjun Choi", dept: "Artificial Intelligence", interests: "Computer Vision", email: "junhjun@g.skku.edu", img: "img/member_images/HyeongjunChoi.jpg" },
    { name: "Chan Park", dept: "Artificial Intelligence", interests: "Multi-modal, Deepfake Detection, Weakly Supervised Learning", email: "pchan1018@g.skku.edu", img: "img/member_images/ChanPark.jpg" },
    { name: "Yurim Jang", dept: "Artificial Intelligence", interests: "Computer Vision", email: "jyl8755@naver.com", img: "img/member_images/YurimJang.jpg" },
    { name: "Bohyun Moon", dept: "Artificial Intelligence", interests: "Computer Vision, Deepfakes, Video Representation Learning", email: "bhmoon98@g.skku.edu", img: "img/member_images/MoonBoHyun2.jpg" },
    { name: "Seungjune Kang", dept: "Artificial Intelligence", interests: "Computer Vision, Video Anomaly, Deepfakes", email: "seungjune05@g.skku.edu", img: "img/member_images/SeungjuneKang.jpg" },

    { name: "JongU Park", dept: "Computer Science & Engineering", interests: "Time Series Anomaly Detection", email: "jongu.park@g.skku.edu", img: "img/member_images/JonguPark.jpg" },
    { name: "Seungwon Jeong", dept: "Computer Science & Engineering", interests: "Time Series Anomaly Detection & Forecasting, Speech Recognition & Synthesis", email: "bbiqaa123@g.skku.edu", img: "img/member_images/SeungwonJeong.png" },
    { name: "Ye Ju Kim", dept: "Artificial Intelligence", interests: "Computer Vision", email: "ekdtj117@g.skku.edu", img: "img/member_images/YeJuKim.jpg" },
    { name: "Jonghan Lee", dept: "Computer Science & Engineering", interests: "Computer Vision", email: "mailto:jhlee22@g.skku.edu", img: "img/member_images/JonghanLee.jpg" },
    { name: "Minju Song", dept: "Artificial Intelligence", interests: "Computer Vision", email: "songjudy@g.skku.edu", img: "img/member_images/MinjuSong.jpg" },
    { name: "Sorin Yoo", dept: "Artificial Intelligence", interests: "Computer Vision", email: "solin0601@g.skku.edu", img: "img/member_images/SorinYoo.png" },
    { name: "Jeyoung Oh", dept: "Applied Data Science", interests: "Computer Vision", email: "jeyoung1112@g.skku.edu", img: "img/member_images/JeyoungOh.jpg" },
];

const unsergraduatedStudents = [
    { name: "Junwoo Lee", dept: null, interests: "Computer Vision", email: "juneejun6086@gmail.com", img: "img/member_images/JunwooLee.jpg" },
];
const masterSupervision = [
    { name: "경윤영", major: "Applied Data Science (데이터사이언스)", employment: "Samsung Display AI팀", topic: "Anomaly Detection" },
    { name: "변규백 ('23)", major: "Applied Data Science (데이터사이언스)", employment: "Samsung Elec.", topic: "Self-Supervised Learning" },
    { name: "인정현 ('23)", major: "Applied Data Science (데이터사이언스)", employment: "LG에너지솔루션", topic: "Anomaly Detection" },
    { name: "김근수 ('22)", major: "Applied Data Science (데이터사이언스)", employment: "Hyndai Kefico --> Applied Materials", topic: "Model Compression" },
    { name: "하민성 ('22)", major: "Applied Data Science (데이터사이언스)", employment: "Samsung Elec.", topic: "Anomaly Detection" },
    { name: "주기형 ('21)", major: "Applied Data Science (데이터사이언스)", employment: "현대자동차 연구소", topic: "강화학습" },
    { name: "Seunghwa Song", major: "Applied Data Science (데이터사이언스)", employment: "Citi Bank", topic: "Optimizing NBA Basketball Point-Spread Betting Using Machine Learning Techniques" },
    { name: "SoonYoung Kwon", major: "Applied Data Science (데이터사이언스)", employment: "Tiger Team", topic: "Deep Learning based Phishing Website Detection using Source Code" },
    { name: "서수량", major: "Applied Data Science (데이터사이언스)", employment: "서울대학교 병원", topic: "전자의무기록 임상 노트와 ClinicalBERT로 Transfer Learning을 이용한 장기재원 여부 예측" },
    { name: "윤대영", major: "Applied Data Science (데이터사이언스)", employment: "배달의 민족", topic: "Inverse Reinforcement Learning based Novelty Detection" },
    { name: "박성호", major: "Applied Data Science (데이터사이언스)", employment: "LOTTE Food", topic: "머신러닝 기반 식용 작물별 생산량 예측 연구 및 변수별 생산량에 끼치는 영향력 파악 연구 진행" },
    { name: "천세영", major: "Applied Data Science (데이터사이언스)", employment: "NC Soft", topic: "텐서 분해를 이용한 에어비앤비 추천시스템 연구" },
    { name: "이지은", major: "Applied Data Science (데이터사이언스)", employment: "LOTTE", topic: "면세점 웹로그 데이터를 활용한 개인화 추천 시스템 연구" }
];

const alumni = [
    { name: "Binh M. Le (Ph.D.) 2025", major: "Adversarial Robustness & Representation Learning", employment: "Research Scientist in Meta", link: "https://sites.google.com/view/binhminhle/home" },
    { name: "Yongcheol Noh (MS) 2026", major: "Computer Science & Engineering", employment: "모티프드라이브" },
    { name: "Hakjun Moon (MS) 2026", major: "Computer Science & Engineering", employment: "TBD" },
    { name: "Jungwook Shon (MS) 2026", major: "Time Series Anomaly Detection", employment: "Samsung Electronics" },
    { name: "Hohyun Na (MS) 2026", major: "Computer Vision & Multi-modal", employment: "Samsung Research" },
    { name: "Sangjun Chung (MS) 2026", major: "Computer Vision & Multi-modal", employment: "Samsung MX" },
    { name: "Hyeonsu Hwang (MS) 2026", major: "Computer Vision", employment: "TBD" },
    { name: "Minji Heo (MS) 2025", major: "Computer Vision", employment: "TBD" },
    { name: "Minsun Jeon (MS) 2025", major: "Computer Vision & Multi-modal", employment: "TBD" },
    { name: "Inho Jung (MS) 2025", major: "Representation Learning & XAI", employment: "TBD" },
    { name: "김현준 (MS) 2025", major: "AI, LLM & Machine Unlearning", employment: "NAVER" },
    { name: "Minha Kim (MS) 2024", major: "Time Series & Reinforcement Learning", employment: "Applied Materials" },
    { name: "Girim Ban (MS) 2024", major: "Big Data, E-Commerce & Data Science", employment: "Data Scientist at Toss" },
    { name: "Taejune Kim (MS) 2024", major: "Anomaly Detection & Computer Vision", employment: "Robotics Lab, Hyundai Motor Company" },
    { name: "Kishor Kumar Bhaumik (MS) 2023", major: "Image Manipulation Detection & Time Series", employment: "UC Riverside, PhD program (w/ Dean's Distinguished Award + RA)" },
    { name: "Jungho Kim (MS) 2023", major: "Knowledge distillation", employment: "KAIST, PhD program" },
    { name: "Gwanghan Lee (MS) 2023", major: "Model compression", employment: "Upstage" },
    { name: "Jinbeom Kim (MS) 2023", major: "Object detection & Knowledge Distillation", employment: "LIG 넥스원" },
    { name: "Sangyup Lee (Ph.D.) 2023", major: "Time-Series Anomaly Detection & Forecasting, Deepfakes Detection & Multi-media Forensics", employment: "Assistant Professor at Incheon National University", link: "https://sites.google.com/view/sangyuplee/" },
    { name: "Keeyoung Kim (Ph.D.) 2022", major: "Computer Vision & Anomaly Detection", employment: "Ingenio AI (Start-Up)" },
    { name: "Youjin Shin (Ph.D.) 2022", major: "Tensor methods for Anomaly Detection and Deep learning & Deepfakes", employment: "Tenured Track Assistant Professor, Department of Data Science, The Catholic University of Korea, Seoul", link: "https://sites.google.com/view/adslab0/members?authuser=0" },
    { name: "Chingis Oinar (BS) 2022", major: "Representation learning", employment: "Mercari, Japan --> NYU Data Science MS (accepted)", employmentLink: "https://jp.mercari.com/" },
    { name: "Hanbin Lee (MS) 2022", major: "Object Detection & Knowledge distillation", employment: "Naver Z" },
    { name: "Shahroz Tariq (Ph.D.) 2022", major: "Time-series Anomaly Detection, Deepfake Generation & Detection", employment: "Research Scientist @ Data61, CSIRO", link: "https://sites.google.com/view/shahroztariq", employmentLink: "https://data61.csiro.au" },
    { name: "Minha Kim (MS) 2022", major: "Deepfakes & Continual Learning", employment: "Naver Clova" },
    { name: "이상원 (MS) 2021", major: "Big Data", employment: "Ernest & Young --> Amazon AWS, Korea" },
    { name: "Sowon Jeon (MS) 2021", major: "Privacy & AI Security", employment: "KPMG Korea" },
    { name: "JoonHyung Kang (MS) 2021", major: "AI based Satellite Ops", employment: "SK C&C" },
    { name: "Hasam Khalid (MS) 2021", major: "Deepfakes & Speech Applications", employment: "Veev.inc" },
    { name: "Sunny Yun (윤선이) (MS) 2021", major: "Anomaly Detection", employment: "Asiana Air" },
    { name: "Junyaup Kim (MS) 2021", major: "Fake Image Detection & Speech Applications", employment: "IBM Korea" },
    { name: "Siho Han (MS) 2021", major: "Time-series Anomaly Detection", employment: "RTM" },
    { name: "Youngoh Bang (MS) 2020", major: "AI", employment: "TMaxSoft" },
    { name: "박수진 (MS) 2020", major: "Applied Data Science (데이터사이언스)", employment: "Kakao" }
];