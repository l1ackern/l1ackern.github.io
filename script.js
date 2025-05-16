function startCountdown() {
    let time = 1228 * 3600 * 24 + 21 * 3600 + 50 * 60; // 初始时间转换为秒
    const countdownElement = document.getElementById('countdown');

    setInterval(() => {
        time--;
        if (time < 0) time = 0; // 防止负数

        const days = Math.floor(time / (3600 * 24));
        const hours = Math.floor((time % (3600 * 24)) / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        countdownElement.textContent = `${days}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }, 1000);
}

function pad(num) {
    return num < 10 ? `0${num}` : num;
}

startCountdown();
