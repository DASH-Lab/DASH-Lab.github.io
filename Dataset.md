---
layout: page
title: Dataset
permalink: /Dataset/
---

<!-- <p><a href="https://dash-lab.github.io/Dataset_kor.html">Kor</a></p> -->
<p><a href="../Dataset_kor/">Kor</a></p>

<h1 class="page-title">COCO spliced datasets</h1>
  <p>We utilized the <a href="https://cocodataset.org/#home">COCO dataset</a> to generate a manipulated dataset. Given that the dataset comes with provided labels (masks), we initially identified the desired portions in the original images by applying the mask to them. Subsequently, we used these specific regions to manipulate other images. Each image was altered with approximately 8 to 10 objects, resulting in a total of around 900k manipulated images.<p><br>
  
 <p align=center><img  loading="lazy" border=0  src="/Publications/Screen Shot 2023-12-11 at 2.15.08 PM.png" width="780"></p> 

<h1 class="page-title">Satellite Forgery Image Dataset</h1>
  <p>We used <a href="http://deepglobe.org/">DeepGlop dataset</a> to create Satellite Forgery images by following the method proposed in <a href="https://openaccess.thecvf.com/content_CVPRW_2020/papers/w39/Horvath_Manipulation_Detection_in_Satellite_Images_Using_Deep_Belief_Networks_CVPRW_2020_paper.pdf">Deep Belief networks</a>. A total of 293 orthorectified images with an image resolution of 1000×1000 pixels were collected. We use 100 of the 293 orthorectified images to create manipulated images. 19 different objects are spliced into the 100 images generating a total of 500 manipulated images with their corresponding manipulation ground truth masks. The 19 objects include rockets, planes, and drone images. The figure shown below illustrates some examples from the manipulated dataset.<p><br>
  
 <p align=center><img  loading="lazy" border=0  src="/Publications/satellite_forgery.png" width="780"></p> 

<h1 class="page-title">RWDF-23 Dataset</h1>
  <p>The RWDF-23 is collected from the wild, consisting of 2,000 deepfake videos collected from 4 platforms targeting 4 different languages span created from 21 countries: Reddit, YouTube, TikTok, and Bilibili. By expanding the dataset's scope beyond the previous research, we capture a broader range of real-world deepfake content, reflecting the ever-evolving landscape of online platforms. Also, we conduct a comprehensive analysis encompassing various aspects of deepfakes, including creators, manipulation strategies, purposes, and real-world content production methods. This allows us to gain valuable insights into the nuances and characteristics of deepfakes in different contexts. Lastly, in addition to the video content, we also collect viewer comments and interactions, enabling us to explore the engagements of internet users with deepfake content. To obtain the dataset, please fill out the form <a href="https://docs.google.com/forms/d/e/1FAIpQLScsxskSEI0LkmUdI7ClAqs-xslyviDNoKHhiZC3FsBqFG4NJA/viewform">HERE</a>.  </p><br>
  
 <p align=center><img  loading="lazy" border=0  src="/Publications/rwdf23_cikm23.png" width="780"></p> 
 
<h1 class="page-title">FakeAVCeleb Dataset</h1>
  <p>In FakeAVCeleb, we propose a novel Audio-Video Deepfake dataset (FakeAVCeleb) that contains not only deepfake videos but also respective synthesized lip-synced fake audios. Our FakeAVCeleb is generated using recent most popular deepfake generation methods. To generate a more realistic dataset, we selected real YouTube videos of celebrities having four racial backgrounds (Caucasian, Black, East Asian, and South Asian) to counter the racial bias issue. <p><br>
  
 <p align=center><img  loading="lazy" border=0  src="/img/datasets/FakeAVCeleb/fakeceleb_nips2021.png" width="1080"></p> 


<h1 class="page-title">VFP290K dataset</h1>
  <p>Vision-based Fallen Person (VFP290K) dataset consists of 294,714 frames of fallen persons extracted from 178 videos from 49 backgrounds, composing 131 scenes. We empirically demonstrate the effectiveness of the features through extensive experiments comparing the performance shift based on object detection models. In addition, we evaluate our VFP290K dataset with properly divided datasets by measuring the performance of fallen person detecting systems.

We ranked first in the first round of the anomalous behavior recognition track of AI Grand Challenge 2020, South Korea, using our VFP290K dataset, which can further extend to other applications, such as intelligent CCTV or monitoring systems, as well. <p><br>
  
 <p align=center><img  loading="lazy" border=0  src="/img/datasets/VFP290k/VFP.JPG"  width="1080"></p> 




 
<h1 class="page-title">SKKU AGC Anomaly Detection Dataset</h1>
  <p>SKKU AGC Anomaly Detection Dataset was acquired with a stationary camera mounted at an elevation, overlooking pedestrians, both day and night from various locations. Abnormal event is when a person's head touches the ground. The data was split into detection data and classification data.<p><br>
 
<h6><b>1. Detection Data</b></h6>
  <p>It consits of images and anomaly labels. Images(1920x1080) are in day and night folders. Labels(.xml files) are in day_anno and night_anno folders.</p>
  <p>day: 3000<br>night: 2000</p><br>

<h6><b>2. Classification Data</b></h6>
  <p>Images cropped only by humans. There are two classes, normal and falldown. Images are in normal_day, normal_night, falldown_night, and falldown_day folders.</p>
  <p>normal_day: 3200<br>normal_night: 1300<br>falldown_day: 3700<br>falldown_night: 900</p>
  <br>

<hr>
<p><b>Examples of Detection data</b></p>
<table>
  <tr>
    <td width="33%" valign=top>
      <p align=center><img  loading="lazy" border=0 width=240 height=135 src="/img/datasets/VFP290k/AGC_detection.jpg"></p>
    </td>
    <td width="33%" valign=top>
      <p align=center><img  loading="lazy" border=0 width=240 height=135 src="/img/datasets/VFP290k/AGC_detection3.jpg"></p>
    </td>
    <td width="33%" valign=top>
      <p align=center><img  loading="lazy" border=0 width=240 height=135 src="/img/datasets/VFP290k/AGC_detection4.jpg"></p>
    </td>
  </tr>
  <tr>
    <td width="33%" valign=top>
      <p align=center><img  loading="lazy" border=0 width=240 height=135 src="/img/datasets/VFP290k/AGC_detection1.jpg"></p>
    </td>
    <td width="33%" valign=top>
      <p align=center><img  loading="lazy" border=0 width=240 height=135 src="/img/datasets/VFP290k/AGC_detection2.jpg"></p>
    </td>
    <td width="33%" valign=top>
      <p align=center><img  loading="lazy" border=0 width=240 height=135 src="/img/datasets/VFP290k/AGC_detection5.jpg"></p>
    </td>
  </tr>
</table>
<br>
<hr>
<p><b>Examples of Classification data</b></p>
<table>
  <tr>
    <td width="33%" valign=top>
      <p align=center><img  loading="lazy" border=0  src="/img/datasets/VFP290k/AGC_classification.jpg"></p>
    </td>
    <td width="33%" valign=top>
      <p align=center><img  loading="lazy" border=0  src="/img/datasets/VFP290k/AGC_classification1.jpg"></p>
    </td>
    <td width="33%" valign=top>
      <p align=center><img  loading="lazy" border=0  src="/img/datasets/VFP290k/AGC_classification2.jpg"></p>
    </td>
  </tr>
  <tr>
    <td width="33%" valign=top>
      <p align=center><img  loading="lazy" border=0  src="/img/datasets/VFP290k/AGC_classification3.jpg"></p>
    </td>
    <td width="33%" valign=top>
      <p align=center><img  loading="lazy" border=0  src="/img/datasets/VFP290k/AGC_classification4.jpg"></p>
    </td>
    <td width="33%" valign=top>
      <p align=center><img  loading="lazy" border=0  src="/img/datasets/VFP290k/AGC_classification5.jpg"></p>
    </td>
  </tr>
</table>
<h1 class="page-title">Deepfake Inspector</h1>
   <p>Try our beta version here: <a href="/Foren_ins/">Tool</a></p>. 
  
 
