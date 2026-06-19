window.addEventListener("load", function () {

  function startSite() {
    document.body.classList.remove("preload");

    setTimeout(() => {
      document.body.classList.add("loaded");
    }, 200); // subtle delay
  }

  document.addEventListener("keydown", startSite, { once: true });
  document.addEventListener("click", startSite, { once: true });
});