/**
 * AUMC MONITORING INFRASTRUCTURE: NETWORK ROUTING ENGINE (main.js)
 */

document.addEventListener("DOMContentLoaded", function() {
    initializeAUMCInterface();
    initializeEasterEggs();
});

function initializeAUMCInterface() {
    const overrideInput = document.getElementById("terminal-override-input");
    const overrideSubmit = document.getElementById("terminal-override-submit");
    
    if (!overrideInput || !overrideSubmit) return;

    overrideInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            validateBypassSequence(overrideInput.value.trim());
        }
    });

    overrideSubmit.addEventListener("click", function() {
        validateBypassSequence(overrideInput.value.trim());
    });
}

function validateBypassSequence(inputKey) {
    const filteredKey = inputKey.replace(/\s+/g, "");

    // TARGET REDIRECT VECTOR 01
    if (filteredKey === "46696565") {
        window.location.href = "YOUROWNUTTERANCE.html";
        return;
    }

    // LAYER RETRIEVAL VECTOR 02
    if (filteredKey === "12192020") {
        revealSecureLayers();
        return;
    }

    displayTerminalFeedback("CRITICAL ERROR: ACCESS FRAUD IDENTIFIED. OPERATIONAL BLOCK DEPLOYED.");
}

function revealSecureLayers() {
    const targetDiv = document.getElementById("aumc-layer-manifest");
    if (!targetDiv) return;

    targetDiv.innerHTML = `
        <div class="vhs-screen" style="border: 1px solid #00ff41; padding: 25px; margin-top: 35px; background: rgba(0,10,0,0.9); box-shadow: 0 0 20px rgba(0,255,65,0.15);">
            <h3 style="color: #ff0033; margin-top:0; letter-spacing:2px; animation: master-jitter 0.5s infinite;">[AUMC SECURE RECORDS - LEVEL 5 CLEARANCE APPROVED]</h3>
            <p style="font-size:0.85em; opacity:0.6;">Dossier Compiled: As of June 2026 // Target Key: 12192020</p>
            <hr style="border:0; border-top:1px dashed #00ff41; margin: 15px 0;">
            
            <div style="margin-bottom: 25px;">
                <h4 style="color:#00ff41; margin-bottom:5px;">LAYER 01: SPATIAL VECTOR MATRIX</h4>
                <p style="margin:2px 0;"><strong>LOGISTICAL ATTRIBUTION:</strong> Fortress Deployment Grid</p>
                <p style="margin:2px 0; font-style:italic;">"The Second Major Location affected by the blight in the napolenic wars, only survivors speak the dialect of the Guts and Blackpowder"</p>
                <p style="margin:2px 0;"><strong>DATA LIAISON VERIFICATION:</strong> agent Rip_Eminemthegoat</p>
            </div>
            
            <div style="margin-bottom: 25px;">
                <h4 style="color:#00ff41; margin-bottom:5px;">LAYER 02: SYMPTOMATIC ANALYSIS DETAILED</h4>
                <p style="margin:2px 0;"><strong>SUBJECT METRIC:</strong> Ari [Perspective Two Tracker]</p>
                <p style="margin:2px 0;"><strong>DIAGNOSTIC PATHOLOGY:</strong> Progressive Alpha-Aphasia</p>
                <p style="margin:2px 0; font-style:italic;">"the first two shall be given through base-16 the next 2 will be shown through the language of 0s and 1s, the last three shall be translated into blocks of six printable bits."</p>
                <p style="margin:2px 0; opacity:0.7;"><strong>DECAY MARKER SIGNATURE:</strong> 426c7574736175676572 [BLUTSAUGER PARADIGM]</p>
            </div>

            <div style="margin-bottom: 25px;">
                <h4 style="color:#00ff41; margin-bottom:5px;">LAYER 03: RECORDED ANOMALIES AND INTERCEPTS</h4>
                <p style="margin:2px 0;"><strong>EVENT TRACKING ID:</strong> "The Death of Blutsaugers friend"</p>
                <p style="margin:2px 0;"><strong>CONTACT DIRECTIVE NODE:</strong> Christian Wolff [MUTED EXCLUSION]</p>
                <p style="margin:2px 0;"><strong>ASTRONOMICAL RECORD SYNCHRONICITY:</strong> Birth of anton felix becvarovski</p>
            </div>

            <div style="margin-bottom: 25px;">
                <h4 style="color:#00ff41; margin-bottom:5px;">LAYER 04: BIOLOGICAL TRANSMISSION ATTRIBUTES</h4>
                <p style="margin:2px 0;"><strong>OCULAR EVALUATION REPORT:</strong> Vascular hemorrhage in eyes confirmed.</p>
                <p style="margin:2px 0; font-family:monospace; color:#ff0033;">&gt;-. --- - .... .. -. --. / .- / -... ..- .-.. .-.. . - / - --- / - .... . / .... . .- -.. / -.-. .- -. - / ..-. .. -..-&lt;</p>
                <p style="margin:2px 0; font-style:italic;">"You [redacted] an Agent... Reporting for duty."</p>
            </div>

            <div style="margin-bottom: 25px;">
                <h4 style="color:#00ff41; margin-bottom:5px;">LAYER 05: COGNITIVE CORRELATION DIRECTIVES</h4>
                <p style="margin:2px 0;"><strong>CROSS ROUTING REFERENCE:</strong> "Go back to Layer02" || "The footage contained in Layer02 gives clearance code"</p>
                <p style="margin:2px 0; font-weight:bold;">INTERROGATION TRACKERS: "Whats her name" -- "Where are you?"</p>
            </div>

            <div style="margin-bottom: 25px;">
                <h4 style="color:#00ff41; margin-bottom:5px;">LAYER 06: SYSTEM EPISTEMOLOGY DOCTRINE</h4>
                <p style="margin:2px 0;"><strong>METHODOLOGY ARCHETYPE:</strong> Rationalism and experience matrix integration</p>
                <p style="margin:2px 0; opacity:0.04; font-size:9px;">"One must not persue one path at the expense of another"</p>
            </div>

            <div>
                <h4 style="color:#00ff41; margin-bottom:5px;">LAYER 07: EXOTIC RECOGNITION STRUCTURAL CONSTANT</h4>
                <p style="margin:2px 0; font-size:0.9em; opacity:0.9;">"your Corp Id is the precise integer representing the finite order of the group of exotic differentiable structures admitting a topological manifold structure rigidified by a singular structural invariant of (\\pi_7(O)), specifically referencing the invariant boundary configurations discovered by Milnor in 1956 for the compact localization of the seven-dimensional orthogonal group space"</p>
            </div>
        </div>
    `;
    
    displayTerminalFeedback("AUMC CORE LAYER FILES RESTORED PRODUCING SYSTEM DUMP.");
}

function displayTerminalFeedback(textMessage) {
    const feedbackBox = document.getElementById("terminal-feedback-log");
    if (!feedbackBox) return;

    if (textMessage.includes("ERROR")) {
        feedbackBox.className = "glitch-screen";
        feedbackBox.innerText = textMessage;
        playAnomalousBeep(120, 0.4);
    } else {
        feedbackBox.className = "";
        feedbackBox.style.color = "#00ff41";
        feedbackBox.innerText = textMessage;
        playAnomalousBeep(440, 0.1);
    }
}

function playAnomalousBeep(freq, duration) {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + duration);
    } catch(e) {
        console.log("Audio pipeline suppressed by browser layout constraints.");
    }
}

function initializeEasterEggs() {
    // Hidden monitoring alert logs generated dynamically to console matrix
    console.warn("[AUMC SECURITY WARNING]: Any acknowledgment may be interpreted as permission.");
    console.error("[ALERT]: The subject may already be inside. Do not trust excessive friendliness.");
    
    // Ambient body clicks trigger subtle background audio infrastructure initialization
    document.body.addEventListener("click", function() {
        const loopTrack = document.getElementById("ambient-whisper");
        if (loopTrack && loopTrack.paused) {
            loopTrack.play().catch(() => {});
        }
    }, { once: true });
}
