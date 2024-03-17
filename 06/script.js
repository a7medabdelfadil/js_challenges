let circles = document.querySelectorAll('circle'),
    greenCircle = document.getElementById('green'),
    yellowCircle = document.getElementById('yellow'),
    redCircle = document.getElementById('red'),
    checker = 0,
    timer = 3000;

function checkLed() {
    if (checker % 3 === 0) {
        greenCircle.classList.remove('hidden')
        yellowCircle.classList.add('hidden')
        redCircle.classList.add('hidden')
        checker++;
        timer = 9000;
    } else if (checker % 3 === 1) {
        greenCircle.classList.add('hidden')
        yellowCircle.classList.add('hidden')
        redCircle.classList.remove('hidden')
        checker++;
        timer = 9000;
    } else {
        greenCircle.classList.add('hidden')
        yellowCircle.classList.remove('hidden')
        redCircle.classList.add('hidden')
        checker++;
        timer = 3000;
    }
}

checkLed();

function updateInterval() {
    clearInterval(update)
    update = setInterval(() => {
        checkLed();
        updateInterval();
    }, timer);
}

let update = setInterval(() => {
    checkLed();
    updateInterval();
}, timer);