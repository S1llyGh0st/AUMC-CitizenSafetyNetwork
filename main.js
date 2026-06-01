document.addEventListener("DOMContentLoaded", () => {
    const terminalInput = document.getElementById("terminal-input");
    const terminalSubmit = document.getElementById("terminal-submit");
    const feedbackArea = document.getElementById("terminal-feedback");
    const manifestSection = document.getElementById("layer-manifest-section");

    if (terminalSubmit && terminalInput) {
        terminalSubmit.addEventListener("click", () => {
            const inputVal = terminalInput.value.trim();
            
            // Core Code 1: Redirect to Secret Truth Layer
            if (inputVal === "46696565") {
                feedbackArea.innerHTML = "ACCESS GRANTED. REDIRECTING...";
                setTimeout(() => {
                    window.location.href = "YOUROWNUTTERANCE.html";
                }, 1500);
            } 
            // Core Code 2: Reveal Secret Layer Manifest
            else if (inputVal === "12192020") {
                feedbackArea.innerHTML = "MANIFEST LAYER UNLOCKED.";
                if (manifestSection) {
                    manifestSection.style.display = "block";
                }
            } 
            else {
                feedbackArea.innerHTML = "ERROR: INVALID CREDENTIALS.";
            }
        });
    }
});
