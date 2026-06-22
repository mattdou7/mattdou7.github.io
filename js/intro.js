document.addEventListener("DOMContentLoaded", function () {

    const isHomePage =
        window.location.pathname === "/" ||
        window.location.pathname === "/index.html";

    if (!isHomePage) return; // ✅ STOP on other pages

    const hasPlayedIntro = localStorage.getItem("introPlayed");

    // ✅ Create intro dynamically
    const intro = document.createElement("div");
    intro.id = "intro-screen";
    intro.innerHTML = "<h1 class='glow'>PRESS ANY KEY</h1>";
    document.body.appendChild(intro);

    if (!hasPlayedIntro) {

        intro.style.display = "flex";

        function enterSite() {
            intro.style.opacity = "0";

            setTimeout(() => {
                intro.remove();
            }, 500);
        }

        document.addEventListener("keydown", enterSite, { once: true });
        document.addEventListener("click", enterSite, { once: true });

        localStorage.setItem("introPlayed", "true");

    } else {
        // already seen → just remove immediately
        intro.remove();
    }
});