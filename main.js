/**
 * AUMC CITIZEN SAFETY NETWORK: ARCHIVE LOGIC CONSOLE (main.js)
 */

document.addEventListener("DOMContentLoaded", function() {
    initGlobalNavigationUI();
    initAccordionSystems();
    initAUMCTerminal();
    initClickableAnomalies();
    initAudioEnvironment();
});

// UNIFIED HIGH-UTILITY NAV HIGHLIGHTER
function initGlobalNavigationUI() {
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".aumc-nav-links a");
    navLinks.forEach(link => {
        if(link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });
}

// EXPANDABLE EMERGENCY HUB PANELS
function initAccordionSystems() {
    const headers = document.querySelectorAll(".accordion-header");
    headers.forEach(header => {
        header.addEventListener("click", function() {
            const content = this.nextElementSibling;
            const indicator = this.querySelector(".acc-indicator");
            
            if (content.style.maxHeight && content.style.maxHeight !== "0px") {
                content.style.maxHeight = "0px";
                content.style.paddingTop = "0px";
                content.style.paddingBottom = "0px";
                if(indicator) indicator.innerText = "[+]";
            } else {
                content.style.maxHeight = content.scrollHeight + 40 + "px";
                content.style.paddingTop = "15px";
                content.style.paddingBottom = "15px";
                if(indicator) indicator.innerText = "[-]";
            }
        });
    });
}

// SECURE PASSCODE INTERACTION CONTROL
function initAUMCTerminal() {
    const txtInput = document.getElementById("terminal-override-input");
    const btnSubmit = document.getElementById("terminal-override-submit");
    if (!txtInput || !btnSubmit) return;

    txtInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            validateBypassSequence(txtInput.value.trim());
        }
    });
    btnSubmit.addEventListener("click", function() {
        validateBypassSequence(txtInput.value.trim());
    });
}

function validateBypassSequence(rawKey) {
    const cleanKey = rawKey.replace(/\s+/g, "");
    const feedbackBox = document.getElementById("terminal-feedback-log");

    if (cleanKey === "46696565") {
        if(feedbackBox) feedbackBox.innerText = "REDIRECT PROTOCOL ACCEPTED... TRANSMITTING UTTERANCE INDEX.";
        setTimeout(() => { window.location.href = "YOUROWNUTTERANCE.html"; }, 1000);
        return;
    }

    if (cleanKey === "12192020") {
        injectArchivalLayerMatrix();
        return;
    }

    if(feedbackBox) {
        feedbackBox.className = "glitch-screen";
        feedbackBox.innerText = "CRITICAL SHUTDOWN: VERIFICATION ROUTINE REFUSED. DETECTED PERSPECTIVE DRIFT.";
        console.warn("AUMC EXCEPTION: 1725 - ANOMALY AT TIME 10:26 PM. DO NOT RELY ON VISUAL CONTINUITY.");
    }
}

// 7-LAYER CONTAMINATED SYSTEM MANIFEST INJECTION
function injectArchivalLayerMatrix() {
    const container = document.getElementById("aumc-layer-manifest");
    if (!container) return;

    container.innerHTML = `
        <div class="glitch-text" style="border: 2px solid #FF0000; padding: 20px; margin-top: 30px; background: rgba(15,0,0,0.85);">
            <h3 style="margin-top:0;">[LEVEL 5 CLEARANCE REQUIRED - UNAUTHORIZED SECTOR DEPLOYMENT]</h3>
            <p style="font-size:0.85em;">WARNING: THE SUBJECT MAY ALREADY BE INSIDE. YOU HEAR FEWER BREATHS THAN BODIES.</p>
            <hr style="border-color: #ff0000;">
            
            <div style="margin-bottom: 20px;">
                <strong>LAYER 01 [LOCATION MATRIX]:</strong> <span class="redacted">Fortress Sector</span><br>
                <em>Context Flag:</em> "The Second Major Location affected by the blight in the napolenic wars, only survivors speak the dialect of the Guts and Blackpowder."<br>
                <em>Monitoring Agent Auth:</em> agent Rip_Eminemthegoat
            </div>

            <div style="margin-bottom: 20px;">
                <strong>LAYER 02 [SENSORY METRIC]:</strong> Perspective Two (Ari Evaluation Frame)<br>
                <em>Diagnostic Pathology:</em> Aphasia Inducement.<br>
                <em>Cipher Integrity Map:</em> "the first two shall be given through base-16 the next 2 will be shown through the language of 0s and 1s, the last three shall be translated into blocks of six printable bits."<br>
                <em>Baseline Signature ID:</em> <span style="color:#00ff41;">426c7574736175676572</span> (Blutsauger Validation Track)
            </div>

            <div style="margin-bottom: 20px;">
                <strong>LAYER 03 [TEMPORAL EXCLUSION]:</strong> "The Death of Blutsaugers friend"<br>
                <em>Historical Contact Anchor:</em> Christian Wolff [Muted Input String]<br>
                <em>Astronomical Record Trigger:</em> Birth of Anton Felix Becvarovski (Ref Index: 1725 / 295)
            </div>

            <div style="margin-bottom: 20px;">
                <strong>LAYER 04 [BIOLOGICAL VECTOR]:</strong> Vascular hemorrhage in eye membrane tissue structures.<br>
                <em>Encrypted Military Broadcast Protocol:</em> <code>&gt;-. --- - .... .. -. --. / .- / -... ..- .-.. .-.. . - / - --- / - .... . / .... . .- -.. / -.-. .- -. - / ..-. .. -..-&lt;</code><br>
                <em>Personnel Alignment Stamp:</em> "You [REDACTED] an Agent... Reporting for duty."
            </div>

            <div style="margin-bottom: 20px;">
                <strong>LAYER 05 [VERIFICATION SEQUENCE]:</strong> Cross-Reference Route Map: "Go back to Layer02" || "The footage contained in Layer02 gives clearance code"<br>
                <em>Interrogation Triggers:</em> "Whats her name" -- "Where are you?"
            </div>

            <div style="margin-bottom: 20px;">
                <strong>LAYER 06 [CRITICAL EQUALIZATION]:</strong> Epistemological Alignment Matrix: Rationalism combined with isolated sensory experience.<br>
                <em style="opacity:0.4;">"One must not pursue one path at the expense of another."</em>
            </div>

            <div>
                <strong>LAYER 07 [SYSTEM IDENTIFICATION MATRIX]:</strong> Finite Topological Space Allocation.<br>
                <em>Corporate Assignment Logic:</em> "Your Corp Id is the precise integer representing the finite order of the group of exotic differentiable structures admitting a topological manifold structure rigidified by a singular structural invariant of (\pi_7(O)), specifically referencing the invariant boundary configurations discovered by Milnor in 1956 for the compact localization of the seven-dimensional orthogonal group space."
            </div>
        </div>
    `;
    
    const feedbackBox = document.getElementById("terminal-feedback-log");
    if(feedbackBox) {
        feedbackBox.className = "";
        feedbackBox.innerText = "SUCCESS: UNRELIABLE DATA DEPLOYED. PREVIOUSLY ISSUED GUIDANCE IS INCOMPLETE.";
    }
}

// ENVIRONMENTAL CLICKABLE CORRUPTIONS
function initClickableAnomalies() {
    document.addEventListener("click", function(e) {
        if(e.target && e.target.classList.contains("clickable-anomaly")) {
            e.target.style.color = "#FF0000";
            e.target.innerText = " [ANY ACKNOWLEDGMENT MAY BE INTERPRETED AS PERMISSION] ";
            console.error("CRITICAL EXCEPTION: Perspective determines structure. The house remembers.");
        }
    });
}

// AUDIO ENVIRONMENT FRAMEWORK
function initAudioEnvironment() {
    window.addEventListener("click", function() {
        // Initializes dynamic web audio metrics gracefully once user confirms baseline screen focus interaction
        if (!window.AUMCAudioContext) {
            window.AUMCAudioContext = new (window.AudioContext || window.webkitAudioContext)();
            runLowFrequencyHum();
        }
    }, { once: true });
}

function runLowFrequencyHum() {
    try {
        let osc = window.AUMCAudioContext.createOscillator();
        let gain = window.AUMCAudioContext.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(55, window.AUMCAudioContext.currentTime); // 55Hz Low Muffled Breathing Resonance
        gain.gain.setValueAtTime(0.008, window.AUMCAudioContext.currentTime);
        osc.connect(gain);
        gain.connect(window.AUMCAudioContext.destination);
        osc.start();
    } catch(e) {}
}
