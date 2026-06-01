const ARG = {
    "46696565": "Redirecting to // YOUR_OWN_UTTERANCE // Experiment Initiated",
    "12192020": "Layer Breach // Injecting Silliness_Doctrine // Messenger: SillyGhost",
    "layers": {
        "01": "Napoleon-era blight // Fortress // Agent Rip_Eminemthegoat",
        "02": "426c7574736175676572 // Aphasia // Blutsauger",
        "03": "Christian Wolff // Anton Felix Becvarovski (18XX)",
        "04": "Vascular Hemorrhage // Reporting for duty // You [REDACTED] an Agent",
        "05": "Return to Layer02 // Who is she?",
        "06": "Rationalism vs Experience // One must not pursue one path at the expense of another.",
        "07": "Milnor Invariants // Boundary Logic // π₇(O) // Reality is differentiable."
    }
};

document.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        let input = document.getElementById('terminal').value;
        if(ARG[input]) window.location.href = `hidden.html?code=${input}`;
        if(ARG.layers[input]) console.log(ARG.layers[input]);
    }
});
