// Copy buttons next to install commands; falls back to selecting the text if clipboard access is refused.
(function () {
  document.addEventListener("click", function (e) {
    var btn = e.target.closest && e.target.closest("button[data-copy]");
    if (!btn) return;
    var done = function () { btn.textContent = "copied"; setTimeout(function () { btn.textContent = "copy"; }, 1500); };
    var select = function () {
      var code = btn.parentNode.querySelector("code");
      var r = document.createRange(); r.selectNodeContents(code);
      var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(btn.dataset.copy).then(done, select);
    } else {
      select();
    }
  });
})();
