---
layout: archive
title: "Resume"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% if page.author and site.data.authors[page.author] %}
    {% assign author = site.data.authors[page.author] %}{% else %}{% assign author = site.author %}
{% endif %}

{% include base_path %}

---

You can download my resume below. For my publications, see [here]({{ site.baseurl }}{% link _pages/publications.md %}) or on [google scholar]({{author.googlescholar}}).

<iframe src="/files/cv_marco_heyden.pdf" width="100%" height="1200" type='application/pdf'/>

Education
======
* Ph.D. candidate in Computer Science, Karlsruhe Insitute of Technolgy, ongoing
* M.S. in Computer Science, Karlsruhe Institute of Technology, 2019
* B.S. in Mechatronics, Karlsruhe Institute of Technology, 2017

Work experience
======

I am currently working as a researcher at the Institute for program structures and data organization (IPD) at Karlsruhe Institute of Technology, Germany.
Before, I was a researcher at Research Center for Information Technology (FZI), Karlsruhe in the field of data analysis in fog and edge computing.

During my studies I have gained experience at various companies and research institutes including SAP, Stocard, and FZI. 
See my [full resume]({{ site.url }}/files/cv_marco_heyden.pdf) for more information.

Publications
======
See my [publications page]({{ site.baseurl }}{% link _pages/publications.md %}).
