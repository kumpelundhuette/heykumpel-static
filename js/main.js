(function () {
  var box = document.getElementById("nav-check");
  var nav = document.getElementById("site-nav");
  if (!box || !nav) return;

  function close() {
    box.checked = false;
    document.body.classList.remove("nav-open");
  }

  box.addEventListener("change", function () {
    document.body.classList.toggle("nav-open", box.checked);
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", close);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && box.checked) {
      close();
      box.focus();
    }
  });

  var desktop = window.matchMedia("(min-width: 1100px)");
  function closeIfDesktop() {
    if (desktop.matches) close();
  }
  if (typeof desktop.addEventListener === "function") {
    desktop.addEventListener("change", closeIfDesktop);
  } else if (typeof desktop.addListener === "function") {
    desktop.addListener(closeIfDesktop);
  }
})();
