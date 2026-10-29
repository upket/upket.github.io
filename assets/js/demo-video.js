// YouTube links turn into an embedded player on click (nothing loads from YouTube until then).
// Autoplaying demo clips stop and show controls for visitors who prefer reduced motion.
(function () {
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[data-yt]");
    if (!a) return;
    e.preventDefault();
    var f = document.createElement("iframe");
    f.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(a.dataset.yt) + "?autoplay=1&rel=0";
    f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    f.allowFullscreen = true;
    f.title = a.getAttribute("aria-label") || "Demo video";
    a.replaceWith(f);
  });
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll("video[autoplay]").forEach(function (v) {
      v.pause();
      v.removeAttribute("autoplay");
      v.controls = true;
    });
  }
})();
