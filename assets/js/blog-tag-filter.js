// Tag buttons on /blog/ show only posts with that tag; "all" shows every post.
(function () {
  var bar = document.getElementById("tag-filter"), list = document.getElementById("all-posts");
  if (!bar || !list) return;
  bar.addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (!b) return;
    var t = b.dataset.t;
    bar.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
    list.querySelectorAll(".post-item").forEach(function (a) {
      a.hidden = !!t && (" " + a.dataset.tags + " ").indexOf(" " + t + " ") < 0;
    });
  });
})();
