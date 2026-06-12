let timeLeft = 60;
let timerStarted = false;
let timer;

const inputText = document.getElementById("inputText");
const timeDisplay = document.getElementById("time");
const wpmDisplay = document.getElementById("wpm");

inputText.addEventListener("input", () => {
    if (!timerStarted) {
        startTimer();
        timerStarted = true;
    }

    calculateWPM();
});

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            inputText.disabled = true;
            calculateWPM();
        }
    }, 1000);
}

function calculateWPM() {
    let words = inputText.value.trim().split(/\s+/).length;

    if (inputText.value.trim() === "") {
        words = 0;
    }

    let timeElapsed = (60 - timeLeft) / 60;

    if (timeElapsed > 0) {
        let wpm = Math.round(words / timeElapsed);
        wpmDisplay.textContent = wpm;
    }
}

function resetTest() {
    clearInterval(timer);
    timeLeft = 60;
    timerStarted = false;

    timeDisplay.textContent = timeLeft;
    wpmDisplay.textContent = 0;

    inputText.value = "";
    inputText.disabled = false;
}