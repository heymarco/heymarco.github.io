---
permalink: /
title: "Hi, I'm Marco"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if page.author and site.data.authors[page.author] %}
    {% assign author = site.data.authors[page.author] %}{% else %}{% assign author = site.author %}
{% endif %}

I am a research scientist and PhD student in the field of machine learning and data mining at Karlsruhe Institute of Technology. I focus on learning from sequential data, specifically the intersection between data stream mining and decision making under uncertainty. You can find my publications [here]({{ site.baseurl }}{% link _pages/publications.md %}) or on [google scholar]({{ author.googlescholar }}).

Please don't hesitate to reach out to me at any time if you're interested in discussing research or collaboration opportunities, or simply to connect.

## News

**(10.01.2024)** My latest research on change detection in high-dimensional data streams has just been published with SpringerNature in Data Mining and Knowledge Discovery. Read here: [https://rdcu.be/dvAOc](https://rdcu.be/dvAOc)