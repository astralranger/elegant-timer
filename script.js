let timer;
let isRunning = false;
let seconds = 0;

function updateTimerDisplay() {
    const timerDisplay = document.getElementById('timer');
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    timerDisplay.textContent = `${hours}:${minutes}:${secs}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            updateTimerDisplay();
        }, 1000);
    }
}

function pauseTimer() {
    isRunning = false;
    clearInterval(timer);
}

function resetTimer() {
    isRunning = false;
    clearInterval(timer);
    seconds = 0;
    updateTimerDisplay();
}
