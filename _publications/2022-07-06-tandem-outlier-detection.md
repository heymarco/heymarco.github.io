---
title: "Tandem Outlier Detectors for Decentralized Data"
authors: "Marco Heyden, Jürgen Wilwer, Edouard Fouché, Steffen Thoma, Sven Matthiesen, Thomas Gwosch"
collection: publications
permalink: /publication/2022-07-06-tandem-outlier-detection
excerpt: 'We address the problem of distinguishing between different types of outliers in decentralized data. We present a "tandem" solution that combines local and federated outlier detectors to effectively identify those types.'
date: 2022-07-06
venue: "SSDBM"
#paperurl: 'https://arxiv.org/pdf/2205.12706.pdf'
#citation: 'Your Name, You. (2010). &quot;Paper Title Number 2.&quot; <i>Journal 1</i>. 1(2).'
---
Today, the collection of decentralized data is a common scenario: smartphones store users’ messages locally, smart meters collect energy consumption data, and modern power tools monitor operator behavior. We identify different types of outliers in such data: local, global, and partition outliers. They contain valuable information, for example, about mistakes in operation. However, existing outlier detection approaches cannot distinguish between those types. Thus, we propose a “tandem” technique to join “local” and “federated” outlier detectors. Our core idea is to combine outlier detection on a single device with latent information about devices’ data to discriminate between different outlier types. To the best of our knowledge, our method is the first to achieve this. We evaluate our approach on publicly available synthetic and real-world data that we collect in a study with 15 participants operating power tools.

<a class="btn" style="text-decoration: none;" href="https://dl.acm.org/doi/pdf/10.1145/3538712.3538748" rel="permalink">Access paper</a>

<iframe src="/files/tandem_detectors_poster.pdf" width="100%" height="1120" type='application/pdf'/>