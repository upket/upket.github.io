// Language tabs on a privacy policy: show one .lang-panel at a time. A URL hash naming a language (e.g. #en) opens that tab.
(function () {
  var root = document.querySelector(".pp-app");
  if (!root) return;
  function setLang(lang) {
    if (!root.querySelector('.lang-panel[data-lang="' + lang + '"]')) return;
    root.querySelectorAll(".lang-panel").forEach(function (p) { p.hidden = p.dataset.lang !== lang; });
    root.querySelectorAll(".lang-tabs button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.lang === lang); });
  }
  root.addEventListener("click", function (e) {
    var b = e.target.closest(".lang-tabs button");
    if (!b) return;
    setLang(b.dataset.lang);
    history.replaceState(null, "", "#" + b.dataset.lang);
  });
  if (location.hash) setLang(location.hash.slice(1));
})();
