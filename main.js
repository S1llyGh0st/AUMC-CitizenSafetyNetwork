 /* =========================
   CORE SYSTEM INIT
========================= */

document.addEventListener("DOMContentLoaded", () => {
    console.log("[AUMC-CSN] Main interface initialized");
    console.log("[WARNING] NODE INTERPRETATION LAYER ACTIVE");

    typewriterInit();
    enableRedactionReveal();
    enableHiddenToggle();
    randomCorruptionEvent();
    initializeHiddenGlitchLayer(); // NEW ARG LAYER HOOK
});

/* =========================
   TYPEWRITER EFFECT
========================= */

function typewriterInit() {
    const elements = document.querySelectorAll(".typewriter");

    elements.forEach(el => {
        const text = el.getAttribute("data-text") || "";
        el.innerHTML = "";
        let i = 0;

        function type() {
            if (i < text.length) {
                el.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 40);
            }
        }

        type();
    });
}

/* =========================
   REDACTION REVEAL SYSTEM
========================= */

function enableRedactionReveal() {
    const redacted = document.querySelectorAll(".redacted");

    redacted.forEach(el => {
        el.addEventListener("click", () => {
            if (el.dataset.revealed === "true") return;

            el.dataset.revealed = "true";
            el.style.background = "transparent";
            el.style.color = "#ff4d4d";
            el.innerText = el.getAttribute("data-real") || "[DATA CORRUPTED]";
        });
    });
}

/* =========================
   HIDDEN ENTRY TOGGLE SYSTEM
========================= */

function enableHiddenToggle() {
    const hiddenItems = document.querySelectorAll(".hidden");

    hiddenItems.forEach(el => {
        el.addEventListener("click", () => {
            el.classList.toggle("active");

            if (el.classList.contains("active")) {
                el.style.opacity = "1";
                el.style.filter = "blur(0)";
            } else {
                el.style.opacity = "0.2";
                el.style.filter = "blur(2px)";
            }
        });
    });
}

/* =========================
   RANDOM CORRUPTION EVENT
========================= */

function randomCorruptionEvent() {
    const chance = Math.random();

    if (chance > 0.85) {
        setTimeout(() => {
            const warning = document.createElement("div");
            warning.className = "warning";
            warning.innerText =
                "[SYSTEM WARNING] DATA INTEGRITY FAILURE DETECTED IN ARCHIVE NODE // RECONNECTING...";

            document.body.prepend(warning);

            setTimeout(() => {
                warning.remove();
            }, 5000);
        }, 2000);
    }
}

/* =========================
   TERMINAL INPUT SYSTEM
========================= */

const terminalCommands = {
    help: "AVAILABLE COMMANDS: help, status, clear, nodes",
    status: "SYSTEM STATUS: STABLE // MINOR CORRUPTION DETECTED",
    nodes: "ACTIVE NODES: AUMC-CSN / ARCHIVE / RECRUITMENT / LAYERS",

    // ARG LAYER LEAK (INTENTIONAL ANOMALY)
    12192020: "RECRUITMENT NODE ACCESS KEY DETECTED",
};

/* =========================
   TERMINAL INPUT HANDLER
========================= */

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("terminalInput");

    if (!input) return;

    input.addEventListener("keydown", (e) => {
        if (e.key !== "Enter") return;

        const value = input.value.trim().toLowerCase();
        input.value = "";

        const output = document.createElement("div");
        output.className = "terminal";

        // SECRET RECRUITMENT OVERRIDE (ARG CORE MECHANIC)
        if (value === "46696565") {
            window.location.href = "your_own_utterance.html";
            return;
        }

        output.innerText =
            terminalCommands[value] ||
            "[UNKNOWN COMMAND] TYPE 'help' FOR LIST OF COMMANDS";

        document.body.appendChild(output);
    });
});

/* =========================
   HIDDEN ARG GLITCH LAYER (INDEX FLAG SYSTEM)
========================= */

function initializeHiddenGlitchLayer() {
    const glitchPayload = document.createElement("div");

    glitchPayload.style.opacity = "0.04";
    glitchPayload.style.position = "fixed";
    glitchPayload.style.bottom = "2px";
    glitchPayload.style.left = "6px";
    glitchPayload.style.fontSize = "7px";
    glitchPayload.style.pointerEvents = "none";
    glitchPayload.style.color = "#ffffff";

    glitchPayload.innerText =
        "S____G____ has hacked the [REDACTED] Page By putting the Code [REDACTED] In Base-16 and the only letter in the code in alphabetical order";

    document.body.appendChild(glitchPayload);
}
