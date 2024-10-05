let startTime, updatedTime, difference, tInterval, isRunning = false;

function startTimer() {
    if (!isRunning) {
        startTime = new Date().getTime() - (difference || 0);
        tInterval = setInterval(updateTime, 1000);
        isRunning = true;
    }
}

function pauseTimer() {
    if (isRunning) {
        clearInterval(tInterval);
        difference = new Date().getTime() - startTime;
        isRunning = false;
    }
}

function resetTimer() {
    clearInterval(tInterval);
    difference = 0;
    isRunning = false;
    document.getElementById('timer').innerHTML = '00:00:00';
}

function updateTime() {
    updatedTime = new Date().getTime() - startTime;
    let hours = Math.floor((updatedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((updatedTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((updatedTime % (1000 * 60)) / 1000);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    document.getElementById('timer').innerHTML = hours + ':' + minutes + ':' + seconds;
}
