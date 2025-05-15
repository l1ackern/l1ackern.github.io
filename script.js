// 设置倒计时初始值（1229天18小时04分钟14秒）
let totalSeconds = (1229 * 24 * 60 * 60) + (18 * 60 * 60) + (4 * 60) + 14;

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const countdownEl = document.querySelector('.countdown');
const marianasWebEl = document.getElementById('marianas-web');

function updateCountdown() {
    if (totalSeconds <= 0) {
        // 倒计时结束，隐藏倒计时，显示 MarianasWeb
        countdownEl.style.display = 'none';
        marianasWebEl.style.display = 'block';
        return;
    }

    // 计算天、小时、分钟、秒
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    // 更新页面显示
    daysEl.textContent = days.toString().padStart(2, '0');
    hoursEl.textContent = hours.toString().padStart(2, '0');
    minutesEl.textContent = minutes.toString().padStart(2, '0');
    secondsEl.textContent = seconds.toString().padStart(2, '0');

    // 每秒减少1
    totalSeconds--;

    // 每秒更新一次
    setTimeout(updateCountdown, 1000);
}

// 启动倒计时
updateCountdown();
