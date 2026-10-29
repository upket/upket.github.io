// Cards, post lists and prose blocks fade up as they scroll into view.
(function () {
  if (!("IntersectionObserver" in window)) return;
  var els = document.querySelectorAll(".card, .post-item, .prose > *, .pager");
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  els.forEach(function (el, i) {
    el.classList.add("reveal");
    if (el.classList.contains("card") || el.classList.contains("post-item")) el.style.transitionDelay = (i % 3) * 0.08 + "s";
    io.observe(el);
  });
})();
