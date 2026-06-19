document.addEventListener("DOMContentLoaded", function () {
  // Start hidden
  document.body.classList.add("preload");

  // Wait for ANY key press
  document.addEventListener("keydown", function () {
    document.body.classList.remove("preload");
    document.body.classList.add("loaded");
  }, { once: true });
});
``