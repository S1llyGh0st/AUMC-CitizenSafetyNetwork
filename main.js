const LORE = {
    "01": "LAYER 01: Napoleonic blight. Fortress. Agent Rip_Eminemthegoat. Survivors speak the Guts and Blackpowder dialect.",
    "02": "LAYER 02: 42 6c 75 74... 010101... [Ari] [Perspective 2] [Aphasia] Blutsauger is everywhere. 736175676572.",
    "03": "LAYER 03: The Death of Blutsauger's friend. Christian Wolff. The birth of Anton Felix Becvarovski.",
    "04": "LAYER 04: Vascular hemorrhage in eyes. You [REDACTED] an Agent. Reporting for duty.",
    "05": "LAYER 05: Go back to Layer02. Clearance code found in Layer02. Whats her name? Where are you?",
    "06": "LAYER 06: Rationalism and experience are no longer distinct. <span style='opacity: 0.05;'>One must not pursue one path at the expense of another.</span>",
    "07": "LAYER 07: your Corp Id is the precise integer representing the finite order of the..."
};

function processCmd() {
    let input = document.getElementById('terminalInput').value.trim();
    if(input === "46696565") window.location.href = "YOUROWNUTTERANCE.html";
    if(input === "12192020") alert("Silliness Doctrine Loaded. Messenger: SillyGhost.");
    if(LORE[input]) document.getElementById('out').innerHTML += `<p>> ${input}<br>${LORE[input]}</p>`;
}
