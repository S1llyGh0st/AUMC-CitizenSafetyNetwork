/**
 * AUMC-CSN MASTER ROUTING AND COMMAND ENGINE (main.js)
 */

document.addEventListener("DOMContentLoaded", function() {
    setupAUMCConsole();
});

function setupAUMCConsole() {
    const overrideInput = document.getElementById("terminal-override-input");
    const overrideSubmit = document.getElementById("terminal-override-submit");
    
    if (!overrideInput || !overrideSubmit) return;

    overrideInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            evalAUMCCommand(overrideInput.value.trim());
        }
    });

    overrideSubmit.addEventListener("click", function() {
        evalAUMCCommand(overrideInput.value.trim());
    });
}

function evalAUMCCommand(rawInput) {
    const filteredKey = rawInput.replace(/\s+/g, "");

    // TARGET REDIRECT VECTOR
    if (filteredKey === "46696565") {
        window.location.href = "YOUROWNUTTERANCE.html";
        return;
    }

    // MULTI-LAYER DOCUMENT INJECTION VECTOR
    if (filteredKey === "12192020") {
        revealSecureLayerData();
        return;
    }

    setConsoleFeedback("AUMC EXCEPTION: ACCESS KEYS REFUSED BY HIGH COMMAND SECURITY ROUTINE.");
}

function revealSecureLayerData() {
    const targetOutput = document.getElementById("aumc-layer-manifest");
    if (!targetOutput) return;

    targetOutput.innerHTML = `
        <div class="bulletin-box glitch-screen" style="margin-top:25px;">
            <h3>[AUMC MASTER ARCHIVE DATA DECRYPTED]</h3>
            <p><strong>LAYER 01 LOGISTICS:</strong> Fortress Location Variant // Blight Affected Area // Monitor: agent Rip_Eminemthegoat</p>
            <p><strong>LAYER 02 SYMPTOM:</strong> Ari Perspective // High-Onset Aphasia // "The fourth shadow does not belong to anyone."</p>
            <p><strong>LAYER 03 METRIC:</strong> Death of Blutsaugers Friend // Anchor Name: Christian Wolff // Key: Anton Felix Becvarovski</p>
            <p><strong>LAYER 04 VECTOR:</strong> Vascular Hemorrhage Active // Morse Sequence Verified // "Reporting for duty."</p>
            <p><strong>LAYER 05 ROUTING:</strong> Clearance Code Intercept Hidden In Layer 02 Frame Feeds.</p>
            <p><strong>LAYER 06 SCHISM:</strong> Rationalism And Experience Matrix // Do Not Pursue Paths Single-Mindedly.</p>
            <p><strong>LAYER 07 ID:</strong> Corp ID Equals Finite Order Topological Manifold Exotic Differentiable Space Space Parameter Invariant (Milnor 1956).</p>
        </div>
    `;
    setConsoleFeedback("SUCCESS: ALL EXCLUSION RECORDS PARSED.");
}

function setConsoleFeedback(msg) {
    const feedbackField = document.getElementById("terminal-feedback-log");
    if (feedbackField) {
        feedbackField.innerText = msg;
    }
}
