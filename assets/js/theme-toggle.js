// Light/dark toggle: remembers the choice, otherwise follows the system. The saved theme is applied early by an inline script in <head>.
(function () {
  var root = document.documentElement, mq = matchMedia("(prefers-color-scheme: dark)");
  function current() { return root.dataset.theme || (mq.matches ? "dark" : "light"); }
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".theme-toggle")) return;
    var next = current() === "dark" ? "light" : "dark";
    root.classList.add("theme-anim");
    root.dataset.theme = next;
    try { localStorage.setItem("upket-theme", next); } catch (err) {}
    setTimeout(function () { root.classList.remove("theme-anim"); }, 450);
  });
})();
