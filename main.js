/* =========================
   AUMC-CSN // MAIN NODE SYSTEM
========================= */

document.addEventListener("DOMContentLoaded", () => {
    console.log("[AUMC-CSN] Interface booted");
    console.log("[WARNING] OVERSIGHT LAYER ACTIVE // OBSERVATION ENABLED");

    typewriterInit();
    enableRedactionReveal();
    enableHiddenToggle();
    randomCorruptionEvent();
    initializeHiddenGlitchLayer();

    initializeChoiceSystem();   // NEW: faction branching system
    initializeOmegaTrigger();   // NEW: hidden episode unlock logic
});

/* =========================
   TYPEWRITER EFFECT SYSTEM
========================= */

function typewriterInit() {
    const elements = document.querySelectorAll(".typewriter");

    elements.forEach(el => {
        const text = el.getAttribute("data-text") || "";
        el.innerHTML = "";

        let i = 0;

        const tick = () => {
            if (i < text.length) {
                el.innerHTML += text.charAt(i);
                i++;
                setTimeout(tick, 35);
            }
        };

        tick();
    });
}

/* =========================
   REDACTION REVEAL SYSTEM
========================= */

function enableRedactionReveal() {
    document.querySelectorAll(".redacted").forEach(el => {
        el.addEventListener("click", () => {
            if (el.dataset.revealed === "true") return;

            el.dataset.revealed = "true";

            el.style.background = "transparent";
            el.style.color = "#ff4d4d";
            el.style.textShadow = "0 0 6px rgba(255,0,0,0.6)";

            el.innerText = el.getAttribute("data-real") || "[DATA CORRUPTED]";
        });
    });
}

/* =========================
   HIDDEN NODE TOGGLE SYSTEM
========================= */

function enableHiddenToggle() {
    document.querySelectorAll(".hidden").forEach(el => {
        el.addEventListener("click", () => {
            el.classList.toggle("active");

            if (el.classList.contains("active")) {
                el.style.opacity = "1";
                el.style.filter = "blur(0px)";
            } else {
                el.style.opacity = "0.25";
                el.style.filter = "blur(2px)";
            }
        });
    });
}

/* =========================
   RANDOM CORRUPTION EVENT (ARG NOISE LAYER)
========================= */

function randomCorruptionEvent() {
    const chance = Math.random();

    if (chance > 0.82) {
        setTimeout(() => {
            const warning = document.createElement("div");
            warning.className = "warning";
            warning.innerText =
                "[SYSTEM WARNING] NODE DESYNC DETECTED // RECONSTRUCTING MEMORY LAYER...";

            document.body.prepend(warning);

            setTimeout(() => warning.remove(), 4500);
        }, 1800);
    }
}

/* =========================
   TERMINAL COMMAND SYSTEM
========================= */

const terminalCommands = {
    help: "COMMANDS: help, status, clear, nodes",
    status: "SYSTEM STATUS: STABLE // MINOR ANOMALY DETECTED",
    nodes: "ACTIVE NODES: RECRUITMENT / ARCHIVE / OVERSIGHT / Ω (LOCKED)",

    // ARG LEAK KEY
    12192020: "RECRUITMENT NODE ACCESS KEY DETECTED // FLAG MATCH CONFIRMED"
};

/* =========================
   TERMINAL HANDLER (if present)
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

        // SECRET OVERRIDE PATH
        if (value === "46696565") {
            console.log("[OVERRIDE] Recruitment bypass triggered");
            window.location.href = "omega_node.html";
            return;
        }

        output.innerText =
            terminalCommands[value] ||
            "[UNKNOWN COMMAND] TYPE 'help' FOR LIST OF COMMANDS";

        document.body.appendChild(output);
    });
});

/* =========================
   FACTION CHOICE SYSTEM (NEW EPISODE MECHANIC)
========================= */

function initializeChoiceSystem() {
    const choices = document.querySelectorAll(".choice");

    choices.forEach(choice => {
        choice.addEventListener("click", () => {
            const path = choice.dataset.path;

            console.log(`[AUMC-CSN] Path selected: ${path}`);

            // store progression (episode state)
            localStorage.setItem("aumc_path", path);

            // visual feedback
            document.querySelectorAll(".choice").forEach(c => {
                c.style.opacity = "0.3";
            });

            choice.style.opacity = "1";
            choice.style.color = "#ff4d4d";

            // optional: trigger hidden behavior per faction
            triggerPathEffect(path);
        });
    });
}

/* Path-specific micro effects */
function triggerPathEffect(path) {
    const msg = document.createElement("div");
    msg.className = "terminal";

    switch (path) {
        case "alpha":
            msg.innerText = "[ALPHA SELECTED] STABILITY LAYER SYNCHRONIZED";
            break;

        case "beta":
            msg.innerText = "[BETA SELECTED] CONTAINMENT SIGNALS REROUTED";
            break;

        case "gamma":
            msg.innerText = "[GAMMA SELECTED] UNKNOWN SYSTEMS ACKNOWLEDGED";
            break;

        case "omega":
            msg.innerText = "[Ω SELECTED] WARNING: CLASSIFIED NODE INTERACTION";
            break;
    }

    document.body.appendChild(msg);
}

/* =========================
   Ω NODE UNLOCK SYSTEM (EPISODE SECRET)
========================= */

function initializeOmegaTrigger() {
    const omegaNode = document.querySelector(".omega-node");

    if (!omegaNode) return;

    const storedPath = localStorage.getItem("aumc_path");

    // hidden unlock condition
    if (storedPath === "gamma") {
        console.log("[Ω NODE] Unlock condition met");
        omegaNode.classList.remove("hidden");
    }
}

/* =========================
   HIDDEN GLITCH LAYER (LOW-LEVEL ARG LEAK)
========================= */

function initializeHiddenGlitchLayer() {
    const glitchPayload = document.createElement("div");

    glitchPayload.style.opacity = "0.05";
    glitchPayload.style.position = "fixed";
    glitchPayload.style.bottom = "3px";
    glitchPayload.style.left = "5px";
    glitchPayload.style.fontSize = "7px";
    glitchPayload.style.pointerEvents = "none";
    glitchPayload.style.color = "#ffffff";

    glitchPayload.innerText =
        "AUMC NODE TRACE: S____G____ encoded access fragment detected in base-16 memory shard";

    document.body.appendChild(glitchPayload);
}
