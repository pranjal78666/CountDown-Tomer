// Set the target date for the countdown (YYYY-MM-DD HH:MM:SS)
const targetDate = new Date("2023-12-31T23:59:59").getTime();

// Update the countdown every second
const timerInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeLeft = targetDate - currentDate;

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = padNumber(days);
        document.getElementById("hours").textContent = padNumber(hours);
        document.getElementById("minutes").textContent = padNumber(minutes);
        document.getElementById("seconds").textContent = padNumber(seconds);
    }
}

function padNumber(number) {
    return number.toString().padStart(2, "0");
}

// Initial call to update the countdown
updateCountdown();
