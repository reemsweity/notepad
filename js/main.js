function formatText(command) {
    document.execCommand(command, false, null);
}


function changeTextColor() {
    const color = document.getElementById('textColor').value;
    document.getElementById('textArea').style.color = color;
}


function changeBgColor() {
    const color = document.getElementById('bgColor').value;
    document.getElementById('textArea').style.backgroundColor = color;
}


function changeCase(caseType) {
    const textArea = document.getElementById('textArea');
    if (caseType === 'uppercase') {
        textArea.innerHTML = textArea.innerHTML.toUpperCase();
    } else if (caseType === 'lowercase') {
        textArea.innerHTML = textArea.innerHTML.toLowerCase();
    }
}


function capitalizeText() {
    const textArea = document.getElementById('textArea');
    const words = textArea.innerHTML.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    textArea.innerHTML = words.join(' ');
}


function clearText() {
    document.getElementById('textArea').innerHTML = '';
}
function changeFontSize() {
    const size = document.getElementById('fontSize').value;
    document.getElementById('textArea').style.fontSize = size + 'px';
}