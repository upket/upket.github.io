---
title: Terms
crumb: terms
permalink: /terms/
description: Terms of service for Upket apps. Each app that has terms lists them on its own page.
---
{% assign terms_pages = site.pages | where: "layout", "terms" | sort: "order" %}
<article class="app">
  <header class="app-head">
    <div class="prompt">~/upket $ ls terms/</div>
    <h1>Terms</h1>
    <div class="lede"><p>Terms of service for Upket apps. Each app that has terms lists them on its own page.</p></div>
  </header>
  <div class="contact-grid">
    {%- for t in terms_pages %}<a class="contact-card pp-card" href="{{ t.url | relative_url }}"><span class="c-label">{{ t.platforms | join: " · " }}</span><strong>{{ t.app_name }}</strong><span>{{ t.summary }}</span></a>{% endfor %}
  </div>
</article>
