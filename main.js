/**
 * AUMC-CSN CORE DISPATCH OPERATING KERNEL
 * Manages validation arrays, data structures, and environmental decay values.
 */
document.addEventListener("DOMContentLoaded", () => {
    // 1. Process Dynamic Navigation Active States
    const activeRoute = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-network a").forEach(anchor => {
        if (anchor.getAttribute("href") === activeRoute) {
            anchor.classList.add("active");
        }
    });

    // 2. Continuous Environmental Degradation Monitoring (Vignette System)
    window.addEventListener("scroll", () => {
        const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
        if (totalScroll > 0) {
            const scrollRatio = window.scrollY / totalScroll;
            const targetVignette = document.querySelector(".vignette-overlay");
            if (targetVignette) {
                // As the user goes lower, the screen edges darken toward zero visibility
                targetVignette.style.boxShadow = `inset 0 0 ${100 + (scrollRatio * 150)}px rgba(0, 0, 0, ${0.85 + (scrollRatio * 0.15)})`;
            }
        }
    });

    // 3. Central Authentication Gateway Management Loop
    const fieldInput = document.getElementById("terminal-input");
    const triggerBtn = document.getElementById("terminal-submit");
    const feedbackPanel = document.getElementById("terminal-feedback");
    const latentManifest = document.getElementById("layer-manifest-section");

    if (triggerBtn && fieldInput) {
        const evaluateClearance = () => {
            const normalizedToken = fieldInput.value.trim();

            if (normalizedToken === "46696565") {
                feedbackPanel.innerHTML = "<span class='glitch-text' style='color:#ff0000;'>[ALERT] DIRECT REDIRECTION DETECTED. BYPASSING PUBLIC CORE...</span>";
                fieldInput.disabled = true;
                triggerBtn.disabled = true;
                setTimeout(() => {
                    window.location.href = "YOUROWNUTTERANCE.html";
                }, 1800);
            } 
            else if (normalizedToken === "12192020") {
                feedbackPanel.innerHTML = "<span style='color:#00ff41;'>[SUCCESS] CRITICAL COGNITIVE LAYER MANIFEST DECAPPED. PARSING TWINE NODE MAP...</span>";
                if (latentManifest) {
                    latentManifest.style.display = "block";
                    latentManifest.scrollIntoView({ behavior: 'smooth' });
                }
            } 
            else {
                feedbackPanel.innerHTML = "<span style='color:#ff0000;'>[REJECTED] PARITY REJECTED BY SYSTEM OVERWATCH. EVENT FLAGGED FOR RECOVERY DESK.</span>";
                document.body.style.filter = "invert(1) brightness(0.3)";
                setTimeout(() => document.body.style.filter = "none", 120);
            }
        };

        triggerBtn.addEventListener("click", evaluateClearance);
        fieldInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") evaluateClearance();
        });
    }
});
