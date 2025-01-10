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

I am an enthusiastic researcher and PhD student in Machine Learning and Data Mining at the Karlsruhe Institute of Technology. I focus on the intersection of decision-making under uncertainty and ML for data streams. My goal is to enable data-driven decision-making through insightful analysis, clear communication, and effective collaboration. You can find my publications [here]({{ site.baseurl }}{% link _pages/publications.md %}) or on [google scholar]({{ author.googlescholar }}).

Please don't hesitate to reach out to me at any time if you're interested in discussing research or collaboration opportunities, or simply to connect.

## News

**(24.07.2024)** Our paper "MicroPPO: Safe Power Flow Management in Decentralized Micro-grid with Proximal Policy Optimization" has been accepted at DSAA 2024 in San Diego. Congratulations to Daniel Ebi, who was the main driver behind this project, and to our other co-authors Edouard Fouché and Klemens Böhm. Read the paper [here](files/MicroPPO_Ebi_Fouche_Heyden_Boehm_DSAA24_AV.pdf).

**(27.05.2024)** Our paper "Leveraging Plasticity in Incremental Decision Trees" has been accepted at ECML PKDD '24 in Vilnius. This work was done during my research stay at the Victoria University of Wellington where I visited [Heitor Murilo Gomes](https://heitorgomes.com/). Congratulations to all my co-authors Heitor Murilo Gomes, Edouard Fouché, Bernhard Pfahringer, and Klemens Böhm. Access the paper [here](https://link.springer.com/chapter/10.1007/978-3-031-70362-1_3).

**(17.05.2024)** Our paper "Budgeted Multi-Armed Bandits with Asymmetric Confidence Intervals" has been accepted at KDD '24, in Barcelona. Congratulations to my co-authors Vadim Arzamasov, Edouard Fouché, and Klemens Böhm. Read the paper [here](/files/Budgeted_Bandits_with_Asymmetric_Confidence_Intervals__KDD_24.pdf).

**(10.01.2024)** Our paper on change detection in high-dimensional data streams has just been published with SpringerNature in Data Mining and Knowledge Discovery. Congratulations to my co-authors Edouard Fouché, Vadim Arzamasov, Tanja Fenn, Florian Kalinke and Klemens Böhm. Access the paper [here](https://rdcu.be/dvAOc).