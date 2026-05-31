/* =========================
   CORE SYSTEM INIT
========================= */

document.addEventListener("DOMContentLoaded", () => {
    console.log("[SYSTEM] Main interface initialized");

    typewriterInit();
    enableRedactionReveal();
    enableHiddenToggle();
    randomCorruptionEvent();
});

/* =========================
   TYPEWRITER EFFECT (optional)
   Use: <div class="typewriter" data-text="Hello"></div>
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
   Click any .redacted to reveal hidden text
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
   Use: .hidden elements become fully visible on click
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
   Occasional system glitch message
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
   SIMPLE TERMINAL INPUT (optional)
   Works if you add: <input id="terminalInput">
========================= */

const terminalCommands = {
    help: "AVAILABLE COMMANDS: help, status, clear, nodes",
    status: "SYSTEM STATUS: STABLE // MINOR CORRUPTION DETECTED",
    nodes: "ACTIVE NODES: AUMC-CSN / ARCHIVE / RECRUITMENT / LAYERS",
};

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("terminalInput");

    if (!input) return;

    input.addEventListener("keydown", (e) => {
        if (e.key !== "Enter") return;

        const value = input.value.trim().toLowerCase();
        input.value = "";

        const output = document.createElement("div");
        output.className = "terminal";

        output.innerText =
            terminalCommands[value] ||
            "[UNKNOWN COMMAND] TYPE 'help' FOR LIST OF COMMANDS";

        document.body.appendChild(output);
    });
});
