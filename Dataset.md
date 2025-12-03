---
layout: page
title: Dataset
permalink: /Dataset/
---

<!-- <p><a href="https://dash-lab.github.io/Dataset_kor.html">Kor</a></p> -->
<p style="text-align: right; margin-bottom: 20px;"><a href="../Dataset_kor/" style="color: #1976d2; font-weight: bold;">한국어 버전 →</a></p>

<div class="section">
    <div class="card" style="padding: 30px; margin-bottom: 30px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%);">
        <h3 style="color: #1976d2; margin-top: 0; margin-bottom: 20px; border-bottom: 2px solid #1976d2; padding-bottom: 10px;">📦 COCO Spliced Datasets</h3>
        <p style="line-height: 1.8;">We utilized the <a href="https://cocodataset.org/#home" target="_blank">COCO dataset</a> to generate a manipulated dataset. Given that the dataset comes with provided labels (masks), we initially identified the desired portions in the original images by applying the mask to them. Subsequently, we used these specific regions to manipulate other images. Each image was altered with approximately 8 to 10 objects, resulting in a total of around 900k manipulated images.</p>

        <p align="center" style="margin-top: 20px;"><img loading="lazy" border="0" src="/Publications/Screen Shot 2023-12-11 at 2.15.08 PM.png" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);"></p>
    </div>
</div> 

<div class="section">
    <div class="card" style="padding: 30px; margin-bottom: 30px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%);">
        <h3 style="color: #1976d2; margin-top: 0; margin-bottom: 20px; border-bottom: 2px solid #1976d2; padding-bottom: 10px;">🛰️ Satellite Forgery Image Dataset</h3>
        <p style="line-height: 1.8;">We used <a href="http://deepglobe.org/" target="_blank">DeepGlop dataset</a> to create Satellite Forgery images by following the method proposed in <a href="https://openaccess.thecvf.com/content_CVPRW_2020/papers/w39/Horvath_Manipulation_Detection_in_Satellite_Images_Using_Deep_Belief_Networks_CVPRW_2020_paper.pdf" target="_blank">Deep Belief networks</a>. A total of 293 orthorectified images with an image resolution of 1000×1000 pixels were collected. We use 100 of the 293 orthorectified images to create manipulated images. 19 different objects are spliced into the 100 images generating a total of 500 manipulated images with their corresponding manipulation ground truth masks. The 19 objects include rockets, planes, and drone images. The figure shown below illustrates some examples from the manipulated dataset.</p>

        <p align="center" style="margin-top: 20px;"><img loading="lazy" border="0" src="/Publications/satellite_forgery.png" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);"></p>
    </div>
</div> 

<div class="section">
    <div class="card" style="padding: 30px; margin-bottom: 30px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%);">
        <h3 style="color: #1976d2; margin-top: 0; margin-bottom: 20px; border-bottom: 2px solid #1976d2; padding-bottom: 10px;">🎬 RWDF-23 Dataset</h3>
        <p style="line-height: 1.8;">The RWDF-23 is collected from the wild, consisting of 2,000 deepfake videos collected from 4 platforms targeting 4 different languages span created from 21 countries: Reddit, YouTube, TikTok, and Bilibili. By expanding the dataset's scope beyond the previous research, we capture a broader range of real-world deepfake content, reflecting the ever-evolving landscape of online platforms. Also, we conduct a comprehensive analysis encompassing various aspects of deepfakes, including creators, manipulation strategies, purposes, and real-world content production methods. This allows us to gain valuable insights into the nuances and characteristics of deepfakes in different contexts. Lastly, in addition to the video content, we also collect viewer comments and interactions, enabling us to explore the engagements of internet users with deepfake content.</p>

        <div style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 5px; border-left: 4px solid #1976d2;">
            <strong>📝 To obtain the dataset, please fill out the form <a href="https://docs.google.com/forms/d/e/1FAIpQLScsxskSEI0LkmUdI7ClAqs-xslyviDNoKHhiZC3FsBqFG4NJA/viewform" target="_blank" style="color: #1976d2;">HERE</a></strong>
        </div>

        <p align="center" style="margin-top: 20px;"><img loading="lazy" border="0" src="/Publications/rwdf23_cikm23.png" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);"></p>
    </div>
</div> 
 
<div class="section">
    <div class="card" style="padding: 30px; margin-bottom: 30px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%);">
        <h3 style="color: #1976d2; margin-top: 0; margin-bottom: 20px; border-bottom: 2px solid #1976d2; padding-bottom: 10px;">🎭 FakeAVCeleb Dataset</h3>
        <p style="line-height: 1.8;">In FakeAVCeleb, we propose a novel Audio-Video Deepfake dataset (FakeAVCeleb) that contains not only deepfake videos but also respective synthesized lip-synced fake audios. Our FakeAVCeleb is generated using recent most popular deepfake generation methods. To generate a more realistic dataset, we selected real YouTube videos of celebrities having four racial backgrounds (Caucasian, Black, East Asian, and South Asian) to counter the racial bias issue.</p>

        <p align="center" style="margin-top: 20px;"><img loading="lazy" border="0" src="/img/datasets/FakeAVCeleb/fakeceleb_nips2021.png" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);"></p>
    </div>
</div> 


<div class="section">
    <div class="card" style="padding: 30px; margin-bottom: 30px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%);">
        <h3 style="color: #1976d2; margin-top: 0; margin-bottom: 20px; border-bottom: 2px solid #1976d2; padding-bottom: 10px;">🚨 VFP290K Dataset</h3>
        <p style="line-height: 1.8;">Vision-based Fallen Person (VFP290K) dataset consists of 294,714 frames of fallen persons extracted from 178 videos from 49 backgrounds, composing 131 scenes. We empirically demonstrate the effectiveness of the features through extensive experiments comparing the performance shift based on object detection models. In addition, we evaluate our VFP290K dataset with properly divided datasets by measuring the performance of fallen person detecting systems.</p>

        <div style="margin-top: 15px; padding: 15px; background: #fff3e0; border-radius: 5px; border-left: 4px solid #ff9800;">
            <strong>🏆 We ranked first in the first round of the anomalous behavior recognition track of AI Grand Challenge 2020, South Korea, using our VFP290K dataset, which can further extend to other applications, such as intelligent CCTV or monitoring systems, as well.</strong>
        </div>

        <p align="center" style="margin-top: 20px;"><img loading="lazy" border="0" src="/img/datasets/VFP290k/VFP.JPG" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);"></p>
    </div>
</div> 




<div class="section">
    <div class="card" style="padding: 30px; margin-bottom: 30px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%);">
        <h3 style="color: #1976d2; margin-top: 0; margin-bottom: 20px; border-bottom: 2px solid #1976d2; padding-bottom: 10px;">📹 SKKU AGC Anomaly Detection Dataset</h3>
        <p style="line-height: 1.8;">SKKU AGC Anomaly Detection Dataset was acquired with a stationary camera mounted at an elevation, overlooking pedestrians, both day and night from various locations. Abnormal event is when a person's head touches the ground. The data was split into detection data and classification data.</p>

        <div style="margin-top: 25px;">
            <h5 style="color: #1976d2; margin-bottom: 15px;">1. Detection Data</h5>
            <p style="line-height: 1.8;">It consists of images and anomaly labels. Images (1920x1080) are in day and night folders. Labels (.xml files) are in day_anno and night_anno folders.</p>
            <p style="line-height: 1.8;"><strong>Day:</strong> 3000 | <strong>Night:</strong> 2000</p>
        </div>

        <div style="margin-top: 25px;">
            <h5 style="color: #1976d2; margin-bottom: 15px;">2. Classification Data</h5>
            <p style="line-height: 1.8;">Images cropped only by humans. There are two classes, normal and falldown. Images are in normal_day, normal_night, falldown_night, and falldown_day folders.</p>
            <p style="line-height: 1.8;"><strong>Normal Day:</strong> 3200 | <strong>Normal Night:</strong> 1300 | <strong>Falldown Day:</strong> 3700 | <strong>Falldown Night:</strong> 900</p>
        </div>

        <hr style="margin: 30px 0; border: 1px solid #e0e0e0;">

        <h5 style="color: #1976d2; margin-bottom: 15px;">Examples of Detection Data</h5>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-bottom: 30px;">
            <img loading="lazy" border="0" src="/img/datasets/VFP290k/AGC_detection.jpg" style="width: 100%; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <img loading="lazy" border="0" src="/img/datasets/VFP290k/AGC_detection3.jpg" style="width: 100%; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <img loading="lazy" border="0" src="/img/datasets/VFP290k/AGC_detection4.jpg" style="width: 100%; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <img loading="lazy" border="0" src="/img/datasets/VFP290k/AGC_detection1.jpg" style="width: 100%; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <img loading="lazy" border="0" src="/img/datasets/VFP290k/AGC_detection2.jpg" style="width: 100%; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <img loading="lazy" border="0" src="/img/datasets/VFP290k/AGC_detection5.jpg" style="width: 100%; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
        </div>

        <hr style="margin: 30px 0; border: 1px solid #e0e0e0;">

        <h5 style="color: #1976d2; margin-bottom: 15px;">Examples of Classification Data</h5>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px;">
            <img loading="lazy" border="0" src="/img/datasets/VFP290k/AGC_classification.jpg" style="width: 100%; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <img loading="lazy" border="0" src="/img/datasets/VFP290k/AGC_classification1.jpg" style="width: 100%; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <img loading="lazy" border="0" src="/img/datasets/VFP290k/AGC_classification2.jpg" style="width: 100%; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <img loading="lazy" border="0" src="/img/datasets/VFP290k/AGC_classification3.jpg" style="width: 100%; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <img loading="lazy" border="0" src="/img/datasets/VFP290k/AGC_classification4.jpg" style="width: 100%; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <img loading="lazy" border="0" src="/img/datasets/VFP290k/AGC_classification5.jpg" style="width: 100%; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
        </div>
    </div>
</div>
<div class="section">
    <div class="card" style="padding: 30px; margin-bottom: 30px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%);">
        <h3 style="color: #1976d2; margin-top: 0; margin-bottom: 20px; border-bottom: 2px solid #1976d2; padding-bottom: 10px;">🔍 Deepfake Inspector</h3>
        <div style="padding: 20px; background: #e3f2fd; border-radius: 5px; border-left: 4px solid #1976d2; text-align: center;">
            <p style="font-size: 18px; line-height: 1.8; margin: 0;">
                Try our beta version here: <a href="/Foren_ins/" style="color: #1976d2; font-weight: bold; text-decoration: underline;">Tool</a>
            </p>
        </div>
    </div>
</div>

