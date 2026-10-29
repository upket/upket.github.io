---
title: Contact & support
crumb: contact
permalink: /contact/
description: Found a bug, need help, or have an idea? Write to me — I read every message.
---
<article class="app">
  <header class="app-head">
    <div class="prompt">~/upket $ upket support --help</div>
    <h1>Contact &amp; support</h1>
    <div class="lede"><p>Found a bug, need help, or have an idea? Write to me — I read every message.</p></div>
  </header>
  <div class="contact-grid">
    <a class="contact-card" href="mailto:support@upket.com?subject=Support%20request">
      <span class="c-label">support</span>
      <strong>support@upket.com</strong>
      <span>Help with an app, bug reports, data deletion requests.</span>
    </a>
    <a class="contact-card" href="mailto:{{ site.email }}">
      <span class="c-label">general</span>
      <strong>{{ site.email }}</strong>
      <span>Partnerships, press, everything else.</span>
    </a>
    <a class="contact-card" href="{{ site.github }}">
      <span class="c-label">github</span>
      <strong>{{ site.github | remove: "https://" }}</strong>
      <span>Open-source projects and public issue trackers.</span>
    </a>
  </div>
  <p class="note">I usually reply within <strong>1–2 business days</strong> (Vietnam time, UTC+7). When reporting a bug, please include the app name, app version, your device model and OS version.</p>
  <section class="faq">
    <h2 class="faq-title">Frequently asked questions</h2>
    <details><summary>How do I report a bug?</summary><p>Email support with the app name and version (shown in the app's settings or store page), your device and OS version, and the steps to reproduce. A screenshot or screen recording helps a lot.</p></details>
    <details><summary>How do I request deletion of my data?</summary><p>Most Upket apps keep data only on your device — uninstalling the app or clearing its storage removes it. If an app's privacy policy says data is stored elsewhere, email support from the address linked to that data and I'll delete it within 30 days.</p></details>
    <details><summary>Can I request a feature?</summary><p>Yes, please! Tell me what you're trying to do and why — the problem matters more than the exact solution.</p></details>
    <details><summary>Where can I read the privacy policy?</summary><p>Every app has its own section on the <a href="{{ '/privacy/' | relative_url }}">privacy page</a>, which is also linked from each store listing.</p></details>
  </section>
</article>
