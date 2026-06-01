// AUMC-CSN MASTER LOGIC // VERSION 2.4.1
const LORE_LAYERS = {
    "01": "LAYER 01: The Second Major Location affected by the blight in the Napoleonic wars. Only survivors speak the dialect of the Guts and Blackpowder. A massive Fortress stands. Agent Rip_Eminemthegoat has verified the site integrity.",
    "02": "LAYER 02: 42 6c 75 74... the first two shall be given through base-16... 73 61 75... the next 2 will be shown through the language of 0s and 1s... 67 65 72... the last three shall be translated into blocks of six printable bits. [Ari][Perspective 2][Aphasia]. Blutsauger is everywhere. 426c7574 736175676572.",
    "03": "LAYER 03: Documenting the Death of Blutsauger's friend. Christian Wolff... the silence is heavy. The birth of Anton Felix Becvarovski recorded in the ledger. The Great Chain remembers.",
    "04": "LAYER 04: Vascular hemorrhage observed in ocular tissues. You [REDACTED] an Agent. Reporting for duty. The telegraph pulses rhythmically.",
    "05": "LAYER 05: Go back to Layer02. The footage contained in Layer02 gives clearance code. Whats her name? Where are you?",
    "06": "LAYER 06: Rationalism and experience are no longer distinct. <span style='opacity: 0.05;'>One must not pursue one path at the expense of another.</span>",
    "07": "LAYER 07: your Corp Id is the precise integer representing the finite order of the... boundary logic remains unstable."
};

function processInput() {
    let input = document.getElementById('terminalInput').value.trim();
    let display = document.getElementById('terminalOutput');
    
    // Recruitment Override
    if(input === "46696565") {
        window.location.href = "YOUROWNUTTERANCE.html";
        return;
    }
    
    // Layer Retrieval
    if(LORE_LAYERS[input]) {
        display.innerHTML += `<p>> ${input}<br>${LORE_LAYERS[input]}</p>`;
    } else if (input === "12192020") {
        display.innerHTML += `<p>> 12192020<br>Silliness_Doctrine_Loaded. Messenger: SillyGhost.</p>`;
    } else {
        display.innerHTML += `<p>> ${input}<br>ERROR: Invalid Syntax / Access Denied.</p>`;
    }
    document.getElementById('terminalInput').value = '';
}
