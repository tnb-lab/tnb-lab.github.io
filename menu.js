/* TNBL — gives each top-menu link a random underline colour
   (Peacock Blue, Burnt Sienna or Violet Blue) on every visit.
   The colours themselves are set in style.css. */
(function () {
  var tints = ["--peacock", "--sienna", "--violet"];
  document.querySelectorAll("header nav a").forEach(function (a) {
    a.style.setProperty("--tint", "var(" + tints[Math.floor(Math.random() * tints.length)] + ")");
  });
})();
