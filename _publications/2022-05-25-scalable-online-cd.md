---
title: "Scalable Online Change Detection for High-dimensional Data Streams"
authors: "Florian Kalinke, Marco Heyden, Edouard Fouché, Klemens Böhm"
collection: publications
permalink: /publication/2022-05-25-scalable-online-cd
excerpt: 'We propose an algorithm, Maximum Mean Discrepancy Adaptive Windowing (MMDAW), which leverages the well-known Maximum Mean Discrepancy (MMD) two-sample test, and facilitates its efficient online computation on windows whose size it flexibly adapts.'
date: 2022-05-25
venue: 'arXiv preprint'
#paperurl: 'https://arxiv.org/pdf/2205.12706.pdf'
#citation: 'Your Name, You. (2010). &quot;Paper Title Number 2.&quot; <i>Journal 1</i>. 1(2).'
---
Detecting changes in data streams is a core objective in their analysis and has applications in, say, predictive maintenance, fraud detection, and medicine. A principled approach to detect changes is to compare distributions observed within the stream to each other. However, data streams often are high-dimensional, and changes can be complex, e.g., only manifest themselves in higher moments. The streaming setting also imposes heavy memory and computation restrictions. We propose an algorithm, Maximum Mean Discrepancy Adaptive Windowing (MMDAW), which leverages the well-known Maximum Mean Discrepancy (MMD) two-sample test, and facilitates its efficient online computation on windows whose size it flexibly adapts. As MMD is sensitive to any change in the underlying distribution, our algorithm is a general-purpose non-parametric change detector that fulfills the requirements imposed by the streaming setting. Our experiments show that MMDAW achieves better detection quality than state-of-the-art competitors.

[Access paper](https://arxiv.org/pdf/2205.12706.pdf)
