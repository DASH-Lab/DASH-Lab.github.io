// --- Members Data ---
// Load this in your HTML before members.js

const researchProfessors = [
    {
        name: "Binh M. Le",
        role: "Research Professor",
        dept: "Computer Science & Engineering",
        interests: "Adversarial Robustness, Representation Learning",
        email: "bmle@g.skku.edu",
        img: "img/member_images/BinhMLe.jpg",
        link: "https://sites.google.com/view/binhminhle/home"
    }
];

const phdStudents = [
    { name: "Eunju Park", dept: "Computer Science & Engineering", interests: "Deepfakes", email: "cindi01@g.skku.edu", img: "img/member_images/dummy_female.png" },
    { name: "Juhun Lee", dept: "Artificial Intelligence", interests: "Computer Vision", email: "josejhlee@g.skku.edu", img: "img/member_images/JuhunLee.jpg" },
    { name: "Seunghoo Hong", dept: "Artificial Intelligence", interests: "Multi-modal, Deepfake detection, Representation learning", email: "hoo0681@g.skku.edu", img: "img/member_images/SeungHooHong.jpg" },
    { name: "Kangjun Lee", dept: "Computer Science & Engineering", interests: "Time-Series Anomaly Detection & Forecasting", email: "gkdl677@g.skku.edu", img: "img/member_images/KangjunLee.jpg" },
    { name: "이현근", dept: "Applied Artificial Intelligence", interests: "Anomaly Detection", email: "—", img: "img/member_images/dummy_male.png" },
    { name: "Inzamamul Alam", dept: "Computer Science and Engineering", interests: "Multi-modal, Image Manupulation, Deepfake Detection, Representation learning", email: "inzi15@g.skku.edu", img: "img/member_images/inzi.jpg" },
    { name: "M. Shahid Muneer", dept: "Computer Science and Engineering", interests: "DeepFake detection, VLMs, LLMs", email: "shahidmuneer@g.skku.edu", img: "img/member_images/shahid.png", link: "https://scholar.google.com/citations?user=aOz3PaoAAAAJ&hl=en" },
    { name: "Sanghyeok Park", dept: "Semiconductor Display Engineering", interests: "Large Language Models, Industrial AI Applications", email: "sh88park@g.skku.edu", img: "img/member_images/ParkSangHyeok.jpg" },
    { name: "Sangyong Lee", dept: "Artificial Intelligence", interests: "Differential privacy", email: "sang8961@g.skku.edu", img: "img/member_images/Sangyong.jpg" },
    { name: "Jiwon Kim", dept: "Artificial Intelligence", interests: "Computer Vision & Multi-modal", email: "jiwon.merily.kim@gmail.com", img: "img/member_images/dummy_female.png" },
    { name: "Seungyeon Back", dept: "Artificial Intelligence", interests: "Computer Vision", email: "syon1203@g.skku.edu", img: "img/member_images/dummy_female.png" },
    { name: "Geonho Son", dept: "Artificial Intelligence", interests: "Multi-modal & Super Resolution", email: "sohn1029@g.skku.edu", img: "img/member_images/songeonho.jpg" },
    { name: "Tran Van Khoa", dept: "Computer Science & Engineering", interests: "Machine Learning, AI Privacy, Representation Learning", email: "khoa.tr@g.skku.edu", img: "img/member_images/Khoa Tran.jpg" },
    { name: "Razaib Tariq", dept: "Computer Science & Engineering", interests: "Deepfake Detection", email: "razaibtariq@g.skku.edu", img: "img/member_images/razaibtariq.jpg" },
    { name: "Tuan V. Nguyen", dept: "Computer Science & Engineering", interests: "Deepfake Generation, Deepfake Detection, PINNs", email: "tuannv99@g.skku.edu", img: "img/member_images/tuannguyen.jpg" },
    { name: "Hyunjune Kim", dept: "Computer Science & Engineering", interests: "Machine Unlearning, Deepfake detection, LLM", email: "hyunjune.kim@g.skku.edu", img: "img/member_images/dummy_male.png" }
];

const msStudents = [
    { name: "Beomsang Cho", dept: "Computer Science & Engineering", interests: "Computer Vision", email: "gababsang@g.skku.edu", img: "img/member_images/BeomSang Cho.png" },
    { name: "Hakjun Moon", dept: "Computer Science & Engineering", interests: "Computer Vision", email: "—", img: "img/member_images/dummy_male.png" },
    { name: "Yurim Jang", dept: "Artificial Intelligence", interests: "Computer Vision", email: "jyl8755@naver.com", img: "img/member_images/YurimJang.jpg" },
    { name: "Sangjun Chung", dept: "Artificial Intelligence", interests: "Computer Vision & Multi-modal", email: "hyjk826@g.skku.edu", img: "img/member_images/dummy_male.png" },
    { name: "Hohyun Na", dept: "Intelligent Software", interests: "Computer Vision & Multi-modal", email: "skghgus9@g.skku.edu", img: "img/member_images/dummy_male.png" },
    { name: "Hyeongjun Choi", dept: "Artificial Intelligence", interests: "Computer Vision", email: "junhjun@g.skku.edu", img: "img/member_images/dummy_male.png" },
    { name: "Chan Park", dept: "Artificial Intelligence", interests: "Multi-modal, Deepfake Detection, Weakly Supervised Learning", email: "pchan1018@g.skku.edu", img: "img/member_images/chanhid.png" },
    { name: "Hyeonsu Hwang", dept: "Computer Science & Engineering", interests: "Anomaly Detection & Representation Learning", email: "hhs4366@g.skku.edu", img: "img/member_images/dummy_male.png" },
    { name: "Yongcheol Noh", dept: "Computer Science & Engineering", interests: "Anomaly Detection", email: "nyc0421@g.skku.edu", img: "img/member_images/dummy_male.png" },
    { name: "Jungwook Shon", dept: "Semiconductor and Display Engineering", interests: "Time Series Anomaly Detection", email: "jw.shon@g.skku.edu", img: "img/member_images/SonJungWook.jpg" },
    { name: "JongU Park", dept: "Computer Science & Engineering", interests: "Time Series Anomaly Detection", email: "jongupark@g.skku.edu", img: "img/member_images/dummy_male.png" },
    { name: "Seungwon Jeong", dept: "Artificial Intelligence", interests: "Time Series Anomaly Detection & Forecasting, Speech Recognition & Synthesis", email: "bbiqaa123@g.skku.edu", img: "img/member_images/dummy_male.png" },
    { name: "Bohyun Moon", dept: "Artificial Intelligence", interests: "Computer Vision, Deepfakes, Video Representation Learning", email: "bhmoon98@g.skku.edu", img: "img/member_images/MoonBoHyun2.jpg" },
    { name: "Seungjune Kang", dept: "Artificial Intelligence", interests: "Computer Vision, Video Anomaly, Deepfakes", email: "seungjune05@g.skku.edu", img: "img/member_images/dummy_male.png" }
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
    { name: "Binh M. Le (Ph.D.) 2025", major: "Adversarial Robustness & Representation Learning", employment: "TBD", link: "https://sites.google.com/view/binhminhle/home" },
    { name: "Minji Heo (MS) 2025", major: "Computer Vision", employment: "TBD" },
    { name: "Minsun Jeon (MS) 2025", major: "Computer Vision & Multi-modal", employment: "TBD" },
    { name: "Inho Jung (MS) 2025", major: "Representation Learning & XAI", employment: "TBD" },
    { name: "김현준 (MS) 2025", major: "AI, LLM & Machine Unlearning", employment: "NAVER" },
    { name: "Minha Kim (MS) 2024", major: "Time Series & Reinforcement Learning", employment: "Applied Materials" },
    { name: "Girim Ban (MS) 2024", major: "Big Data, E-Commerce & Data Science", employment: "Data Scientist at Toss" },
    { name: "Taejune Kim (MS) 2024", major: "Anomaly Detection & Computer Vision", employment: "Robotics Lab, Hyundai Motor Company", link: "https://tae-mo.github.io/" },
    { name: "Kishor Kumar Bhaumik (MS) 2023", major: "Image Manipulation Detection & Time Series", employment: "UC Riverside, PhD program (w/ Dean's Distinguished Award + RA)", link: "https://kishor-bhaumik.github.io/" },
    { name: "Jungho Kim (MS) 2023", major: "Knowledge distillation", employment: "KAIST, PhD program" },
    { name: "Gwanghan Lee (MS) 2023", major: "Model compression", employment: "Upstage" },
    { name: "Jinbeom Kim (MS) 2023", major: "Object detection & Knowledge Distillation", employment: "LIG 넥스원" },
    { name: "Sangyup Lee (Ph.D.) 2023", major: "Time-Series Anomaly Detection & Forecasting, Deepfakes Detection & Multi-media Forensics", employment: "Principal Research Engineer, Hyundai Mobis", link: "https://sites.google.com/view/sangyuplee/" },
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