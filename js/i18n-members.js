/**
 * Member-field localization helpers (formal academic Korean).
 */
(function (global) {
    'use strict';

    const DEPT_KO = {
        'Computer Science & Engineering': '컴퓨터과학과/소프트웨어학과',
        'Computer Science and Engineering': '컴퓨터과학과/소프트웨어학과',
        'Artificial Intelligence': '인공지능학과',
        'Applied Artificial Intelligence': '인공지능융합학과',
        'Semiconductor Display Engineering': '반도체디스플레이공학',
        'Applied Data Science (데이터사이언스)': '데이터사이언스융합학과'
    };

    const INTEREST_KO = {
        'Deepfakes': '딥페이크',
        'Deepfake': '딥페이크',
        'DeepFake detection': '딥페이크 탐지',
        'Deepfake Detection': '딥페이크 탐지',
        'Deepfake detection': '딥페이크 탐지',
        'Deepfake Generation': '딥페이크 생성',
        'Multi-modal': '멀티모달',
        'Multi-modal & Super Resolution': '멀티모달 및 초해상도',
        'Computer Vision': '컴퓨터 비전',
        'Computer Vision & Multi-modal': '컴퓨터 비전 및 멀티모달',
        'Time-Series Anomaly Detection & Forecasting': '시계열 이상 탐지 및 예측',
        'Time Series Anomaly Detection': '시계열 이상 탐지',
        'Time Series Anomaly Detection & Forecasting': '시계열 이상 탐지 및 예측',
        'Time-Series Forcasting': '시계열 예측',
        'Time Series & Reinforcement Learning': '시계열 및 강화학습',
        'Differential privacy': '차분 프라이버시',
        'Representation learning': '표현 학습',
        'Representation Learning': '표현 학습',
        'Machine Unlearning': '머신 언러닝',
        'LLM': '대규모 언어모델(LLM)',
        'LLMs': '대규모 언어모델(LLM)',
        'VLMs': '비전-언어 모델(VLM)',
        'Anomaly Detection': '이상 탐지',
        'Large Language Models': '대규모 언어모델',
        'Industrial AI Applications': '산업 AI 응용',
        'Machine Learning': '머신러닝',
        'AI Privacy': 'AI 프라이버시',
        'PINNs': '물리정보 신경망(PINN)',
        'Graph Machine Unlearning': '그래프 머신 언러닝',
        'Agentic Unlearning': '에이전틱 언러닝',
        'Video Representation Learning': '비디오 표현 학습',
        'Video Anomaly': '비디오 이상 탐지',
        'Speech Recognition & Synthesis': '음성 인식 및 합성',
        'Generative Models': '생성 모델',
        'AI Safety': 'AI 안전',
        'Human-AI Interaction': '인간-AI 상호작용',
        'Safety-AI': 'AI 안전',
        'Interactive and Introspective Understanding of Deepfake': '딥페이크의 상호작용·내성 이해',
        'Image Manupulation': '이미지 조작',
        'Image Manipulation': '이미지 조작',
        'Weakly Supervised Learning': '약지도 학습',
        'Adversarial Robustness & Representation Learning': '적대적 강건성 및 표현 학습',
        'Knowledge distillation': '지식 증류',
        'Model compression': '모델 압축',
        'Object detection & Knowledge Distillation': '객체 탐지 및 지식 증류',
        'Object Detection & Knowledge distillation': '객체 탐지 및 지식 증류',
        'Big Data': '빅데이터',
        'Privacy & AI Security': '프라이버시 및 AI 보안',
        'AI based Satellite Ops': 'AI 기반 위성 운용',
        'Deepfakes & Speech Applications': '딥페이크 및 음성 응용',
        'Fake Image Detection & Speech Applications': '가짜 이미지 탐지 및 음성 응용',
        'Time-series Anomaly Detection': '시계열 이상 탐지',
        'Time-Series Anomaly Detection, Deepfake Generation & Detection': '시계열 이상 탐지, 딥페이크 생성 및 탐지',
        'Time-Series Anomaly Detection & Forecasting, Deepfakes Detection & Multi-media Forensics': '시계열 이상 탐지·예측, 딥페이크 탐지 및 멀티미디어 포렌식',
        'Computer Vision & Anomaly Detection': '컴퓨터 비전 및 이상 탐지',
        'Tensor methods for Anomaly Detection and Deep learning & Deepfakes': '이상 탐지·딥러닝·딥페이크를 위한 텐서 기법',
        'Deepfakes & Continual Learning': '딥페이크 및 연속 학습',
        'AI, LLM & Machine Unlearning': 'AI, LLM 및 머신 언러닝',
        'Big Data, E-Commerce & Data Science': '빅데이터, 전자상거래 및 데이터사이언스',
        'Anomaly Detection & Computer Vision': '이상 탐지 및 컴퓨터 비전',
        'Image Manipulation Detection & Time Series': '이미지 조작 탐지 및 시계열',
        'Representation Learning & XAI': '표현 학습 및 XAI',
        'Self-Supervised Learning': '자기지도 학습',
        'Model Compression': '모델 압축',
        '강화학습': '강화학습'
    };

    const ROLE_KO = {
        'Research Scientist': '연구원 (Research Scientist)',
        'Ph.D. Student': '박사과정',
        'Masters Student': '석사과정',
        'Undergraduate Student': '학부연구생',
        'Research Professor': '연구교수'
    };

    function localizeDept(dept) {
        if (!dept) return '';
        if (typeof DashI18n === 'undefined' || DashI18n.getLang() !== 'ko') return dept;
        if (dept.dept_ko) return dept.dept_ko;
        return DEPT_KO[dept] || dept;
    }

    function localizeInterestChip(chip) {
        if (!chip) return '';
        if (typeof DashI18n === 'undefined' || DashI18n.getLang() !== 'ko') return chip;
        if (INTEREST_KO[chip]) return INTEREST_KO[chip];
        // Try partial replacements for compound strings
        let out = chip;
        Object.keys(INTEREST_KO).sort((a, b) => b.length - a.length).forEach((en) => {
            if (out.includes(en)) out = out.split(en).join(INTEREST_KO[en]);
        });
        return out;
    }

    function localizeInterests(interests) {
        if (!interests) return '';
        if (typeof DashI18n !== 'undefined' && DashI18n.getLang() === 'ko' && typeof interests === 'object' && interests.interests_ko) {
            return interests.interests_ko;
        }
        if (typeof interests === 'object' && interests.interests) interests = interests.interests;
        if (typeof DashI18n === 'undefined' || DashI18n.getLang() !== 'ko') return interests;
        return String(interests)
            .split(',')
            .map((s) => localizeInterestChip(s.trim()))
            .join(', ');
    }

    function localizeRole(role) {
        if (!role) return '';
        if (typeof DashI18n === 'undefined' || DashI18n.getLang() !== 'ko') return role;
        return ROLE_KO[role] || role;
    }

    function localizeMemberField(member, key) {
        if (!member) return '';
        if (typeof DashI18n !== 'undefined') {
            const v = DashI18n.field(member, key);
            if (key === 'dept') return localizeDept(v);
            if (key === 'interests') return localizeInterests(v);
            if (key === 'role') return localizeRole(v);
            if (key === 'major') return localizeDept(v) || localizeInterestChip(v) || v;
            return v;
        }
        return member[key] || '';
    }

    global.DashMemberI18n = {
        localizeDept,
        localizeInterests,
        localizeInterestChip,
        localizeRole,
        localizeMemberField,
        DEPT_KO,
        INTEREST_KO
    };
})(typeof window !== 'undefined' ? window : this);
