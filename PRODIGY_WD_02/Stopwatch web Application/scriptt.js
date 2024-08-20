let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');
let display = document.getElementById('display');

let stopwatchInterval;
let elapsedTime = 0;
let running = false;

function updateTime() {
    let hours = Math.floor(elapsedTime / 3600000);
    let minutes = Math.floor((elapsedTime % 3600000) / 60000);
    let seconds = Math.floor((elapsedTime % 60000) / 1000);

    // Format the time
    display.innerHTML = 
        (hours < 10 ? "0" : "") + hours + ":" + 
        (minutes < 10 ? "0" : "") + minutes + ":" + 
        (seconds < 10 ? "0" : "") + seconds;
}

function startStopwatch() {
    if (!running) {
        running = true;
        let startTime = Date.now() - elapsedTime;

        stopwatchInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateTime();
        }, 1000);
    }
}

function stopStopwatch() {
    if (running) {
        running = false;
        clearInterval(stopwatchInterval);
    }
}

function resetStopwatch() {
    running = false;
    clearInterval(stopwatchInterval);
    elapsedTime = 0;
    updateTime();
}

startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);
resetButton.addEventListener('click', resetStopwatch);
