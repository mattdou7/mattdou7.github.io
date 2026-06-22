document.addEventListener("DOMContentLoaded", function () {

    const isHomePage =
        window.location.pathname === "/" ||
        window.location.pathname === "/index.html";

    if (!isHomePage) return;

    const hasPlayedIntro = localStorage.getItem("introPlayed");

    const intro = document.createElement("div");
    intro.id = "intro-screen";

    intro.innerHTML = `<h1 class="glow">PRESS ANY KEY</h1>`;

    document.body.appendChild(intro);

    if (!hasPlayedIntro) {

        intro.style.display = "flex";

        function enterSite() {
            // prevent double trigger
            if (intro.classList.contains("done")) return;
            intro.classList.add("done");

            intro.style.opacity = "0";

            setTimeout(() => {
                intro.remove();
            }, 800);
        }

        // ✅ Attach directly to intro (IMPORTANT)
        intro.addEventListener("click", enterSite);
        intro.addEventListener("mousedown", enterSite);

        // ✅ Keyboard anywhere
        document.addEventListener("keydown", enterSite);

        // ✅ Fail-safe auto skip (prevents being stuck)
        setTimeout(enterSite, 5000);

        localStorage.setItem("introPlayed", "true");

    } else {
        intro.remove();
    }
});