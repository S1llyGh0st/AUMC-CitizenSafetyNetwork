/**
 * AUMC-CSN MASTER ROUTING SYSTEM & INTERACTIVE DEGRADATION LOGIC
 * Synchronized ARG dynamic validator across the portal schema.
 */
document.addEventListener("DOMContentLoaded", () => {
    // 1. Maintain Link State Integration
    const pathTokens = window.location.pathname.split("/");
    const filename = pathTokens[pathTokens.length - 1] || "index.html";
    document.querySelectorAll(".nav-network a").forEach(link => {
        if (link.getAttribute("href") === filename) {
            link.classList.add("active");
        }
    });

    // 2. Gateway Code Processing Core
    const codeField = document.getElementById("terminal-input");
    const execButton = document.getElementById("terminal-submit");
    const feedTarget = document.getElementById("terminal-feedback");
    const leakContainer = document.getElementById("layer-manifest-section");

    if (execButton && codeField) {
        const processSubmission = () => {
            const secretValue = codeField.value.trim();

            if (secretValue === "46696565") {
                feedTarget.innerHTML = "<span class='glitch-text' style='color:#ff0000;'>[CRITICAL DETACHMENT]: EQUALIZING TIMELINE MATRIX. REDIRECTING...</span>";
                codeField.disabled = true;
                execButton.disabled = true;
                setTimeout(() => {
                    window.location.href = "YOUROWNUTTERANCE.html";
                }, 1800);
            } 
            else if (secretValue === "12192020") {
                feedTarget.innerHTML = "<span style='color:#00ff41;'>[CLEARANCE GRANTED]: LEAKED DOCTRINE STRATA APPRENDED BELOW.</span>";
                if (leakContainer) {
                    leakContainer.style.display = "block";
                    leakContainer.scrollIntoView({ behavior: 'smooth' });
                }
            } 
            else {
                feedTarget.innerHTML = "<span style='color:#ff0000;'>[PARSING REJECTION]: CORRUPTION THRESHOLD EXCEEDED. LOGGED.</span>";
                document.body.style.filter = "brightness(0.3) invert(0.1)";
                setTimeout(() => document.body.style.filter = "none", 120);
            }
        };

        execButton.addEventListener("click", processSubmission);
        codeField.addEventListener("keydown", (e) => {
            if (e.key === "Enter") processSubmission();
        });
    }
});
