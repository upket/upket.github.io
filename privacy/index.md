---
title: Privacy
crumb: privacy
permalink: /privacy/
description: Every Upket app has its own privacy policy. The general principles below apply to all of them.
---
{% assign policies = site.pages | where: "layout", "policy" | sort: "order" %}
<article class="app">
  <header class="app-head">
    <div class="prompt">~/upket $ ls privacy/</div>
    <h1>Privacy</h1>
    <div class="lede"><p>Every Upket app has its own privacy policy. The general principles below apply to all of them.</p></div>
  </header>
  <div class="contact-grid">
    {%- for pp in policies %}<a class="contact-card pp-card" href="{{ pp.url | relative_url }}"><span class="c-label">{{ pp.platforms | join: " · " }}</span><strong>{{ pp.app_name }}</strong><span>{{ pp.summary }}</span></a>{% endfor %}
  </div>
  <div class="prose policy">
    <section id="general">
      <h2>General</h2>
      <p>This policy explains what information Upket apps collect, why, and the choices you have. "Upket", "I" and "we" refer to the developer, Hien Nguyen. Each app has its own policy page; the general rules here apply to all of them.</p>
      <ul>
        <li><strong>No selling of data.</strong> I do not sell or rent your personal information, and no Upket app shows ads.</li>
        <li><strong>Local first.</strong> Apps keep data on your device unless you turn on a feature that clearly needs a server.</li>
        <li><strong>No accounts required</strong> unless an app clearly says otherwise.</li>
        <li><strong>Children.</strong> Upket apps are not directed at children under 13, and I do not knowingly collect information from them.</li>
        <li><strong>Changes.</strong> If this policy changes, the effective date above is updated and significant changes are noted in release notes.</li>
      </ul>
    </section>
    <section id="website">
      <h2>This website</h2>
      <p>This site has no accounts and sets no tracking cookies. Your light/dark theme choice is saved in your browser's local storage and never leaves your device. If you email me, I use your address only to reply.</p>
    </section>
    <section id="contact">
      <h2>Contact</h2>
      <p>Questions about privacy or requests to access or delete data: <a href="mailto:privacy@upket.com">privacy@upket.com</a>. I respond within 30 days at most, usually much sooner.</p>
    </section>
  </div>
</article>
