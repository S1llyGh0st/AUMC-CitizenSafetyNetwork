/**
 * AUMC-CSN EMERGENCY NETWORK: INTERACTION LOGIC COMPILER (main.js)
 */

document.addEventListener("DOMContentLoaded", function() {
    initializeUnifiedTerminal();
});

function initializeUnifiedTerminal() {
    const inputNode = document.getElementById("terminal-override-input");
    const submitNode = document.getElementById("terminal-override-submit");
    
    if (!inputNode || !submitNode) return;

    inputNode.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            processAUMCCredential(inputNode.value.trim());
        }
    });

    submitNode.addEventListener("click", function() {
        processAUMCCredential(inputNode.value.trim());
    });
}

function processAUMCCredential(rawInput) {
    const scrubbedKey = rawInput.replace(/\s+/g, "");

    // ROUTE 01: RESTRICTED DOSSIER OVERRIDE
    if (scrubbedKey === "46696565") {
        window.location.href = "YOUROWNUTTERANCE.html";
        return;
    }

    // ROUTE 02: DYNAMIC PERSAL COMPRESSION LAYER OVERLAY
    if (scrubbedKey === "12192020") {
        revealDynamicMatrixLayers();
        return;
    }

    renderTerminalLog("AUMC EXCEPTION: ACCESS CODES REJECTED. TRANSACTION FORBIDDEN.");
}

function revealDynamicMatrixLayers() {
    const layerTarget = document.getElementById("aumc-layer-manifest");
    if (!layerTarget) return;

    layerTarget.innerHTML = `
        <div class="vhs-screen" style="border: 1px solid #00ff41; padding: 20px; margin-top: 30px; background: rgba(0,15,0,0.7); box-shadow: 0 0 15px rgba(0,255,65,0.2);">
            <h3 style="margin-top:0; color:#ff0000;">[AUMC EXCLUSION FILE INTERCEPT VERIFIED]</h3>
            <hr style="border-color:#00ff41; opacity:0.3;">
            <p><strong>LAYER 01:</strong> Fortress [Vardøhus Fortress Core Execution Logs] // agent Rip_Eminemthegoat</p>
            <p><strong>LAYER 02:</strong> Ari Perspective [Aphasia Pathology Confirmed] // Map Index: base-16 calculation track.</p>
            <p><strong>LAYER 03:</strong> Chrono Vector [Death of Blutsaugers friend // Christian Wolff // Anton Felix Becvarovski]</p>
            <p><strong>LAYER 04:</strong> Binary Matrix [-. --- - .... .. -. --. / .- / -... ..- .-.. .-.. . - / - --- / - .... . / .... . .- -.. / -.-. .- -. - / ..-. .. -..-]</p>
            <p><strong>LAYER 05:</strong> Cross Check Route [Reference Layer 02 footage parameters]</p>
            <p><strong>LAYER 06:</strong> Epistemology Vector [Rationalism vs experience balance loop]</p>
            <p><strong>LAYER 07:</strong> Group Topology Invariant [Milnor compact orthogonal group space calculation order]</p>
        </div>
    `;
    renderTerminalLog("AUMC INTEGRITY MATRIX INJECTED.");
}

function renderTerminalLog(textPayload) {
    const feedbackBox = document.getElementById("terminal-feedback-log");
    if (feedbackBox) {
        feedbackBox.innerText = textPayload;
    }
}
