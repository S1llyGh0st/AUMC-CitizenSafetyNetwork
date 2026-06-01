// AUMC-CSN CORE LOGIC
const accessCodes = { "46696565": "hidden.html", "12192020": "sillyghost.html" };
function verifyAccess() {
    let code = document.getElementById('terminalInput').value;
    if(accessCodes[code]) {
        console.log("Access Granted: AUMC Behavioral Induction Experiment");
        window.location.href = accessCodes[code];
    } else {
        alert("Access Denied: You were not supposed to receive this version.");
    }
}
// Monitor for anomaly patterns
console.log("Monitoring personnel: [REDACTED] - STATUS: UNSTABLE");
