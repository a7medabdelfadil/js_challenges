let timer;
let minutes = 25;
let seconds = 0;
let isTimerRunning = false;

function startTimer() {
    if (!isTimerRunning) {
        isTimerRunning = true;
        document.getElementById('startButton').textContent = 'Pause';
        timer = setInterval(updateTimer, 1000);
    } else {
        isTimerRunning = false;
        document.getElementById('startButton').textContent = 'Resume';
        clearInterval(timer);
    }

    document.getElementById('resetButton').disabled = false;
}

function resetTimer() {
    clearInterval(timer);
    isTimerRunning = false;
    document.getElementById('timer').textContent = '25:00';
    document.getElementById('startButton').textContent = 'Start';
    document.getElementById('resetButton').disabled = true;
    minutes = 25;
    seconds = 0;
}

function updateTimer() {
    if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        isTimerRunning = false;
        document.getElementById('startButton').textContent = 'Start';
        document.getElementById('resetButton').disabled = true;
    } else {
        if (seconds === 0) {
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }

        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

        document.getElementById('timer').textContent = `${formattedMinutes}:${formattedSeconds}`;
    }
}
