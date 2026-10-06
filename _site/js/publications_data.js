const PUBLICATIONS_DATA_LOCAL = [
    {
        "title": "BoDA: Boundary-Distance-Aware Coreset Selection for Efficient Machine Unlearning",
        "authors": [
            "Hyunjune Kim",
            "Sangyong Lee",
            "Simon S. Woo"
        ],
        "venue_full": "Asian Conference on Computer Vision",
        "venue": "ACCV",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2026,
        "links": {
            "conf": "https://accv2026.org/"
        },
        "img": "/img/Publications/2026-ACCV-Sangyong.png",
        "abstract": "Machine Unlearning (MU) has emerged to mitigate data privacy concerns by efficiently removing target data from pre-trained models while preserving overall performance. Existing MU methods are faster than retraining from scratch, but still require processing large amounts of data. We formulate data reduction for MU as dual-objective coreset selection that accounts for the forgetting–retention trade-off across diverse unlearning scenarios. We propose BoDA, a plug-and-play framework that accelerates MU through boundary-aware sample selection. BoDA assigns each sample a boundary-aware distance that captures its geometric role relative to the model's decision boundary. It computes this distance by combining latent-space adversarial perturbation with vector interpolation to localize prediction-flipping points between original and perturbed representations. Using the resulting distances, BoDA groups samples into Interior, Midrange, and Extremity regions and selects suitable geometric roles for different unlearning scenarios. As a data-level method, BoDA integrates with existing MU algorithms without architectural or objective modifications. Extensive experiments show that the proposed framework substantially reduces runtime while matching and sometimes surpassing full-data baselines.",
        "abstract_ko": "기계 언러닝(Machine Unlearning, MU)은 사전학습 모델에서 대상 데이터를 효율적으로 제거하면서도 전반적 성능을 유지함으로써 데이터 프라이버시 문제를 완화하기 위해 등장하였습니다. 기존 MU 방법은 처음부터 재학습하는 것보다 빠르지만, 여전히 대량의 데이터를 처리해야 합니다. 본 연구에서는 MU를 위한 데이터 축소를 다양한 언러닝 시나리오에서의 망각–유지 트레이드오프를 고려하는 이중 목적 coreset 선택 문제로 정식화합니다. 이에 경계 인식 샘플 선택을 통해 MU를 가속하는 plug-and-play 프레임워크 BoDA를 제안합니다. BoDA는 각 샘플에 모델의 결정 경계에 대한 기하학적 역할을 포착하는 경계 인식 거리를 부여합니다. 이 거리는 latent-space 적대적 섭동과 벡터 보간을 결합하여 원본 표현과 섭동된 표현 사이에서 예측이 뒤집히는 지점을 국소화함으로써 계산됩니다. 산출된 거리를 바탕으로 BoDA는 샘플을 Interior, Midrange, Extremity 영역으로 그룹화하고, 서로 다른 언러닝 시나리오에 적합한 기하학적 역할을 선택합니다. 데이터 수준 방법으로서 BoDA는 아키텍처나 목적함수 수정 없이 기존 MU 알고리즘과 통합됩니다. 광범위한 실험 결과, 제안 프레임워크는 전체 데이터 베이스라인과 동등하거나 때로 이를 상회하는 성능을 유지하면서 실행 시간을 크게 줄임을 보입니다."
    },
    {
        "title": "Decomposed Attention Frequency Debiased Transformer Model: Large Time-series Model for Satellite Orbit Prediction",
        "authors": [
            "Kanjun Lee",
            "Seungwon Jeong",
            "Jongu Park",
            "Youjin Shin",
            "Simon S. Woo"
        ],
        "venue_full": "ACM International Conference on Information and Knowledge Management",
        "venue": "CIKM",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            3
        ],
        "year": 2026,
        "links": {
            "conf": "https://cikm2026.diag.uniroma1.it/"
        },
        "img": "/img/Publications/2026_CIKM_Kangjun.png",
        "abstract": "Accurate satellite orbit prediction is critical for collision avoidance and sustainable space operations. However, conventional prediction methods are constrained by coarse update intervals and orbit discontinuities. Additionally, building separate prediction models for each satellite is computationally expensive, making large-scale accurate forecasting increasingly impractical. To address the aforementioned challenges, we propose the Decomposed Attention Frequency-debiased transformer (DAF) model, a large time-series prediction model that utilizes efficient Real Fast Fourier Transform (RFFT) and Inverse RFFT alongside positional embeddings. Our DAF also integrates Tensorized Multi-Head Attention based on Tensor Train Decomposition for parameter-efficient compression and improved performance. We pre-trained on a large-scale Starlink dataset comprising 6,955 satellites and evaluated zero-shot performance on seven cross-domain satellite orbit datasets and three real-world datasets. DAF achieves up to 34.85% reduction in mean squared error and 16.01% reduction in mean absolute error over the second-best model, using only 0.045% of its parameters and maintaining inference speed comparable to conventional neural network baselines. These results demonstrate that DAF enables zero-shot, high-precision orbit prediction not only for Starlink satellites, but also for other types of satellites. The code is available here: https://anonymous.4open.science/r/DAF-0D75",
        "abstract_ko": "정확한 위성 궤도 예측은 충돌 회피와 지속 가능한 우주 운용에 필수적입니다. 그러나 기존 예측 방법은 거친 갱신 간격과 궤도 불연속성에 의해 제약을 받습니다. 또한 위성별로 별도의 예측 모델을 구축하는 것은 계산 비용이 커서, 대규모·고정밀 예측이 점점 비현실적이 되고 있습니다. 이러한 문제를 해결하기 위해, 본 연구에서는 효율적인 Real Fast Fourier Transform(RFFT)과 Inverse RFFT, 그리고 positional embedding을 활용하는 대규모 시계열 예측 모델인 Decomposed Attention Frequency-debiased transformer(DAF)를 제안합니다. DAF는 또한 Tensor Train Decomposition 기반의 Tensorized Multi-Head Attention을 통합하여 파라미터 효율적 압축과 성능 향상을 동시에 달성합니다. 본 모델은 6,955개 위성으로 구성된 대규모 Starlink 데이터셋으로 사전학습하였으며, 7개의 교차 도메인 위성 궤도 데이터셋과 3개의 실세계 데이터셋에서 zero-shot 성능을 평가하였습니다. DAF는 차선 모델 대비 평균제곱오차(MSE)를 최대 34.85%, 평균절대오차(MAE)를 16.01% 감소시키면서도 파라미터는 해당 모델의 0.045%만 사용하며, 추론 속도는 기존 신경망 베이스라인과 유사한 수준을 유지합니다. 이러한 결과는 DAF가 Starlink뿐 아니라 다른 유형의 위성에 대해서도 zero-shot 고정밀 궤도 예측을 가능하게 함을 보여줍니다. 코드는 다음에서 확인할 수 있습니다: https://anonymous.4open.science/r/DAF-0D75"
    },
     {
        "title": "FOCAL: Forgery-Centric One-Class Artifact Learning for Out-of-Distribution Deepfake Detection",
        "authors": [
            "Muhammad Shahid Muneer",
            "Razaib Tariq",
            "Simon S. Woo"
        ],
        "venue_full": "ACM International Conference on Information and Knowledge Management",
        "venue": "CIKM",
        "track": "Main Paper",
        "presentationType": "Oral Presentation",
        "Factor": [
            "BK Computer Science IF=",
            3
        ],
        "year": 2026,
        "links": {
            "conf": "https://cikm2026.diag.uniroma1.it/"
        },
        "img": "/img/Publications/2026_CIKM_Shahid.png",
        "abstract": "Existing deepfake detection methods learn facial representations that capture the identity, semantics, or geometric structure of real faces. We argue that such face-centric representations can introduce identity and semantic biases, encoding appearance attributes that correlate with a person’s identity rather than with the image’s manipulation, thereby limiting transferability to unseen forgery types. In this work, we propose Forgery-Centric One-Class Artifact Learning (FOCAL), a representation learning framework that models manipulation artifacts directly rather than generic facial semantics. FOCAL is trained exclusively on forged images: an encoder-decoder reconstructs spatial artifact maps from fake inputs, forcing the encoder to learn where and how manipulation has occurred. This reconstruction objective is complemented by spatial and frequency-domain contrastive losses that encourage invariance to input perturbations while preserving discriminative forgery cues. Because the encoder captures a compact forgery-artifact distribution, real faces unseen during training naturally fall outside. We exploit this property by proposing the Dynamic-Centroid Mahalanobis Distance (DCMD), which enables classifier-free, zero-shot detection without target-domain adaptation. Despite being trained only on fake images, FOCAL surpasses state-of-the-art methods on standard cross-dataset benchmarks in both detection AUC and pixel-level forgery. This clearly demonstrates that forgery-centric representations yield more transferable features than approaches anchored to real-face distributions.",
        "abstract_ko": "기존의 딥페이크 탐지 방법은 실제 얼굴의 신원, 의미, 기하학적 구조를 포착하는 얼굴 표현을 학습합니다. 본 연구에서는 이러한 얼굴 중심 표현이 신원 및 의미적 편향을 유발할 수 있으며, 이미지의 조작 여부보다 개인의 신원과 상관된 외형 속성을 인코딩함으로써 미지의 위조 유형에 대한 전이성을 제한한다고 주장합니다. 이에 일반적인 얼굴 의미가 아닌 조작 아티팩트를 직접 모델링하는 표현 학습 프레임워크인 Forgery-Centric One-Class Artifact Learning(FOCAL)을 제안합니다. FOCAL은 위조 이미지만으로 학습되며, encoder-decoder가 위조 입력으로부터 공간적 아티팩트 맵을 재구성하도록 하여 인코더가 조작이 발생한 위치와 방식을 학습하도록 유도합니다. 이 재구성 목표는 공간·주파수 영역 contrastive loss로 보완되어, 입력 섭동에 대한 불변성을 높이면서도 변별력 있는 위조 단서는 보존합니다. 인코더가 압축된 위조 아티팩트 분포를 학습하므로, 학습 중 보지 못한 실제 얼굴은 자연스럽게 그 분포 밖에 놓입니다. 본 연구는 이 성질을 활용하여, 대상 도메인 적응 없이 classifier-free zero-shot 탐지를 가능하게 하는 Dynamic-Centroid Mahalanobis Distance(DCMD)를 제안합니다. 위조 이미지만으로 학습하였음에도 FOCAL은 표준 교차 데이터셋 벤치마크에서 탐지 AUC와 픽셀 수준 위조 탐지 모두에서 최신 기법을 능가하며, 위조 중심 표현이 실제 얼굴 분포에 고정된 접근보다 더 전이 가능한 특징을 제공함을 명확히 보입니다."
    },
    {
        "title": "Closing Generalization Gaps in Continual Face Forgery Detection",
        "authors": [
            "Bohyun Moon",
            "Minh Binh Le",
            "Simon S. Woo"
        ],
        "venue_full": "ACM International Conference on Information and Knowledge Management",
        "venue": "CIKM",
        "track": "Main Paper",
        "presentationType": "Oral Presentation",
        "Factor": [
            "BK Computer Science IF=",
            3
        ],
        "year": 2026,
        "links": {
            "conf": "https://cikm2026.diag.uniroma1.it/"
        },
        "img": "/img/Publications/2026_CIKM_Bohyun.png",
        "abstract": "Deepfake manipulations evolve rapidly across digital media platforms, requiring continual updates to detectors as face forgery distributions shift. Unlike general class-incremental learning, continual face forgery detection is a domain-incremental binary task in which new manipulations of the same fake class are introduced. We demonstrate that existing continual deepfake detectors remain tied to distribution-specific cues, preserving performance on seen datasets while struggling to generalize to unseen manipulation domains. We further find that SVD-based parameter-efficient tuning provides a more transferable representation basis but still requires additional regularization to prevent forgetting during sequential updates. Building on these observations, we propose TASER, an exemplar-free continual face forgery detection framework that couples generalized low-rank adaptation with transport-guided representation regularization. Asymmetric Class-Wise Partial Optimal Transport (AC-POT) aligns real and fake manifolds separately for class-aware adaptation, while OT-guided Contrastive Separation (OTCon) strengthens the real/fake boundary using transport-selected positives and opposite-class negatives. TASER achieves state-of-the-art intra-dataset retention and cross-dataset generalization, achieving a final average AUC of 0.9787 with 0.0123 forgetting and an overall cross-dataset AUC of 0.8626 across challenging continual face forgery benchmarks.",
        "abstract_ko": "딥페이크 조작은 디지털 미디어 플랫폼에서 빠르게 진화하므로, 얼굴 위조 분포가 변화함에 따라 탐지기를 지속적으로 갱신해야 합니다. 일반적인 class-incremental learning과 달리, 연속 얼굴 위조 탐지는 동일한 fake 클래스에 새로운 조작이 추가되는 domain-incremental 이진 과제입니다. 본 연구는 기존 연속 딥페이크 탐지기가 분포 특이적 단서에 묶여 있어, 이미 본 데이터셋에서는 성능을 유지하지만 미지의 조작 도메인으로의 일반화에는 어려움을 겪음을 보입니다. 또한 SVD 기반 파라미터 효율적 튜닝이 더 전이 가능한 표현 기반을 제공하지만, 순차 갱신 중 망각을 막기 위해서는 추가 정규화가 필요함을 확인합니다. 이러한 관찰을 바탕으로, generalized low-rank adaptation과 transport-guided representation regularization을 결합한 exemplar-free 연속 얼굴 위조 탐지 프레임워크 TASER를 제안합니다. Asymmetric Class-Wise Partial Optimal Transport(AC-POT)는 실제/위조 매니폴드를 분리 정렬하여 클래스 인식 적응을 수행하고, OT-guided Contrastive Separation(OTCon)은 transport로 선택된 positive와 반대 클래스 negative를 이용해 실제/위조 경계를 강화합니다. TASER는 도전적인 연속 얼굴 위조 벤치마크에서 데이터셋 내 유지 성능과 교차 데이터셋 일반화 모두에서 최신 성능을 달성하였으며, 최종 평균 AUC 0.9787, forgetting 0.0123, 전체 교차 데이터셋 AUC 0.8626을 기록하였습니다."
    },
    {
        "title": "NullGuard: Null-Space Embedding for Driftless Invisible Image Watermarking",
        "authors": [
            "Inzamamul Alam",
            "Md Tanvir Islam",
            "Juhun Lee",
            "Sangtae Ahn",
            "Simon S. Woo"
        ],
        "venue_full": "British Machine Vision Conference",
        "venue": "BMVC",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2026,
        "links": {
            "conf": "https://bmvc2026.bmva.org/"
        },
        "img": "/img/Publications/2026_BMVC_Inzi.jpg",
        "abstract": "Abstract: Recent progress in text-to-image diffusion highlights the need for invisible, tamper-resilient watermarking that maintains both visual fidelity and prompt alignment. Existing approaches often compromise on robustness, imperceptibility, or scalability, with many introducing semantic drift that weakens provenance guarantees. To address this, we introduce NullGuard, a training-free, plug-and-play watermarking framework that embeds cryptographically keyed signals in the null-space of pretrained diffusion Jacobians, using user-specific rotations to define imperceptible directions. A lightweight Gauss–Newton pivot refinement, constrained by a perceptual mask, perturbs only watermark-relevant components while preserving global semantics, and a calibrated keyed forward likelihood-gap test detects watermarks, achieving up to 99% detection accuracy under attacks such as blurring and JPEG compression, with PSNR $\ge$ 45 dB. Extensive evaluations on MS-COCO and DiffusionDB demonstrate that NullGuard surpasses state-of-the-art (SOTA) methods in robustness, invisibility, and semantic alignment, offering a scalable foundation for provenance-aware diffusion governance.",
        "abstract_ko": "텍스트-이미지 diffusion의 최근 발전은 시각적 충실도와 프롬프트 정합을 유지하면서도 비가시적이고 변조에 강인한 워터마킹의 필요성을 부각시킵니다. 기존 접근은 강인성, 비가시성, 확장성 중 일부를 희생하는 경우가 많으며, 다수가 semantic drift를 유발하여 출처 보장(provenance)을 약화시킵니다. 이에 본 연구에서는 사전학습된 diffusion Jacobian의 null-space에 암호학적 키 기반 신호를 임베딩하고, 사용자별 회전으로 비가시한 방향을 정의하는 학습 없는 plug-and-play 워터마킹 프레임워크 NullGuard를 제안합니다. perceptual mask로 제약된 경량 Gauss–Newton pivot refinement는 워터마크 관련 성분만을 섭동하여 전역 의미를 보존하며, 보정된 keyed forward likelihood-gap 검정으로 워터마크를 탐지하여 블러링·JPEG 압축 등의 공격 하에서도 최대 99% 탐지 정확도와 PSNR ≥ 45 dB를 달성합니다. MS-COCO와 DiffusionDB에서의 광범위한 평가 결과, NullGuard는 강인성·비가시성·의미 정합에서 최신(SOTA) 기법을 상회하며, provenance를 고려한 diffusion 거버넌스의 확장 가능한 기반을 제공합니다."
    },
    {
        "title": "Traffic-IMC: An Urban Road-Network Traffic Forecasting Benchmark",
        "authors": [
            "Seungbin Yim",
            "Hyungchai Park",
            "Simon S. Woo"
        ],
        "venue_full": "ACM SIGSPATIAL International Conference on Advances in Geographic Information Systems",
        "venue": "SIGSPATIAL",
        "track": "Research Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2026,
        "links": {
            "conf": "https://sigspatial2026.sigspatial.org/"
        },
        "img": "/img/Publications/ACM SIGSPATIAL_2026_Seungbin.png",
        "abstract": "Accurate traffic forecasting is essential for intelligent transportation systems, yet common benchmarks often focus on highway settings, rely on heavily preprocessed tensors, and offer limited support for studying operational data failures in complex urban road networks. We present Traffic-IMC, an imputation-aware urban traffic-volume forecasting benchmark built from more than three years of hourly measurements from 2,013 quality-controlled road-link sensors in Incheon, South Korea. Traffic-IMC combines traffic records with road-segment metadata and a directed, reachability-aware graph derived from the Korean Standard Node–Link system, enabling evaluation under road directionality, feasible vehicle movements, turn restrictions, and heterogeneous road attributes. Unlike single cleaned releases, Traffic-IMC preserves operational missingness and quality-control invalidations through a frozen validity mask while providing standardized imputed releases for complete model inputs. Its protocol excludes originally missing or invalidated targets from metric computation, enabling controlled analysis of imputation–forecasting pipelines. Baseline results show that urban forecasting accuracy is shaped by the interaction among imputation choices, architectural assumptions, prediction horizons, and physical road-network structure. Traffic-IMC provides a reproducible testbed for diagnosing and improving traffic forecasting in interrupted-flow urban environments. The dataset and source code have been made publicly available at https://github.com/ysb06/traffic-imc.",
        "abstract_ko": "정확한 교통 예측은 지능형 교통체계에 필수적이나, 기존 벤치마크는 고속도로 환경에 편중되고 과도하게 전처리된 텐서에 의존하며, 복잡한 도시 도로망에서의 운용 데이터 결손을 연구하기에 제한적입니다. 본 연구에서는 대한민국 인천의 품질관리된 도로 링크 센서 2,013개로부터 3년 이상의 시간별 측정치를 바탕으로 구축한, imputation을 고려한 도시 교통량 예측 벤치마크 Traffic-IMC를 제시합니다. Traffic-IMC는 교통 기록과 도로 구간 메타데이터, 그리고 한국 표준 노드·링크 체계에서 유도한 방향성·도달가능성 인식 그래프를 결합하여, 도로 방향성, 가능 차량 이동, 회전 제한, 이질적 도로 속성 하에서의 평가를 가능하게 합니다. 단일 정제 배포본과 달리, Traffic-IMC는 고정된 validity mask를 통해 운용상 결측과 품질관리 무효화를 보존하는 동시에, 완전한 모델 입력을 위한 표준화된 imputed release를 제공합니다. 평가 프로토콜은 원래 결측이거나 무효화된 목표값을 지표 계산에서 제외하여, imputation–예측 파이프라인의 통제된 분석을 가능하게 합니다. 베이스라인 결과는 도시 예측 정확도가 imputation 선택, 아키텍처 가정, 예측 horizon, 물리적 도로망 구조의 상호작용에 의해 형성됨을 보입니다. Traffic-IMC는 단속류 도시 환경에서의 교통 예측을 진단·개선하기 위한 재현 가능한 시험대를 제공합니다. 데이터셋과 소스 코드는 https://github.com/ysb06/traffic-imc 에서 공개되어 있습니다."
    },
    {
        "title": "Beyond Attack Success: Trustworthiness Failure Signatures under Adversarial Prompting",
        "authors": [
            "Mirae Kim",
            "Sangyup Lee",
            "Simon S. Woo"
        ],
        "venue_full": "KDD Workshop on Secure and Trustworthy Large Language Models",
        "venue": "SeT-LLM",
        "track": "Workshop Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2026,
        "links": {
            "conf": null
        },
        "img": "/img/Publications/2026_SeT-LLM_sangyupLee.png",
        "abstract": "Adversarial attacks against large language models (LLMs) are commonly evaluated through aggregate attack-success metrics, implicitly treating attacks with similar success rates as producing comparable damage. We challenge this assumption by analysing adversarial effects across multiple trustworthiness dimensions—accuracy, safety, confidence, and robustness—and show that attacks induce heterogeneous failure signatures rather than uniform damage. Across five attacks, five benchmarks,and five models, we observe distinct degradation patterns that are not captured by aggregate success metrics. For example, GCG produces negligible accuracy degradation (Δ𝑄 = −0.08) while increasing the unsafe response rate to 90% in a less safety-tuned model, whereas jailbreak rewriting induces both performance degradation and the largest increase in confidently incorrect responses. To investigate the mechanisms behind these outcomes, we further separate observed degradation into multiple failure modes, including protocol-sensitive derailment, safety bypass without proportional capability degradation, and confidence collapse. Our results show that similar apparent attack success can arise from fundamentally different underlying mechanisms. These findings suggest that attack success alone is insufficient for interpreting adversarial outcomes and motivate evaluating attacks through their trustworthiness signatures to support attack-aware evaluation.",
        "abstract_ko": "대규모 언어 모델(LLM)에 대한 적대적 공격은 흔히 집계형 공격 성공 지표로 평가되며, 유사한 성공률의 공격이 비슷한 피해를 초래한다고 암묵적으로 가정합니다. 본 연구는 정확도, 안전성, 확신도, 강인성 등 여러 trustworthiness 차원에서 적대적 효과를 분석하여, 공격이 균일한 피해가 아니라 이질적인 실패 서명(failure signature)을 유발함을 보임으로써 이 가정에 도전합니다. 5개 공격, 5개 벤치마크, 5개 모델에 걸쳐, 집계 성공 지표로는 포착되지 않는 서로 다른 성능 저하 패턴을 관찰하였습니다. 예를 들어 GCG는 정확도 저하가 미미한 반면(Δ𝑄 = −0.08) 안전성 튜닝이 약한 모델에서 비안전 응답률을 90%까지 높였고, jailbreak rewriting은 성능 저하와 함께 확신을 갖고 틀린 응답의 증가를 가장 크게 유발하였습니다. 이러한 결과의 메커니즘을 규명하기 위해, 관측된 저하를 프로토콜 민감형 derailment, 능력 저하에 비례하지 않는 안전성 우회, confidence collapse 등 여러 실패 모드로 분리하였습니다. 유사한 외견상 공격 성공도 근본적으로 다른 메커니즘에서 비롯될 수 있음을 보이며, 공격 성공만으로는 적대적 결과를 해석하기에 불충분하고, trustworthiness signature를 통한 공격 인식형 평가가 필요함을 시사합니다."
    },
    {
        "title": "Anchor-Regularized Adaptation for Generalizable AI-Generated Image Detection with DINOv3",
        "authors": [
            "Hyeongjun Choi",
            "Juhun Lee",
            "Davide Cozzolino",
            "Luisa Verdoliva",
            "Simon S. Woo"
        ],
        "venue_full": "ACM International Conference on Multimedia",
        "venue": "MM",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science=",
            4
        ],
        "year": 2026,
        "links": {
            "conf": "https://2026.acmmm.org/"
        },
        "img": "/img/Publications/2026_ACMMM_hyungjune.png",
        "abstract": "Recent works in AI-generated image detection have shown that careful training data alignment can improve generalization by removing spurious correlations. However, linear probes on frozen DINOv3 representations achieve remarkably strong performance even when trained on misaligned datasets. Motivated by this result, we analyze the underlying rationale and the limits of this generalization. We find that frozen DINOv3 performs well because its decisions rely on features that faithfully represent the space of authentic images. At the same time, its final layer is less effective at capturing the subtle pixel-artifact cues that can be emphasized by aligned training data. We further observe that naively mixing aligned and misaligned data during adaptation improves sensitivity to such cues but at the cost of distorting the pre-trained representation, limiting generalization. To address this issue, we propose Anchor-Regularized Adaptation (ARA). We apply Low-Rank Adaptation to capture pixel-level artifacts while leveraging a frozen anchor classifier to avoid deviations from the original representation structure. This allows the model to exploit pixel-artifact cues without sacrificing generalization. Our method achieves state-of-the-art performance on nine diverse and challenging benchmarks, indicating that ARA enables complementary supervision from misaligned and aligned data for more effective detection.",
        "abstract_ko": "최근 AI 생성 이미지 탐지 연구는 신중한 학습 데이터 정합이 가짜 상관을 제거하여 일반화를 개선할 수 있음을 보여주었습니다. 그러나 동결된 DINOv3 표현 위의 linear probe는 비정합 데이터셋으로 학습해도 현저히 강한 성능을 보입니다. 본 연구는 이 결과에 착안하여 해당 일반화의 근거와 한계를 분석합니다. 동결 DINOv3가 잘 동작하는 이유는 결정이 실제 이미지 공간을 충실히 나타내는 특징에 의존하기 때문임을 확인하였습니다. 동시에 최종 계층은 정합 학습 데이터가 강조할 수 있는 미세한 픽셀 아티팩트 단서를 포착하는 데 덜 효과적입니다. 또한 적응 과정에서 정합·비정합 데이터를 단순 혼합하면 이러한 단서에 대한 민감도는 높아지지만 사전학습 표현이 왜곡되어 일반화가 제한됨을 관찰하였습니다. 이 문제를 해결하기 위해 Anchor-Regularized Adaptation(ARA)을 제안합니다. Low-Rank Adaptation으로 픽셀 수준 아티팩트를 포착하는 한편, 동결된 anchor classifier를 활용하여 원래 표현 구조로부터의 이탈을 억제합니다. 이를 통해 일반화를 희생하지 않으면서 픽셀 아티팩트 단서를 활용할 수 있습니다. 제안 방법은 9개의 다양하고 도전적인 벤치마크에서 최신 성능을 달성하였으며, ARA가 비정합·정합 데이터로부터의 상호보완적 감독을 가능하게 하여 더 효과적인 탐지를 지원함을 보입니다."
    },
    {
        "title": "SAVAL: Signal-Driven Adaptive Validation for Post-Silicon Testing via Sequential Decision-Making and Causal-Guided Counterfactual Exploration in NAND Flash Memory",
        "authors": [
            "Sanghyeok Park",
            "Soyoon Park",
            "Simon S. Woo"
        ],
        "venue_full": "IEEE/ACM International Conference on Computer-Aided Design",
        "venue": "ICCAD",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science=",
            3
        ],
        "year": 2026,
        "links": {
            "conf": "https://iccad.com/2026"
        },
        "img": "/img/Publications/2026_ICCAD_SangHeuk.jpg",
        "abstract": "Post-silicon validation of timing-related defects in advanced 3D NAND flash has become a critical bottleneck due to exhaustive scan evaluation over increasingly complex operation spaces, where defects occur within narrow temporal windows and create a mismatch between sparse failure regions and uniform scan strategies. In this work, we propose SAVAL (Signal-driven Adaptive VALidation), a framework that leverages internal signals (ICC, IVC, ISM) to identify vulnerable intervals and selectively allocate scan effort. SAVAL formulates validation as a sequential decision-making process by integrating hybrid predictive modeling with adaptive exploration, combining deep learning–based temporal feature extraction with tree-based classification and a feedback-driven strategy that balances exploitation of known patterns and discovery of unseen defects. To address the challenge of limited failure observations, we introduce a counterfactual-style exploration mechanism inspired by causal reasoning, which infers failure-prone conditions from pass-dominated signals and guides exploration toward vulnerable regions beyond observed data. Experimental results on industrial 3D NAND datasets demonstrate a 17.8× speedup (94.4% reduction in validation turnaround time) while maintaining 97.5% defect detection accuracy, with 77% alignment to historical defects, highlighting the effectiveness of signal-driven adaptive validation for scalable semiconductor testing. While evaluated on NAND flash memory, the proposed framework is applicable to broader post-silicon validation scenarios across semiconductor systems.",
        "abstract_ko": "첨단 3D NAND 플래시에서 타이밍 관련 결함의 post-silicon validation은, 결함이 좁은 시간 창에서 발생하고 희소한 실패 영역과 균일 스캔 전략 간의 불일치가 생기는 등, 점점 복잡해지는 연산 공간에 대한 전수 스캔 평가로 인해 중대한 병목이 되고 있습니다. 본 연구에서는 내부 신호(ICC, IVC, ISM)를 활용하여 취약 구간을 식별하고 스캔 노력을 선택적으로 배분하는 프레임워크 SAVAL(Signal-driven Adaptive VALidation)을 제안합니다. SAVAL은 하이브리드 예측 모델링과 적응적 탐색을 통합하여 validation을 순차 의사결정 과정으로 정식화하며, 딥러닝 기반 시간 특징 추출과 트리 기반 분류, 알려진 패턴의 활용과 미지 결함 발견을 균형 잡는 피드백 전략을 결합합니다. 제한된 실패 관측 문제를 다루기 위해, 인과 추론에서 영감을 받은 counterfactual 스타일 탐색 메커니즘을 도입하여, pass 위주의 신호로부터 실패 가능 조건을 추론하고 관측 데이터를 넘어 취약 영역으로의 탐색을 유도합니다. 산업용 3D NAND 데이터셋에서의 실험 결과, 결함 탐지 정확도 97.5%를 유지하면서 17.8× 속도 향상(validation 소요 시간 94.4% 감소)을 달성하였고, 역사적 결함과의 정합도는 77%로, 신호 기반 적응 validation의 반도체 테스트 확장성을 보여줍니다. NAND 플래시에서 평가되었으나, 제안 프레임워크는 반도체 시스템 전반의 더 넓은 post-silicon validation 시나리오에도 적용 가능합니다."
    },
    {
        "title": "Toward trustworthy digital healthcare: A system-level convergence of IoMT, large language models, and explainable AI",
        "authors": [
            "Maria Bashir",
            "Mohammed Abuhamad",
            "Simon S. Woo",
            "Dong In Kim",
            "Tamer Abuhmed"
        ],
        "venue_full": "Information Fusion",
        "venue": null,
        "track": "SCIE Journal",
        "presentationType": null,
        "Factor": [
            "SCIE IF =",
            15.5
        ],
        "year": 2026,
        "links": {
            "conf": "https://www.sciencedirect.com/science/article/pii/S1566253526003866"
        },
        "img": "/img/Publications/2026_InformationFusion_Simon.jpg",
        "abstract": "The Internet of Medical Things (IoMT) enables continuous monitoring, remote diagnosis, and personalized treatment through interconnected medical devices operating across edge, cloud, and local environments. As a communication-centric infrastructure, IoMT depends on interoperability, low-latency networking, and coordinated intelligence to support reliable healthcare services. Realizing its full potential requires computational models that are interpretable, robust, and trustworthy. Large Language Models (LLMs) offer strong capabilities in natural language generation and contextual reasoning for clinical documentation, patient interaction, and decision support, yet their black-box behavior raises concerns regarding transparency and clinical trust. Explainable Artificial Intelligence (XAI) addresses these challenges by providing mechanisms for interpretability and accountability. Although IoMT, LLMs, and XAI have each advanced significantly, prior studies have largely examined them as separate research directions or through limited partial integrations. This work presents a unified system-level analytical study of their convergence in healthcare, positioning IoMT as the foundational infrastructure, LLMs as the contextual reasoning layer, and XAI as the trust-enabling layer for transparency and accountability. Furthermore, the paper systematically examines this convergence through rigorous analysis of architectural foundations and diverse healthcare application domains, and presents clinically grounded case studies to offer a unified, comprehensive, and forward-looking perspective on trustworthy digital healthcare systems.",
        "abstract_ko": "Internet of Medical Things(IoMT)는 엣지·클라우드·로컬 환경에서 동작하는 상호연결된 의료 기기를 통해 연속 모니터링, 원격 진단, 개인화 치료를 가능하게 합니다. 통신 중심 인프라로서 IoMT는 신뢰할 수 있는 헬스케어 서비스를 위해 상호운용성, 저지연 네트워킹, 조율된 지능에 의존합니다. 그 잠재력을 온전히 실현하려면 해석 가능하고 강인하며 신뢰할 수 있는 계산 모델이 필요합니다. 대규모 언어 모델(LLM)은 임상 문서화, 환자 상호작용, 의사결정 지원을 위한 자연어 생성과 맥락적 추론에서 강력한 능력을 보이지만, 블랙박스 특성은 투명성과 임상적 신뢰에 대한 우려를 낳습니다. Explainable Artificial Intelligence(XAI)는 해석 가능성과 책무성을 위한 메커니즘을 제공함으로써 이러한 과제를 다룹니다. IoMT, LLM, XAI 각각은 크게 발전해 왔으나, 기존 연구는 대체로 이들을 별도 연구 방향 또는 제한적 부분 통합으로만 다루어 왔습니다. 본 연구는 헬스케어에서의 이들의 수렴에 대한 통합적 시스템 수준 분석을 제시하며, IoMT를 기반 인프라, LLM을 맥락 추론 계층, XAI를 투명성과 책무성을 위한 신뢰 확보 계층으로 위치시킵니다. 나아가 아키텍처 기초와 다양한 헬스케어 응용 영역에 대한 체계적 분석, 임상적으로 근거 있는 사례 연구를 통해 신뢰할 수 있는 디지털 헬스케어 시스템에 대한 통합적·포괄적·전망적 시각을 제공합니다."
    },
    {
        "title": "VisionDES: Robust and Explainable Dynamic Vision Ensemble",
        "authors": [
            "Firuz Juraev",
            "Mohammed Abuhamad",
            "Shaker El-Sappagh",
            "Simon S. Woo",
            "Tamer Abuhmed"
        ],
        "venue_full": "ACM SIGKDD Conference on Knowledge Discovery and Data Mining",
        "venue": "KDD",
        "track": "Research Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            4
        ],
        "year": 2026,
        "links": {
            "conf": "https://kdd2026.kdd.org/"
        },
        "img": "/img/Publications/2026_KDD_prof.png",
        "abstract": "Dynamic Ensemble Selection (DES) is an adaptive ensemble learning paradigm that selects a subset of base classifiers specific to each test input, enabling more flexible predictions than static ensemble methods. Although successful in tabular settings, DES remains largely unexplored in robust vision applications. We introduce VisionDES, a novel DES framework for image classification that uses deep model embeddings to estimate classifier competence. VisionDES leverages pre-trained vision transformer models to embed inputs and employs approximate nearest neighbor search to define a local region of competence for each sample. It then dynamically selects and fuses the most reliable models, using a similarity-weighted combination that down-weights less reliable or adversarially-compromised classifiers. Our VisionDES is extensively evaluated on various benchmarks and under clean conditions, distribution shifts, and strong adversarial attacks. It consistently outperforms static ensembles and existing uncertainty-based DES methods, improving robust accuracy by up to 20% under strong attacks and 2-3% higher accuracy under distribution shifts, with modest inference overhead. VisionDES offers instance-level interpretability by revealing models' contributions to the final decision.",
        "abstract_ko": "Dynamic Ensemble Selection(DES)은 각 테스트 입력에 특화된 베이스 분류기 부분 집합을 선택하는 적응형 앙상블 학습 패러다임으로, 정적 앙상블보다 유연한 예측을 가능하게 합니다. 표 형식 데이터에서는 성공적이었으나, 강인한 비전 응용에서의 DES는 거의 탐구되지 않았습니다. 본 연구에서는 딥 모델 임베딩으로 분류기 역량을 추정하는 이미지 분류용 DES 프레임워크 VisionDES를 제안합니다. VisionDES는 사전학습된 vision transformer로 입력을 임베딩하고, 근사 최근접 이웃 탐색으로 각 샘플의 국소 competence 영역을 정의한 뒤, 유사도 가중 결합으로 가장 신뢰할 수 있는 모델을 동적으로 선택·융합하며 덜 신뢰할 수 있거나 적대적으로 훼손된 분류기의 가중치를 낮춥니다. 다양한 벤치마크와 clean 조건, 분포 이동, 강한 적대적 공격 하에서 광범위하게 평가한 결과, VisionDES는 정적 앙상블 및 기존 불확실성 기반 DES 방법을 일관되게 상회하며, 강한 공격 하에서 robust accuracy를 최대 20%, 분포 이동 하에서 정확도를 2–3% 향상시키고 추론 오버헤드는 완만합니다. 또한 VisionDES는 최종 결정에 대한 모델별 기여를 드러내어 인스턴스 수준 해석 가능성을 제공합니다."
    },
    {
        "title": "MOSAIV: Multi-Agent LLM Swarms for Automated Multimedia News Verification",
        "authors": [
            "Muhammad Shahid Muneer",
            "Khoa Van Tran",
            "Van Tuan Nguyen",
            "Simon S. woo"
        ],
        "venue_full": "The 2026 Grand Challenge on Multimedia Verification",
        "venue": "ICMR",
        "track": "Demo & Challenge",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            0
        ],
        "year": 2026,
        "links": {
            "conf": "https://sites.google.com/view/mv2026/task-description"
        },
        "img": "/img/Publications/2026_ICMR_Shahid.png",
        "abstract": "Verifying social media content from active conflict zones requires rapid geolocation, source attribution, forensic analysis, and multi-platform verification—tasks that overwhelm individual analysts at scale. We present Multi-agent OSINT Swarm for Automated Information Verification (MOSAIV), a three-stage agentic swarm built on Large Language Models (LLMs) for automated verification of multimedia news. MOSAIV operates in three sequential phases: (1) a Prime Agent use 50 labeled training samples via few-shot in-context learning to produce a shared context document and a reusable 7-step verification skill specification; (2) multiple parallel Verification Agents each process social media posts using the primed skill, performing live web searches, OSINT analysis, and structured report generation; and (3) a dedicated Localization Agent independently verifies GPS coordinates and produces bounding-box-annotated evidence images, dual-panel OpenStreetMap location cards, and live source evidence thumbnails, multiple evidence artifacts per run in total. We evaluated 10 conflict-zone validation cases provided by the MV2026 challenge.",
        "abstract_ko": "분쟁 지역 소셜 미디어 콘텐츠 검증에는 신속한 지오로케이션, 출처 귀속, 포렌식 분석, 다중 플랫폼 검증이 요구되며, 이는 개별 분석가의 규모 확장을 압도합니다. 본 연구에서는 멀티미디어 뉴스의 자동 검증을 위해 대규모 언어 모델(LLM) 기반 3단계 agentic swarm인 Multi-agent OSINT Swarm for Automated Information Verification(MOSAIV)을 제시합니다. MOSAIV는 다음의 순차 단계로 동작합니다. (1) Prime Agent가 50개의 라벨링된 학습 샘플을 few-shot in-context learning으로 활용하여 공유 컨텍스트 문서와 재사용 가능한 7단계 검증 스킬 명세를 생성하고, (2) 다수의 병렬 Verification Agent가 프라이밍된 스킬을 사용해 소셜 미디어 게시물을 처리하며 실시간 웹 검색, OSINT 분석, 구조화 보고서 생성을 수행하며, (3) 전담 Localization Agent가 GPS 좌표를 독립적으로 검증하고 bounding-box 주석이 달린 증거 이미지, 이중 패널 OpenStreetMap 위치 카드, 실시간 출처 증거 썸네일 등 실행당 다수의 증거 산출물을 생성합니다. MV2026 챌린지에서 제공한 10건의 분쟁 지역 검증 사례로 평가하였습니다."
    },
    {
        "title": "HIDE: Detecting Diffusion-Based Inpainting via Latent h-Space Representation",
        "authors": [
            "Seunghwan ji",
            "Geonho Son",
            "Simon S. Woo"
        ],
        "venue_full": "IEEE/CVF CVPR Workshop on Synthetic & Adversarial ForEnsics",
        "venue": "SAFE",
        "track": "Workshop Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2026,
        "links": {
            "conf": "https://www.safeworkshop.org/cvpr-2026/#home"
        },
        "img": "/img/Publications/2026_SAFE_Geunho.png",
        "abstract": "The emergence of text-guided diffusion models has enabled highly realistic image inpainting, posing new challenges for image forensics. In particular, diffusion-based inpainting generates semantically coherent and visually seamless content, making forgery localization increasingly difficult. While various detection models have been proposed, they rely on low-level statistical traces that are absent in diffusion-generated content, leaving them ill-equipped for such manipulations. In this work, we propose HIDE (H-space-guided Inpainting DEtection), a Conditional U-Net architecture that leverages multi-domain features including frequency-domain representations, and incorporates high-level semantic priors to detect diffusion-based forgeries. Specifically, we extract h-space features from the intermediate layers of a Latent Diffusion Model, capturing global object layout and scene semantics, and integrate them into a segmentation network via cross-attention. Through extensive experiments on a Stable Diffusion v1.5 inpainting dataset, our findings highlight the importance of jointly exploiting semantic and statistical cues for detecting modern generative inpainting forgeries.",
        "abstract_ko": "텍스트 유도 diffusion 모델의 등장으로 매우 사실적인 이미지 inpainting이 가능해지면서 이미지 포렌식에 새로운 과제가 생겼습니다. 특히 diffusion 기반 inpainting은 의미적으로 일관되고 시각적으로 매끄러운 콘텐츠를 생성하여 위조 국소화가 더욱 어려워집니다. 다양한 탐지 모델이 제안되었으나, 이들은 diffusion 생성 콘텐츠에는 존재하지 않는 저수준 통계적 흔적에 의존하여 이러한 조작에 취약합니다. 본 연구에서는 주파수 영역 표현을 포함한 다중 도메인 특징을 활용하고 고수준 의미 prior를 통합하여 diffusion 기반 위조를 탐지하는 Conditional U-Net 아키텍처 HIDE(H-space-guided Inpainting DEtection)를 제안합니다. 구체적으로 Latent Diffusion Model의 중간 계층에서 전역 객체 배치와 장면 의미를 포착하는 h-space 특징을 추출하고, cross-attention을 통해 분할 네트워크에 통합합니다. Stable Diffusion v1.5 inpainting 데이터셋에서의 광범위한 실험을 통해, 현대 generative inpainting 위조 탐지에는 의미적 단서와 통계적 단서를 공동으로 활용하는 것이 중요함을 보입니다."
    },
    {
        "title": "Analyzing Commercial Deepfake Detectors on Real-World Cases",
        "authors": [
            "Bohyun Moon",
            "Jiwon Kim",
            "Muhammad Shahid Muneer",
            "Simon S. Woo"
        ],
        "venue_full": "ACM ASIACCS Workshop on Security Implications of Deepfakes and Cheapfakes",
        "venue": "WDC",
        "track": "Short Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2026,
        "links": {
            "conf": "https://sites.google.com/view/wdc-2026"
        },
        "img": "/img/Publications/2026_WDC_Bohyun.png",
        "abstract": "The accessibility of generative AI has led to a rapid rise in AI-generated content (AIGC), accompanied by widespread misuse and misinformation. As a result, both researchers and industry have proposed deepfake detection methods, ranging from reproducible academic models to commercial detection services. Commercial deepfake detection tools widely used by many users claim high performance and robustness, while academic tools report strong performance on controlled benchmarks. However, the reliability of both approaches under diverse real-world generation methods remains underexplored. In this work, we perform deepfake detection using both commercial and academic detectors. Our evaluation shows that commercial software tends to achieve stronger out-of-domain generalization than academic baselines. Furthermore, we conduct a case-driven analysis of commercial deepfake detectors with a curated real-world dataset that reflects recent incidents and generation trends. We found that aggregation strategies, mosaic artifacts, and reliance on face detection influence detection decisions, as well as a qualitative analysis of explanation mechanisms. This study identifies structural limitations in current commercial deepfake detection services and proposes potential design directions to enhance robustness in real-world deployment.",
        "abstract_ko": "생성형 AI의 접근성 향상으로 AI 생성 콘텐츠(AIGC)가 급증하였고, 오남용과 허위정보 확산이 동반되고 있습니다. 이에 학계와 산업계 모두 재현 가능한 학술 모델부터 상용 탐지 서비스에 이르는 딥페이크 탐지 방법을 제안해 왔습니다. 많은 사용자가 이용하는 상용 딥페이크 탐지 도구는 높은 성능과 강인성을 주장하며, 학술 도구는 통제된 벤치마크에서 강한 성능을 보고합니다. 그러나 다양한 실세계 생성 방법 하에서의 두 접근의 신뢰성은 충분히 탐구되지 않았습니다. 본 연구에서는 상용·학술 탐지기를 모두 사용해 딥페이크 탐지를 수행합니다. 평가 결과 상용 소프트웨어가 학술 베이스라인보다 더 강한 out-of-domain 일반화를 보이는 경향이 있었습니다. 나아가 최근 사건과 생성 추세를 반영한 큐레이션된 실세계 데이터셋으로 상용 딥페이크 탐지기에 대한 사례 중심 분석을 수행하였습니다. 집계 전략, 모자이크 아티팩트, 얼굴 탐지 의존성이 탐지 결정에 영향을 미치며, 설명 메커니즘에 대한 정성 분석도 함께 제시합니다. 본 연구는 현행 상용 딥페이크 탐지 서비스의 구조적 한계를 식별하고 실세계 배포에서의 강인성 향상을 위한 설계 방향을 제안합니다."
    },
    {
        "title": "Efficient Unlearning through Maximizing Relearning Convergence Delay",
        "authors": [
            "Khoa Tran",
            "Simon S. Woo"
        ],
        "venue_full": "IEEE/CVF Conference on Computer Vision and Pattern Recognition",
        "venue": "CVPR",
        "track": "Findings Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2026,
        "links": {
            "conf": "https://cvpr.thecvf.com/Conferences/2026/CallForPapers"
        },
        "img": "/img/Publications/2026_CVPR_KhoaTran.jpg",
        "abstract": "Machine unlearning poses challenges in removing mislabeled, contaminated, or problematic data from a pretrained model. Current unlearning approaches and evaluation metrics are solely focused on model predictions, which limits insight into the model's true underlying data characteristics. To address this issue, we introduce a new metric called relearning convergence delay, which captures both changes in weight space and prediction space, providing a more comprehensive assessment of the model's understanding of the forgotten dataset. This metric can be used to assess the risk of forgotten data being recovered from the unlearned model. Based on this, we propose the Influence Eliminating Unlearning framework, which removes the influence of the forgetting set by degrading its performance and incorporates weight decay and injecting noise into the model's weights, while maintaining accuracy on the retaining set. Extensive experiments show that our method outperforms existing metrics and our proposed relearning convergence delay metric, approaching ideal unlearning performance. We provide theoretical guarantees, including exponential convergence and upper bounds, as well as empirical evidence of strong retention and resistance to relearning in both classification and generative unlearning tasks.",
        "abstract_ko": "기계 언러닝은 사전학습 모델에서 오라벨·오염·문제 데이터를 제거하는 과제를 제기합니다. 기존 언러닝 접근과 평가 지표는 모델 예측에만 초점을 두어, 모델이 실제로 갖는 데이터 특성에 대한 통찰이 제한됩니다. 이 문제를 해결하기 위해, 가중치 공간과 예측 공간의 변화를 모두 포착하여 망각된 데이터셋에 대한 모델의 이해를 더 종합적으로 평가하는 새로운 지표인 relearning convergence delay를 도입합니다. 이 지표는 언러닝된 모델로부터 망각 데이터가 복구될 위험을 평가하는 데 사용할 수 있습니다. 이를 바탕으로, forgetting set의 성능을 저하시켜 영향력을 제거하고 가중치 감쇠와 가중치 노이즈 주입을 결합하면서도 retaining set 정확도는 유지하는 Influence Eliminating Unlearning 프레임워크를 제안합니다. 광범위한 실험에서 제안 방법은 기존 지표와 제안한 relearning convergence delay 지표 모두에서 기존 기법을 상회하며 이상적 언러닝 성능에 근접합니다. 지수 수렴과 상한 등 이론적 보장과 함께, 분류 및 생성 언러닝 과제에서 강한 retention과 relearning 저항성에 대한 실증 근거를 제시합니다."
    },

    {
        "title": "Robust Continual Unlearning against Knowledge Erosion and Forgetting Reversal",
        "authors": [
            "EUN-JU PARK",
            "Youjin Shin",
            "Simon S. Woo"
        ],
        "venue_full": "IEEE/CVF Conference on Computer Vision and Pattern Recognition",
        "venue": "CVPR",
        "track": "Findings Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2026,
        "links": {
            "conf": "https://cvpr.thecvf.com/Conferences/2026/CallForPapers"
        },
        "img": "/img/Publications/2026_CVPR_EUN-JU PARK.png",
        "abstract": "As a means to balance the growth of the AI industry with the need for privacy protection, machine unlearning plays a crucial role in realizing the ``right to be forgotten'' in artificial intelligence. This technique enables AI systems to remove the influence of specific data while preserving the rest of the learned knowledge. Although it has been actively studied, most existing unlearning methods assume that unlearning is performed only once. In this work, we evaluate existing unlearning algorithms in a more realistic scenario where unlearning is conducted repeatedly, and in this setting, we identify two critical phenomena: (1) Knowledge Erosion, where the accuracy on retain data progressively degrades over unlearning phases, and (2) Forgetting Reversal, where previously forgotten samples become recognizable again in later phases. To address these challenges, we propose SAFER (StAbility-preserving Forgetting with Effective Regularization), a continual unlearning framework that maintains representation stability for retain data while enforcing negative logit margins for forget data. Extensive experiments show that SAFER mitigates not only knowledge erosion but also forgetting reversal, achieving stable performance across multiple unlearning phases.",
        "abstract_ko": "AI 산업 성장과 개인정보 보호의 균형을 위한 수단으로서, 기계 언러닝은 인공지능에서 \"잊힐 권리\"를 실현하는 데 핵심적 역할을 합니다. 이 기술은 학습된 나머지 지식을 보존하면서 특정 데이터의 영향을 제거할 수 있게 합니다. 활발히 연구되어 왔음에도 기존 언러닝 방법 대부분은 언러닝이 한 번만 수행된다고 가정합니다. 본 연구에서는 언러닝이 반복적으로 수행되는 더 현실적인 시나리오에서 기존 알고리즘을 평가하고, 이 설정에서 두 가지 핵심 현상을 식별합니다. (1) Knowledge Erosion: 언러닝 단계가 진행될수록 retain 데이터 정확도가 점진적으로 저하되는 현상, (2) Forgetting Reversal: 이전에 망각된 샘플이 이후 단계에서 다시 인식 가능해지는 현상. 이러한 과제를 해결하기 위해, retain 데이터의 표현 안정성을 유지하면서 forget 데이터에 대해 음의 logit margin을 강제하는 연속 언러닝 프레임워크 SAFER(StAbility-preserving Forgetting with Effective Regularization)를 제안합니다. 광범위한 실험에서 SAFER는 knowledge erosion과 forgetting reversal을 모두 완화하며 다수 언러닝 단계에 걸쳐 안정적 성능을 달성합니다."
    },

    {
        "title": "ICR-NET: Robust Deepfake Detection under Temporal Corruption",
        "authors": [
            "Chan Park",
            "Hyeongjun Choi",
            "Shahid Muneer Muhammad",
            "Binh M. Le",
            "Simon S. Woo"
        ],
        "venue_full": "The 30th Pacific-Asia Conference on Knowledge Discovery and Data Mining ",
        "venue": "PAKDD",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2026,
        "links": {
            "conf": "https://www.pakdd2026.org/"
        },
        "img": "/img/Publications/pakdd26_Chan.png",
        "abstract": "Deepfake video detection aims to distinguish AI-generated facial forgeries from authentic videos. Recent methods have achieved strong performance under spatial corruptions, but their temporal robustness remains largely unexplored. In realistic web-streaming scenarios, network disruptions such as packet loss, bit errors, and aggressive compression induce temporal corruptions that current evaluation protocols and benchmarks do not cover. To cover this gap, we introduce DeepFake Temporal Corruption Benchmark (DF-TCB), built on the standard FaceForensics++ and DFDC video datasets with diverse temporal corruption types and severity levels. Our analysis on DF-TCB reveals that existing detectors are highly fragile under temporal corruptions. We further propose ICR-Net, which predicts frame reliability, selectively corrects corrupted features, and leverages clean–corrupted contrastive learning to obtain corruption-invariant, class-separable representations. We achieve state-of-the-art robustness and cross-dataset generalization under temporal corruptions.",
        "abstract_ko": "딥페이크 비디오 탐지는 AI 생성 얼굴 위조와 실제 영상을 구분하는 것을 목표로 합니다. 최근 방법은 공간적 손상 하에서 강한 성능을 달성하였으나, 시간적 강인성은 거의 탐구되지 않았습니다. 현실적인 웹 스트리밍 환경에서는 패킷 손실, 비트 오류, 강한 압축과 같은 네트워크 장애가 시간적 손상을 유발하지만, 현행 평가 프로토콜과 벤치마크는 이를 다루지 않습니다. 이 공백을 메우기 위해, 표준 FaceForensics++ 및 DFDC 비디오 데이터셋에 다양한 유형과 심각도의 시간적 손상을 적용한 DeepFake Temporal Corruption Benchmark(DF-TCB)를 도입합니다. DF-TCB 분석 결과 기존 탐지기는 시간적 손상 하에서 매우 취약함을 확인하였습니다. 나아가 프레임 신뢰도를 예측하고 손상된 특징을 선택적으로 보정하며, clean–corrupted contrastive learning으로 손상에 불변하고 클래스 분리 가능한 표현을 학습하는 ICR-Net을 제안합니다. 시간적 손상 하에서 최신 강인성과 교차 데이터셋 일반화를 달성합니다."
    },
    {
        "title": "A Rich Knowledge Space for Scalable Deepfake Detection",
        "authors": [
            "Inho Jung",
            "Hyeongjun Choi",
            "Binh M. Le",
            "Hohyun Na",
            "Simon S. Woo"
        ],
        "venue_full": "International Conference on Learning Representations",
        "venue": "ICLR",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "",
        ],
        "year": 2026,
        "links": {
            "conf": "https://iclr.cc/Conferences/2026"
        },
        "img": "/img/Publications/ICLR2026_inho.png",
        "abstract": "The proliferation of realistic deepfakes has driven the development of numerous benchmark datasets to support detection research. Despite their increasing volume and diversity, no prior effort has systematically consolidated these resources into a unified framework for large-scale model training, nor has there been a massively pre-trained model tailored to deepfake detection. In this work, we introduce MMI-DD (Multi-modal Multi-type Integrated Deepfake Dataset), a large-scale resource containing 3.6 million facial images, the largest collection to date. It unifies diverse benchmarks with uniform preprocessing, and further provides fine-grained annotations across four deepfake types, as well as VLM-generated descriptions capturing both facial and environmental attributes for each image. By leveraging this comprehensive multi-modal dataset, we construct a foundational deepfake knowledge space that empowers our model to discern a broad spectrum of synthetic media. Our method, SD^2 (Scalable Deepfake Detection), refines CLIP for deepfake detection, optimizing image-text classification with rich, type-specific labels. We enhance this with intermediate visual features capturing low-level cues and text label separation loss for stability. We further leverage VLM-generated descriptions and contrastive learning to expand the scope of forgery knowledge, reducing overfitting and enhancing generalization. Extensive experiments on challenging deepfake datasets and AIGC benchmark demonstrate the effectiveness, scalability, and real-world applicability of our approach.",
        "abstract_ko": "사실적인 딥페이크의 확산은 탐지 연구를 지원하기 위한 다수의 벤치마크 데이터셋 개발을 촉진하였습니다. 그 규모와 다양성이 증가하였음에도, 이들 자원을 대규모 모델 학습을 위한 통합 프레임워크로 체계적으로 정리하거나 딥페이크 탐지에 특화된 대규모 사전학습 모델을 제시한 선행 연구는 없었습니다. 본 연구에서는 현재까지 최대 규모인 360만 얼굴 이미지를 포함하는 대규모 자원 MMI-DD(Multi-modal Multi-type Integrated Deepfake Dataset)를 도입합니다. 이 데이터셋은 다양한 벤치마크를 균일 전처리로 통합하고, 네 가지 딥페이크 유형에 대한 세분 주석과 함께 각 이미지의 얼굴·환경 속성을 담은 VLM 생성 설명을 제공합니다. 이 포괄적 멀티모달 데이터셋을 활용하여 광범위한 합성 미디어를 판별할 수 있는 기초적 딥페이크 지식 공간을 구축합니다. 제안 방법 SD^2(Scalable Deepfake Detection)는 딥페이크 탐지를 위해 CLIP을 정제하며, 풍부한 유형별 라벨로 이미지-텍스트 분류를 최적화합니다. 저수준 단서를 포착하는 중간 시각 특징과 안정성을 위한 text label separation loss로 이를 강화하고, VLM 생성 설명과 contrastive learning으로 위조 지식의 범위를 확장하여 과적합을 줄이고 일반화를 향상합니다. 도전적인 딥페이크 데이터셋과 AIGC 벤치마크에서의 광범위한 실험으로 본 접근의 효과성, 확장성, 실세계 적용 가능성을 입증합니다."
    },
    {
        "title": "Unlearning Comparator: A Visual Analytics System for Comparative Evaluation of Machine Unlearning Methods",
        "authors": [
            "Jaeung Lee",
            "Suhyeon Yu",
            "Yurim Jang",
            "Simon S. Woo",
            "Jaemin Jo"

        ],
        "venue_full": "IEEE Transactions on Visualization and Computer Graphics",
        "venue": "TVCG",
        "track": null,
        "Factor": [
            "SCI IF=",
            6.5
        ],
        "year": 2026,
        "links": {
            "conf": "https://www.computer.org/csdl/journal/tg"
        },
        "img": "/img/Publications/TVCG26_yurim.png",
        "abstract": "Machine Unlearning (MU) aims to remove target training data from a trained model so that the removed data no longer influences the model's behavior, fulfilling \"right to be forgotten\" obligations under data privacy laws. Yet, we observe that researchers in this rapidly emerging field face challenges in analyzing and understanding the behavior of different MU methods, especially in terms of three fundamental principles in MU: accuracy, efficiency, and privacy. Consequently, they often rely on aggregate metrics and ad-hoc evaluations, making it difficult to accurately assess the trade-offs between methods. To fill this gap, we introduce a visual analytics system, Unlearning Comparator, designed to facilitate the systematic evaluation of MU methods. Our system supports two important tasks in the evaluation process: model comparison and attack simulation. First, it allows the user to compare the behaviors of two models, such as a model generated by a certain method and a retrained baseline, at class-, instance-, and layer-levels to better understand the changes made after unlearning. Second, our system simulates membership inference attacks (MIAs) to evaluate the privacy of a method, where an attacker attempts to determine whether specific data samples were part of the original training set. We evaluate our system through a case study visually analyzing prominent MU methods and demonstrate that it helps the user not only understand model behaviors but also gain insights that can inform the improvement of MU methods.",
        "abstract_ko": "Machine Unlearning(MU)은 학습된 모델에서 대상 학습 데이터의 영향을 제거하여 데이터 프라이버시 법상의 \"잊힐 권리\" 의무를 충족하는 것을 목표로 합니다. 그러나 이 급성장 분야의 연구자들이 서로 다른 MU 방법의 행동을—특히 정확성, 효율성, 프라이버시라는 MU의 세 가지 기본 원칙 관점에서—분석·이해하는 데 어려움을 겪음을 관찰하였습니다. 그 결과 집계 지표와 임시적 평가에 의존하는 경우가 많아 방법 간 트레이드오프를 정확히 평가하기 어렵습니다. 이 공백을 메우기 위해 MU 방법의 체계적 평가를 지원하는 시각 분석 시스템 Unlearning Comparator를 도입합니다. 본 시스템은 평가 과정의 두 핵심 과제인 모델 비교와 공격 시뮬레이션을 지원합니다. 첫째, 특정 방법으로 생성된 모델과 재학습 베이스라인 등 두 모델의 행동을 클래스·인스턴스·계층 수준에서 비교하여 언러닝 이후의 변화를 더 잘 이해할 수 있게 합니다. 둘째, membership inference attack(MIA)을 시뮬레이션하여 방법의 프라이버시를 평가하며, 공격자는 특정 샘플이 원래 학습 집합에 포함되었는지를 판별하려 합니다. 주요 MU 방법을 시각적으로 분석하는 사례 연구를 통해 시스템이 모델 행동 이해뿐 아니라 MU 방법 개선에 도움이 되는 통찰을 제공함을 보입니다."
    },
    {
        "title": "Suppression or Deletion: A Restoration-Based Representation-Level Analysis of Machine Unlearning",
        "authors": [
            "Yurim Jang",
            "Jaeung Lee",
            "Dohyun Kim",
            "Jaemin Jo",
            "Simon S. Woo"
        ],
        "venue_full": "ACM Web Conference",
        "venue": "WWW",
        "track": "Short Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            3
        ],
        "year": 2026,
        "links": {
            "conf": "https://www2026.thewebconf.org/"
        },
        "img": "/img/Publications/WWW2026short_yurim.png",
        "abstract": "As pretrained models are increasingly shared on the web, ensuring that models can forget or delete sensitive, copyrighted, or private information upon request has become crucial. Machine unlearning has been proposed to address this issue. However, current evaluations for unlearning methods rely on output-based metrics, which cannot verify whether information is completely deleted or merely suppressed at the representation level, where suppression is insufficient for true unlearning. To address this gap, we propose a novel restoration-based analysis framework that uses Sparse Autoencoders to identify class-specific expert features in intermediate layers and applies inference-time steering to quantitatively distinguish between suppression and deletion. Applying our framework to 12 major unlearning methods in image classification tasks, we find that most methods achieve high restoration rates of unlearned information, indicating that they only suppress information at the decision-boundary level, while preserving semantic features in intermediate representations. Notably, even retraining from pretrained checkpoints shows high restoration, revealing that pretrained feature hierarchies persist. These results demonstrate that representation-level retention poses significant risks overlooked by output-based metrics, highlighting the need for new unlearning evaluation criteria. We propose new evaluation guidelines that prioritize representation-level verification, especially for privacy-critical applications in the pretrained model era.",
        "abstract_ko": "사전학습 모델이 웹에서 공유되는 사례가 늘면서, 요청 시 민감·저작권·개인 정보를 망각하거나 삭제할 수 있도록 하는 것이 중요해졌습니다. 기계 언러닝은 이 문제를 다루기 위해 제안되었습니다. 그러나 현행 언러닝 평가는 출력 기반 지표에 의존하여, 정보가 완전히 삭제되었는지 아니면 표현 수준에서 단지 억제되었는지—억제만으로는 진정한 언러닝에 충분하지 않음—를 검증할 수 없습니다. 이 공백을 해결하기 위해, Sparse Autoencoder로 중간 계층의 클래스별 expert feature를 식별하고 inference-time steering을 적용하여 억제와 삭제를 정량적으로 구분하는 새로운 restoration 기반 분석 프레임워크를 제안합니다. 이미지 분류의 주요 언러닝 방법 12개에 적용한 결과, 대부분 방법에서 언러닝된 정보의 높은 restoration rate가 관찰되어, 중간 표현의 의미 특징은 보존한 채 결정 경계 수준에서만 정보를 억제함을 시사합니다. 특히 사전학습 체크포인트로부터의 재학습조차 높은 restoration을 보여 사전학습 특징 계층이 지속됨을 드러냅니다. 이러한 결과는 표현 수준 잔존이 출력 기반 지표가 간과하는 중대한 위험을 초래함을 보이며, 새로운 언러닝 평가 기준의 필요성을 강조합니다. 사전학습 모델 시대의 프라이버시 중요 응용을 위해 표현 수준 검증을 우선하는 새로운 평가 가이드라인을 제안합니다."
    },
    {
        "title": "Toward Data-Driven Satellite Orbit Prediction: A Dataset and Method Survey for Multi-Regime Satellites",
        "authors": [
            "Kangjun Lee",
            "Seungwon Jeong",
            "JongU Park",
            "Youjin Shin",
            "Simon S. Woo"
        ],
        "venue_full": "IEEE Access",
        "venue": null,
        "track": "SCIE Journal",
        "presentationType": null,
        "Factor": [
            "SCIED IF =",
            4.2
        ],
        "year": 2026,
        "links": {
            "conf": "https://ieeexplore.ieee.org/document/11594093"
        },
        "img": "/img/Publications/2026_IEEE_KangJun.png",
        "abstract": "The rapid proliferation of artificial satellites and space debris necessitates accurate orbit prediction to ensure orbital sustainability. While machine learning has emerged as a powerful tool for this task, existing surveys lack a systematic investigation into the critical relationship between orbital regimes (LEO, MEO, and GEO) and dataset characteristics. This paper presents a comprehensive survey of data-driven satellite orbit prediction, offering a novel taxonomy centered on the datasets that underpin these studies. We systematically analyze how distinct orbital dynamics and data formats, ranging from Two-Line Elements (TLEs) to precise ephemerides, affect predictive model performance, and we categorize the models into hybrid and non-hybrid approaches that leverage machine learning and deep learning. Furthermore, we identify significant limitations in current research, particularly the lack of model generalization across diverse missions and the imbalance of available data. Finally, we propose future research directions, advocating the development of foundation models and the curation of high-fidelity, multi-regime datasets to advance the field toward universal orbit prediction.",
        "abstract_ko": "인공위성과 우주 쓰레기의 급증은 궤도 지속가능성을 위해 정확한 궤도 예측을 필요로 합니다. 기계학습이 이 과제에 강력한 도구로 부상하였으나, 기존 서베이는 궤도 레짐(LEO, MEO, GEO)과 데이터셋 특성 간의 핵심 관계에 대한 체계적 조사가 부족합니다. 본 논문은 데이터 기반 위성 궤도 예측에 대한 포괄적 서베이를 제시하며, 연구를 뒷받침하는 데이터셋을 중심으로 한 새로운 분류체계를 제공합니다. Two-Line Element(TLE)부터 정밀 ephemeris에 이르는 서로 다른 궤도 역학과 데이터 형식이 예측 모델 성능에 미치는 영향을 체계적으로 분석하고, 기계학습·딥러닝을 활용하는 하이브리드 및 비하이브리드 접근으로 모델을 분류합니다. 나아가 다양한 미션에 걸친 모델 일반화 부족과 가용 데이터의 불균형 등 현 연구의 중요한 한계를 식별합니다. 마지막으로 foundation model 개발과 고정밀 multi-regime 데이터셋 구축을 통한 보편적 궤도 예측으로의 발전을 위한 향후 연구 방향을 제안합니다."
    },
    {
        "title": "Fitting Image Diffusion Models on Video Datasets",
        "authors": [
            "Juhun Lee",
            "Simon S. Woo"
        ],
        "venue_full": "Workshop on International Conference on Computer Vision",
        "venue": "ICCV",
        "track": "Workshop Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2025,
        "links": {
            "conf": "https://iccv.thecvf.com/"
        },
        "img": "/img/Publications/2025_ICCVW_Juhun.png",
        "abstract": "Image diffusion models are trained on independently sampled static images. While this is the bedrock task protocol in generative modeling, capturing the temporal world through the lens of static snapshots is information-deficient by design. This limitation leads to slower convergence, limited distributional coverage, and reduced generalization. In this work, we propose a simple and effective training strategy that leverages the temporal inductive bias present in continuous video frames to improve diffusion training. Notably, the proposed method requires no architectural modification and can be seamlessly integrated into standard diffusion training pipelines. We evaluate our method on the HandCo dataset, where hand-object interactions exhibit dense temporal coherence andsubtle variations in finger articulation often result in semantically distinct motions. Empirically, our method accelerates convergence by over 2x faster and achieves lower FID on both training and validation distributions. It also improves generative diversity by encouraging the model to capture meaningful temporal variations. We further provide an optimization analysis showing that our regularization reduces the gradient variance, which contributes to faster convergence.",
        "abstract_ko": "이미지 확산 모델은 독립적으로 샘플링된 정적 이미지로 훈련됩니다. 이는 생성 모델링에서 기본적인 과제 프로토콜이지만, 정적 스냅샷을 통해 시간적 세계를 포착하는 것은 설계상 정보가 부족합니다. 이러한 한계는 수렴 속도를 늦추고, 분포 범위를 제한하며, 일반화 능력을 감소시킵니다. 본 연구에서는 연속적인 비디오 프레임에 존재하는 시간적 귀납적 편향을 활용하여 확산 훈련을 개선하는 간단하고 효과적인 훈련 전략을 제안합니다. 특히 제안된 방법은 아키텍처 수정이 필요 없으며, 표준 확산 훈련 파이프라인에 원활하게 통합될 수 있습니다. 본 연구에서는 손-물체 상호작용이 높은 시간적 일관성을 보이고 손가락 관절의 미세한 변화가 종종 의미상 다른 동작으로 나타나는 HandCo 데이터셋에서 제안 방법을 평가합니다. 실증적으로, 제안 방법은 수렴 속도를 2배 이상 가속화하고, 훈련 및 검증 분포 모두에서 더 낮은 FID를 달성합니다. 또한 모델이 의미 있는 시간 변화를 포착하도록 장려함으로써 생성 다양성을 향상시킵니다. 본 연구에서는 추가적으로 우리의 정규화가 그래디언트 분산을 줄여 더 빠른 수렴에 기여함을 보여주는 최적화 분석을 제공합니다."
    },
    {
        "title": "Self-Disclosure of Mental Health via Deepfakes: Testing the Effects of Self-Deepfakes on Affective Resistance and Intention to Seek Mental Health Support",
        "authors": [
            "Jiyoung Lee",
            "Christopher M Dobmeier",
            "Minji Heo",
            "Simon S. Woo"
        ],
        "venue_full": "Health Communication",
        "venue": null,
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "SSCI IF=",
            2.7
        ],
        "year": 2025,
        "links": {
            "conf": "https://www.tandfonline.com/journals/hhth20"
        },
        "img": "/img/Publications/2025_minji_health_communication.png",
        "abstract": "This study examines the use of deepfakes in self-disclosure interventions within mental health contexts. Specifically, we investigate how videos featuring self-deepfakes, celebrity deepfakes, and virtual agents disclosing mental health challenges shape affective resistance and intention to seek support, considering the moderating influence of individual baseline mental health. The findings indicate that self-deepfakes elicited greater affective resistance than celebrity deepfakes, leading to reduced help-seeking intention, whereas no significant differences were observed between self-deepfakes and virtual agent disclosures. Also, the moderation analysis showed that participants with lower baseline mental health were especially prone to heightened affective resistance toward self-disclosure videos featuring deepfake representations of themselves. Our findings indicate that artificial intelligence (AI)-generated self-deepfakes, which personalize content without affording users agency, may reverse the conventional self-referencing effect, provoking affective resistance rooted in identity threat. Since these counterproductive effects are most salient among individuals with negative self-schemas who struggle with greater mental health challenges, AI-driven technologies should be applied in health communication with caution, accompanied by tailored strategies designed to curb impulsive, emotion-driven resistance.",
        "abstract_ko": "본 연구는 정신 건강 맥락에서 자기 공개 개입에 딥페이크를 활용하는 방식을 조사합니다. 특히, 본 연구에서는 자기 딥페이크, 유명인 딥페이크, 가상 에이전트가 정신 건강 문제를 공개하는 동영상이 감정적 저항과 지원 요청 의도에 어떠한 영향을 미치는지, 개인의 기본 정신 건강 상태가 조절 변수로 작용하는지를 조사합니다. 연구 결과, 자기 딥페이크는 유명인 딥페이크보다 더 큰 감정적 저항을 유발하여 도움 요청 의도를 감소시키는 것으로 나타났으며, 자기 딥페이크와 가상 에이전트의 공개 사이에는 유의한 차이가 관찰되지 않았습니다. 또한 조절 분석에서는 기본 정신 건강이 낮은 참가자들이 자기 자신을 딥페이크로 나타낸 자기 공개 동영상에 대해 특히 더 높은 감정적 저항을 보이는 경향이 나타났습니다. 우리의 연구 결과는 사용자의 주체성을 부여하지 않고 콘텐츠를 개인화하는 인공지능(AI) 생성 자기 딥페이크가 기존의 자기 참조 효과를 역전시켜 정체성 위협에 기반한 감정적 저항을 촉발할 수 있음을 시사한다. 이러한 역효과는 부정적 자기 도식과 더 큰 정신 건강 문제를 겪는 개인에게서 가장 두드러지게 나타나므로, AI 기반 기술은 건강 커뮤니케이션에 적용할 때 주의가 필요하며, 충동적이고 감정 주도적인 저항을 억제하도록 설계된 맞춤형 전략과 함께 수행되어야 한다."
    },
    {
        "title": "TwinTCN: Correlation-Gated Temporal Convolutions with Twin Encoders",
        "authors": [
            "Yong-Cheol Ro",
            "Simon S. Woo"
        ],
        "venue_full": "ACM/SIGAPP Symposium on Applied Computing",
        "venue": "SAC",
        "track": "Machine Learning and Its Application (MLA)",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2026,
        "links": {
            "conf": "https://www.sigapp.org/sac/sac2026/"
        },
        "img": "/img/Publications/SAC-MLA_2026_YongCheolRo.png",
        "abstract": "Along with the global trend of electric vehicle adoption, robust fault detection in EV battery management systems (BMS) is becoming increasingly important. In particular, fault detection in electric vehicles poses significant challenges to conventional methods due to non-stationarity, multi-scale dynamics, and label scarcity. We propose a correlation-aware \emph{TwinTCN} with \emph{RF-aligned} gating that matches correlation windows to TCN receptive fields, and couple it with a twin-encoder contrastive objective plus reconstruction to enhance discriminability while preserving normal patterns. Across three real-world EV datasets, the proposed model attains the highest \(F_1\) with a balanced precision–recall profile, outperforming unsupervised, supervised, and semi-supervised baselines.",
        "abstract_ko": "전기차 채택의 전 세계적 추세와 함께, 전기차 배터리 관리 시스템(BMS)에서의 견고한 결함 감지는 점점 더 중요해지고 있습니다. 특히, 전기차에서의 결함 감지는 비정상성, 다중 규모 역학, 라벨 희소성 등으로 인해 기존 방법에 상당한 도전을 제기합니다. 본 연구에서는 상관창과 TCN 수용장을 매칭하는 \emph{TwinTCN}과 \emph{RF-정렬} 게이팅을 제안하고, 쌍인코더 대비 대물렌즈와 재구성을 결합하여 정상 패턴을 유지하면서 식별성을 높이는 것을 제안합니다. 세 개의 실제 EV 데이터셋을 통틀어, 제안된 모델은 균형 잡힌 정밀도-회상 프로필을 가진 최고 \(F_1\)을 달성하며, 비감독, 감독, 반감독 기준선보다 뛰어난 성능을 보입니다."
    },
    {
        "title": "Exploring Gemini 2.5 for Explainable Deepfake Detection under Black-Box Constraints",
        "authors": [
            "Hyunjune Kim",
            "Hyeongjun Choi",
            "Simon S. Woo"
        ],
        "venue_full": "CIKM Workshop on Human-Centric AI: From Explainability and Trustworthiness to Actionable Ethics",
        "venue": null,
        "track": "Workshop Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2025,
        "links": {
            "conf": "https://xai.kaist.ac.kr/Workshop/hcai2025/"
        },
        "img": "/img/Publications/CIKM-W2026_HyunjuneKim.png",
        "abstract": "The rapid advancement of deepfake generation poses significant challenges for reliable media verification. Effective detection increasingly demands methods that are both accurate and interpretable, motivating the use of multimodal large language models (MLLMs) for transparency and human-aligned explainability. While prior work has primarily focused on open-source MLLMs, we investigate, for the first time, the potential of a closed-source model, Google Gemini 2.5, for deepfake detection and explanation. We systematically evaluate Gemini via zero-shot testing and adapter-based black-box fine-tuning using Google Vertex AI. On a simple binary dataset (FaceForensics++), zero-shot performance is low and fine-tuning yields only modest gains. Remarkably, on a vision-language benchmark (DD-VQA), even straightforward black-box fine-tuning enables Gemini to outperform existing state-of-the-art models, highlighting the dataset-dependent impact of fine-tuning on closed-source models. Our study empirically demonstrates the feasibility of explainable deepfake detection using closed-source MLLMs, revealing both their promise and current limitations.",
        "abstract_ko": "딥페이크 생성의 급속한 발전은 신뢰할 수 있는 미디어 검증에 상당한 도전을 제기합니다. 효과적인 탐지는 점점 더 정확하고 해석 가능한 방법을 요구하며, 이는 투명성과 인간 친화적 설명 가능성을 위해 멀티모달 대형 언어 모델(MLLM)의 사용을 촉진합니다. 이전 연구는 주로 오픈 소스 MLLM에 초점을 맞추었지만, 본 연구에서는 처음으로 딥페이크 탐지 및 설명을 위한 폐쇄형 모델인 Google Gemini 2.5의 가능성을 조사합니다. 본 연구에서는 Google Vertex AI를 사용하여 제로샷 테스트와 어댑터 기반 블랙박스 파인튜닝을 통해 Gemini를 체계적으로 평가합니다. 단순 이진 데이터셋(FaceForensics++)에서 제로샷 성능은 낮으며, 파인튜닝은 단지 소폭의 향상만을 제공합니다. 놀랍게도, 비전-언어 벤치마크(DD-VQA)에서 단순한 블랙박스 파인튜닝만으로도 제미니는 기존 최첨단 모델들을 능가할 수 있었으며, 이는 폐쇄형 모델에 대한 파인튜닝의 데이터셋 의존적 영향을 강조한다. 우리 연구는 폐쇄형 MLLM을 사용한 설명 가능한 딥페이크 탐지의 실현 가능성을 경험적으로 입증하며, 그 가능성과 현재 한계를 모두 보여준다."
    },
    {
        "title": "From Rules to LLM-Enhanced Templates: A Hybrid ALPG Code Generation System",
        "authors": [
            "Sanghyeok Park",
            "Sungjea Hwang",
            "Simon S. Woo"
        ],
        "venue_full": "International Conference on Software Engineering",
        "venue": "ICSE-SEIP",
        "track": "Industry Paper",
        "presentationType": null,
        "Factor": ["",
            0
        ],
        "year": 2026,
        "links": {},
        "img": "/img/Publications/ICSE-SEIP2026_SangHyeokPark.png",
        "abstract": "The semiconductor industry operates as a multidisciplinary environment where engineers face development challenges due to varying coding proficiency. ALPG (Algorithmic Pattern Generator), used in semiconductor test equipment, requires nanosecond-level timing precision and signal control, yet existing LLMs fail to generate proper ALPG code due to the absence of public datasets. To address these challenges, we first developed RuleLang, a rule-based system achieving 76.3% coverage across 271 ALPG test patterns, but revealing limitations in handling new combinations. We then propose a hybrid system where LLMs generate JSON templates that are parsed by rule-based parsers into executable ALPG code. By constraining LLM outputs to schema-validated JSON, the system mitigates probabilistic uncertainty and prevents unsafe direct code generation. Evaluation on 271 real-world ALPG test patterns from Samsung’s 8th-generation V-NAND Flash memory achieved 84.2% accuracy, including a 23.4%p gain on new sequence test patterns, demonstrating significant improvements over manual and rule-based development.",
        "abstract_ko": "반도체 산업은 다양한 코딩 숙련도 때문에 엔지니어들이 개발 과제에 직면하는 다학제적 환경으로 운영됩니다. 반도체 테스트 장비에서 사용되는 ALPG(Algorithmic Pattern Generator)는 나노초 수준의 타이밍 정밀도와 신호 제어를 요구하지만, 기존 LLM은 공개 데이터셋 부재로 인해 적절한 ALPG 코드를 생성하지 못합니다. 이러한 문제를 해결하기 위해, 본 연구에서는 먼저 271개의 ALPG 테스트 패턴에서 76.3%의 커버리지를 달성한 룰 기반 시스템인 RuleLang을 개발했으나, 새로운 조합을 처리하는 데 한계를 보였습니다. 그 다음으로, LLM이 JSON 템플릿을 생성하면 이를 룰 기반 파서가 실행 가능한 ALPG 코드로 변환하는 하이브리드 시스템을 제안합니다. LLM 출력물을 스키마 검증된 JSON으로 제한함으로써, 시스템은 확률적 불확실성을 완화하고 안전하지 않은 직접 코드 생성을 방지합니다. 삼성의 8세대 V-NAND 플래시 메모리에서 271개의 실제 ALPG 테스트 패턴에 대한 평가에서 84.2% 정확도를 달성했으며, 새로운 시퀀스 테스트 패턴에서는 23.4%p 향상을 보여 수동 및 규칙 기반 개발에 비해 상당한 개선을 입증했습니다."
    },
    {
        "title": "CelebCaption: A Benchmark Dataset for Identity-Sensitive Unlearning in Image Captioning",
        "authors": [
            "Hakjun Moon",
            "Simon S. Woo"
        ],
        "venue_full": "ACM International Conference on Web Search and Data Mining",
        "venue": "WSDM",
        "track": "Short Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            2
        ],
        "year": 2026,
        "links": {},
        "img": "/img/Publications/WSDM2026_HakjunMoon.png",
        "abstract": "Machine unlearning seeks to remove the influence of selected training examples without retraining the model from scratch. Recent work has extended this goal to vision–language models, yet existing datasets are not suited for judging whether a sample’s influence has truly been erased from learned image–text pairs. Current algorithms often intend to introduce false information into sentences generated after unlearning, which compromises utility. We first establish three criteria that an image-caption unlearning method should meet: Specificity Reduction, Identity Removal, and Performance Preservation. Guided by these criteria, we present CelebCaption, an image–text dataset of 15,000 photographs covering 150 well-known individuals, each linked to four captions that vary in detail (detailed vs. summary) and in the presence of the subject’s name. This design enables controlled, quantitative assessment of the proposed unlearning objectives. We benchmark several representative unlearning algorithms on CelebCaption, using both caption quality scores and MIA accuracy as a quantitative unlearning metric, and observe that current methods fail to achieve their privacy objectives. Our unlearning criteria and dataset provide a focused, reproducible testbed for advancing privacy-aware image captioning. Our CelebCaption dataset is publicly available at https://github.com/Gloriel621/CelebCaption",
        "abstract_ko": "기계 언러닝(Machine unlearning)은 모델을 처음부터 다시 학습시키지 않고 선택된 학습 예제의 영향을 제거하는 것을 목표로 합니다. 최근 연구에서는 이 목표를 비전-언어 모델로 확장했지만, 기존 데이터셋은 학습된 이미지-텍스트 쌍에서 샘플의 영향이 실제로 제거되었는지를 판단하기에 적합하지 않습니다. 현재 알고리즘은 종종 언러닝 후 생성된 문장에 잘못된 정보를 도입하려는 의도를 가지고 있어 유용성을 저해합니다. 본 연구에서는 먼저 이미지-캡션 언러닝 방법이 충족해야 할 세 가지 기준을 설정합니다: 특이성 감소(Specificity Reduction), 정체성 제거(Identity Removal), 성능 유지(Performance Preservation). 이러한 기준을 바탕으로, 본 연구에서는 150명의 잘 알려진 인물을 포함한 15,000장의 사진으로 구성된 이미지-텍스트 데이터셋인 CelebCaption을 제시하며, 각 사진은 상세 vs. 요약과 인물 이름의 포함 여부에 따라 네 가지 캡션과 연결되어 있습니다. 이 설계는 제안된 언러닝(unlearning) 목표를 통제되고 정량적으로 평가할 수 있게 합니다. 본 연구에서는 CelebCaption에서 여러 대표적인 언러닝 알고리즘을 벤치마킹하며, 캡션 품질 점수와 MIA 정확도를 정량적 언러닝 지표로 사용하고, 현재의 방법들이 개인 정보 보호 목표를 달성하지 못함을 관찰합니다. 우리의 언러닝 기준과 데이터셋은 프라이버시를 고려한 이미지 캡션 개발을 위한 집중적이고 재현 가능한 테스트베드를 제공합니다. 우리의 CelebCaption 데이터셋은 https://github.com/Gloriel621/CelebCaption 에서 공개적으로 이용 가능합니다."
    },

    {
        "title": "Machine Pareidolia: Protecting Facial Images with Emotional Editing",
        "authors": [
            "Binh M. Le",
            "Simon S. Woo"
        ],
        "venue_full": "AAAI Conference on Artificial Intelligence",
        "venue": "AAAI",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            4
        ],
        "year": 2026,
        "links": {},
        "img": "/img/Publications/aaai2026_binhle.gif",
        "abstract": "The proliferation of facial recognition (FR) systems has raised privacy concerns in the digital realm, as malicious uses of FR models pose a significant threat. Traditional countermeasures, such as makeup style transfer, have suffered from low transferability in black-box settings and limited applicability across various demographic groups, including males and individuals with darker skin tones. To address these challenges, we introduce a novel facial privacy protection method, dubbed MAP, a pioneering approach that employs human emotion modifications to disguise original identities as target identities in facial images. Our method uniquely fine-tunes a score network to learn dual objectives, target identity and human expression, which are jointly optimized through gradient projection to ensure convergence at a shared local optimum. Additionally, we enhance the perceptual quality of protected images by applying local smoothness regularization and optimizing the score matching loss within our network. Empirical experiments demonstrate that our innovative approach surpasses previous baselines, including noise-based, makeup-based, and freeform attribute methods, in both qualitative fidelity and quantitative metrics. Furthermore, MAP proves its effectiveness against an online FR API and shows advanced adaptability in uncommon photographic scenarios.",
        "abstract_ko": "안면 인식(FR) 시스템의 확산은 FR 모델의 악의적 사용이 상당한 위협이 되면서 디지털 영역에서 프라이버시 문제를 제기하고 있습니다. 메이크업 스타일 전환과 같은 전통적인 대응책은 블랙박스 환경에서 전이 가능성이 낮고, 남성 및 피부가 더 어두운 사람을 포함한 다양한 인구 집단에 적용 가능성이 제한적이었습니다. 이러한 문제를 해결하기 위해, 본 연구에서는 MAP이라고 불리는 새로운 얼굴 프라이버시 보호 방법을 소개합니다. 이 방법은 인간 감정 변화를 이용하여 얼굴 이미지에서 원래의 정체성을 목표 정체성으로 위장하는 선구적인 접근 방식입니다. 제안 방법은 점수 네트워크를 독창적으로 미세 조정하여 목표 정체성과 인간 표정이라는 이중 목표를 학습하며, 이를 기울기 투영을 통해 공동으로 최적화하여 공유 로컬 최적점에서의 수렴을 보장합니다. 또한, 본 연구에서는 국소적 평활화 정규화를 적용하고 네트워크 내에서 점수 매칭 손실을 최적화함으로써 보호된 이미지의 지각적 품질을 향상시킵니다. 실험적 결과는 우리 혁신적 접근법이 잡음 기반, 메이크업 기반, 자유형 속성 방식 등 이전의 기준선을 질적 충실도와 정량적 지표 모두에서 능가함을 보여줍니다. 더 나아가, MAP는 온라인 FR API에 대한 효과를 입증하고 드문 사진 시나리오에서 뛰어난 적응성을 보여줍니다."
    },
    {
        "title": "AEON: Adaptive Embedding Optimized Noise for Robust Watermarking in Diffusion Models",
        "authors": [
            "Muhammad Shahid Muneer",
            "Simon S. Woo"
        ],
        "venue_full": "The IEEE/CVF Winter Conference on Applications of Computer Vision",
        "venue": "WACV",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2026,
        "links": {},
        "img": "/img/Publications/2026_WACV_Shahid_AEON.jpg",
        "abstract": "The widespread use of synthetic image generation models and the challenges associated with authenticity preservation have fueled the demand for robust watermarking methods to safeguard authenticity and protect the copyright of synthetic images. Existing watermarking methods embed. Invisible signatures in synthetic images often compromise image quality and remain susceptible to multiple watermark removal attacks, including reconstruction and forgery methods. To overcome this issue, we propose a novel watermarking approach, AEON, which seamlessly integrates the watermark into the latent diffusion process and ensures the watermark aligns with scene semantics in the final image. Unlike existing invisible in-diffusion watermarking and traditional hash-based methods, our approach adapts the neural synthesized hash-based watermark to the semantics of the generated image during the intermediate diffusion process instead of embedding traditional hashes with the initial noise. This facilitates visual coherence in the generated image while enhancing adversarial robustness and resilience against single or multiple adversarial and traditional watermark removal attacks. Our proposed approach a) modulates the noise sampling in each diffusion denoising iteration through a learnable watermark embedding, b) optimizes consistency, reconstruction, and similarity loss, enforcing local and global alignment between the watermark structure and the underlying image content, and c) generates a strong watermark by allowing late embedding of the watermark in the diffusion process. Empirical results demonstrate the effectiveness of the proposed approach in retaining quality and its robustness against cumulative adversarial attacks.",
        "abstract_ko": "합성 이미지 생성 모델의 광범위한 사용과 진정성 유지와 관련된 문제로 인해 합성 이미지의 진정성을 보호하고 저작권을 지키기 위한 강력한 워터마킹 방법에 대한 수요가 증가하고 있습니다. 기존의 워터마킹 방법은 합성 이미지에 보이지 않는 서명을 삽입하지만, 이는 종종 이미지 품질을 저하시킬 수 있으며 재구성 및 위조 방법을 포함한 다양한 워터마크 제거 공격에 취약합니다. 이러한 문제를 극복하기 위해, 본 연구에서는 워터마크를 잠재 확산 과정에 원활하게 통합하고 최종 이미지에서 워터마크가 장면의 의미와 일치하도록 보장하는 새로운 워터마킹 접근 방식인 AEON을 제안합니다. 기존의 보이지 않는 인디퓨전 워터마킹 방식 및 전통적인 해시 기반 방식과 달리, 제안 접근은 초기 노이즈에 전통적인 해시를 삽입하는 대신, 중간 디퓨전 과정에서 생성된 이미지의 의미에 맞게 신경망 합성 해시 기반 워터마크를 적응시킵니다. 이는 생성된 이미지의 시각적 일관성을 촉진하면서, 단일 또는 다중 적대적 공격 및 전통적 워터마크 제거 공격에 대한 적대적 강인성과 회복력을 향상시킵니다. 우리가 제안하는 접근법은 a) 학습 가능한 워터마크 삽입을 통해 각 디퓨전 노이즈 제거 반복에서 노이즈 샘플링을 조절하고, b) 일관성, 재구성, 유사성 손실을 최적화하여 워터마크 구조와 기반 이미지 콘텐츠 간의 국소적 및 전역적 정렬을 강화하며, c) 디퓨전 과정에서 워터마크를 늦게 삽입할 수 있게 하여 강력한 워터마크를 생성합니다. 실증적 결과는 제안된 접근 방식이 품질을 유지하는 데 효과적이며 누적된 적대적 공격에 대해 강인함을 보임을 입증합니다."
    },
    {
        "title": "RUAGO: Effective and Practical Retain-Free Unlearning via Adversarial Attack and OOD Generator",
        "authors": [
            "Sangyong Lee",
            "Sangjun Chung",
            "Simon S. Woo"
        ],
        "venue_full": "Conference on Neural Information Processing Systems",
        "venue": "NeurIPS",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            4
        ],
        "year": 2025,
        "links": {},
        "img": "/img/Publications/nips2025_sangyong.jpg",
        "abstract": "With increasing regulations on private data usage in AI systems, machine unlearning has emerged as a critical solution for selectively removing sensitive information from trained models while preserving their overall utility. While many existing unlearning methods rely on the retain data to mitigate the performance decline caused by forgetting, such data may not always be available (retain-free) in real-world scenarios. To address this challenge posed by retain-free unlearning, we introduce RUAGO, utilizing adversarial soft labels to mitigate over-unlearning and a generative model pretrained on out-of-distribution (OOD) data to effectively distill the original model’s knowledge. We introduce a progressive sampling strategy to incrementally increase synthetic data complexity, coupled with an inversion-based alignment step that ensures the synthetic data closely matches the original training distribution. Our extensive experiments on multiple benchmark datasets and architectures demonstrate that our approach consistently outperforms existing retain-free methods and achieves comparable or superior performance relative to retain-based approaches, demonstrating its effectiveness and practicality in real-world, data-constrained environments.",
        "abstract_ko": "AI 시스템에서 개인 데이터 사용에 대한 규제가 증가함에 따라, 기계 언러닝(machine unlearning)은 훈련된 모델에서 민감한 정보를 선택적으로 제거하면서 모델의 전반적인 유용성을 유지하는 중요한 해결책으로 떠오르고 있습니다. 기존의 많은 언러닝 방법들이 망각으로 인한 성능 저하를 완화하기 위해 유지 데이터(retain data)에 의존하지만, 실제 상황에서는 이러한 데이터가 항상 존재하지 않을 수 있습니다(유지 데이터 없음, retain-free). 유지 데이터가 없는 언러닝에서 발생하는 이러한 문제를 해결하기 위해, 본 연구에서는 과도한 언러닝(over-unlearning)을 완화하기 위해 적대적 소프트 레이블(adversarial soft labels)을 활용하고, 분포 외(OOD) 데이터로 사전 학습된 생성 모델을 사용하여 원래 모델의 지식을 효과적으로 증류하는 RUAGO를 소개합니다. 본 연구에서는 합성 데이터의 복잡성을 점진적으로 증가시키는 점진적 샘플링 전략을 소개하며, 합성 데이터가 원래 훈련 분포와 밀접하게 일치하도록 보장하는 역변환 기반 정렬 단계와 결합합니다. 여러 벤치마크 데이터셋과 아키텍처에 대한 광범위한 실험에서 제안 접근은 기존의 리테인-프리 방법보다 일관되게 우수한 성능을 보였고, 리테인 기반 접근법과 비교했을 때도 동등하거나 더 뛰어난 성능을 달성하여, 실제 데이터가 제한된 환경에서 그 효과와 실용성을 입증합니다."
    },
    {
        "title": "Through the Lens: Benchmarking Deepfake Detectors Against Moiré-Induced Distortions",
        "authors": [
            "Razaib Tariq",
            "Minji Heo",
            "Simon S. Woo",
            "Shahroz Tariq"
        ],
        "venue_full": "Conference on Neural Information Processing Systems",
        "venue": "NeurIPS",
        "track": "Dataset Paper",
        "presentationType": "Poster Presentation",
        "Factor": [
            "BK Computer Science IF=",
            4
        ],
        "year": 2025,
        "links": {},
        "img": "/img/Publications/neurips-25-Razaib.png",
        "abstract": "Deepfake detection remains a pressing challenge, particularly in real-world settings where smartphone-captured media from digital screens often introduces Moiré artifacts that can distort detection outcomes. This study systematically evaluates state-of-the-art (SOTA) deepfake detectors on Moiré-affected videos an issue that has received little attention. We collected a dataset of 12,832 videos, spanning 35.64 hours, from Celeb-DF, DFD, DFDC, UADFV, and FF++ datasets, capturing footage under diverse real-world conditions, including varying screens, smartphones, lighting setups, and camera angles. To further examine the influence of Moiré patterns on deepfake detection, we conducted additional experiments using our DeepMoiréFake, referred to as (DMF) dataset, and two synthetic Moiré generation techniques. Across 15 top-performing detectors, our results show that Moiré artifacts degrade performance by as much as 25.4%, while synthetically generated Moiré patterns lead to a 21.4% drop in accuracy. Surprisingly, demoiréing methods, intended as a mitigation approach, instead worsened the problem, reducing accuracy by up to 16%. These findings underscore the urgent need for detection models that can robustly handle Moiré distortions alongside other real-world challenges, such as compression, sharpening, and blurring. By introducing the DMF dataset, we aim to drive future research toward closing the gap between controlled experiments and practical deepfake detection.",
        "abstract_ko": "딥페이크 탐지는 여전히 중요한 과제로 남아 있으며, 특히 스마트폰으로 촬영한 디지털 화면 미디어가 종종 탐지 결과를 왜곡할 수 있는 모아레(Moiré) 아티팩트를 가져오는 실제 환경에서는 더욱 그렇습니다. 본 연구는 모아레 영향을 받은 영상에 대해 최신 딥페이크 탐지기(SOTA)를 체계적으로 평가하며, 이 문제는 그동안 거의 주목받지 못했습니다. 본 연구에서는 Celeb-DF, DFD, DFDC, UADFV, FF++ 데이터셋에서 다양한 실제 환경 조건(다양한 화면, 스마트폰, 조명 설정, 카메라 각도)을 포함하여 촬영된 총 12,832편, 35.64시간 분량의 영상을 수집했습니다. 또한 모아레 패턴이 딥페이크 탐지에 미치는 영향을 더 면밀히 검토하기 위해, 본 연구에서는 DeepMoiréFake(DMF) 데이터셋과 두 가지 합성 모아레 생성 기법을 활용한 추가 실험을 수행했습니다. 15개의 최고 성능 탐지기를 대상으로 한 결과, 모아레(Moiré) 아티팩트는 성능을 최대 25.4%까지 저하시킨 반면, 합성된 모아레 패턴은 정확도를 21.4% 낮추는 것으로 나타났습니다. 놀랍게도 완화 방법으로 의도된 디모아레(demoiré) 기법은 오히려 문제를 악화시켜 정확도를 최대 16%까지 감소시켰습니다. 이러한 발견은 압축, 선명화, 블러링과 같은 다른 실제 문제 alongside 모아레 왜곡을 견고하게 처리할 수 있는 탐지 모델의 긴급한 필요성을 강조합니다. DMF 데이터셋을 도입함으로써 본 연구에서는 통제된 실험과 실용적인 딥페이크 탐지 간의 격차를 줄이기 위한 향후 연구를 촉진하고자 합니다."
    },
    {
        "title": "FakeChain: Exposing Shallow Cues in Multi-Step Deepfake Detection",
        "authors": [
            "Minji Heo",
            "Simon S. Woo"
        ],
        "venue_full": "ACM International Conference on Information and Knowledge Management",
        "venue": "CIKM",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            3
        ],
        "year": 2025,
        "links": {},
        "img": "/img/Publications/2025_CIKM_minji.PNG",
        "abstract": "Multi-step or hybrid deepfakes, generated through successively applying different deepfake creation methods such as face-swapping, GAN-based generation, and Diffusion refinement, can pose an emerging challenge for detection models trained on single-step forgeries. While prior studies focus on isolated manipulations, little is known about model behavior under such compositional manipulation pipelines. In this work, we introduce FakeChain, a large-scale benchmark comprising 1-, 2-, and 3-Step manipulated face images synthesized using five state-of-the-art generators, including face-swap, GAN, and Diffusion models. Using this dataset, we analyze detection performance and spectral properties across manipulation depths, generator combinations, and quality settings. Our findings reveal that detection performance highly depends on the final manipulation step, with F1-score dropping by up to 58.83% when it differs from training. Detectors rely on shallow cues from the last stage, limiting generalization across multi-step forgeries. We also observe architectural differences in robustness to compression, with attention-based models being more sensitive than CNN-based ones. These insights highlight the need for detection models that account for manipulation history and benchmarks such as FakeChain that reflect the evolving nature of deepfake synthesis pipelines. We share some sample of our code here.",
        "abstract_ko": "멀티 스텝 또는 하이브리드 딥페이크는 얼굴 교체, GAN 기반 생성, Diffusion 정제와 같은 서로 다른 딥페이크 생성 방법을 순차적으로 적용하여 생성되며, 단일 단계 위조에 대해 훈련된 탐지 모델에게 새로운 도전 과제를 제시할 수 있습니다. 이전 연구들은 개별 조작에 초점을 맞추고 있지만, 이러한 조합적 조작 파이프라인에서 모델의 동작에 대해서는 거의 알려져 있지 않습니다. 본 연구에서는 FakeChain을 소개합니다. FakeChain은 얼굴 교체, GAN, Diffusion 모델을 포함한 최첨단 생성기 5종을 사용하여 합성된 1단계, 2단계, 3단계 조작 얼굴 이미지로 구성된 대규모 벤치마크입니다. 이 데이터셋을 활용하여 본 연구에서는 조작 단계, 생성기 조합, 품질 설정에 따른 탐지 성능과 스펙트럼 특성을 분석합니다. 우리의 연구 결과는 탐지 성능이 최종 조작 단계에 크게 의존하며, 학습 단계와 다를 경우 F1 점수가 최대 58.83%까지 떨어진다는 것을 보여줍니다. 탐지기는 마지막 단계의 얕은 신호에 의존하여 다단계 위조에 대한 일반화가 제한됩니다. 또한, 본 연구에서는 압축에 대한 강인성 측면에서 구조적 차이를 관찰했으며, 주의 기반 모델이 CNN 기반 모델보다 더 민감함을 확인했습니다. 이러한 통찰은 조작 기록을 고려한 탐지 모델과, 변화하는 딥페이크 합성 파이프라인의 특성을 반영한 FakeChain과 같은 벤치마크의 필요성을 강조합니다. 여기에서 우리 코드 일부 샘플을 공유합니다."
    },
    {
        "title": "Seeing Through the Blur: Unlocking Defocus Maps for Deepfake Detection",
        "authors": [
            "Minsun Jeon",
            "Simon S. Woo"
        ],
        "venue_full": "ACM International Conference on Information and Knowledge Management",
        "venue": "CIKM",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            3
        ],
        "year": 2025,
        "links": {},
        "img": "/img/Publications/DoF_G.png",
        "abstract": "The rapid advancement of generative AI has enabled the mass production of photorealistic synthetic images, blurring the boundary between authentic and fabricated visual content. This challenge is particularly evident in deepfake scenarios involving facial manipulation, but also extends to broader AI-generated content (AIGC) cases that feature fully synthesized scenes. As such content becomes increasingly difficult to distinguish from reality, the integrity of visual media is undergoing threat. To address this issue, we propose a physically interpretable deepfake detection framework and demonstrate that defocus blur can serve as an effective forensic signal. Defocus blur is a depth-dependent optical phenomenon that naturally occurs in camera-captured images due to lens focus and scene geometry. In contrast, synthetic images often lack realistic depth-of-field (DoF) characteristics, resulting in globally sharp or physically inconsistent blur patterns. To capture these discrepancies, we construct a defocus blur map and use it as a discriminative feature for detecting manipulated content. Our approach is supported by three in-depth feature analyses, and experimental results confirm that defocus blur provides a reliable and interpretable cue for identifying synthetic images. We aim for our defocus-based detection pipeline and interpretability tools to contribute meaningfully to ongoing research in media forensics.",
        "abstract_ko": "생성형 AI의 급격한 발전은 사실적인 합성 이미지를 대량 생산할 수 있게 하여, 진짜와 가짜 시각 콘텐츠 간의 경계를 흐리게 만들었습니다. 이러한 문제는 특히 얼굴 조작을 포함한 딥페이크 시나리오에서 뚜렷하게 나타나지만, 완전히 합성된 장면을 특징으로 하는 보다 넓은 범위의 AI 생성 콘텐츠(AIGC) 사례로도 확장됩니다. 이러한 콘텐츠를 현실과 구분하기가 점점 더 어려워짐에 따라, 시각 매체의 무결성이 위협을 받고 있습니다. 이 문제를 해결하기 위해, 본 연구에서는 물리적으로 해석 가능한 딥페이크 탐지 프레임워크를 제안하며, 디포커스 블러가 효과적인 포렌식 신호로 사용될 수 있음을 보여줍니다. 디포커스 블러는 렌즈 초점과 장면 기하학으로 인해 카메라로 촬영된 이미지에서 자연스럽게 발생하는 깊이 의존적 광학 현상입니다. 대조적으로, 합성 이미지들은 종종 현실적인 피사계 심도(DoF) 특성이 부족하여 전체적으로 선명하거나 물리적으로 일관되지 않은 블러 패턴을 나타냅니다. 이러한 차이점을 포착하기 위해, 본 연구에서는 디포커스 블러 맵을 구성하고 이를 조작된 콘텐츠를 탐지하기 위한 판별적 특징으로 사용합니다. 제안 접근은 세 가지 심층 특징 분석에 의해 뒷받침되며, 실험 결과는 디포커스 블러가 합성 이미지를 식별하는 데 신뢰할 수 있고 해석 가능한 단서를 제공함을 확인합니다. 본 연구에서는 디포커스 기반 탐지 파이프라인과 해석 가능성 도구가 미디어 포렌식 연구에 의미있게 기여하기를 목표로 합니다."
    },
    {
        "title": "Anomaly Detection for Advanced Driver Assistance System with NCDE-based Normalizing Flow",
        "authors": [
            "Kangjun Lee",
            "Minha Kim",
            "Youngho Jun",
            "Simon S. Woo"
        ],
        "venue_full": "ACM International Conference on Information and Knowledge Management",
        "venue": "CIKM",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            3
        ],
        "year": 2025,
        "links": {},
        "img": "/img/Publications/2025CIKM_kangjun_minha.png",
        "abstract": "For electric vehicles, the Adaptive Cruise Control (ACC) in Advanced Driver Assistance Systems (ADAS) is designed to assist braking based on driving conditions and user patterns. However, the driving data collected during development are limited and lack diversity, leading to late or aggressive braking. Moreover, it is necessary to effectively identify anomalies in braking patterns, which is critical for self-driving autonomous vehicles. We propose Graph Neural Controlled Differential Equation Normalizing Flow (GDFlow), which leverages Normalizing Flow (NF) with Neural Controlled Differential Equations (NCDE) to learn the distribution of normal driving patterns. Our approach captures spatio-temporal information from sensor data and accurately models continuous changes in driving patterns. Additionally, we introduce a quantilebased maximum likelihood objective to improve the likelihood estimate of normal data at the margin of the distribution. We validate GDFlow using real-world electric vehicle driving data that we collected from Hyundai IONIQ5 and GV80EV. Our model achieves state-of-the-art (SOTA) performance compared to nine baselines across four dataset configurations of different vehicle types and drivers. Furthermore, our model outperforms the latest anomaly detection methods across four time series benchmark datasets. Our approach demonstrates superior efficiency in inference time compared to existing methods. We plan to deploy GDFlow in the Hyundai Genesis GV90 by March 2026.",
        "abstract_ko": "전기차의 경우, 첨단 운전자 보조 시스템(ADAS)에 있는 적응형 크루즈 컨트롤(ACC)은 주행 조건과 사용자 패턴을 기반으로 제동을 지원하도록 설계되어 있습니다. 그러나 개발 과정에서 수집된 주행 데이터는 제한적이고 다양성이 부족하여 제동이 늦거나 과격해지는 문제가 발생합니다. 또한, 제동 패턴의 이상을 효과적으로 식별하는 것이 필요하며, 이는 자율주행차에서 매우 중요합니다. 본 연구에서는 정상 주행 패턴의 분포를 학습하기 위해 신경 제어 미분 방정식(NCDE)과 정규화 흐름(NF)을 활용한 그래프 신경 제어 미분 방정식 정규화 흐름(GDFlow)을 제안합니다. 제안 접근은 센서 데이터에서 시공간 정보를 포착하고 주행 패턴의 연속적인 변화를 정확하게 모델링합니다. 또한, 본 연구에서는 분포의 경계에서 정상 데이터의 가능성 추정을 개선하기 위해 분위수 기반 최대 우도 목적 함수를 도입합니다. 본 연구에서는 현대 IONIQ5와 GV80EV에서 수집한 실제 전기차 주행 데이터를 사용하여 GDFlow를 검증합니다. 제안 모델은 서로 다른 차량 유형과 운전자에 대한 네 가지 데이터셋 구성에서 아홉 가지 기준 모델과 비교하여 최첨단(SOTA) 성능을 달성합니다. 더 나아가, 제안 모델은 네 가지 시계열 벤치마크 데이터셋에서 최신 이상 탐지 방법보다 우수한 성능을 보입니다. 제안 접근은 기존 방법에 비해 추론 시간에서 뛰어난 효율성을 보여줍니다. 본 연구에서는 2026년 3월까지 GDFlow를 현대 제네시스 GV90에 배포할 계획입니다."
    },
    {
        "title": "MU-OT: Effective and Unified Machine Unlearning with Optimal Transport for Feature Realignment",
        "authors": [
            "Sangjun Chung",
            "Simon S. Woo"
        ],
        "venue_full": "ACM International Conference on Information and Knowledge Management",
        "venue": "CIKM",
        "track": "Short Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            2
        ],
        "year": 2025,
        "links": {},
        "img": "/img/Publications/2025_CIKM_sangjun.jpg",
        "abstract": "Machine unlearning has emerged as a significant research topic in response to the increasing demands for data privacy and compliance with privacy regulations. The main challenge is to eliminate the influence of a specific subset of training data from a pretrained model while preserving the model’s performance on the retain set without retraining it from scratch. In this paper, we propose a novel efficient unlearning framework based on Optimal Transport, which can effectively work on class and instance-wise unlearning tasks. By analyzing and comparing the feature spaces of the original and retrained models, we formulate the unlearning problem as a distribution alignment task between the forget set and the retain set. We guide the feature distribution of the forget set, which initially forms distinct, structured patterns, to align with that of the retain set. In addition, we introduce a class-aware cost function for optimal transport that encourages inter-class transport, thereby enhancing the forgetting process. Extensive experiments on three public benchmark datasets demonstrate its superior effectiveness compared to previous SOTA methods.",
        "abstract_ko": "머신 언러닝은 데이터 프라이버시 요구와 프라이버시 규정 준수에 대한 증가하는 요구에 대응하여 중요한 연구 주제로 등장했습니다. 주요 과제는 사전 학습된 모델에서 특정 훈련 데이터 하위 집합의 영향을 제거하면서 모델을 처음부터 다시 학습시키지 않고 유지 셋에 대한 모델 성능을 보존하는 것입니다. 본 논문에서는 최적 수송(Optimal Transport)에 기반한 새로운 효율적 언러닝 프레임워크를 제안하며, 이는 클래스 및 인스턴스 단위 언러닝 작업에 효과적으로 작동할 수 있습니다. 원본 모델과 재학습 모델의 특징 공간을 분석하고 비교함으로써, 언러닝 문제를 포겟셋(forget set)과 유지셋(retain set) 간의 분포 정렬(task) 문제로 공식화합니다. 본 연구에서는 처음에는 뚜렷하고 구조화된 패턴을 형성하는 포겟셋의 특징 분포를 유지셋의 분포와 정렬되도록 안내합니다. 또한, 본 연구에서는 클래스 간 전이를 촉진하여 망각 과정을 향상시키는 최적 수송을 위한 클래스 인식 비용 함수를 도입합니다. 세 개의 공개 벤치마크 데이터셋에 대한 광범위한 실험은 이전 SOTA 방법에 비해 그 우수한 효과를 입증합니다."
    },
    {
        "title": "Beyond Masking: Landmark-based Representation Learning and Knowledge-Distillation for Audio-Visual Deepfake Detection",
        "authors": [
            "Chan Park",
            "Muhammad Shahid Muneer",
            "Simon S. Woo"
        ],
        "venue_full": "ACM International Conference on Information and Knowledge Management",
        "venue": "CIKM",
        "track": "Short Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            2
        ],
        "year": 2025,
        "links": {},
        "img": "/img/Publications/2025_CIKM_Chan.png",
        "abstract": "Audio-visual deepfake detection methods demonstrate strong performance on academic datasets but fail significantly when applied to real-world deepfake content. To address the shortcomings of previous approaches, we introduce a landmark-guided knowledge-distillation framework, featuring two core innovations that enable the effective detection of real-world deepfakes. First, we propose Landmark-based Distillation (LBD), motivated by I-JEPA's representation learning approach. LBD utilizes KL-divergence to align facial landmark predictions from visual and audio encoders, enforcing focus on geometric facial features rather than spurious background information. Second, we introduce Multimodal Temporal Information Alignment (MTIA), which employs contrastive learning to enhance temporal consistency between audio and visual representations. We conduct extensive experiments on academic datasets and web-based deepfakes collected from diverse social media platforms, serving as real-world examples. Our proposed landmark-guided distillation framework achieves computational efficiency while improving multimodal video deepfake detection performance across a diverse range of deepfakes compared to existing methods.",
        "abstract_ko": "오디오-비주얼 딥페이크 탐지 방법은 학술 데이터셋에서 강력한 성능을 보여주지만, 실제 딥페이크 콘텐츠에 적용될 경우 성능이 크게 저하됩니다. 이전 접근법의 한계를 해결하기 위해, 본 연구에서는 실세계 딥페이크를 효과적으로 탐지할 수 있도록 두 가지 핵심 혁신을 특징으로 하는 랜드마크 기반 지식 증류 프레임워크를 소개합니다. 첫째, 본 연구에서는 I-JEPA의 표현 학습 접근에서 영감을 받아 랜드마크 기반 증류(LBD)를 제안합니다. LBD는 KL-발산을 사용하여 시각 및 오디오 인코더의 얼굴 랜드마크 예측을 정렬함으로써, 배경의 불필요한 정보 대신 기하학적 얼굴 특징에 집중하도록 합니다. 둘째, 본 연구에서는 다중 모달 시간 정보 정렬(MTIA)을 도입하여, 대조 학습을 활용해 오디오 및 시각 표현 간의 시간적 일관성을 향상시킵니다. 본 연구에서는 다양한 소셜 미디어 플랫폼에서 수집된 학술 데이터셋과 웹 기반 딥페이크를 대상으로 광범위한 실험을 수행하며, 이는 실제 사례로 활용됩니다. 제안된 랜드마크 기반 증류 프레임워크는 계산 효율성을 달성하면서, 기존 방법과 비교하여 다양한 딥페이크에 걸친 멀티모달 비디오 딥페이크 탐지 성능을 향상시킵니다."
    },
    {
        "title": "Learning Interpersonal Similarities in Multiple Fingers via Fingerprint Landmark-Aware Recognition Network",
        "authors": [
            "Jiwon Kim",
            "Simon S. Woo",
            "Youjin Shin"
        ],
        "venue_full": "IEEE International Joint Conference on Biometrics",
        "venue": "IJCB",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            ">>Research Impact Score 1.90",
            0
        ],
        "year": 2025,
        "links": {},
        "img": "/img/Publications/IJCB_jiwon.png",
        "abstract": "In fingerprint biometric systems, fingerprint recognition traditionally focuses on identifying individuals based on the distinct fingerprints of different fingers, which is finger-specific identity recognition (FsIR). However, real-world applications often require recognizing the same individual using fingerprints from different fingers, which is finger-agnostic identity recognition (FaIR). The FaIR task has proven challenging due to the prevailing assumption in the biometric field that there is no correlation between an individual’s different fingerprints. To address this issue, we propose a novel system, IP-Fing, which can learn the interpersonal similarity across the fingers. By using a pre-trained localization encoder to capture interpersonal fingerprint landmarks and the ArcFace marginal logit function, our IP-Fing recognition system can match a fingerprint query to all fingerprints of the same person while distinguishing them from others. We assess our method using comprehensive tests on two fingerprint datasets: our private fingerprint dataset, KORFing, which only has one sample per finger available, and the public fingerprint dataset, CASIA-v5, which has a few missing fingerprint samples for the task of finger-agnostic identity recognition (FaIR). IP-Fing achieves the best AUC with an average of 95.3074 across the two datasets, showing that our method is more effective in applying FaIR than conventional methods. Furthermore, IP-Fing demonstrates superior AUC with an average of 98.4631 across two datasets in the task of traditional finger-specific identity recognition (FsIR).",
        "abstract_ko": "지문 생체 인식 시스템에서 지문 인식은 전통적으로 서로 다른 손가락의 고유한 지문을 기반으로 개인을 식별하는 데 중점을 두며, 이를 손가락 특정 신원 인식(FsIR)이라고 합니다. 그러나 실제 응용에서는 종종 서로 다른 손가락의 지문을 사용하여 동일한 개인을 인식해야 하며, 이를 손가락 비특정 신원 인식(FaIR)이라고 합니다. FaIR 과제는 생체 인식 분야에서 개인의 서로 다른 지문 간에는 상관관계가 없다는 기존 가정 때문에 어려운 것으로 입증되었습니다. 이 문제를 해결하기 위해, 본 연구에서는 손가락 간 상호 유사성을 학습할 수 있는 새로운 시스템인 IP-Fing을 제안합니다. 사전 학습된 로컬라이제이션 인코더를 사용하여 개인 간 지문 랜드마크를 캡처하고 ArcFace 마진 로짓 함수를 활용함으로써, 우리 IP-Fing 인식 시스템은 특정 지문 쿼리를 동일인의 모든 지문과 매칭하면서 다른 사람의 지문과 구별할 수 있습니다. 본 연구에서는 두 가지 지문 데이터셋에 대한 포괄적인 테스트를 통해 제안 방법을 평가합니다: 각 손가락당 하나의 샘플만 있는 사설 지문 데이터셋 KORFing과, 몇몇 지문 샘플이 누락된 공용 지문 데이터셋 CASIA-v5를 사용한 손가락 무관 신원 인식(FaIR) 과제입니다. IP-Fing는 두 데이터셋 평균에서 95.3074의 최고 AUC를 달성하여, 기존 방법보다 FaIR 적용에 있어 제안 방법이 더 효과적임을 보여줍니다. 더욱이, IP-Fing은 전통적인 손가락 특화 신원 인식(FsIR) 작업에서 두 데이터셋에 걸쳐 평균 98.4631의 우수한 AUC를 보여줍니다."
    },
    {
        "title": "From Prediction to Explanation: Multimodal, Explainable, and Interactive Deepfake Detection Framework for Non-Expert Users",
        "authors": [
            "Shahroz Tariq",
            "PRIYANKA SINGH",
            "Simon S. Woo",
            "Irena Irmalasari",
            "Saakshi Gupta",
            "Dev Gupta"
        ],
        "venue_full": "ACM International Conference on Multimedia",
        "venue": "MM",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            4
        ],
        "year": 2025,
        "links": {},
        "img": "/img/Publications/Sharoz.png",
        "abstract": "The proliferation of deepfake technologies poses urgent challenges and serious risks to digital integrity, particularly within critical sectors such as forensics, journalism, and the legal system. While existing detection systems have made significant progress in classification accuracy, they typically function as black-box models—offering limited transparency and minimal support for human reasoning. This lack of interpretability hinders their usability in real-world decision-making contexts, especially for non-expert users. In this paper, we present DF-P2E (Deepfake: Prediction to Explanation), a novel multimodal framework that integrates visual, semantic, and narrative layers of explanation to make deepfake detection interpretable and accessible. The framework consists of three modular components: (1) a deepfake classifier with Grad-CAM-based saliency visualisation, (2) a visual captioning module that generates natural language summaries of manipulated regions, and (3) a narrative refinement module that uses a fine-tuned Large Language Model (LLM) to produce context-aware, user-sensitive explanations. We instantiate and evaluate the framework on the DF40 benchmark, the most diverse deepfake dataset to date. Experiments demonstrate that our system achieves competitive detection performance while providing high-quality explanations aligned with Grad-CAM activations. Human evaluation with non-expert participants confirms the perceived usefulness, understandability, and trustworthiness of the generated narratives. By unifying prediction and explanation in a coherent, human-aligned pipeline, this work offers a scalable approach to interpretable deepfake detection—advancing the broader vision of trustworthy and transparent AI systems in adversarial media environments.",
        "abstract_ko": "딥페이크 기술의 확산은 디지털 무결성에 긴급한 도전과 심각한 위험을 초래하며, 특히 법의학, 저널리즘, 법률 시스템과 같은 핵심 분야에서 그렇습니다. 기존의 탐지 시스템은 분류 정확도에서 상당한 진전을 이루었지만, 일반적으로 블랙박스 모델로 작동하여 투명성이 제한적이고 인간의 추론을 지원하는 기능이 최소화되어 있습니다. 이러한 해석 가능성 부족은 실제 의사 결정 환경, 특히 비전문 사용자에게 이러한 시스템의 활용성을 저해합니다. 본 논문에서는 딥페이크 탐지를 해석 가능하고 접근 가능하게 만들기 위해 시각적, 의미적, 서사적 설명의 계층을 통합한 새로운 다중 모달 프레임워크인 DF-P2E(Deepfake: Prediction to Explanation)를 제안합니다. 이 프레임워크는 세 가지 모듈형 구성 요소로 이루어져 있습니다: (1) Grad-CAM 기반 중요도 시각화를 갖춘 딥페이크 분류기, (2) 조작된 영역의 자연어 요약을 생성하는 시각적 캡션 모듈, (3) 미세 조정된 대형 언어 모델(LLM)을 사용하여 문맥에 맞고 사용자에 민감한 설명을 생성하는 내러티브 정제 모듈. 본 연구에서는 이 프레임워크를 현재까지 가장 다양한 딥페이크 데이터셋인 DF40 벤치마크에서 구현하고 평가합니다. 실험 결과, 우리의 시스템은 경쟁력 있는 탐지 성능을 달성하는 동시에 Grad-CAM 활성화와 일치하는 고품질 설명을 제공합니다. 비전문가 참가자를 대상으로 한 인간 평가에서는 생성된 내러티브의 유용성, 이해 가능성, 신뢰성이 확인되었습니다. 예측과 설명을 일관되고 인간 중심적으로 정렬된 파이프라인으로 통합함으로써, 본 연구는 해석 가능한 딥페이크 탐지를 위한 확장 가능한 접근 방식을 제공하며, 적대적 미디어 환경에서 신뢰할 수 있고 투명한 AI 시스템이라는 보다 넓은 비전을 진전시킨다."
    },
    {
        "title": "PromptFlare: Prompt-Generalized Defense via Cross-Attention Decoy in Diffusion-Based Inpainting",
        "authors": [
            "Hohyun Na",
            "Seunghoo Hong",
            "Simon S. Woo"
        ],
        "venue_full": "ACM International Conference on Multimedia",
        "venue": "MM",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            4
        ],
        "year": 2025,
        "links": {},
        "img": "/img/Publications/figure2.png",
        "abstract": "The success of diffusion models has enabled effortless, high-quality image modifications that precisely align with users' intentions, thereby raising concerns about their potential misuse by malicious actors. Previous studies have attempted to mitigate such misuse through adversarial attacks. However, these approaches heavily rely on image-level inconsistencies, which pose fundamental limitations in addressing the influence of textual prompts. In this paper, we propose PromptFlare, a novel adversarial protection method designed to protect images from malicious modifications facilitated by diffusion-based inpainting models. Our approach leverages the cross-attention mechanism to exploit the intrinsic properties of prompt embeddings. Specifically, we identify and target shared token of prompts that are invariant and semantically uninformative, injecting adversarial noise to suppress the sampling process. Extensive experiments on the EditBench dataset demonstrate that our method achieves state-of-the-art performance across various CLIP-based and traditional metrics while significantly reducing computational overhead and GPU memory usage. These findings highlight PromptFlare as a robust and efficient protection against unauthorized image manipulations.",
        "abstract_ko": "확산 모델의 성공은 사용자의 의도에 정확하게 부합하는 고품질 이미지 수정 작업을 손쉽게 가능하게 하였으며, 이로 인해 악의적인 행위자에 의한 잠재적 오용에 대한 우려가 제기되고 있습니다. 이전 연구들은 이러한 오용을 적대적 공격을 통해 완화하려고 시도했습니다. 그러나 이러한 접근법은 이미지 수준의 불일치에 크게 의존하고 있어, 텍스트 프롬프트의 영향을 해결하는 데 근본적인 한계를 가지고 있습니다. 본 논문에서는 확산 기반 인페인팅 모델에 의해 이루어지는 악의적 수정을 방지하기 위해 설계된 새로운 적대적 보호 방법인 PromptFlare를 제안합니다. 제안 접근은 프롬프트 임베딩의 고유한 특성을 활용하기 위해 교차 주의 메커니즘을 활용합니다. 구체적으로, 본 연구에서는 불변하고 의미적으로 유익하지 않은 프롬프트의 공유 토큰을 식별하고 타겟으로 삼아 샘플링 과정을 억제하기 위해 적대적 노이즈를 주입합니다. EditBench 데이터셋에 대한 광범위한 실험은 제안 방법이 다양한 CLIP 기반 및 전통적인 지표에서 최첨단 성능을 달성하면서 계산 비용과 GPU 메모리 사용을 크게 줄인다는 것을 보여줍니다. 이러한 발견은 PromptFlare가 무단 이미지 조작에 대한 강력하고 효율적인 보호 수단임을 강조합니다."
    },
    {
        "title": "SpecXNet: A Dual-Domain Convolutional Network for Robust Deepfake Detection",
        "authors": [
            "Inzamamul Alam",
            "Md Tanvir Islam",
            "Simon S. Woo"
        ],
        "venue_full": "ACM International Conference on Multimedia",
        "venue": "MM",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            4
        ],
        "year": 2025,
        "links": {},
        "img": "/img/Publications/high-level-dig.jpg",
        "abstract": "The increasing realism of content generated by GANs and diffusion models has made deepfake detection significantly more challenging. Existing approaches often focus solely on spatial or frequency-domain features, limiting their generalization to unseen manipulations. We propose the Spectral Cross-Attentional Network (SpecXNet), a dual-domain architecture for robust deepfake detection. The core \\textbf{Dual-Domain Feature Coupler (DDFC)} decomposes features into a local spatial branch for capturing texture-level anomalies and a global spectral branch that employs Fast Fourier Transform to model periodic inconsistencies. This dual-domain formulation allows SpecXNet to jointly exploit localized detail and global structural coherence, which are critical for distinguishing authentic from manipulated images. We also introduce the \\textbf{Dual Fourier Attention (DFA)} module, which dynamically fuses spatial and spectral features in a content-aware manner. Built atop a modified XceptionNet backbone, we embed the DDFC and DFA modules within a separable convolution block. Extensive experiments on multiple deepfake benchmarks show that SpecXNet achieves state-of-the-art accuracy, particularly under cross-dataset and unseen manipulation scenarios, while maintaining real-time feasibility. Our results highlight the effectiveness of unified spatial-spectral learning for robust and generalizable deepfake detection.",
        "abstract_ko": "GAN과 확산 모델이 생성한 콘텐츠의 현실성이 높아짐에 따라 딥페이크 탐지가 상당히 더 어려워졌습니다. 기존 접근 방식은 종종 공간 영역 또는 주파수 영역 특성에만 집중하여, 보지 못한 조작에 대한 일반화 능력이 제한됩니다. 본 연구에서는 강력한 딥페이크 탐지를 위해 이중 도메인 구조인 스펙트럴 교차 주의 네트워크(Spectral Cross-Attentional Network, SpecXNet)를 제안합니다. 핵심 요소인 이중 도메인 특징 결합기(Dual-Domain Feature Coupler, DDFC)는 특징을 텍스처 수준의 이상을 포착하는 로컬 공간 분기와 주기적 불일치를 모델링하기 위해 빠른 푸리에 변환(Fast Fourier Transform)을 사용하는 글로벌 스펙트럼 분기로 분해합니다. 이러한 이중 도메인 구성은 SpecXNet이 국소적 세부 정보와 글로벌 구조 일관성을 동시에 활용할 수 있게 하여, 진짜 이미지와 조작된 이미지를 구분하는 데 중요한 역할을 합니다. 본 연구에서는 또한 콘텐츠 인식 방식으로 공간적 및 스펙트럼 특징을 동적으로 융합하는 \textbf{Dual Fourier Attention (DFA)} 모듈을 소개합니다. 수정된 XceptionNet 백본 위에 구축된 본 연구에서는 DDFC와 DFA 모듈을 분리 가능한 합성곱 블록 내에 내장합니다. 다양한 딥페이크 벤치마크에서의 광범위한 실험은 SpecXNet이 특히 교차 데이터셋 및 미지 조작 시나리오에서 최첨단 정확도를 달성하면서 실시간 실행 가능성을 유지함을 보여줍니다. 본 연구 결과는 견고하고 일반화 가능한 딥페이크 탐지를 위한 통합 공간-스펙트럼 학습의 효율성을 강조합니다."
    },
    {
        "title": "Combating Dataset Misalignment for Robust AI-Generated Image Detection in the Real World",
        "authors": [
            "Hyeongjun Choi",
            "Inho Jung",
            "Simon S. Woo"
        ],
        "venue_full": "ACM ASIACCS Workshop on Security Implications of Deepfakes and Cheapfakes",
        "venue": "WDC",
        "track": "Workshop Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2025,
        "links": {
            "conf": "https://doi.org/10.1145/3709022.3736541"
        },
        "img": "/img/Publications/WDC25.png",
        "abstract": "AI-generated images are increasingly prevalent on the web, raising concerns about the real-world applicability of detection methods. While current detectors perform well on benchmark datasets, they suffer significant performance degradation on real-world datasets. Misalignment within benchmark datasets, caused by discrepancies in how data from different classes are encoded or transformed, leads models to learn shortcuts. These shortcuts make detectors overly reliant on factors such as image compression, causing biased predictions of real-world images that inevitably undergo compression. In this work, we reveal the misalignment in widely used benchmark datasets and demonstrate that aligning datasets improves model robustness and generalizability. Additionally, we propose leveraging pre-trained visual encoders to further enhance performance in real-world scenarios. Our approach achieves significant performance gains, highlighting the importance of dataset alignment for real-world AI-generated image detection.",
        "abstract_ko": "AI로 생성된 이미지가 웹에서 점점 더 널리 퍼지면서, 탐지 방법의 실제 적용 가능성에 대한 우려가 커지고 있습니다. 현재의 탐지기는 벤치마크 데이터셋에서는 좋은 성능을 보이지만, 실제 데이터셋에서는 성능이 크게 저하됩니다. 서로 다른 클래스의 데이터가 인코딩되거나 변환되는 방식의 차이로 인해 벤치마크 데이터셋 내에 발생하는 불일치 때문에, 모델은 편법을 학습하게 됩니다. 이러한 편법은 탐지기가 이미지 압축과 같은 요인에 과도하게 의존하게 만들어, 압축을 거치게 되는 실제 이미지에 대해 편향된 예측을 하게 만듭니다. 본 연구에서는 널리 사용되는 벤치마크 데이터셋에서의 불일치를 밝히고, 데이터셋을 정렬하면 모델의 강건성과 일반화 성능이 향상됨을 보여줍니다. 추가로, 실제 시나리오에서 성능을 더욱 향상시키기 위해 사전 학습된 시각 인코더를 활용할 것을 제안합니다. 제안 접근은 상당한 성능 향상을 달성하며, 실제 환경에서 AI가 생성한 이미지 감지를 위해 데이터셋 정렬의 중요성을 강조합니다."
    },
    {
        "title": "DIA: The Adversarial Exposure of Deterministic Inversion in Diffusion Models",
        "authors": [
            "Seunghoo Hong",
            "Geonho Son",
            "Juhun Lee",
            "Simon S. Woo"
        ],
        "venue_full": "International Conference on Computer Vision",
        "venue": "ICCV",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            4
        ],
        "year": 2025,
        "links": {
            "conf": "https://doi.org/10.48550/arxiv.2510.00778"
        },
        "img": "/img/Publications/DIA-ICCV2025.png",
        "abstract": "Diffusion models have shown to be strong representation learners, showcasing state-of-the-art performance across multiple domains. Aside from accelerated sampling, DDIM also enables the inversion of real images back to their latent codes. A direct inheriting application of this inversion operation is real image editing, where the inversion yields latent trajectories to be utilized during the synthesis of the edited image. Unfortunately, this practical tool has enabled malicious users to freely synthesize misinformative or deepfake contents with greater ease, which promotes the spread of unethical and abusive, as well as privacy-, and copyright-infringing contents. While defensive algorithms such as AdvDM and Photoguard have been shown to disrupt the diffusion process on these images, the misalignment between their objectives and the iterative denoising trajectory at test time results in weak disruptive performance.In this work, we present the DDIM Inversion Attack (DIA) that attacks the integrated DDIM trajectory path. Our results support the effective disruption, surpassing previous defensive methods across various editing methods. We believe that our frameworks and results can provide practical defense methods against the malicious use of AI for both the industry and the research community.",
        "abstract_ko": "확산 모델은 강력한 표현 학습자로서 여러 분야에서 최첨단 성능을 보여주고 있습니다. 가속 샘플링 외에도, DDIM은 실제 이미지를 잠재 코드로 되돌리는 역변환을 가능하게 합니다. 이 역변환 연산의 직접적인 응용은 실제 이미지 편집으로, 역변환을 통해 편집된 이미지 합성 과정에서 활용될 잠재 궤적이 생성됩니다. 안타깝게도, 이 실용적인 도구는 악의적인 사용자가 잘못된 정보나 딥페이크 콘텐츠를 더 쉽게 합성할 수 있도록 허용하여 비윤리적이고 학대적인 콘텐츠,뿐만 아니라 사생활 침해 및 저작권 침해 콘텐츠의 유포를 촉진하고 있습니다. AdvDM 및 Photoguard와 같은 방어 알고리즘이 이러한 이미지의 확산 과정을 방해하는 것으로 나타났지만, 테스트 시점에서 이들의 목표와 반복적 노이즈 제거 경로 간의 불일치로 인해 방해 성능이 약합니다. 본 연구에서는 통합된 DDIM 경로를 공격하는 DDIM 역전 공격(DIA)을 제안합니다. 본 연구 결과는 다양한 편집 방법에서 이전 방어 방법을 능가하는 효과적인 방해를 뒷받침합니다. 본 연구에서는 제안 프레임워크와 결과가 산업 및 연구 공동체 모두에서 AI의 악의적 사용에 대한 실질적인 방어 방법을 제공할 수 있다고 믿습니다."
    },
    {
        "title": "Translation of Text Embedding via Delta Vector to Suppress Strongly Entangled Content in Text-to-Image Diffusion Models",
        "authors": [
            "Seunghoo Hong†",
            "Eunseo Koh†",
            "Tae-Young Kim†",
            "Jae-Pil Heo",
            "Simon S. Woo"
        ],
        "venue_full": "International Conference on Computer Vision",
        "venue": "ICCV",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            4
        ],
        "year": 2025,
        "links": {},
        "img": "/img/Publications/SSDV.png",
        "abstract": "Text-to-Image (T2I) diffusion models have made significant progress in generating diverse high-quality images from textual prompts. However, these models still face challenges in suppressing content that is strongly entangled with specific words. For example, when generating an image of \"Charlie Chaplin\", a \"mustache\" consistently appears even if explicitly instructed not to include it, as the concept of \"mustache\" is strongly entangled with \"Charlie Chaplin\". To address this issue, we propose a novel approach to directly suppress such entangled content within the text embedding space of diffusion models. Our method introduces a delta vector that modifies the text embedding to weaken the influence of undesired content in the generated image, and we further demonstrate that this delta vector can be easily obtained through a zero-shot approach. Furthermore, we propose a Selective Suppression with Delta Vector (SSDV) method to adapt the delta vector into the cross-attention mechanism, enabling more effective suppression of unwanted content in regions where it would otherwise be generated. Additionally, we enabled more precise suppression in personalized T2I models by optimizing the delta vector, which previous baselines were unable to achieve. Extensive experimental results demonstrate that our approach significantly outperforms existing methods, both in terms of quantitative and qualitative metrics.",
        "abstract_ko": "텍스트-투-이미지(T2I) 확산 모델은 텍스트 프롬프트로부터 다양한 고품질 이미지를 생성하는 데 있어 상당한 진전을 이루었습니다. 그러나 이러한 모델은 특정 단어와 강하게 얽혀 있는 콘텐츠를 억제하는 데 여전히 어려움을 겪고 있습니다. 예를 들어, '찰리 채플린'의 이미지를 생성할 때, '수염'은 명시적으로 포함하지 말라고 지시해도 지속적으로 나타나는데, 이는 '수염'이라는 개념이 '찰리 채플린'과 강하게 얽혀 있기 때문입니다. 이러한 문제를 해결하기 위해, 본 연구에서는 확산 모델의 텍스트 임베딩 공간 내에서 이러한 얽힌 콘텐츠를 직접 억제하는 새로운 접근 방식을 제안합니다. 제안 방법은 생성된 이미지에서 원치 않는 콘텐츠의 영향을 약화시키기 위해 텍스트 임베딩을 수정하는 델타 벡터를 도입하며, 또한 이 델타 벡터가 제로샷 접근 방식을 통해 쉽게 얻어질 수 있음을 추가로 보여줍니다. 또한, 본 연구에서는 델타 벡터를 크로스-어텐션 메커니즘에 적용하여 원하지 않는 콘텐츠가 생성될 수 있는 영역에서 보다 효과적으로 억제할 수 있도록 하는 델타 벡터 선택적 억제(Selective Suppression with Delta Vector, SSDV) 방법을 제안합니다. 추가로, 이전의 기준 모델들이 달성하지 못했던 델타 벡터 최적화를 통해 개인화된 T2I 모델에서도 보다 정밀한 억제를 가능하게 하였습니다. 광범위한 실험 결과는 정량적 및 정성적 지표 모두에서 제안 접근이 기존 방법보다 현저히 뛰어남을 보여줍니다."
    },
    {
        "title": "SpecGuard: Spectral Projection-based Advanced InvisibleWatermarking",
        "authors": [
            "Inzamamul Alam",
            "Md Tanvir Islam",
            "Khan Muhammad",
            "Simon S. Woo"
        ],
        "venue_full": "International Conference on Computer Vision",
        "venue": "ICCV",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            4
        ],
        "year": 2025,
        "links": {},
        "img": "/img/Publications/ProposedModel-01.jpg",
        "abstract": "Watermarking embeds imperceptible patterns into images for authenticity verification. However, existing methods often lack robustness against various transformations primar ily including distortions, image regeneration, and adver sarial perturbation, creating real-world challenges. In this work, we introduce SpecGuard, a novel watermarking ap proach for robust and invisible image watermarking. Un like prior approaches, we embed the message inside hid den convolution layers by converting from the spatial do main to the frequency domain using spectral projection of a higher frequency band that is decomposed by wavelet pro jection. Spectral projection employs Fast Fourier Trans form approximation to transform spatial data into the fre quency domain efficiently. In the encoding phase, a strength factor enhances resilience against diverse attacks, includ ing adversarial, geometric, and regeneration-based distor tions, ensuring the preservation of copyrighted information. Meanwhile, the decoder leverages Parseval’s theorem to ef fectively learn and extract the watermark pattern, enabling accurate retrieval under challenging transformations. We evaluate the proposed SpecGuard based on the embedded watermark’s invisibility, capacity, and robustness. Compre hensive experiments demonstrate the proposed SpecGuard outperforms the state-of-the-art models.",
        "abstract_ko": "워터마킹은 이미지에 눈에 보이지 않는 패턴을 삽입하여 진위 확인을 가능하게 합니다. 그러나 기존 방법들은 주로 왜곡, 이미지 재생성, 적대적 섭동을 포함한 다양한 변형에 대해 강인성이 부족하여 실제 환경에서 문제를 야기합니다. 본 연구에서는 SpecGuard라는 강인하고 보이지 않는 이미지 워터마킹을 위한 새로운 워터마킹 접근법을 소개합니다. 이전 접근법과 달리, 본 연구에서는 메시지를 은닉된 컨볼루션 레이어 안에 삽입하며, 공간 영역에서 주파수 영역으로 변환하기 위해 높은 주파수 대역의 스펙트럴 프로젝션을 이용합니다. 이 높은 주파수 대역은 웨이브렛 프로젝션으로 분해됩니다. 스펙트럴 프로젝션은 패스트 푸리에 변환 근사를 사용하여 공간 데이터를 주파수 영역으로 효율적으로 변환합니다. 인코딩 단계에서 강도 요소는 적대적, 기하학적, 재생 기반 왜곡을 포함한 다양한 공격에 대한 회복력을 향상시켜 저작권 정보의 보존을 보장합니다. 한편, 디코더는 파르세발 정리를 활용하여 워터마크 패턴을 효과적으로 학습하고 추출함으로써 어려운 변형 조건에서도 정확한 복원을 가능하게 합니다. 본 연구에서는 내재된 워터마크의 불가시성, 용량, 그리고 강인성을 기반으로 제안된 SpecGuard를 평가합니다. 종합적인 실험을 통해 제안된 SpecGuard가 최신 모델보다 뛰어남을 입증합니다."
    },
    {
        "title": "HiDF: A Human-Indistinguishable Deepfake Dataset",
        "authors": [
            "Chaewon Kang",
            "Seoyoon Jeong",
            "Jonghyun Lee",
            "Daejin Choi",
            "Simon S. Woo",
            "Jinyoung Han"
        ],
        "venue_full": "ACM SIGKDD Conference on Knowledge Discovery and Data Mining",
        "venue": "KDD",
        "track": "Dataset Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            4
        ],
        "year": 2025,
        "links": {
            "conf": "https://doi.org/10.1145/3711896.3737399"
        },
        "img": "/img/Publications/KDD2025_HiDF.png",
        "abstract": "The rapid development and prevalence of generative AI have made it easy for people to create high-quality deepfake images and videos, but their abuses have also increased exponentially. To mitigate potential social disruption, it is crucial to quickly detect the authenticity of each deepfake content hidden in a sea of information. While researchers have worked on developing deep learning-based methods, the deepfake datasets utilized in these studies are far from the real world in terms of their qualities; most popular deepfake datasets are human-distinguishable. To address this problem, we present a novel deepfake dataset, HiDF, a high-quality and humanindistinguishable deepfake dataset consisting of 62 K images and 8 K videos. HiDF is a meticulously curated dataset that includes diverse subjects that have undergone rigorous quality checks. A comparison of the quality between HiDF and existing deepfake datasets demonstrates that HiDF is human-indistinguishable. Hence, it can be a valuable benchmark dataset for deepfake detection tasks.",
        "abstract_ko": "생성형 AI의 급속한 발전과 보편화로 인해 사람들이 고품질 딥페이크 이미지와 영상을 쉽게 만들 수 있게 되었지만, 그 남용도 기하급수적으로 증가했습니다. 잠재적인 사회적 혼란을 완화하기 위해, 정보의 바다 속에 숨겨진 딥페이크 콘텐츠 각각의 진위를 신속하게 감지하는 것이 매우 중요합니다. 연구자들이 딥러닝 기반 방법 개발에 노력해 왔지만, 이러한 연구에서 사용되는 딥페이크 데이터셋은 품질 면에서 현실 세계와는 거리가 멉니다; 대부분의 인기 있는 딥페이크 데이터셋은 인간이 구별할 수 있습니다. 이 문제를 해결하기 위해, 본 연구에서는 HiDF라는 새로운 딥페이크 데이터셋을 제시합니다. HiDF는 62,000장의 이미지와 8,000편의 영상으로 구성된 고품질이면서 인간이 구별할 수 없는 딥페이크 데이터셋입니다. HiDF는 다양한 주제를 포함하고 있으며 철저한 품질 검사를 거친 세심하게 큐레이션된 데이터셋입니다. HiDF와 기존 딥페이크 데이터셋 간의 품질 비교는 HiDF가 인간이 구별할 수 없음을 보여줍니다. 따라서 이는 딥페이크 탐지 작업을 위한 가치 있는 벤치마크 데이터셋이 될 수 있습니다."
    },
    {
        "title": "SEE: Spherical Embedding Expansion for Improving Deep Metric Learning (Extended Abstract)",
        "authors": [
            "Binh M. Le",
            "Simon S. Woo"
        ],
        "venue_full": "International Joint Conference on Artificial Intelligence",
        "venue": "IJCAI",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2025,
        "links": {
            "conf": "https://doi.org/10.24963/ijcai.2024/1214"
        },
        "img": "/img/Publications/binhle_pakdd2024.png",
        "abstract": "We introduce the Spherical Embedding Expansion (SEE) method. SEE aims to uncover the latent semantic variations in training data. Especially, our method augments the embedding space with synthetic representations based on Max-Mahalanobis distribution (MMD) centers, which maximize the dispersion of these synthetic features without increasing computational costs.We evaluated the efficacy of SEE on four renowned standard benchmarks for the image retrieval task. The results demonstrate that SEE consistently enhances the performance of conventional methods when integrated with them, setting a new benchmark for deep metric learning performance across all settings.",
        "abstract_ko": "본 연구에서는 Spherical Embedding Expansion(SEE) 방법을 소개합니다. SEE는 훈련 데이터에서 잠재적 의미 변이를 밝혀내는 것을 목표로 합니다. 특히, 제안 방법은 Max-Mahalanobis 분포(MMD) 중심을 기반으로 한 합성 표현을 통해 임베딩 공간을 확장하며, 계산 비용을 증가시키지 않고 이러한 합성 특징의 분산을 극대화합니다. 본 연구에서는 이미지 검색 작업을 위한 네 가지 잘 알려진 표준 벤치마크에서 SEE의 효능을 평가했습니다. 결과는 SEE가 기존 방법과 통합될 때 일관되게 성능을 향상시키며, 모든 설정에서 딥 메트릭 학습 성능의 새로운 기준을 설정함을 보여줍니다."
    },
    {
        "title": "Toward a robust approach to multivariate time series anomaly detection",
        "authors": [
            "Jungwook Shon",
            "Simon S. Woo"
        ],
        "venue_full": "Metrology, Inspection, and Process Control XXXIX",
        "venue": "JM3",
        "track": "SCIE Journal",
        "presentationType": null,
        "Factor": [
            "SCIE IF =",
            1.5
        ],
        "year": 2025,
        "links": {
            "conf": "https://doi.org/10.1117/12.3050401"
        },
        "img": "/img/Publications/SPIE_jw.png",
        "abstract": "Anomaly detection in semiconductor manufacturing is critical for maintaining yield and reducing costs, especially in high-volume production environments where inspections are resource-intensive. This study presents a robust, unsupervised deep learning framework for multivariate anomaly detection that addresses limitations of existing Fault Detection and Classification (FDC) systems. The proposed approach leverages a Transformer-based model enhanced with Aggregated z-normalization to mitigate distribution drift, and employs Peaks-Over-Threshold (POT) for adaptive thresholding. The framework achieved an F1 score of 0.9827 and a precision of 0.9866 on semiconductor datasets, with minimal false alarms validated through extensive ablation studies. The solution is designed for scalability and adaptability in industrial settings, with future work focused on improving detection of single-spike anomalies and borderline cases to enhance operational reliability.",
        "abstract_ko": "반도체 제조에서 이상 탐지는 수율을 유지하고 비용을 절감하는 데 매우 중요하며, 특히 검사에 많은 자원이 필요한 대량 생산 환경에서 더 그렇습니다. 본 연구는 기존의 결함 검출 및 분류(FDC) 시스템의 한계를 해결하는 다변량 이상 탐지를 위한 강력한 비지도 딥러닝 프레임워크를 제시합니다. 제안된 접근법은 분포 이동을 완화하기 위해 집계 z-정규화를 강화한 트랜스포머 기반 모델을 활용하며, 적응형 임계값 설정을 위해 임계값 초과(Peaks-Over-Threshold, POT)를 사용합니다. 이 프레임워크는 반도체 데이터셋에서 F1 점수 0.9827과 정밀도 0.9866을 달성했으며, 광범위한 제거(ablation) 연구를 통해 최소한의 오경보가 검증되었습니다. 이 솔루션은 산업 환경에서의 확장성과 적응성을 위해 설계되었으며, 향후 작업은 운영 신뢰성을 향상시키기 위해 단일 스파이크 이상 및 경계 사례의 감지 개선에 중점을 둘 예정입니다."
    },
    {
        "title": "Self-Disclosure of Mental Health via Deepfakes: Testing the Effects of Self-Deepfakes on Affective Resistance and Intentions to Seek Mental Health Support",
        "authors": [
            "Jiyoung Lee",
            "Christopher Michael Dobmeier",
            "Minji Heo",
            "Simon S. Woo"
        ],
        "venue_full": "International Conference on Computational Social Science",
        "venue": "IC2S2",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2025,
        "links": {},
        "img": "/img/Publications/self_disclosure.png",
        "abstract": "Theoretically, the current study revisits traditional video self-modeling approaches, which leverage the self-referencing effect to enhance engagement, within the context of deepfake technology by integrating the self-referencing effect and the uncanny valley effect. This study reveals that the synthesized nature of self-representations in deepfakes introduces artificiality that triggers discomfort, thereby increasing resistance to mental health self-disclosure messages. This discomfort underscores a significant limitation of deepfake technology in sensitive contexts, as individuals—especially those with higher baseline levels of mental health who find greater relevance to the topic—may be reluctant to engage with messages that present uncanny or distorted self-representations. Our findings emphasize the importance of future research to systematically investigate the boundaries of self-referencing in AI-driven synthetic media, focusing on how the degree of resemblance influences perceptions of personal relevance, evokes emotional resistance, and varies across individual differences. Furthermore, as deepfake technology finds its way into the healthcare sector, practitioners must remain mindful that while it offers innovative possibilities, it may also stir emotional resistance.",
        "abstract_ko": "이론적으로, 본 연구는 자기 참조 효과를 활용하여 참여도를 높이는 전통적인 비디오 자기 모델링 접근법을 딥페이크 기술의 맥락에서 자기 참조 효과와 언캐니 밸리 효과를 통합함으로써 재검토한다. 본 연구는 딥페이크에서 자기 표현의 합성된 특성이 인공성을 도입하여 불편감을 유발하고, 그 결과 정신 건강 자기 공개 메시지에 대한 저항을 증가시킨다는 점을 보여준다. 이러한 불편감은 특히 정신 건강 기본 수준이 높은 사람들이 주제와 큰 관련성을 느낄 때, 언캐니하거나 왜곡된 자기 표현을 제시하는 메시지에 참여하기를 꺼릴 수 있다는 점에서 민감한 맥락에서 딥페이크 기술의 중요한 한계를 강조한다. 우리의 연구 결과는 AI 기반 합성 미디어에서 자기 참조의 경계를 체계적으로 조사하기 위한 향후 연구의 중요성을 강조하며, 유사성의 정도가 개인적 관련성 인식에 어떻게 영향을 미치고, 감정적 저항을 불러일으키며, 개인차에 따라 어떻게 달라지는지에 초점을 맞추어야 함을 보여준다. 또한 딥페이크 기술이 의료 분야에 도입됨에 따라, 실무자들은 혁신적인 가능성을 제공하는 동시에 감정적 저항을 일으킬 수 있다는 점을 염두에 두어야 한다."
    },
    {
        "title": "SoK: Systematization and Benchmarking of Deepfake Detectors in a Unified Framework",
        "authors": [
            "Binh M. Le",
            "Jiwon Kim",
            "Simon S. Woo",
            "Kristen Moore",
            "Alsharif Abuadbba",
            "Shahroz Tariq"
        ],
        "venue_full": "IEEE European Symposium on Security and Privacy",
        "venue": "EuroS&P",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2025,
        "links": {
            "conf": "https://doi.org/10.1109/eurosp63326.2025.00055"
        },
        "img": "/img/Publications/2025_EuroS&P.png",
        "abstract": "This paper extensively reviews and analyzes state-of-the-art deepfake detectors, evaluating them against several critical criteria. These criteria categorize detectors into 4 high-level groups and 13 fine-grained sub-groups, aligned with a unified conceptual framework we propose. This classification offers practical insights into the factors affecting detector efficacy. We evaluate the generalizability of 16 leading detectors across comprehensive attack scenarios, including black-box, white-box, and gray-box settings. Our systematized analysis and experiments provide a deeper understanding of deepfake detectors and their generalizability, paving the way for future research and the development of more proactive defenses against deepfakes.",
        "abstract_ko": "본 논문은 최첨단 딥페이크 탐지기를 광범위하게 검토하고 분석하며, 여러 중요한 기준에 따라 평가합니다. 이러한 기준은 탐지기를 우리가 제안하는 통합 개념적 프레임워크와 일치하도록 4개의 고수준 그룹과 13개의 세분화된 하위 그룹으로 분류합니다. 이 분류는 탐지기 효율에 영향을 미치는 요인에 대한 실질적인 통찰을 제공합니다. 본 연구에서는 블랙박스, 화이트박스, 그레이박스 환경을 포함한 종합적인 공격 시나리오에서 16개의 주요 탐지기의 일반화 가능성을 평가합니다. 우리 체계적인 분석과 실험은 딥페이크 탐지기와 그 일반화 능력에 대한 더 깊은 이해를 제공하며, 향후 연구와 딥페이크에 대한 보다 선제적인 방어 개발의 길을 열어줍니다."
    },
    {
        "title": "Towards Safe Synthetic Image Generation On the Web: A Multimodal Robust NSFW Defense and Million Scale Dataset",
        "authors": [
            "Muhammad Shahid Muneer",
            "Simon S. Woo"
        ],
        "venue_full": "ACM Web Conference",
        "venue": "WWW",
        "track": "Short Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            3
        ],
        "year": 2025,
        "links": {
            "conf": "https://doi.org/10.1145/3701716.3715526"
        },
        "img": "/img/Publications/WWW2025_shahid.jpg",
        "abstract": "Defensive mechanisms such as NSFW and post-hoc security filters are implemented in T2I models to mitigate the misuse of T2I models and develop a safe online ecosystem for web users. However, recent work unveiled how these methods can easily fail to prevent misuse. In particular, careful adversarial attacks on text and image modalities can easily outplay defensive measures. Moreover, there is no robust millionscale multimodal NSFW dataset with both prompt and image pairs with adversarial examples. In this work, we propose a large-scale prompt and image dataset, generated using open-source diffusion models. Also, we develop a multimodal classification model to distinguish safe and NSFW text and images, which has robustness against adversarial attacks, and directly alleviates the current challenges. Our extensive experimental results show that our model shows good performance against existing SOTA NSFW detection methods in terms of accuracy and recall, and drastically reduced the Attack Success Rate (ASR) in multimodal adversarial attack scenarios.",
        "abstract_ko": "NSFW 및 사후 보안 필터와 같은 방어 메커니즘은 T2I 모델의 오용을 완화하고 웹 사용자를 위한 안전한 온라인 생태계를 개발하기 위해 T2I 모델에 구현됩니다. 그러나 최근 연구에서는 이러한 방법들이 오용을 방지하는 데 쉽게 실패할 수 있음이 밝혀졌습니다. 특히, 텍스트 및 이미지 모달리티에 대한 신중한 적대적 공격은 방어 조치를 쉽게 뛰어넘을 수 있습니다. 또한, 적대적 예제를 포함한 프롬프트와 이미지 쌍을 모두 갖춘 수백만 규모의 견고한 멀티모달 NSFW 데이터셋은 존재하지 않습니다. 본 연구에서는 오픈 소스 확산 모델을 사용하여 생성된 대규모 프롬프트 및 이미지 데이터셋을 제안합니다. 또한, 적대적 공격에 대해 견고하며 안전한 텍스트와 NSFW 이미지를 구분할 수 있는 멀티모달 분류 모델을 개발하여 현재의 문제를 직접적으로 완화합니다. 우리의 광범위한 실험 결과는 제안 모델이 정확도와 재현율 측면에서 기존 SOTA NSFW 탐지 방법에 대해 우수한 성능을 보이며, 다중모달 적대적 공격 시나리오에서 공격 성공률(ASR)을 대폭 감소시켰음을 보여줍니다."
    },
    {
        "title": "Fairness and Robustness in Machine Unlearning",
        "authors": [
            "Khoa Tran",
            "Simon S. Woo"
        ],
        "venue_full": "ACM Web Conference",
        "venue": "WWW",
        "track": "Short Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            3
        ],
        "year": 2025,
        "links": {
            "conf": "https://doi.org/10.1145/3701716.3715598"
        },
        "img": "/img/Publications/WWW2025_khoa.png",
        "abstract": "Our study presents fairness Conjectures for a well-trained model, based on the variance-bias trade-off characteristic, and considers their relevance to robustness. Our Conjectures are supported by experiments conducted on the two most widely used model architectures—ResNet and ViT—demonstrating the correlation between fairness and robustness: the higher fairness-gap is, the more the model is sensitive and vulnerable. In addition, our experiments demonstrate the vulnerability of current state-of-the-art approximated unlearning algorithms to adversarial attacks, where their unlearned models suffer a significant drop in accuracy compared  to the exact-unlearned models.We claim that our fairness-gap measurement and robustness metric should be used to evaluate the unlearning algorithm. Furthermore, we demonstrate that unlearning in the intermediate and last layers is sufficient and cost-effective for time and memory complexity.",
        "abstract_ko": "우리 연구는 잘 학습된 모델에 대한 공정성 추측을 분산-편향(trade-off) 특성에 기반하여 제시하고, 이들이 강건성(robustness)과의 관련성을 고려한다. 우리의 추측은 가장 널리 사용되는 두 가지 모델 아키텍처인 ResNet과 ViT에서 수행된 실험을 통해 뒷받침되며, 공정성과 강건성 사이의 상관관계를 보여준다: 공정성 격차(fairness-gap)가 클수록 모델은 더 민감하고 취약하다. 또한, 우리 실험은 최첨단 근사적 언러닝(unlearning) 알고리즘이 적대적 공격(adversarial attacks)에 얼마나 취약한지를 보여주며, 이들 알고리즘에서 언러닝된(unlearned) 모델은 정확하게 언러닝된(exact-unlearned) 모델에 비해 정확도가 크게 떨어진다. 본 연구에서는 공정성 격차 측정(fairness-gap measurement)과 강건성 지표(robustness metric)가 언러닝 알고리즘 평가에 사용되어야 한다고 주장한다. 더 나아가, 본 연구에서는 중간 및 마지막 층에서의 언러닝이 시간 및 메모리 복잡성 측면에서 충분하고 비용 효율적임을 보여준다."
    },
    {
        "title": "Saliency-Aware Diffusion Reconstruction for Effective Invisible Watermark Removal",
        "authors": [
            "Inzamamul Alam",
            "Md Tanvir Islam",
            "Simon S. Woo"
        ],
        "venue_full": "ACM Web Conference",
        "venue": "WWW",
        "track": "Short Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            3
        ],
        "year": 2025,
        "links": {
            "conf": "https://doi.org/10.1145/3701716.3715519"
        },
        "img": "/img/Publications/WWW2025_inzi.png",
        "abstract": "This paper introduces a novel Saliency-Aware Diffusion Reconstruction (SADRE) framework for watermark elimination on the web, combining adaptive noise injection, region-specific perturbations, and advanced diffusion-based reconstruction. SADRE disrupts embedded watermarks by injecting targeted noise into latent representations guided by saliency masks although preserving essential image features. A reverse diffusion process ensures high-fidelity image restoration, leveraging adaptive noise levels determined by watermark strength. Our framework is theoretically grounded with stability guarantees and achieves robust watermark removal across diverse scenarios. Empirical evaluations on state-of-the-art (SOTA) watermarking techniques demonstrate SADRE’s superiority in balancing watermark disruption and image quality, achieving the best performance in PSNR, SSIM, Wasserstein Distance, and Bit Recovery Accuracy. By bridging the gap between theoretical robustness and practical effectiveness, SADRE sets a new benchmark for watermark elimination, offering a flexible and reliable solution for real-world web contents.",
        "abstract_ko": "본 논문은 적응형 노이즈 주입, 영역별 교란, 고급 확산 기반 재구성을 결합하여 웹상 워터마크 제거를 위한 새로운 주목도 인식 확산 재구성(SADRE) 프레임워크를 소개한다. SADRE는 주목도 마스크에 의해 안내된 잠재 표현에 표적 노이즈를 주입하여 내장된 워터마크를 교란시키면서 필수 이미지 특징은 보존한다. 역확산 과정은 워터마크 강도에 따라 결정된 적응형 노이즈 수준을 활용하여 높은 충실도의 이미지 복원을 보장한다. 본 프레임워크는 안정성 보장을 갖춘 이론적 기반을 가지며, 다양한 시나리오에서 강력한 워터마크 제거를 달성한다. 최신(최고 수준, SOTA) 워터마킹 기술에 대한 경험적 평가에서 SADRE는 워터마크 파괴와 이미지 품질의 균형에서 우수함을 보여주며, PSNR, SSIM, Wasserstein 거리, 비트 복원 정확도에서 최고의 성능을 달성합니다. 이론적 강인성과 실질적 효과 사이의 격차를 연결함으로써, SADRE는 워터마크 제거에 대한 새로운 기준을 설정하며, 실제 웹 콘텐츠에 대해 유연하고 신뢰할 수 있는 솔루션을 제공합니다."
    },
    {
        "title": "GAN or DM? In-depth Analysis and Evaluation of AI-generated Face Data for Generalizable Deepfake Detection",
        "authors": [
            "Hyeongjun Choi",
            "Simon S. Woo"
        ],
        "venue_full": "ACM SIGAPP Symposium on Applied Computing",
        "venue": "SAC",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2025,
        "links": {
            "conf": "https://doi.org/10.1145/3672608.3707733"
        },
        "img": "/img/Publications/SAC_hyeongjun.jpg",
        "abstract": "In this work, we train popular deep neural networks using face data generated by various generative models and thoroughly analyze their generalizability. Our results reveal significant differences in model performance based on the forgery method used to generate the training data. Notably, we identify specific scenarios that significantly enhance model generalization, contradicting previous research finding that models trained on DM-generated data would achieve higher generalization performance than those trained on GAN-generated data. These findings emphasize the crucial role of training data selection in enhancing the generalization capabilities of deepfake detectors. By strategically selecting and combining datasets, we can develop more robust detection systems, laying a foundation for future research in creating reliable and universal deepfake detection methods",
        "abstract_ko": "본 연구에서는 다양한 생성 모델로 생성된 얼굴 데이터를 사용하여 인기 있는 딥 뉴럴 네트워크를 학습시키고, 그 일반화 능력을 철저히 분석합니다. 본 연구 결과는 학습 데이터 생성에 사용된 위조 방법에 따라 모델 성능에서 상당한 차이가 있음을 보여줍니다. 특히, 본 연구에서는 모델 일반화를 크게 향상시키는 특정 시나리오를 확인했으며, 이는 DM으로 생성된 데이터로 학습한 모델이 GAN으로 생성된 데이터로 학습한 모델보다 더 높은 일반화 성능을 달성한다는 기존 연구 결과와 상반됩니다. 이러한 발견은 딥페이크 탐지기의 일반화 능력을 향상시키는 데 있어 학습 데이터 선택이 중요한 역할을 한다는 점을 강조합니다. 데이터셋을 전략적으로 선택하고 결합함으로써 본 연구에서는 더 강력한 탐지 시스템을 개발할 수 있으며, 신뢰할 수 있고 보편적인 딥페이크 탐지 방법을 개발하기 위한 미래 연구의 기반을 마련할 수 있습니다."
    },
    {
        "title": "X3A: Efficient Multimodal Deepfake Detection with Score-Level Fusion",
        "authors": [
            "Chan Park",
            "Bohyun Moon",
            "Minsun Jeon",
            "Jee-weon Jung",
            "Simon S. Woo"
        ],
        "venue_full": "ACM SIGAPP Symposium on Applied Computing",
        "venue": "SAC",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2025,
        "links": {
            "conf": "https://doi.org/10.1145/3672608.3707934"
        },
        "img": "/img/Publications/Park_SCD_2025.png",
        "abstract": "In this work, we propose X3A, an efficient multimodal video deepfake detection model exploiting two powerful unimodal models with probabilistic score-level fusion. X3A leverages the advantage of using raw visual and audio inputs without relying on hand-crafted features. We conducted the extensive experiments on multiple different multimodal deepfake benchmark datasets and achieved superior performance on multimodal deepfake detection, successively detecting entirely and partially manipulated scenarios. Our X3A model demonstrates an accuracy of 0.9960 AUC of 0.9999 on the most challenging AVDeepfake1M benchmark, surpassing all existing models.",
        "abstract_ko": "본 연구에서는 확률적 점수 수준 융합을 활용한 두 개의 강력한 단일 모달 모델을 이용하는 효율적인 멀티모달 비디오 딥페이크 탐지 모델 X3A를 제안합니다. X3A는 수작업으로 만든 특징에 의존하지 않고 원시 시각 및 오디오 입력을 사용하는 장점을 활용합니다. 본 연구에서는 여러 다른 멀티모달 딥페이크 벤치마크 데이터셋에서 광범위한 실험을 수행하였으며, 멀티모달 딥페이크 탐지에서 뛰어난 성능을 달성하고, 완전히 및 부분적으로 조작된 시나리오를 연속적으로 탐지했습니다. 우리의 X3A 모델은 가장 어려운 AVDeepfake1M 벤치마크에서 정확도 0.9960, AUC 0.9999를 달성하여 기존의 모든 모델을 능가합니다."
    },
    {
        "title": "High-Fidelity Face Age Transformation via Hierarchical Encoding and Contrastive Learning",
        "authors": [
            "Hakjun Moon",
            "Dayeon Woo",
            "Simon S. Woo"
        ],
        "venue_full": "ACM SIGAPP Symposium on Applied Computing",
        "venue": "SAC",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2025,
        "links": {
            "conf": "https://doi.org/10.1145/3672608.3707795"
        },
        "img": "/img/Publications/Moon_SCD_2025.png",
        "abstract": "We introduce a novel GAN-based face age transformation framework utilizing Hierarchical Encoding and Contrastive Learning (HECL). Specifically, we incorporate a multi-level encoder that extracts and analyzes age-related features at different levels of detail, such as facial texture, structure, and skin tone.\n We also combined a contrastive learning approach in the discriminator to finetune the differentiation between age groups. These modifications enhance identity preservation and provide better control over aging through strategic loss functions, addressing shortcomings in existing models, which often struggle with modifying subtle face and hair texture, color, or volume during age progression. HECL outperforms SOTA models in realism and versatility, generating high-quality face images. We demonstrate superior identity preservation performance in metrics, also receiving better qualitative approval from human evaluators.",
        "abstract_ko": "본 연구에서는 계층적 인코딩(Hierarchical Encoding)과 대조 학습(Contrastive Learning, HECL)을 활용한 새로운 GAN 기반 얼굴 나이 변환 프레임워크를 소개합니다. 구체적으로, 본 연구에서는 얼굴의 질감, 구조, 피부 톤과 같은 다양한 세부 수준에서 나이 관련 특징을 추출하고 분석하는 다중 수준 인코더를 통합했습니다. 또한 판별기에서 대조 학습 접근법을 결합하여 연령 그룹 간 구분을 미세 조정했습니다. 이러한 수정은 정체성 보존을 향상시키고 전략적 손실 함수를 통해 노화에 대한 더 나은 제어를 제공하여, 기존 모델이 나이 진행 중 얼굴과 머리카락의 미세 질감, 색상, 부피를 변경하는 데 종종 어려움을 겪는 문제를 해결합니다. HECL은 사실감과 다재다능성 측면에서 최첨단(SOTA) 모델을 능가하며, 고품질 얼굴 이미지를 생성합니다. 본 연구에서는 지표에서 우수한 정체성 유지 성능을 입증했으며, 인간 평가자들로부터 더 나은 질적 평가도 받았습니다."
    },
    {
        "title": "Development of Deep Learning-Based Algorithm for Extracting Abnormal Deceleration Patterns",
        "authors": [
            "Youngho Jun",
            "Minha Kim",
            "Kangjun Lee",
            "Simon S. Woo"
        ],
        "venue_full": "World Electric Vehicle Journal",
        "venue": "WEVJ",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "SCIE IF =",
            2.6
        ],
        "year": 2025,
        "links": {
            "conf": "https://doi.org/10.3390/wevj16010037"
        },
        "img": "/img/Publications/Jun_WEVJ_2025.png",
        "abstract": "The smart regenerative braking system for EV can reduce unnecessary brake operation by assisting in braking of the vehicle according to the driving situation, road slope, and driver’s preference. This system maintains the distance between the ego and front vehicles without controlling the brake pedal. Since the strength of regenerative braking is generally determined based on calibration data determined during the vehicle development process, some driver could suffer inconvenience when the regenerative braking is activated differently from their driving habits. In order to solve this problem, various deep learning-based algorithms are developed to provide driving stability by learning the driving data. Among those artificial intelligence algorithms, anomaly detection algorithms can successfully separate the deceleration data in abnormal driving situations, and the resulting refined deceleration data can be used to train the regression model to achieve better driving stability. This study evaluates the performance of a personalized driving assistance system by applying driver characteristic data, obtained through an anomaly detection algorithm, to vehicle control.",
        "abstract_ko": "EV용 스마트 회생 제동 시스템은 주행 상황, 도로 경사, 운전자의 선호도에 따라 차량 제동을 지원하여 불필요한 브레이크 작동을 줄일 수 있습니다. 이 시스템은 브레이크 페달을 제어하지 않고도 자차와 전방 차량 사이의 거리를 유지합니다. 일반적으로 회생 제동의 강도는 차량 개발 과정에서 결정된 보정 데이터를 기반으로 결정되기 때문에 일부 운전자는 자신의 운전 습관과 다르게 회생 제동이 작동할 경우 불편을 겪을 수 있습니다. 이 문제를 해결하기 위해 다양한 딥러닝 기반 알고리즘이 운전 데이터를 학습하여 주행 안정성을 제공하도록 개발되었습니다. 그러한 인공지능 알고리즘 중에서 이상 감지 알고리즘은 이상 운전 상황에서의 감속 데이터를 성공적으로 분리할 수 있으며, 그 결과 정제된 감속 데이터는 회귀 모델을 학습시키는 데 사용되어 더 나은 운전 안정성을 달성할 수 있다. 본 연구는 이상 감지 알고리즘을 통해 얻은 운전자 특성 데이터를 차량 제어에 적용함으로써 개인화된 운전 지원 시스템의 성능을 평가한다."
    },
    {
        "title": "MIRACLE: Malware image recognition and classification by layered extraction",
        "authors": [
            "Inzamamul Alam",
            "Md. Samiullah",
            "S M Asaduzzaman",
            "Upama Kabir",
            "A. M. Aahad",
            "Simon S. Woo"
        ],
        "venue_full": "Data Mining and Knowledge Discovery",
        "venue": "DMKD",
        "track": "SCIE Journal",
        "presentationType": null,
        "Factor": [
            "SCIE IF =",
            5.3
        ],
        "year": 2025,
        "links": {
            "conf": "https://doi.org/10.1007/s10618-024-01078-z"
        },
        "img": "/img/Publications/DMKD_Figure_1.png",
        "abstract": "We propose a novel approach, Malware Image Recognition & Classification by Layered Extraction (MIRACLE), by implementing our own spatial convolutional neural network (Sp-CNN) with sufficient regularization and data augmentation to identify and classify malware in images effectively and efficiently. Our proposed method is developed based on analyzing malware binary structure, which is segmented as headers and section, symbolic information lies on section segment. Our Sp-CNN can extract that symbolic information from the top of the hidden layer constructively. We have evaluated our model with as MalImg, Microfsoft-Big, Malevis and Android Malware dataset. We achieved accuracy of 99.87% for MalImg, 99.81% for Microsoft-Big, and 99.22% for Malevis in our test dataset, respectively. Our proposed method surpasses Google's InceptionV3, ResNet50, EfficientNetB1, VGG16, VGG19, and other state-of-the-art (SOTA) methods in terms of performance.",
        "abstract_ko": "본 연구에서는 이미지에서 악성코드를 효과적이고 효율적으로 식별하고 분류하기 위해 충분한 정규화와 데이터 증강을 적용한 자체 공간 합성곱 신경망(Sp-CNN)을 구현하여 악성코드 이미지 인식 및 분류(레이어드 추출을 통한 MIRACLE)라는 새로운 접근 방식을 제안합니다. 제안된 방법은 헤더와 섹션으로 분할된 악성코드 바이너리 구조를 분석하여 개발되었으며, 기호 정보는 섹션 세그먼트에 위치합니다. 우리의 Sp-CNN은 숨겨진 층 상단에서 해당 기호 정보를 구조적으로 추출할 수 있습니다. 본 연구에서는 MalImg, Microsoft-Big, Malevis 및 Android Malware 데이터셋으로 모델을 평가했습니다. 테스트 데이터셋에서 MalImg는 99.87%, Microsoft-Big는 99.81%, Malevis는 99.22%의 정확도를 달성했습니다. 제안된 방법은 성능 면에서 구글의 InceptionV3, ResNet50, EfficientNetB1, VGG16, VGG19 및 기타 최첨단(SOTA) 방법들을 능가합니다."
    },
    {
        "title": "Synthetic Data Generation Research Trends",
        "authors": [
            "Minsun Jeon",
            "Simon S. Woo"
        ],
        "venue_full": "Conference on Information Security and Cryptography-Winter",
        "venue": "CISC-W",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2024,
        "links": {},
        "img": "/img/Publications/minsun_saftey_2.png",
        "abstract": "With the growing need to simultaneously address privacy protection and data utilization, synthetic data, a powerful anonymization technique, is gaining attention. This paper examines the types of synthetic data, key generation methods for different target subjects, and various application cases. Through this exploration, we aim to provide a more detailed understanding of synthetic data's advantages and potential applications, as well as insights into future research directions for expanding its use.",
        "abstract_ko": "개인정보 보호와 데이터 활용을 동시에 다룰 필요성이 커짐에 따라 강력한 익명화 기술인 합성 데이터가 주목을 받고 있다. 본 논문에서는 합성 데이터의 유형, 다양한 대상에 대한 주요 생성 방법, 그리고 여러 적용 사례를 검토한다. 이러한 탐구를 통해 합성 데이터의 장점과 잠재적 활용에 대한 보다 상세한 이해를 제공하고, 그 활용을 확대하기 위한 향후 연구 방향에 대한 통찰을 제공하고자 한다."
    },
    {
        "title": "Prioritizing Safety: A Two-Stage Not Safe For Work and Deepfake Detection Framework",
        "authors": [
            "Minsun Jeon",
            "Simon S. Woo"
        ],
        "venue_full": "Conference on Korean Artificial Intelligence Association",
        "venue": "KAIA",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2024,
        "links": {},
        "img": "/img/Publications/minsun_Safety.png",
        "abstract": "Deepfake content is being created automatically in large quantities, but it must still be reported manually by victims, making rapid responses difficult. Despite the prevalence of sexually exploitative deepfake, no existing approach has combined Not Safe For Work (NSFW) detection with deepfake detection. To address this issue, this study proposes a novel integrated process that first implements NSFW detection to assess urgency and identify sexual components before proceeding to deepfake detection. To verify the effectiveness of this process, we generated eight FaceSwap images. In addition, we utilized these images to evaluate the performance of the NSFW and deepfake detection models, achieving an accuracy of 87.5% and 100%, respectively. The results demonstrated the viability of a sequential detection approach. This research highlights the importance of combining NSFW and deepfake detection for more efficient and urgent content moderation, providing a practical tool for law enforcement and victim support organizations. In our findings, this research presents a paradigm that enables rapid responses to address the harms caused by deepfake content effectively and promotes a more proactive approach to content moderation.",
        "abstract_ko": "딥페이크 콘텐츠는 대량으로 자동으로 생성되고 있지만, 피해자가 직접 신고해야 하므로 신속한 대응이 어렵습니다. 성적 착취적 딥페이크가 만연해 있음에도 불구하고, 현재 어떤 접근법도 직장 적합하지 않은 검사(NSFW) 감지와 딥페이크 탐지를 결합한 사례가 없습니다. 이 문제를 해결하기 위해 본 연구는 먼저 NSFW 감지를 구현하여 긴급성을 평가하고 성적 요소를 식별한 후 딥페이크 탐지를 진행하는 새로운 통합 프로세스를 제안합니다. 이 과정의 효과를 검증하기 위해 본 연구에서는 8장의 페이스스왑 이미지를 생성했습니다. 또한 이 이미지를 활용해 NSFW와 딥페이크 탐지 모델의 성능을 평가했으며, 각각 87.5%와 100%의 정확도를 달성했습니다. 결과는 순차적 탐지 방식의 실현 가능성을 입증했습니다. 본 연구는 보다 효율적이고 긴급한 콘텐츠 검열을 위해 NSFW와 딥페이크 감지를 결합하는 것의 중요성을 강조하며, 법 집행 기관과 피해자 지원 단체를 위한 실용적인 도구를 제공합니다. 우리의 연구 결과에 따르면, 본 연구는 딥페이크 콘텐츠로 인한 피해를 효과적으로 해결하기 위한 신속한 대응을 가능하게 하는 패러다임을 제시하며, 콘텐츠 검열에 대한 보다 적극적인 접근을 촉진합니다."
    },
    {
        "title": "An Empirical Study of Black-Box Based Membership Inference Attacks on a Real-World Dataset",
        "authors": [
            "Yujeong Kwon",
            "Simon S. Woo",
            "Hyungjoon Koo"
        ],
        "venue_full": "International Symposium on Foundations and Practice of Security",
        "venue": "FPS",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.1007/978-3-031-87496-3_9"
        },
        "img": "/img/Publications/membership_attack.png",
        "abstract": "The recent advancements in artificial intelligence drive the widespread adoption of Machine-Learning-as-a-Service platforms, which offer valuable services. However, these pervasive utilities in the cloud environment unavoidably encounter security and privacy issues. In particular, a membership inference attack (MIA) poses a threat by recognizing the presence of a data sample in a training set for the target model. Although prior MIA approaches underline privacy risks repeatedly by demonstrating experimental results with standard benchmark datasets such as MNIST and CIFAR, the effectiveness of such techniques on a real-world dataset remains questionable. We are the first to perform an in-depth empirical study on black-box-based MIAs that hold realistic assumptions, including six metric-based and three classifier-based MIAs with the high-dimensional image dataset that consists of identification (ID) cards and driving licenses. Additionally, we introduce the Siamese-based MIA that shows similar or better performance than the state-of-the-art approaches and suggest training a shadow model with autoencoder-based reconstructed images. Our major findings show that the performance of MIA techniques against too many features may be degraded; the MIA configuration or a sample's properties can impact the accuracy of membership inference on members and non-members.",
        "abstract_ko": "최근 인공지능의 발전은 가치 있는 서비스를 제공하는 머신러닝-서비스(Machine-Learning-as-a-Service) 플랫폼의 광범위한 채택을 촉진하고 있습니다. 그러나 클라우드 환경에서 이러한 광범위한 유틸리티는 불가피하게 보안 및 개인정보 문제에 직면하게 됩니다. 특히, 멤버십 추론 공격(Membership Inference Attack, MIA)은 대상 모델의 학습 세트에 특정 데이터 샘플이 존재하는지를 인식함으로써 위협을 제기합니다. 이전의 MIA 접근법은 MNIST와 CIFAR와 같은 표준 벤치마크 데이터셋을 사용한 실험 결과를 보여주며 개인정보 위험을 반복적으로 강조하였지만, 이러한 기법이 실제 데이터셋에서 얼마나 효과적인지는 여전히 의문으로 남아 있습니다. 본 연구에서는 실제적인 가정을 가진 블랙박스 기반 MIAs에 대해 심도 있는 경험적 연구를 수행한 최초의 사례로, 신분증(ID 카드) 및 운전면허증으로 구성된 고차원 이미지 데이터셋을 사용한 여섯 가지 메트릭 기반 MIA와 세 가지 분류기 기반 MIA를 포함합니다. 또한, 본 연구에서는 최신 접근법과 비슷하거나 더 나은 성능을 보이는 시암 기반 MIA를 소개하고, 오토인코더 기반 복원 이미지를 사용하여 섀도우 모델을 학습하는 방법을 제안합니다. 우리의 주요 발견은 너무 많은 특징에 대해 MIA 기법의 성능이 저하될 수 있으며, MIA 구성이나 샘플의 특성이 회원과 비회원에 대한 멤버십 추론 정확도에 영향을 미칠 수 있음을 보여줍니다."
    },
    {
        "title": "LoLI-Street: Benchmarking Low-Light Image Enhancement and Beyond",
        "authors": [
            "Md Tanvir Islam",
            "Inzamamul Alam",
            "Simon S. Woo",
            "Saeed Anwar",
            "Ik Hyun Lee",
            "Khan Muhammad"
        ],
        "venue_full": "Asian Conference on Computer Vision",
        "venue": "ACCV",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.1007/978-981-96-0917-8_20"
        },
        "img": "/img/Publications/ACCV-2024-2.png",
        "abstract": "We introduce a new large-scale dataset “LoLI-Street” (Low-Light Images of Streets) with 33k paired low-light and well-exposed images from street scenes in developed cities, covering 19k object classes for object detection, including Person, Bicycle, Car, Bus, Motorcycle, and Traffic Light, etc. LoLI-Street dataset also features 1,000 real low-light test images, providing a benchmark for evaluating models under real-world conditions. Furthermore, we propose a transformer and diffusion-based LLIE model named “TriFuse”. Leveraging the LoLI-Street dataset, we train and evaluate our TriFuse and other SOTA models to benchmark our dataset. Comparing various models, the feasibility of our dataset for generalization is evident in testing across different mainstream datasets by significantly enhancing low-quality images and object detection for practical applications in autonomous driving and surveillance systems. The benchmark dataset and the evaluation code will be released to ensure reproducibility.",
        "abstract_ko": "본 연구에서는 선진 도시의 거리 장면에서 33,000개의 저조도 이미지와 잘 노출된 이미지 쌍을 포함한 새로운 대규모 데이터셋 “LoLI-Street”(Low-Light Images of Streets)를 소개합니다. 이 데이터셋은 사람, 자전거, 자동차, 버스, 오토바이, 신호등 등 19,000개의 객체 클래스를 포함하여 객체 탐지를 지원합니다. LoLI-Street 데이터셋은 또한 1,000개의 실제 저조도 테스트 이미지를 제공하여 실제 환경에서 모델을 평가할 수 있는 벤치마크를 제공합니다. 더 나아가, 본 연구에서는 “TriFuse”라는 트랜스포머 및 디퓨전 기반 LLIE 모델을 제안합니다. LoLI-Street 데이터셋을 활용하여 TriFuse 및 기타 최신 모델들을 학습하고 평가하여 데이터셋의 벤치마크를 제공합니다. 여러 모델을 비교한 결과, 본 데이터셋은 다양한 주류 데이터셋에서 테스트할 때 저품질 이미지와 객체 검출을 크게 향상시켜 자율 주행 및 감시 시스템의 실용적 응용에서 일반화 가능성이 분명히 나타납니다. 벤치마크 데이터셋과 평가 코드는 재현성을 보장하기 위해 공개될 예정입니다."
    },
    {
        "title": "Bridging Optimal Transport and Jacobian Regularization by Optimal Trajectory for Enhanced Adversarial Defense",
        "authors": [
            "Binh M. Le",
            "Shahroz Tariq",
            "Simon S. Woo"
        ],
        "venue_full": "Asian Conference on Computer Vision",
        "venue": "ACCV",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.1007/978-981-96-0963-5_7"
        },
        "img": "/img/Publications/ACCV-2024-1.png",
        "abstract": "Deep neural networks, particularly in vision tasks, are notably susceptible to adversarial perturbations. To overcome this chal lenge, developing a robust classifier is crucial. In light of the recent advancements in the robustness of classifiers, we delve deep into the intricacies of adversarial training and Jacobian regularization, two pivotal defenses. Our work is the first carefully analyzes and characterizes these two schools of approaches, both theoretically and empirically, to demonstrate how each approach impacts the robust learning of a classifier. Next, we propose our novel Optimal Transport with Jacobian regularization  method, dubbed OTJR, bridging the input Jacobian regularization with the a output representation alignment by leveraging the optimal transport theory. In particular, we employ the Sliced Wasserstein distance that can efficiently push the adversarial samples’ representations closer to those of clean samples, regardless of the number of classes within the dataset. The SW distance provides the adversarial samples’ movement directions, which are much more informative and powerful for the Jacobian regularization. Our empirical evaluations set a new standard in the domain, with our method achieving commendable accuracies of 52.57% on CIFAR-10 and 28.36% on CIFAR-100 datasets under the AutoAttack. Further validating our model’s practicality, we conducted real-world tests by subjecting internet-sourced images to online adversarial attacks. These demonstrations highlight our model’s capability to counteract sophisticated adversarial perturbations, affirming its significance and applicability in real-world scenarios.",
        "abstract_ko": "심층 신경망, 특히 시각 작업에서, 적대적 교란에 특히 취약합니다. 이 문제를 극복하기 위해서는 강인한 분류기를 개발하는 것이 중요합니다. 최근 분류기 강인성의 발전에 비추어, 본 연구에서는 두 가지 중요한 방어 방법인 적대적 훈련과 야코비안 정규화의 복잡한 면을 깊이 탐구합니다. 우리의 연구는 이 두 접근법을 이론적 및 실증적으로 신중하게 분석하고 특징짓는 첫 번째 연구로, 각 접근법이 분류기의 강인한 학습에 어떻게 영향을 미치는지를 보여줍니다. 다음으로, 본 연구에서는 입력 야코비안 정규화와 출력 표현 정렬을 최적 수송 이론을 활용하여 연결하는 새로운 방법인 OTJR(Optimal Transport with Jacobian Regularization)를 제안합니다. 특히, 본 연구에서는 Sliced Wasserstein(SW) 거리를 사용하여 적대적 샘플의 표현을 클래스 수와 관계없이 깨끗한 샘플의 표현과 효율적으로 가깝게 밀 수 있습니다. SW 거리는 적대적 샘플의 이동 방향을 제공하며, 이는 야코비안 정규화에 훨씬 더 정보가 풍부하고 강력합니다. 우리의 실증적 평가 결과, 제시된 방법은 CIFAR-10에서 52.57%, CIFAR-100에서 28.36%의 우수한 정확도를 달성하며 해당 분야에서 새로운 기준을 설정했습니다. 모델의 실용성을 추가로 검증하기 위해, 본 연구에서는 인터넷에서 수집한 이미지를 온라인 적대적 공격에 노출시켜 실제 테스트를 수행했습니다. 이러한 시연은 복잡한 적대적 교란에 대응할 수 있는 모델의 능력을 강조하며, 실세계 시나리오에서의 중요성과 적용 가능성을 확인시켜줍니다."
    },
    {
        "title": "Adaptive Clustering and Step-Size Optimization in Collaborative Distributed Diffusion-Based AIGC: Balancing Performance and Resource Utilization",
        "authors": [
            "Zeliang Xu",
            "Dong In Kim",
            "Simon S. Woo"
        ],
        "venue_full": "International Conference on Information and Communication Technology Convergence",
        "venue": "ICTC",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.1109/ictc62082.2024.10826855"
        },
        "img": "/img/Publications/ICTC 2024.png",
        "abstract": "This paper proposes a novel cloud-edge collaborative distributed diffusion model for AI-generated content (AIGC) such as image generation, which integrates adaptive clustering techniques with dynamic step-size optimization. The proposed model addresses the challenges of heterogeneous edge devices in real-world deployments. Experimental results demonstrate significant improvements in performance and efficiency with\na 38.8% reduction in average generation time and a 15.6% increase in image quality (evaluate via CLIP score). The system shows enhanced resource utilization, improving cloud and edge utilization by 16.1% and 36.6%, respectively. This research contributes to the advancement of collaborative distributed diffusion model, offering a scalable and adaptive framework for efficient\nAIGC services in dynamic environments along with potential applications extending to other computationally intensive tasks in cloud-edge systems.",
        "abstract_ko": "본 논문은 이미지 생성과 같은 AI 생성 콘텐츠(AIGC)를 위해 적응형 클러스터링 기법과 동적 스텝 크기 최적화를 통합한 새로운 클라우드-엣지 협력 분산 확산 모델을 제안한다. 제안된 모델은 실제 배포 환경에서 이질적인 엣지 장치의 문제를 해결한다. 실험 결과, 평균 생성 시간을 38.8% 감소시키고 이미지 품질(CLP 점수로 평가)을 15.6% 향상시키며 성능과 효율성이 크게 개선됨을 보여준다. 또한, 이 시스템은 클라우드와 엣지 활용도를 각각 16.1%와 36.6% 향상시켜 자원 활용도를 높인다. 본 연구는 협업 분산 확산 모델의 발전에 기여하며, 동적 환경에서 효율적인 AIGC 서비스를 위한 확장 가능하고 적응적인 프레임워크를 제공하고, 클라우드-엣지 시스템의 다른 계산 집약적 작업으로 확장 가능한 잠재적 응용을 제공합니다."
    },
    {
        "title": "A real-world pharmacovigilance study on cardiovascular adverse events of tisagenlecleucel using machine learning approach",
        "authors": [
            "Juhong Jung",
            "Ju Hwan Kim",
            "Ji-Hwan Bae",
            "Simon S. Woo",
            "Hyesung Lee",
            "Ju-Young Shin"
        ],
        "venue_full": "Scientific Reports",
        "venue": null,
        "track": "SCIE Journal",
        "presentationType": null,
        "Factor": [
            "SCIE IF=",
            3.9
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.1038/s41598-024-64466-x"
        },
        "img": "/img/Publications/nature-2024.webp",
        "abstract": "In this study, gradient boosting machine algorithm-based model was fitted to identify safety signals of serious cardiovascular AEs reported for tisagenlecleucel in the World Health Organization Vigibase up until February 2024. Input dataset, comprised of positive and negative controls of tisagenlecleucel based on its labeling information and literature search, was used to train the model. Then, we implemented the model to calculate the predicted probability of serious cardiovascular AEs defined by preferred terms included in the important medical event list from European Medicine Agency. There were 467 distinct AEs from 3,280 safety cases reports for tisagenlecleucel, of which 363 (77.7%) were classified as positive controls, 66 (14.2%) as negative controls, and 37 (7.9%) as unknown AEs. The prediction model had area under the receiver operating characteristic curve of 0.76 in the test dataset application. Of the unknown AEs, six cardiovascular AEs were predicted as the safety signals: bradycardia (predicted probability 0.99), pleural effusion (0.98), pulseless electrical activity (0.89), cardiotoxicity (0.83), cardio-respiratory arrest (0.69), and acute myocardial infarction (0.58). Our findings underscore vigilant monitoring of acute cardiotoxicities with tisagenlecleucel therapy.",
        "abstract_ko": "본 연구에서는 2024년 2월까지 세계보건기구(Vigibase)에 보고된 티사젠렉류셀의 심각한 심혈관 부작용 안전 신호를 식별하기 위해 그래디언트 부스팅 머신 알고리즘 기반 모델을 적합시켰다. 입력 데이터셋은 라벨 정보와 문헌 조사를 기반으로 한 티사젠렉류셀의 양성 및 음성 대조군으로 구성되었으며, 이를 사용하여 모델을 훈련시켰다. 그런 다음, 본 연구에서는 모델을 적용하여 유럽 의약청 중요 의학적 사건 목록에 포함된 우선 용어로 정의된 심각한 심혈관 부작용의 예측 확률을 계산하였다. 티사젠렉류셀에 대한 3,280건의 안전 사례 보고에서 467개의 개별 부작용이 있었으며, 그 중 363건(77.7%)은 양성 대조군, 66건(14.2%)은 음성 대조군, 37건(7.9%)은 미상 부작용으로 분류되었다. 예측 모델은 테스트 데이터셋 적용에서 수신자 조작 특성 곡선 아래 면적이 0.76이었다. 알려지지 않은 이상반응(AE) 중 여섯 가지 심혈관계 AE가 안전 신호로 예측되었다: 서맥(예측 확률 0.99), 흉막삼출(0.98), 무맥 전기활동(0.89), 심독성(0.83), 심폐정지(0.69), 급성 심근경색(0.58). 우리의 연구 결과는 티사젠렉류셀(tisagenlecleucel) 치료 시 급성 심독성에 대한 면밀한 모니터링의 필요성을 강조한다."
    },
    {
        "title": "Satellite State Prediction and Maneuver Detection Analysis Using NCDEs",
        "authors": [
            "Kangjun Lee",
            "Simon S. Woo"
        ],
        "venue_full": "International Conference on Pattern Recognition",
        "venue": "ICPR",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.1007/978-3-031-78189-6_15"
        },
        "img": "/img/Publications/kari.png",
        "abstract": "Satellite orbit propagation (SOP) are of prime importance in the prevention of collision and completion of the assigned task of the satellites. In the past, orbit prediction and propagation have relied on physics-based mathematical model. However, as the number of satellites and their data increases, it is crucial to explore the data-driven orbit propagation based on the advanced machine learning methods. In this work, we propose a novel deep learning-based framework to forecast future satellite orbit states. The proposed framework employs a model based on Neural Controlled Differential Equations (NCDEs) to train orbit prediction models, and our approach captures features from past satellite state values at both fixed and dynamic time intervals. The experimental results on Korea Aerospace Research Institute (KARI)’s KOMPSAT-3 and 5 datasets demonstrate that the proposed framework outperforms the other eight data-driven baseline forecasting models.",
        "abstract_ko": "위성 궤도 전파(SOP)는 충돌 방지와 할당된 위성 임무 수행에 있어 매우 중요합니다. 과거에는 궤도 예측과 전파가 물리 기반 수학 모델에 의존했습니다. 그러나 위성 수와 위성 데이터가 증가함에 따라, 첨단 기계 학습 방법을 기반으로 한 데이터 기반 궤도 전파를 탐구하는 것이 매우 중요합니다. 본 연구에서는 미래 위성 궤도 상태를 예측하기 위해 새로운 딥러닝 기반 프레임워크를 제안합니다. 제안된 프레임워크는 Neural Controlled Differential Equations(NCDEs)를 기반으로 한 모델을 사용하여 궤도 예측 모델을 학습하며, 제안 접근은 과거 위성 상태 값을 고정 및 동적 시간 간격 모두에서 특징을 캡처합니다. 한국항공우주연구원(KARI)의 KOMPSAT-3 및 KOMPSAT-5 데이터셋에 대한 실험 결과는 제안된 프레임워크가 다른 8개의 데이터 기반 기준 예측 모델보다 우수함을 보여준다."
    },
    {
        "title": "SSMT: Few-Shot Traffic Forecasting with Single Source Meta-transfer Learning",
        "authors": [
            "Kishor Kumar Bhaumik",
            "Minha Kim",
            "Fahim Faisal Niloy",
            "Amin Ahsan Ali",
            "Simon S. Woo"
        ],
        "venue_full": "International Conference on Pattern Recognition",
        "venue": "ICPR",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.1007/978-3-031-78195-7_4"
        },
        "img": "/img/Publications/ssmt.png",
        "abstract": "Traffic forecasting in Intelligent Transportation Systems (ITS) is vital for intelligent traffic prediction. Yet, ITS often relies on data from traffic sensors or vehicle devices, where certain cities might not have all those smart devices or enabling infrastructures. Also, recent studies have employed meta-learning to generalize spatial-temporal traffic networks, utilizing data from multiple cities for effective traffic forecasting for data-scarce target cities. However, collecting data from multiple cities can be costly and time-consuming. To tackle this challenge, we introduce Single Source Meta-Transfer Learning (SSMT ) which relies only on a single source city for traffic prediction. Our method harnesses this transferred knowledge to enable few-shot traffic forecasting, particularly when the target city possesses limited data. Specifically, we use memory-augmented attention to store the heterogeneous spatial knowledge from the source city and selectively recall them for the data-scarce target city. We extend the idea of sinusoidal positional encoding to establish meta-learning tasks by leveraging diverse temporal traffic patterns from the source city. Moreover, to capture a more generalized representation of the positions we introduced a meta-positional encoding that learns the most optimal representation of the temporal pattern across all the tasks. We experiment on five real-world benchmark datasets to demonstrate that our method outperforms several existing methods in time series traffic prediction.",
        "abstract_ko": "지능형 교통 시스템(ITS)에서의 교통 예측은 지능형 교통 예측을 위해 매우 중요합니다. 그러나 ITS는 종종 교통 센서나 차량 장치에서 얻은 데이터에 의존하며, 특정 도시는 이러한 스마트 장치나 지원 인프라가 모두 갖추어져 있지 않을 수 있습니다. 또한 최근 연구에서는 메타 학습을 활용하여 시공간 교통 네트워크를 일반화하고, 여러 도시의 데이터를 활용하여 데이터가 부족한 목표 도시에서 효과적인 교통 예측을 수행했습니다. 그러나 여러 도시의 데이터를 수집하는 것은 비용이 많이 들고 시간이 오래 걸릴 수 있습니다. 이러한 문제를 해결하기 위해 본 연구에서는 교통 예측을 위해 단일 소스 도시 데이터만 사용하는 단일 소스 메타 전이 학습(SSMT)을 소개합니다. 제안 방법은 이 전이된 지식을 활용하여 데이터가 제한된 목표 도시에서도 소수 샘플 교통 예측을 가능하게 합니다. 구체적으로, 본 연구에서는 메모리 보강 주의를 사용하여 출발 도시의 이질적인 공간 지식을 저장하고 데이터가 부족한 목표 도시를 위해 선택적으로 이를 호출합니다. 또한, 출발 도시의 다양한 시간적 교통 패턴을 활용하여 메타 학습 과제를 설정하기 위해 사인 함수 위치 인코딩의 아이디어를 확장합니다. 더 나아가, 위치의 보다 일반화된 표현을 포착하기 위해 모든 과제에 걸친 시간 패턴의 최적의 표현을 학습하는 메타 위치 인코딩을 도입했습니다. 본 연구에서는 다섯 개의 실제 벤치마크 데이터셋에서 실험을 수행하여 제안한 방법이 시계열 교통 예측에서 여러 기존 방법보다 우수함을 입증합니다."
    },
    {
        "title": "MIXAD: Memory-Induced Explainable Time Series Anomaly Detection",
        "authors": [
            "Minha Kim",
            "Kishor Kumar Bhaumik",
            "Amin Ahsan Ali",
            "Simon S. Woo"
        ],
        "venue_full": "International Conference on Pattern Recognition",
        "venue": "ICPR",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.1007/978-3-031-78189-6_16"
        },
        "img": "/img/Publications/mixad.png",
        "abstract": "For modern industrial applications, accurately detecting and diagnosing anomalies in multivariate time series data is essential. Despite this need, most state-of-the-art methods often prioritize detection performance over model interpretability. Addressing this gap, we introduce MIXAD (Memory-Induced Explainable Time Series Anomaly Detection), a model designed for interpretable anomaly detection. MIXAD leverages a memory network alongside spatiotemporal processing units to understand the intricate dynamics and topological structures inherent in sensor relationships. We also introduce a novel anomaly scoring method that detects significant shifts in memory activation patterns during anomalies. Our approach not only ensures decent detection performance but also outperforms state-of-the-art baselines by 34.30% and 34.51% in interpretability metrics.",
        "abstract_ko": "현대 산업 응용에서 다변량 시계열 데이터의 이상을 정확하게 탐지하고 진단하는 것은 필수적입니다. 이러한 필요성에도 불구하고, 대부분의 최신 기법들은 모델 해석 가능성보다 탐지 성능을 우선시하는 경우가 많습니다. 이러한 격차를 해소하기 위해, 본 연구에서는 해석 가능한 이상 탐지를 위해 설계된 모델인 MIXAD(Memory-Induced Explainable Time Series Anomaly Detection)를 소개합니다. MIXAD는 센서 관계에 내재된 복잡한 역학과 위상 구조를 이해하기 위해 기억 네트워크와 시공간 처리 유닛을 활용합니다. 또한, 이상 발생 시 기억 활성화 패턴에서 중요한 변화를 탐지하는 새로운 이상 점수 계산 방법을 제안합니다. 제안 접근은 단지 적절한 탐지 성능을 보장할 뿐만 아니라, 해석 가능성 지표에서 최첨단 기준 모델보다 각각 34.30%와 34.51% 뛰어난 성과를 보입니다."
    },
    {
        "title": "UGAD: Universal Generative AI Detector utilizing Frequency Fingerprints",
        "authors": [
            "Inzamamul Alam",
            "Muhammad Shahid Muneer",
            "Simon S. Woo"
        ],
        "venue_full": "ACM International Conference on Information and Knowledge Management",
        "venue": "CIKM",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            3
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.1145/3627673.3680085"
        },
        "img": "/img/Publications/cikm-inzi-2024.jpg",
        "abstract": "In the wake of a fabricated explosion image at the Pentagon, an ability to discern real images from fake counterparts has never been more critical. Our study introduces a novel multi-modal approach to detect AI-generated images amidst the proliferation of new generation methods such as Diffusion models. Our method, UGAD, encompasses three key detection steps: First, we transform the RGB images into YCbCr channels and apply an Integral Radial Operation to emphasize salient radial features. Secondly, the Spatial Fourier Extraction operation is used for a spatial shift, utilizing a pre-trained deep learning network for optimal feature extraction. Finally, the deep neural network classification stage processes the data through dense layers using softmax for classification. Our approach significantly enhances the accuracy of differentiating between real and AI-generated images, as evidenced by a 12.64% increase in accuracy and 28.43% increase in AUC compared to ex- isting state-of-the-art methods. Also, we integrated and deployed\n1 our approach to detect real-world deepfakes in our system.",
        "abstract_ko": "펜타곤에서 조작된 폭발 이미지가 등장한 이후, 진짜 이미지와 가짜 이미지를 구별하는 능력은 그 어느 때보다 중요해졌습니다. 우리 연구는 확산 모델과 같은 신세대 방법들이 확산되는 가운데 AI 생성 이미지를 감지하는 새로운 다중 모드 접근법을 소개합니다. 제안 방법인 UGAD는 세 가지 주요 감지 단계를 포함합니다. 첫째, RGB 이미지를 YCbCr 채널로 변환하고 동일한 방사형 특징을 강조하기 위해 적분 방사형 연산(Integral Radial Operation)을 적용합니다. 둘째, 공간 푸리에 추출(Spatial Fourier Extraction) 연산을 사용하여 공간적 이동을 수행하며, 최적의 특징 추출을 위해 사전 학습된 딥러닝 네트워크를 활용합니다. 마지막으로, 심층 신경망 분류 단계에서 데이터를 촘촘한 층을 통해 처리하고 소프트맥스(softmax)를 사용하여 분류를 수행합니다. 제안 접근은 기존 최첨단 방법과 비교하여 정확도가 12.64% 향상되고 AUC가 28.43% 증가한 것으로 나타나, 실제 이미지와 AI 생성 이미지를 구분하는 정확도를 크게 향상시킵니다. 또한, 본 연구에서는 실제 세계의 딥페이크를 감지하기 위해 제안 접근을 시스템에 통합하고 배포했습니다."
    },
    {
        "title": "Blind-Match: Efficient Homomorphic Encryption-Based 1:N Matching for Privacy-Preserving Biometric Identification",
        "authors": [
            "Hyunmin Choi",
            "Jiwon Kim",
            "Chiyoung Song",
            "Simon S. Woo",
            "Hyoungshick Kim"
        ],
        "venue_full": "ACM International Conference on Information and Knowledge Management",
        "venue": "CIKM",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            3
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.1145/3627673.3680017"
        },
        "img": "/img/Publications/CIKM2024-choi.jpg",
        "abstract": "We present Blind-Match, a novel biometric identification system that leverages homomorphic encryption (HE) for efficient and privacy- preserving 1:N matching. Blind-Match introduces a HE-optimized cosine similarity computation method, where the key idea is to divide the feature vector into smaller parts for processing rather than comput- ing the entire vector at once. By optimizing the number of these parts, Blind-Match minimizes execution time while ensuring data privacy through HE. Blind-Match achieves superior performance compared to state-of-the-art methods across various biometric datasets. On the LFW face dataset, Blind-Match attains a 99.63% Rank-1 ac- curacy with a 128-dimensional feature vector, demonstrating its robustness in face recognition tasks. For fingerprint identification, Blind-Match achieves a remarkable 99.55% Rank-1 accuracy on the PolyU dataset, even with a compact 16-dimensional feature vector, significantly outperforming the state-of-the-art method, Blind-Touch, which achieves only 59.17%. Furthermore, Blind-Match showcases practical efficiency in large-scale biometric identification scenarios, such as Naver Cloud’s FaceSign, by processing 6,144 biometric samples in 0.74 seconds using a 128-dimensional feature vector.",
        "abstract_ko": "본 연구에서는 효율적이고 개인정보를 보호하는 1:N 매칭을 위해 동형 암호(HE)를 활용한 새로운 생체 인식 시스템인 Blind-Match를 소개합니다. Blind-Match는 HE 최적화 코사인 유사도 계산 방법을 도입하는데, 핵심 아이디어는 전체 벡터를 한 번에 계산하는 대신 특징 벡터를 더 작은 부분으로 나누어 처리하는 것입니다. 이러한 부분의 수를 최적화함으로써 Blind-Match는 실행 시간을 최소화하면서 HE를 통해 데이터 프라이버시를 보장합니다. Blind-Match는 다양한 생체 인식 데이터셋에서 최첨단 방법과 비교하여 우수한 성능을 달성합니다. LFW 얼굴 데이터셋에서 Blind-Match는 128차원 특징 벡터를 사용하여 99.63%의 Rank-1 정확도를 달성하며, 얼굴 인식 작업에서의 견고함을 입증합니다. 지문 인식을 위해, Blind-Match는 PolyU 데이터셋에서 16차원의 간결한 특징 벡터만으로도 놀라운 99.55%의 Rank-1 정확도를 달성하여, 겨우 59.17%를 달성하는 최첨단 방법인 Blind-Touch를 크게 능가합니다. 더욱이, Blind-Match는 128차원의 특징 벡터를 사용하여 6,144개의 생체 샘플을 0.74초 만에 처리함으로써 Naver Cloud의 FaceSign과 같은 대규모 생체 인식 시나리오에서도 실용적인 효율성을 보여줍니다."
    },
    {
        "title": "Deep Journey Hierarchical Attention Networks for Conversion Predictions in Digital Marketing",
        "authors": [
            "Girim Ban",
            "Hyeonseok Yun",
            "Banseok Lee",
            "David Sung",
            "Simon S. Woo"
        ],
        "venue_full": "ACM International Conference on Information and Knowledge Management",
        "venue": "CIKM",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            3
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.1145/3627673.3680066"
        },
        "img": "/img/Publications/CIKM2024-ban.png",
        "abstract": "In digital marketing, precise audience targeting is crucial for campaign efficiency. However, digital marketing agencies often struggle with incomplete user profiles and interaction details from Advertising Identifier (ADID) data in user behavior modeling. To address this, Korea Telecom (KT), a leading telecommunication and big data service provider in South Korea, introduces the Deep Journey Hierarchical Attention Networks (DJHAN). This novel method enhances conversion predictions by leveraging heterogeneous action sequences associated with ADIDs and encapsulating these interactions into structured journeys. These journeys are hierarchically aggregated to effectively represent ADID’s behavioral attributes. Moreover, DJHAN incorporates three specialized attention mechanisms: temporal attention for time-sensitive contexts, action attention for emphasizing key behaviors, and journey attention for highlighting influential journeys in the purchase conversion process. Emprically, DJHAN surpasses state-of-the-art (SOTA) models across three diverse datasets, including real-world data from NasMedia, a leading media representative in Asia. In backtesting simulations with three advertisers, DJHAN outperforms existing baselines, achieving the highest improvements in Conversion Rate (CVR) and Return on Ad Spend (ROAS) across three advertisers, demonstrating its practical potential in digital marketing.",
        "abstract_ko": "디지털 마케팅에서 정확한 타겟팅은 캠페인 효율성에 매우 중요합니다. 그러나 디지털 마케팅 대행사들은 종종 사용자 행동 모델링에서 광고 식별자(ADID) 데이터의 불완전한 사용자 프로필 및 상호작용 세부 정보로 어려움을 겪습니다. 이를 해결하기 위해, 한국의 선도적인 통신 및 빅데이터 서비스 제공업체인 한국통신(KT)은 딥 저니 계층별 주의 네트워크(Deep Journey Hierarchical Attention Networks, DJHAN)를 도입했습니다. 이 혁신적인 방법은 ADID와 관련된 이질적인 행동 시퀀스를 활용하고 이러한 상호작용을 구조화된 저니로 캡슐화함으로써 전환 예측을 향상시킵니다. 이러한 저니들은 계층적으로 집계되어 ADID의 행동 특성을 효과적으로 나타냅니다. 더욱이, DJHAN은 세 가지 특화된 주의(attention) 메커니즘을 통합합니다: 시간에 민감한 맥락을 위한 시간주의(temporal attention), 핵심 행동을 강조하기 위한 행동주의(action attention), 구매 전환 과정에서 영향력 있는 여정을 강조하기 위한 여정주의(journey attention)입니다. 경험적으로, DJHAN은 아시아의 주요 미디어 대표인 NasMedia의 실제 데이터를 포함한 세 가지 다양한 데이터셋에서 최첨단(SOTA) 모델을 능가합니다. 세 명의 광고주와 함께한 백테스팅 시뮬레이션에서, DJHAN은 기존 기준 모델을 능가하며 세 명의 광고주 모두에서 전환율(CVR)과 광고 투자수익률(ROAS)에서 가장 높은 개선을 달성하여 디지털 마케팅에서의 실질적인 잠재력을 입증합니다."
    },
    {
        "title": "Preserving Old Memories in Vivid Detail: Human-Interactive Photo Restoration Framework",
        "authors": [
            "Seung-Yeon Back",
            "Geonho Son",
            "Dahye Jeong",
            "Eunil Park",
            "Simon S. Woo"
        ],
        "venue_full": "ACM International Conference on Information and Knowledge Management",
        "venue": "CIKM",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.1145/3627673.3679215"
        },
        "img": "/img/Publications/CIKM2024-Back.jpg",
        "abstract": "Photo restoration technology enables preserving visual memories in photographs. However, physical prints are vulnerable to various forms of deterioration, ranging from physical damage to loss of image quality, etc. While restoration by human experts can improve the quality of outcomes, it often comes at a high price in terms of cost and time for restoration. In this work, we present the AI- based photo restoration framework composed of multiple stages, where each stage tailored to enhance and restore specific types of photo damage, accelerating and automating the photo restoration process. By integrating these techniques into a unified architecture, our framework aims to offer a one-stop solution for restoring old and deteriorated photographs. Furthermore, we present a novel old photo restoration dataset due to the lack of publicly available dataset for our evaulation.",
        "abstract_ko": "사진 복원 기술은 사진 속 시각적 추억을 보존할 수 있게 합니다. 그러나 실제 인쇄물은 물리적 손상부터 이미지 품질 저하 등 다양한 형태의 손상에 취약합니다. 인간 전문가에 의한 복원이 결과 품질을 향상시킬 수 있지만, 종종 복원 비용과 시간 측면에서 높은 비용이 발생합니다. 본 연구에서는 여러 단계로 구성된 AI 기반 사진 복원 프레임워크를 제시하며, 각 단계는 특정 유형의 사진 손상을 개선하고 복원하도록 설계되어 사진 복원 과정을 가속화하고 자동화합니다. 이러한 기술을 통합된 구조로 결합함으로써, 본 프레임워크는 오래되고 손상된 사진을 복원하기 위한 원스톱 솔루션을 제공하는 것을 목표로 합니다. 또한, 평가를 위해 공개적으로 사용 가능한 데이터셋이 부족한 문제를 해결하기 위해 새로운 오래된 사진 복원 데이터셋을 제시합니다."
    },
    {
        "title": "Continuous Memory Representation for Anomaly Detection",
        "authors": [
            "Joo Chan Lee",
            "Taejune Kim",
            "Eunbyung Park",
            "Simon S. Woo",
            "Jong Hwan Ko"
        ],
        "venue_full": "European Conference on Computer Vision",
        "venue": "ECCV",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            2
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.1007/978-3-031-72983-6_25"
        },
        "img": "/img/Publications/eccv.png",
        "abstract": "There have been significant advancements in anomaly detection in an unsupervised manner, where only normal images are available for training. Several recent methods aim to detect anomalies based on a memory, comparing or reconstructing the input with directly stored normal features (or trained features with normal images). However, such memory-based approaches operate on a discrete feature space implemented by the nearest neighbor or attention mechanism, suffering from poor generalization or an identity shortcut issue outputting the same as input, respectively. Furthermore, the majority of existing methods are designed to detect single-class anomalies, resulting in unsatisfactory performance when presented with multiple classes of objects. To tackle all of the above challenges, we propose CRAD, a novel anomaly detection method for representing normal features within a “continuous” memory,enabled by transforming spatial features into coordinates and mapping them to continuous grids. Furthermore, we carefully design the grids tailored for anomaly detection, representing both local and global normal features and fusing them effectively. Our extensive experiments demonstrate that CRAD successfully generalizes the normal features and mitigates the identity shortcut, furthermore, CRAD effectively handles diverse classes in a single model thanks to the high-granularity continuous representation. In an evaluation using the MVTec AD dataset, CRAD significantly outperforms the previous state-of-the-art method by reducing 65.0% of the error for multi-class unified anomaly detection.",
        "abstract_ko": "정상 이미지만을 이용한 학습으로 비지도 방식에서 이상 탐지에 상당한 진전이 이루어졌습니다. 최근 몇몇 방법들은 메모리를 기반으로 입력을 직접 저장된 정상 특징(또는 정상 이미지로 학습된 특징)과 비교하거나 재구성하여 이상을 탐지하는 것을 목표로 합니다. 그러나 이러한 메모리 기반 접근법은 최근접 이웃 또는 어텐션 메커니즘으로 구현된 이산 특징 공간에서 작동하기 때문에 일반화 성능이 낮거나 입력과 동일한 출력을 내는 아이덴티티 숏컷 문제를 겪습니다. 더욱이, 기존 방법 대부분은 단일 클래스 이상을 탐지하도록 설계되어 있어, 여러 클래스의 객체를 다룰 때 만족스러운 성능을 내지 못합니다. 위의 모든 문제를 해결하기 위해, 본 연구에서는 CRAD를 제안합니다. CRAD는 정상 특징을 '연속적' 메모리에 표현하는 새로운 이상 탐지 방법으로, 공간 특징을 좌표로 변환하고 이를 연속 그리드에 매핑함으로써 가능해집니다. 더 나아가, 본 연구에서는 이상 탐지에 맞추어 신중하게 설계된 그리드를 사용하여 지역적 및 전역적 정상 특징을 나타내고 이를 효과적으로 융합합니다. 우리의 광범위한 실험 결과, CRAD가 정상 특징을 성공적으로 일반화하고 정체성 지름길(identity shortcut)을 완화함을 보여주었으며, 높은 세분도의 연속적 표현 덕분에 CRAD가 단일 모델에서 다양한 클래스를 효과적으로 처리할 수 있음을 확인했습니다. MVTec AD 데이터셋을 사용한 평가에서, CRAD는 다중 클래스 통합 이상 탐지에서 이전 최첨단 방법보다 오류를 65.0% 줄여 크게 앞서 나갔습니다."
    },
    {
        "title": "Patch-wise vector quantization for unsupervised medical anomaly detection",
        "authors": [
            "Taejune Kim",
            "Yun-Gyoo Lee",
            "Inho Jeong",
            "Soo-Youn Ham",
            "Simon S. Woo"
        ],
        "venue_full": "Pattern Recognition Letters",
        "venue": null,
        "track": "SCIE Journal",
        "presentationType": null,
        "Factor": [
            "SCIE IF =",
            5.1
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.1016/j.patrec.2024.06.028"
        },
        "img": "/img/Publications/prletters.png",
        "abstract": "Radiography images inherently possess globally consistent structures while exhibiting significant diversity in local anatomical regions, making it challenging to model their normal features through unsupervised anomaly detection. Since unsupervised anomaly detection methods localize anomalies by utilizing discrepancies between learned normal features and input abnormal features, previous studies introduce a memory structure to capture the normal features of radiography images. However, these approaches store extremely localized image segments in their memory, causing the model to represent both normal and pathological features with the stored components. This poses a significant challenge in unsupervised anomaly detection by reducing the disparity between learned features and abnormal features. Furthermore, with the diverse settings in radiography imaging, the above issue is exacerbated: more diversity in the normal images results in stronger representation of pathological features. To resolve the issues above, we propose a novel pathology detection method called Patch-wise Vector Quantization (P-VQ). Unlike the previous methods, P-VQ learns vector-quantized representations of normal \"patches\" while preserving its spatial information by incorporating vector similarity metric. Furthermore, we introduce a novel method for selecting features in the memory to further enhance the robustness against diverse imaging settings. P-VQ even mitigates the \"index collapse\" problem of vector quantization by proposing top-k% dropout. Our extensive experiments on the BMAD benchmark demonstrate the superior performance of P-VQ against existing state-of-the-art methods.",
        "abstract_ko": "방사선 촬영 이미지는 본질적으로 전 세계적으로 일관된 구조를 가지면서도 국소적인 해부학적 영역에서는 상당한 다양성을 나타내어, 비지도 이상 탐지를 통해 정상 특징을 모델링하는 데 어려움을 줍니다. 비지도 이상 탐지 방법은 학습된 정상 특징과 입력된 비정상 특징 간의 차이를 활용하여 이상을 국소화하기 때문에, 이전 연구들은 방사선 촬영 이미지의 정상 특징을 포착하기 위해 메모리 구조를 도입했습니다. 그러나 이러한 접근법들은 메모리에 매우 국소화된 이미지 조각을 저장하므로, 모델이 저장된 구성 요소로 정상 및 병리학적 특징을 모두 표현하게 됩니다. 이는 학습된 특징과 비정상 특징 간의 차이를 줄임으로써 비지도 이상 탐지에서 상당한 도전을 제기합니다. 또한, 방사선 촬영 이미지의 다양한 설정으로 인해 위의 문제가 더욱 악화됩니다: 정상 이미지가 다양할수록 병리학적 특징의 표현이 더욱 강해집니다. 위의 문제를 해결하기 위해, 본 연구에서는 Patch-wise Vector Quantization(P-VQ)이라는 새로운 병리 검출 방법을 제안합니다. 이전 방법들과 달리, P-VQ는 벡터 유사도 지표를 통합하여 공간 정보를 보존하면서 정상 '패치'의 벡터 양자화 표현을 학습합니다. 또한, 다양한 이미지 설정에 대한 견고성을 더욱 향상시키기 위해 메모리에서 특징을 선택하는 새로운 방법을 도입합니다. P-VQ는 심지어 top-k% 드롭아웃을 제안하여 벡터 양자화의 '인덱스 붕괴' 문제까지 완화합니다. BMAD 벤치마크에 대한 우리의 광범위한 실험 결과는 P-VQ가 기존 최첨단 방법에 비해 우수한 성능을 보임을 입증합니다."
    },
    {
        "title": "Exploring the Impact of Moiré Pattern on Deepfake Detectors",
        "authors": [
            "Razaib Tariq",
            "Shahroz Tariq",
            "Simon S. Woo"
        ],
        "venue_full": "International Conference on Image Processing",
        "venue": "ICIP",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.1109/icip51287.2024.10647902"
        },
        "img": "/img/Publications/ICIP_workshop.png",
        "abstract": "Deepfake detection is critical in mitigating the societal threats posed by manipulated videos. While various algorithms have been developed for this purpose, challenges arise when detectors operate externally, such as on smartphones, when users take a photo of deepfake images and upload on the Internet. One significant challenge in such scenarios is the presence of Moiré patterns, which degrade image quality and confound conventional classification algorithms, including deep neural networks (DNNs). The impact of Moiré patterns remains largely unexplored for deepfake detectors. In this study, we investigate how camera-captured deepfake videos from digital screens affect detector performance. We conducted experiments using two prominent datasets, CelebDF and FF++, comparing the performance of four state-of-the-art detectors on camera-captured deepfake videos with introduced Moiré patterns. Our findings reveal a significant decline in detector accuracy, with none achieving above 68% on average. This underscores the critical need to address Moiré pattern challenges in real-world deepfake detection scenarios.",
        "abstract_ko": "딥페이크 탐지는 조작된 영상으로 인해 발생하는 사회적 위협을 완화하는 데 있어 매우 중요합니다. 이를 위해 다양한 알고리즘이 개발되었지만, 사용자가 딥페이크 이미지를 촬영하여 인터넷에 업로드하는 경우와 같이 스마트폰 등 외부 환경에서 탐지기가 작동할 때 문제가 발생합니다. 이러한 시나리오에서 중요한 문제 중 하나는 이미지 품질을 저하시키고 딥 뉴럴 네트워크(DNN)를 포함한 기존 분류 알고리즘을 혼동시키는 무아레(Moiré) 패턴의 존재입니다. 딥페이크 탐지기에서 무아레 패턴의 영향은 아직 거의 연구되지 않았습니다. 본 연구에서는 디지털 화면에서 촬영한 카메라 기반 딥페이크 동영상이 탐지기 성능에 어떠한 영향을 미치는지 조사합니다. 본 연구에서는 두 개의 주요 데이터셋인 CelebDF와 FF++를 사용하여 실험을 수행했으며, 카메라로 촬영된 딥페이크 영상에 모아레 패턴을 도입한 후 네 가지 최첨단 탐지기의 성능을 비교했습니다. 우리의 연구 결과, 탐지기의 정확도가 크게 감소했으며 평균적으로 68%를 초과하는 경우는 없었습니다. 이는 실제 딥페이크 탐지 시나리오에서 모아레 패턴 문제를 해결해야 할 필요성이 매우 중요함을 강조합니다."
    },
    {
        "title": "Decomposed Attention Segment Recurrent Neural Network for Orbit Prediction",
        "authors": [
            "SeungWon Jeong",
            "Soyeon Woo",
            "Daewon Chung",
            "Simon S. Woo",
            "Youjin Shin"
        ],
        "venue_full": "ACM SIGKDD Conference on Knowledge Discovery and Data Mining",
        "venue": "KDD",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            4
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.1145/3637528.3671546"
        },
        "img": "/img/Publications/SIGKDD24.png",
        "abstract": "As the focus of space exploration shifts from national agencies to private companies, the interest in space industry has been steadily increasing. With the increasing number of satellites, the risk of collisions between satellites and space debris has escalated, potentially leading to significant property and human losses. Therefore,\naccurately modeling the orbit is critical for satellite operations. In this work, we propose the Decomposed Attention Segment Recurrent Neural Network (DASR) model, adding two key components, Multi-Head Attention and Tensor Train Decomposition, to SegRNN for orbit prediction. The DASR model applies Multi-Head Attention before segmenting at input data and before the input of the GRU layers. In addition, Tensor Train (TT) Decomposition is applied to the weight matrices of the Multi-Head Attention in both the encoder and decoder. For evaluation, we use three real-world satellite datasets from the Korea Aerospace Research Institute (KARI),\nwhich are currently operating: KOMPSAT-3, KOMPSAT-3A, and KOMPSAT-5 satellites. Our proposed model demonstrates superior performance compared to other SOTA baseline models. We demonstrate that our approach is 94.13% higher predictive performance than the second-best model in the KOMPSAT-3 dataset, 89.79% higher in the KOMPSAT-3A dataset, and 76.71% higher in the KOMPSAT-3 dataset.",
        "abstract_ko": "우주 탐사의 초점이 국가 기관에서 민간 기업으로 이동함에 따라 우주 산업에 대한 관심이 꾸준히 증가하고 있습니다. 위성의 수가 증가함에 따라 위성과 우주 쓰레기 간 충돌 위험이 높아져 상당한 재산 및 인명 피해로 이어질 수 있습니다. 따라서 위성 운영을 위해 궤도를 정확하게 모델링하는 것이 매우 중요합니다. 본 연구에서는 궤도 예측을 위해 SegRNN에 두 가지 핵심 구성 요소인 멀티 헤드 어텐션(Multi-Head Attention)과 텐서 트레인 분해(Tensor Train Decomposition)를 추가한 분해 어텐션 세그먼트 순환 신경망(Decomposed Attention Segment Recurrent Neural Network, DASR) 모델을 제안합니다. DASR 모델은 입력 데이터를 세그먼트화하기 전과 GRU 층 입력 전에 멀티 헤드 어텐션을 적용합니다. 또한 텐서 트레인(TT) 분해는 인코더와 디코더 모두에서 멀티 헤드 어텐션의 가중치 행렬에 적용됩니다. 평가를 위해, 본 연구에서는 현재 운용 중인 한국항공우주연구원(KARI)의 세 가지 실제 위성 데이터셋인 KOMPSAT-3, KOMPSAT-3A, KOMPSAT-5 위성 데이터를 사용합니다. 우리 제안 모델은 다른 SOTA 기준 모델과 비교하여 우수한 성능을 보여줍니다. 본 연구에서는 제안 접근 방식이 KOMPSAT-3 데이터셋에서 두 번째로 우수한 모델보다 94.13% 높은 예측 성능을, KOMPSAT-3A 데이터셋에서 89.79% 높은 성능을, KOMPSAT-5 데이터셋에서 76.71% 높은 성능을 나타냄을 보여줍니다."
    },
    {
        "title": "DynaPP: A Dynamic Resolution Model with Patch Packing for Fast Online Video Detection",
        "authors": [
            "Changrok So",
            "Simon S. Woo",
            "Jong Hwan Ko"
        ],
        "venue_full": "International Joint Conference on Neural Networks",
        "venue": "IJCNN",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.1109/ijcnn60899.2024.10649922"
        },
        "img": "/img/Publications/ijcnn.png",
        "abstract": "Online video detection becomes more challenging with higher resolution as computational costs increase proportionally with increasing resolution. To address this issue, we present a novel approach, DynaPP, which arranges object candidate regions into a compact form. DynaPP performs resource intensive whole-image inference only on sparse key frames, employing reduced resolutions for inference on other frames. Additionally, we propose transforming a 1-stage detector into a dynamic resolution model to facilitate frame inference at reduced resolutions. Here, the dynamic resolution model signifies a model capable of inferring all resolutions, distinguishing itself from typical models by not having restricted inferable resolutions. Unlike prior studies introducing new model structures for multi-resolution models, our work demonstrates that slight modifications to existing models can convert them to dynamic resolution models. DynaPP showcases substantial acceleration in video detection across four representative video datasets: AUAIR (5.5×), UAVDT (3.67×), VisDrone (2.73×), and ImageNet VID (3.69×), while maintaining a mean average precision with a small loss (≤2.2). Furthermore, we observed that our method achieves a detection acceleration of up to 8.84×, depending on the video clip.",
        "abstract_ko": "온라인 비디오 탐지는 해상도가 높아짐에 따라 계산 비용이 비례적으로 증가하기 때문에 더욱 어려워집니다. 이 문제를 해결하기 위해 본 연구에서는 객체 후보 영역을 컴팩트한 형태로 정렬하는 새로운 접근법인 DynaPP를 제안합니다. DynaPP는 희소한 키 프레임에서만 자원 집약적인 전체 이미지 추론을 수행하며, 다른 프레임에 대해서는 줄어든 해상도를 사용하여 추론을 수행합니다. 또한 본 연구에서는 1단계 감지기를 동적 해상도 모델로 변환하여 줄어든 해상도에서 프레임 추론을 용이하게 하는 방법을 제안합니다. 여기서 동적 해상도 모델은 모든 해상도에서 추론할 수 있는 모델을 의미하며, 제한된 추론 해상도를 갖는 기존 모델과는 달리 구별됩니다. 이전 연구들이 다중 해상도 모델을 위한 새로운 모델 구조를 도입한 것과 달리, 우리의 연구는 기존 모델에 약간의 수정을 가함으로써 이를 동적 해상도 모델로 전환할 수 있음을 보여줍니다. DynaPP는 네 개의 대표적인 비디오 데이터셋에서 비디오 감지 속도를 상당히 향상시킵니다: AUAIR (5.5×), UAVDT (3.67×), VisDrone (2.73×), ImageNet VID (3.69×), 동시에 평균 정밀도를 작은 손실(≤2.2)로 유지합니다. 더욱이, 제안 방법은 비디오 클립에 따라 최대 8.84×까지 감지 속도를 향상시킬 수 있음을 관찰했습니다."
    },
    {
        "title": "Disrupting Diffusion-based Inpainters with Semantic Digression",
        "authors": [
            "Geonho Son",
            "Juhun Lee",
            "Simon S. Woo"
        ],
        "venue_full": "International Joint Conference on Artificial Intelligence",
        "venue": "IJCAI",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            4
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.48550/arxiv.2407.10277"
        },
        "img": "/img/Publications/ijcai24_joseph.jpg",
        "abstract": "The fabrication of visual misinformation on the web and social media has increased exponentially with the advent of foundational text-to-image diffusion models. Namely, Stable Diffusion inpainters allow the synthesis of maliciously inpainted images of personal and private figures, and copyrighted contents, also known as deepfakes. To combat such generations, a disruption framework, namely Photoguard, has been proposed, where it adds adversarial noise to the context image to disrupt their inpainting synthesis. While their framework suggested a diffusion-friendly approach, the disruption is not sufficiently strong and it requires a significant amount of GPU and time to immunize the context image. In our work, we re-examine both the minimal and favorable conditions for a successful inpainting disruption, proposing DDD, a \"Digression guided Diffusion Disruption\" framework. First, we identify the most adversarially vulnerable diffusion timestep range with respect to the hidden space. Within this scope of noised manifold, we pose the problem as a semantic digression optimization. We maximize the distance between the inpainting instance's hidden states and a semantic-aware hidden state centroid, calibrated both by Monte Carlo sampling of hidden states and a discretely projected optimization in the token space. Effectively, our approach achieves stronger disruption and a higher success rate than Photoguard while lowering the GPU memory requirement, and speeding the optimization up to three times faster.",
        "abstract_ko": "웹과 소셜 미디어에서 시각적 허위 정보를 제작하는 것이 기초적인 텍스트-이미지 확산 모델의 등장과 함께 기하급수적으로 증가했습니다. 특히, Stable Diffusion의 인페인팅 기능은 개인 및 사적인 인물, 저작권이 있는 콘텐츠의 악의적으로 인페인팅된 이미지를 합성할 수 있게 하며, 이는 딥페이크라고도 알려져 있습니다. 이러한 생성물을 방지하기 위해 Photoguard라는 방해(framework) 프레임워크가 제안되었으며, 이는 인페인팅 합성을 방해하기 위해 컨텍스트 이미지에 적대적 노이즈를 추가합니다. 그들의 프레임워크는 확산 친화적인 접근법을 제시했지만, 방해 효과가 충분히 강하지 않고, 컨텍스트 이미지를 면역화하는 데 상당한 양의 GPU와 시간이 필요합니다. 본 연구에서는 성공적인 인페인팅 방해를 위한 최소 및 유리한 조건을 다시 검토하고, 'Digression guided Diffusion Disruption(DDD)' 프레임워크를 제안합니다. 먼저, 본 연구에서는 히든 공간과 관련하여 가장 적대적으로 취약한 확산 타임스텝 범위를 식별합니다. 이 노이즈가 있는 다양체 범위 내에서, 본 연구에서는 문제를 의미론적 편차 최적화로 설정합니다. 본 연구에서는 인페인팅 인스턴스의 히든 상태와 의미를 인식한 히든 상태 중심 간의 거리를 최대화하며, 이는 히든 상태의 몬테카를로 샘플링과 토큰 공간에서의 이산적으로 투영된 최적화를 통해 보정됩니다. 결과적으로, 제안 접근은 GPU 메모리 요구량을 줄이고 최적화를 세 배 빠르게 진행하면서 Photoguard보다 더 강력한 방해와 높은 성공률을 달성합니다."
    },
    {
        "title": "iFakeDetector: Real Time Integrated Web-based Deepfake Detection System",
        "authors": [
            "Kangjun Lee",
            "Inho Jung",
            "Simon S. Woo"
        ],
        "venue_full": "International Joint Conference on Artificial Intelligence",
        "venue": "IJCAI",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            4
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.24963/ijcai.2024/1016"
        },
        "img": "/img/Publications/kangjun_ijcai24.png",
        "abstract": "Deepfake detection research has been actively conducted in the past. While many deepfake detectors have been proposed, validating the practicality of such systems against real-world settings has not been explored much. Indeed, there might be gaps and disparities when they are applied in the real world. In this work, we developed a real time integrated web-based deepfake detection system, iFakeDetector, which incorporates the recent high performing deepfake detectors, and enables easy access for non-expert users to evaluate deepfake videos. Our system takes a deepfake video as input, allowing users to upload videos and select different detectors, and provides detection results on whether the uploaded video is a deepfake or not. Furthermore, we provide an analysis tool that enables the video to be analyzed on a frame-by-frame basis with the probability of each frame being manipulated. Finally, we tested and deployed iFakeDetector in a real-world scenario to verify its practicality and feasibility.",
        "abstract_ko": "딥페이크 탐지 연구는 과거에도 활발하게 진행되어 왔습니다. 많은 딥페이크 탐지기가 제안되었지만, 실제 환경에서 이러한 시스템의 실용성을 검증하는 것은 많이 탐구되지 않았습니다. 실제로, 이러한 시스템을 실제 환경에 적용할 때에는 격차와 차이가 있을 수 있습니다. 본 연구에서는 최근 고성능 딥페이크 탐지기를 통합하고, 비전문 사용자도 딥페이크 영상을 쉽게 평가할 수 있도록 하는 실시간 통합 웹 기반 딥페이크 탐지 시스템인 iFakeDetector를 개발하였습니다. 우리 시스템은 딥페이크 영상을 입력으로 사용자가 영상을 업로드하고 다양한 탐지기를 선택할 수 있게 하며, 업로드된 영상이 딥페이크인지 아닌지에 대한 탐지 결과를 제공합니다. 더 나아가, 각 프레임이 조작될 확률과 함께 프레임 단위로 영상을 분석할 수 있는 분석 도구도 제공합니다. 마지막으로, 본 연구에서는 iFakeDetector를 실제 환경에서 테스트하고 배포하여 그 실용성과 가능성을 검증했습니다."
    },
    {
        "title": "Gradient Alignment for Cross-Domain Face Anti-Spoofing",
        "authors": [
            "Binh M. Le",
            "Simon S. Woo"
        ],
        "venue_full": "IEEE/CVF Conference on Computer Vision and Pattern Recognition",
        "venue": "CVPR",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            4
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.1109/cvpr52733.2024.00026"
        },
        "img": "/img/Publications/binh_cvpr24.png",
        "abstract": "Recent advancements in domain generalization (DG) for face anti-spoofing (FAS) have garnered considerable attention. Traditional methods have focused on designing learning objectives and additional modules to isolate domain-specific features while retaining domain-invariant characteristics in their representations. In this paper, we introduce GAC-FAS, a novel learning objective that encourages the model to converge towards an optimal flat minimum without necessitating additional learning modules. Unlike conventional sharpness-aware minimizers, GAC-FAS identifies ascending points for each domain and regulates the generalization gradient updates at these points to align coherently with empirical risk minimization (ERM) gradient updates. This unique approach specifically guides the model to be robust against domain shifts. We demonstrate the efficacy of GAC-FAS through rigorous testing on challenging cross-domain FAS datasets, where it establishes state-of-the-art performance.",
        "abstract_ko": "얼굴 위조 방지(FAS)를 위한 도메인 일반화(DG)의 최근 발전은 상당한 주목을 받고 있습니다. 기존 방법들은 학습 목표와 추가 모듈을 설계하여 도메인 특화 특징을 분리하면서 동시에 표현에서 도메인 불변 특성을 유지하는 데 중점을 두었습니다. 본 논문에서는 추가 학습 모듈 없이 모델이 최적의 평탄한 최소점으로 수렴하도록 유도하는 새로운 학습 목표인 GAC-FAS를 소개합니다. 기존의 샤프니스 인식 최소화 기법과 달리, GAC-FAS는 각 도메인에 대한 상승점을 식별하고 이러한 지점에서 일반화 그래디언트 업데이트를 조절하여 경험적 위험 최소화(ERM) 그래디언트 업데이트와 일치하도록 합니다. 이 독창적인 접근법은 모델이 도메인 변화에 대해 강인하도록 특별히 안내합니다. 본 연구에서는 어려운 교차 도메인 FAS 데이터셋에서 엄격한 테스트를 통해 GAC-FAS의 효능을 입증하며, 여기서 최첨단 성능을 달성합니다."
    },
    {
        "title": "Beyond the Screen: Evaluating Deepfake Detectors under Moiré Pattern Effects",
        "authors": [
            "Razaib Tariq",
            "Minji Heo",
            "Simon S. Woo",
            "Shahroz Tariq"
        ],
        "venue_full": "CVPR Workshop on Media Forensics",
        "venue": "CVPRW",
        "track": "Workshop Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.1109/cvprw63382.2024.00446"
        },
        "img": "/img/Publications/Moire_CVPR_Workshop.png",
        "abstract": "The detection of deepfakes is crucial for mitigating the societal impact of falsified video content. Despite the development of various algorithms for this purpose, challenges arise for detectors in real-world scenarios, especially when users capture deepfake content from screens and upload it online or when detectors operate on external devices like smartphones, requiring the capture of potential deepfakes through the camera for evaluation. A significant challenge in these scenarios is the presence of Moir ́e patterns, which degrade image quality and complicate conventional classification methods, notably deep neural networks (DNNs). However, the impact of Moir ́e patterns on the effectiveness of deepfake detection systems has not been adequately explored. This study aims to investigate how capturing deepfake videos via digital screen cameras affects the accuracy of detection mechanisms. We introduced the Moir ́e patterns by capturing the display of a monitor using a smartphone camera and conducted empirical evaluations using four widely recognized datasets: CelebDF, DFD, DFDC, and FF++. We compare the performance of twelve SOTA detectors on deepfake videos captured under the influence of Moir ́e patterns. Our findings reveal a performance decrease of up to 33.1 and 31.3 percentage points for image and video-based detectors. Therefore, highlighting the challenges posed by Moir ́e patterns and other naturally induced artifacts is critical for improving the effectiveness of real-world deepfake detection effort.",
        "abstract_ko": "딥페이크 탐지는 조작된 영상 콘텐츠가 사회에 미치는 영향을 완화하는 데 매우 중요합니다. 이를 위해 다양한 알고리즘이 개발되었음에도 불구하고, 실제 환경에서는 탐지기에 여러 어려움이 발생합니다. 특히 사용자가 화면에서 딥페이크 콘텐츠를 촬영하여 온라인에 업로드하거나 탐지기가 스마트폰과 같은 외부 장치에서 작동하여 카메라를 통해 잠재적인 딥페이크를 평가해야 하는 경우가 그렇습니다. 이러한 시나리오에서 중요한 문제 중 하나는 이미지 품질을 저하시키고 기존 분류 방법, 특히 딥 뉴럴 네트워크(DNN)를 복잡하게 만드는 모아레(Moiré) 패턴의 존재입니다. 그러나 모아레 패턴이 딥페이크 탐지 시스템의 효율성에 미치는 영향은 충분히 탐구되지 않았습니다. 본 연구는 디지털 스크린 카메라를 통해 딥페이크 영상을 캡처하는 것이 탐지 메커니즘의 정확도에 어떤 영향을 미치는지를 조사하는 것을 목표로 합니다. 본 연구에서는 스마트폰 카메라를 사용하여 모니터 디스플레이를 촬영함으로써 무아레 패턴을 도입하고, 네 가지 널리 인정받는 데이터셋인 CelebDF, DFD, DFDC, FF++을 이용해 실험적 평가를 수행했습니다. 본 연구에서는 무아레 패턴의 영향을 받은 딥페이크 영상에서 12개의 최신 탐지기(SOTA)의 성능을 비교했습니다. 우리의 연구 결과, 이미지 및 영상 기반 탐지기의 성능이 최대 33.1 및 31.3퍼센트 포인트까지 감소함을 보여주었습니다. 따라서 무아레 패턴과 다른 자연적으로 발생한 아티팩트가 제기하는 문제점을 강조하는 것은 실제 환경에서의 딥페이크 탐지 효율성을 개선하는 데 매우 중요합니다."
    },
    {
        "title": "Revisiting 30 years of the Network Time Protocol",
        "authors": [
            "Simon S. Woo"
        ],
        "venue_full": "ACM Web Conference",
        "venue": "WWW",
        "track": "Short Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.1145/3589335.3651998"
        },
        "img": "/img/Publications/simon_theweb24.png",
        "abstract": "Since the inception of the Internet and WWW, providing the time among multiple nodes on the Internet has been one of the most critical challenges. David Mills is the pioneer to provide time on the Internet, inventing the Network Time Protocol (NTP), and synchronizing the clocks in computer systems. Now, the NTP is predominantly used on the Internet and WWW. In this paper, we revisit the NTP, and present the overview of the NTP. And, we highlight the advanced research effort, the SpaceNTP, to synchronize the clocks among space assets, which is the fundamental medium to provide the web services in space.",
        "abstract_ko": "인터넷과 WWW이 시작된 이래로, 인터넷 상의 여러 노드 간에 시간을 제공하는 것은 가장 중요한 과제 중 하나였습니다. 데이비드 밀스(David Mills)는 인터넷에 시간을 제공한 선구자로, 네트워크 시간 프로토콜(NTP)을 발명하고 컴퓨터 시스템의 시계를 동기화했습니다. 현재 NTP는 주로 인터넷과 WWW에서 사용되고 있습니다. 본 논문에서는 NTP를 재검토하고 NTP의 개요를 제시합니다. 또한, 우주 자산 간 시계를 동기화하기 위한 첨단 연구 노력인 SpaceNTP를 강조하며, 이는 우주에서 웹 서비스를 제공하는 기본적인 매체입니다."
    },
    {
        "title": "Saliency-Aware Time Series Anomaly Detection for Space Applications",
        "authors": [
            "Sangyup Lee",
            "Simon S. Woo"
        ],
        "venue_full": "Pacific-Asia Conference on Knowledge Discovery and Data Mining",
        "venue": "PAKDD",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.1007/978-981-97-2242-6_26"
        },
        "img": "/img/Publications/sam_pakdd2024.png",
        "abstract": "Our proposed method utilizes saliency detection,\nsimilar to anomaly detection, to identify the most significant region and effectively detect abnormal data. In this work, We propose a novel\nframework, Saliency-aware Anomaly Detection (SalAD), for detecting anomalies in multivariate time series data. SalAD comprises three main\ncomponents: 1) a saliency detection module to remove redundant data, 2) an unsupervised saliency-aware forecasting model, and 3) a saliencyaware\nanomaly score to differentiate anomalies. We evaluate our model using the real-world Korea Aerospace Research Institute (KARI) orbital element dataset, which includes six orbital elements and unexpected disturbances from satellites, as well as conducting extensive experiments on four benchmark datasets to demonstrate its effectiveness and superiority over other baselines. The SalAD framework has been deployed on the K3A and K5 satellites.",
        "abstract_ko": "우리의 제안 방법은 이상 탐지와 유사하게 주목성 검출(saliency detection)을 활용하여 가장 중요한 영역을 식별하고 비정상 데이터를 효과적으로 감지합니다. 본 연구에서는 다변량 시계열 데이터에서 이상을 탐지하기 위한 새로운 프레임워크인 Saliency-aware Anomaly Detection(SalAD)을 제안합니다. SalAD는 세 가지 주요 구성 요소로 이루어져 있습니다: 1) 중복 데이터를 제거하기 위한 주목성 검출 모듈, 2) 비지도 학습 기반 주목성 인식 예측 모델, 3) 이상을 구분하기 위한 주목성 인식 이상 점수. 본 연구에서는 실제 한국항공우주연구원(KARI) 궤도 요소 데이터셋을 사용하여 모델을 평가하였으며, 이 데이터셋에는 여섯 가지 궤도 요소와 위성으로 인한 예상치 못한 교란이 포함되어 있습니다. 또한 네 개의 벤치마크 데이터셋에 대한 광범위한 실험을 수행하여 제안 방법의 효과성과 다른 기준 모델 대비 우수성을 입증하였습니다. SalAD 프레임워크는 K3A 및 K5 위성에 배치되었습니다."
    },
    {
        "title": "SEE: Spherical Embedding Expansion for Improving Deep Metric Learning",
        "authors": [
            "Binh Minh Le",
            "Simon S. Woo"
        ],
        "venue_full": "Pacific-Asia Conference on Knowledge Discovery and Data Mining",
        "venue": "PAKDD",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.1007/978-981-97-2253-2_11"
        },
        "img": "/img/Publications/binhle_pakdd2024.png",
        "abstract": "The primary goal of deep metric learning is to construct a comprehensive embedding space that can effectively represent samples originating from both intra- and inter-classes. Although extensive prior work has explored diverse metric functions and innovative training strategies, much of this work relies on default training data. Consequently, the potential variations inherent within this data remain largely unexplored, constraining the model's robustness to unseen images.In this context, we introduce the Spherical Embedding Expansion (dubbed SEE) method. SEE aims to uncover the latent semantic variations in training data. Especially, our method augments the embedding space with synthetic representations based on Max-Mahalanobis distribution (MMD) centers, which maximize the dispersion of these synthetic features without increasing computational costs.",
        "abstract_ko": "딥 메트릭 학습의 주요 목표는 클래스 내 및 클래스 간 샘플을 효과적으로 표현할 수 있는 포괄적인 임베딩 공간을 구축하는 것입니다. 이전의 다양한 연구에서는 다양한 메트릭 함수와 혁신적인 학습 전략을 탐구했지만, 이러한 연구의 대부분은 기본 학습 데이터에 의존합니다. 결과적으로 이 데이터에 내재된 잠재적인 변동은 대부분 탐구되지 않았으며, 이는 모델의 미지 이미지에 대한 강인성을 제한합니다. 이러한 맥락에서 본 연구에서는 구체 임베딩 확장(Spherical Embedding Expansion, SEE) 방법을 소개합니다. SEE는 학습 데이터 내의 잠재적인 의미 변이를 밝혀내는 것을 목표로 합니다. 특히, 제안 방법은 Max-Mahalanobis 분포(MMD) 중심을 기반으로 한 합성 표현을 사용하여 임베딩 공간을 확장하며, 이를 통해 계산 비용을 증가시키지 않고 이러한 합성 특징의 분산을 최대화합니다."
    },
    {
        "title": "Relation-Aware Label Smoothing for Self-KD",
        "authors": [
            "Jeongho Kim",
            "Simon S. Woo"
        ],
        "venue_full": "Pacific-Asia Conference on Knowledge Discovery and Data Mining",
        "venue": "PAKDD",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.1007/978-981-97-2253-2_16"
        },
        "img": "/img/Publications/jeongho_kdd2024.jpg",
        "abstract": "Although self-knowledge distillation shows remarkable performance improvement with fewer resources than conventional teacher-student based KD approaches, existing self-KD methods still require additional time and memory for training. We propose Relation-Aware Label Smoothing for Self-Knowledge Distillation (RAS-KD) that regularizes the student model itself by utilizing the inter-class relationships between class representative vectors with a light-weight auxiliary classifier. Compared to existing self-KD methods that only consider the instance-level knowledge, we show that proposed global-level knowledge is sufficient to achieve competitive performance while being extremely efficient training cost. Also, we achieve extra performance improvement through instance-level supervision.",
        "abstract_ko": "자기 지식 증류(self-knowledge distillation)는 기존의 교사-학생 기반 KD 접근 방식보다 더 적은 자원으로 뛰어난 성능 향상을 보여주지만, 기존의 자기-KD(self-KD) 방법들은 여전히 학습을 위해 추가적인 시간과 메모리가 필요합니다. 본 연구에서는 경량 보조 분류기를 활용하여 클래스 대표 벡터 간의 클래스 간 관계를 이용함으로써 학생 모델 자체를 규제하는 자기 지식 증류를 위한 관계 인식 라벨 스무딩(Relation-Aware Label Smoothing for Self-Knowledge Distillation, RAS-KD)을 제안합니다. 인스턴스 수준의 지식만을 고려하는 기존의 자기-KD 방법과 비교하여, 제안된 글로벌 수준의 지식만으로도 경쟁력 있는 성능을 달성하면서 매우 효율적인 학습 비용을 유지할 수 있음을 보여줍니다. 또한, 인스턴스 수준 감독을 통해 추가적인 성능 향상을 달성합니다."
    },
    {
        "title": "STLGRU: Spatio-Temporal Lightweight Graph GRU for Traffic Flow Prediction",
        "authors": [
            "Kishor Kumar Bhaumik",
            "Fahim Faisal Niloy",
            "Saif Mahmud",
            "Simon S. Woo"
        ],
        "venue_full": "Pacific-Asia Conference on Knowledge Discovery and Data Mining",
        "venue": "PAKDD",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.1007/978-981-97-2266-2_23"
        },
        "img": "/img/Publications/kishor_pakdd2024.png",
        "abstract": "We propose Spatio-Temporal Lightweight Graph GRU, namely STLGRU,\na novel traffic forecasting model for predicting traffic flow accurately. Specifically, our proposed STLGRU can effectively capture dynamic local and global spatial-temporal relations of traffic networks using memory-augmented attention and gating mechanism in a continuously synchronized manner. Moreover, instead of employing separate temporal and spatial components, we show that our memory module and gated unit can successfully learn the spatial-temporal dependencies, with reduced memory usage and fewer parameters. Extensive experimental results on three real-world public traffic datasets demonstrate that our method can not only achieve state-of-the-art performance but also exhibit competitive computational efficiency.",
        "abstract_ko": "본 연구에서는 STLGRU라고 불리는 시공간 경량 그래프 GRU를 제안하며, 이는 교통 흐름을 정확하게 예측하기 위한 새로운 교통 예측 모델입니다. 구체적으로, 제안된 STLGRU는 기억 강화(attention)와 게이팅 메커니즘을 지속적으로 동기화된 방식으로 사용하여 교통 네트워크의 동적 지역 및 전역 시공간 관계를 효과적으로 포착할 수 있습니다. 또한, 별도의 시간적(themporal) 및 공간적(spatial) 구성 요소를 사용하는 대신, 우리의 메모리 모듈과 게이트 단위가 시공간 의존성을 성공적으로 학습할 수 있음을 보여주며, 메모리 사용량 감소와 파라미터 수 감소도 달성합니다. 세 개의 실제 공개 교통 데이터셋에 대한 광범위한 실험 결과는 제안 방법이 최첨단 성능을 달성할 뿐만 아니라 경쟁력 있는 계산 효율성을 보여줌을 입증합니다."
    },
    {
        "title": "Development of Deep Learning-based Algorithm for Extracting Abnormal Deceleration Patterns",
        "authors": [
            "Youngho Jun",
            "Minha Kim",
            "Kangjun Lee",
            "Simon S. Woo"
        ],
        "venue_full": "International Electric Vehicle Symposium & Exhibition",
        "venue": "EVS",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.1007/978-981-97-2266-2_23"
        },
        "img": "/img/Publications/minha_EVS37.png",
        "abstract": "The smart regenerative braking system for EV can reduce unnecessary brake operation by assisting in braking of the vehicle according to the driving situation, road slope, and driver’s preference. This system maintains the distance between the ego and front vehicles without controlling the brake pedal. Since the strength of regenerative braking is generally determined based on calibration data determined during the vehicle development process, some driver could suffer inconvenience when the regenerative braking is activated differently from their driving habits. In order to solve this problem, various deep learning-based algorithms are developed to provide driving stability by learning the driving data. Among those artificial intelligence algorithms, anomaly detection algorithms can successfully separate the deceleration data in abnormal driving situations, and the resulting refined deceleration data can be used to train the regression model to achieve better driving stability. In this study, we extensively compare and evaluate the performance of clustering and anomaly detection methods.",
        "abstract_ko": "EV용 스마트 회생 제동 시스템은 주행 상황, 도로 경사, 운전자의 선호도에 따라 차량 제동을 지원하여 불필요한 브레이크 작동을 줄일 수 있습니다. 이 시스템은 브레이크 페달을 제어하지 않고도 자차와 전방 차량 사이의 거리를 유지합니다. 일반적으로 회생 제동의 강도는 차량 개발 과정에서 결정된 보정 데이터를 기반으로 결정되기 때문에 일부 운전자는 자신의 운전 습관과 다르게 회생 제동이 작동할 경우 불편을 겪을 수 있습니다. 이 문제를 해결하기 위해 다양한 딥러닝 기반 알고리즘이 운전 데이터를 학습하여 주행 안정성을 제공하도록 개발되었습니다. 인공지능 알고리즘 중에서 이상 탐지 알고리즘은 비정상 운전 상황에서 감속 데이터를 성공적으로 분리할 수 있으며, 그 결과 얻어진 정제된 감속 데이터는 회귀 모델을 학습시키는 데 사용되어 더 나은 운전 안정성을 달성할 수 있습니다. 본 연구에서는 군집화 방법과 이상 탐지 방법의 성능을 광범위하게 비교하고 평가합니다."
    },
    {
        "title": "Source-Free Online Domain Adaptive Semantic Segmentation of Satellite Images Under Image Degradation",
        "authors": [
            "Fahim Faisal Niloy",
            "Kishor Kumar Bhaumik",
            "Simon S. Woo"
        ],
        "venue_full": "IEEE International Conference on Acoustics, Speech and Signal Processing",
        "venue": "ICASSP",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.1109/icassp48485.2024.10447965"
        },
        "img": "/img/Publications/kishor_icassp24.jpg",
        "abstract": "In this paper, we address source-free and online domain adaptation, i.e., test-time adaptation (TTA), for satellite im- ages subject to various forms of image degradation. Towards achieving this goal, we propose a novel TTA approach involv- ing two effective strategies. First, we progressively estimate the global Batch Normalization (BN) statistics of the target distribution with incoming data stream. Leveraging these statistics during inference has the ability to effectively reduce domain gap. Furthermore, we enhance prediction quality by refining the predicted masks using global class centers. Both strategies employ dynamic momentum for fast and stable convergence. Notably, our method is back-propagation-free and hence fast and lightweight, making it highly suitable for on-the-fly adaptation to new domain. Through comprehen- sive experiments across various domain adaptation scenarios, we demonstrate the robust performance of our method.",
        "abstract_ko": "본 논문에서는 다양한 형태의 이미지 열화가 발생하는 위성 이미지에 대해 소스-프리 및 온라인 도메인 적응, 즉 테스트 시 적응(TTA)을 다룹니다. 이를 달성하기 위해, 본 연구에서는 두 가지 효과적인 전략을 포함하는 새로운 TTA 접근법을 제안합니다. 첫째, 들어오는 데이터 스트림을 통해 목표 분포의 전역 배치 정규화(BN) 통계를 점진적으로 추정합니다. 추론 시 이러한 통계를 활용하면 도메인 간 격차를 효과적으로 줄일 수 있습니다. 또한, 전역 클래스 중심을 사용하여 예측된 마스크를 정제함으로써 예측 품질을 향상시킵니다. 두 가지 전략 모두 빠르고 안정적인 수렴을 위해 동적 모멘텀을 사용합니다. 특히, 본 방법은 역전파가 필요하지 않아 빠르고 가벼우며, 새로운 도메인에 대한 즉각적인 적응에 매우 적합합니다. 다양한 도메인 적응 시나리오에 걸친 종합적인 실험을 통해 제안 방법의 강력한 성능을 입증합니다."
    },
    {
        "title": "All but One: Surgical Concept Erasing with Model Preservation in Text-to-Image Diffusion Models",
        "authors": [
            "SeungHoo Hong",
            "Juhun Lee",
            "Simon S. Woo"
        ],
        "venue_full": "AAAI Conference on Artificial Intelligence",
        "venue": "AAAI",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            4
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.1609/aaai.v38i19.30107"
        },
        "img": "/img/Publications/joseph_aaai23.jpg",
        "abstract": "Text-to-Image models such as Stable Diffusion have shown impressive image generation synthesis, thanks to the utilization of large-scale datasets. However, these datasets may contain sexually explicit, copyrighted, or undesirable content, which allows the model to directly generate them. Given that retraining these large models on individual concept deletion requests is infeasible, fine-tuning algorithms have been developed to tackle concept erasing in diffusion models. While these algorithms yield good concept erasure, they all present one of the following issues: 1) the semantics of the prompts change over time, 2) long and inefficient training exposes the model to more harm, and 3) the spatial structure distribution of each generated image is not preserved after fine-tuning. These issues severely degrade the original utility of generative models. In this work, we present a new approach that solves all of these challenges. We take inspiration from the concept of classifier guidance and propose a surgical update on the classifier guidance term while constraining the unconditional score term. Furthermore, our algorithm empowers the user to select an alternative to the erasing concept, allowing for more controllability. Our experimental results show that our algorithm not only erases the target concept effectively but also preserves the model's generation capability.",
        "abstract_ko": "Stable Diffusion과 같은 텍스트-투-이미지 모델은 대규모 데이터셋의 활용 덕분에 인상적인 이미지 생성 합성을 보여주었습니다. 그러나 이러한 데이터셋에는 성적으로 노골적이거나 저작권이 있는 콘텐츠, 또는 바람직하지 않은 내용이 포함될 수 있으며, 이는 모델이 이를 직접 생성할 수 있게 합니다. 이러한 대규모 모델을 개별 개념 삭제 요청에 맞춰 재훈련하는 것이 불가능하기 때문에, 확산 모델에서 개념 삭제를 처리하기 위해 미세 조정(fine-tuning) 알고리즘이 개발되었습니다. 이러한 알고리즘은 좋은 개념 삭제 결과를 제공하지만, 모두 다음 중 하나의 문제를 가지고 있습니다: 1) 프롬프트의 의미가 시간에 따라 변한다, 2) 길고 비효율적인 훈련으로 인해 모델이 더 많은 피해를 입는다, 3) 미세 조정 후 각 생성 이미지의 공간 구조 분포가 유지되지 않는다. 이러한 문제들은 생성 모델의 원래 유용성을 심각하게 저하시킵니다. 본 연구에서는 이러한 모든 문제를 해결하는 새로운 접근 방식을 제시합니다. 본 연구에서는 분류기 가이드(classifier guidance) 개념에서 영감을 받아 분류기 가이드 항목에 대한 수술적 업데이트를 제안하면서 무조건적 점수 항목을 제한합니다. 또한 우리의 알고리즘은 사용자가 지우기 개념의 대안을 선택할 수 있도록 하여 더 높은 제어성을 가능하게 합니다. 실험 결과, 우리의 알고리즘이 대상 개념을 효과적으로 지울 뿐만 아니라 모델의 생성 능력도 유지함을 보여줍니다."
    },
    {
        "title": "Layer Attack Unlearning: Fast and Accurate Machine Unlearning via Layer Level Attack and Knowledge Distillation",
        "authors": [
            "Hyunjune Kim",
            "Sangyong Lee",
            "Simon S. Woo"
        ],
        "venue_full": "AAAI Conference on Artificial Intelligence",
        "venue": "AAAI",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            4
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.1609/aaai.v38i19.30118"
        },
        "img": "/img/Publications/kim_aaai23.jpg",
        "abstract": "In this work, we propose a fast and novel machine unlearning paradigm at the layer level called layer attack unlearning, which is highly accurate and fast compared to existing machine unlearning algorithms. We introduce the Partial-PGD algorithm to locate the samples to forget efficiently. In addition, we only use the last layer of the model inspired by the Forward-Forward algorithm for unlearning process. Lastly, we use Knowledge Distillation (KD) to reliably learn the decision boundaries from the teacher using soft label information to improve accuracy performance. We conducted extensive experiments with SOTA machine unlearning models and demonstrated the effectiveness of our approach for accuracy and end-to-end unlearning performance.",
        "abstract_ko": "본 연구에서는 레이어 수준에서 빠르고 새로운 기계 학습 지우기 패러다임인 레이어 공격 지우기(layer attack unlearning)를 제안하며, 이는 기존 기계 학습 지우기 알고리즘에 비해 매우 정확하고 빠릅니다. 본 연구에서는 Partial-PGD 알고리즘을 도입하여 지워야 할 샘플을 효율적으로 찾습니다. 또한, 지우기 과정에서 Forward-Forward 알고리즘에서 영감을 받아 모델의 마지막 레이어만 사용합니다. 마지막으로, Knowledge Distillation(KD)을 사용하여 소프트 라벨 정보를 활용해 교사 모델로부터 결정 경계를 신뢰성 있게 학습함으로써 정확도 성능을 개선합니다. 본 연구에서는 최신 기계 학습 지우기 모델들과 광범위한 실험을 수행하였으며, 정확도와 End-to-End 지우기 성능 측면에서 제안 접근의 효과를 입증했습니다."
    },
    {
        "title": "Blind-Touch: Homomorphic Encryption-Based Distributed Neural Network Inference for Privacy-Preserving Fingerprint Authentication",
        "authors": [
            "Hyunmin Choi",
            "Simon S. Woo",
            "Hyoungshick Kim"
        ],
        "venue_full": "AAAI Conference on Artificial Intelligence",
        "venue": "AAAI",
        "track": null,
        "Factor": [
            "BK Computer Science IF=",
            4
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.1609/aaai.v38i20.30200"
        },
        "img": "/img/Publications/choi_aaai23.jpg",
        "abstract": "This paper introduces Blind-Touch, a novel machine learning-based fingerprint authentication system that leverages homomorphic encryption to address these privacy concerns. Homomorphic encryption allows for computations on encrypted data without decrypting it. Therefore, Blind-Touch can keep fingerprint data encrypted on the server while performing machine learning operations. Blind-Touch integrates three techniques to address the computational challenges of using homomorphic encryption for machine learning: (1) A distributed machine learning architecture that divides inference tasks between the client and server, thereby reducing encrypted computations on the server; (2) A data compression method that reduces client-server communication costs; and (3) A cluster architecture that improves scalability with the number of registered users. Blind-Touch achieves high accuracy on two benchmark fingerprint datasets, with a 93.6% F1-score for the PolyU dataset and a 98.2% F1-score for the SOKOTO dataset. Moreover, Blind-Touch can match a fingerprint among 5,000 in about 0.65 seconds.With its privacyfocused design, high accuracy, and efficiency, Blind-Touch is a promising alternative to conventional fingerprint authentication\nfor web and cloud applications.",
        "abstract_ko": "본 논문은 블라인드-터치(Blind-Touch)를 소개하는데, 이는 동형암호를 활용하여 이러한 프라이버시 문제를 해결하는 새로운 머신러닝 기반 지문 인증 시스템이다. 동형암호는 데이터를 복호화하지 않고도 연산을 수행할 수 있게 한다. 따라서 블라인드-터치는 서버에서 지문 데이터를 암호화 상태로 유지하면서 머신러닝 연산을 수행할 수 있다. 블라인드-터치는 머신러닝에 동형암호를 사용하는 데 따른 계산적 문제를 해결하기 위해 세 가지 기술을 통합한다: (1) 클라이언트와 서버 간 추론 작업을 나누어 서버에서의 암호화 연산을 줄이는 분산 머신러닝 아키텍처, (2) 클라이언트-서버 간 통신 비용을 줄이는 데이터 압축 방법, (3) 등록 사용자 수에 따른 확장성을 개선하는 클러스터 아키텍처. Blind-Touch는 두 개의 벤치마크 지문 데이터셋에서 높은 정확도를 달성했으며, PolyU 데이터셋에서는 93.6% F1-스코어, SOKOTO 데이터셋에서는 98.2% F1-스코어를 기록했습니다. 또한, Blind-Touch는 약 0.65초 만에 5,000개의 지문 중 하나를 매칭할 수 있습니다. 개인 정보 보호 중심 설계, 높은 정확도, 효율성을 가진 Blind-Touch는 웹 및 클라우드 애플리케이션을 위한 기존 지문 인증의 유망한 대안입니다."
    },
    {
        "title": "Hardening Interpretable Deep Learning Systems: Investigating Adversarial Threats and Defenses",
        "authors": [
            "Eldor Abdukhamidov",
            "Mohammed Abuhamad",
            "Simon S. Woo",
            "Eric Chan-Tin",
            "Tamer Abuhmed"
        ],
        "venue_full": "IEEE Transactions on Dependable and Secure Computing",
        "venue": null,
        "track": "SCIE Journal",
        "presentationType": null,
        "Factor": [
            "SCIE IF =",
            6.8
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.1109/tdsc.2023.3341090"
        },
        "img": "/img/Publications/Hardening Interpretable.png",
        "abstract": "This work introduces two attacks, AdvEdge and AdvEdge+, which deceive both the target deep learning model and the coupled interpretation model. We assess the effectiveness of proposed attacks against four deep learning model architectures coupled with four interpretation models that represent different categories of interpretation models. Our experiments include the implementation of attacks using various attack frameworks. We also explore the attack resilience against three general defense mechanisms and potential countermeasures. Our analysis shows the effectiveness of our attacks in terms of deceiving the deep learning models and their interpreters, and highlights insights to improve and circumvent the attacks.",
        "abstract_ko": "본 연구에서는 목표 딥러닝 모델과 결합된 해석 모델 모두를 속이는 두 가지 공격, AdvEdge와 AdvEdge+를 소개합니다. 본 연구에서는 다양한 해석 모델 범주를 대표하는 네 가지 해석 모델과 결합된 네 가지 딥러닝 모델 아키텍처에 대해 제안된 공격의 효과를 평가합니다. 우리의 실험에는 다양한 공격 프레임워크를 사용한 공격 구현이 포함됩니다. 또한 세 가지 일반적인 방어 메커니즘에 대한 공격의 내성과 잠재적 대응책을 탐구합니다. 우리의 분석은 딥러닝 모델과 그 해석기를 속이는 측면에서 공격의 효과를 보여주고, 공격을 개선하고 회피하기 위한 통찰을 강조합니다."
    },
    {
        "title": "RAAD: Reinforced Adversarial Anomaly Detector",
        "authors": [
            "Simon S Woo",
            "Daeyoung Yoon",
            "Yuseung Gim",
            "Eunseok Park"
        ],
        "venue_full": "ACM SIGAPP Symposium on Applied Computing",
        "venue": "SAC",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.1145/3605098.3635920"
        },
        "img": "/img/Publications/RAAD.png",
        "abstract": "We propose a novel framework called Reinforced Adversarial Anomaly Detector (RAAD) based on Reinforcement Learning to mine and detect anomalies or attacks in the presence of very few attack or anomaly patterns in time-series. Our approach uses two adversarial agents, where one agent acts as an attacker and the other as a defender. The attacker agent learns a policy to disturb the defender agent by effectively sampling the defender’s worst-performing trajectories from synthetically generated states provided by the environment, while the defender agent learns a policy that can distinguish between the normal and abnormal (attack) states. Upon successful training of two adversarial policies, the defender agent can effectively evaluate whether a new observation follows the distribution of normal states. In particular, RAAD overcomes the inherent overfitting issue, which other approaches have, through adversarial training and Reinforcement Learning. Using multiple real-world anomaly and attack detection datasets, we demonstrate that RAAD outperforms the several other baseline approaches in identifying abnormal patterns.",
        "abstract_ko": "본 연구에서는 강화 학습을 기반으로 한 Reinforced Adversarial Anomaly Detector (RAAD)라는 새로운 프레임워크를 제안하여, 시계열 데이터에서 매우 적은 공격이나 이상 패턴만 존재할 때도 이상이나 공격을 탐지하고 분석할 수 있습니다. 제안 접근법은 두 개의 적대적 에이전트를 사용하는데, 한 에이전트는 공격자로, 다른 한 에이전트는 방어자로 작동합니다. 공격자 에이전트는 환경에서 제공된 합성 상태로부터 방어자의 성능이 가장 낮은 경로를 효과적으로 샘플링하여 방어자를 방해하는 정책을 학습하고, 방어자 에이전트는 정상 상태와 비정상(공격) 상태를 구분할 수 있는 정책을 학습합니다. 두 개의 적대적 정책이 성공적으로 학습되면, 방어자 에이전트는 새로운 관측치가 정상 상태의 분포를 따르는지 효과적으로 평가할 수 있습니다. 특히, RAAD는 적대적 학습과 강화 학습을 통해 다른 접근법들이 가지고 있는 고유한 과적합 문제를 극복합니다. 여러 실제 이상 및 공격 탐지 데이터셋을 사용하여, 본 연구에서는 RAAD가 비정상 패턴을 식별하는 데 있어 여러 다른 기준 접근법들보다 우수함을 보여줍니다."
    },
    {
        "title": "Action Attention GRU: A Data-Driven Approach for Enhancing Purchase Predictions in Digital Marketing",
        "authors": [
            "Girim Ban",
            "Simon S Woo",
            "David Sung"
        ],
        "venue_full": "ACM SIGAPP Symposium on Applied Computing",
        "venue": "SAC",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.1145/3605098.3635958"
        },
        "img": "/img/Publications/AAGRU.png",
        "abstract": "We present a data-driven model, the Action Attention bidirectional Gated Recurrent Unit (AAGRU) to effectively learn sequences of user behaviors without explicit knowledge of the actors or targets for conversion prediction. Tailored to predict impending purchases based on ADID’s customer journey, AAGRU leverages two pivotal components: the Action Block and the Interval Block. The former adeptly captures salient actions in the journey through attention mechanisms, while the latter discerns temporal nuances, such as impulse and deliberate buying tendencies. This tailored approach enables digital marketing agencies to identify latent customers primed for purchase, thus optimizing targeted advertising and conversion strategies. Our experimental results affirm AAGRU’s superiority over extant deep learning models. Significantly, in simulations, AAGRU demonstrated impressive performance against our company’s best audience group.",
        "abstract_ko": "본 연구에서는 배우나 전환 대상에 대한 명시적 지식 없이 사용자의 행동 시퀀스를 효과적으로 학습할 수 있는 데이터 기반 모델인 Action Attention 양방향 Gated Recurrent Unit(AAGRU)을 제시합니다. ADID의 고객 여정을 기반으로 다가오는 구매를 예측하도록 맞춤 설계된 AAGRU는 두 가지 핵심 구성 요소인 액션 블록(Action Block)과 인터벌 블록(Interval Block)을 활용합니다. 전자는 주의 메커니즘을 통해 여정에서 중요한 행동을 능숙하게 포착하며, 후자는 충동 구매 및 신중한 구매 경향과 같은 시간적 뉘앙스를 식별합니다. 이러한 맞춤 접근 방식은 디지털 마케팅 에이전시가 구매 준비가 된 잠재 고객을 식별하여 타겟 광고 및 전환 전략을 최적화할 수 있게 합니다. 우리의 실험 결과는 AAGRU가 기존 딥러닝 모델보다 우수함을 입증합니다. 특히 시뮬레이션에서 AAGRU는 우리 회사의 최고의 고객 그룹을 대상으로 인상적인 성능을 보여주었습니다."
    },
    {
        "title": "Real-Time User-guided Adaptive Colorization with Vision Transformer",
        "authors": [
            "Gwanghan Lee",
            "Saebyeol Shin",
            "Taeyoung Na",
            "Simon S. Woo"
        ],
        "venue_full": "2024 IEEE/CVF Winter Conference on Applications of Computer Vision",
        "venue": "WACV",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.1109/wacv57701.2024.00054"
        },
        "img": "/img/Publications/Screen Shot 2023-11-25 at 2.52.37 PM.png",
        "abstract": "We propose a novel efficient ViT architecture for real-time interactive colorization, AdaColViT determines which redundant image patches and layers to reduce in the ViT. Unlike existing methods, our novel pruning method alleviates performance drop and flexibly allocates computational resources of input samples, effectively achieving actual acceleration. In addition, we demonstrate through extensive experiments on ImageNet-ctest10k, Oxford 102flowers, and CUB-200 datasets that our method outperforms the baseline methods.",
        "abstract_ko": "본 연구에서는 실시간 상호작용 색채화용으로 새로운 효율적인 ViT 아키텍처를 제안한다. AdaColViT는 ViT에서 어느 불필요한 이미지 패치와 레이어를 줄일지 결정한다. 기존 방법과 달리, 우리의 새로운 가지치기 방법은 성능 저하를 완화하고 입력 샘플의 계산 자원을 유연하게 할당하여 실제 가속을 효과적으로 달성한다. 또한, 본 연구에서는 ImageNet-ctest10k, Oxford 102flowers, CUB-200 데이터셋에 대한 광범위한 실험을 통해 제안 방법이 기본 방법보다 우수함을 보여준다."
    },
    {
        "title": "EAE-GAN: Emotion-Aware Emoji Generative Adversarial Network for Computational Modeling Diverse and Fine-Grained Human Emotions",
        "authors": [
            "SangEun Lee",
            "Seoyun Kim",
            "Yeonju Chu",
            "JeongWon Choi",
            "Eunil Park",
            "Simon S. Woo"
        ],
        "venue_full": "IEEE Transactions on Computational Social Systems",
        "venue": null,
        "track": "SCIE Journal",
        "presentationType": null,
        "Factor": [
            "SCIE IF =",
            5.0
        ],
        "year": 2024,
        "links": {
            "conf": "https://doi.org/10.1109/tcss.2023.3329434"
        },
        "img": "/img/Publications/TCS.png",
        "abstract": "With the growing ubiquity and broad usage, emojis are widely used as a universal visual language, which complements the intentions and emotions beyond the textual data. Despite the critical role of representing emotion, existing emojis neglect the subtle and complex properties of human emotion in that only countable and finite face emojis exist in a categorical manner. In this article, we propose a novel approach to facial emoji generation, which can control the emotional degree of generated emojis for more complex and detailed usage on online conversations. In other words, we develop a new emotion aware emoji generative adversarial network, which is capable of generating an emoji that expresses a given emotion distribution. In this way, our approach aims to map fine grained emotions to expressive emojis. Both quantitative and qualitative evaluation demonstrate that our approach can successfully generate high quality emoji like images by representing a wide range of emo tions. To the best of our knowledge, this is the first approach to use the deep generative model from the standpoint of the emoji’s emotional role, which can further promote more interactive and effective online communication.",
        "abstract_ko": "이모지가 점점 더 널리 보급되고 사용됨에 따라, 이모지는 텍스트 데이터를 넘어서는 의도와 감정을 보완하는 보편적인 시각적 언어로 널리 사용되고 있습니다. 감정을 표현하는 중요한 역할에도 불구하고, 기존 이모지는 인간 감정의 미묘하고 복잡한 속성을 무시하며, 오직 계산 가능하고 유한한 얼굴 이모지만이 범주형으로 존재합니다. 본 논문에서는 온라인 대화에서 보다 복잡하고 세밀한 사용을 위해 생성된 이모지의 감정 정도를 제어할 수 있는 얼굴 이모지 생성에 대한 새로운 접근 방식을 제안합니다. 다시 말해, 주어진 감정 분포를 표현하는 이모지를 생성할 수 있는 새로운 감정 인식 이모지 생성적 적대 신경망(emotion aware emoji generative adversarial network)을 개발합니다. 이러한 방식으로, 제안 접근은 세밀한 감정을 표현이 풍부한 이모지로 매핑하는 것을 목표로 합니다. 정량적 및 정성적 평가 모두 제안 접근법이 다양한 감정을 표현하여 고품질의 이모지와 유사한 이미지를 성공적으로 생성할 수 있음을 보여줍니다. 우리가 아는 한, 이것은 이모지의 감정적 역할이라는 관점에서 딥 생성 모델을 사용하는 첫 번째 접근법으로, 이를 통해 보다 상호작용적이고 효과적인 온라인 커뮤니케이션을 촉진할 수 있습니다."
    },
    {
        "title": "Extreme Environment Rotated Object Detection Network",
        "authors": [
            "Giljun Lee",
            "Junyaup Kim",
            "Gwanghan Lee",
            "Simon S. Woo"
        ],
        "venue_full": "Journal of KIISE",
        "venue": null,
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2023,
        "links": {
            "conf": "https://doi.org/10.5626/jok.2023.50.11.966"
        },
        "img": "/img/Publications/E^2RDet.png",
        "abstract": "This paper proposes E^2RDet. This algorithm effectively modifies the structure of the Yolov7 object detection model, enabling it to accurately detect objects represented by oriented bounding boxes (OBB) in SAR images. This algorithm improves the object detection model architecture and loss function to facilitate learning of an object's dynamic (orientation) posture. Using various training datasets, E^2RDet demonstrates performance improvements across three benchmark SAR datasets. This indicates that existing HBB object detection models can train and perform object detection on objects represented by OBBs.",
        "abstract_ko": "본 논문에서는 E^2RDet을 제안합니다. 이 알고리즘은 Yolov7 객체 탐지 모델의 구조를 효과적으로 수정하여 SAR 이미지에서 방향성 경계 상자(OBB)로 표현된 객체를 정확하게 탐지할 수 있게 합니다. 이 알고리즘은 객체의 동적(방향) 자세 학습을 용이하게 하기 위해 객체 탐지 모델의 구조와 손실 함수를 개선합니다. 다양한 학습 데이터셋을 사용하여 E^2RDet은 세 가지 벤치마크 SAR 데이터셋에서 성능 향상을 보여줍니다. 이는 기존 HBB 객체 탐지 모델이 OBB로 표현된 객체를 학습하고 객체 탐지를 수행할 수 있음을 나타냅니다."
    },
    {
        "title": "KappaFace: Adaptive Additive Angular Margin Loss for Deep Face Recognition",
        "authors": [
            "Chingis Oinar",
            "Binh M. Le",
            "Simon S. Woo"
        ],
        "venue_full": "IEEE Access",
        "venue": null,
        "track": "SCIE Journal",
        "presentationType": null,
        "Factor": [
            "SCIE IF =",
            3.47
        ],
        "year": 2023,
        "links": {
            "conf": "https://doi.org/10.1109/access.2023.3338648"
        },
        "img": "/img/Publications/ching_TIP23.png",
        "abstract": "Imbalanced learning might include both classes having different learning difficulties or different numbers of available training samples. We hypothesize that it significantly affects the generalization ability of the deep face models. Inspired by this, we introduce a novel adaptive strategy, called KappaFace, to modulate the relative importance based on class learning difficulty and its imbalance. Due to the von Mises-Fisher distribution, our proposed KappaFace loss can intensify margins for difficult-to-learn or under-represent classes while relaxing that of counter classes. Experiments conducted on popular facial benchmarks demonstrate that our proposed method achieves superior performance to the state-of-the-art methods.",
        "abstract_ko": "불균형 학습은 두 클래스가 서로 다른 학습 난이도를 가지거나 사용할 수 있는 학습 샘플 수가 다를 수 있습니다. 본 연구에서는 이것이 딥 페이스 모델의 일반화 능력에 상당한 영향을 미친다고 가정합니다. 이를 바탕으로 클래스 학습 난이도와 불균형에 따라 상대적 중요도를 조절하는 새로운 적응 전략인 KappaFace를 소개합니다. 폰 미제스-피셔 분포(von Mises-Fisher distribution) 덕분에, 제안된 KappaFace 손실은 학습하기 어렵거나 과소 대표되는 클래스의 마진을 강화하고, 반대 클래스의 마진은 완화할 수 있습니다. 인기 있는 얼굴 벤치마크에서 수행된 실험은 제안된 방법이 최신 방법보다 우수한 성능을 달성함을 보여줍니다."
    },
    {
        "title": "Occupational Gender Bias in Large Language Models evaluated on multiple languages",
        "authors": [
            "Seung-yeon Back",
            "Eun-Ju Park",
            "Simon S. Woo"
        ],
        "venue_full": "ACM CIKM Workshop on Large Language Models’ Interpretation and Trustworthiness",
        "venue": "LLIMT",
        "track": "Workshop Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2023,
        "links": {},
        "img": "/img/Publications/seungyeon_llm.png",
        "abstract": "In our study, we turn our attention specifically to the bias issues at the intersection of gender and occupations within LLM-generated text. Our research seeks to address this concern by examining how gender bias is reflected in responses generated by LLMs, with a focus on the fields of gender and occupation. We aim to explore these biases not only in English, but also in Korean language, thereby expanding the scope of our investigation to different linguistic and cultural contexts. Through these investigations, our research aims to provide a comprehensive comparison of bias patterns across different languages and cultures. Ultimately, we seek to contribute to the ongoing dialogue surrounding ethical concerns in LLMs and offer implications for future developments in the field of natural language processing.",
        "abstract_ko": "우리 연구에서는 LLM이 생성한 텍스트에서 성별과 직업이 교차하는 지점에서의 편향 문제에 특히 주목합니다. 우리의 연구는 성별과 직업 분야에 초점을 맞추어 LLM이 생성한 응답에서 성별 편향이 어떻게 반영되는지를 조사함으로써 이 문제를 다루고자 합니다. 본 연구에서는 이러한 편향을 영어뿐만 아니라 한국어에서도 탐구함으로써 다양한 언어적·문화적 맥락으로 연구 범위를 확장하고자 합니다. 이러한 조사를 통해, 우리의 연구는 언어와 문화를 넘어 다양한 편향 패턴을 종합적으로 비교하는 것을 목표로 합니다. 궁극적으로, 본 연구에서는 LLM에서의 윤리적 문제에 대한 지속적인 논의에 기여하고, 자연어 처리 분야의 향후 발전에 대한 시사점을 제공하고자 합니다."
    },
    {
        "title": "Anomaly and Novelty detection for Satellite and Drone systems (ANSD '23)",
        "authors": [
            "Shahroz Tariq",
            "Daewon Chung",
            "Simon S. Woo",
            "Youjin Shin"
        ],
        "venue_full": "ACM Workshop on International Conference on Information and Knowledge Management",
        "venue": "CIKM",
        "track": "Workshop Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2023,
        "links": {
            "conf": "https://doi.org/10.1145/3583780.3615306"
        },
        "img": "/img/Publications/Call For Papers.png",
        "abstract": "In recent times, there has been a notable surge in the amount of vision and sensing/time-series data obtained from drones and satellites. This data can be utilized in various fields, such as precision agriculture, disaster management, environmental monitoring, and others. However, the analysis of such data poses significant challenges due to its complexity, heterogeneity, and scale. Furthermore, it is critical to identify anomalies and maintain/monitor the health of drones and satellite systems to enable the aforementioned applications and sciences. This workshop presents an excellent opportunity to explore solutions that specifically target the detection of anomalies and novel occurrences in drones and satellite systems and their data. The workshop is designed to promote knowledge exchange, collaboration, and innovation in Anomaly and Novelty detection for Satellite and Drone systems. Through this platform, researchers, practitioners, and industry experts are expected to come together to explore and discuss the latest developments, challenges, and opportunities in analyzing and maintaining the health of drone and satellite systems, in addition to detecting anomalies and novelties in the associated vision and time-series data. The primary objective of the workshop is to facilitate in-depth discussions on various techniques, methodologies, and applications related to anomaly and novelty detection. Participants will be encouraged to share their ideas and experiences on how best to identify new research directions and potential collaborations. Ultimately, the workshop aims to enhance the capabilities of leveraging drone and satellite systems for diverse applications such as precision agriculture, disaster management, and environmental monitoring. By the end of the workshop, participants are expected to gain valuable insights into state-of-the-art approaches and establish connections with peers. This will provide an opportunity for them to contribute to the advancement of knowledge in this domain, leading to more efficient and effective utilization of drone and satellite systems. For more information, visit our website at ANSD'23.",
        "abstract_ko": "최근 들어 드론과 위성에서 얻어지는 영상 및 센싱/시계열 데이터의 양이 눈에 띄게 증가하고 있습니다. 이러한 데이터는 정밀 농업, 재난 관리, 환경 모니터링 등 다양한 분야에서 활용될 수 있습니다. 그러나 이러한 데이터의 분석은 그 복잡성, 이질성, 규모 때문에 상당한 어려움을 수반합니다. 더 나아가, 앞서 언급한 응용 및 과학을 가능하게 하기 위해서는 드론과 위성 시스템의 이상을 식별하고 시스템의 상태를 유지/모니터링하는 것이 중요합니다. 본 워크숍은 드론과 위성 시스템 및 그 데이터에서 이상 및 새로운 발생을 탐지하는 솔루션을 구체적으로 탐구할 수 있는 훌륭한 기회를 제공합니다. 이 워크숍은 위성 및 드론 시스템의 이상 및 새로운 발생 탐지 분야에서 지식 교류, 협력, 혁신을 촉진하도록 설계되었습니다. 이 플랫폼을 통해 연구자, 전문가, 산업 전문가들이 모여 드론 및 위성 시스템의 건강 상태를 분석하고 유지하는 최신 개발 사항, 과제 및 기회를 탐구하고 논의할 것으로 기대됩니다. 또한 관련된 비전 및 시계열 데이터에서 이상 및 새로움을 감지하는 것과 관련된 논의도 포함됩니다. 워크숍의 주요 목적은 이상 및 새로움 감지와 관련된 다양한 기술, 방법론 및 응용에 대한 심층 논의를 촉진하는 것입니다. 참가자들은 새로운 연구 방향과 잠재적 협업을 가장 잘 식별하는 방법에 대한 아이디어와 경험을 공유하도록 권장됩니다. 궁극적으로 워크숍은 정밀 농업, 재난 관리, 환경 모니터링과 같은 다양한 응용을 위해 드론 및 위성 시스템을 활용하는 능력을 향상시키는 것을 목표로 합니다. 워크숍이 끝날 무렵, 참가자들은 최첨단 접근 방식에 대한 귀중한 통찰을 얻고 동료들과의 연결을 구축할 것으로 기대됩니다. 이는 이 분야의 지식 발전에 기여할 수 있는 기회를 제공하여 드론 및 위성 시스템의 보다 효율적이고 효과적인 활용으로 이어질 것입니다. 자세한 정보는 ANSD'23 웹사이트를 방문하십시오."
    },
    {
        "title": "KID34K: A Dataset for Online Identity Card Fraud Detection",
        "authors": [
            "Eun-Ju Park",
            "Seung-Yeon Back",
            "Jeongho Kim",
            "Simon S. Woo"
        ],
        "venue_full": "ACM International Conference on Information and Knowledge Management",
        "venue": "CIKM",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            0
        ],
        "year": 2023,
        "links": {
            "conf": "https://doi.org/10.1145/3583780.3615122"
        },
        "img": "/img/Publications/kid34k_cikm23.jpg",
        "abstract": "To mitigate the risks associated with fraudulent ID card verification, we present a novel dataset for classifying cases where the ID card images that users upload to the verification system are genuine or digitally represented. Our dataset is replicas designed to resemble real ID cards, making it available while avoiding privacy issues. Through extensive experiments, we demonstrate that our dataset is effective for detecting digitally represented ID card images, not only in our replica dataset but also in the dataset consisting of real ID cards.",
        "abstract_ko": "사기성 신분증 검증과 관련된 위험을 완화하기 위해, 사용자들이 검증 시스템에 업로드하는 신분증 이미지가 실제인지 디지털로 표현된 것인지를 분류하는 새로운 데이터셋을 제시합니다. 우리 데이터셋은 실제 신분증과 유사하게 설계된 복제품으로 구성되어 있어, 프라이버시 문제를 피하면서도 사용이 가능합니다. 광범위한 실험을 통해, 본 연구에서는 이 데이터셋이 단지 복제품 데이터셋뿐만 아니라 실제 신분증으로 구성된 데이터셋에서도 디지털로 표현된 신분증 이미지를 탐지하는 데 효과적임을 입증합니다."
    },
    {
        "title": "UNDO: Effective and Accurate Unlearning Method for Deep Neural Networks",
        "authors": [
            "Sangyong Lee",
            "Simon S. Woo"
        ],
        "venue_full": "ACM International Conference on Information and Knowledge Management",
        "venue": "CIKM",
        "track": "Short Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            2
        ],
        "year": 2023,
        "links": {
            "conf": "https://doi.org/10.1145/3583780.3615235"
        },
        "img": "/img/Publications/undo_cikm23.jpg",
        "abstract": "In this work, we propose a novel two-step unlearning approach UNDO. First, we selectively disrupt the decision boundary of forgetting data at the coarse-grained level. However, this can also inadvertently affect the decision boundary of other remaining data, lowering the overall performance of classification task. Hence, we subsequently repair and refining the decision boundary for each class at the fine-grained level by introducing a loss for maintain the overall performance, while completely removing the class. We conducted extensive experiments with SOTA models over two datasets, and demonstrated the effectiveness and efficiency of our approach for unlearning, compared to other methods.",
        "abstract_ko": "본 연구에서는 새로운 두 단계 언러닝 접근법인 UNDO를 제안합니다. 먼저, 본 연구에서는 삭제할 데이터의 결정 경계를 거친 수준에서 선택적으로 교란시킵니다. 그러나 이는 다른 남아 있는 데이터의 결정 경계에도 의도치 않게 영향을 미쳐 분류 작업의 전체 성능을 낮출 수 있습니다. 따라서 본 연구에서는 이후 각 클래스의 결정 경계를 세밀한 수준에서 수리하고 정제하며, 전체 성능을 유지하기 위한 손실을 도입하면서 해당 클래스를 완전히 제거합니다. 본 연구에서는 두 개의 데이터셋에서 최신 모델을 사용하여 광범위한 실험을 수행하였고, 다른 방법과 비교하여 본 접근법의 언러닝에 대한 효과성과 효율성을 입증하였습니다."
    },
    {
        "title": "SAFE: Sequential Attentive Face Embedding with Contrastive Learning for Deepfake Video Detection",
        "authors": [
            "Juho Jung",
            "Chaewon Kang",
            "Jeewoo Yoon",
            "Simon S. Woo",
            "Jinyoung Han"
        ],
        "venue_full": "ACM International Conference on Information and Knowledge Management",
        "venue": "CIKM",
        "track": "Short Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            2
        ],
        "year": 2023,
        "links": {
            "conf": "https://doi.org/10.1145/3583780.3615279"
        },
        "img": "/img/Publications/safe_cikm23.png",
        "abstract": "This paper proposes a novel sequential attentive face\nembedding, SAFE, that can capture facial dynamics in a deepfake video. The proposed SAFE can effectively integrate global and local dynamics of facial features revealed in a video sequence using contrastive learning. Through a comprehensive comparison with the state-of-the-art methods on the DFDC (Deepfake Detection\nChallenge) dataset and the FaceForensic++ benchmark, we show that our model achieves the highest accuracy in detecting deepfake videos on both datasets.",
        "abstract_ko": "본 논문은 딥페이크 영상에서 얼굴의 동적 변화를 포착할 수 있는 새로운 순차적 주의 얼굴 임베딩인 SAFE를 제안한다. 제안된 SAFE는 대조 학습을 사용하여 영상 시퀀스에서 나타나는 얼굴 특징의 전역 및 국소 동적 변화를 효과적으로 통합할 수 있다. DFDC(Deepfake Detection Challenge) 데이터셋과 FaceForensic++ 벤치마크에서 최첨단 방법들과 포괄적으로 비교한 결과, 제안 모델이 두 데이터셋 모두에서 딥페이크 영상을 감지하는 최고 정확도를 달성함을 보여준다."
    },
    {
        "title": "Towards Understanding of Deepfake Videos in the Wild",
        "authors": [
            "Beomsang Cho",
            "Binh M. Le",
            "Jiwon Kim",
            "Simon S. Woo",
            "Shahroz Tariq",
            "Alsharif Abuadbba",
            "Kristen Moore"
        ],
        "venue_full": "ACM International Conference on Information and Knowledge Management",
        "venue": "CIKM",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            3
        ],
        "year": 2023,
        "links": {
            "conf": "https://doi.org/10.48550/arxiv.2309.01919"
        },
        "img": "/img/Publications/rwdf23_cikm23.png",
        "abstract": "Our contributions in this IRB-approved study are to bridge this knowledge gap from current real-world deepfakes by providing in-depth analysis.We first present the largest and most diverse and recent deepfake dataset (RWDF-23) collected from the wild to date, consisting of 2,000 deepfake videos collected from 4 platforms targeting 4 different languages span created from 21 countries: Reddit, YouTube, TikTok, and Bilibili. By expanding the dataset's scope beyond the previous research, we capture a broader range of real-world deepfake content, reflecting the ever-evolving landscape of online platforms. Also, we conduct a comprehensive analysis encompassing various aspects of deepfakes, including creators, manipulation strategies, purposes, and real-world content production methods. This allows us to gain valuable insights into the nuances and characteristics of deepfakes in different contexts. Lastly, in addition to the video content, we also collect viewer comments and interactions, enabling us to explore the engagements of internet users with deepfake content.",
        "abstract_ko": "이 IRB 승인 연구에서 우리의 기여는 심층 분석을 제공함으로써 현재 실제 딥페이크에서 나타나는 지식 격차를 연결하는 것입니다. 먼저, 지금까지 야생에서 수집된 가장 크고 다양하며 최신의 딥페이크 데이터셋(RWDF-23)을 제시합니다. 이 데이터셋은 21개국에서 제작된 4개의 언어를 대상으로 한 4개의 플랫폼에서 수집된 2,000개의 딥페이크 영상으로 구성됩니다: Reddit, YouTube, TikTok, Bilibili. 이전 연구를 넘어 데이터셋의 범위를 확장함으로써, 본 연구에서는 온라인 플랫폼의 끊임없이 변화하는 환경을 반영하는 더 넓은 범위의 실제 딥페이크 콘텐츠를 포착합니다. 또한 본 연구에서는 제작자, 조작 전략, 목적, 실제 콘텐츠 제작 방법을 포함한 딥페이크의 다양한 측면을 포괄하는 종합적인 분석을 수행합니다. 이는 우리가 다양한 상황에서 딥페이크의 미묘한 차이와 특성에 대한 귀중한 통찰을 얻을 수 있게 해줍니다. 마지막으로, 영상 콘텐츠 외에도 시청자 댓글과 상호작용을 수집하여 인터넷 사용자가 딥페이크 콘텐츠와 어떻게 소통하는지 탐구할 수 있습니다."
    },
    {
        "title": "Quality-Agnostic Deepfake Detection with Intra-model Collaborative Learning",
        "authors": [
            "Binh M. Le",
            "Simon S. Woo"
        ],
        "venue_full": "IEEE/CVF International Conference on Computer Vision",
        "venue": "ICCV",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            4
        ],
        "year": 2023,
        "links": {
            "conf": "https://doi.org/10.1109/iccv51070.2023.02045"
        },
        "img": "/img/Publications/qad_iccv23_arch.png",
        "abstract": "In this work, we propose a universal intra-model collaborative learning framework to enable the effective and simultaneous detection of different quality of deepfakes. That is, our approach is the quality-agnostic deepfake detection method, dubbed QAD. In particular, by observing the upper bound of general error expectation, we maximize the dependency between intermediate representations of images from different quality levels via Hilbert-Schmidt Independence Criterion. In addition, an Adversarial Weight Perturbation module is carefully devised to enable the model to be more robust against image corruption while boosting the overall model’s performance. Extensive experiments over seven popular deepfake datasets demonstrate the superiority of our QAD model over prior SOTA benchmarks.",
        "abstract_ko": "본 연구에서는 서로 다른 품질의 딥페이크를 효과적이고 동시에 탐지할 수 있도록 하는 범용 내부 모델 협력 학습 프레임워크를 제안한다. 즉, 본 접근법은 품질에 구애받지 않는 딥페이크 탐지 방법으로, QAD라고 명명된다. 특히, 일반적인 오류 기대치의 상한을 관찰함으로써, Hilbert-Schmidt 독립 기준을 통해 서로 다른 품질 수준의 이미지들의 중간 표현 간 의존성을 극대화한다. 또한, 모델이 이미지 손상에 보다 강인해지면서 전체 모델의 성능을 향상시킬 수 있도록 적대적 가중치 섭동 모듈이 신중하게 설계되었다. 일곱 개의 인기 있는 딥페이크 데이터셋에 대한 광범위한 실험을 통해, 우리 QAD 모델이 기존 SOTA 벤치마크보다 우수함을 입증하였다."
    },
    {
        "title": "Manipulated ID Card Classification using Deep Neural Networks",
        "authors": [
            "Hakjun Moon",
            "Eunju Park",
            "Jeongho Kim",
            "Kwansik Yoon",
            "Yeonah Seo",
            "Simon S. Woo"
        ],
        "venue_full": "Conference on Information Security and Cryptography-Summer",
        "venue": "CISC-S",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2023,
        "links": {},
        "img": "/img/Publications/moon_hanconf23.png",
        "abstract": "2023 한국정보보호학화 하계학술대회 딥러닝 기반 신원 인증 시스템에 대해 제시하였으며, 비대면 상황에서 주민등록증이나 운전면허증과 같은 신분증의 진위를 확인하는 문제에 집중하였다. 딥러닝과 특징 추출 기법을 이용하여 신분증 이미지가 실물인지, 혹은 디지털 방식으로 조작되었는지 판별하도록 모델을 학습하였으며, 최대 96.6%의 높은 분류 정확도를 보였다. 이런 결과는 신원 인증과 보안의 중요성이 갈수록 부각되는 현재 사회에서 중요한 의미를 가진다.",
        "abstract_ko": "At the 2023 Korea Information Security Society Summer Conference, a deep learning-based identity authentication system was presented, focusing on the issue of verifying the authenticity of identification cards, such as resident registration cards or driver's licenses, in non-face-to-face situations. Using deep learning and feature extraction techniques, the model was trained to determine whether ID card images were genuine or digitally manipulated, achieving a high classification accuracy of up to 96.6%. These results carry significant meaning in today's society, where the importance of identity authentication and security is increasingly highlighted."
    },
    {
        "title": "Selective unlearning for DNN based model",
        "authors": [
            "Song-Chan Jin",
            "Simon S. Woo"
        ],
        "venue_full": "Conference on Information Security and Cryptography-Summer",
        "venue": "CISC-S",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2023,
        "links": {},
        "img": "/img/Publications/songchan_hanconf23.png",
        "abstract": "본 논문에서 제안하는 선택적 망각이란 딥러닝 모델이 일부 지식을 선택적으로 잊어버리는 것을 의미하며, 개인정보 보호를 위해 도입되었다. 이를 위해 데이터 재수정 및 모델 재학습 등의 방법이 있지만, 이러한 방법들은 일반적으로 계산량이 많거나 모델의 성능을 크게 저하시키는 문제가 있어서 이에 대한 대안으로 작은 데이터셋으로 다른 데이터들에 대한 지식은 유지한 채 특정 데이터들에 대한 지식만 잊는 경사 상승법을 소개하고 있다. 본 논문에서는 경사 상승법을 통하여 기존 재학습 기법 대비 9배 적은 계산량으로 선택적 망각을 수행할 수 있다는 결과를 얻었다.",
        "abstract_ko": "In this paper, the proposed selective forgetting refers to a deep learning model selectively forgetting some knowledge, and it was introduced for personal data protection. To achieve this, methods such as data modification and model retraining exist, but these methods generally have problems of high computational cost or significantly degrading model performance. As an alternative, we introduce a gradient ascent method that forgets knowledge of specific data while retaining knowledge of other data using a small dataset. In this paper, we obtained results showing that selective forgetting can be performed with nine times less computational cost compared to conventional retraining techniques using the gradient ascent method."
    },
    {
        "title": "HRFNet: High-Resolution Forgery Network for Localizing Satellite Image Manipulation",
        "authors": [
            "Fahim Faisal Niloy",
            "Kishor Kumar Bhaumik",
            "Simon S. Woo"
        ],
        "venue_full": "IEEE International Conference on Image Processing",
        "venue": "ICIP",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2023,
        "links": {
            "conf": "https://doi.org/10.1109/icip49359.2023.10221974"
        },
        "img": "/img/Publications/hrfnet_arch.png",
        "abstract": "Existing high-resolution satellite image forgery localization methods rely on patch-based or downsampling-based training. Both of the training methods have major drawbacks, such as, inaccurate boundary between pristine and forged region, generation of unwanted artifacts, etc. To tackle aforementioned challenges, inspired from the high-resolution image segmentation literature, we propose a novel model called HRFNet to effectively enable satellite image forgery localization. Specifically, equipped with shallow and deep branches, our model can successfully integrate RGB and resampling features in both global and local manner to localize forgery more accurately. We experiment on popular satellite image manipulation dataset to demonstrate that our method achieves the best performance, while the memory requirement and processing speed are not compromised compared to existing methods.",
        "abstract_ko": "기존의 고해상도 위성 이미지 위조 위치 추적 방법은 패치 기반 또는 다운샘플링 기반 학습에 의존합니다. 두 가지 학습 방법 모두 원본과 위조 영역 사이의 경계가 부정확하거나 원치 않는 아티팩트가 생성되는 등 주요 단점이 있습니다. 앞서 언급한 문제를 해결하기 위해, 고해상도 이미지 분할 관련 연구에서 영감을 받아, 본 연구에서는 HRFNet이라는 새로운 모델을 제안하여 위성 이미지 위조 위치 추적을 효과적으로 수행할 수 있도록 합니다. 구체적으로, 얕은 브랜치와 깊은 브랜치를 갖춘 제안 모델은 RGB와 재샘플링 특징을 전역적 및 국소적 방식으로 성공적으로 통합하여 위조 위치를 보다 정확하게 식별할 수 있습니다. 본 연구에서는 인기 있는 위성 이미지 조작 데이터셋에서 실험을 수행하여, 기존 방법과 비교했을 때 메모리 요구량과 처리 속도를 희생하지 않으면서 최상의 성능을 달성함을 입증합니다."
    },
    {
        "title": "Expectation-Maximization via Pretext-Invariant Representations",
        "authors": [
            "Chingis Oinar",
            "Binh M. Le",
            "Simon S. Woo"
        ],
        "venue_full": "IEEE Access",
        "venue": null,
        "track": "SCIE Journal",
        "presentationType": null,
        "Factor": [
            "SCIE IF =",
            3.47
        ],
        "year": 2023,
        "links": {
            "conf": "https://doi.org/10.1109/access.2023.3289589"
        },
        "img": "/img/Publications/empir_arch.png",
        "abstract": "In this work, we explain and propose a novel self-supervised objective, Expectation-Maximization via Pretext-Invariant Representations (Empir), which enhances Expectation-Maximization-based optimization in BYOL-like algorithms by enforcing augmentation invariance within a local region of k nearest neighbors, resulting in consistent representation learning. In other words, we propose Expectation-Maximization as a core task of asymmetric architectures. We show that it consistently outperforms other SOTA algorithms by a decent margin. We also demonstrate its transfer learning capabilities on downstream image recognition tasks.",
        "abstract_ko": "이 작업에서 본 연구에서는 새로운 자기지도 학습 목표인 Pretext-Invariant Representations를 통한 기댓값-극대화(Empir)를 설명하고 제안합니다. 이는 k개의 최근접 이웃(local region) 내에서 증강 불변성을 강제함으로써 BYOL 유사 알고리즘에서 기댓값-극대화 기반 최적화를 향상시켜 일관된 표현 학습을 가능하게 합니다. 다시 말해, 본 연구에서는 비대칭 아키텍처의 핵심 과제로 기댓값-극대화를 제안합니다. 본 연구에서는 이것이 다른 최신 알고리즘을 일관되게 상당한 차이로 능가함을 보였습니다. 또한, 하류 이미지 인식 작업에서의 전이 학습 능력도 입증했습니다."
    },
    {
        "title": "IMF: Integrating Matched Features Using Attentive Logit in Knowledge Distillation",
        "authors": [
            "Jeongho Kim",
            "Hanbeen Lee",
            "Simon S. Woo"
        ],
        "venue_full": "International Joint Conference on Artificial Intelligence",
        "venue": "IJCAI",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            4
        ],
        "year": 2023,
        "links": {
            "conf": "https://doi.org/10.24963/ijcai.2023/108"
        },
        "img": "/img/Publications/imf_ijcai.png",
        "abstract": "In this work, to address the student model's limitation, we propose a novel flexible KD framework, Integrating Matched Features using Attentive Logit in Knowledge Distillation (IMF). Our approach introduces an intermediate feature distiller (IFD) to improve the overall performance of the student model by directly distilling the teacher's knowledge into branches of student models.The generated output of IFD, which is trained by the teacher model, is effectively combined by attentive logit.We use only a few blocks of the student and the trained IFD during inference, requiring an equal or less number of parameters.Through extensive experiments, we demonstrate that IMF consistently outperforms other state-of-the-art methods with a large margin over the various datasets in different tasks without extra computation.",
        "abstract_ko": "본 연구에서는 학생 모델의 한계를 해결하기 위해, 지식 증류(Knowledge Distillation, KD)에서 주의 깊은 로짓(Attentive Logit)을 사용하여 매칭된 특징을 통합하는 새로운 유연한 KD 프레임워크(IMF)를 제안합니다. 제안 접근법은 중간 특징 증류기(IFD)를 도입하여 학생 모델의 분기(branch)에 교사의 지식을 직접 증류함으로써 학생 모델의 전체 성능을 향상시킵니다. 교사 모델에 의해 훈련된 IFD의 출력은 주의 깊은 로짓을 통해 효과적으로 결합됩니다. 본 연구에서는 추론 시 학생 모델의 일부 블록과 훈련된 IFD만을 사용하여 동일하거나 더 적은 수의 파라미터가 필요합니다. 광범위한 실험을 통해, IMF가 추가 계산 없이 다양한 과제의 여러 데이터셋에서 다른 최첨단 방법들보다 큰 차이로 일관되게 뛰어난 성능을 보인다는 것을 입증하였습니다."
    },
    {
        "title": "Exploiting Inconsistencies in Object Representations for Deepfake Video Detection",
        "authors": [
            "Kishor Kumar Bhaumik",
            "Simon S. Woo"
        ],
        "venue_full": "ACM ASIACCS Workshop on Security Implications of Deepfakes and Cheapfakes",
        "venue": "WDC",
        "track": "Workshop Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2023,
        "links": {
            "conf": "https://doi.org/10.1145/3595353.3595885"
        },
        "img": "/img/Publications/wdc_kishor.png",
        "abstract": "Deepfake videos are mostly generated in a frame-by-frame manner, which leaves visible object-level inconsistencies in both temporal and spatial dimensions. In this paper, we propose a novel deepfake video detection method that exploits this important clue. Specifically, we extract object representations using vision transformers from video frames and then model the object-level coherence in both intra-frame and inter-frame manner. We experiment on benchmark dataset to show that our method outperforms several existing methods in deepfake video detection.",
        "abstract_ko": "딥페이크 영상은 주로 프레임 단위로 생성되기 때문에 시공간적 차원에서 눈에 띄는 객체 수준의 불일치가 남게 됩니다. 본 논문에서는 이 중요한 단서를 활용한 새로운 딥페이크 영상 탐지 방법을 제안합니다. 구체적으로, 본 연구에서는 영상 프레임에서 비전 트랜스포머를 사용하여 객체 표현을 추출하고, 그 다음 프레임 내 및 프레임 간 객체 수준의 일관성을 모델링합니다. 벤치마크 데이터셋에서 실험을 수행하여, 제안 방법이 딥페이크 영상 탐지에서 여러 기존 방법보다 우수함을 보여줍니다."
    },
    {
        "title": "Why Do Facial Deepfake Detectors Fail?",
        "authors": [
            "Binh Le",
            "Shahroz Tariq",
            "Alsharif Abuadbba",
            "Kristen Moore",
            "Simon Woo"
        ],
        "venue_full": "ACM ASIACCS Workshop on Security Implications of Deepfakes and Cheapfakes",
        "venue": "WDC",
        "track": "Workshop Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2023,
        "links": {
            "conf": "https://doi.org/10.1145/3595353.3595882"
        },
        "img": "/img/Publications/face_detect_engine.png",
        "abstract": "Recent rapid advancements in deepfake technology have allowed the creation of highly realistic fake media, such as video, image, and audio. These materials pose significant challenges to human authentication, such as impersonation, misinformation, or even a threat to national security. To keep pace with these rapid advancements, several deepfake detection algorithms have been proposed, leading to an ongoing arms race between deepfake creators and deepfake detectors. Nevertheless, these detectors are often unreliable and frequently fail to detect deepfakes. This study highlights the challenges they face in detecting deepfakes, including (1) the pre-processing pipeline of artifacts and (2) the fact that generators of new, unseen deepfake samples have not been considered when building the defense models. Our work sheds light on the need for further research and development in this field to create more robust and reliable detectors.",
        "abstract_ko": "최근 딥페이크 기술의 급속한 발전으로 영상, 이미지, 오디오와 같은 매우 현실적인 가짜 미디어를 만들 수 있게 되었다. 이러한 자료는 신원 위장, 허위 정보 제공, 심지어 국가 안보에 대한 위협과 같은 인간 인증에 중대한 도전을 제기한다. 이러한 급속한 발전에 맞추기 위해 여러 딥페이크 탐지 알고리즘이 제안되었으며, 이는 딥페이크 제작자와 탐지자 사이에서 계속되는 군비 경쟁으로 이어지고 있다. 그럼에도 불구하고 이러한 탐지기는 종종 신뢰할 수 없으며 딥페이크를 감지하지 못하는 경우가 많다. 본 연구는 다음을 포함하여 딥페이크 감지에서 직면하는 도전 과제를 강조한다: (1) 아티팩트의 전처리 파이프라인과 (2) 방어 모델을 구축할 때 새로운, 보지 못한 딥페이크 샘플 생성기가 고려되지 않았다는 사실. 우리의 연구는 보다 견고하고 신뢰할 수 있는 탐지기를 만들기 위해 이 분야에서 추가적인 연구와 개발의 필요성을 밝힙니다."
    },
    {
        "title": "Distance adaptive graph convolutional gated network-based smart air quality monitoring and health risk prediction in sensor-devoid urban areas",
        "authors": [
            "Shahzeb Tariq",
            "Shahroz Tariq",
            "SangYoun Kim",
            "Simon S. Woo",
            "ChangKyoo Yoo"
        ],
        "venue_full": "Journal of Sustainable Cities and Society",
        "venue": null,
        "track": "SCIE Journal",
        "presentationType": null,
        "Factor": [
            "SCIE IF =",
            10.696
        ],
        "year": 2023,
        "links": {
            "conf": "https://doi.org/10.1016/j.scs.2023.104445"
        },
        "img": "/img/Publications/tariq_civil.png",
        "abstract": "Rapid urbanization and economic growth have increased air pollution, threatening human health and life expectancy, especially in developing nations. Strong air quality early warning systems for city sustainability have recently garnered attention. The present early warning frameworks in urban environments can only forecast air quality where sufficient sensor data is available. We propose a spatiotemporal sensor fusion-based distance adaptive graph convolutional gated network that predicts primary pollutants at multiple megacity locations and temporal horizons. Our remotely forecasted concentrations at a sensorless site matched city air quality distribution. The framework also solves critical problems of early warning systems related to long-term sensor failure and prediction at a new location in the city.",
        "abstract_ko": "빠른 도시화와 경제 성장은 대기 오염을 증가시켜 인간의 건강과 기대 수명을 위협하고 있으며, 특히 개발 도상국에서 그 영향이 큽니다. 도시 지속 가능성을 위한 강력한 대기질 조기 경보 시스템이 최근 주목받고 있습니다. 현재 도시 환경에서의 조기 경보 프레임워크는 충분한 센서 데이터가 있는 지역에서만 대기질을 예측할 수 있습니다. 본 연구에서는 다중 거대 도시 위치와 시간적 지평선에서 주요 오염 물질을 예측하는 시공간 센서 융합 기반 거리 적응 그래프 컨볼루션 게이트 네트워크를 제안합니다. 센서가 없는 위치에서 원격으로 예측한 농도는 도시 대기질 분포와 일치했습니다. 이 프레임워크는 또한 장기적인 센서 고장 및 도시 내 새로운 위치에서의 예측과 관련된 조기 경보 시스템의 중요한 문제를 해결합니다."
    },
    {
        "title": "DID We Miss Anything?: Towards Privacy-Preserving Decentralized ID Architecture",
        "authors": [
            "Siwon Huh",
            "Myungkyu Shim",
            "Jihwan Lee",
            "Simon S. Woo",
            "Hyoungshick Kim",
            "Hojoon Lee"
        ],
        "venue_full": "IEEE Transactions on Dependable and Secure Computing",
        "venue": null,
        "track": "SCIE Journal",
        "presentationType": null,
        "Factor": [
            "SCIE IF =",
            7.32
        ],
        "year": 2023,
        "links": {
            "conf": "https://doi.org/10.1109/tdsc.2023.3235951"
        },
        "img": "TDSC.PNG",
        "abstract": "Decentralized Identity (DID) is emerging as a new digital identity management scheme that promises users complete control of their personal data and identification without central authority involvement. The World Wide Web Consortium (W3C) has drafted the DID standard and provided reference implementations. We conduct a security analysis of the W3C DID standard and the reference universal resolver implementation, focusing on user privacy in the DID resolving process. The universal resolver is the key component in the architecture that processes DID requests and DID document retrievals. Our analysis demonstrates that privacy issues can arise due to the imprudent design of the universal resolver. Furthermore, we found that side-channels in the DID document caching schemes of real-world DID services can entail privacy concerns. Motivated by our security analysis, we present a novel  DID resolving design, called Oblivira, to enable obliviously DID resolving. Oblivira is a secure resolving agent with a small footprint that enforces the universal resolver to resolve requests without knowing their content. We also propose a privacy-preserving DID document caching scheme that eliminates side-channels. Our evaluation results show that Oblivira only incurs approximately 2.6\\% of overhead on average with different resolver settings (3, 6, and 12 threads).",
        "abstract_ko": "분산형 신원(DID)은 사용자가 중앙 권한의 개입 없이 자신의 개인 데이터와 신원을 완전히 제어할 수 있도록 약속하는 새로운 디지털 신원 관리 체계로 부상하고 있습니다. 세계 웹 컨소시엄(W3C)은 DID 표준을 초안 작성하고 참조 구현을 제공했습니다. 본 연구에서는 W3C DID 표준과 참조 범용 리졸버 구현에 대한 보안 분석을 수행하며, DID 해결 과정에서 사용자 프라이버시에 초점을 맞췄습니다. 범용 리졸버는 DID 요청 처리와 DID 문서 검색을 수행하는 아키텍처의 핵심 구성 요소입니다. 우리의 분석은 범용 리졸버의 부주의한 설계로 인해 프라이버시 문제가 발생할 수 있음을 보여줍니다. 또한, 실제 DID 서비스의 DID 문서 캐싱 방식에서 발생할 수 있는 부채널이 프라이버시 문제를 초래할 수 있음을 발견했습니다. 보안 분석에 영감을 받아, 본 연구에서는 Oblivira라는 새로운 DID 해결 설계를 제시하여, 무지한 DID 해결을 가능하게 합니다. Oblivira는 작은 크기의 보안 해결 에이전트로, 범용 해석기가 요청을 내용을 알지 못한 채 해결하도록 강제합니다. 또한 부가 채널을 제거하는 개인정보 보호 DID 문서 캐싱 방식을 제안합니다. 평가 결과, Oblivira는 3, 6, 12스레드 등 다양한 해석기 설정에서 평균 약 2.6%의 오버헤드만 발생한다는 것을 보여줍니다."
    },
    {
        "title": "Evaluating Racial Bias in Face Recognition APIs using Deepfakes",
        "authors": [
            "Shahroz Tariq",
            "Sowon Jeon",
            "Simon S. Woo"
        ],
        "venue_full": "IEEE Computer Magazine",
        "venue": null,
        "track": "SCIE Journal",
        "presentationType": null,
        "Factor": [
            "SCIE IF =",
            3.56
        ],
        "year": 2023,
        "links": {},
        "img": "/img/Publications/shahroz_ieee_computer.png",
        "abstract": "Deep learning algorithms enable rapid growth in web-based services such as natural language processing, speech recognition, and facial recognition. Simultaneously, online fairness and trust remain unresolved. For example, racial bias in web-based face recognition services can lead to inaccurate results, causing severe technical and social issues and widespread distrust in AI-based systems. Deepfake on social media has posed several credibility issues. We evaluate the racial bias in face recognition APIs using real and deepfake celebrity images. We use deepfake generation methods to introduce small, imperceptible changes to the real images to shift the racial class of predictions. As a result, we show how deepfake images exacerbated racial bias in Amazon, Microsoft, and Naver web-based face recognition APIs. The findings are significant because they reveal similar vulnerabilities to those previously discovered through adversarial attacks but through a significantly different method.",
        "abstract_ko": "딥러닝 알고리즘은 자연어 처리, 음성 인식, 얼굴 인식과 같은 웹 기반 서비스의 급속한 성장을 가능하게 합니다. 동시에 온라인 공정성과 신뢰 문제는 여전히 해결되지 않고 있습니다. 예를 들어, 웹 기반 얼굴 인식 서비스에서의 인종 편향은 부정확한 결과를 초래할 수 있으며, 이는 심각한 기술적·사회적 문제와 AI 기반 시스템에 대한 광범위한 불신을 야기할 수 있습니다. 소셜 미디어에서의 딥페이크는 여러 신뢰성 문제를 발생시켰습니다. 본 연구에서는 실제 및 딥페이크 유명인 이미지를 사용하여 얼굴 인식 API에서의 인종 편향을 평가합니다. 본 연구에서는 딥페이크 생성 방법을 사용하여 실제 이미지에 작은, 인지할 수 없는 변화를 도입하여 예측의 인종 분류를 변경합니다. 그 결과, 딥페이크 이미지가 Amazon, Microsoft, Naver의 웹 기반 얼굴 인식 API에서 인종 편향을 어떻게 악화시키는지 보여줍니다. 이 연구 결과는 이전에 적대적 공격을 통해 발견된 것과 유사한 취약점을 보여주지만, 훨씬 다른 방법을 통해 드러났기 때문에 중요합니다."
    },
    {
        "title": "Design and evaluation of highly accurate smart contract code vulnerability detection framework",
        "authors": [
            "Sowon Jeon",
            "Gilhee Lee",
            "Hyoungshick Kim",
            "Simon S. Woo"
        ],
        "venue_full": "Data Mining and Knowledge Discovery",
        "venue": null,
        "track": "SCIE Journal",
        "presentationType": null,
        "Factor": [
            "SCIE IF =",
            3.67
        ],
        "year": 2023,
        "links": {
            "conf": "https://doi.org/10.1007/s10618-023-00981-1"
        },
        "img": "sowon.JPG",
        "abstract": "In this paper, we present SmartConDetect as a tool for detecting security vulnerabilities in Solidity smart contracts. SmartConDetect is a static analysis tool that extracts code fragments from Solidity smart contracts and uses a pre-trained BERT model to find susceptible code patterns. To demonstrate the performance of SmartConDetect, we use two public datasets, and our dataset (SmartConDataset) collected from the real-world Ethereum blockchain network. Our experimental results show that SmartConDetect significantly outperforms all state-of-the-art methods, achieving 90.9\\% F1-score when using our own dataset. Specifically, SmartConDetect is about 2 times faster than SmartCheck in detection. Furthermore, we conduct a real-world case study to analyze the distribution of detected vulnerabilities.",
        "abstract_ko": "본 논문에서는 Solidity 스마트 계약의 보안 취약점을 탐지하는 도구로서 SmartConDetect를 소개합니다. SmartConDetect는 Solidity 스마트 계약에서 코드 조각을 추출하고, 사전 학습된 BERT 모델을 사용하여 취약한 코드 패턴을 찾는 정적 분석 도구입니다. SmartConDetect의 성능을 입증하기 위해 두 개의 공개 데이터셋과 실제 이더리움 블록체인 네트워크에서 수집한 데이터셋(SmartConDataset)을 사용합니다. 실험 결과는 SmartConDetect가 자체 데이터셋을 사용할 때 90.9%의 F1 점수를 기록하며 모든 최첨단 방법을 훨씬 능가한다는 것을 보여줍니다. 구체적으로, SmartConDetect는 SmartCheck보다 약 2배 빠른 탐지 속도를 보여줍니다. 또한, 본 연구에서는 탐지된 취약점의 분포를 분석하기 위한 실제 사례 연구를 수행했습니다."
    },
    {
        "title": "A-ColViT : Real-time Interactive Colorization by Adaptive Vision Transformer",
        "authors": [
            "Gwanghan Lee",
            "Saebyeol Shin",
            "Donggeun Ko",
            "Jiyeon Jung",
            "Simon S. Woo"
        ],
        "venue_full": "AAAI Workshop on Practical Deep Learning in the Wild",
        "venue": "PDLW",
        "track": "Workshop Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2023,
        "links": {},
        "img": "/img/Publications/gwanhan_aaai23.jpg",
        "abstract": "Vision transformer has been used to alleviate this problem by using multi-head self attention to propagate user hints to distant relevant areas in the image. However, despite the success of vision transformers in colorizing the image and selectively colorizing the regions with user propagation hints, heavy underlying ViT architecture and the large number of required parameters hinder active real-time user interaction for colorization applications. Thus, in this work, we propose a novel efficient ViT architecture for real-time interactive colorization, A-ColViT that adaptively prunes the layers of vision transformer for every input sample. This method flexibly allocates computational resources of input samples, effectively achieving actual acceleration. In addition, we demonstrate through extensive experiments on ImageNet-ctest10k, Oxford 102flower, and CUB-200 datasets that our method outperforms the state-of-the-art approach and achieves actual acceleration.",
        "abstract_ko": "비전 트랜스포머는 사용자 힌트를 이미지의 먼 관련 영역으로 전파하기 위해 멀티헤드 자기 주의를 사용함으로써 이 문제를 완화하는 데 사용되어 왔다. 그러나 비전 트랜스포머가 이미지 색칠과 사용자 전파 힌트를 활용한 선택적 영역 색칠에서 성공을 거두었음에도 불구하고, 무거운 기본 ViT 아키텍처와 많은 수의 요구되는 파라미터는 색칠 애플리케이션에서 실시간 사용자의 적극적인 상호작용을 방해한다. 따라서 본 연구에서는 실시간 상호작용 색칠을 위해 비전 트랜스포머의 레이어를 입력 샘플마다 적응적으로 가지치기하는 새로운 효율적인 ViT 아키텍처인 A-ColViT을 제안한다. 이 방법은 입력 샘플의 계산 자원을 유연하게 할당하여 실제 가속을 효과적으로 달성한다. 또한, 본 연구에서는 ImageNet-ctest10k, Oxford 102flower, CUB-200 데이터셋에 대한 광범위한 실험을 통해 제안 방법이 최첨단 접근 방식을 능가하고 실제 가속을 달성함을 보여줍니다."
    },
    {
        "title": "S-ViT: Sparse Vision Transformer for Accurate Face Recognition",
        "authors": [
            "Geunsu Kim",
            "Gyudo Park",
            "Soohyeok Kang",
            "Simon S. Woo"
        ],
        "venue_full": "ACM SIGAPP Symposium on Applied Computing",
        "venue": "SAC",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2023,
        "links": {
            "conf": "https://doi.org/10.1145/3555776.3577640"
        },
        "img": "/img/Publications/kim_sac23.jpg",
        "abstract": "In this work, we propose a Sparse Vision Transformer (S-ViT) based on the Vision Transformer (ViT) architecture to improve the face recognition tasks. After the model is trained, S-ViT tends to have a sparse distribution of weights compared to ViT, so we named it according to these characteristics. Unlike the conventional ViT, our proposed S-ViT adopts image Relative Positional Encoding (iRPE) method for positional encoding. Also, S-ViT has been modified so that all token embeddings, not just class token, participate in the decoding process. Through extensive experiment, we showed that S-ViT achieves better performance in closed-set than the other baseline models, and showed better performance than the baseline ViT-based models. We also show that the use of ArcFace loss functions yields greater performance gains in S-ViT than in baseline models. In addition, S-ViT has an advantage in cost-performance trade-off because it tends to be more robust to the pruning technique than the underlying model, ViT. Therefore, S-ViT offers the additional advantage, which can be applied more flexibly in the target devices with limited resources.",
        "abstract_ko": "본 연구에서는 얼굴 인식 작업을 개선하기 위해 Vision Transformer(ViT) 아키텍처를 기반으로 한 Sparse Vision Transformer(S-ViT)를 제안합니다. 모델이 학습된 후, S-ViT는 ViT에 비해 가중치의 희소 분포를 가지는 경향이 있어 이러한 특성에 따라 이름을 지었습니다. 기존 ViT와 달리, 제안한 S-ViT는 위치 인코딩을 위해 이미지 상대 위치 인코딩(iRPE) 방식을 채택합니다. 또한 S-ViT는 클래스 토큰뿐만 아니라 모든 토큰 임베딩이 디코딩 과정에 참여하도록 수정되었습니다. 광범위한 실험을 통해, S-ViT가 다른 기준 모델보다 폐쇄 집합에서 더 나은 성능을 달성하며, ViT 기반 기준 모델보다 더 나은 성능을 보임을 입증했습니다. 또한 ArcFace 손실 함수의 사용이 S-ViT에서 기준 모델보다 더 큰 성능 향상을 가져옴을 보여주었습니다. 또한, S-ViT는 기저 모델인 ViT보다 가지치기 기술에 대해 더 강인한 경향이 있기 때문에 비용-성능 절충 측면에서 장점을 가지고 있습니다. 따라서 S-ViT는 추가적인 장점을 제공하며, 제한된 자원을 가진 대상 장치에서 더 유연하게 적용될 수 있습니다."
    },
    {
        "title": "MGCMA: Multi-scale Generator with Channel-wise Mask Attention to generate Synthetic Contrast-enhanced Chest Computed Tomography",
        "authors": [
            "Jeongho Kim",
            "Yun-Gyoo Lee",
            "Donggeun Ko",
            "Taejune Kim",
            "Soo-Youn Ham",
            "Simon S. Woo"
        ],
        "venue_full": "ACM SIGAPP Symposium on Applied Computing",
        "venue": "SAC",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2023,
        "links": {
            "conf": "https://doi.org/10.1145/3555776.3578618"
        },
        "img": "/img/Publications/jho_sac23.png",
        "abstract": "Medical images, including computed tomography (CT) assist doctors and physicians in diagnosing anatomic structures and various internal pathologies. In CT, intravenous contrast media is often applied, which are chemicals developed to aid in the characterization of pathology by enhancing the capabilities of an imaging modality to differentiate between different biological tissues. Especially, with the use of contrast media, thorough examinations of the patients can be possible. However, contrast media can have severe adverse and side effects such as hypersensitive reaction to generalized seizures. Yet, without contrast media, it is difficult to diagnose patients that have disorders in the internal organs. With the help of DNN models, especially generative adversarial network (GAN), contrast-enhanced CT (CECT) images can be synthetically generated from non-contrast CT (NCCT) images. GANs or autoencoder-based models have been proposed to generate contrast-enhanced CT images; however, the synthesized image does not fully reflect and have crucial spots where contrast has not been synthesized. Thus, in order to enhance the quality of the CECT image, we propose MGCMA, a multi-scale generator with a channel-wise mask attention module for generating synthetic CECT images from NCCT images. Our extensive experiments demonstrate that our model outperforms other baseline models in various metrics such as SSIM and LPIPS. Also, generated images from our approach achieve plausible outcomes from the domain experts' (e.g., physicians and radiologists) evaluations.",
        "abstract_ko": "컴퓨터 단층촬영(CT)을 포함한 의료 영상은 의사와 전문의가 해부학적 구조와 다양한 내부 병리를 진단하는 데 도움을 줍니다. CT에서는 정맥 내 조영제가 자주 사용되는데, 이는 각각의 생체 조직을 구별하는 영상 기법의 능력을 향상시켜 병리를 분석하는 데 도움을 주도록 개발된 화학물질입니다. 특히 조영제를 사용하면 환자에 대한 철저한 검사가 가능해집니다. 그러나 조영제는 과민 반응에서 전신 발작과 같은 심각한 부작용을 일으킬 수 있습니다. 그럼에도 불구하고 조영제가 없으면 내부 장기에 문제가 있는 환자를 진단하기 어렵습니다. DNN 모델, 특히 적대적 생성 신경망(GAN)의 도움으로 조영 증강 CT(CECT) 이미지를 비조영 CT(NCCT) 이미지로부터 합성적으로 생성할 수 있습니다. GAN 또는 오토인코더 기반 모델들은 조영 증강 CT(CECT) 이미지를 생성하기 위해 제안되었으나, 합성된 이미지는 완전히 반영되지 않으며, 조영이 합성되지 않은 중요한 부분이 존재합니다. 따라서 CECT 이미지의 품질을 향상시키기 위해, 본 연구에서는 NCCT 이미지로부터 합성 CECT 이미지를 생성하기 위한 채널별 마스크 주의 모듈이 포함된 다중 스케일 생성기(MGCMA)를 제안합니다. 우리의 광범위한 실험 결과, 제안 모델이 SSIM 및 LPIPS와 같은 다양한 지표에서 다른 기준 모델보다 우수함을 보여줍니다. 또한, 제안 접근법으로 생성된 이미지는 도메인 전문가(예: 의사 및 방사선과 전문의)의 평가에서 그럴듯한 결과를 달성합니다."
    },
    {
        "title": "Rotated-DETR: an End-to-End Transformer-based Oriented Object Detector for Aerial Images",
        "authors": [
            "Giljun Lee",
            "Jinbeom Kim",
            "Taejune Kim",
            "Simon S. Woo"
        ],
        "venue_full": "ACM SIGAPP Symposium on Applied Computing",
        "venue": "SAC",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2023,
        "links": {
            "conf": "https://doi.org/10.1145/3555776.3577745"
        },
        "img": "/img/Publications/jb_sac23.png",
        "abstract": "Oriented object detection in aerial images is a challenging task due to the highly complex backgrounds and objects with arbitrary oriented and usually densely arranged. Existing oriented object detection methods adopt CNN-based methods, and they can be divided into three types: two-stage, one-stage, and anchor-free methods. All of them require non-maximum suppression (NMS) to eliminate the duplicated predictions. Recently, object detectors based on the transformer remove hand-designed components by directly solving set prediction problems via performing bipartite matching, and achieve state-of-the-art performances in general object detection. Motivated by this research, we propose a transformer-based oriented object detector named  Rotated DETR with oriented bounding boxes (OBBs) labeling. We embed the scoring network to reduce the tokens corresponding to the background. In addition, we apply a proposal generator and iterative proposal refinement in order to provide proposals with angle information to the transformer decoder. Rotated DETR achieves state-of-the-art performance on the single-stage and anchor-free oriented object detectors on DOTA, UCAS-AOD, and DIOR-R datasets with only 10\\% feature tokens. In the experiment, we show the effectiveness of the scoring network and iterative proposal refinement.",
        "abstract_ko": "항공 영상에서의 방향성 객체 탐지는 매우 복잡한 배경과 임의의 방향을 가지며 일반적으로 밀집 배치된 객체들로 인해 도전적인 과제입니다. 기존의 방향성 객체 탐지 방법은 CNN 기반 방법을 채택하며, 이는 두 단계, 한 단계, 앵커 프리 방법의 세 가지 유형으로 나눌 수 있습니다. 이들 모두 중복된 예측을 제거하기 위해 비최대 억제(NMS)를 필요로 합니다. 최근에는 트랜스포머 기반 객체 탐지기가 이진 매칭을 수행하여 집합 예측 문제를 직접 해결함으로써 수작업으로 설계된 구성 요소를 제거하고, 일반 객체 탐지에서 최첨단 성능을 달성합니다. 이러한 연구에 영감을 받아, 본 연구에서는 방향성 경계 상자(OBBs) 레이블링을 사용하는 트랜스포머 기반의 방향성 객체 탐지기인 Rotated DETR을 제안합니다. 또한, 배경에 해당하는 토큰을 줄이기 위해 스코어링 네트워크를 삽입합니다. 또한, 제안 생성기와 반복적 제안 정제를 적용하여 변압기 디코더에 각도 정보를 제공하는 제안서를 제공합니다. Rotated DETR은 DOTA, UCAS-AOD, DIOR-R 데이터셋에서 단일 단계 및 앵커 없는 객체 검출기에서 10%의 특징 토큰만으로 최첨단 성능을 달성합니다. 실험에서는 점수 네트워크와 반복적 제안 정제의 효과를 보여주었습니다."
    },
    {
        "title": "An overhead-free region-based JPEG framework for task-driven image compression",
        "authors": [
            "Seonghye Jeong",
            "Seongmoon Jeong",
            "Simon S. Woo",
            "Jong Hwan Ko"
        ],
        "venue_full": "Pattern Recognition Letters",
        "venue": null,
        "track": "SCIE Journal",
        "presentationType": null,
        "Factor": [
            "SCIE IF =",
            5.67
        ],
        "year": 2023,
        "links": {
            "conf": "https://doi.org/10.1016/j.patrec.2022.11.020"
        },
        "img": "/img/Publications/jeong_prl.jpg",
        "abstract": "An increasing amount of captured images are streamed to a remote server or stored in a device for deep neural network (DNN) inference. In most cases, raw images are compressed with encoding algorithms such as JPEG to cope with resource limitations. However, the standard JPEG optimized for human visual systems may induce significant accuracy loss in DNN inference tasks. In addition, the standard JPEG compresses all regions in an image at the same quality level, while some areas may not contain valuable information for the target task. In this paper, we propose a target-driven JPEG compression framework that performs region-adaptive quantization of the DCT coefficients. The region-based quality map is generated from an end-to-end trainable neural network. In addition, we present a deep learning approach to remove the requirement of storing the overhead information induced by the region-based encoding process. Our framework can be easily implemented on devices with commonly used JPEG and also produce images that achieve a higher compression rate with minimum degradation of the classification accuracy.",
        "abstract_ko": "캡처된 이미지의 양이 증가함에 따라 이미지가 원격 서버로 스트리밍되거나 깊은 신경망(DNN) 추론을 위해 장치에 저장되고 있습니다. 대부분의 경우, 원시 이미지는 자원 제한을 처리하기 위해 JPEG와 같은 인코딩 알고리즘으로 압축됩니다. 그러나 인간 시각 시스템에 최적화된 표준 JPEG는 DNN 추론 작업에서 상당한 정확도 손실을 초래할 수 있습니다. 또한 표준 JPEG는 이미지의 모든 영역을 동일한 품질 수준으로 압축하지만, 일부 영역은 대상 작업에 대해 유용한 정보를 포함하지 않을 수 있습니다. 본 논문에서는 DCT 계수의 영역 적응적 양자화를 수행하는 목표 지향 JPEG 압축 프레임워크를 제안합니다. 영역 기반 품질 맵은 엔드 투 엔드(end-to-end) 학습 가능한 신경망으로부터 생성됩니다. 또한, 본 연구에서는 영역 기반 인코딩 과정에서 발생하는 오버헤드 정보를 저장할 필요를 제거하는 딥러닝 접근 방식을 제시합니다. 제안 프레임워크는 일반적으로 사용되는 JPEG 장치에서 쉽게 구현될 수 있으며, 분류 정확도의 최소한의 저하로 더 높은 압축률을 달성하는 이미지도 생성할 수 있습니다."
    },
    {
        "title": "CFL-Net: Image Forgery Localization Using Contrastive Learning",
        "authors": [
            "Fahim Faisal Niloy",
            "Kishor Kumar Bhaumik",
            "Simon S. Woo"
        ],
        "venue_full": "IEEE/CVF Winter Conference on Applications of Computer Vision",
        "venue": "WACV",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2023,
        "links": {
            "conf": "https://doi.org/10.1109/wacv56688.2023.00462"
        },
        "img": "/img/Publications/wacv22_kishor.png",
        "abstract": "Conventional forgery localizing methods usually rely on different forgery footprints such as JPEG artifacts, edge inconsistency, camera noise, etc., with cross-entropy loss to locate manipulated regions. However, these methods have the disadvantage of over-fitting and focusing on only a few specific forgery footprints. On the other hand, real-life manipulated images are generated via a wide variety of forgery operations and thus, leave behind a wide variety of forgery footprints. Therefore, we need a more general approach for image forgery localization that can work well on a variety of forgery conditions. A key assumption in underlying forged region localization is that there remains a difference of feature distribution between untampered and manipulated regions in each forged image sample, irrespective of the forgery type. In this paper, we aim to leverage this difference of feature distribution to aid in image forgery localization. Specifically, we use contrastive loss to learn mapping into a feature space where the features between untampered and manipulated regions are well-separated for each image. Also, our method has the advantage of localizing manipulated region without requiring any prior knowledge or assumption about the forgery type. We demonstrate that our work outperforms several existing methods on three benchmark image manipulation datasets.",
        "abstract_ko": "전통적인 위조 국지화 방법은 일반적으로 JPEG 아티팩트, 엣지 불일치, 카메라 노이즈 등과 같은 다양한 위조 흔적과 교차 엔트로피 손실을 이용하여 조작된 영역을 찾아냅니다. 그러나 이러한 방법은 과적합되고 몇 가지 특정 위조 흔적에만 집중하는 단점이 있습니다. 반면, 실제로 조작된 이미지는 매우 다양한 위조 작업을 통해 생성되므로, 다양한 위조 흔적을 남깁니다. 따라서 다양한 위조 조건에서도 잘 작동할 수 있는 보다 일반적인 이미지 위조 국지화 접근법이 필요합니다. 기반이 되는 조작 영역 국지화에서의 핵심 가정은 위조 유형에 관계없이 각 조작 이미지 샘플에서 손대지 않은 영역과 조작된 영역 사이에는 여전히 특징 분포의 차이가 존재한다는 것입니다. 이 논문에서 본 연구에서는 이미지 위조 위치 파악을 돕기 위해 특징 분포의 이러한 차이를 활용하는 것을 목표로 합니다. 구체적으로, 본 연구에서는 대조 손실을 사용하여 각 이미지에서 손상되지 않은 영역과 조작된 영역 사이의 특징이 잘 분리되는 특징 공간으로의 매핑을 학습합니다. 또한, 제안 방법은 위조 유형에 대한 사전 지식이나 가정을 요구하지 않고 조작된 영역을 찾아낼 수 있다는 장점이 있습니다. 본 연구에서는 세 개의 기준 이미지 조작 데이터셋에서 우리 연구가 기존의 여러 방법보다 뛰어남을 보여줍니다."
    },
    {
        "title": "A Novel Transformer-based Approach for Rotated Object Detection in Aerial Images",
        "authors": [
            "Jinbeom Kim",
            "Giljun Lee",
            "Taejune Kim",
            "Simon S. Woo"
        ],
        "venue_full": "추계 공동학술대회",
        "venue": null,
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2022,
        "links": {},
        "img": null,
        "abstract": "매우 복잡한 배경과 임의로 회전 되어있고 조밀하게 배열되어 잇는 객체로 인해 항공 이미지에서 회전된 객체를 탐지하는 것은 매우 어려운 작업이다. 기존의 회전 객체 탐지 기법들은 CNN 기반 방법론을 채택하고 있으며, 이들은 세가지 카테고리 two-stage, one-stage, 그리고 anchor-free로 분류할 수 있다. 이들 모두 중복된 예측을 제거하기 위해 비최대 억제(NMS)가 필요하다. 최근 transformer를 기반으로 한 객체 탐지 모델은 이분 매칭을 통해 set prediction proble을 직접 해결하여 수작업으로 설계된 구성 요소들을 제거하면서 일반적인 객체 탐지 분야에서 최첨단 성능을 달성하였다. 이 연구에 자극을 받아, 우리는 방향 경계 상자(OBB) 라벨을 사용하는 transformer 기반 모델인 Rotated DETR를 제안한다.또한 우리는 proposal generator와 iterative proposal refinement를 적용하여 transformer decoder에 각도 정보를 제공한다. Rotated DETR은 10%의 feature token 만으로 DOTA 데이터 세트의 one-stage와 anchor-free 모델들에서 최첨단 성능을 달성한다. 우리는 실험을 통해 scoring network와 iterative proposal refinement의 효과를 보여준다.",
        "abstract_ko": "Due to highly complex backgrounds and objects that are randomly rotated and densely arranged, detecting rotated objects in aerial images is a very difficult task. Existing rotated object detection methods adopt CNN-based approaches, which can be categorized into three types: two-stage, one-stage, and anchor-free. All of these require Non-Maximum Suppression (NMS) to remove redundant predictions. Recently, transformer-based object detection models have directly solved the set prediction problem through bipartite matching, achieving state-of-the-art performance in general object detection while eliminating manually designed components. Inspired by this study, we propose Rotated DETR, a transformer-based model using oriented bounding box (OBB) labels. In addition, we apply a proposal generator and iterative proposal refinement to provide angle information to the transformer decoder. Rotated DETR achieves state-of-the-art performance on the DOTA dataset among one-stage and anchor-free models with only 10% of feature tokens. Through experiments, we demonstrate the effectiveness of the scoring network and iterative proposal refinement."
    },
    {
        "title": "Effective Deepfake Detection using Mask Attention",
        "authors": [
            "Saebyeol Shin",
            "Simon S. Woo"
        ],
        "venue_full": "추계 공동학술대회",
        "venue": null,
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2022,
        "links": {},
        "img": null,
        "abstract": "다양한 딥페이크 데이터셋에 대한 최신 딥페이크 탐지 모델은 놀라운 성능을 달성했습니다. 그러나 대부분의 접근 방식은 각 딥페이크 입력 이미지가 서로다른 지역적인 부분에서 구별되는 특징을 가지고 있다는 사실을 활용하지 않습니다. 따라서 본 논문은 입력 이미지의 서로 다른 세부적인 부분에 동적으로 초점을 맞추고 실제 이미지와 딥페이크 이미지의 미묘하고 세부적인 차이를 이용하는 효과적인 딥페이크 탐지 방법인 MaskDF를 제안합니다. 특히 중요하지 않은 특성을 제거하여 입력의 귀중한 정보를 보존할 수 있는 학습 가능한 어텐션 마스크를 제안합니다. 입력 피쳐는 제안된 게이팅 함수를 통과하여 어텐션 마스크 벡터를 생성하므로 딥페이크 탐지에 영향을 미치는 중요한 특징을 결정할 수 있습니다. 우리의 방법은 입력 정보의 절반만 사용하여 DFDC 및 FaceForensics++ 데이터 세트에서 다른 기본 모델보다 더 나은 성능을 보여주었습니다.",
        "abstract_ko": "State-of-the-art deepfake detection models for various deepfake datasets have achieved remarkable performance. However, most approaches do not leverage the fact that each deepfake input image has distinguishing features in different local regions. Therefore, this paper proposes MaskDF, an effective deepfake detection method that dynamically focuses on different detailed parts of the input image and utilizes the subtle and detailed differences between real and deepfake images. In particular, we propose a learnable attention mask that can remove unimportant features while preserving valuable information of the input. The input features pass through the proposed gating function to generate an attention mask vector, which allows determining the critical features influencing deepfake detection. Our method demonstrated better performance than other baseline models on the DFDC and FaceForensics++ datasets using only half of the input information."
    },
    {
        "title": "Analysis of Obfuscation of Deepfake Images in Differential Privacy Settings",
        "authors": [
            "Donggeun Ko",
            "Simon S. Woo"
        ],
        "venue_full": "추계 공동학술대회",
        "venue": null,
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2022,
        "links": {},
        "img": null,
        "abstract": "소셜 미디어나 감시 시스템에서 매일 수많은 얼굴 사진과 개인 정보가 수집된다. 얼굴 정보를 포함한 소셜 미디어 사용자의 개인 정보는 간단한 거래나 공항 출입국 절차의 간소화와 같은 이점이 있지만 이러한 이점은 항상 개인 정보 보호 문제를 수반한다. 위와 같은 민감한 정보들은 잠재적으로 유해한 목적으로 사용될 위험이 있기때문에 공격자에게 취약하다고 할 수 있다. 이러한 정보를 보호하기 위해 이미지의 프라이버시를 강화하는 솔루션인 DP(Differential Privacy)를 사용하여 높은 수준의 프라이버시를 제공한다. DP(Differential Privacy)를 통해 이미지의 프라이버시가 증가할 수 있지만 이상적인 epsilon-DP를 달성하기 위해서 유틸리티와 프라이버시 사이에는 필연적인 trade-off가 있다. 따라서 난독화 이미지의 최적 매개변수를 선택하는 것이 개인정보 보호의 핵심이며 본 논문에서는 이미지의 프라이버시를 강화하기 위해 각각 DP-Pix, DP-SVD, Snow라는 3가지 DP(Differential Privacy) 난독화 방법을 제시한다. 또한 딥 러닝 모델의 견고성을 평가하는 딥페이크 이미지 데이터셋에서 DP 방법을 구현하는 다양한 방법을 시연한다. 실험의 결과는 훈련 단계에서 데이터 세트 증대가 epsilon-DP(Differential Privacy를 사용하여 딥페이크를 탐지할 때 모델의 성능을 쉽게 향상시킬 수 있음을 나타낸다.",
        "abstract_ko": "소셜 미디어나 감시 시스템에서 매일 수많은 얼굴 사진과 개인 정보가 수집된다. 얼굴 정보를 포함한 소셜 미디어 사용자의 개인 정보는 간단한 거래나 공항 출입국 절차의 간소화와 같은 이점이 있지만 이러한 이점은 항상 개인 정보 보호 문제를 수반한다. 위와 같은 민감한 정보들은 잠재적으로 유해한 목적으로 사용될 위험이 있기 때문에 공격자에게 취약하다고 할 수 있다. 이러한 정보를 보호하기 위해 이미지의 프라이버시를 강화하는 솔루션인 DP(Differential Privacy)를 사용하여 높은 수준의 프라이버시를 제공한다. DP(Differential Privacy)를 통해 이미지의 프라이버시가 증가할 수 있지만 이상적인 epsilon-DP를 달성하기 위해서 유틸리티와 프라이버시 사이에는 필연적인 trade-off가 있다. 따라서 난독화 이미지의 최적 매개변수를 선택하는 것이 개인정보 보호의 핵심이며 본 논문에서는 이미지의 프라이버시를 강화하기 위해 각각 DP-Pix, DP-SVD, Snow라는 3가지 DP(Differential Privacy) 난독화 방법을 제시한다. 또한 딥 러닝 모델의 견고성을 평가하는 딥페이크 이미지 데이터셋에서 DP 방법을 구현하는 다양한 방법을 시연한다. 실험 결과는 훈련 단계에서 데이터 세트 증대가 epsilon-DP(Differential Privacy)를 사용하여 딥페이크를 탐지할 때 모델의 성능을 쉽게 향상시킬 수 있음을 나타낸다."
    },
    {
        "title": "Evaluation of Deepfakes with Generated Facemasks",
        "authors": [
            "Donggeun Ko",
            "Simon S. Woo"
        ],
        "venue_full": "추계 공동학술대회",
        "venue": null,
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2022,
        "links": {},
        "img": null,
        "abstract": "최근들어 딥페이크(Deepfake) 기술의 발전으로 인해 국제사회의 우려가 점점 커지고 있다. 딥페이크 기술은 이미지나 영상 속 얼굴을 손쉽게 생성, 조작하여 왜곡된 정보를 전파할 수 있기 때문이다. 이에 따라 최첨단 성능을 갖춘 다양한 딥페이크 탐지 모델이 제안되어 왔다. 그러나 지금까지 제안된 딥페이크 탐지 모델은 펜데믹 위기 동안 발생했을 마스크가 착용된 얼굴에 대한 정보는 고려하지 않고 있다. 마스크가 착용된 얼굴 이미지의 경우 얼굴의 중요한 랜드마크가 마스크 속에 숨겨져 있기 때문에 딥페이크 탐지기의 성능을 보장하기 어렵다. 따라서 본 논문에서는 이러한 문제를 해결할 수 있는 두 가지 간단한 방법론을 제시하고 기존 방법론들과의 비교실험을 통해 마스크가 착용된 얼굴 이미지와 마스크가 착용되지 않은 얼굴 이미지 사이에서 나타날 수 있는 딥페이크 탐지 모델의 문제점과 제시된 방법론의 효과를 살펴보고자 한다.",
        "abstract_ko": "Recently, concerns in the international community are growing due to the advancement of deepfake technology. This is because deepfake technology can easily generate and manipulate faces in images or videos, spreading distorted information. Accordingly, various deepfake detection models with state-of-the-art performance have been proposed. However, the deepfake detection models proposed so far do not consider information on faces wearing masks, which may have arisen during the pandemic crisis. In the case of face images with masks, it is difficult to guarantee the performance of deepfake detectors because important landmarks of the face are hidden under the mask. Therefore, this paper presents two simple methodologies to address this issue and, through comparative experiments with existing methods, aims to examine the problems of deepfake detection models that may occur between masked and unmasked face images, as well as the effectiveness of the proposed methodologies."
    },
    {
        "title": "RCRL: Replay-based Continual Representation Learning in Multi-task Super-Resolution",
        "authors": [
            "Jinyong Park",
            "Minha Kim",
            "Simon S. Woo"
        ],
        "venue_full": "IEEE International Conference on Advanced Video and Signal Based Surveillance",
        "venue": "AVSS",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2022,
        "links": {
            "conf": "https://doi.org/10.1109/avss56176.2022.9959552"
        },
        "img": "/img/Publications/jinyong_rcrl.png",
        "abstract": "Super-resolution (SR) aims to recover the highresolution (HR) images from low-resolution (LR) images. Recently, various attempts, e.g., unsupervised SR models and domain-specific SR have achieved outstanding performance for various real-world applications. However, they significantly suffer from low generalization performance when trained on another domain dataset. Furthermore, they often exhibit performance degradation when the model continually learns multiple tasks; so-called catastrophic forgetting degrades the SR performance. In this paper, we are the first to propose a novel approach for continual multi-task SR named Replay-based Continual Representation Learning framework that can be applicable to GAN-based SR models, which utilizes feature memory for preserving the learned features from the previous task. Our experimental results demonstrate the effectiveness of RCRL in continual multi-task SR at improving generalization performance and alleviating catastrophic forgetting.",
        "abstract_ko": "초해상도(SR)는 저해상도(LR) 이미지로부터 고해상도(HR) 이미지를 복원하는 것을 목표로 한다. 최근에는 비지도 SR 모델이나 도메인 특화 SR과 같은 다양한 시도가 여러 실제 응용 분야에서 뛰어난 성능을 달성하였다. 그러나 이러한 모델들은 다른 도메인 데이터셋으로 학습될 경우 일반화 성능이 크게 저하되는 문제를 겪는다. 또한 모델이 지속적으로 여러 작업을 학습할 때 성능 저하가 발생하는 경우가 많으며, 이른바 '치명적 망각(catatstrophic forgetting)'이 SR 성능을 저하시킨다. 본 논문에서는 이전 작업에서 학습된 특징을 보존하기 위해 특징 메모리를 활용하는, GAN 기반 SR 모델에도 적용할 수 있는 새로운 지속적 다중 작업 SR 접근법인 재생 기반 지속적 표현 학습(Replay-based Continual Representation Learning) 프레임워크를 최초로 제안한다. 우리의 실험 결과는 RCRL이 연속 다중 작업 SR에서 일반화 성능을 향상하고 치명적인 망각을 완화하는 데 효과적임을 보여준다."
    },
    {
        "title": "STL-DP: Differentially Private Time Series Exploring Decomposition and Compression Methods",
        "authors": [
            "Kyunghee Kim",
            "Minha Kim",
            "Simon S. Woo"
        ],
        "venue_full": "ACM CIKM Workshop on Privacy Algorithms in Systems",
        "venue": "PAS",
        "track": "Workshop Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2022,
        "links": {},
        "img": "/img/Publications/cikmw22_minha.png",
        "abstract": "As time series data is collected and used in a variety of fields, the importance of preserving privacy on time series is also on the increase. This paper is a preliminary study of the Differential Privacy (DP) algorithm specially designed to provide privacy to time series data by integrating the time series decomposition technique. In particular, this study extends the Fourier Perturbation Algorithm (FPA) with Seasonal and Trend decomposition using LOESS (STL). In this work, we propose STL-DP, which first performs STL decomposition to the original data. Then we apply the FPA only to the core part of the time series, particularly trend or seasonal components, to provide privacy. In this preliminary study, we show that our approach consistently outperforms other baselines in terms of utility according to the experimental results.",
        "abstract_ko": "시계열 데이터가 수집되어 다양한 분야에서 사용됨에 따라, 시계열 데이터의 프라이버시를 보호하는 중요성도 증가하고 있다. 본 논문은 시계열 분해 기법을 통합하여 시계열 데이터의 프라이버시를 제공하도록 특별히 설계된 차등 프라이버시(Differential Privacy, DP) 알고리즘에 대한 예비 연구이다. 특히, 본 연구는 STL(LOESS를 이용한 계절 및 추세 분해)을 활용한 푸리에 섭동 알고리즘(Fourier Perturbation Algorithm, FPA)을 확장한다. 본 연구에서는 먼저 원본 데이터에 STL 분해를 수행한 후, 시계열의 핵심 부분, 특히 추세 또는 계절 성분에만 FPA를 적용하여 프라이버시를 제공하는 STL-DP를 제안한다. 이 예비 연구에서 본 연구에서는 실험 결과에 따라 제안한 접근법이 다른 기준 방법들보다 일관되게 유용성 측면에서 우수함을 보여준다."
    },
    {
        "title": "A<sup>2</sup>: Adaptive Augmentation for Mitigating Dataset Bias",
        "authors": [
            "Jaeju An",
            "Taejun Kim",
            "Donggeun Ko",
            "Sangyup Lee",
            "Simon S. Woo"
        ],
        "venue_full": "Asian Conference on Computer Vision",
        "venue": "ACCV",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2022,
        "links": {},
        "img": "/img/Publications/accv22_jaeju.png",
        "abstract": "The trained networks can often suffer from overfitting issues due to the unintended bias in a dataset causing inaccurate, unreliable, and untrustworthy results. To tackle this problem, we propose a novel augmentation framework, Adaptive Augmentation (A^2), based on a generative model and few-shot adaptation for augmenting bias-conflict samples that help classifiers learn debiased representations without any prior knowledge about bias types. Our framework consists of three steps: 1) extracting bias-conflict samples from a biased dataset in an unsupervised manner, 2) training a generative model with the biased dataset and adapting biased distribution from the generative model to the extracted bias-conflict samples' distribution, and 3) augmenting bias-conflict samples by translating bias-align samples with the trained generative model. Therefore, our classifier can effectively learn the debiased representation without human supervision.",
        "abstract_ko": "훈련된 네트워크는 데이터셋의 의도하지 않은 편향으로 인해 부정확하고 신뢰할 수 없으며 믿기 어려운 결과를 초래하는 과적합 문제를 겪는 경우가 많습니다. 이 문제를 해결하기 위해, 본 연구에서는 새로운 증강 프레임워크인 적응형 증강(A^2, Adaptive Augmentation)을 제안합니다. 이는 생성 모델과 소수 샷 적응(few-shot adaptation)에 기반하여 편향 충돌 샘플을 증강하여, 편향 유형에 대한 사전 지식 없이도 분류기가 편향 없는 표현을 학습하도록 돕습니다. 제안 프레임워크는 세 단계로 구성됩니다: 1) 편향된 데이터셋에서 편향 충돌 샘플을 비지도 방식으로 추출, 2) 편향된 데이터셋으로 생성 모델을 학습시키고, 생성 모델에서 편향 분포를 추출된 편향 충돌 샘플의 분포에 적응, 3) 학습된 생성 모델로 편향 정렬 샘플을 변환하여 편향 충돌 샘플 증강. 따라서 우리의 분류기는 인간의 감독 없이도 편향이 제거된 표현을 효과적으로 학습할 수 있습니다."
    },
    {
        "title": "Discussion about Attacks and Defenses for Fair and Robust Recommendation System Design",
        "authors": [
            "Mirae Kim",
            "Simon S. Woo"
        ],
        "venue_full": "ACM RecSys Workshop on Responsible Recommendation",
        "venue": "FAccTRec",
        "track": "Workshop Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2022,
        "links": {
            "conf": "https://doi.org/10.48550/arxiv.2210.07817"
        },
        "img": "/img/Publications/facctrec_mirae22.png",
        "abstract": "Information has exploded on the Internet and mobile with the advent of the big data era. In particular, recommendation systems are widely used to help consumers who struggle to select the best products among such a large amount of information. However, recommendation systems are vulnerable to malicious user biases, such as fake reviews to promote or demote specific products, as well as attacks that steal personal information. Such biases and attacks compromise the fairness of the recommendation model and infringe the privacy of users and systems by distorting data.Recently, deep-learning collaborative filtering recommendation systems have shown to be more vulnerable to this bias. In this position paper, we examine the effects of bias that cause various ethical and social issues, and discuss the need for designing the robust recommendation system for fairness and stability.",
        "abstract_ko": "빅데이터 시대의 도래와 함께 인터넷과 모바일에서 정보가 폭발적으로 증가했다. 특히 추천 시스템은 이러한 방대한 정보 속에서 최적의 제품을 선택하는 데 어려움을 겪는 소비자들을 돕기 위해 널리 사용된다. 그러나 추천 시스템은 특정 제품을 홍보하거나 평가절하하기 위한 가짜 리뷰와 같은 악의적인 사용자 편향, 그리고 개인 정보를 탈취하는 공격에 취약하다. 이러한 편향과 공격은 추천 모델의 공정성을 훼손하고 데이터를 왜곡함으로써 사용자와 시스템의 프라이버시를 침해한다. 최근에는 딥러닝 협업 필터링 기반 추천 시스템이 이러한 편향에 더 취약하다는 것이 드러났다. 본 입장문에서는 다양한 윤리적, 사회적 문제를 야기하는 편향의 영향을 검토하고, 공정성과 안정성을 위해 견고한 추천 시스템 설계의 필요성을 논의한다."
    },
    {
        "title": "Accelerating CNN via Dynamic Pattern-based Pruning Network",
        "authors": [
            "Gwanghan Lee",
            "Saebyeol Shin",
            "Simon S. Woo"
        ],
        "venue_full": "ACM International Conference on Information and Knowledge Management",
        "venue": "CIKM",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            3
        ],
        "year": 2022,
        "links": {
            "conf": "https://doi.org/10.1145/3511808.3557225"
        },
        "img": "/img/Publications/cikm22_gwanhan.png",
        "abstract": "Most dynamic pruning methods fail to achieve actual acceleration due to the extra overheads caused by indexing and weight-copying to implement the dynamic sparse patterns for every input sample. To address this issue, we propose Dynamic Pattern-based Pruning Network, which preserves the advantages of both static and dynamic networks. Unlike previous dynamic pruning methods, our novel method dynamically fuses static kernel patterns, enhancing the kernel's representational power without additional overhead. Moreover, our dynamic sparse pattern enables an efficient process using BLAS libraries, accomplishing actual acceleration. We demonstrate the effectiveness of the proposed network on CIFAR and ImageNet, outperforming the state-of-the-art methods achieving better accuracy with lower computational cost.",
        "abstract_ko": "대부분의 동적 가지치기 방법은 입력 샘플마다 동적 희소 패턴을 구현하기 위해 인덱싱과 가중치 복사로 인한 추가 오버헤드 때문에 실제 가속을 달성하지 못합니다. 이러한 문제를 해결하기 위해, 본 연구에서는 정적 네트워크와 동적 네트워크의 장점을 모두 보존하는 동적 패턴 기반 가지치기 네트워크(Dynamic Pattern-based Pruning Network)를 제안합니다. 이전의 동적 가지치기 방법과 달리, 우리 새로운 방법은 정적 커널 패턴을 동적으로 융합하여 추가 오버헤드 없이 커널의 표현력을 향상시킵니다. 더 나아가, 우리의 동적 희소 패턴은 BLAS 라이브러리를 이용한 효율적인 처리를 가능하게 하여 실제 가속을 달성합니다. 본 연구에서는 CIFAR와 ImageNet에서 제안된 네트워크의 효과를 입증하였으며, 기존 최첨단 방법들보다 낮은 계산 비용으로 더 높은 정확도를 달성함을 보여줍니다."
    },
    {
        "title": "Samba: Identifying Inappropriate Videos for Young Children on YouTube",
        "authors": [
            "Binh M. Le",
            "Rajat Tandon",
            "Chingis Oinar",
            "Jeffrey Liu",
            "Uma Durairaj",
            "Jiani Guo",
            "Spencer Zahabizadeh",
            "Sanjana Ilango",
            "Jeremy Tang",
            "Fred Morstatter",
            "Simon S. Woo",
            "Jelena Mirkovic"
        ],
        "venue_full": "ACM International Conference on Information and Knowledge Management",
        "venue": "CIKM",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            3
        ],
        "year": 2022,
        "links": {},
        "img": "/img/Publications/cikm22_binh.png",
        "abstract": "In this paper, we propose a fusion model, called Samba, which uses both metadata and video subtitles for content classifying YouTube videos for kids. Previous studies utilized metadata, such as video thumbnails, title, comments, ect., for detecting inappropriate videos for young viewers.  Such metadata-based approaches achieve high accuracy but still have significant misclassifications due to the reliability of input features. By adding representation features from subtitles, which are pretrained with a self-supervised contrastive framework, our Samba model can outperform other state-of-the-art classifiers by at least 7%. We also publish a large-scale, comprehensive dataset of 70K videos for future studies.",
        "abstract_ko": "본 논문에서는 어린이용 유튜브 동영상 콘텐츠를 분류하기 위해 메타데이터와 동영상 자막을 모두 활용하는 Samba라는 융합 모델을 제안합니다. 이전 연구들은 동영상 썸네일, 제목, 댓글 등과 같은 메타데이터를 활용하여 어린 시청자에게 부적절한 동영상을 탐지했습니다. 이러한 메타데이터 기반 접근법은 높은 정확도를 달성하지만 입력 특징의 신뢰성 문제로 인해 여전히 상당한 오분류가 발생합니다. 자막에서 사전 학습된 자기 지도 대비 학습 프레임워크를 통해 얻은 표현 특징을 추가함으로써, 우리의 Samba 모델은 다른 최첨단 분류기들보다 최소 7% 이상의 성능 향상을 보여줄 수 있습니다. 또한 향후 연구를 위해 7만 개 동영상에 대한 대규모 통합 데이터셋도 공개합니다."
    },
    {
        "title": "Towards an Awareness of Time Series Anomaly Detection Models' Adversarial Vulnerability",
        "authors": [
            "Shahroz Tariq",
            "Binh M. Le",
            "Simon S. Woo"
        ],
        "venue_full": "ACM International Conference on Information and Knowledge Management",
        "venue": "CIKM",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            3
        ],
        "year": 2022,
        "links": {
            "conf": "https://doi.org/10.1145/3511808.3557073"
        },
        "img": "/img/Publications/cikm22_shah.png",
        "abstract": "Time series anomaly detection is studied in statistics, ecology, and computer science. Numerous time series anomaly detection strategies have been presented utilizing deep learning. Many of these methods exhibit state-of-the-art performance on benchmark datasets, giving the false impression that they are robust and deployable in a wide variety of real-world scenarios. In this study, we demonstrate that adding modest adversarial perturbations to sensor data severely weakens anomaly detection systems.   Under well-known adversarial attacks such as Fast Gradient Sign Method (FGSM) and Projected Gradient Descent (PGD), we demonstrate that the performance of state-of-the-art deep neural networks (DNNs) and graph neural networks (GNNs), which claim to be robust against anomalies and possibly be used in real-world systems, drops to 0%. We demonstrate for the first time, to our knowledge, the vulnerability of anomaly detection systems to adversarial attacks. This study aims to increase awareness of the adversarial vulnerabilities of time series anomaly detectors.",
        "abstract_ko": "시계열 이상 탐지는 통계학, 생태학, 컴퓨터 과학에서 연구됩니다. 딥러닝을 활용한 다양한 시계열 이상 탐지 전략이 제시되었습니다. 이러한 방법들 중 많은 수가 벤치마크 데이터셋에서 최첨단 성능을 보여, 마치 다양한 실제 시나리오에서 견고하고 배포 가능하다는 잘못된 인상을 줍니다. 본 연구에서는 센서 데이터에 적당한 적대적 교란을 추가하면 이상 탐지 시스템이 심각하게 약화된다는 것을 보여줍니다. 잘 알려진 적대적 공격인 Fast Gradient Sign Method(FGSM)와 Projected Gradient Descent(PGD) 하에서, 이상에 대해 견고하다고 주장하며 실제 시스템에서 사용될 수 있는 최첨단 딥 뉴럴 네트워크(DNN)와 그래프 뉴럴 네트워크(GNN)의 성능이 0%로 떨어진다는 것을 보여줍니다. 본 연구에서는 우리가 알기로 처음으로 이상 탐지 시스템이 적대적 공격에 취약하다는 것을 보여준다. 본 연구는 시계열 이상 탐지기의 적대적 취약성에 대한 인식을 높이는 것을 목표로 한다."
    },
    {
        "title": "Sliding Cross Entropy for Self-Knowledge Distillation",
        "authors": [
            "Hanbeen Lee",
            "Jeongho Kim",
            "Simon S. Woo"
        ],
        "venue_full": "ACM International Conference on Information and Knowledge Management",
        "venue": "CIKM",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            3
        ],
        "year": 2022,
        "links": {
            "conf": "https://doi.org/10.1145/3511808.3557453"
        },
        "img": "/img/Publications/cikm22_hanbeen.png",
        "abstract": "Knowledge distillation (KD) is a powerful technique for improving the performance of a small model by leveraging the knowledge of a larger model. Despite its remarkable performance boost, KD has a drawback with the substantial computational cost of pre-training larger models in advance. Recently, a method called self-knowledge distillation has emerged to improve the model's performance without any supervision. In this paper, we present a novel plug-in approach called Sliding Cross Entropy (SCE) method, which can be combined with existing self-knowledge distillation to significantly improve the performance. Specifically, to minimize the difference between the output of the model and the soft target obtained by self-distillation, we split each softmax representation by a certain window size, and reduce the distance between sliced parts. Through this approach, the model evenly considers all the inter-class relationships of a soft target during optimization. The extensive experiments show that our approach is effective in various tasks, including classification, object detection, and semantic segmentation. We also demonstrate SCE consistently outperforms existing baseline methods.",
        "abstract_ko": "지식 증류(KD)는 더 큰 모델의 지식을 활용해 작은 모델의 성능을 향상시키는 강력한 기법입니다. 놀라운 성능 향상에도 불구하고, KD는 사전에 더 큰 모델을 사전 학습하는 데 드는 상당한 계산 비용이 단점이 있습니다. 최근에는 자체 지식 증류라는 방법이 등장하여 감독 없이 모델 성능을 향상시키고 있습니다. 본 논문에서는 기존의 자기 인식 증류와 결합하여 성능을 크게 향상시킬 수 있는 새로운 플러그인 접근법인 슬라이딩 크로스 엔트로피(SCE) 방법을 제시합니다. 구체적으로, 모델 출력과 자가 증류로 얻은 소프트 타겟 간의 차이를 최소화하기 위해 각 소프트맥스 표현을 특정 윈도우 크기로 나누고, 슬라이싱된 부분 간 거리를 줄입니다. 이 접근 방식을 통해 모델은 최적화 과정에서 소프트 타겟의 모든 클래스 간 관계를 균등하게 고려합니다. 광범위한 실험을 통해 제안 접근이 분류, 객체 탐지, 의미론적 분할을 포함한 다양한 작업에서 효과적임을 보여주었습니다. 또한 본 연구에서는 SCE가 기존의 기준 방법보다 일관되게 더 우수함을 입증했습니다."
    },
    {
        "title": "Selective Tensorized Multi-layer LSTM for Orbit Prediction",
        "authors": [
            "Youjin Shin",
            "Eun-Ju Park",
            "Simon S. Woo",
            "Okchul Jung",
            "Daewon Chung"
        ],
        "venue_full": "ACM International Conference on Information and Knowledge Management",
        "venue": "CIKM",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            3
        ],
        "year": 2022,
        "links": {
            "conf": "https://doi.org/10.1145/3511808.3557138"
        },
        "img": "/img/Publications/cikm22_youjin.png",
        "abstract": "Although the collision of space objects not only incurs a high cost but also threatens human life, the risk of collision between satellites has increased, as the number of satellites has rapidly grown due to the significant interests in many space applications. However, it is not trivial to monitor the behavior of the satellite in real-time since the communication between the ground station and spacecraft are dynamic and sparse, and there is an increased latency due to the long distance. Accordingly, it is strongly required to predict the orbit of a satellite to prevent unexpected contingencies such as a collision. Therefore, the real-time monitoring and accurate orbit prediction is required. Furthermore, it is necessarily to compress the prediction model, while achieving a high prediction performance in order to be deployable in the real systems. Although several machine learning and deep learning-based prediction approaches have been studied to address such issues, most of them have applied only basic machine learning models for orbit prediction without considering the size, running time, and complexity of the prediction model. In this research, we propose Selective Tensorized multi-layer LSTM (ST-LSTM) for orbit prediction, which not only improves the orbit prediction performance but also compresses the size of the model that can be applied in practical deployable scenarios. To evaluate our model, we use the real orbit dataset collected from the Korea Multi-Purpose Satellites (KOMPSAT-3 and KOMPSAT-3A) of the Korea Aerospace Research Institute (KARI) for 5 years. In addition, we compare our ST-LSTM to other machine learning-based regression models, LSTM, and basic tensorized LSTM models with regard to the prediction performance, model compression rate, and running time.",
        "abstract_ko": "우주 물체의 충돌은 높은 비용을 초래할 뿐만 아니라 인명에도 위협이 되지만, 많은 우주 응용 분야에 대한 관심이 급증함에 따라 위성의 수가 급격히 증가하여 위성 간 충돌 위험이 증가했습니다. 그러나 지상국과 우주선 간의 통신이 동적이고 불규칙하며 먼 거리로 인해 지연이 증가하기 때문에 위성의 행동을 실시간으로 모니터링하는 것은 사소한 일이 아닙니다. 따라서 충돌과 같은 예상치 못한 비상 사태를 방지하기 위해 위성의 궤도를 예측하는 것이 강력히 요구됩니다. 따라서 실시간 모니터링과 정확한 궤도 예측이 필요합니다. 또한 실제 시스템에 배포할 수 있도록 높은 예측 성능을 달성하면서 예측 모델을 압축하는 것이 필요합니다. 이러한 문제를 해결하기 위해 여러 기계 학습 및 딥러닝 기반 예측 접근법이 연구되었지만, 대부분은 예측 모델의 크기, 실행 시간 및 복잡도를 고려하지 않고 궤도 예측을 위해 기본적인 기계 학습 모델만 적용했습니다. 본 연구에서는 궤도 예측을 위해 선택적 텐서화 다층 LSTM(Selective Tensorized multi-layer LSTM, ST-LSTM)을 제안하며, 이는 궤도 예측 성능을 향상시킬 뿐만 아니라 실제 배치 가능한 시나리오에 적용할 수 있는 모델의 크기를 압축합니다. 본 연구에서는 모델을 평가하기 위해 한국항공우주연구원(KARI)의 한국 다목적 위성(KOMPSAT-3 및 KOMPSAT-3A)에서 5년 동안 수집한 실제 궤도 데이터를 사용합니다. 또한 본 연구에서는 예측 성능, 모델 압축률, 실행 시간과 관련하여 우리의 ST-LSTM을 다른 기계 학습 기반 회귀 모델, LSTM, 그리고 기본 텐서화된 LSTM 모델과 비교합니다."
    },
    {
        "title": "GLAMD: Global and Local Attention Mask Distillation for Object Detectors",
        "authors": [
            "Younho Jang",
            "Wheemyung Shin",
            "Jinbeom Kim",
            "Simon S. Woo",
            "Sung-Ho Bae"
        ],
        "venue_full": "European Conference on Computer Vision",
        "venue": "ECCV",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            2
        ],
        "year": 2022,
        "links": {
            "conf": "https://doi.org/10.1007/978-3-031-20080-9_27"
        },
        "img": "/img/Publications/jinpum_eccv22.png",
        "abstract": "Knowledge distillation (KD) is a well-known model compression strategy to improve models' performance with fewer parameters. However, recent KD approaches for object detection have faced two limitations. First, they distill nearby foreground regions, ignoring potentially useful background information. Second, they only consider global contexts, thereby the student model can hardly learn local details from the teacher model. To overcome such challenging issues, we propose a novel knowledge distillation method, GLAMD, distilling both global and local knowledge from the teacher. We divide the feature maps into several patches and apply an attention mechanism for both the entire feature area and each patch to extract the global context as well as local details simultaneously. Our method outperforms the state-of-the-art methods with 40.8 AP on COCO2017 dataset, which is 3.4 AP higher than the student model (ResNet50 based Faster R-CNN) and 0.7 AP higher than the previous global attention-based distillation method.",
        "abstract_ko": "지식 증류(KD)는 모델의 성능을 더 적은 파라미터로 향상시키기 위한 잘 알려진 모델 압축 전략입니다. 그러나 최근 객체 탐지용 KD 접근법은 두 가지 한계에 직면했습니다. 첫째, 이들은 인근 전경 영역만 증류하여 잠재적으로 유용한 배경 정보를 무시합니다. 둘째, 글로벌 컨텍스트만 고려하기 때문에 학생 모델은 교사 모델로부터 지역적 세부 정보를 거의 학습할 수 없습니다. 이러한 어려운 문제를 해결하기 위해, 본 연구에서는 교사로부터 글로벌 및 로컬 지식을 모두 증류하는 새로운 지식 증류 방법인 GLAMD를 제안합니다. 본 연구에서는 특징 맵을 여러 패치로 나누고, 전체 특징 영역과 각 패치 모두에 주의(attention) 메커니즘을 적용하여 글로벌 컨텍스트와 지역적 세부 정보를 동시에 추출합니다. 제안 방법은 COCO2017 데이터셋에서 40.8 AP로 최첨단 방법들을 능가하며, 이는 학생 모델(ResNet50 기반 Faster R-CNN)보다 3.4 AP 높고, 이전 글로벌 어텐션 기반 지식 증류 방법보다 0.7 AP 높은 수치입니다."
    },
    {
        "title": "다중 스케일 특성 생성 네트워크",
        "authors": [
            "Gwanghan Lee",
            "Saebyeol Shin",
            "Simon S. Woo"
        ],
        "venue_full": "한국컴퓨터종합학술대회",
        "venue": "KCC",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2022,
        "links": {},
        "img": null,
        "abstract": "조기 종료 네트워크(early-exit network)는 추론 시 동적으로 모델 복잡도를 낮춤으로써 신경망의 효율성을 높인다. 기존 연구들은 입력 샘플이나 모델 구조의 중복성(redundancy)을 줄이는 데 집중하였으나 고차원 특징 정보가 부족한 초기 분류기들이 전체 네트워크 성능에 치명적인 영향을 끼치는 문제를 해결하지 못했다. 본 연구는 중복성을 줄이는 것뿐만 아니라 합성곱 커널(convolution kernel) 중앙에서 가중치들을 공유하면서 효율적으로 다중 스케일(multi-scale) 특징을 생성하여 조기 종료 네트워크의 성능을 향상시킨다. 또한 이 논문의 게이팅 네트워크(gating network)는 네트워크의 서로 다른 위치에 있는 각 합성곱 레이어에 따라 최적의 다중 스케일 특징 비율을 결정하도록 학습된다.",
        "abstract_ko": "Early-exit networks enhance the efficiency of neural networks by dynamically reducing model complexity during inference. Existing studies focused on reducing redundancy in input samples or model structures, but they failed to address the problem where early classifiers with insufficient high-dimensional feature information critically affect the performance of the entire network. This study improves the performance of early-exit networks not only by reducing redundancy but also by efficiently generating multi-scale features through sharing weights at the center of convolution kernels. In addition, the gating network in this paper is trained to determine the optimal multi-scale feature ratio for each convolutional layer at different positions within the network."
    },
    {
        "title": "이미지 전처리 방법을 통한 딥페이크 탐지 회피 연구",
        "authors": [
            "Jeongho Kim",
            "Jeonghyun Kim",
            "Taejune Kim",
            "Simon S. Woo"
        ],
        "venue_full": "한국컴퓨터종합학술대회",
        "venue": "KCC",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2022,
        "links": {},
        "img": null,
        "abstract": "오늘날 국제사회에서 딥페이크(Deepfake) 기술에 대한 우려가 점점 커지고 있다. 딥페이크는 여러 종류의 이미지, 영상들의 얼굴을 짧은 시간 만에 바꿀 수 있는 기술로, 손쉽게 왜곡된 정보를 전파할 수 있기 때문이다. 이에따라딥페이크이미지,영상에대응하기위한탐지기술연구및시도가이뤄졌다. 그러나,탐지기술연구를 가능케 만들어 줄 수 있는 고품질의 데이터셋(dataset)을 생성하는 연구는 더디게 이뤄졌다. 본 논문에서는 딥페 이크 탐지 기술 발전에 필수 불가결한 요소인 고품질 데이터 생성에 대한 새로운 방법론을 제시하고 이를 통해 딥페이크 탐지 기술의 한계 및 발전 방향성에 대해 살펴보고자 한다.",
        "abstract_ko": "오늘날 국제사회에서 딥페이크(Deepfake) 기술에 대한 우려가 점점 커지고 있다. 딥페이크는 여러 종류의 이미지와 영상의 얼굴을 짧은 시간 만에 바꿀 수 있는 기술로, 손쉽게 왜곡된 정보를 전파할 수 있기 때문이다. 이에 따라 딥페이크 이미지와 영상에 대응하기 위한 탐지 기술 연구 및 시도가 이루어졌다. 그러나, 탐지 기술 연구를 가능하게 만들어 줄 수 있는 고품질 데이터셋(dataset)을 생성하는 연구는 더디게 이루어졌다. 본 논문에서는 딥페이크 탐지 기술 발전에 필수 불가결한 요소인 고품질 데이터 생성에 대한 새로운 방법론을 제시하고, 이를 통해 딥페이크 탐지 기술의 한계 및 발전 방향성에 대해 살펴보고자 한다."
    },
    {
        "title": "Deep Learning Algorithm for Postmortem Face Reconstruction (딥러닝 기술을 활용한 사후 시신 얼굴 복원)",
        "authors": [
            "Hajin Kim",
            "Chingis Oinar",
            "UiHyeon Shin",
            "Woo Simon S",
            "Moon-Young Kim"
        ],
        "venue_full": "제29회 대한기초의학 학술대회",
        "venue": "대한법의학회",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2022,
        "links": {},
        "img": "dead.JPG",
        "abstract": "As the number of lonely deaths increases due to the aging population and the increase in single-person households, the frequency of discovery of decomposed corpses in death cases is gradually increasing. In the wake of the strengthening of on-site guidelines by the National Police Agency and the adjustment of the prosecution and police investigation rights, the need for identification and autopsy at the scene is being emphasized. Although the existing forensic face restoration technology using face bones has accumulated a number of previous studies, there is a limitation in that the restoration results may vary due to many factors such as the thickness and nature of facial soft tissue, shape of eyes or nose, and distribution of body hair. Based on the fact that facial recognition technology using facial landmarks is becoming common all over the world, this study aims to help quickly and accurately identify the faces of corrupt bodies that expand due to postmortem-change.\nIn this study, living data such as ID cards and post-mortem data were collected for bodies identified with fingerprints, and compared pairs were formed, and face recognition technology used the MTCNN model, which is currently widely used in the field. The artificial intelligence model, which determines whether live data and post-data match, selected and analyzed Arcface, which is the same among a total of seven open-source models (VGG-Face, FaceNet, OpenFace, DeepFace, DeepID, ArcFace, Dlib).\nThe performance of the artificial intelligence model (Arcface) was evaluated by comparing the results of the judgment of the expert group, the general public group, and the entire human group. As a result of comparison using 107 pairs of original data, the same person judgment rate was found to be 51.4% in the expert group, 22.4% in the general population, and 29.0% in the total human group, and the artificial intelligence model was 47.7%. As a result of reviewing the original data, it was determined that changes in skin color due to decomposition could affect the performance of artificial intelligence models According to this judgment, when the original data were preprocessed in gray scale, the judgment rate of the same person as the artificial intelligence model was 50.5%, which showed an improvement in performance of about 3%. \nThrough this study, it was found that only the currently developed artificial intelligence model showed facial recognition performance close to that of a group of experts. It is expected that face recognition performance can be further improved if various pretreatment technologies reflecting the characteristics of the postmortem change are developed and applied in the future.\n인구 고령화 및 1인 가구의 증가는 고독사의 증가로 이어져 변사사건에서 부패 시신이 발견되는 빈도가 점차 높아지고 있다. 경찰청의 현장 지침 강화 및 검경 수사권 조정 등을 계기로 현장에서는 신원 확인 및 부검의 필요성이 강조되고 있다. 얼굴뼈를 활용한 기존의 법의학적 얼굴 복원 기술은 다수의 선행연구 결과가 축적되어 있지만, 얼굴 연부조직의 두께나 성상, 눈이나 코의 형태, 체모의 분포 등의 고려 요소가 많아 복원 결과가 달라질 수 있다는 한계가 존재한다. 본 연구는 얼굴의 특징점(face landmark)을 활용하는 얼굴 인식 기술이 전세계적으로 보편화되고 있다는 점에 착안하여, 사후변화로 인해 연부조직이 팽창된 부패 시신의 얼굴을 복원하거나 생전의 사진과 비교하여 동일인 여부를 판정함으로써 신속하고 정확한 신원확인에 도움을 주고자 한다. \n 본 연구에서는 지문 등으로 신원이 확인된 시신을 대상으로 신분증 등의 생전 데이터와 검안 또는 부검 당시 촬영된 사후데이터를 수집한 뒤 각각 짝을 지어 비교쌍을 구성하였으며, 얼굴 인식 기술은 현재 해당 분야에서 많이 활용되고 있는 MTCNN 모델을 활용하였다. 생전데이터와 사후데이터의 일치 여부를 판단하는 인공지능모델은 총 7개의 open source 모델(VGG-Face, FaceNet, OpenFace, DeepFace, DeepID, ArcFace, Dlib) 중 가장 동일인 판정률의 빈도가 가장 높게 나타난 Arcface를 선정하여 분석하였다.\n 인공지능모델(Arcface)의 성능은 전문가집단과 일반인 집단, 전체 사람 집단의 판정 결과와 비교하여 평가하였다. 원본 데이터 107쌍을 이용한 비교 결과, 동일인 판정률은 전문가집단 51.4%, 일반인 22.4%, 전체 사람 집단 29.0%로 조사되었으며, 인공지능모델은 47.7%로 나타났다. 원본 데이터를 검토한 결과, 부패로 인한 피부색의 변화가 인공지능모델의 성능에 영향을 줄 가능성이 있다고 판단되었다. 이러한 판단에 따라 원본 데이터를 회색조(gray scale)로 전처리하였을 때 인공지능모델의 동일인 판정률은 50.5%로, 약 3%의 성능이 향상되는 것을 볼 수 있었다. \n본 연구를 통해 현재 개발되어 있는 인공지능모델만으로도 전문가 집단에 근접한 얼굴 인식 성능을 보이는 것을 알 수 있었다. 향후 사후변화의 특성을 반영한 다양한 전처리 기법을 개발하여 적용할 경우 얼굴 인식 성능을 더욱 향상시킬 수 있을 것으로 기대된다.",
        "abstract_ko": "고령화와 1인 가구 증가로 인한 고독사 증가로 인해 사망 사건에서 부패된 시신 발견 빈도가 점차 증가하고 있다. 경찰청의 현장 지침 강화와 검찰·경찰 수사권 조정에 따라 현장에서의 신원 확인과 부검의 필요성이 강조되고 있다. 얼굴 뼈를 이용한 기존의 법의학적 얼굴 복원 기술은 다수의 선행 연구가 축적되어 있지만, 안면 연부 조직의 두께와 성질, 눈이나 코의 형태, 체모 분포 등 여러 요인에 따라 복원 결과가 달라질 수 있다는 한계가 있다. 얼굴 특징점을 이용한 얼굴 인식 기술이 전 세계적으로 보편화되고 있다는 사실을 바탕으로, 본 연구는 사후 변화로 인해 팽창된 시신의 얼굴을 빠르고 정확하게 식별하는 데 도움을 주는 것을 목표로 한다. 본 연구에서는 지문으로 확인된 시신에 대해 신분증과 같은 생체 데이터와 사후 데이터를 수집하고 비교 쌍을 구성하였으며, 얼굴 인식 기술에는 현재 현장에서 널리 사용되는 MTCNN 모델을 사용하였다. 생체 데이터와 사후 데이터가 일치하는지를 판단하는 인공지능 모델로, 총 7개의 오픈 소스 모델(VGG-Face, FaceNet, OpenFace, DeepFace, DeepID, ArcFace, Dlib) 중 동일한 ArcFace를 선택하여 분석하였다. 인공지능 모델(Arcface)의 성능은 전문가 그룹, 일반 대중 그룹, 전체 인간 그룹의 판단 결과를 비교하여 평가하였다. 107쌍의 원본 데이터를 사용한 비교 결과, 동일 인물 판단률은 전문가 그룹에서 51.4%, 일반 대중에서는 22.4%, 전체 인간 그룹에서는 29.0%였으며, 인공지능 모델은 47.7%였다. 원본 데이터를 검토한 결과, 부패로 인한 피부 색 변화가 인공지능 모델의 성능에 영향을 미칠 수 있음이 확인되었다. 이러한 판단에 따라 원본 데이터를 그레이 스케일로 전처리했을 때, 인공지능 모델과 동일 인물 판단률은 50.5%였으며, 약 3% 정도 성능이 향상됨을 보여주었다. Through this study, it was found that only the currently developed artificial intelligence model showed facial recognition performance close to that of a group of experts. It is expected that face recognition performance can be further improved if various pretreatment technologies reflecting the characteristics of the postmortem change are developed and applied in the future. The aging population and the increase in single-person households have led to a rise in lonely deaths, resulting in a gradually higher frequency of decomposed bodies being found in unnatural death cases. With the strengthened on-site guidelines of the National Police Agency and adjustments to investigative authority between the police and prosecutors, the need for identification and postmortem examination has been emphasized on-site. Although existing forensic facial reconstruction techniques using facial bones have accumulated results from numerous prior studies, there are limitations as the reconstruction results can vary due to many factors such as the thickness and characteristics of facial soft tissues, shapes of the eyes or nose, and the distribution of body hair. This study, noting that facial recognition technology utilizing facial landmarks has become widespread worldwide, aims to assist in rapid and accurate identification by restoring the faces of decomposed bodies with postmortem soft tissue swelling or comparing them with pre-mortem photographs to determine identity. In this study, data from deceased individuals whose identities were confirmed through fingerprints and other means were collected, including pre-mortem data such as identification cards and post-mortem data photographed during autopsy or examination. Pairs were then created for comparison. The face recognition technology used the MTCNN model, which is widely utilized in this field. Among seven open-source AI models (VGG-Face, FaceNet, OpenFace, DeepFace, DeepID, ArcFace, Dlib), ArcFace, which showed the highest frequency of correct identifications, was selected to evaluate whether the pre-mortem and post-mortem data matched. The performance of the AI model (ArcFace) was assessed by comparing it with the judgments made by expert groups, general public groups, and overall human groups. Using 107 pairs of original data, the correct identification rates were 51.4% for the expert group, 22.4% for the general public group, 29.0% for the overall human group, and 47.7% for the AI model. Upon reviewing the original data, it was judged that changes in skin color due to decomposition could influence the AI model's performance. Accordingly, when the original data were preprocessed into grayscale, the AI model's correct identification rate improved to 50.5%, showing an approximately 3% performance increase. This study demonstrated that currently developed AI models can achieve face recognition performance close to that of expert groups. In the future, it is expected that developing and applying various preprocessing techniques that reflect the characteristics of post-mortem changes could further improve face recognition performance."
    },
    {
        "title": "Learning Sparse Latent Graph Representations for Anomaly Detection in Multivariate Time Series",
        "authors": [
            "Siho Han",
            "Simon S. Woo"
        ],
        "venue_full": "ACM SIGKDD Conference on Knowledge Discovery and Data Mining",
        "venue": "KDD",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            4
        ],
        "year": 2022,
        "links": {
            "conf": "https://doi.org/10.1145/3534678.3539117"
        },
        "img": "/img/Publications/kdd22_sean.png",
        "abstract": "Anomaly detection in high-dimensional time series is typically tackled using either reconstruction- or forecasting-based deep learning algorithms. Both streams of approach have seen enormous success in terms of detection accuracy due to their abilities to learn compressed data representations and model temporal dependencies, respectively. However, most existing methods disregard the relationships between features, information that would be extremely useful when incorporated into the model. How can we effectively combine the best of reconstruction and forecasting models while also capturing feature interdependencies? In this work, we introduce Fused Sparse Autoencoder and Graph Net (FuSAGNet), which jointly optimizes reconstruction and forecasting while explicitly modeling the relationships within multivariate time series. Our approach combines Sparse Autoencoder and Graph Neural Network, the latter of which predicts future time series behavior from sparse latent representations learned by the former as well as graph structures learned through recurrent feature embedding. Experimenting on three real-world cyber-physical system datasets, we empirically demonstrate that the proposed method enhances the overall anomaly detection performance, outperforming baseline approaches. Moreover, we show that mining sparse latent patterns from high-dimensional time series improves the robustness of the graph-based forecasting model. Lastly, we conduct visual analyses to investigate the interpretability of both recurrent feature embedding vectors and sparse latent representations.",
        "abstract_ko": "고차원 시계열에서 이상 탐지는 일반적으로 재구성 기반 또는 예측 기반의 딥러닝 알고리즘을 사용하여 해결됩니다. 두 접근 방식 모두 압축된 데이터 표현을 학습하고 시간적 종속성을 모델링할 수 있는 능력 덕분에 탐지 정확도 면에서 큰 성공을 거두었습니다. 그러나 대부분의 기존 방법은 모델에 통합되면 매우 유용할 수 있는 특징 간의 관계를 무시합니다. 재구성 모델과 예측 모델의 장점을 효과적으로 결합하면서 특징 간 상호의존성도 포착할 수 있는 방법은 무엇일까요? 본 연구에서는 재구성과 예측을 동시에 최적화하면서 다변량 시계열 내 관계를 명시적으로 모델링하는 Fused Sparse Autoencoder 및 Graph Net(FuSAGNet)을 소개합니다. 제안 접근은 희소 오토인코더(Sparse Autoencoder)와 그래프 신경망(Graph Neural Network)을 결합한 것으로, 후자는 전자가 학습한 희소 잠재 표현(sparse latent representations)과 순환 특징 임베딩(recurrent feature embedding)을 통해 학습된 그래프 구조로부터 미래 시계열 행동을 예측한다. 세 가지 실제 사이버-물리 시스템(Cyber-Physical System) 데이터셋에 대해 실험한 결과, 제안된 방법이 전체 이상 탐지 성능을 향상시키며, 기준선 접근 방식을 능가함을 경험적으로 입증하였다. 또한, 고차원 시계열에서 희소 잠재 패턴을 추출하는 것이 그래프 기반 예측 모델의 견고성을 개선함을 보여준다. 마지막으로, 순환 특징 임베딩 벡터와 희소 잠재 표현의 해석 가능성을 조사하기 위해 시각적 분석을 수행한다."
    },
    {
        "title": "Evading Deepfake Detectors via High Quality Face Pre-Processing Methods",
        "authors": [
            "Jeongho Kim",
            "Taejune Kim",
            "Jeonghyeon Kim",
            "Simon S. Woo"
        ],
        "venue_full": "International Conference on Pattern Recognition",
        "venue": "ICPR",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2022,
        "links": {
            "conf": "https://doi.org/10.1109/icpr56361.2022.9956520"
        },
        "img": "/img/Publications/ICPR_2022_Evading_deepfake.png",
        "abstract": "Today, various multimedia content can be accessed and shared from any location via the Internet. In addition to normal content, there is an extensive amount of manipulated multimedia that can raise various social issues and concerns. Among the various types of manipulated media, deepfakes can be abused in impersonation or spreading fake information. Therefore, numerous studies have been performed to detect deepfakes to alleviate these concerns, and studies such as FaceForensics++ (FF++) and DeepFake Detection Challenge (DFDC) have sparked these studies by providing deepfake datasets. The deepfake datasets were utilized for supervised learning in conjunction with developing sophisticated neural networks and showed a high detection performance. Since powerful neural networks can learn even subtle details about an image, they must be trained on realistic deepfakes created by advanced deepfake generation technologies to improve the robustness of existing detectors. In order to boost the performance of deepfake detection models, we propose an approach to creating more realistic deepfake images by removing \"detectable\" artifacts from existing deepfake datasets' images. By applying the proposed method to the original deepfake dataset, we demonstrate that our technique can significantly reduce the detection performance of existing deepfake detectors. Our experimental results show the vulnerability of deployed detectors and pave the way for further improvement.",
        "abstract_ko": "오늘날, 다양한 멀티미디어 콘텐츠는 인터넷을 통해 어느 장소에서나 접속하고 공유할 수 있습니다. 일반적인 콘텐츠 외에도 다양한 사회적 문제와 우려를 일으킬 수 있는 조작된 멀티미디어가 풍부하게 존재합니다. 다양한 종류의 조작된 미디어 중에서도, 딥페이크는 사칭이나 가짜 정보 확산에 악용될 수 있습니다. 따라서 이러한 우려를 완화하기 위해 딥페이크를 탐지하기 위한 수많은 연구가 수행되었으며, FaceForensics++(FF++)와 DeepFake Detection Challenge(DFDC)와 같은 연구들은 딥페이크 데이터셋을 제공함으로써 이러한 연구들을 촉발했습니다. 딥페이크 데이터셋은 정교한 신경망 개발과 함께 지도 학습에 활용되었으며 높은 탐지 성능을 보여주었습니다. 강력한 신경망은 이미지에 대한 미세한 세부 사항까지 학습할 수 있기 때문에, 기존 탐지기의 견고성을 향상시키기 위해서는 고급 딥페이크 생성 기술로 제작된 현실적인 딥페이크 이미지로 학습되어야 합니다. 딥페이크 탐지 모델의 성능을 향상시키기 위해, 본 연구에서는 기존 딥페이크 데이터셋의 이미지에서 '탐지 가능한' 아티팩트를 제거하여 보다 현실적인 딥페이크 이미지를 생성하는 방법을 제안합니다. 제안된 방법을 원본 딥페이크 데이터셋에 적용함으로써, 우리의 기술이 기존 딥페이크 탐지기의 탐지 성능을 크게 낮출 수 있음을 보여줍니다. 실험 결과는 배치된 탐지기의 취약성을 보여주며, 향후 개선을 위한 길을 열어줍니다."
    },
    {
        "title": "Efficient Two-stage Model Retraining for Machine Unlearning",
        "authors": [
            "Junyaup Kim",
            "Simon S. Woo"
        ],
        "venue_full": "IEEE/CVF CVPR Workshop on Human-centered Intelligent Services: Safe and Trustworthy",
        "venue": "HCIS",
        "track": "Workshop Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2022,
        "links": {
            "conf": "https://doi.org/10.1109/cvprw56347.2022.00482"
        },
        "img": "/img/Publications/junjyuap_cvprw22.png",
        "abstract": "With the rise of the General Data Protection Regulation (GDPR), user data holders should guarantee the “individual’s right to be forgotten”. It means user data holders must completely remove user data when they receive the request. However, enabling a deep learning model to exclude specific data used during training is challenging. We can’t define what is ”forgetting” in deep learning and how to do it. To address this issue, we propose an efficient machine unlearning architecture to be used for computer vision classification models. Our approach consists of two-stage, where in the first stage we render a deep learning model that loses information with contrastive labels in the requested dataset. Second, we retrain the first stage output model with knowledge distillation (KD). Using this two-stage approach, we can substantiate the removal or forgetness of the requested dataset in the deep learning model. With various datasets used for multimedia applications, we demonstrate that our approach achieves performance on par or even higher accuracy than the original model, while effectively removing the requested data.",
        "abstract_ko": "일반 데이터 보호 규정(GDPR)의 등장으로, 사용자 데이터 보유자는 “개인의 잊혀질 권리”를 보장해야 합니다. 이는 사용자 데이터 보유자가 요청을 받을 때 사용자 데이터를 완전히 삭제해야 함을 의미합니다. 그러나 딥러닝 모델이 학습 중 사용된 특정 데이터를 제외하도록 하는 것은 어렵습니다. 본 연구에서는 딥러닝에서 '잊음'이 무엇인지 그리고 이를 어떻게 수행할 수 있는지 정의할 수 없습니다. 이러한 문제를 해결하기 위해, 본 연구에서는 컴퓨터 비전 분류 모델에 사용될 수 있는 효율적인 머신 언러닝 구조를 제안합니다. 제안 접근은 두 단계로 구성되며, 첫 번째 단계에서는 요청된 데이터셋에서 대비 레이블로 정보를 잃는 딥러닝 모델을 생성합니다. 두 번째로, 본 연구에서는 지식 증류(KD)를 통해 첫 번째 단계의 출력 모델을 재학습합니다. 이 두 단계 접근 방식을 사용하여, 본 연구에서는 딥러닝 모델에서 요청된 데이터셋의 제거 또는 망각을 입증할 수 있습니다. 멀티미디어 응용을 위해 다양한 데이터셋을 사용하면서, 본 연구에서는 제안 접근이 원래 모델과 동등하거나 더 높은 정확도를 달성하면서 요청된 데이터를 효과적으로 제거함을 보여줍니다."
    },
    {
        "title": "Negative Adversarial Example Generation Against Naver's Celebrity Recognition API",
        "authors": [
            "Keeyoung Kim",
            "Simon S. Woo"
        ],
        "venue_full": "ACM ASIACCS Workshop on Security Implications of Deepfakes and Cheapfakes",
        "venue": "WDC",
        "track": "Workshop Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2022,
        "links": {
            "conf": "https://doi.org/10.1145/3494109.3527193"
        },
        "img": "/img/Publications/wdc_kim.png",
        "abstract": "Deep Neural Networks (DNNs) are very effective in image classification, detection and recognition due to a large number of available data. However, they can be easily fooled by adversarial examples and produce incorrect results, which can cause problems for many applications. In this work, we focus on generating adversarial images and exploring and assessing possible negative impacts caused by these examples. As a case study, we create adversarial images against Naver’s celebrity recognition (NCR) API, as Naver is the leading machine learning APIs service provider in South Korea. We demonstrate that it is extremely easy to fool the online DNN-based APIs using adversarial examples and discuss possibe negative impacts resulting from these adversarial examples.",
        "abstract_ko": "딥 뉴럴 네트워크(DNN)는 사용 가능한 데이터가 많기 때문에 이미지 분류, 탐지 및 인식에서 매우 효과적입니다. 그러나 DNN은 적대적 예제(adversarial examples)에 의해 쉽게 속아 잘못된 결과를 낼 수 있으며, 이는 많은 응용 프로그램에 문제를 일으킬 수 있습니다. 본 연구에서는 적대적 이미지를 생성하고 이러한 예제로 인해 발생할 수 있는 부정적인 영향을 탐구하고 평가하는 데 중점을 둡니다. 사례 연구로, 본 연구에서는 한국에서 선도적인 머신러닝 API 서비스 제공자인 네이버의 유명인 인식(NCR) API를 대상으로 적대적 이미지를 생성합니다. 본 연구에서는 적대적 예제를 사용하여 온라인 DNN 기반 API를 속이는 것이 매우 쉽다는 것을 보여주고, 이러한 적대적 예제로 인한 잠재적인 부정적 영향을 논의합니다."
    },
    {
        "title": "A Face Pre-Processing Approach to Evade Deepfake Detector",
        "authors": [
            "Taejune Kim",
            "Jeongho Kim",
            "Jeonghyeon Kim",
            "Simon S. Woo"
        ],
        "venue_full": "ACM ASIACCS Workshop on Security Implications of Deepfakes and Cheapfakes",
        "venue": "WDC",
        "track": "Workshop Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2022,
        "links": {
            "conf": "https://doi.org/10.1145/3494109.3527190"
        },
        "img": "/img/Publications/wdc2_taejune.png",
        "abstract": "Recently, various image synthesis technologies have increased the prevalence of impersonation attacks, and with the development of such technologies, the amount of damage such as defamation has also increased. Deepfake, the representative of the impersonation technique, has already evolved to the point where people cannot distinguish, leading to an urgent need for detection methods. Currently, in order to detect deepfakes, many deepfake datasets are widely used in deep neural networks using supervision learning. However, although this method is robust to the images synthesized by deepfake generation methods already known, it remains undefined whether deepfakes created by unknown techniques can be detected. Accordingly, to detect more challenging deepfakes, we present a pre-processing technique that mitigates the artifacts of deepfakes and makes them appear more natural. The proposed method can be combined with the existing deepfake creation method to generate a more threatening deepfake image. Furthermore, through extensive experiments, we demonstrate that our method can significantly lower the performance of state-of-the-art detectors and expose the vulnerability of deployed detectors.",
        "abstract_ko": "최근 다양한 이미지 합성 기술이 등장하면서 사칭 공격의 빈도가 증가하고 있으며, 이러한 기술의 발전과 함께 명예훼손과 같은 피해도 증가하고 있습니다. 사칭 기술의 대표적인 예인 딥페이크는 이미 사람들로 하여금 구분할 수 없을 정도로 발전하여, 딥페이크를 탐지할 수 있는 방법이 시급히 필요합니다. 현재 딥페이크를 탐지하기 위해 많은 딥페이크 데이터셋이 감독 학습을 사용하는 딥 뉴럴 네트워크에서 널리 사용되고 있습니다. 그러나 이러한 방법은 이미 알려진 딥페이크 생성 방법으로 합성된 이미지에는 강건하지만, 알려지지 않은 기술로 생성된 딥페이크를 탐지할 수 있는지는 정의되어 있지 않습니다. 따라서 보다 도전적인 딥페이크를 탐지하기 위해, 본 연구에서는 딥페이크의 아티팩트를 완화하고 보다 자연스럽게 보이도록 만드는 전처리 기술을 제안합니다. 제안된 방법은 기존의 딥페이크 생성 방법과 결합하여 보다 위협적인 딥페이크 이미지를 생성할 수 있습니다. 더욱이, 광범위한 실험을 통해, 본 연구에서는 제안 방법이 최첨단 탐지기의 성능을 상당히 낮출 수 있고, 배치된 탐지기의 취약성을 드러낼 수 있음을 보여줍니다."
    },
    {
        "title": "Deepfake Detection for Fake Images with Facemasks",
        "authors": [
            "Sangjun Lee",
            "Donggeun Ko",
            "Jinyong Park",
            "Saebyeol Shin",
            "Donghee Hong",
            "Simon S. Woo"
        ],
        "venue_full": "ACM ASIACCS Workshop on Security Implications of Deepfakes and Cheapfakes",
        "venue": "WDC",
        "track": "Workshop Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2022,
        "links": {
            "conf": "https://doi.org/10.1145/3494109.3527189"
        },
        "img": null,
        "abstract": "Hyper-realistic face image generation and manipulation have givenrise to numerous unethical social issues, e.g., invasion of privacy,threat of security, and malicious political maneuvering, which re-sulted in the development of recent deepfake detection methodswith the rising demands of deepfake forensics. Proposed deepfakedetection methods to date have shown remarkable detection perfor-mance and robustness. However, none of the suggested deepfakedetection methods assessed the performance of deepfakes withthe facemask during the pandemic crisis after the outbreak of theCovid-19. In this paper, we thoroughly evaluate the performance ofstate-of-the-art deepfake detection models on the deepfakes withthe facemask. Also, we propose two approaches to enhance themasked deepfakes detection:face-patchandface-crop. The experi-mental evaluations on both methods are assessed through the base-line deepfake detection models on the various deepfake datasets.Our extensive experiments show that, among the two methods,face-cropperforms better than theface-patch, and could be a trainmethod for deepfake detection models to detect fake faces withfacemask in real world.",
        "abstract_ko": "하이퍼 리얼리스틱 얼굴 이미지 생성 및 조작은 프라이버시 침해, 보안 위협, 악의적인 정치적 조작 등 수많은 비윤리적 사회 문제를 야기했으며, 이는 최근 딥페이크 포렌식 수요 증가에 따라 딥페이크 탐지 방법 개발로 이어졌습니다. 현재까지 제안된 딥페이크 탐지 방법들은 뛰어난 탐지 성능과 강인성을 보여주었습니다. 그러나 제안된 딥페이크 탐지 방법 중 어느 것도 코로나19 발생 이후 팬데믹 위기 상황에서 마스크를 착용한 딥페이크의 성능을 평가하지 않았습니다. 본 논문에서는 마스크를 착용한 딥페이크에 대해 최첨단 딥페이크 탐지 모델들의 성능을 철저히 평가합니다. 또한, 마스크를 착용한 딥페이크 탐지를 향상시키기 위해 두 가지 접근 방식(face-patch 및 face-crop)을 제안합니다. 두 방법에 대한 실험적 평가는 다양한 딥페이크 데이터셋에서 기본 딥페이크 탐지 모델을 통해 수행되었습니다. 우리의 광범위한 실험은 두 방법 중에서 face-crop이 face-patch보다 성능이 더 우수하며, 실제 환경에서 마스크를 착용한 가짜 얼굴을 탐지하기 위한 딥페이크 탐지 모델의 학습 방법이 될 수 있음을 보여줍니다."
    },
    {
        "title": "Zoom-DF: A Dataset for Video Conferencing Deepfake",
        "authors": [
            "Geon-Woo Park",
            "Eun-Ju Park",
            "Simon S. Woo"
        ],
        "venue_full": "ACM ASIACCS Workshop on Security Implications of Deepfakes and Cheapfakes",
        "venue": "WDC",
        "track": "Workshop Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2022,
        "links": {
            "conf": "https://doi.org/10.1145/3494109.3527195"
        },
        "img": "/img/Publications/wdc22_deonwoo.png",
        "abstract": "With the growth of deep learning studies, the technologies of generating deepfake videos have been advanced. While the manipulated videos are so sophisticated that one cannot differentiate between real and fake, one can create such videos with little effort. These technologies are likely to be abused by people with malicious intent. To address the problem, the algorithms for detecting deepfakes have been researched abundantly. The performance of the detectors, however, depends on the amount and the domain of the training data. In this paper, we introduce a new deepfake dataset generated by an algorithm changing an original image to a sequence of fake images. We evaluate existing models detecting deepfakes on the new dataset and demonstrate that the accuracy of the models degrades. Their performance is recovered when trained with the new dataset.",
        "abstract_ko": "딥러닝 연구의 발전과 함께 딥페이크 영상 생성 기술도 향상되었습니다. 조작된 영상이 너무 정교해서 진짜와 가짜를 구분하기 어렵지만, 누구나 쉽게 이러한 영상을 만들 수 있습니다. 이러한 기술은 악의적인 의도를 가진 사람들에게 남용될 가능성이 있습니다. 문제를 해결하기 위해 딥페이크를 탐지하는 알고리즘에 대한 연구가 풍부하게 이루어지고 있습니다. 그러나 탐지기의 성능은 학습 데이터의 양과 도메인에 따라 달라집니다. 본 논문에서는 원본 이미지를 일련의 가짜 이미지로 변환하는 알고리즘으로 생성된 새로운 딥페이크 데이터셋을 소개합니다. 본 연구에서는 기존 딥페이크 탐지 모델들을 새로운 데이터셋에서 평가하고, 모델의 정확도가 저하됨을 보입니다. 새로운 데이터셋으로 학습할 경우 성능이 회복됨을 확인합니다."
    },
    {
        "title": "PasswordTensor: Analyzing and explaining password strength using tensor decomposition",
        "authors": [
            "Youjin Shin",
            "Simon S. Woo"
        ],
        "venue_full": "Computers & Security",
        "venue": null,
        "track": "SCIE Journal",
        "presentationType": null,
        "Factor": [
            "SCIE IF =",
            4.4
        ],
        "year": 2022,
        "links": {
            "conf": "https://doi.org/10.1016/j.cose.2022.102634"
        },
        "img": "/img/Publications/computer_security_2022_yj.png",
        "abstract": "A textual password is widely used for user authentication for a variety of applications. Passwords that are easy to remember are also easy to be guessed, while complex and long passwords that provide strong security are difficult to remember. Also, there has been limited quantitative research to understand the factors that make passwords strong. In this research, we aim to expand our understanding of passwords through the lenses of data-driven analysis by characterizing a large number of password datasets with four different hypotheses. In particular, we use the tensor decomposition method that is effective in analyzing unlabeled high dimensional data. We first obtain 362,805 passwords from four different leaked password datasets. Next, we generate syntactic and semantic features for each password, then classify it into three strength groups using a statistical guessing attack model. Finally, we construct a 3rd-order password tensor and decompose it using the PARAFAC2 algorithm to examine the main characteristics which make passwords strong.",
        "abstract_ko": "텍스트 기반 비밀번호는 다양한 애플리케이션에서 사용자 인증을 위해 널리 사용됩니다. 기억하기 쉬운 비밀번호는 추측하기 쉽고, 반대로 강력한 보안을 제공하는 복잡하고 긴 비밀번호는 기억하기 어렵습니다. 또한, 비밀번호를 강력하게 만드는 요인을 이해하기 위한 정량적 연구는 제한적이었습니다. 본 연구에서는 네 가지 다른 가설을 통해 대규모 비밀번호 데이터셋을 특성화하여 데이터 기반 분석의 관점에서 비밀번호에 대한 이해를 확장하는 것을 목표로 합니다. 특히, 본 연구에서는 라벨이 없는 고차원 데이터를 분석하는 데 효과적인 텐서 분해(tensor decomposition) 방법을 사용합니다. 먼저, 본 연구에서는 네 개의 유출된 비밀번호 데이터셋에서 362,805개의 비밀번호를 수집합니다. 다음으로, 각 비밀번호에 대해 구문적(syntactic) 및 의미적(semantic) 특징을 생성한 후, 통계적 추측 공격 모델(statistical guessing attack model)을 사용하여 세 가지 강도 그룹으로 분류합니다. 마지막으로, 본 연구에서는 3차 패스워드 텐서를 구성하고 PARAFAC2 알고리즘을 사용하여 분해하여 패스워드를 강하게 만드는 주요 특성을 조사합니다."
    },
    {
        "title": "A Survey of Deep Learning-Based Object Detection Methods and Datasets for Overhead Imagery",
        "authors": [
            "Junhyung Kang",
            "Shahroz Tariq",
            "Han Oh",
            "Simon S. Woo"
        ],
        "venue_full": "IEEE Access",
        "venue": null,
        "track": "SCIE Journal",
        "presentationType": null,
        "Factor": [
            "SCIE IF =",
            0
        ],
        "year": 2022,
        "links": {
            "conf": "https://doi.org/10.1109/access.2022.3149052"
        },
        "img": "/img/Publications/ieee_access_junhyung.png",
        "abstract": "Although extensive studies in deep learning-based object detection have achieved remarkable performance and success, they are still ineffective yielding a low detection performance, due to the underlying difficulties in overhead images. Thus, high-performing object detection in overhead images is an active research field to overcome such difficulties. This survey paper provides a comprehensive overview and comparative reviews on the most up-to-date deep learning-based object detection in overhead images. Especially, our work can shed light on capturing the most recent advancements of object detection methods in overhead images and the introduction of overhead datasets that have not been comprehensively surveyed before.",
        "abstract_ko": "비록 딥러닝 기반 객체 탐지에 대한 광범위한 연구가 뛰어난 성능과 성공을 거두었음에도 불구하고, 이는 여전히 고위도 이미지에서 발생하는 근본적인 어려움 때문에 낮은 탐지 성능을 보이며 효과적이지 않습니다. 따라서 고위도 이미지에서 높은 성능의 객체 탐지는 이러한 어려움을 극복하기 위한 활발한 연구 분야입니다. 본 설문 조사 논문은 고위도 이미지에서의 최신 딥러닝 기반 객체 탐지에 대한 포괄적인 개요와 비교 리뷰를 제공합니다. 특히, 본 연구는 고위도 이미지에서의 객체 탐지 방법의 최신 발전을 포착하고, 이전에는 포괄적으로 조사되지 않았던 고위도 데이터셋의 소개를 조명하는데 기여할 수 있습니다."
    },
    {
        "title": "Am I a Real or Fake Celebrity? Evaluating Face Recognition and Verification APIs under Deepfake Impersonation Attack",
        "authors": [
            "Shahroz Tariq",
            "Sowon Jeon",
            "Simon S. Woo"
        ],
        "venue_full": "ACM Web Conference",
        "venue": "WWW",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            4
        ],
        "year": 2022,
        "links": {
            "conf": "https://doi.org/10.1145/3485447.3512212"
        },
        "img": "/img/Publications/www22_shah.png",
        "abstract": "Recent advancements in web-based multimedia technologies, such as face recognition web services powered by deep learning, have been significant. However, such technologies face persistent threats, as virtually anyone with access to deepfakes can quickly launch impersonation attacks, which pose a serious threat to authentication services. Despite its gravity, deepfake abuse involving commercial web services have not been investigated. Thus, we examine the robustness of black-box commercial face recognition web APIs (Microsoft, Amazon, Naver, and Face++) and open-source tools (VGGFace and ArcFace) against Deepfake Impersonation (DI) attacks. We demonstrate the vulnerability of face recognition technologies to DI attacks, achieving respective success rates of 78.0% for targeted (TA) attacks; we also propose mitigation strategies, lowering respective attack success rates to as low as 1.26% for TA attacks with adversarial training.",
        "abstract_ko": "딥러닝 기반 얼굴 인식 웹 서비스를 포함한 웹 기반 멀티미디어 기술의 최근 발전은 상당하다. 그러나 이러한 기술은 여전히 지속적인 위협에 직면해 있는데, 거의 누구나 딥페이크에 접근할 수 있고, 이를 통해 빠르게 사칭 공격을 실행할 수 있어 인증 서비스에 심각한 위협이 된다. 그 심각성에도 불구하고, 상업용 웹 서비스를 대상으로 한 딥페이크 오용은 아직 조사되지 않았다. 따라서 본 연구에서는 블랙박스 상업용 얼굴 인식 웹 API(Microsoft, Amazon, Naver, Face++)와 오픈 소스 도구(VGGFace 및 ArcFace)가 딥페이크 사칭(DI) 공격에 대해 얼마나 견고한지를 검토한다. 본 연구에서는 얼굴 인식 기술이 DI 공격에 취약함을 시연하며, 표적(TA) 공격에서 각각 78.0%의 성공률을 달성합니다; 또한 본 연구에서는 공격 성공률을 적대적 학습을 통해 TA 공격에서 1.26%까지 낮추는 완화 전략도 제안합니다."
    },
    {
        "title": "BZNet: Unsupervised Multi-scale Branch Zooming Network for Detecting Low-quality Deepfake Videos",
        "authors": [
            "Sangyup Lee",
            "Jaeju An",
            "Simon S. Woo"
        ],
        "venue_full": "ACM Web Conference",
        "venue": "WWW",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            4
        ],
        "year": 2022,
        "links": {
            "conf": "https://doi.org/10.1145/3485447.3512245"
        },
        "img": "/img/Publications/www22_jaeju.png",
        "abstract": "Generating a deep learning-based fake video has become no longer rocket science. The advancement of automated Deepfake (DF) generation tools that mimic certain targets has rendered society vulnerable to fake news or misinformation propagation. In real-world scenarios, DF videos are compressed to low-quality (LQ) videos, taking up less storage space and facilitating dissemination through the web and social media. Such LQ DF videos are much more challenging to detect than high-quality (HQ) DF videos. To address this challenge, we rethink the design of standard deep learning-based DF detectors, specifically exploiting feature extraction to enhance the features of LQ images. We propose a novel LQ DF detection architecture, multi-scale Branch Zooming Network (BZNet), which adopts an unsupervised super-resolution (SR) technique and utilizes multi-scale images for training. We train our BZNet only using highly compressed LQ images and experiment under a realistic setting, where HQ training data are not readily accessible. Extensive experiments on the FaceForensics++ LQ and GAN-generated datasets demonstrate that our BZNet architecture improves the detection accuracy of existing CNN-based classifiers by 4.21\\% on average. Furthermore, we evaluate our method against a real-world Deepfake-in-the-Wild dataset collected from the internet, which contains 200 videos featuring 50 celebrities worldwide, outperforming the state-of-the-art methods by 4.13%.",
        "abstract_ko": "딥 러닝 기반의 가짜 영상 생성을 더 이상 어려운 과학으로 볼 수 없게 되었다. 특정 대상을 모방하는 자동화된 딥페이크(DF) 생성 도구의 발전은 사회를 가짜 뉴스나 잘못된 정보 전파에 취약하게 만들었다. 실제 시나리오에서는 DF 영상이 저품질(LQ) 영상으로 압축되어 저장 공간을 덜 차지하며 웹과 소셜 미디어를 통한 확산을 용이하게 한다. 이러한 LQ DF 영상은 고품질(HQ) DF 영상보다 탐지하기가 훨씬 더 어렵다. 이 문제를 해결하기 위해, 본 연구에서는 표준 딥 러닝 기반 DF 탐지기의 설계를 재고하여 LQ 이미지의 특징을 향상시키기 위해 특징 추출을 특별히 활용한다. 본 연구에서는 비지도 초해상도(SR) 기법을 채택하고 다중 스케일 이미지를 훈련에 활용하는 새로운 LQ DF 탐지 아키텍처인 다중 스케일 브랜치 줌 네트워크(BZNet)를 제안한다. 본 연구에서는 오직 고도로 압축된 저화질(LQ) 이미지 만을 사용하여 BZNet을 학습시키고, 고화질(HQ) 학습 데이터를 쉽게 접근할 수 없는 현실적인 환경에서 실험합니다. FaceForensics++ 저화질(LQ) 및 GAN 생성 데이터셋에 대한 광범위한 실험 결과, 우리 BZNet 아키텍처가 기존 CNN 기반 분류기의 검출 정확도를 평균 4.21% 향상시킴을 보여줍니다. 또한, 인터넷에서 수집된 실제 Deepfake-in-the-Wild 데이터셋을 대상으로 방법을 평가했으며, 이 데이터셋은 전 세계 50명의 유명인이 등장한 200개의 비디오를 포함하고 있으며, 최첨단 방법보다 4.13% 뛰어난 성능을 보였습니다."
    },
    {
        "title": "Residual Size is Not Enough for Anomaly Detection: Improving Detection Performance using Residual Similarity in Multivariate Time Series",
        "authors": [
            "Jeong-Han Yun",
            "Jonguk Kim",
            "Won-Seok Hwang",
            "Young Geun Kim",
            "Simon S. Woo",
            "Byung-Gil Min"
        ],
        "venue_full": "ACM SIGAPP Symposium on Applied Computing",
        "venue": "SAC",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2022,
        "links": {},
        "img": null,
        "abstract": "Unsupervised anomaly detection is commonly performed by identifying unusual data samples (or anomalies) from the residual size produced by machine learning algorithms based on normal data (e.g., the residuals of regression models or reconstruction errors of autoencoder models), assuming that anomalies cause large residuals. Unfortunately, anomalies do not always cause large residuals. Anomaly detection algorithms based on residual size can miss anomalies that cause only small or noisy residuals for each variable in a multivariate time-series. To overcome this issue, we propose \"neighbors to residuals\" (N2RE), a novel anomaly scoring function based on residual similarity using nearest neighbor distance (NND). Even if residuals of anomalies are small, they show patterns that are different from those of residuals of normal data. Using N2RE can improve anomaly detection performance and reduce the variation in anomaly detection performance due to threshold changes. Experiments with various models on three cyber-physical system datasets verify that N2RE can achieve 19% higher anomaly detection performance than previous approaches without changes to the models.",
        "abstract_ko": "비지도 이상 탐지는 일반적으로 정상 데이터를 기반으로 한 머신러닝 알고리즘에서 발생한 잔차 크기(예: 회귀 모델의 잔차 또는 오토인코더 모델의 재구성 오류)로부터 비정상적인 데이터 샘플(또는 이상치)을 식별함으로써 수행되며, 이상치는 큰 잔차를 유발한다고 가정합니다. 불행히도, 이상치가 항상 큰 잔차를 유발하는 것은 아닙니다. 잔차 크기에 기반한 이상 탐지 알고리즘은 다변량 시계열에서 각 변수에 대해 작은 또는 잡음이 섞인 잔차만을 생성하는 이상치를 놓칠 수 있습니다. 이 문제를 해결하기 위해, 본 연구에서는 최근접 이웃 거리(NND)를 사용한 잔차 유사성에 기반한 새로운 이상 점수 함수인 “잔차로의 이웃”(N2RE)을 제안합니다. 이상치의 잔차가 작더라도, 정상 데이터의 잔차와는 다른 패턴을 보입니다. N2RE를 사용하면 이상 탐지 성능을 향상시키고 임계값 변경으로 인한 이상 탐지 성능의 변동을 줄일 수 있습니다. 세 가지 사이버-물리 시스템 데이터셋에 대한 다양한 모델 실험을 통해 N2RE가 모델 변경 없이 이전 접근 방식보다 19% 높은 이상 탐지 성능을 달성할 수 있음을 확인했습니다."
    },
    {
        "title": "PTD: Privacy-Preserving Human Face Processing Framework using Tensor Decomposition",
        "authors": [
            "Jeongho Kim",
            "Shahroz Tariq",
            "Simon S. Woo"
        ],
        "venue_full": "ACM SIGAPP Symposium on Applied Computing",
        "venue": "SAC",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2022,
        "links": {},
        "img": "/img/Publications/tensor.png",
        "abstract": "Training data may include personal information such as human faces, which requires anonymization to provide user privacy. However, after anonymization, the performance of the original machine learning (ML) model degrades due to the reduced or missing information. In this work, we introduce a novel privacy-preserving tensor decomposition (PTD) method to anonymize human faces. Further, we evaluate\nreal vs. fake human face detection task as a practical use case scenario. Our approach achieves high performance as well as training data efficiency, where the essence of our approach is based on tensor decomposition to ensure face data privacy. In particular, we demonstrate that the core tensor of Tucker decomposition generated from the original face input can effectively represent the underlying characteristics of the original face data; that is, learning only from the core tensors is sufficient for differentiating real human face images from deepfakes. Also, we show that the original human face inputs are anonymized and cannot be recovered from the core tensors under different attacker models from the randomized HOOI algorithm. Through extensive experiments and analysis, we demonstrate that our method can result in high detection performance comparable to those of popular anonymization methods. Therefore, we show that our work strikes the balance between privacy and performance through the novel use of tensor decomposition.",
        "abstract_ko": "훈련 데이터에는 사용자 프라이버시를 제공하기 위해 익명화가 필요한 인간 얼굴과 같은 개인 정보가 포함될 수 있습니다. 그러나 익명화 후에는 정보가 감소하거나 누락되어 원래의 기계 학습(ML) 모델의 성능이 저하됩니다. 본 연구에서는 인간 얼굴을 익명화하기 위한 새로운 프라이버시 보호 텐서 분해(PTD) 방법을 소개합니다. 또한 실제 사용 사례 시나리오로서 진짜와 가짜 인간 얼굴 감지 작업을 평가합니다. 제안 접근은 높은 성능과 훈련 데이터 효율성을 모두 달성하며, 접근 방식의 핵심은 얼굴 데이터 프라이버시를 보장하기 위한 텐서 분해에 기반합니다. 특히, 본 연구에서는 원본 얼굴 입력으로부터 생성된 Tucker 분해의 핵심 텐서가 원본 얼굴 데이터의 근본적인 특성을 효과적으로 나타낼 수 있음을 보여준다. 즉, 핵심 텐서만을 학습하는 것으로 실제 인간 얼굴 이미지와 딥페이크를 구별하기에 충분하다. 또한, 본 연구에서는 원본 인간 얼굴 입력이 익명화되며 랜덤화된 HOOI 알고리즘의 다양한 공격자 모델 하에서도 핵심 텐서로부터 복원될 수 없음을 보여준다. 광범위한 실험과 분석을 통해, 제안 방법이 인기 있는 익명화 방법들과 비교할 수 있는 높은 탐지 성능을 제공할 수 있음을 입증한다. 따라서 본 연구에서는 텐서 분해의 새로운 활용을 통해 프라이버시와 성능 사이의 균형을 달성할 수 있음을 보여준다."
    },
    {
        "title": "ADD: Frequency Attention and Multi-View Based Knowledge Distillation to Detect Low-Quality Compressed Deepfake Images",
        "authors": [
            "Binh M. Le",
            "Simon S. Woo"
        ],
        "venue_full": "AAAI Conference on Artificial Intelligence",
        "venue": "AAAI",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            4
        ],
        "year": 2022,
        "links": {
            "conf": "https://doi.org/10.1609/aaai.v36i1.19886"
        },
        "img": "/img/Publications/aaai22_binh.png",
        "abstract": "Despite significant advancements of deep learning-based forgery detectors for distinguishing manipulated deepfake images, most detection approaches suffer from moderate to significant performance degradation with low-quality compressed deepfake images.\nBecause of the limited information in low-quality images, detecting low-quality deepfake remains an important challenge. In this work, we apply frequency domain learning and optimal transport theory in knowledge distillation (KD) to specifically improve the detection of low-quality compressed deepfake images. We explore transfer learning capability in KD to enable a student network to learn discriminative features from low-quality images effectively. In particular, we propose the Attention-based Deepfake detection Distiller (ADD), which consists of two novel distillations: 1) frequency attention distillation that effectively retrieves the removed high-frequency components in the student network, and 2) multi-view attention distillation that creates multiple attention vectors by slicing the teacher’s and student’s tensors under different views to transfer the teacher tensor’s distribution to the student more efficiently. Our extensive experimental results demonstrate that our approach outperforms state-of-the-art baselines in detecting low-quality compressed deepfake images.",
        "abstract_ko": "조작된 딥페이크 이미지를 구별하기 위한 딥러닝 기반 위조 탐지기의 상당한 발전에도 불구하고, 대부분의 탐지 접근법은 저품질 압축 딥페이크 이미지에서는 성능이 중간에서 큰 폭으로 저하되는 문제가 있습니다. 저품질 이미지에는 정보가 제한되어 있기 때문에, 저품질 딥페이크를 탐지하는 것은 여전히 중요한 도전 과제입니다. 본 연구에서는 저품질 압축 딥페이크 이미지 탐지를 구체적으로 향상시키기 위해 주파수 도메인 학습과 지식 증류(KD)에서 최적 수송 이론을 적용합니다. 또한, 저품질 이미지에서 학생 네트워크가 판별적 특징을 효율적으로 학습할 수 있도록 KD에서 전이 학습 능력을 탐구합니다. 특히, 본 연구에서는 Attention-based Deepfake detection Distiller(ADD)를 제안하는데, 이는 두 가지 새로운 증류를 포함합니다: 1) 학생 네트워크에서 제거된 고주파 성분을 효과적으로 복원하는 주파수 주의 증류(frequency attention distillation), 2) 교사와 학생의 텐서를 다양한 관점으로 나누어 여러 주의 벡터를 생성하여 교사 텐서의 분포를 학생에게 보다 효율적으로 전달하는 다중 관점 주의 증류(multi-view attention distillation)입니다. 우리의 광범위한 실험 결과는 제안 접근이 저품질 압축 딥페이크 이미지를 감지하는 데 있어 최신 최첨단 기준을 능가함을 보여줍니다."
    },
    {
        "title": "ORVAE: One-Class Residual Variational Autoencoder for Voice Activity Detection in Noisy Environment",
        "authors": [
            "Hasam Khalid",
            "Shahroz Tariq",
            "TaeSoo Kim",
            "Jong Hwan Ko",
            "Simon S. Woo"
        ],
        "venue_full": "Neural Processing Letters",
        "venue": null,
        "track": "SCIE Journal",
        "presentationType": null,
        "Factor": [
            "SCIE IF =",
            2.9
        ],
        "year": 2022,
        "links": {
            "conf": "https://doi.org/10.1007/s11063-021-10695-4"
        },
        "img": "/img/Publications/orvae_npl.png",
        "abstract": "Detecting human speech is foundational for a wide range of emerging intelligent applications. However, accurately detecting human speech is challenging, especially in the presence of unknown noise patterns. Generally, deep learning-based methods have shown to be more robust and accurate than statistical methods and other existing approaches. However, typically creating a noise-robust and more generalized deep learning-based Voice Activity Detection (VAD) system requires the collection of an enormous amount of annotated audio data. In this work, we develop a generalized model trained on limited types of human speeches with noisy backgrounds. Yet, it can detect human speech in the presence of various unseen noise types, which were not present in the training set. To achieve this, we propose a One-Class Residual connections-based Variational Autoencoder (ORVAE), which only requires a limited number of human speech data with noisy background for training, thereby eliminating the need for collecting data with diverse noise patterns. Evaluating ORVAE with three different datasets (synthesized TIMIT and NOI\nSEX-92, synthesized LibriSpeech and NOISEX-92, and a Publicly Recorded dataset), our method outperforms other one-class baseline methods, achieving 1-scores of over 90% for multiple Signal-to-Noise Ratio (SNR) levels.",
        "abstract_ko": "인간의 음성을 감지하는 것은 다양한 신흥 지능형 애플리케이션의 기초가 됩니다. 그러나 알려지지 않은 소음 패턴이 존재하는 상황에서 인간의 음성을 정확하게 감지하는 것은 어렵습니다. 일반적으로, 딥러닝 기반 방법은 통계적 방법이나 기존의 다른 접근 방식보다 더 견고하고 정확한 것으로 나타났습니다. 하지만 일반적으로 노이즈에 강하고 더 일반화된 딥러닝 기반 음성 활동 감지(VAD) 시스템을 만들기 위해서는 방대한 양의 주석이 달린 오디오 데이터를 수집해야 합니다. 본 연구에서는 제한된 유형의 인간 음성과 소음이 있는 배경에서 훈련된 일반화된 모델을 개발하였습니다. 그럼에도 불구하고, 이 모델은 훈련 세트에 존재하지 않았던 다양한 미지의 소음 유형이 있는 상황에서도 인간 음성을 감지할 수 있습니다. 이를 달성하기 위해, 본 연구에서는 제한된 수의 잡음이 포함된 인간 음성 데이터만으로 학습이 가능한 One-Class Residual connections 기반 변분 오토인코더(ORVAE)를 제안하며, 이를 통해 다양한 잡음 패턴의 데이터를 수집할 필요성을 없앴습니다. 세 가지 서로 다른 데이터셋(합성 TIMIT 및 NOISEX-92, 합성 LibriSpeech 및 NOISEX-92, 공개 녹음 데이터셋)을 사용하여 ORVAE를 평가한 결과, 제안 방법은 다른 원클래스 기반 방법들보다 우수한 성능을 보였으며, 다양한 신호 대 잡음비(SNR) 수준에서 1-스코어 90%를 초과하는 성과를 달성했습니다."
    },
    {
        "title": "Evaluation of an Audio-Video Multimodal Deepfake Dataset using Unimodal and Multimodal Detectors",
        "authors": [
            "Hasam Khalid",
            "Minha Kim",
            "Shahroz Tariq",
            "Simon S. Woo"
        ],
        "venue_full": "ACM MM Workshop on Synthetic Multimedia - Audiovisual Deepfake Generation and Detection",
        "venue": "ADGD",
        "track": "Workshop Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2021,
        "links": {
            "conf": "https://doi.org/10.1145/3476099.3484315"
        },
        "img": "/img/Publications/ADGD21_hasam.png",
        "abstract": "Significant advancements made in the generation of deepfakes have caused security and privacy issues. Attackers can easily impersonate a person's identity in an image by replacing his face with the target person's face. Moreover, a new domain of cloning human voices using deep-learning technologies is also emerging. Now, an attacker can generate realistic cloned voices of humans using only a few seconds of audio of the target person. With the emerging threat of potential harm deepfakes can cause, researchers have proposed deepfake detection methods. However, they only focus on detecting a single modality, i.e., either video or audio. On the other hand, to develop a good deepfake detector that can cope with the recent advancements in deepfake generation, we need to have a detector that can detect deepfakes of multiple modalities, i.e., videos and audios. To build such a detector, we need a dataset that contains video and respective audio deepfakes. We were able to find a most recent deepfake dataset, Audio-Video Multimodal Deepfake Detection Dataset (FakeAVCeleb), that contains not only deepfake videos but synthesized fake audios as well. We used this multimodal deepfake dataset and performed detailed baseline experiments using state-of-the-art unimodal, ensemble-based, and multimodal detection methods to evaluate it. We conclude through detailed experimentation that unimodals, addressing only a single modality, video or audio, do not perform well compared to ensemble-based methods. Whereas purely multimodal-based baselines provide the worst performance.",
        "abstract_ko": "딥페이크 생성을 위한 상당한 발전은 보안 및 개인정보 문제를 초래했습니다. 공격자는 사람의 얼굴을 목표 인물의 얼굴로 바꿈으로써 이미지에서 쉽게 다른 사람의 신원을 사칭할 수 있습니다. 더 나아가, 딥러닝 기술을 이용한 인간 음성 복제라는 새로운 분야도 등장하고 있습니다. 이제 공격자는 대상 인물의 몇 초짜리 오디오만을 사용하여 인간의 현실적인 복제 음성을 생성할 수 있습니다. 딥페이크가 초래할 수 있는 잠재적 위험이 증가함에 따라, 연구자들은 딥페이크 탐지 방법을 제안했습니다. 그러나 이 방법들은 단일 유형, 즉 비디오나 오디오 중 하나를 감지하는 데만 초점을 맞추고 있습니다. 반면, 최근 딥페이크 생성 기술의 발전에 대응할 수 있는 우수한 딥페이크 감지기를 개발하려면, 비디오와 오디오 등 여러 유형의 딥페이크를 감지할 수 있는 탐지기가 필요합니다. 이러한 탐지기를 구축하기 위해서는 비디오와 해당 오디오 딥페이크를 포함하는 데이터셋이 필요합니다. 본 연구에서는 가장 최근의 딥페이크 데이터셋인 Audio-Video Multimodal Deepfake Detection Dataset(FakeAVCeleb)을 찾을 수 있었는데, 이 데이터셋은 딥페이크 비디오뿐만 아니라 합성된 가짜 오디오도 포함하고 있습니다. 본 연구에서는 이 멀티모달 딥페이크 데이터셋을 사용하여 최첨단 단일 모달, 앙상블 기반, 그리고 멀티모달 탐지 방법을 사용하여 상세한 기준 실험을 수행했습니다. 상세한 실험을 통해, 단일 모달만을 다루는 비디오 또는 오디오만으로 이루어진 단일 모달 탐지 방식은 앙상블 기반 방법에 비해 성능이 좋지 않음을 결론지었습니다. 반면, 순수 멀티모달 기반 기준 모델은 가장 낮은 성능을 제공합니다."
    },
    {
        "title": "FakeAVCeleb: A Novel Audio-Video Multimodal Deepfake Dataset",
        "authors": [
            "Hasam Khalid",
            "Shahroz Tariq",
            "Minha Kim",
            "Simon S. Woo"
        ],
        "venue_full": "Conference on Neural Information Processing Systems",
        "venue": "NeurIPS",
        "track": "Dataset Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            4
        ],
        "year": 2021,
        "links": {
            "conf": "https://doi.org/10.48550/arxiv.2108.05080"
        },
        "img": "/img/Publications/fakeceleb_nips2021.png",
        "abstract": "While the significant advancements have made in the generation of deepfakes using deep learning technologies, its misuse is a well-known issue now. Deepfakes can cause severe security and privacy issues as they can be used to impersonate a person's identity in a video by replacing his/her face with another person's face. Recently, a new problem of generating synthesized human voice of a person is emerging, where AI-based deep learning models can synthesize any person's voice requiring just a few seconds of audio. With the emerging threat of impersonation attacks using deepfake audios and videos, a new generation of deepfake detectors is needed to focus on both video and audio collectively. To develop a competent deepfake detector, a large amount of high-quality data is typically required to capture real-world (or practical) scenarios. Existing deepfake datasets either contain deepfake videos or audios, which are racially biased as well. As a result, it is critical to develop a high-quality video and audio deepfake dataset that can be used to detect both audio and video deepfakes simultaneously. To fill this gap, we propose a novel Audio-Video Deepfake dataset, FakeAVCeleb, which contains not only deepfake videos but also respective synthesized lip-synced fake audios. We generate this dataset using the most popular deepfake generation methods. We selected real YouTube videos of celebrities with four ethnic backgrounds to develop a more realistic multimodal dataset that addresses racial bias, and further help develop multimodal deepfake detectors. We performed several experiments using state-of-the-art detection methods to evaluate our deepfake dataset and demonstrate the challenges and usefulness of our multimodal Audio-Video deepfake dataset.",
        "abstract_ko": "딥러닝 기술을 이용한 딥페이크 생성에서 상당한 발전이 이루어졌지만, 그 오용은 현재 잘 알려진 문제입니다. 딥페이크는 한 사람의 얼굴을 다른 사람의 얼굴로 교체하여 비디오에서 사람의 신원을 사칭할 수 있기 때문에 심각한 보안 및 개인정보 문제를 일으킬 수 있습니다. 최근에는 몇 초짜리 오디오만으로도 AI 기반 딥러닝 모델이 특정인의 음성을 합성할 수 있는 새로운 문제, 즉 사람의 합성 음성 생성 문제가 등장하고 있습니다. 딥페이크 오디오와 비디오를 이용한 사칭 공격이라는 새로운 위협이 대두됨에 따라, 비디오와 오디오를 함께 고려할 수 있는 차세대 딥페이크 탐지기가 필요합니다. 유능한 딥페이크 탐지기를 개발하려면 일반적으로 실제 환경(혹은 실용적) 시나리오를 포착할 수 있는 대량의 고품질 데이터가 필요합니다. 기존의 딥페이크 데이터셋은 딥페이크 영상 또는 오디오를 포함하고 있으며, 또한 인종적 편향을 가지고 있습니다. 결과적으로, 오디오와 비디오 딥페이크를 동시에 탐지할 수 있는 고품질의 영상 및 오디오 딥페이크 데이터셋을 개발하는 것이 중요합니다. 이러한 격차를 메우기 위해 본 연구에서는 딥페이크 영상뿐만 아니라 해당 합성된 립싱크 가짜 오디오도 포함하는 새로운 오디오-비디오 딥페이크 데이터셋인 FakeAVCeleb을 제안합니다. 본 연구에서는 가장 인기 있는 딥페이크 생성 방법을 사용하여 이 데이터셋을 생성했습니다. 인종적 편향을 해결하고 보다 현실적인 멀티모달 데이터셋을 개발하며, 멀티모달 딥페이크 탐지기를 개발하는 데 도움이 되도록 네 가지 인종적 배경을 가진 유명인들의 실제 유튜브 영상을 선택했습니다. 본 연구에서는 최신 탐지 방법을 사용하여 여러 실험을 수행하여 우리의 딥페이크 데이터세트를 평가하고, 우리의 멀티모달 오디오-비디오 딥페이크 데이터세트의 도전 과제와 유용성을 입증했습니다."
    },
    {
        "title": "VFP290K: A Large-Scale Benchmark Dataset for Vision-based Fallen Person Detection",
        "authors": [
            "Jaeju An",
            "Jeong‐Ho Kim",
            "Hanbeen Lee",
            "Jinbeom Kim",
            "Junhyung Kang",
            "Minha Kim",
            "Saebyeol Shin",
            "Dong-Hee Hong",
            "Simon S. Woo"
        ],
        "venue_full": "Conference on Neural Information Processing Systems",
        "venue": "NeurIPS",
        "track": "Dataset Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            4
        ],
        "year": 2021,
        "links": {},
        "img": "/img/Publications/vfp290_nips.png",
        "abstract": "Detection of fallen persons due to, for example, health problems, violence, or accidents, is a critical challenge. Accordingly, detection of these anomalous events is of paramount importance for a number of applications, including but not limited to CCTV surveillance, security, and health care. Given that many detection systems rely on a comprehensive dataset comprising fallen person images collected under diverse environments and in various situations is crucial. However, existing datasets are limited to only specific environmental conditions and lack diversity. To address the above challenges and help researchers develop more robust detection systems, we create a novel, large-scale dataset for the detection of fallen persons composed of fallen person images collected in various real-world scenarios, with the support of the South Korean government. Our Vision-based Fallen Person (VFP290K) dataset consists of 294,714 frames of fallen persons extracted from 178 videos, including 131 scenes in 49 locations. We empirically demonstrate the effectiveness of the features through extensive experiments analyzing the performance shift based on object detection models. In addition, we evaluate our VFP290K dataset with properly divided versions of our dataset by measuring the performance of fallen person detecting systems. We ranked first in the first round of the anomalous behavior recognition track of AI Grand Challenge 2020, South Korea, using our VFP290K dataset, which can be found here. Our achievement implies the usefulness of our dataset for research on fallen person detection, which can further extend to other applications, such as intelligent CCTV or monitoring systems. The data and more up-to-date information have been provided at our VFP290K site.",
        "abstract_ko": "건강 문제, 폭력 또는 사고 등으로 인해 쓰러진 사람을 감지하는 것은 중요한 과제입니다. 따라서 이러한 이상 사건을 감지하는 것은 CCTV 감시, 보안 및 건강 관리를 포함하되 이에 국한되지 않는 여러 응용 분야에서 매우 중요합니다. 많은 감지 시스템이 다양한 환경과 다양한 상황에서 수집된 쓰러진 사람 이미지로 구성된 포괄적인 데이터셋에 의존한다는 점을 고려할 때, 이러한 데이터셋의 존재가 매우 중요합니다. 그러나 기존 데이터셋은 특정 환경 조건에만 한정되어 있고 다양성이 부족합니다. 위의 과제를 해결하고 연구자들이 보다 견고한 감지 시스템을 개발할 수 있도록 돕기 위해, 본 연구에서는 한국 정부의 지원을 받아 다양한 실제 시나리오에서 수집된 쓰러진 사람 이미지를 구성한 새로운 대규모 데이터셋을 제작했습니다. 우리의 비전 기반 낙상자(VFP290K) 데이터셋은 178개의 비디오에서 추출한 294,714개의 낙상자 프레임으로 구성되며, 49개의 장소에 걸친 131개의 장면을 포함합니다. 본 연구에서는 객체 탐지 모델을 기반으로 성능 변화를 분석하는 광범위한 실험을 통해 특징들의 효용성을 경험적으로 입증합니다. 또한, 낙상자 감지 시스템의 성능을 측정하여 데이터셋을 적절히 분할한 버전으로 VFP290K를 평가합니다. 본 연구에서는 VFP290K 데이터셋을 사용하여 대한민국 AI 그랜드 챌린지 2020 이상 행동 인식 트랙 1라운드에서 1위를 차지했습니다. 우리의 성과는 낙상자 감지 연구에 있어 우리 데이터셋의 유용성을 시사하며, 이는 지능형 CCTV나 감시 시스템과 같은 다른 응용으로 확장될 수 있습니다. 데이터와 더 최신 정보가 저희 VFP290K 사이트에 제공되었습니다."
    },
    {
        "title": "IVDR: Imitation learning with Variational inference and Distributional Reinforcement learning to find Optimal Driving Strategy",
        "authors": [
            "Kihyung Joo",
            "Simon S. Woo"
        ],
        "venue_full": "IEEE International Conference on Machine Learning and Applications",
        "venue": "ICMLA",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2021,
        "links": {
            "conf": "https://doi.org/10.1109/icmla52953.2021.00047"
        },
        "img": "/img/Publications/ivdr.png",
        "abstract": "Current state-of-the-art autonomous driving technology significantly advanced, leveraging reinforcement learning (RL) algorithms, because it is not easy to apply a rule-based driving method that reflects all the various traffic conditions. Indeed, reinforcement learning can produce the possible optimal driving strategy of urban, rural, and motorway roads in various environmental conditions such as speed limits and school zones. However, it is challenging to adjust the parameters of the reward mechanism in RL, because the driving style of each user is very different. And it takes a massive amount of time and resources to conduct RL by reflecting all complex traffic conditions. However, if RL imitates the driving behavior of an expert, RL algorithm can proceed more quickly. Therefore, we propose a novel imitation learning framework, which combines an expert's driving behavior with a continuous behavior of an agent. Further, a deep reinforcement learning approach is used to mimic the expert's driving behavior. Therefore, we propose imitation learning with variational inference and distributional reinforcement learning (IVDR) algorithm. Our results show that IVDR achieves 80% better learning speed than the learning speed of other approaches and outperforms 12% higher in average reward. Our work shows great promise of using RL for autonomous driving and real vehicle driving simulation.",
        "abstract_ko": "최신 최첨단 자율 주행 기술은 강화 학습(RL) 알고리즘을 활용하면서 크게 발전했습니다. 이는 모든 다양한 교통 상황을 반영한 규칙 기반 주행 방법을 적용하는 것이 쉽지 않기 때문입니다. 실제로 강화 학습은 속도 제한 및 학교 구역과 같은 다양한 환경 조건에서 도시, 교외 및 고속도로 도로의 가능한 최적 주행 전략을 생성할 수 있습니다. 그러나 각 사용자의 주행 스타일이 매우 다르기 때문에 RL에서 보상 메커니즘의 매개변수를 조정하는 것은 어려운 문제입니다. 또한 모든 복잡한 교통 상황을 반영하여 RL을 수행하려면 엄청난 시간과 자원이 소요됩니다. 그러나 RL이 전문가의 주행 행동을 모방한다면, RL 알고리즘은 더 빠르게 진행될 수 있습니다. 따라서 본 연구에서는 전문가의 운전 행동과 에이전트의 연속적인 행동을 결합한 새로운 모방 학습 프레임워크를 제안합니다. 또한, 전문가의 운전 행동을 모방하기 위해 딥 강화 학습 접근법이 사용됩니다. 따라서 본 연구에서는 변분 추론과 분포 기반 강화 학습(IVDR) 알고리즘을 활용한 모방 학습을 제안합니다. 본 연구 결과는 IVDR이 다른 접근법의 학습 속도보다 80% 더 빠른 학습 속도를 달성하고 평균 보상에서 12% 더 높은 성과를 나타냄을 보여줍니다. 우리의 연구는 자율주행과 실제 차량 운전 시뮬레이션에서 RL을 활용할 가능성을 크게 보여줍니다."
    },
    {
        "title": "Efficient Multi-Scale Feature Generation Adaptive Network",
        "authors": [
            "Gwanghan Lee",
            "Minha Kim",
            "Minha Kim",
            "Simon S. Woo"
        ],
        "venue_full": "ACM International Conference on Information and Knowledge Management",
        "venue": "CIKM",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            3
        ],
        "year": 2021,
        "links": {
            "conf": "https://doi.org/10.1145/3459637.3482337"
        },
        "img": "/img/Publications/cikm22_gh.png",
        "abstract": "Recently, an early exit network, which dynamically adjusts the model complexity during inference time, has achieved remarkable performance. However, they were unsuccessful at resolving the performance drop of early classifiers that make predictions with insufficient high-level feature information. Consequently, the performance degradation of early classifiers had a devastating effect on the entire network performance sharing the backbone. In this paper, we propose an Efficient Multi-Scale Feature Generation Adaptive Network (EMGNet), which not only reduced the redundancy of the architecture but also generates multi-scale features to improve the performance of the early exit network.",
        "abstract_ko": "최근, 추론 시 모델 복잡도를 동적으로 조정하는 조기 종료 네트워크가 뛰어난 성능을 달성했다. 하지만, 이들은 충분한 고수준 특징 정보를 갖지 못한 상태에서 예측을 수행하는 초기 분류기의 성능 저하 문제를 해결하는 데에는 실패했다. 결과적으로, 초기 분류기의 성능 저하는 백본을 공유하는 전체 네트워크 성능에 치명적인 영향을 미쳤다. 본 논문에서는, 아키텍처의 중복성을 줄일 뿐만 아니라 조기 종료 네트워크의 성능을 향상시키기 위해 다중 스케일 특징을 생성하는 효율적인 다중 스케일 특징 생성 적응 네트워크(Efficient Multi-Scale Feature Generation Adaptive Network, EMGNet)을 제안한다."
    },
    {
        "title": "Crew Resource Management in Industry 4.0: Focusing on Human-Autonomy Teaming",
        "authors": [
            "Sunny Yun",
            "Simon Woo"
        ],
        "venue_full": "Korean Journal of Aerospace and Environmental Medicine",
        "venue": null,
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2021,
        "links": {
            "conf": "https://doi.org/10.46246/kjasem.210013"
        },
        "img": null,
        "abstract": "In the era of the 4th industrial revolution, the aviation industry is also growing remarkably with the development of artificial intelligence and networks, so it is necessary to study a new concept of CRM, which is required in the process of operating state-of-the-art equipment. The automation system, which has been treated only as a tool, is changing its role as a decision-making agent with the development of AI, and it is necessary to set clear standards for the role and responsibility in the safety-critical field. We present a new perspective on the automation system in the CRM program through the understanding of the autonomous system. In the future, autonomous system will develop as an agent for human pilots to cooperate, and accordingly, changes in role division and reorganization of regulations are required.",
        "abstract_ko": "4차 산업혁명 시대에 들어서면서 항공 산업 또한 인공지능과 네트워크의 발전과 함께 눈에 띄게 성장하고 있어, 첨단 장비를 운영하는 과정에서 요구되는 새로운 CRM 개념에 대한 연구가 필요하다. 도구로만 취급되던 자동화 시스템은 AI의 발전으로 의사결정 주체로서 역할이 변화하고 있으며, 안전이 중요한 분야에서 역할과 책임에 대한 명확한 기준을 설정할 필요가 있다. 본 연구에서는 자율 시스템에 대한 이해를 통해 CRM 프로그램에서 자동화 시스템에 대한 새로운 관점을 제시한다. 앞으로 자율 시스템은 인간 조종사와 협력하는 주체로서 발전할 것이며, 이에 따라 역할 분담의 변화와 규정의 재정비가 요구된다."
    },
    {
        "title": "DLPNet: Dynamic Loss Parameter Network using Reinforcement Learning for Aerial Imagery Detection",
        "authors": [
            "Junhyung Kang",
            "Simon S Woo"
        ],
        "venue_full": "International Conference on Artificial Intelligence and Pattern Recognition",
        "venue": "AIPR",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2021,
        "links": {
            "conf": "https://doi.org/10.1145/3488933.3489031"
        },
        "img": "/img/Publications/dlpnet_icpr21.png",
        "abstract": "We propose DLPNet, a novel RL module to enable robust and stable training while achieving high performance in practical small mini-batch size conditions. DLPNet observes input image patches and acts to select the optimal parameters of the dynamic focal loss function for the baseline detector with every mini-batch training iteration during the training phase.",
        "abstract_ko": "본 연구에서는 실용적인 작은 미니 배치 크기 조건에서 높은 성능을 달성하면서 견고하고 안정적인 학습을 가능하게 하는 새로운 RL 모듈인 DLPNet을 제안합니다. DLPNet은 학습 단계 동안 매 미니 배치 학습 반복마다 입력 이미지 패치를 관찰하고, 기본 탐지기의 동적 포컬 손실 함수의 최적 파라미터를 선택하는 행동을 합니다."
    },
    {
        "title": "CoReD: Generalizing Fake Media Detection with Continual Representation using Distillation",
        "authors": [
            "Minha Kim",
            "Shahroz Tariq",
            "Simon S. Woo"
        ],
        "venue_full": "ACM International Conference on Multimedia",
        "venue": "MM",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            4
        ],
        "year": 2021,
        "links": {
            "conf": "https://doi.org/10.1145/3474085.3475535"
        },
        "img": "/img/Publications/acmm21_minha.png",
        "abstract": "In this work, we apply continuous learning to neural networks' learning dynamics, emphasizing its potential to increase data efficiency significantly. We propose Continual Representation using Distillation (CoReD) method that employs the concept of Continual Learning (CoL), Representation Learning (ReL), and Knowledge Distillation (KD). We design CoReD to perform sequential domain adaptation tasks on new deepfake and GAN-generated synthetic face datasets, while effectively minimizing the catastrophic forgetting in a teacher-student model setting. Our extensive experimental results demonstrate that our method is efficient at domain adaptation to detect low-quality deepfakes videos and GAN-generated images from several datasets, outperforming the-state-of-art baseline methods.",
        "abstract_ko": "이 연구에서 본 연구에서는 신경망 학습 동역학에 지속적 학습을 적용하며, 데이터 효율을 크게 높일 수 있는 잠재력에 중점을 둡니다. 본 연구에서는 지속적 학습(Continual Learning, CoL), 표현 학습(Representation Learning, ReL), 지식 증류(Knowledge Distillation, KD)의 개념을 활용한 지속적 표현 증류(Continual Representation using Distillation, CoReD) 방법을 제안합니다. CoReD는 교사-학생 모델 설정에서 치명적인 망각을 효과적으로 최소화하면서, 새로운 딥페이크 및 GAN 생성 합성 얼굴 데이터셋에서 연속적인 도메인 적응 작업을 수행하도록 설계되었습니다. 광범위한 실험 결과, 제안 방법은 여러 데이터셋에서 저품질 딥페이크 비디오와 GAN 생성 이미지를 탐지하기 위한 도메인 적응에 효율적이며, 최신 기준 방법들보다 뛰어난 성능을 보임을 보여줍니다."
    },
    {
        "title": "SmartConDetect: Highly Accurate Smart Contract CodeVulnerability Detection Mechanism using BERT",
        "authors": [
            "Sowon Jeon",
            "Gilhee Lee",
            "Hyoungshick Kim",
            "Simon S. Woo"
        ],
        "venue_full": "ACM KDD workshop on programming language processing",
        "venue": "PLP",
        "track": "Workshop Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2021,
        "links": {},
        "img": "/img/Publications/smartcondetect.png",
        "abstract": "In this paper, we propose SmartConDetect to detect security vulnerabilities in smart contracts written in Solidity, which the most popular programming language for writing smart contracts on the Ethereum platform. SmartConDetect is designed as a static analysis tool to extract code fragments from smart contracts in Solidity and analyze code patterns using a pre-trained BERT model and a bidirectional LSTM model.",
        "abstract_ko": "본 논문에서는 이더리움 플랫폼에서 스마트 계약을 작성할 때 가장 널리 사용되는 프로그래밍 언어인 Solidity로 작성된 스마트 계약의 보안 취약점을 탐지하기 위해 SmartConDetect를 제안합니다. SmartConDetect는 Solidity로 작성된 스마트 계약에서 코드 조각을 추출하고, 사전 학습된 BERT 모델 및 양방향 LSTM 모델을 사용하여 코드 패턴을 분석하도록 설계된 정적 분석 도구로 개발되었습니다."
    },
    {
        "title": "Exploring the Asynchronous of the Frequency Spectra of GAN-generated Facial Images",
        "authors": [
            "Binh M. Le",
            "Simon S. Woo"
        ],
        "venue_full": "IJCAI Workshop on Safety and Security of Deep Learning",
        "venue": null,
        "track": "Workshop Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2021,
        "links": {
            "conf": "https://doi.org/10.48550/arxiv.2112.08050"
        },
        "img": "/img/Publications/ijcai2021_overall_diag.png",
        "abstract": "The rapid progression of Generative Adversarial Networks (GANs) has raised a concern of their misuse for malicious purposes, especially in creating fake face images. Although many proposed methods succeed in detecting GAN-based synthetic images, they are still limited by the need for large quantities of the training fake image dataset and challenges for the detector's generalizability to unknown facial images. In this paper, we propose a new approach that explores the asynchronous frequency spectra of color channels, which is simple but effective for training both unsupervised and supervised learning models to distinguish GAN-based synthetic images. We further investigate the transferability of a training model that learns from our suggested features in one source domain and validates on another target domains with prior knowledge of the features' distribution. Our experimental results show that the discrepancy of spectra in the frequency domain is a practical artifact to effectively detect various types of GAN-based generated images.",
        "abstract_ko": "생성적 적대 신경망(GAN)의 급속한 발전은 특히 가짜 얼굴 이미지를 만드는 데 있어 악의적 목적으로 오용될 수 있다는 우려를 불러일으켰다. 많은 제안된 방법이 GAN 기반 합성 이미지를 탐지하는 데 성공했지만, 여전히 대규모 훈련 가짜 이미지 데이터셋이 필요하고 알려지지 않은 얼굴 이미지에 대한 탐지기의 일반화 가능성에 대한 어려움이라는 한계가 있다. 본 논문에서는 색상 채널의 비동기 주파수 스펙트럼을 탐구하는 새로운 접근법을 제안하며, 이는 간단하면서도 GAN 기반 합성 이미지를 구별하기 위해 감독학습 및 비감독학습 모델을 모두 훈련시키는 데 효과적이다. 또한 제안된 특징에서 학습한 훈련 모델의 전이 가능성을 조사하고, 한 소스 도메인에서 학습한 모델을 또 다른 타겟 도메인에서 특징 분포에 대한 사전 지식을 활용하여 검증한다. 우리의 실험 결과는 주파수 영역에서 스펙트럼의 불일치가 다양한 유형의 GAN 기반 생성 이미지를 효과적으로 감지하는 실용적인 인공물임을 보여준다."
    },
    {
        "title": "FReTAL: Generalizing Deepfake Detection using Knowledge Distillation and Representation Learning",
        "authors": [
            "Minha Kim",
            "Shahroz Tariq",
            "Simon S. Woo"
        ],
        "venue_full": "IEEE/CVF CVPR Workshop on Media Forensics",
        "venue": "CVPRW",
        "track": "Workshop Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2021,
        "links": {
            "conf": "https://doi.org/10.1109/cvprw53098.2021.00111"
        },
        "img": "/img/Publications/fretalgd.png",
        "abstract": "As GAN-based video and image manipulation technologies become more sophisticated and easily accessible, there is an urgent need for effective deepfake detection technologies. Moreover, various deepfake generation techniques have emerged over the past few years.",
        "abstract_ko": "GAN 기반의 비디오 및 이미지 조작 기술이 더욱 정교해지고 쉽게 접근할 수 있게 됨에 따라, 효과적인 딥페이크 탐지 기술에 대한 긴급한 필요성이 존재합니다. 더욱이, 지난 몇 년 동안 다양한 딥페이크 생성 기술이 등장했습니다."
    },
    {
        "title": "Neural network laundering: Removing black-box backdoor watermarks from deep neural networks",
        "authors": [
            "William Aiken",
            "Hyoungshick Kim",
            "Simon Woo",
            "Jungwoo Ryoo"
        ],
        "venue_full": "Computers & Security",
        "venue": null,
        "track": "SCIE Journal",
        "presentationType": null,
        "Factor": [
            "SCIE IF =",
            3.58
        ],
        "year": 2021,
        "links": {
            "conf": "https://doi.org/10.1016/j.cose.2021.102277"
        },
        "img": "/img/Publications/nb.jpg",
        "abstract": "Creating a state-of-the-art deep-learning system requires vast amounts of data, expertise, and hardware, yet research into embedding copyright protection for neural networks has been limited. One of the main methods for achieving such protection involves relying on the susceptibility of neural networks to backdoor attacks, but the robustness of these tactics has been primarily evaluated against pruning, fine-tuning, and model inversion attacks.",
        "abstract_ko": "최첨단 딥러닝 시스템을 만들기 위해서는 방대한 양의 데이터, 전문 지식, 하드웨어가 필요하지만, 신경망에 대한 저작권 보호를 내장하는 연구는 제한적이었습니다. 이러한 보호를 달성하는 주요 방법 중 하나는 신경망이 백도어 공격에 취약하다는 점에 의존하는 것이지만, 이러한 전술의 강인성은 주로 가지치기, 미세 조정, 모델 역전 공격에 대해 평가되었습니다."
    },
    {
        "title": "Will EU’s GDPR Act as an Effective Enforcer to Gain Consent?",
        "authors": [
            "Junhyoung Oh",
            "Jinhyoung Hong",
            "Changsoo Lee",
            "Jemin Justin Lee",
            "Simon S. Woo",
            "Kyungho Lee"
        ],
        "venue_full": "IEEE Access",
        "venue": null,
        "track": "SCIE Journal",
        "presentationType": null,
        "Factor": [
            "SCIE IF =",
            3.67
        ],
        "year": 2021,
        "links": {
            "conf": "https://doi.org/10.1109/access.2021.3083897"
        },
        "img": "gdpr.PNG",
        "abstract": "In this study, we analyze GDPR provisions and recitals as well as relevant EU guidelines to propose quantifiable consent conditions to check whether website providers are compliant with the GDPR. We then evaluate the extent to which various popular web service providers meet these conditions.",
        "abstract_ko": "본 연구에서는 GDPR 조항과 전제조항뿐만 아니라 관련 EU 지침을 분석하여 웹사이트 제공자가 GDPR을 준수하는지 확인할 수 있는 정량화 가능한 동의 조건을 제안합니다. 그 후, 다양한 인기 있는 웹 서비스 제공자가 이러한 조건을 얼마나 충족하는지 평가합니다."
    },
    {
        "title": "Am I a Real or Fake Celebrity? Measuring Commercial Face Recognition Web APIs under Deepfake Impersonation Attack",
        "authors": [
            "Shahroz Tariq",
            "Sowon Jeon",
            "Simon S. Woo"
        ],
        "venue_full": "arXiv",
        "venue": null,
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2021,
        "links": {
            "conf": "https://doi.org/10.48550/arxiv.2103.00847"
        },
        "img": "/img/Publications/airor.png",
        "abstract": "This work provides a measurement study on the robustness of black-box commercial face recognition APIs against Deepfake Impersonation (DI) attacks using celebrity recognition APIs as an example case study We achieved maximum success rates of 78.0% and 99.9% for targeted (ie, precise match) and non-targeted (ie, match with any celebrity) attacks, respectively. Moreover, we propose practical defense strategies to mitigate DI attacks, reducing the attack success rates to as low as 0% and 0.02% for targeted and non-targeted attacks, respectively.",
        "abstract_ko": "본 연구는 블랙박스 상업용 얼굴 인식 API가 딥페이크 사칭(DI) 공격에 대해 얼마나 견고한지 측정한 연구를 제공하며, 예시 사례 연구로 유명인 인식 API를 사용했습니다. 본 연구에서는 타깃 공격(즉, 정확한 매칭)과 비타깃 공격(즉, 어떤 유명인과도 매칭)에서 각각 최대 성공률 78.0%와 99.9%를 달성했습니다. 더 나아가, 본 연구에서는 DI 공격을 완화하기 위한 실질적인 방어 전략을 제안하여 타깃 공격과 비타깃 공격의 공격 성공률을 각각 0%와 0.02%까지 낮출 수 있었습니다."
    },
    {
        "title": "Revitalizing Self-Organizing Map: Anomaly Detection Using Forecasting Error Patterns",
        "authors": [
            "Young Geun Kim",
            "Jeong-Han Yun",
            "Siho Han",
            "Hyoung Chun Kim",
            "Simon S. Woo"
        ],
        "venue_full": "IFIP International Conference on ICT Systems Security and Privacy Protection",
        "venue": "IFIP SEC",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2021,
        "links": {
            "conf": "https://doi.org/10.1007/978-3-030-78120-0_25"
        },
        "img": "/img/Publications/rsom.png",
        "abstract": "In this work, we focus on improving the anomaly detection performance by leveraging the forecasting error patterns generated from prediction models, such as Sequence-to-Sequence (seq2seq), Mixture Density Networks (MDNs), and Recurrent Neural Networks (RNNs). To this end, we introduce Self-Organizing Map-based Anomaly Detector (SOMAD), an anomaly detection framework based on a novel test statistic, SomAnomaly, for Cyber-Physical System (CPS) security.",
        "abstract_ko": "본 연구에서는 Sequence-to-Sequence(seq2seq), Mixture Density Networks(MDNs), Recurrent Neural Networks(RNNs)과 같은 예측 모델에서 생성된 예측 오차 패턴을 활용하여 이상 탐지 성능을 향상시키는 데 중점을 둔다. 이를 위해 본 연구에서는 사이버-물리 시스템(CPS) 보안을 위한 새로운 검정 통계량 SomAnomaly에 기반한 이상 탐지 프레임워크인 자기조직화 지도 기반 이상 탐지기(SOMAD)를 소개한다."
    },
    {
        "title": "TAR: Generalized Forensic Framework to Detect Deepfakes Using Weakly Supervised Learning",
        "authors": [
            "Sangyup Lee",
            "Shahroz Tariq",
            "Junyaup Kim",
            "Simon S. Woo"
        ],
        "venue_full": "IFIP International Conference on ICT Systems Security and Privacy Protection",
        "venue": "IFIP SEC",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2021,
        "links": {
            "conf": "https://doi.org/10.1007/978-3-030-78120-0_23"
        },
        "img": "/img/Publications/tgddw.png",
        "abstract": "This work introduces a practical digital forensic tool to detect different types of deepfakes simultaneously\n                                and proposes Transfer learning-based Autoencoder with Residuals (TAR). The ultimate goal\n                                of this work is to develop an uni fied model to detect various types of deepfake videos\n                                with high accuracy, with only a small number of training samples that can work well in\n                                real-world settings. To achieve this, this work develops an autoencoder-based detection\n                                model with Residual blocks and sequentially performs transfer learning to detect\n                                different types of deepfakes simultaneously. The detection model shows a high detection\n                                performance not only on the FF++ dataset but also on 200 real-world Deepfake-in-the-wild\n                                videos.",
        "abstract_ko": "본 연구는 다양한 유형의 딥페이크를 동시에 탐지할 수 있는 실용적인 디지털 포렌식 도구를 소개하고, Residual을 갖춘 전이 학습 기반 오토인코더(TAR)를 제안합니다. 이 연구의 궁극적인 목표는 소수의 학습 샘플만으로도 높은 정확도로 다양한 유형의 딥페이크 영상을 탐지할 수 있는 통합 모델을 개발하여 실제 환경에서도 잘 작동하게 하는 것입니다. 이를 달성하기 위해, 본 연구는 Residual 블록이 포함된 오토인코더 기반 탐지 모델을 개발하고, 다양한 유형의 딥페이크를 동시에 탐지하기 위해 순차적으로 전이 학습을 수행합니다. 이 탐지 모델은 FF++ 데이터셋뿐만 아니라 200개의 실제 환경에서 만들어진 딥페이크 영상에서도 높은 탐지 성능을 보여줍니다."
    },
    {
        "title": "Detecting handcrafted facial image manipulations and GAN-generated facial images using Shallow-FakeFaceNet",
        "authors": [
            "Sangyup Lee",
            "Shahroz Tariq",
            "Youjin Shin",
            "Simon S. Woo"
        ],
        "venue_full": "Applied Soft Computing",
        "venue": null,
        "track": "SCIE Journal",
        "presentationType": null,
        "Factor": [
            "SCIE IF =",
            5.47
        ],
        "year": 2021,
        "links": {
            "conf": "https://doi.org/10.1016/j.asoc.2021.107256"
        },
        "img": "/img/Publications/dhfi.png",
        "abstract": "In this work, we introduce a novel Handcrafted Facial Manipulation (HFM) image dataset and soft computing neural network models (Shallow-FakeFaceNets) with an efficient facial manipulation detection pipeline. Our neural network classifier model, Shallow-FakeFaceNet (SFFN), shows the ability to focus on the manipulated facial landmarks to detect fake images. This study is targeted for developing an automated defense mechanism to combat fake images used in different online services and applications, leveraging our state-of-the-art handcrafted fake facial dataset (HFM) and the neural network classifier Shallow-FakeFaceNet (SFFN).",
        "abstract_ko": "본 연구에서는 새로운 수작업 얼굴 조작(Handcrafted Facial Manipulation, HFM) 이미지 데이터셋과 효율적인 얼굴 조작 탐지 파이프라인을 갖춘 소프트 컴퓨팅 신경망 모델(Shallow-FakeFaceNets)을 소개합니다. 우리 신경망 분류기 모델인 Shallow-FakeFaceNet(SFFN)은 조작된 얼굴 랜드마크에 집중하여 가짜 이미지를 탐지하는 능력을 보여줍니다. 본 연구는 최첨단 수작업 가짜 얼굴 데이터셋(HFM)과 신경망 분류기 Shallow-FakeFaceNet(SFFN)을 활용하여, 다양한 온라인 서비스와 애플리케이션에서 사용되는 가짜 이미지에 대응하기 위한 자동화 방어 메커니즘 개발을 목표로 합니다."
    },
    {
        "title": "Exploring Racial Bias in Classifiers for Face Recognition",
        "authors": [
            "Jaeju An",
            "Jeongho Kim",
            "Bosung Yang",
            "Geonwoo Park",
            "Simon S. Woo"
        ],
        "venue_full": "WWW Workshop on Fairness, Accountability, Transparency, Ethics and Society on the Web",
        "venue": "FATES",
        "track": "Workshop Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2021,
        "links": {},
        "img": "/img/Publications/ExploringRacialBias.png",
        "abstract": "Recent advancements in deep learning have allowed, among others,various applications of face recognition\n                                systems, where a largeamount of face image data are typically required for training.",
        "abstract_ko": "최근 딥러닝의 발전은 얼굴 인식 시스템의 다양한 응용을 가능하게 했으며, 이러한 시스템은 일반적으로 학습을 위해 많은 양의 얼굴 이미지 데이터가 필요합니다."
    },
    {
        "title": "One Detector to Rule Them All: Towards a General Deepfake Attack Detection Framework",
        "authors": [
            "Shahroz Tariq",
            "Sang Yup Lee",
            "Simon S. Woo"
        ],
        "venue_full": "ACM Web Conference",
        "venue": "WWW",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            4
        ],
        "year": 2021,
        "links": {},
        "img": "/img/Publications/odtr.png",
        "abstract": "Beyond detecting a single type of DF from benchmark deepfake datasets, we focus on developing a generalized approach to detect multiple types of DFs, including deepfakes from unknown generation methods such as DeepFake-in-the-Wild (DFW) videos. To better cope with unknown and unseen deepfakes, we introduce a Convolutional LSTM-based Residual Network (CLRNet), which adopts a unique model training strategy and explores spatial as well as the temporal information in a deepfakes. Through extensive experiments, we show that existing defense methods are not ready for real-world deployment. Whereas our defense method (CLRNet) achieves far better generalization when detecting various benchmark deepfake methods (97.57% on average). Furthermore, we evaluate our approach with a high-quality DeepFake-in-the-Wild dataset, collected from the Internet containing numerous videos and having more than 150,000 frames. Our CLRNet model demonstrated that it generalizes well against high-quality DFW videos by achieving 93.86% detection accuracy, outperforming existing state-of-the-art defense methods by a considerable margin.",
        "abstract_ko": "벤치마크 딥페이크 데이터셋에서 단일 유형의 DF를 감지하는 것을 넘어서, 본 연구에서는 DeepFake-in-the-Wild(DFW) 비디오와 같이 알려지지 않은 생성 방법의 딥페이크를 포함한 여러 유형의 DF를 감지하기 위한 일반화된 접근 방식을 개발하는 데 중점을 둡니다. 알려지지 않고 보지 못한 딥페이크에 더 잘 대응하기 위해, 본 연구에서는 독특한 모델 학습 전략을 채택하고 딥페이크에서 공간적 및 시간적 정보를 탐구하는 컨볼루션 LSTM 기반 잔차 네트워크(CLRNet)를 소개합니다. 광범위한 실험을 통해, 기존 방어 방법들이 실제 환경에서 배포될 준비가 되어 있지 않음을 보여줍니다. 반면, 우리의 방어 방법(CLRNet)은 다양한 벤치마크 딥페이크 방법을 감지할 때 훨씬 더 나은 일반화 성능을 달성합니다(평균 97.57%). 또한, 본 연구에서는 인터넷에서 수집된 수많은 비디오를 포함하고 150,000프레임 이상을 가진 고품질 DeepFake-in-the-Wild 데이터셋으로 제안 접근을 평가합니다. 우리의 CLRNet 모델은 93.86%의 탐지 정확도를 달성함으로써 고품질 DFW 비디오에 대해 잘 일반화됨을 보여주었으며, 기존 최첨단 방어 방법들보다 상당한 차이로 우수한 성능을 나타냈습니다."
    },
    {
        "title": "A Security Analysis of Blockchain-Based Did Services",
        "authors": [
            "Bong Gon Kim",
            "Young-Seob Cho",
            "Seok-Hyun Kim",
            "Hyoungshick Kim",
            "Simon S. Woo"
        ],
        "venue_full": "IEEE Access",
        "venue": null,
        "track": "SCIE Journal",
        "presentationType": null,
        "Factor": [
            "SCIE IF =",
            4.09
        ],
        "year": 2021,
        "links": {
            "conf": "https://doi.org/10.1109/access.2021.3054887"
        },
        "img": "/img/Publications/secBlock.jpg",
        "abstract": "Decentralized identifiers (DID) has shown great potential for sharing user identities across different domains and services without compromising user privacy. DID is designed to enable the minimum disclosure of the proof from a user’s credentials on a need-to-know basis with a contextualized delegation.",
        "abstract_ko": "분산 식별자(DID)는 사용자 프라이버시를 침해하지 않고 다양한 도메인과 서비스 간에 사용자 신원을 공유하는 데 큰 잠재력을 보여주었습니다. DID는 상황에 맞는 위임을 통해 사용자의 자격 증명에서 필요에 따라 최소한의 정보를 공개할 수 있도록 설계되었습니다."
    },
    {
        "title": "BertLoc: Duplicate Location Record Detection in a Large-Scale Location Dataset",
        "authors": [
            "Sujin Park",
            "Sangwon Lee",
            "Simon S. Woo"
        ],
        "venue_full": "ACM SIGAPP Symposium on Applied Computing",
        "venue": "SAC",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2021,
        "links": {},
        "img": "/img/Publications/bertLoc.png",
        "abstract": "In this work, we propose BertLoc, a novel deep learning-based architecture to detect the duplicate location represented in different ways (e.g., Cafe vs. Coffee House) and effectively merge them into a single and consistent location record. BertLoc is based on Multilingual Bert Model followed by BiLSTM and CNN to effectively compare and determine whether given location strings are the same location or not. We evaluate BertLoc trained with more than half a million location data used in real service in South Korea and compare the results with other popular baseline methods. Our experimental results show that BertLoc outperforms other popular baseline methods with 0.952 F1-score, and shows great promise in detecting duplicate records in a large-scale location dataset.",
        "abstract_ko": "본 연구에서는 BertLoc을 제안합니다. BertLoc은 서로 다른 방식으로 표현된 중복 위치(예: 카페 vs. 커피 하우스)를 탐지하고 이를 단일하고 일관된 위치 기록으로 효과적으로 병합하는 새로운 딥러닝 기반 아키텍처입니다. BertLoc은 다국어 Bert 모델을 기반으로 하며, 이어서 BiLSTM과 CNN을 사용하여 주어진 위치 문자열이 동일한 위치인지 여부를 효과적으로 비교하고 판별합니다. 본 연구에서는 실제 서비스에서 사용되는 50만 개 이상의 위치 데이터를 이용해 BertLoc을 학습시키고, 그 결과를 다른 인기 있는 기준 방법과 비교 평가합니다. 실험 결과, BertLoc은 0.952 F1-스코어로 다른 인기 있는 기준 방법보다 우수한 성능을 보였으며, 대규모 위치 데이터셋에서 중복 기록을 탐지하는 데 큰 가능성을 보여줍니다."
    },
    {
        "title": "Image hashing algorithm to defend FGSM attacks on Neural Network",
        "authors": [
            "Junyaup Kim",
            "Siho Han",
            "Simon S. Woo"
        ],
        "venue_full": "Cyber Defence Next Generation Technology and Science Conference",
        "venue": "CDNG",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2020,
        "links": {
            "conf": "https://dash-lab.github.io/img/Publications/jy.pdf"
        },
        "img": "/img/Publications/jy.png",
        "abstract": "In this research, we present a performance evaluation of existing image hashing algorithms on defending deep learning models against adversarial attacks as an initial work to developing a new, time efficient image hashing algorithm. Upon experimenting with existing image hashing algorithms, we conclude that the wavelet hashing algorithm achieves the highest accuracy (75%) when detecting images generated from Neural Networks attacked by the FGSM, with a time complexity of 𝑂(𝑁).",
        "abstract_ko": "본 연구에서는 새로운 시간 효율적인 이미지 해싱 알고리즘을 개발하기 위한 초기 작업으로서, 딥러닝 모델을 적대적 공격으로부터 방어하는 기존 이미지 해싱 알고리즘의 성능 평가를 제시한다. 기존 이미지 해싱 알고리즘을 실험한 결과, 웨이블릿 해싱 알고리즘이 FGSM으로 공격된 신경망에서 생성된 이미지를 탐지할 때 75%의 가장 높은 정확도를 달성하며, 시간 복잡도는 𝑂(𝑁)임을 결론지었다."
    },
    {
        "title": "오픈소스 기반 격자 방식 PQC 알고리즘 분석 (Open-Source Code Analysis on Lattice-Based Post Quantum Cryptography)",
        "authors": [
            "Minha Kim",
            "Hakjun Moon",
            "Simon S. Woo"
        ],
        "venue_full": "Conference on Information Security and Cryptography-Winter",
        "venue": "CISC-W",
        "track": null,
        "Factor": [
            "",
            0
        ],
        "year": 2020,
        "links": {
            "conf": "https://dash-lab.github.io/img/Publications/pqc.pdf"
        },
        "img": "/img/Publications/pqc.png",
        "abstract": "Currently used cryptography algorithms like RSA are vulnerable to quantum computers and are at risk of being deciphered in polynomial time. As the commercialization of quantum computers is soon to be realized, there is an urgent need for developing post-quantum cryptography(PQC) algorithms. In this paper, we analyze several lattice-based PQC algorithms from NIST Post-Quantum Cryptography Standardization project and test them in some representative security protocols to show their practicality.",
        "abstract_ko": "현재 사용되는 RSA와 같은 암호화 알고리즘은 양자 컴퓨터에 취약하며 다항 시간 내에 해독될 위험이 있습니다. 양자 컴퓨터의 상용화가 곧 실현될 예정이므로, 포스트 양자 암호(Post-Quantum Cryptography, PQC) 알고리즘 개발이 시급합니다. 본 논문에서는 NIST 포스트 양자 암호 표준화 프로젝트에서 제안된 여러 격자 기반 PQC 알고리즘을 분석하고, 일부 대표적인 보안 프로토콜에서 이를 테스트하여 실용성을 보여줍니다."
    },
    {
        "title": "Compensating for the Lack of Extra Training Data by Learning Extra Representation",
        "authors": [
            "Hyeonseong Jeon",
            "Siho Han",
            "Sangwon Lee",
            "Simon S. Woo"
        ],
        "venue_full": "Asian Conference on Computer Vision",
        "venue": "ACCV",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2020,
        "links": {
            "conf": "https://doi.org/10.1007/978-3-030-69544-6_32"
        },
        "img": "/img/Publications/ctle.png",
        "abstract": "We introduce a novel framework, Extra Representation (ExRep), to surmount the problem of not having access to the JFT-300M data by instead using ImageNet and the publicly available model that has been pre-trained on JFT-300M. We take a knowledge distillation approach, treating the\n                                model pre-trained on JFT-300M as well as on ImageNet as the teacher network and that pre-trained only on ImageNet as the student network. Our proposed method is capable of learning additional representation effects of the teacher model, bolstering the student model’s performance to a similar level to that of the teacher model, achieving high classification performance even without extra training data.",
        "abstract_ko": "본 연구에서는 JFT-300M 데이터에 접근할 수 없는 문제를 극복하기 위해 ImageNet과 JFT-300M으로 사전 학습된 공개 모델을 대신 사용하는 새로운 프레임워크인 Extra Representation(ExRep)을 소개합니다. 본 연구에서는 지식 증류 접근 방식을 취하여, JFT-300M과 ImageNet에서 사전 학습된 모델을 교사 네트워크로, 오직 ImageNet에서만 사전 학습된 모델을 학생 네트워크로 취급합니다. 제안된 방법은 교사 모델의 추가 표현 효과를 학습할 수 있어, 학생 모델의 성능을 교사 모델과 유사한 수준으로 향상시키며, 추가 학습 데이터 없이도 높은 분류 성능을 달성합니다."
    },
    {
        "title": "ITAD: Integrative Tensor-based Anomaly Detection System for Reducing False Postives of Satellite Systems",
        "authors": [
            "Youjin Shin",
            "Shahroz Tariq",
            "Sangyup Lee",
            "Myeong Shin Lee",
            "Okchul Jung",
            "Daewon Chung",
            "Simon S. Woo"
        ],
        "venue_full": "ACM International Conference on Information and Knowledge Management",
        "venue": "CIKM",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            3
        ],
        "year": 2020,
        "links": {},
        "img": "/img/Publications/itad.png",
        "abstract": "Reducing false positives while detecting anomalies is of growing importance for various industrial applications and mission-critical infrastructures, including satellite systems. Undesired false positives can be costly for such systems, bringing the operation to a halt for human experts to determine if the anomalies are true anomalies that need to be mitigated",
        "abstract_ko": "위상을 감지할 때 잘못된 양성을 줄이는 것은 위성 시스템을 포함한 다양한 산업 응용 프로그램과 미션 크리티컬 인프라에서 점점 더 중요해지고 있습니다. 원치 않는 잘못된 양성은 이러한 시스템에 큰 비용을 초래할 수 있으며, 인간 전문가가 해당 이상이 실제로 완화해야 하는 이상인지 판단하기 위해 운영을 중단하게 합니다."
    },
    {
        "title": "ZoomNet: Detecting Low-Quality Deepfakes In The Wild by Zooming In",
        "authors": [
            "Sangyup Lee",
            "Simon S. Woo",
            "Jinhwan Kim",
            "Okyeop Jeon"
        ],
        "venue_full": "Proceedings of the Korean Information Science Society Conference",
        "venue": "한국법과학회 2020 추계학술대회",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2020,
        "links": {},
        "img": "/img/Publications/zoomnet_2020.png",
        "abstract": "Deepfakes have become a critical social problem, and detecting them is of utmost importance. Detecting high-quality deepfake videos from widely released datasets is more straightforward to detect than low-quality ones. Most of the prior research achieve above 90% accuracy for detecting the high-quality deepfake videos from the open dataset. However, in real life, many deepfake videos that are leaked through social networks such as YouTube and instant messaging applications are highly compressed. As a result, the distributed video's resolution becomes extremely lower, making the state-of-the-art detection methods harder. In this work, we propose ZoomNet, a practical framework to detect low-quality deepfakes with high accuracy. We build ZoomNet to have the ability to zoom into low-quality images effectively and can learn to distinguish deepfakes from real videos.",
        "abstract_ko": "딥페이크는 심각한 사회적 문제로 대두되었으며, 이를 탐지하는 것이 매우 중요합니다. 널리 공개된 데이터셋에서 고품질 딥페이크 영상을 탐지하는 것은 저품질 영상에 비해 더 직관적입니다. 기존 연구의 대부분은 공개 데이터셋에서 고품질 딥페이크 영상을 탐지하는 데 90% 이상의 정확도를 달성했습니다. 그러나 실제 생활에서는 유튜브나 인스턴트 메시징 애플리케이션 같은 소셜 네트워크를 통해 유출되는 많은 딥페이크 영상들이 고도로 압축되어 있습니다. 그 결과, 배포된 영상의 해상도가 매우 낮아져 최신 탐지 방법들이 적용하기 어려워집니다. 본 연구에서는 저품질 딥페이크를 높은 정확도로 탐지할 수 있는 실용적인 프레임워크인 ZoomNet을 제안합니다. 본 연구에서는 ZoomNet이 저품질 영상을 효과적으로 확대할 수 있는 능력을 갖추도록 설계하였으며, 실제 영상과 딥페이크 영상을 구분하는 방법을 학습할 수 있도록 합니다."
    },
    {
        "title": "Who is Delivering My Food? Detecting Food Delivery Abusers using Variational Reward Inference Networks",
        "authors": [
            "DaeYoung Yoon",
            "Simon S. Woo"
        ],
        "venue_full": "ACM International Conference on Information and Knowledge Management",
        "venue": "CIKM",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            3
        ],
        "year": 2020,
        "links": {
            "conf": "https://dl.acm.org/doi/10.1145/3340531.3412750"
        },
        "img": "/img/Publications/yoon.png",
        "abstract": "The recent paramount success of the gig economy has introduced new business opportunities in different areas such as food delivery service. However, there are food delivery ride abusers who break the company rule by driving unauthorized vehicles that are not stated in the contract",
        "abstract_ko": "최근 긱 경제의 대성공은 음식 배달 서비스와 같은 다양한 분야에서 새로운 사업 기회를 가져왔습니다. 그러나 계약서에 명시되지 않은 무단 차량을 운전함으로써 회사 규칙을 위반하는 음식 배달 운전자가 있습니다."
    },
    {
        "title": "Can We Create a Cross-Domain Federated Identity for the Industrial Internet of Things without Google?",
        "authors": [
            "Eunsoo Kim",
            "Young-Seob Cho",
            "Bedeuro Kim",
            "Woojoong Ji",
            "Seok-Hyun Kim",
            "Simon S. Woo",
            "Hyoungshick Kim"
        ],
        "venue_full": "IEEE Internet of Things Magazine",
        "venue": null,
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2020,
        "links": {
            "conf": "https://doi.org/10.1109/iotm.0001.2000050"
        },
        "img": "/img/Publications/bc.png",
        "abstract": "Providing a cross-domain federated identity is essential for next-generation Internet services because information about user identity should be seamlessly exchanged across different domains for authentication and authorization.",
        "abstract_ko": "크로스 도메인 연합 신원을 제공하는 것은 차세대 인터넷 서비스에 필수적입니다. 왜냐하면 사용자 신원에 대한 정보가 인증 및 권한 부여를 위해 다양한 도메인 간에 원활하게 교환되어야 하기 때문입니다."
    },
    {
        "title": "Applying Deep Learning to Reconstruct Pottery from Thousands Shards,",
        "authors": [
            "Keeyoung Kim",
            "Jinseok Hong",
            "Sang-Hoon Rhee",
            "Simon S. Woo"
        ],
        "venue_full": "European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases",
        "venue": "ECML-PKDD",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2020,
        "links": {
            "conf": "https://link.springer.com/chapter/10.1007/978-3-030-67670-4_3"
        },
        "img": null,
        "abstract": "A great deal of time, patience, and effort are required to excavate pottery. For example, archaeologists dig hundreds to thousands of pottery shards from an excavation site. However, restoring pottery is a time-consuming and challenging process, requiring considerable amounts of expertise, experience, and time. ",
        "abstract_ko": "도자기를 발굴하는 데에는 많은 시간, 인내심, 노력이 필요하다. 예를 들어, 고고학자들은 발굴 현장에서 수백에서 수천 개의 도자기 조각을 발굴한다. 그러나 도자기를 복원하는 것은 시간과 노력이 많이 드는 어려운 과정으로, 상당한 전문 지식, 경험, 시간 등이 요구된다."
    },
    {
        "title": "OC-FakeDect: Classifying Deepfakes Using One-class Variational Autoencoder",
        "authors": [
            "Hasam Khalid",
            "Simon S. Woo"
        ],
        "venue_full": "IEEE Biometrics Council newsletter",
        "venue": null,
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2020,
        "links": {
            "conf": "https://doi.org/10.1109/cvprw50498.2020.00336"
        },
        "img": "/img/Publications/ocvae.png",
        "abstract": "An image forgery method called Deepfakes can cause security and privacy issues by changing the identity of a person in a photo through the replacement of his/her face with a computer-generated image or another person’s face.",
        "abstract_ko": "Deepfakes라고 불리는 이미지 위조 방법은 사람의 얼굴을 컴퓨터 생성 이미지나 다른 사람의 얼굴로 대체하여 사진 속 사람의 신원을 변경함으로써 보안 및 개인정보 문제를 초래할 수 있습니다."
    },
    {
        "title": "Forecasting Error Pattern-Based Anomaly Detection in Multivariate Time Series",
        "authors": [
            "Seoyoung Park",
            "Siho Han",
            "Simon S. Woo"
        ],
        "venue_full": "European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases",
        "venue": "ECML-PKDD",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2020,
        "links": {
            "conf": "https://doi.org/10.1007/978-3-030-67667-4_10"
        },
        "img": "/img/Publications/fepb.jpg",
        "abstract": "We propose novel Functional Data Analysis (FDA) and Autoencoder-based approaches for anomaly detection in the Secure Water Treatment (SWaT) dataset, which realistically represents a scaled-down industrial water treatment plant. We demonstrate that our methods can capture the underlying forecasting error patterns of the SWaT dataset generated by Mixture Density Networks (MDNs).",
        "abstract_ko": "본 연구에서는 축소된 산업용 수처리 공장을 실제적으로 나타내는 Secure Water Treatment (SWaT) 데이터셋에서 이상 탐지를 위해 새로운 기능적 데이터 분석(FDA) 및 오토인코더 기반 접근법을 제안합니다. 본 연구에서는 제안 방법이 혼합 밀도 네트워크(MDN)로 생성된 SWaT 데이터셋의 근본적인 예측 오류 패턴을 포착할 수 있음을 보여줍니다."
    },
    {
        "title": "국내 딥페이크 기술 현황 및 제도적 대응방안 연구",
        "authors": [
            "Sowon Jeon",
            "Junhyung Kang",
            "Jinhee Hwang",
            "Simon S. Woo"
        ],
        "venue_full": "Conference on Information Security and Cryptography-Summer",
        "venue": "CISC-S",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2020,
        "links": {},
        "img": "/img/Publications/sowon1.png",
        "abstract": "최근 한국에서 ‘가짜 연예인 음란  동영상’ 및 ‘지인 능욕’에 사용되는 딥페이크(Deepfakes) 포르노 문제가 사회적인 이슈로 불거지고 있다. 딥페이크 기술은 인공지능 기술의 발전에 맞추어 더욱더 빠르게 발전하고 있으나 관련 규제와 대응방안이 부족한 실정이다. 따라서 본 논문에서는 딥페이크 기술의 현황과 딥페이크 관련 국내외 법적 규제 및 현행법의 한계점을 살펴보고, 이로부터 각 개인 및 기관의 역할과 대응방안을 제안한다.",
        "abstract_ko": "Recently, in Korea, the issue of deepfake pornography used for 'fake celebrity pornography' and 'humiliating acquaintances' has emerged as a social issue. Deepfake technology is rapidly advancing in line with the development of artificial intelligence technology, but there is a lack of related regulations and countermeasures. Therefore, this paper examines the current status of deepfake technology, domestic and international legal regulations related to deepfakes, and the limitations of current laws, and from this, proposes the roles and countermeasures for individuals and organizations."
    },
    {
        "title": "T-GD: Transferable GAN-generated Images Detection Framework",
        "authors": [
            "Hyeonseong Jeon",
            "Youngoh Bang",
            "Junyaup Kim",
            "Simon S. Woo"
        ],
        "venue_full": "International Conference on Machine Learning",
        "venue": "ICML",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            4
        ],
        "year": 2020,
        "links": {
            "conf": "https://doi.org/10.48550/arxiv.2008.04115"
        },
        "img": "/img/Publications/tgd.png",
        "abstract": "In this work, we present the Transferable GAN-images Detection framework (T-GD), a robust transferable framework for an effective detection of GAN-images. T-GD is composed of a teacher and a student model that can iteratively teach and evaluate each other to improve the detection performance.",
        "abstract_ko": "본 연구에서는 효율적인 GAN 이미지 탐지를 위한 강력한 전이 가능 프레임워크인 전이 가능 GAN 이미지 탐지 프레임워크(T-GD)를 제시한다. T-GD는 탐지 성능을 향상시키기 위해 서로를 반복적으로 가르치고 평가할 수 있는 교사 모델과 학생 모델로 구성된다."
    },
    {
        "title": "Real Time Localized Air Quality Monitoring and Prediction Through Mobile and Fixed IoT Sensing Network",
        "authors": [
            "Dan Zhang",
            "Simon S. Woo"
        ],
        "venue_full": "IEEE Access",
        "venue": null,
        "track": "SCIE Journal",
        "presentationType": null,
        "Factor": [
            "SCIE IF =",
            4.09
        ],
        "year": 2020,
        "links": {
            "conf": "https://doi.org/10.1109/access.2020.2993547"
        },
        "img": null,
        "abstract": "Air pollution and its harm to human health has become a serious problem in many cities around the world.In recent years, research interests in measuring and predicting the quality of air around people has spiked.",
        "abstract_ko": "대기 오염과 그것이 인간 건강에 미치는 해로움은 전 세계 많은 도시에서 심각한 문제가 되었다. 최근 몇 년 동안, 사람들 주변의 공기 질을 측정하고 예측하는 연구 관심이 급증했다."
    },
    {
        "title": "CAN-ADF: The controller area network attack detection framework",
        "authors": [
            "Shahroz Tariq",
            "Sangyup Lee",
            "Huy Kang Kim",
            "Simon S. Woo"
        ],
        "venue_full": "Computers & Security",
        "venue": null,
        "track": "SCIE Journal",
        "presentationType": null,
        "Factor": [
            "SCIE IF =",
            3.58
        ],
        "year": 2020,
        "links": {
            "conf": "https://doi.org/10.1016/j.cose.2020.101857"
        },
        "img": "/img/Publications/canadf.png",
        "abstract": "In recent years, there has been significant interest in developing autonomous vehicles such as self-driving cars. In-vehicle communications, due to simplicity and reliability, a Controller Area Network (CAN) bus is widely used as the de facto standard to provide serial communications between Electronic Control Units (ECUs)",
        "abstract_ko": "최근 몇 년 동안 자율주행 자동차와 같은 자율 차량을 개발하는 데 상당한 관심이 있어 왔습니다. 차량 내 통신에서는 단순성과 신뢰성 때문에 전자제어장치(ECU) 간 직렬 통신을 제공하기 위한 사실상의 표준으로 컨트롤러 영역 네트워크(CAN) 버스가 널리 사용됩니다."
    },
    {
        "title": "OC-FakeDect: Classifying Deepfakes Using One-class Variational Autoencoder",
        "authors": [
            "Hasam Khalid",
            "Simon S. Woo"
        ],
        "venue_full": "IEEE/CVF CVPR Workshop on Media Forensics",
        "venue": "CVPRW",
        "track": "Workshop Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2020,
        "links": {
            "conf": "https://openaccess.thecvf.com/content_CVPRW_2020/papers/w39/Khalid_OC-FakeDect_Classifying_Deepfakes_Using_One-Class_Variational_Autoencoder_CVPRW_2020_paper.pdf"
        },
        "img": "/img/Publications/ocvae.png",
        "abstract": "In recent years, there has been significant interest in developing autonomous vehicles such as self-driving cars. In-vehicle communications, due to simplicity and reliability, a Controller Area Network (CAN) bus is widely used as the de facto standard to provide serial communications between Electronic Control Units (ECUs)",
        "abstract_ko": "최근 몇 년 동안 자율주행 자동차와 같은 자율 차량을 개발하는 데 상당한 관심이 있어 왔습니다. 차량 내 통신에서는 단순성과 신뢰성 때문에 전자제어장치(ECU) 간 직렬 통신을 제공하기 위한 사실상의 표준으로 컨트롤러 영역 네트워크(CAN) 버스가 널리 사용됩니다."
    },
    {
        "title": "Design and Evaluation of Enumeration Attacks on Package Tracking Systems",
        "authors": [
            "Hanbin Jang",
            "Woojoong Ji",
            "Simon S. Woo",
            "Hyoungshick Kim"
        ],
        "venue_full": "Australasian Conference on Information Security and Privacy",
        "venue": "ACISP",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2020,
        "links": {
            "conf": "https://doi.org/10.1007/978-3-030-55304-3_28"
        },
        "img": null,
        "abstract": "Most shipping companies provide a package tracking system where customers can easily track their package delivery status when the package is being shipped. However, we present asecurity problem called enumeration attacks against package tracking systems...",
        "abstract_ko": "대부분의 배송 회사는 고객이 패키지가 배송되는 동안 배송 상태를 쉽게 추적할 수 있는 패키지 추적 시스템을 제공합니다. 그러나 본 연구에서는 패키지 추적 시스템에 대한 열거 공격이라고 불리는 보안 문제를 제시합니다..."
    },
    {
        "title": "How Do We Create a Fantabulous Password?",
        "authors": [
            "Simon S. Woo"
        ],
        "venue_full": "ACM Web Conference",
        "venue": "WWW",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            4
        ],
        "year": 2020,
        "links": {
            "conf": "https://doi.org/10.1145/3366423.3380222"
        },
        "img": null,
        "abstract": "Although pronounceability can improve password memorability, most existing password generation approaches have not properly integrated the pronounceability of passwords in their designs. In this work, we demonstrate several shortfalls of current pronounceable password generation\n                            approaches, and then propose, ProSemPass, a new method of generating passwords that are pronounceable and semantically meaningful.",
        "abstract_ko": "비록 발음 가능성이 비밀번호 기억력을 향상시킬 수 있지만, 기존의 대부분 비밀번호 생성 접근법은 설계에 비밀번호의 발음 가능성을 제대로 통합하지 못했습니다. 본 연구에서는 현재 발음 가능한 비밀번호 생성 접근법의 몇 가지 단점을 보여주고, 이후 발음 가능하고 의미적으로도 유의미한 비밀번호를 생성하는 새로운 방법인 ProSemPass를 제안합니다."
    },
    {
        "title": "I’ve Got Your Packages: Harvesting Customers’ Delivery Order Information using Package Tracking Number Enumeration Attacks",
        "authors": [
            "Simon Woo",
            "Hanbin Jang",
            "Woojung Ji",
            "Hyoungshick Kim"
        ],
        "venue_full": "ACM Web Conference",
        "venue": "WWW",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            3
        ],
        "year": 2020,
        "links": {
            "conf": "https://doi.org/10.1145/3366423.3380062"
        },
        "img": null,
        "abstract": "A package tracking number (PTN) is widely used to monitor and track a shipment. Through the lenses of security and privacy, however, a package tracking number can possibly reveal certain personal information, leading to security and privacy breaches.",
        "abstract_ko": "소포 추적 번호(PTN)는 배송을 모니터링하고 추적하는 데 널리 사용됩니다. 그러나 보안과 개인정보 관점에서 볼 때, 소포 추적 번호는 특정 개인 정보를 노출할 수 있어 보안 및 개인정보 침해로 이어질 수 있습니다."
    },
    {
        "title": "FDFtNet: Facing Off Fake Images Using Fake Detection Fine-Tuning Network",
        "authors": [
            "Hyeonseong Jeon",
            "Youngoh Bang",
            "Simon S. Woo"
        ],
        "venue_full": "International Conference on Information Security and Privacy Protection",
        "venue": "IFIP SEC",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2020,
        "links": {
            "conf": "https://doi.org/10.1007/978-3-030-58201-2_28"
        },
        "img": null,
        "abstract": "Creating fake images and videos such as Deepfake has become much easier these days due to the advancement in Generative Adversarial Networks (GANs). Moreover, recent research such as the few-shot learning can create highly realistic personalized fake images with only a few images.",
        "abstract_ko": "최근 생성적 적대 신경망(GAN)의 발전으로 인해 딥페이크와 같은 가짜 이미지 및 비디오를 만드는 것이 훨씬 쉬워졌습니다. 게다가 최근 몇 장의 이미지로도 매우 현실적인 맞춤형 가짜 이미지를 생성할 수 있는 몇 장 학습(few-shot learning)과 같은 연구가 진행되고 있습니다."
    },
    {
        "title": "PassTag: A Graphical-Textual Hybrid Fallback Authentication System",
        "authors": [
            "Joon Kuy Han",
            "Xiaojun Bi",
            "Hyoungshick Kim",
            "Simon S. Woo"
        ],
        "venue_full": "ACM Asia Conference on Computer and Communications Security,",
        "venue": "ASIACCS",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2020,
        "links": {
            "conf": "https://doi.org/10.1145/3320269.3384737"
        },
        "img": null,
        "abstract": "Designing a fallback authentication mechanism that is both memorable and strong is a challenging problem because of the trade-off between usability and security. Security questions are popularly used as a fallback authentication method for password recovery.",
        "abstract_ko": "기억하기 쉽고 강력한 대체 인증 메커니즘을 설계하는 것은 사용성(usability)과 보안(security) 사이의 균형 문제 때문에 어려운 문제입니다. 보안 질문은 비밀번호 복구를 위한 대체 인증 방법으로 널리 사용됩니다."
    },
    {
        "title": "Tale of Two Browsers: Understanding Users’ Web Browser Choices in South Korea",
        "authors": [
            "Jihye Woo",
            "Ji Won Choi",
            "Soyoon Jeon",
            "Joon Kuy Han",
            "Hyoungshick Kim",
            "Simon S. Woo"
        ],
        "venue_full": "Asian Workshop on Usable Security",
        "venue": "AsiaUSEC",
        "track": "Workshop Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2020,
        "links": {
            "conf": "https://doi.org/10.1007/978-3-030-54455-3_1"
        },
        "img": null,
        "abstract": "Internet users in South Korea seem to have clearly different web browser choices and usage patterns compared to the rest of the world, heavily using Internet Explorer (IE) or multiple browsers.",
        "abstract_ko": "한국의 인터넷 사용자는 전 세계 다른 지역과 비교하여 웹 브라우저 선택과 사용 패턴이 뚜렷이 다른 것으로 보이며, 인터넷 익스플로러(IE)나 여러 브라우저를 많이 사용합니다."
    },
    {
        "title": "CANTransfer: Transfer Learning based Intrusion Detection on a Controller Area Network using Convolutional LSTM Network",
        "authors": [
            "Shahroz Tariq",
            "Sangyup Lee",
            "Simon S. Woo"
        ],
        "venue_full": "ACM SIGAPP Symposium On Applied Computing",
        "venue": "SAC",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2020,
        "links": {
            "conf": "https://dl.acm.org/doi/10.1145/3341105.3373868"
        },
        "img": "/img/Publications/cantransfer.png",
        "abstract": "In-vehiclecommunications, due to simplicity and reliability, a Controller Area Network (CAN) bus is widely used as the de facto standard to provide serial communications between Electronic Control Units (ECUs).",
        "abstract_ko": "차량 내 통신에서는 간단함과 신뢰성 때문에 전자제어장치(ECU) 간 직렬 통신을 제공하기 위한 사실상의 표준으로 컨트롤러 영역 네트워크(CAN) 버스가 널리 사용됩니다."
    },
    {
        "title": "Designing for Fallible Humans",
        "authors": [
            "Jelena Mirkovic",
            "Simon Woo"
        ],
        "venue_full": "International Conference on Collaboration and Internet Computing",
        "venue": "CIC",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2019,
        "links": {
            "conf": "https://doi.org/10.1109/cic48465.2019.00042"
        },
        "img": null,
        "abstract": "Security and privacy solutions today are designed with an assumption of a rational user. System designers assume that the user is able to review all information shown to them, consider it along with other information they have, and user priorities, and make a conscious, rational decision in their best interest.",
        "abstract_ko": "오늘날의 보안 및 개인정보 보호 솔루션은 합리적인 사용자를 전제로 설계됩니다. 시스템 설계자는 사용자가 자신에게 보여지는 모든 정보를 검토하고, 자신이 가진 다른 정보 및 우선순위와 함께 이를 고려하며, 자신의 최선의 이익을 위해 의식적이고 합리적인 결정을 내릴 수 있다고 가정합니다."
    },
    {
        "title": "Poster: Classifying Genuine Face images from Disguised Face Images",
        "authors": [
            "Junyaup Kim",
            "Siho Han",
            "Simon S.Woo"
        ],
        "venue_full": "IEEE International Conference on Big Data",
        "venue": "IEEE BigData",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2019,
        "links": {
            "conf": "https://ieeexplore.ieee.org/abstract/document/9005683"
        },
        "img": "/img/Publications/cgfi.png",
        "abstract": "In this preliminary work, we aim to detect a target person's face from different similar individuals, Doppelgangers, leveraging the dataset from Disguised Faces in the Wild (DFW) 2018. We use well-known off-the-shelf face detection classifiers, such as ShallowNet, VGG-16, and Xception to evaluate the classification performance. In order to further improve the detection performance, we apply data augmentation. Our preliminary result shows that the Xception model can classify one from different individuals with a 62% accuracy.",
        "abstract_ko": "이 예비 연구에서는 Disguised Faces in the Wild (DFW) 2018 데이터셋을 활용하여 다양한 유사 인물, 도플갱어 중에서 목표 인물의 얼굴을 감지하는 것을 목표로 합니다. 본 연구에서는 ShallowNet, VGG-16, Xception과 같은 잘 알려진 기성 얼굴 인식 분류기를 사용하여 분류 성능을 평가합니다. 감지 성능을 더욱 향상시키기 위해 데이터 증강을 적용합니다. 우리의 예비 결과는 Xception 모델이 다양한 개인 중에서 한 명을 62%의 정확도로 분류할 수 있음을 보여줍니다."
    },
    {
        "title": "Poster: Nickel to Lego: Using Foolgle to Create Adversarial Examples to fool Google Cloud Speech-to-Text API,",
        "authors": [
            "Joon Kuy Han",
            "Hyoungshick Kim",
            "Simon S. Woo"
        ],
        "venue_full": "ACM Conference on Computer and Communications Security",
        "venue": "CCS",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2019,
        "links": {
            "conf": "https://dl.acm.org/doi/10.1145/3319535.3363264"
        },
        "img": null,
        "abstract": "Many companies offer automatic speech recognition or Speech-to-Text APIs for use in diverse applications. However, audio classification algorithms trained with deep neural networks (DNNs) can sometimes misclassify adversarial examples, posing a significant threat to critical applications.",
        "abstract_ko": "많은 회사들이 다양한 애플리케이션에 사용할 수 있는 자동 음성 인식 또는 음성-텍스트 API를 제공합니다. 그러나 심층 신경망(DNN)으로 훈련된 오디오 분류 알고리즘은 때때로 적대적 예제를 잘못 분류할 수 있으며, 이는 중요한 애플리케이션에 심각한 위협이 됩니다."
    },
    {
        "title": "Deep Learning for Blast Furnaces: Skip-Dense Layers Deep Learning Model to Predict the emaining Time to Close Tap-holes for Blast Furnaces",
        "authors": [
            "Keeyoung Kim",
            "Byeongrak Seo",
            "Sang-Hoon Rhee",
            "Seungmoon Lee",
            "Simon S. Woo"
        ],
        "venue_full": "ACM International Conference on Information and Knowledge Management",
        "venue": "CIKM",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            3
        ],
        "year": 2019,
        "links": {
            "conf": "https://dl.acm.org/doi/10.1145/3357384.3357803"
        },
        "img": null,
        "abstract": "Manufacturing steel requires extremely challenging industrial processes. In particular, predicting the exact time instance of opening and closing tap-holes in a blast furnace has a great influence on steel production efficiency and operating cost, in addition to human safety.",
        "abstract_ko": "강철을 제조하는 데에는 매우 어려운 산업 공정이 필요합니다. 특히, 용광로에서 주입구를 열고 닫는 정확한 시점을 예측하는 것은 인력의 안전뿐만 아니라 강철 생산 효율과 운영 비용에도 큰 영향을 미칩니다."
    },
    {
        "title": "FakeTalkerDetect: Effective and Practical Realistic Neural Talking Head Detection with a Highly Unbalanced Dataset",
        "authors": [
            "Hyeonseong Jeon",
            "Youngoh Bang",
            "Simon S. Woo"
        ],
        "venue_full": "IEEE/CVF ICCV Workshop on Human Behavior Understanding",
        "venue": "HBU",
        "track": "Workshop Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2019,
        "links": {
            "conf": "https://doi.org/10.1109/iccvw.2019.00163"
        },
        "img": null,
        "abstract": "Detecting realistic fake images and videos is an increasingly important and urgent problem because they can be maliciously used. In this work, we propose FakeTalkerDetect, which is based on siamese networks to detect the recently proposed realistic talking head with few-shot learning.",
        "abstract_ko": "현실적인 가짜 이미지와 비디오를 감지하는 것은 악의적으로 사용될 수 있기 때문에 점점 더 중요하고 긴급한 문제입니다. 본 연구에서는 최근 제안된 현실적인 말하는 얼굴을 소수 학습으로 감지하기 위해 시암 네트워크를 기반으로 한 FakeTalkerDetect를 제안합니다."
    },
    {
        "title": "Tensor Decomposition for Anomaly Detection in Space",
        "authors": [
            "Youjin Shin",
            "Sangyup Lee",
            "Shahroz Tariq",
            "Simon S. Woo"
        ],
        "venue_full": "ACM KDD Workshop on Tensor Methods for Emerging Data Science Challenges",
        "venue": "TMEDSC",
        "track": "Workshop Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2019,
        "links": {
            "conf": "https://milets19.github.io/papers/milets19_poster_6.pdf"
        },
        "img": "/img/Publications/tdfad.png",
        "abstract": ""
    },
    {
        "title": "Contextual Anomaly Detection by Correlated Probability Distributions using Kullback-Leibler Divergence",
        "authors": [
            "Jinwoo Cho",
            "Shahroz Tariq",
            "Sangyup Lee",
            "Young Geun Kim",
            "Jeong-Han Yun",
            "Jonguk Kim",
            "Hyoung Chun Kim",
            "Simon S. Woo"
        ],
        "venue_full": "ACM KDD Workshop on Mining and Learning from Time Series",
        "venue": null,
        "track": "Workshop Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2019,
        "links": {
            "conf": "https://ygeunkim.github.io/publication/kl_poster/"
        },
        "img": "/img/Publications/cad.png",
        "abstract": ""
    },
    {
        "title": "Detecting Anomalies in Space using Multivariate Convolutional LSTM with Mixtures of Probabilistic PCA",
        "authors": [
            "Shahroz Tariq",
            "Sangyup Lee",
            "Youjin Shin",
            "Myeong Shin Lee",
            "Okchul Jung",
            "Daewon Chung",
            "Simon S. Woo"
        ],
        "venue_full": "ACM SIGKDD Conference on Knowledge Discovery and Data Mining",
        "venue": "KDD",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            4
        ],
        "year": 2019,
        "links": {
            "conf": "https://doi.org/10.1145/3292500.3330776"
        },
        "img": "/img/Publications/dais.png",
        "abstract": "Detecting an anomaly is not only important for many terrestrial applications on Earth but also for space applications. Especially, satellite missions are highly risky because unexpected hardware and software failures can occur due to sudden or unforeseen space environment changes.",
        "abstract_ko": "이상 징후를 감지하는 것은 지구상의 많은 지상 응용 프로그램뿐만 아니라 우주 응용 프로그램에서도 중요합니다. 특히 위성 임무는 갑작스럽거나 예기치 않은 우주 환경 변화로 인해 하드웨어와 소프트웨어의 예상치 못한 고장이 발생할 수 있기 때문에 매우 위험합니다."
    },
    {
        "title": "Understanding Users' Risk Perceptions about Personal Health Records Shared on Social Networking Services",
        "authors": [
            "Yuri Son",
            "Geumhwan Cho",
            "Hyoungshick Kim",
            "Simon Woo"
        ],
        "venue_full": "ACM Asia Conference on Computer and Communications Security,",
        "venue": "ASIACCS",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2019,
        "links": {
            "conf": "https://doi.org/10.1145/3321705.3329838"
        },
        "img": null,
        "abstract": "To understand users' risk perceptions about sharing their PHR on SNS, we first conducted a qualitative user study by interviewing 16 participants. Next, we conducted a large-scale online user study with 497 participants in the U.S. to validate our qualitative results from the first study.",
        "abstract_ko": "사용자들이 SNS에 개인 건강 기록(PHR)을 공유할 때의 위험 인식을 이해하기 위해, 본 연구에서는 먼저 16명의 참가자를 인터뷰하여 질적 사용자 연구를 수행했습니다. 다음으로, 미국에서 497명의 참가자를 대상으로 대규모 온라인 사용자 연구를 수행하여 첫 번째 연구에서 얻은 질적 결과를 검증했습니다."
    },
    {
        "title": "You Walk, We Authenticate: Lightweight Seamless Authentication Based on Gait in Wearable IoT Systems",
        "authors": [
            "Pratik Musale",
            "Duin Baek",
            "Nuwan Werellagama",
            "Simon S. Woo",
            "Bong Jun Choi"
        ],
        "venue_full": "IEEE Access",
        "venue": null,
        "track": "SCIE Journal",
        "presentationType": null,
        "Factor": [
            "SCIE IF =",
            3.557
        ],
        "year": 2019,
        "links": {
            "conf": "https://doi.org/10.1109/access.2019.2906663"
        },
        "img": null,
        "abstract": "With a plethora of wearable IoT devices available today, we can easily monitor human activities, many of which are unconscious or subconscious. Interestingly, some of these activities exhibit distinct patterns for each individual, which can provide an opportunity to extract useful features for user authentication.",
        "abstract_ko": "오늘날 다양한 웨어러블 IoT 기기가 사용 가능함에 따라, 본 연구에서는 의식적이지 않거나 무의식적인 많은 인간 활동을 쉽게 모니터링할 수 있습니다. 흥미롭게도, 이러한 활동 중 일부는 각 개인마다 뚜렷한 패턴을 나타내어 사용자 인증을 위한 유용한 특징을 추출할 수 있는 기회를 제공할 수 있습니다."
    },
    {
        "title": "What is in Your Password? Analyzing Memorable and Secure Passwords using a Tensor Decomposition",
        "authors": [
            "Youjin Shin",
            "Simon S. Woo"
        ],
        "venue_full": "ACM Web Conference",
        "venue": "WWW",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            3
        ],
        "year": 2019,
        "links": {
            "conf": "https://doi.org/10.1145/3308558.3313690"
        },
        "img": null,
        "abstract": "In the past, there have been several studies in analyzing password strength and structures. However, there are still many unknown questions to understand what really makes passwords both memorable and strong. In this work, we aim to answer some of these questions by analyzing password dataset through the lenses of data science and machine learning perspectives.",
        "abstract_ko": "과거에 비밀번호의 강도와 구조를 분석하는 여러 연구가 있었습니다. 그러나 비밀번호를 기억하기 쉽고 강력하게 만드는 것이 무엇인지 이해하는 데 여전히 많은 미지의 질문들이 있습니다. 본 연구에서는 데이터 과학과 머신러닝 관점에서 비밀번호 데이터셋을 분석함으로써 이러한 질문 중 일부에 답하고자 합니다."
    },
    {
        "title": "Using Episodic Memory for User Authentication",
        "authors": [
            "Simon S. Woo",
            "Ron Artstein",
            "Elsi Kaiser",
            "Xiao Le",
            "Jelena Mirkovic"
        ],
        "venue_full": "ACM Transactions on Transactions on Privacy and Security ",
        "venue": "TOPS",
        "track": "SCIE Journal",
        "presentationType": null,
        "Factor": [
            "SCIE IF =",
            2.1
        ],
        "year": 2019,
        "links": {
            "conf": "https://doi.org/10.1145/3308992"
        },
        "img": null,
        "abstract": "Passwords are widely  used for user authentication, but they are often difficult for a user to recall, easily cracked by automated programs, and heavily reused. Security questions are also used for secondary authentication. They are more memorable than passwords, because the question serves as a hint to the user, but they are very easily guessed. We propose a new authentication mechanism, called life-experience passwords (LEPs).",
        "abstract_ko": "비밀번호는 사용자 인증을 위해 널리 사용되지만, 사용자가 기억하기 어려운 경우가 많고, 자동화된 프로그램에 의해 쉽게 해킹되며, 반복해서 사용되는 경우가 많습니다. 보안 질문 또한 2차 인증을 위해 사용됩니다. 보안 질문은 사용자가 질문을 힌트로 받아들여 비밀번호보다 더 기억하기 쉽지만, 매우 쉽게 추측될 수 있습니다. 본 연구에서는 생애 경험 비밀번호(LEP, Life-Experience Passwords)라고 불리는 새로운 인증 메커니즘을 제안합니다."
    },
    {
        "title": "GAN is a Friend or Foe? A Framework to Detect Various Fake Face Images",
        "authors": [
            "Shahroz Tariq",
            "Sangyup Lee",
            "Youjin Shin",
            "Ho Young Kim",
            "Simon S. Woo"
        ],
        "venue_full": "ACM SIGAPP Symposium on Applied Computing",
        "venue": "SAC",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2019,
        "links": {},
        "img": "/img/Publications/ganfof.png",
        "abstract": "Creating fake images such as replacing one's face with other person's face has become much easier due to the advancement of sophisticated image editing tools. In addition, Generative Adversarial Networks (GANs) enable creating natural looking human faces. However, fake images can cause many potential problems, as they can be misused to abuse information, hurt people, and generate fake identification.",
        "abstract_ko": "다른 사람의 얼굴로 자신의 얼굴을 바꾸는 등의 가짜 이미지를 만드는 것은 고급 이미지 편집 도구의 발전으로 인해 훨씬 쉬워졌습니다. 또한, 생성적 적대 신경망(GAN)은 자연스러운 인간 얼굴을 생성할 수 있게 합니다. 그러나 가짜 이미지는 정보 남용, 사람에 대한 피해, 가짜 신분 생성 등 다양한 잠재적 문제를 일으킬 수 있습니다."
    },
    {
        "title": "Design and evaluation of 3D CAPTCHAs",
        "authors": [
            "Simon S. Woo"
        ],
        "venue_full": "Computers & Security,",
        "venue": null,
        "track": "SCIE Journal",
        "presentationType": null,
        "Factor": [
            "SCIE IF =",
            3.06
        ],
        "year": 2018,
        "links": {
            "conf": "https://doi.org/10.1016/j.cose.2018.12.006"
        },
        "img": null,
        "abstract": "Most current 2D CAPTCHAs are vulnerable to automated character recognition attacks and the latest attacks can successfully break the 2D text CAPTCHAs at a rate of more than 90%. In this work, we present two novel 3D CAPTCHAs, which are more secure than current 2D text CAPTCHAs against automated character recognition attacks.",
        "abstract_ko": "현재 대부분의 2D CAPTCHA는 자동 문자 인식 공격에 취약하며, 최신 공격은 2D 텍스트 CAPTCHA를 90% 이상의 비율로 성공적으로 깨뜨릴 수 있습니다. 본 연구에서는 자동 문자 인식 공격에 대해 현재 2D 텍스트 CAPTCHA보다 더 안전한 두 가지 새로운 3D CAPTCHA를 제안합니다."
    },
    {
        "title": "Poster: Memorability and Security of Image and Text Integrated Authentication System",
        "authors": [
            "Joonkyu Han and Simon S. Woo"
        ],
        "venue_full": "Annual Computer Security Applications Conference",
        "venue": "ACSAC",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2018,
        "links": {},
        "img": null,
        "abstract": ""
    },
    {
        "title": "Evaluating and Breaking Naver’s Audio CAPTCHA using Off-the-Shelf Speech-to-text APIs",
        "authors": [
            "Soyoon Jeon",
            "Jihye Woo",
            "Ji Won Choi",
            "Hyoungshick Kim",
            "Simon S. Woo"
        ],
        "venue_full": "Conference on Information Security and Cryptography-Winter",
        "venue": "CISC-W",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2018,
        "links": {},
        "img": null,
        "abstract": ""
    },
    {
        "title": "Understanding Users’ Perception on Digital Certificate and Their Web Browser Usages in Korea",
        "authors": [
            "Jihye Woo",
            "Soyoon Jeon",
            "Ji Won Choi",
            "Hyoungshick Kim",
            "Simon S. Woo"
        ],
        "venue_full": "Conference on Information Security and Cryptography-Winter",
        "venue": "CISC-W",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2018,
        "links": {
            "conf": "https://dl.acm.org/doi/10.1007/978-3-030-54455-3_1"
        },
        "img": null,
        "abstract": ""
    },
    {
        "title": "Password typographical error resilience in honey encryption",
        "authors": [
            "Hoyul Choi",
            "Jongmin Jeong",
            "Simon S. Woo",
            "Kyungtae Kang",
            "Junbeom Hur"
        ],
        "venue_full": "Computers & Security",
        "venue": null,
        "track": "SCIE Journal",
        "presentationType": null,
        "Factor": [
            "SCIE IF =",
            2.86
        ],
        "year": 2018,
        "links": {
            "conf": "https://doi.org/10.1016/j.cose.2018.07.020"
        },
        "img": null,
        "abstract": "Honey encryption (HE) is a novel password-based encryption scheme that is secure against brute-force attacks even if users’ passwords have min-entropy. However, in HE, decryption with an incorrect key produces fake messages that appear valid. Hence, password typographical errors may confuse even legitimate users.",
        "abstract_ko": "허니 암호화(HE)는 사용자의 비밀번호가 최소 엔트로피를 가지더라도 무차별 대입 공격에 안전한 새로운 비밀번호 기반 암호화 방식입니다. 그러나 HE에서는 잘못된 키로 복호화하면 유효해 보이는 가짜 메시지가 생성됩니다. 따라서 비밀번호 입력 오류는 합법적인 사용자조차 혼동시킬 수 있습니다."
    },
    {
        "title": "Poster: Adversarial Product Review Generation with Word Replacements",
        "authors": [
            "Yimin Zhu",
            "Simon S. Woo"
        ],
        "venue_full": "ACM Conference on Computer and Communications Security ",
        "venue": "CCS",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2018,
        "links": {
            "conf": "https://doi.org/10.1145/3243734.3278492"
        },
        "img": "/img/Publications/aprg.png",
        "abstract": "Machine learning algorithms including Deep Neural Networks (DNNs) have shown great success in many different areas. However, they are frequently susceptible to adversarial examples, which are maliciously crafted inputs to fool machine learning classifiers. On the other hand, humans cannot distinguish between non-adversarial and adversarial inputs.",
        "abstract_ko": "딥 신경망(DNN)을 포함한 머신 러닝 알고리즘은 많은 다양한 영역에서 큰 성공을 보여주었습니다. 그러나 이들은 종종 머신 러닝 분류기를 속이기 위해 악의적으로 제작된 입력인 적대적 예제에 취약합니다. 반면, 인간은 비적대적 입력과 적대적 입력을 구별할 수 없습니다."
    },
    {
        "title": "Detecting In-vehicle CAN Message Attacks Using Heuristics and RNNs",
        "authors": [
            "Shahroz Tariq",
            "Sangyup Lee",
            "Huy Kang Kim",
            "Simon S. Woo"
        ],
        "venue_full": "International workshop on Information & Operational Technology ",
        "venue": "IT & OT",
        "track": "Workshop Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2018,
        "links": {
            "conf": "https://doi.org/10.1007/978-3-030-12085-6_4"
        },
        "img": "/img/Publications/dican.png",
        "abstract": "In vehicle communications, due to simplicity and reliability, a Controller Area Network (CAN) bus is used as the de facto standard to provide serial communication between Electronic Control Units (ECUs). However, prior research reveals that several network-level attacks can be performed on the CAN bus due to the lack of underlying security mechanism.",
        "abstract_ko": "차량 통신에서 단순성과 신뢰성 때문에 전자 제어 장치(ECU) 간의 직렬 통신을 제공하기 위해 컨트롤러 영역 네트워크(CAN) 버스가 사실상의 표준으로 사용됩니다. 그러나 이전 연구에 따르면, 기본 보안 메커니즘이 없기 때문에 CAN 버스에서 여러 네트워크 수준 공격이 수행될 수 있음이 밝혀졌습니다."
    },
    {
        "title": "Detecting Both Machine and Human Created Fake Face Images In the Wild",
        "authors": [
            "Shahroz Tariq",
            "Sangyup Lee",
            "Hoyoung Kim",
            "Youjin Shin",
            "Simon S. Woo"
        ],
        "venue_full": "CCS Workshop on Multimedia Privacy and Security",
        "venue": "MPS",
        "track": "Workshop Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2018,
        "links": {
            "conf": "https://doi.org/10.1145/3267357.3267367"
        },
        "img": "/img/Publications/dbmh.png",
        "abstract": "Due to the significant advancements in image processing and machine learning algorithms, it is much easier to create, edit, and produce high quality images. However, attackers can maliciously use these tools to create legitimate looking but fake images to harm others, bypass image detection algorithms, or fool image recognition classifiers.",
        "abstract_ko": "이미지 처리 및 기계 학습 알고리즘의 상당한 발전으로 인해 고품질 이미지를 생성, 편집 및 제작하는 것이 훨씬 쉬워졌습니다. 그러나 공격자들은 이러한 도구를 악의적으로 사용하여 합법적으로 보이지만 가짜 이미지를 만들어 다른 사람을 해치거나 이미지 탐지 알고리즘을 우회하거나 이미지 인식 분류기를 속일 수 있습니다."
    },
    {
        "title": "GuidedPass: Guiding users to create both more memorable and strong passwords",
        "authors": [
            "Simon S. Woo",
            "and Jelena Mirkovic"
        ],
        "venue_full": "International Symposium on Research in Attacks, Intrusions and Defenses",
        "venue": "RAID",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            2
        ],
        "year": 2018,
        "links": {
            "conf": "https://www.researchgate.net/publication/327469039_GuidedPass_Helping_Users_to_Create_Strong_and_Memorable_Passwords_21st_International_Symposium_RAID_2018_Heraklion_Crete_Greece_September_10-12_2018_Proceedings"
        },
        "img": null,
        "abstract": "Password meters and policies are currently the only tools helping users to create stronger passwords. However, such tools often do not provide consistent or useful feedback to users, and their suggestions may decrease memorability of resulting passwords.",
        "abstract_ko": "비밀번호 측정기와 정책은 현재 사용자가 더 강력한 비밀번호를 만들도록 돕는 유일한 도구입니다. 그러나 이러한 도구는 종종 사용자에게 일관되거나 유용한 피드백을 제공하지 않으며, 그들의 제안은 결과 비밀번호의 기억력을 저하시킬 수 있습니다."
    },
    {
        "title": "Poster: Leveraging Semantic Transformation to Investigate Password Habits and Their Causes",
        "authors": [
            "Ameya Hanamsagar",
            "Simon S. Woo",
            "Chris Kanich",
            "Jelena Mirkovic"
        ],
        "venue_full": "Usenix Symposium on Usable Privacy and Security",
        "venue": "SOUPS",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2018,
        "links": {
            "conf": "https://doi.org/10.1145/3173574.3174144"
        },
        "img": null,
        "abstract": "It is no secret that users have difficulty choosing and remembering strong passwords, especially when asked to choose different passwords across different accounts. While research has shed light on password weaknesses and reuse, less is known about user motivations for following bad password practices.",
        "abstract_ko": "사용자들이 강력한 비밀번호를 선택하고 기억하는 데 어려움을 겪는다는 것은 비밀이 아니다. 특히 서로 다른 계정마다 다른 비밀번호를 선택하라는 요청을 받을 때 더욱 그렇다. 연구는 비밀번호의 약점과 재사용에 대해 밝혀왔지만, 사용자가 나쁜 비밀번호 관행을 따르는 동기에 대해서는 알려진 바가 적다."
    },
    {
        "title": "When George Clooney Is Not George Clooney: Using GenAttack to Deceive Amazon’s and Naver’s Celebrity Recognition APIs",
        "authors": [
            "Keeyoung Kim",
            "Simon S. Woo"
        ],
        "venue_full": "International Conference on Information Security and Privacy Protection",
        "venue": "IFIP SEC",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            1
        ],
        "year": 2018,
        "links": {
            "conf": "https://doi.org/10.1007/978-3-319-99828-2_25"
        },
        "img": null,
        "abstract": "In recent years, significant advancements have been made in detecting and recognizing contents of images using Deep Neural Networks (DNNs). As a result, many companies offer image recognition APIs for use in diverse applications. However, image classification algorithms trained with DNNs can misclassify adversarial examples, posing a significant threat to critical applications.",
        "abstract_ko": "최근 몇 년 동안, 딥 뉴럴 네트워크(DNN)를 사용하여 이미지의 내용을 탐지하고 인식하는 데 있어 상당한 발전이 이루어졌다. 그 결과, 많은 회사들이 다양한 애플리케이션에서 사용할 수 있는 이미지 인식 API를 제공하고 있다. 그러나 DNN으로 학습된 이미지 분류 알고리즘은 적대적 예제를 잘못 분류할 수 있으며, 이는 중요한 애플리케이션에 상당한 위협이 된다."
    },
    {
        "title": "Generating Adversarial Images using Genetic Algorithm",
        "authors": [
            "Keeyoung Kim and Simon S. Woo"
        ],
        "venue_full": "IEEE/CVF CVPR Workshop on The Bright and Dark Sides of Computer Vision: Challenges and Opportunities for Privacy and Security",
        "venue": "CV-COPS",
        "track": "Workshop Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2018,
        "links": {
            "conf": "https://www.researchgate.net/publication/339840424_Generating_Adversarial_Images_using_Genetic_Algorithm"
        },
        "img": null,
        "abstract": ""
    },
    {
        "title": "Poster: I can’t hear this because I am human: A novel design of audio CAPTCHA system",
        "authors": [
            "Jusop Choi",
            "Taekkyung Oh",
            "William Aiken",
            "Simon S. Woo",
            "Hyoungshick Kim"
        ],
        "venue_full": "ACM Asia Conference on Computer and Communications Security",
        "venue": "ASIACCS",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2018,
        "links": {
            "conf": "https://dl.acm.org/doi/10.1145/3196494.3201590"
        },
        "img": null,
        "abstract": "A CAPTCHA (Completely Automated Public Turing test to tell Computers and Humans Apart) provides the first line of defense to protect websites against bots and automatic crawling. Recently, audio-based CAPTCHA systems are started to use for visually impaired people in many internet services.",
        "abstract_ko": "CAPTCHA(완전히 자동화된 공개 튜링 테스트로 컴퓨터와 사람을 구별)는 웹사이트를 봇과 자동 크롤링으로부터 보호하는 첫 번째 방어선 역할을 합니다. 최근에는 시각 장애인을 위해 많은 인터넷 서비스에서 오디오 기반 CAPTCHA 시스템이 사용되기 시작했습니다."
    },
    {
        "title": "Benefits and Challenges of Long Term Self-Tracking to Prevent Lonely Deaths and Detect Signs of Life",
        "authors": [
            "Simon S. Woo"
        ],
        "venue_full": "Conference on Human Factors in Computing Systems",
        "venue": "CHI",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2018,
        "links": {},
        "img": null,
        "abstract": "We explore the benefit of a new long-term self-tracking application for the elderly population. In the last few years, there has been a significant increase in number of people dying alone or remaining undiscovered for a long period time in Korea and Japan.",
        "abstract_ko": "본 연구에서는 노인 인구를 위한 새로운 장기 자기 추적 애플리케이션의 이점을 탐구합니다. 지난 몇 년 동안 한국과 일본에서 혼자 죽거나 오랜 기간 동안 발견되지 않은 채로 있는 사람들의 수가 크게 증가했습니다."
    },
    {
        "title": "Leveraging Semantic Transformation to Investigate Password Habits and Their Causes",
        "authors": [
            "Ameya Hanamsagar",
            "Simon S. Woo",
            "Chris Kanich",
            "Jelena Mirkovic"
        ],
        "venue_full": "Conference on Human Factors in Computing Systems",
        "venue": "CHI",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            4
        ],
        "year": 2018,
        "links": {
            "conf": "https://doi.org/10.1145/3173574.3174144"
        },
        "img": null,
        "abstract": "It is no secret that users have difficulty choosing and remembering strong passwords, especially when asked to choose different passwords across different accounts. While research has shed light on password weaknesses and reuse, less is known about user motivations for following bad password practices.",
        "abstract_ko": "사용자들이 강력한 비밀번호를 선택하고 기억하는 데 어려움을 겪는다는 것은 비밀이 아니다. 특히 서로 다른 계정마다 다른 비밀번호를 선택하라는 요청을 받을 때 더욱 그렇다. 연구는 비밀번호의 약점과 재사용에 대해 밝혀왔지만, 사용자가 나쁜 비밀번호 관행을 따르는 동기에 대해서는 알려진 바가 적다."
    },
    {
        "title": "Memorablity and Security of Different Passphrase Generation Methods",
        "authors": [
            "Simon S. Woo",
            "Jelena Mirković"
        ],
        "venue_full": "Korea Institute of Information Security and Cryptology",
        "venue": "KIISC",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2018,
        "links": {
            "conf": "https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE07399563"
        },
        "img": null,
        "abstract": "Passphrases are considered to be more secure than passwords since they are longer than passwords. However, users choose predictable word patterns and common phrases to make passphrases memorable, which in turn significantly lowers security. While random passphrases appear to be stronger, surprisingly they are neither strong nor memorable. In this paper, we present the latest passphrase research, and introduce a new way to create a passphrase using mnemonics. Passphrase generation using mnemonics shows promising results in improving both strength and memorability.",
        "abstract_ko": "패스프레이즈는 비밀번호보다 길기 때문에 비밀번호보다 더 안전한 것으로 간주됩니다. 그러나 사용자는 패스프레이즈를 기억하기 쉽게 만들기 위해 예측 가능한 단어 패턴과 흔한 문구를 선택하는데, 이는 결과적으로 보안을 크게 낮춥니다. 무작위 패스프레이즈는 강력해 보이지만, 놀랍게도 강하지도 않고 기억하기도 어렵습니다. 본 논문에서는 최신 패스프레이즈 연구를 제시하고, 기억법을 이용하여 패스프레이즈를 생성하는 새로운 방법을 소개합니다. 기억법을 이용한 패스프레이즈 생성은 강도와 기억력을 모두 향상시키는 유망한 결과를 보여줍니다."
    },
    {
        "title": "Survey on Current Password Composition Policies",
        "authors": [
            "Simon S. Woo",
            "Kyeong Joo Jung",
            "Bong Jun Choi"
        ],
        "venue_full": "Korea Institute of Information Security and Cryptology",
        "venue": "KIISC",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2018,
        "links": {
            "conf": "https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE07399565"
        },
        "img": null,
        "abstract": "Textual passwords are widely used for accessing online accounts. Despite the problems of current textual passwords, research has shown that there is no other strong alternatives for a textual password due to its simplicity.",
        "abstract_ko": "텍스트 기반 비밀번호는 온라인 계정에 접근하는 데 널리 사용됩니다. 현재 텍스트 비밀번호의 문제점에도 불구하고, 연구에 따르면 그 단순성 때문에 텍스트 비밀번호를 대체할 강력한 다른 대안은 없다고 합니다."
    },
    {
        "title": "Lightweight Authentication for IoT",
        "authors": [
            "Pratik Musale",
            "Duin Baek",
            "Simon S. Woo",
            "Bong Jun Choi"
        ],
        "venue_full": "ACM Conference on Emerging Networking Experiments and Technologies",
        "venue": "CoNEXT",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2017,
        "links": {},
        "img": null,
        "abstract": ""
    },
    {
        "title": "Toward Machine Generated Passwords",
        "authors": [
            "Simon S. Woo",
            "Wenzhi Li",
            "Hyeran Jeon"
        ],
        "venue_full": "Conference on Information Security and Cryptography-Winter",
        "venue": "CISC-W",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2017,
        "links": {},
        "img": null,
        "abstract": ""
    },
    {
        "title": "Computer Vision Attacks against 3D CAPTCHAs",
        "authors": [
            "Simon S. Woo"
        ],
        "venue_full": "IEEE/CVF CVPR Workshop on The Bright and Dark Sides of Computer Vision: Challenges and Opportunities for Privacy and Security",
        "venue": "CV-COPS",
        "track": "Workshop Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2017,
        "links": {},
        "img": null,
        "abstract": ""
    },
    {
        "title": "Life-experience passwords (LEPs)",
        "authors": [
            "Simon Woo",
            "Elsi Kaiser",
            "Ron Artstein",
            "Jelena Mirkovic"
        ],
        "venue_full": "Usenix Symposium on Usable Privacy and Security",
        "venue": "SOUPS",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2017,
        "links": {
            "conf": "https://doi.org/10.1145/2991079.2991107"
        },
        "img": null,
        "abstract": null
    },
    {
        "title": "Improving Recall and Security of Passphrases Through Use of Mnemonics",
        "authors": [
            "Simon S. Woo",
            "Jelena Mirkovic"
        ],
        "venue_full": "International Conference on Passwords ",
        "venue": "Password",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2016,
        "links": {},
        "img": null,
        "abstract": "Passphrases are regarded as more secure than passwords because they are longer than passwords. Yet, users use predictable word patterns and common phrases to make passphrases memorable, which in turn significantly lowers security.",
        "abstract_ko": "암호 구문(passphrase)은 비밀번호보다 길기 때문에 더 안전하다고 여겨집니다. 하지만 사용자는 암호 구문을 기억하기 쉽게 하기 위해 예측 가능한 단어 패턴과 일반적인 문구를 사용하며, 이는 결과적으로 보안을 크게 낮춥니다."
    },
    {
        "title": "Life-experience passwords (LEPs)",
        "authors": [
            "Simon Woo",
            "Elsi Kaiser",
            "Ron Artstein",
            "Jelena Mirkovic"
        ],
        "venue_full": "Annual Conference on Computer Security Applications",
        "venue": "ACSAC",
        "track": "Main Paper",
        "presentationType": null,
        "Factor": [
            "BK Computer Science IF=",
            2
        ],
        "year": 2016,
        "links": {
            "conf": "https://doi.org/10.1145/2991079.2991107"
        },
        "img": null,
        "abstract": "Passwords are widely used for user authentication, but they are often difficult for a user to recall, easily cracked by automated programs and heavily reused. Security questions are also used for secondary authentication. They are more memorable than passwords, but are very easily guessed. We propose a new authentication mechanism, called life-experience passwords (LEPs), which outperforms passwords and security questions, both at recall and at security.",
        "abstract_ko": "비밀번호는 사용자 인증에 널리 사용되지만 사용자가 기억하기 어려운 경우가 많고, 자동화된 프로그램에 의해 쉽게 해킹되며, 자주 재사용됩니다. 보안 질문도 2차 인증에 사용됩니다. 보안 질문은 비밀번호보다 기억하기 쉽지만, 매우 쉽게 추측될 수 있습니다. 본 연구에서는 기억력과 보안 측면 모두에서 비밀번호와 보안 질문보다 우수한 새로운 인증 메커니즘인 생활 경험 비밀번호(LEP)를 제안합니다."
    },
    {
        "title": "Good Automatic Authentication Question Generation",
        "authors": [
            "Simon Woo",
            "Zuyao Li",
            "Jelena Mirkovic"
        ],
        "venue_full": "International Natural Language Generation conference",
        "venue": "INLG",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2016,
        "links": {
            "conf": "https://doi.org/10.18653/v1/w16-6632"
        },
        "img": null,
        "abstract": "We explore a novel application of Question Generation (QG) for authentication use, where questions are widely used to verify user identity for online accounts. In our approach, we prompt users to provide a few sentences about their personal life events.",
        "abstract_ko": "본 연구에서는 온라인 계정의 사용자 신원을 확인하기 위해 질문이 널리 사용되는 인증 용도로 질문 생성(QG)의 새로운 응용을 탐구합니다. 제안 접근에서는 사용자에게 개인 생활 사건에 대한 몇 문장을 제공하도록 요청합니다."
    },
    {
        "title": "Exploration of 3D Texture and Projection for New CAPTCHA Design",
        "authors": [
            "Simon S. Woo",
            "Jingul Kim",
            "Duoduo Yu",
            "Beomjun Kim"
        ],
        "venue_full": "World Conference on Information Security Applications",
        "venue": "WISA",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2016,
        "links": {
            "conf": "https://doi.org/10.1007/978-3-319-56549-1_30"
        },
        "img": null,
        "abstract": "Most of current text-based CAPTCHAs have been shown to be easily breakable. In this work, we present two novel 3D CAPTCHA designs, which are more secure than current 2D text CAPTCHAs, against automated attacks. Our approach is to display CAPTCHA characters onto 3D objects to improve security.",
        "abstract_ko": "현존하는 대부분의 텍스트 기반 CAPTCHA는 쉽게 해킹될 수 있음이 입증되었습니다. 본 연구에서는 자동화된 공격에 대해 현재의 2D 텍스트 CAPTCHA보다 더 안전한 두 가지 새로운 3D CAPTCHA 디자인을 제시합니다. 제안 접근은 CAPTCHA 문자를 3D 객체에 표시하여 보안을 향상시키는 것입니다."
    },
    {
        "title": "Empirical Data Analysis on User Privacy and Sentiment in Personal Blogs",
        "authors": [
            "Simon S. Woo",
            "Harsha Manjunatha"
        ],
        "venue_full": " ACM SIGIR Workshop on Privacy-Preserving Information Retrieval",
        "venue": "PPIR",
        "track": "Workshop Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2015,
        "links": {},
        "img": null,
        "abstract": ""
    },
    {
        "title": "Engaging Novices in Cybersecurity Competitions: A Vision and Lessons Learned at ACM Tapia 1025",
        "authors": [
            "Jelena Mirković",
            "Aimee Tabor",
            "Simon S. Woo",
            "Portia Pusey"
        ],
        "venue_full": "USENIX Summit on Gaming, Games, and Gamification in Security Education",
        "venue": "3GSE",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2015,
        "links": {
            "conf": "https://steel.isi.edu/members/simonwoo/pub/pir.pdf"
        },
        "img": null,
        "abstract": "Cybersecurity competitions are popular tools for attracting students to cybersecurity field. Yet, many competitions require extensive preparation, strong coding skills and solid background knowledge, not just in security, but also in system administration, networking and operating systems. As such, competitions may discourage novices that lack in one of these required areas. In this paper we discuss our experience in using Class Capture-theFlag Exercises (CCTFs) to bridge this gap in classes, and in 2015 ACM Richard Tapia Security workshop. We recount lessons learned and map a way forward, towards collaborative, more structured cybersecurity competitions that better support and engage novices, and offer a positive learning experience to all.",
        "abstract_ko": "사이버 보안 대회는 학생들을 사이버 보안 분야로 유도하기 위한 인기 있는 도구입니다. 그러나 많은 대회는 보안뿐만 아니라 시스템 관리, 네트워킹, 운영 체제 분야에서도 폭넓은 배경 지식과 강력한 코딩 능력, 광범위한 준비를 요구합니다. 따라서 이러한 대회는 한 분야라도 부족한 초보자들을 낙담시키는 요인이 될 수 있습니다. 본 논문에서는 수업에서 이러한 격차를 메우기 위해 Class Capture-the-Flag Exercises(CCTF)를 사용한 경험과 2015년 ACM Richard Tapia Security 워크숍에서의 경험을 논의합니다. 본 연구에서는 배운 교훈을 되짚고, 초보자를 더 잘 지원하고 참여시킬 수 있으며, 모두에게 긍정적인 학습 경험을 제공하는 협력적이고 구조화된 사이버 보안 대회로 나아가기 위한 방법을 제시합니다."
    },
    {
        "title": "Optimal application allocation on multiple public clouds",
        "authors": [
            "Simon S. Woo",
            "Jelena Mirkovic"
        ],
        "venue_full": "Computer Networks,",
        "venue": null,
        "track": "SCIE Journal",
        "presentationType": null,
        "Factor": [
            "SCIE IF =",
            2.52
        ],
        "year": 2014,
        "links": {
            "conf": "https://doi.org/10.1016/j.comnet.2013.12.001"
        },
        "img": null,
        "abstract": "Cloud computing customers currently host all of their application components at a single cloud provider. Single-provider hosting eases maintenance tasks, but reduces resilience to failures. Recent research (Li et al., 2010) also shows that providers offers differ greatly in erformance and price, and no single provider is the best in all service categories.",
        "abstract_ko": "클라우드 컴퓨팅 고객은 현재 모든 애플리케이션 구성 요소를 단일 클라우드 제공업체에 호스팅하고 있습니다. 단일 제공업체 호스팅은 유지 관리 작업을 용이하게 하지만, 장애에 대한 복원력을 감소시킵니다. 최근 연구(Li et al., 2010)에 따르면 제공업체 간 성능과 가격이 크게 다르며, 모든 서비스 범주에서 최상인 단일 제공업체는 없다고 합니다."
    },
    {
        "title": "Life-Experice Passwords",
        "authors": [
            "Simon S. Woo",
            "Jelena Mikovic",
            "Ron Artstein",
            "Elsi Kaiser"
        ],
        "venue_full": "Who are you?! Adventures in Authentication: ACM SOUPS-WAY Workshop",
        "venue": "WAY",
        "track": "Workshop Paper",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2014,
        "links": {},
        "img": null,
        "abstract": "Passwords are widely used for user authentication, but they are often difficult for a user to recall, easily cracked by automated programs and heavily reused. Security questions are also used for secondary authentication. They are more memorable than passwords, but are very easily guessed. We propose a new authentication mechanism, called life-experience passwords (LEPs), which outperforms passwords and security questions, both at recall and at security.",
        "abstract_ko": "비밀번호는 사용자 인증에 널리 사용되지만 사용자가 기억하기 어려운 경우가 많고, 자동화된 프로그램에 의해 쉽게 해킹되며, 자주 재사용됩니다. 보안 질문도 2차 인증에 사용됩니다. 보안 질문은 비밀번호보다 기억하기 쉽지만, 매우 쉽게 추측될 수 있습니다. 본 연구에서는 기억력과 보안 측면 모두에서 비밀번호와 보안 질문보다 우수한 새로운 인증 메커니즘인 생활 경험 비밀번호(LEP)를 제안합니다."
    },
    {
        "title": "Poster: 3DOC: 3D Object CAPTCHA",
        "authors": [
            "Simon S. Woo",
            "B. Kim"
        ],
        "venue_full": "Information Sciences Institute Graduate Student Symposium ",
        "venue": "ISI-GSS",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2014,
        "links": {},
        "img": null,
        "abstract": "Current 2D CAPTCHA mechanisms can be easily defeated by character recognition and segmentation attacks by automated machines. Recently, 3D CAPTCHA schemes have been proposed to overcome the weaknesses of 2D CAPTCHA for a few websites.",
        "abstract_ko": "현재 2D CAPTCHA 메커니즘은 자동화된 기계에 의한 문자 인식 및 분할 공격으로 쉽게 뚫릴 수 있습니다. 최근 몇몇 웹사이트를 위해 2D CAPTCHA의 약점을 극복하기 위해 3D CAPTCHA 방식이 제안되었습니다."
    },
    {
        "title": "3DOC: 3D Object CAPTCHA",
        "authors": [
            "Simon S. Woo",
            "B. Kim"
        ],
        "venue_full": "ACM Web Conference",
        "venue": "WWW",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2014,
        "links": {},
        "img": null,
        "abstract": "Current 2D CAPTCHA mechanisms can be easily defeated by character recognition and segmentation attacks by automated machines. Recently, 3D CAPTCHA schemes have been proposed to overcome the weaknesses of 2D CAPTCHA for a few websites.",
        "abstract_ko": "현재 2D CAPTCHA 메커니즘은 자동화된 기계에 의한 문자 인식 및 분할 공격으로 쉽게 뚫릴 수 있습니다. 최근 몇몇 웹사이트를 위해 2D CAPTCHA의 약점을 극복하기 위해 3D CAPTCHA 방식이 제안되었습니다."
    },
    {
        "title": "Life Experience-Passwords",
        "authors": [
            "Simon S. Woo",
            "Jelena Mirkovic",
            "Elsi Kaiser"
        ],
        "venue_full": "Network and Distributed System Security",
        "venue": "NDSS",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2014,
        "links": {},
        "img": null,
        "abstract": ""
    },
    {
        "title": "Analysis of Proximity-1 Space Link Interleaved Time Synchronization Protocol",
        "authors": [
            "Simon. S. Woo"
        ],
        "venue_full": "IEEE Global Telecommunications Conference",
        "venue": "GLOBECOM",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2011,
        "links": {
            "conf": "https://doi.org/10.1109/glocom.2011.6134144"
        },
        "img": null,
        "abstract": "To synchronize clocks between spacecraft in proximity, the Proximity-1 Space Link Interleaved Time Synchronization (PITS) Protocol has been proposed. PITS is based on the NTP Interleaved On-Wire Protocol and is capable of being adapted and integrated into CCSDS Proximity-1 Space Link with minimal modifications.",
        "abstract_ko": "근접한 우주선 간 시계를 동기화하기 위해 Proximity-1 우주 링크 인터리브드 시각 동기화(PITS) 프로토콜이 제안되었습니다. PITS는 NTP 인터리브드 온-와이어 프로토콜을 기반으로 하며, 최소한의 수정으로 CCSDS Proximity-1 우주 링크에 적응 및 통합될 수 있습니다."
    },
    {
        "title": "MACHETE: A Protocol Evaluation Tool for Space-Based Networking Architecture and Simulation",
        "authors": [
            "Esther Jennings",
            "John Segui",
            "Simon S. Woo"
        ],
        "venue_full": "AIAA International Conference on Space Operations",
        "venue": "SpaceOps",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2010,
        "links": {
            "conf": "https://doi.org/10.2514/6.2010-2260"
        },
        "img": null,
        "abstract": "Space Exploration missions requires the design and implementation of space networking that differs from terrestrial networks. In a space networking architecture, interplanetary communication protocols need to be designed, validated and evaluated carefully to support different mission requirements.",
        "abstract_ko": "우주 탐사 임무는 지상 네트워크와 다른 우주 네트워킹의 설계 및 구현을 요구합니다. 우주 네트워킹 아키텍처에서는 다양한 임무 요구사항을 지원하기 위해 행성 간 통신 프로토콜을 설계, 검증 및 평가해야 합니다."
    },
    {
        "title": "Space Network Time Distribution and Synchronization  Protocol Development  for Mars Proximity Link",
        "authors": [
            "Simon Woo",
            "Jay Gao",
            "David Mills"
        ],
        "venue_full": "AIAA International Conference on Space Operations",
        "venue": "SpaceOps",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2010,
        "links": {
            "conf": "https://doi.org/10.2514/6.2010-2360"
        },
        "img": null,
        "abstract": "Time distribution and synchronization in deep space network are challenging due to long propagation delays, spacecraft movements, and relativistic effects. Further, the Network Time Protocol (NTP) designed for terrestrial networks may not work properly in space",
        "abstract_ko": "깊은 우주 네트워크에서 시간 분배와 동기화는 긴 전파 지연, 우주선 이동 및 상대론적 효과로 인해 어려움을 겪습니다. 또한, 지상 네트워크를 위해 설계된 네트워크 시간 프로토콜(NTP)은 우주에서 제대로 작동하지 않을 수 있습니다."
    },
    {
        "title": "Space Communications and Navigation (SCaN) Network Simulation Tool Development and Its Use Cases",
        "authors": [
            "Esther Jennings",
            "Richard Borgen",
            "Sam Nguyen",
            "John Segui",
            "Tudor Stoenescu",
            "Shin-Ywan Wang",
            "Simon Woo",
            "Brian Barritt",
            "Christine Chevalier",
            "Wesley Eddy"
        ],
        "venue_full": "AIAA Modeling and Simulation Technologies",
        "venue": "MST",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2009,
        "links": {
            "conf": "https://doi.org/10.2514/6.2009-6036"
        },
        "img": null,
        "abstract": "In this work, we focus on the development of a simulation tool to assist in analysis of current and future (proposed) network architectures for NASA. Specifically, the Space Communications and Navigation (SCaN) Network is being architected as an integrated set of new assets\n                                and a federation of upgraded legacy systems. The SCaN architecture for the initial\n                                missions for returning humans to the moon and beyond will include the Space Network (SN)\n                                and the Near-Earth Network (NEN).",
        "abstract_ko": "본 연구에서는 NASA의 현재 및 미래(제안된) 네트워크 아키텍처 분석을 지원하기 위한 시뮬레이션 도구 개발에 중점을 둡니다. 구체적으로, 우주 통신 및 항법(SCaN) 네트워크는 새로운 자산의 통합 세트와 업그레이드된 기존 시스템의 연합으로 설계되고 있습니다. 초기 달 유인 탐사 및 그 이후의 임무를 위한 SCaN 아키텍처에는 우주 네트워크(SN)와 근지구 네트워크(NEN)가 포함될 것입니다."
    },
    {
        "title": "Efficient File Sharing by Multicast - P2P Protocol using Network Coding and Rank Based Peer Selection",
        "authors": [
            "Simon S. Woo",
            "Tudor M. Stoenescu"
        ],
        "venue_full": "IEEE Vehicular Technology Conference",
        "venue": "VTC",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2009,
        "links": {
            "conf": "https://doi.org/10.1109/vetecs.2009.5073526"
        },
        "img": null,
        "abstract": "In this work, we consider information dissemination and sharing in a highly dynamic peer-to-peer (P2P) communication network. In particular, we explore a network coding technique for transmission and a rank based peer selection (RBPS) method for network formation.",
        "abstract_ko": "본 연구에서는 매우 동적인 피어 투 피어(P2P) 통신 네트워크에서 정보 전파 및 공유를 고려합니다. 특히, 본 연구에서는 전송을 위한 네트워크 코딩 기법과 네트워크 형성을 위한 순위 기반 피어 선택(RBPS) 방법을 탐구합니다."
    },
    {
        "title": "Interfacing Space Network Communications and Navigation Network Simulation with Distributed System Integration Laboratories (DSIL)",
        "authors": [
            "Esther Jennings",
            "Sam Nguyen",
            "Shin-Ywan Wang",
            "Simon Woo"
        ],
        "venue_full": "AIAA International Conference on Space Operations",
        "venue": "SpaceOps",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2008,
        "links": {
            "conf": "https://doi.org/10.2514/6.2008-3462"
        },
        "img": null,
        "abstract": "NASA’s planned Lunar missions will involve multiple NASA centers where each participating center has a specific role and specialization. In this vision, the Constellation program (CxP)’s Distributed System Integration Laboratories (DSIL) architecture consist of multiple System Integration Labs (SILs), with simulators, emulators, testlabs and control centers interacting with each other over a broadband network to perform test and verification for mission scenarios.",
        "abstract_ko": "NASA의 계획된 달 탐사 임무는 각각의 참여 센터가 특정 역할과 전문성을 갖는 여러 NASA 센터가 참여할 것입니다. 이 비전에서, 컨스텔레이션 프로그램(CxP)의 분산 시스템 통합 연구소(DSIL) 아키텍처는 여러 시스템 통합 연구소(SIL)로 구성되며, 시뮬레이터, 에뮬레이터, 테스트 랩 및 관제 센터가 광대역 네트워크를 통해 상호 작용하여 임무 시나리오에 대한 테스트와 검증을 수행합니다."
    },
    {
        "title": "Prioritized LT codes",
        "authors": [
            "Simon S. Woo",
            "Michael K. Cheng"
        ],
        "venue_full": "IEEE Annual Conference on Information Sciences and Systems",
        "venue": "CISS",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2008,
        "links": {
            "conf": "https://doi.org/10.1109/ciss.2008.4558589"
        },
        "img": null,
        "abstract": "It is common in data transmissions that some information is more important than others. This is especially true in space communications where mission critical information or science data are high priority. In this work, we propose a simple yet constructive scheme to send high priority data reliably and efficiently using Luby transform (LT) codes.",
        "abstract_ko": "데이터 전송에서는 일부 정보가 다른 정보보다 더 중요한 경우가 흔합니다. 이는 우주 통신에서 특히 중요한데, 임무에 중요한 정보나 과학 데이터가 높은 우선순위를 가지기 때문입니다. 본 연구에서는 Luby 변환(LT) 코드를 사용하여 높은 우선순위 데이터를 신뢰성 있게 효율적으로 전송하기 위한 간단하면서도 구조적인 방안을 제안합니다."
    },
    {
        "title": "A Simulation Tool for ASCTA Microsensor Network Architecture",
        "authors": [
            "Simon Woo",
            "Esther Jennings",
            "Loren Clare"
        ],
        "venue_full": "IEEE Aerospace Conference",
        "venue": " IEEE Aerospace Conf.",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2008,
        "links": {
            "conf": "https://doi.org/10.1109/aero.2008.4526447"
        },
        "img": null,
        "abstract": "Advances in technology have made the large-scale deployment of low-cost networked sensors possible for situational awareness. We developed a Simulation Tool for the Advanced Sensors Collaborative Technology Alliance (ASCTA) Microsensor Network Architecture (STAMINA) to evaluate the performance of networked sensor systems.",
        "abstract_ko": "기술의 발전으로 상황 인식을 위해 저비용 네트워크 센서를 대규모로 배치하는 것이 가능해졌습니다. 본 연구에서는 네트워크 센서 시스템의 성능을 평가하기 위해 고급 센서 협력 기술 동맹(ASCTA) 마이크로센서 네트워크 아키텍처(STAMINA)를 위한 시뮬레이션 도구를 개발했습니다."
    },
    {
        "title": "Improved In Situ Communications Using Network Coding",
        "authors": [
            "Mike Cheng",
            "Simon S. Woo",
            "Kar-Ming Cheung",
            "Sam Dolinar",
            "Jon Hamkins"
        ],
        "venue_full": "Research and Technology Development",
        "venue": "R&TD",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2007,
        "links": {},
        "img": null,
        "abstract": "Advances in technology have made the large-scale deployment of low-cost networked sensors possible for situational awareness. We developed a Simulation Tool for the Advanced Sensors Collaborative Technology Alliance (ASCTA) Microsensor Network Architecture (STAMINA) to evaluate the performance of networked sensor systems.",
        "abstract_ko": "기술의 발전으로 상황 인식을 위해 저비용 네트워크 센서를 대규모로 배치하는 것이 가능해졌습니다. 본 연구에서는 네트워크 센서 시스템의 성능을 평가하기 위해 고급 센서 협력 기술 동맹(ASCTA) 마이크로센서 네트워크 아키텍처(STAMINA)를 위한 시뮬레이션 도구를 개발했습니다."
    },
    {
        "title": "CFDP Performance Over Weather-Dependent Ka-Band Channel",
        "authors": [
            "Simon S. Woo",
            "Jay Gao"
        ],
        "venue_full": "AIAA International Conference on Space Operations",
        "venue": "SpaceOps",
        "track": "Etc.",
        "presentationType": null,
        "Factor": [
            "",
            0
        ],
        "year": 2006,
        "links": {
            "conf": "https://doi.org/10.2514/6.2006-5968"
        },
        "img": null,
        "abstract": "This study presentsan analysis of the delay performance of the CCSDS File Delivery Protocol (CFDP) over weather-dependent Ka-band channel. The Ka-band channel condition is determined by the strength of the atmospheric noise temperature, which is weather dependent.",
        "abstract_ko": "본 연구는 날씨에 따라 달라지는 Ka-대역 채널에서 CCSDS 파일 전송 프로토콜(CFDP)의 지연 성능 분석을 제시한다. Ka-대역 채널 조건은 날씨에 따라 달라지는 대기 잡음 온도의 강도에 의해 결정된다."
    }
]