document.addEventListener("DOMContentLoaded", function () {

    console.log("INTRO SCRIPT RUNNING");

    const path = window.location.pathname;

    const isHomePage =
        path === "/" ||
        path.endsWith("index.html");

    // ✅ show normal site on non-home pages
    if (!isHomePage) {
        document.body.classList.remove("preload");
        document.body.classList.add("loaded");
        return;
    }

    const intro = document.createElement("div");
    intro.id = "intro-screen";
    intro.innerHTML = "<h1>PRESS ANY KEY</h1>";

    document.body.appendChild(intro);

    function enterSite() {
        intro.style.opacity = "0";

        setTimeout(() => {
            intro.remove();
            document.body.classList.remove("preload");
            document.body.classList.add("loaded");
        }, 800);
    }

    intro.style.display = "flex";

    window.addEventListener("click", enterSite);
    window.addEventListener("keydown", enterSite);

});