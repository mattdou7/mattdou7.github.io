document.addEventListener("DOMContentLoaded", function () {

    const path = window.location.pathname.toLowerCase();

    const isHomePage =
        path === "/" ||
        path === "/index.html" ||
        path === "";

    // ✅ Always show normal site on other pages
    if (!isHomePage) {
        document.body.classList.remove("preload");
        document.body.classList.add("loaded");
        return;
    }

    const hasPlayedIntro = localStorage.getItem("introPlayed");

    const intro = document.createElement("div");
    intro.id = "intro-screen";
    intro.innerHTML = "<h1 class='glow'>PRESS ANY KEY</h1>";

    document.body.appendChild(intro);

    function enterSite() {
        intro.style.opacity = "0";

        setTimeout(() => {
            intro.remove();

            document.body.classList.remove("preload");
            document.body.classList.add("loaded");

        }, 800);
    }

    if (!hasPlayedIntro) {

        intro.style.display = "flex";

        window.addEventListener("click", enterSite);
        window.addEventListener("keydown", enterSite);
        window.addEventListener("touchstart", enterSite);

        setTimeout(enterSite, 5000);

        localStorage.setItem("introPlayed", "true");

    } else {
        intro.remove();

        document.body.classList.remove("preload");
        document.body.classList.add("loaded");
    }
});
``