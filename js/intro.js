document.addEventListener("DOMContentLoaded", function () {

    const isHomePage = window.location.pathname.replace(/\/$/, "") === "";

    if (!isHomePage) return;

    const hasPlayedIntro = localStorage.getItem("introPlayed");

    const intro = document.createElement("div");
    intro.id = "intro-screen";
    intro.innerHTML = "<h1 class='glow'>PRESS ANY KEY</h1>";
    document.body.appendChild(intro);

    function enterSite() {
        intro.style.opacity = "0";

        setTimeout(() => {
            intro.remove();
        }, 800);
    }

    if (!hasPlayedIntro) {

        intro.style.display = "flex";

        // ✅ Stronger event capture
        window.addEventListener("click", enterSite);
        window.addEventListener("keydown", enterSite);
        window.addEventListener("touchstart", enterSite);

        // ✅ fallback (never gets stuck)
        setTimeout(enterSite, 5000);

        localStorage.setItem("introPlayed", "true");

    } else {
        intro.remove();
    }
});
``