/**
 * AUMC-CSN REPOSITORY UNIFIED SYSTEM KERNEL
 * Unified interaction engine managing ARG validation and content toggles.
 */
document.addEventListener("DOMContentLoaded", () => {
    // 1. Mark Active State in Navigation Layouts
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-network a");
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });

    // 2. Core Terminal Router & Authentication Gateway Logic
    const gateInput = document.getElementById("terminal-input");
    const gateBtn = document.getElementById("terminal-submit");
    const gateFeedback = document.getElementById("terminal-feedback");
    const manifestWrapper = document.getElementById("layer-manifest-section");

    if (gateBtn && gateInput) {
        const processCredential = () => {
            const secretValue = gateInput.value.trim();
            
            if (secretValue === "46696565") {
                gateFeedback.innerHTML = "<span class='glitch-text' style='color:#ff0000;'>CRITICAL BREACH: VERIFYING LAYER REDIRECTION...</span>";
                gateInput.disabled = true;
                gateBtn.disabled = true;
                setTimeout(() => {
                    window.location.href = "YOUROWNUTTERANCE.html";
                }, 2000);
            } 
            else if (secretValue === "12192020") {
                gateFeedback.innerHTML = "<span style='color:#00ff41;'>SUCCESS: METADATA MANIFEST REVEALED ACCORDING TO DEPLOYMENT DIRECTIVES.</span>";
                if (manifestWrapper) {
                    manifestWrapper.style.display = "block";
                    manifestWrapper.scrollIntoView({ behavior: 'smooth' });
                }
            } 
            else {
                gateFeedback.innerHTML = "<span style='color:#ff0000;'>ACCESS DENIED: PARSING MISMATCH. AUDIT TRAIL LOGGED.</span>";
                // Intermittent flicker effect on error
                document.body.style.opacity = "0.4";
                setTimeout(() => document.body.style.opacity = "1", 150);
            }
        };

        gateBtn.addEventListener("click", processCredential);
        gateInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") processCredential();
        });
    }

    // 3. Ambient System Degradation (Random Glitch Hints)
    setInterval(() => {
        const glitchEl = document.querySelector(".glitch-text");
        if (glitchEl) {
            glitchEl.style.transform = `translateX(${Math.floor(Math.random() * 4) - 2}px)`;
            setTimeout(() => { glitchEl.style.transform = "none"; }, 100);
        }
    }, 4000);
});
