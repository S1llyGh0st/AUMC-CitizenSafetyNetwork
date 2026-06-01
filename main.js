/**
 * AUMC CITIZEN SAFETY NETWORK: INTERACTIVE TERMINAL ENGINE (main.js)
 */

document.addEventListener("DOMContentLoaded", function() {
    initializeAUMCTerminal();
});

function initializeAUMCTerminal() {
    const txtInput = document.getElementById("terminal-override-input");
    const btnSubmit = document.getElementById("terminal-override-submit");
    
    if (!txtInput || !btnSubmit) return;

    txtInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            validateTerminalString(txtInput.value.trim());
        }
    });

    btnSubmit.addEventListener("click", function() {
        validateTerminalString(txtInput.value.trim());
    });
}

function validateTerminalString(rawString) {
    const scrubbedKey = rawString.replace(/\s+/g, "");

    // REDIRECT SEQUENCE EVENT
    if (scrubbedKey === "46696565") {
        window.location.href = "YOUROWNUTTERANCE.html";
        return;
    }

    // MULTI-LAYER DOSSIER EMBED EVENT
    if (scrubbedKey === "12192020") {
        injectLayerMatrixDossier();
        return;
    }

    renderTerminalFeedback("ERROR: ACCESS REFUSED. INVALID RECRUITMENT IDENTIFICATION ROUTINE.");
}

function injectLayerMatrixDossier() {
    const manifestTarget = document.getElementById("aumc-layer-manifest");
    if (!manifestTarget) return;

    manifestTarget.innerHTML = `
        <div class="vhs-screen" style="border: 1px solid #00ff41; padding: 20px; margin-top: 30px; background: rgba(0,15,0,0.6);">
            <h2 style="color: #00ff41; font-size: 1.3em;">[AUMC MASTER SECURITY DOSSIER ACCESSED]</h2>
            <hr style="border-color: #00ff41;">
            
            <div style="margin-bottom: 20px;">
                <h4>LAYER 01: LOGISTICAL PLACEMENT IDENTIFIER</h4>
                <p><strong>REQUISITION TARGET:</strong> Fortress</p>
                <p><strong>GEOSPATIAL FRAMEWORK:</strong> "The Second Major Location affected by the blight in the napolenic wars, only survivors speak the dialect of the Guts and Blackpowder"</p>
                <p><strong>ASSIGNED LIAISON:</strong> agent Rip_Eminemthegoat</p>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h4>LAYER 02: COGNITIVE DECAY INDEX</h4>
                <p><strong>TARGET PERSPECTIVE:</strong> Ari (Perspective 2)</p>
                <p><strong>SYMPTOMATIC PROFILE:</strong> Aphasia</p>
                <p><strong>CIPHER INTEGRITY MAP:</strong> "the first two shall be given through base-16 the next 2 will be shown through the language of 0s and 1s, the last three shall be translated into blocks of six printable bits."</p>
                <p><strong>FRAGMENTED MARKER:</strong> 426c7574736175676572 [BLUTSAUGER PHANTOM DATA TRACK SIGNATURE]</p>
            </div>

            <div style="margin-bottom: 20px;">
                <h4>LAYER 03: RECORDED ANOMALIES</h4>
                <p><strong>EVENT CORRELATION:</strong> "The Death of Blutsaugers friend"</p>
                <p><strong>CONTACT ANCHOR:</strong> Christian Wolff [METRIC ANOMALY DETECTED]</p>
                <p><strong>ASTRONOMICAL FLAG:</strong> Birth of anton felix becvarovski</p>
            </div>

            <div style="margin-bottom: 20px;">
                <h4>LAYER 04: VASCULAR VECTOR ANALYSIS</h4>
                <p><strong>OCULAR CONDITION ASSESSMENT:</strong> Vascular hemorrhage in eyes confirmed.</p>
                <p><strong>ENCRYPTED DATA FEED:</strong> &gt;-. --- - .... .. -. --. / .- / -... ..- .-.. .-.. . - / - --- / - .... . / .... . .- -.. / -.-. .- -. - / ..-. .. -..-&lt;</p>
                <p><strong>FIELD STATEMENT:</strong> "You [redacted] an Agent... Reporting for duty."</p>
            </div>

            <div style="margin-bottom: 20px;">
                <h4>LAYER 05: VERIFICATION PROTOCOLS</h4>
                <p><strong>CROSS MATRIX ROUTE:</strong> "Go back to Layer02" // "The footage contained in Layer02 gives clearance code"</p>
                <p><strong>INTERROGATION REQUISITIONS:</strong> "Whats her name" -- "Where are you?"</p>
            </div>

            <div style="margin-bottom: 20px;">
                <h4>LAYER 06: PHILOSOPHICAL DOCTRINE MATRIX</h4>
                <p><strong>EPISTEMOLOGICAL VECTOR:</strong> Rationalism and experience</p>
                <p style="opacity: 0.05; font-size: 0.8em; font-style: italic;">"One must not persue one path at the expense of another"</p>
            </div>

            <div>
                <h4>LAYER 07: RIGID FINITE GROUPS ANALYSIS</h4>
                <p><strong>CORPORATE INTEGER SPECIFICATION:</strong> "your Corp Id is the precise integer representing the finite order of the group of exotic differentiable structures admitting a topological manifold structure rigidified by a singular structural invariant of (\\pi_7(O)), specifically referencing the invariant boundary configurations discovered by Milnor in 1956 for the compact localization of the seven-dimensional orthogonal group space"</p>
            </div>
        </div>
    `;
    
    renderTerminalFeedback("AUMC EXCLUSION FILES RETRIEVED SUCCESSFULLY.");
}

function renderTerminalFeedback(logText) {
    const feedbackBox = document.getElementById("terminal-feedback-log");
    if (feedbackBox) {
        feedbackBox.innerText = logText;
    }
}
