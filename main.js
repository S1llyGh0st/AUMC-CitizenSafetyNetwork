/**
 * AUMC-CSN MASTER RUNTIME SYSTEM KERNEL
 * Unified validation handler, dynamic menu trackers, and localized teardowns.
 */
document.addEventListener("DOMContentLoaded", () => {
    // 1. Establish Navigation Integrity States
    const activeRoute = window.location.pathname.split("/").pop();
    const routers = document.querySelectorAll(".nav-matrix a");
    routers.forEach(route => {
        if (route.getAttribute("href") === activeRoute) {
            route.classList.add("active");
        }
    });

    // 2. Gateway Credential Matrix Router
    const fieldInput = document.getElementById("terminal-input");
    const triggerBtn = document.getElementById("terminal-submit");
    const terminalOutput = document.getElementById("terminal-feedback");
    const manifestBlock = document.getElementById("layer-manifest-section");

    if (triggerBtn && fieldInput) {
        const executeValidation = () => {
            const clearText = fieldInput.value.trim();
            
            if (clearText === "46696565") {
                terminalOutput.innerHTML = "<span class='glitch-override' style='color:#ff0000;'>CRITICAL ANOMALY: EXECUTING DIRECT REDIRECTION TO THE UNCONCEALED OVERLAY...</span>";
                fieldInput.disabled = true;
                triggerBtn.disabled = true;
                setTimeout(() => {
                    window.location.href = "YOUROWNUTTERANCE.html";
                }, 2000);
            } 
            else if (clearText === "12192020") {
                terminalOutput.innerHTML = "<span style='color:#00ff41;'>SUCCESS: INTEGRATED DOCTRINE MEMO AND SEVEN-LAYER MANIFEST SECURED.</span>";
                if (manifestBlock) {
                    manifestBlock.style.display = "block";
                    manifestBlock.scrollIntoView({ behavior: 'smooth' });
                }
            } 
            else {
                terminalOutput.innerHTML = "<span style='color:#ff0000;'>SECURITY ALERT: CODE MATCH MISALIGNED. INCIDENT RECORDED IN AUDIT TABLE.</span>";
                document.body.style.transform = "scale(1.02)";
                setTimeout(() => { document.body.style.transform = "none"; }, 100);
            }
        };

        triggerBtn.addEventListener("click", executeValidation);
        fieldInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") executeValidation();
        });
    }

    // 3. Simulated Static Degradation
    const glitchContainers = document.querySelectorAll(".glitch-override");
    if (glitchContainers.length > 0) {
        setInterval(() => {
            glitchContainers.forEach(el => {
                if (Math.random() > 0.85) {
                    el.style.transform = `translateX(${Math.floor(Math.random() * 6) - 3}px) skew(${Math.floor(Math.random() * 4) - 2}deg)`;
                    setTimeout(() => { el.style.transform = "none"; }, 150);
                }
            });
        }, 3000);
    }
});
