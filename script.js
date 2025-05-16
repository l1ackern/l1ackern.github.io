function startCountdown() {
    // 设置初始时间（1228天 21小时 50分钟 00秒）
    let totalSeconds = (1228 * 24 * 60 * 60) + (21 * 60 * 60) + (50 * 60);

    const countdownElement = document.getElementById('countdown');

    function updateCountdown() {
        if (totalSeconds <= 0) {
            countdownElement.textContent = '00:00:00:00';
            return;
        }

        totalSeconds--;

        const days = Math.floor(totalSeconds / (24 * 60 * 60));
        const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        const seconds = totalSeconds % 60;

        countdownElement.textContent = `${days}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }

    function pad(num) {
        return num < 10 ? `0${num}` : num;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

window.onload = startCountdown;
