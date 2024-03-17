let keys = document.querySelectorAll('.key')
let sound = new Audio('/sounds/219069__annabloom__click1.wav')

document.addEventListener('keydown', function (event) {
    if (event.key === 'a' || event.key === 'A') {
        handlePress('A')
        sound.play()
    }
    else if (event.key === 'b' || event.key === 'B') {
        handlePress('B')
        sound.play()
    }
    else if (event.key === 'c' || event.key === 'C') {
        handlePress('C')
        sound.play()
    }
    else if (event.key === 'D' || event.key === 'd') {
        sound.play();
        handlePress('D');
    }
    else if (event.key === 'E' || event.key === 'e') {
        sound.play();
        handlePress('E');
    }
    else if (event.key === 'F' || event.key === 'f') {
        sound.play();
        handlePress('F');
    }
    else if (event.key === 'G' || event.key === 'g') {
        sound.play();
        handlePress('G');
    }
    else if (event.key === 'H' || event.key === 'h') {
        sound.play();
        handlePress('H');
    }
    else if (event.key === 'I' || event.key === 'i') {
        sound.play();
        handlePress('I');
    }
    else if (event.key === 'J' || event.key === 'j') {
        sound.play();
        handlePress('J');
    }
    else if (event.key === 'K' || event.key === 'k') {
        sound.play();
        handlePress('K');
    }
    else if (event.key === 'L' || event.key === 'l') {
        sound.play();
        handlePress('L');
    }
    else if (event.key === 'M' || event.key === 'm') {
        sound.play();
        handlePress('M');
    }
    else if (event.key === 'N' || event.key === 'n') {
        sound.play();
        handlePress('N');
    }
    else if (event.key === 'O' || event.key === 'o') {
        sound.play();
        handlePress('O');
    }
    else if (event.key === 'P' || event.key === 'p') {
        sound.play();
        handlePress('P');
    }
    else if (event.key === 'Q' || event.key === 'q') {
        sound.play();
        handlePress('Q');
    }
    else if (event.key === 'R' || event.key === 'r') {
        sound.play();
        handlePress('R');
    }
    else if (event.key === 'S' || event.key === 's') {
        sound.play();
        handlePress('S');
    }
    else if (event.key === 'T' || event.key === 't') {
        sound.play();
        handlePress('T');
    }
    else if (event.key === 'U' || event.key === 'u') {
        sound.play();
        handlePress('U');
    }
    else if (event.key === 'V' || event.key === 'v') {
        sound.play();
        handlePress('V');
    }
    else if (event.key === 'W' || event.key === 'w') {
        sound.play();
        handlePress('W');
    }
    else if (event.key === 'X' || event.key === 'x') {
        sound.play();
        handlePress('X');
    }
    else if (event.key === 'Y' || event.key === 'y') {
        sound.play();
        handlePress('Y');
    }
    else if (event.key === 'Z' || event.key === 'z') {
        sound.play();
        handlePress('Z');
    }
    else if (event.key === '0' || event.key === ')') {
        sound.play();
        handlePress('0');
    }
    else if (event.key === '1' || event.key === '!') {
        sound.play();
        handlePress('1');
    }
    else if (event.key === '2' || event.key === '@') {
        sound.play();
        handlePress('2');
    }
    else if (event.key === '3' || event.key === '#') {
        sound.play();
        handlePress('3');
    }
    else if (event.key === '4' || event.key === '$') {
        sound.play();
        handlePress('4');
    }
    else if (event.key === '5' || event.key === '%') {
        sound.play();
        handlePress('5');
    }
    else if (event.key === '6' || event.key === '^') {
        sound.play();
        handlePress('6');
    }
    else if (event.key === '7' || event.key === '&') {
        sound.play();
        handlePress('7');
    }
    else if (event.key === '8' || event.key === '*') {
        sound.play();
        handlePress('8');
    }
    else if (event.key === '9' || event.key === '(') {
        sound.play();
        handlePress('9');
    }
    else if (event.key === ',' || event.key === '<') {
        sound.play();
        handlePress(',');
    }
    else if (event.key === '.' || event.key === '>') {
        sound.play();
        handlePress('.');
    }
    else if (event.key === '/' || event.key === '?') {
        sound.play();
        handlePress('/');
    }
    else if (event.key === ';' || event.key === ':') {
        sound.play();
        handlePress(';');
    }
    else if (event.key === '"' || event.key === "'") {
        sound.play();
        handlePress("'");
    }
    else if (event.key === '=' || event.key === "+") {
        sound.play();
        handlePress("=");
    }
    else if (event.key === '-' || event.key === "_") {
        sound.play();
        handlePress("-");
    }
    else if (event.key === '`' || event.key === "~") {
        sound.play();
        handlePress("`");
    }
    else if (event.key === '[' || event.key === "}") {
        sound.play();
        handlePress("[");
    }
    else if (event.key === ']' || event.key === "}") {
        sound.play();
        handlePress("]");
    }
    else if (event.key === '`' || event.key === "~") {
        sound.play();
        handlePress("`");
    }
})

function handlePress(dataKey) { // A
    keys.forEach( key => {
        if (key.dataset.key === dataKey) {
            let keyElement = key;
            keyElement.classList.add('clicked')
            setTimeout(() => {
                keyElement.classList.remove('clicked')
            }, 100);
        }

    })
}

keys.forEach( function (key) {
    key.addEventListener('click', handleClick)
})

function handleClick() {
    this.classList.add('clicked')
    let keyElement = this
    sound.play()
    setTimeout(() => {
        keyElement.classList.remove('clicked')
    }, 100);

}