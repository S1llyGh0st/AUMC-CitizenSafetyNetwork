const layers = {
    "01": "01: The game was a conditioning test.",
    "02": "02: The Quiet One counts breaths. Stay silent.",
    "03": "03: Mladá Boleslav was the birthplace of the lie.",
    "04": "04: Forensics. It listens through the telegraph.",
    "05": "05: The menu is moving. You are being watched.",
    "06": "06: Sufficient Reason. You cannot win.",
    "07": "07: The Number is [REDACTED]. Never speak it."
};

document.getElementById('in').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const val = e.target.value.trim();
        document.getElementById('output').innerHTML += `<p>> ${val}<br>${layers[val] || 'ERROR'}</p>`;
        e.target.value = '';
    }
});
