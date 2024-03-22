function addToDisplay(value) {
    document.getElementById('screen').value += value;
}

function calculate() {
    try {
        let result = eval(document.getElementById('screen').value)
        document.getElementById('screen').value = result;
    } catch (e) {
        document.getElementById('screen').value = 'Error';
    }
}

function clearScreen() {
    document.getElementById('screen').value = ''
}
