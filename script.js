// 设置倒计时目标时间（假设 1229 天 18 小时 04 分 14 秒 从现在开始）
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 1229);
targetDate.setHours(targetDate.getHours() + 18);
targetDate.setMinutes(targetDate.getMinutes() + 4);
targetDate.setSeconds(targetDate.getSeconds() + 14);

function updateCountdown() {
    const now = new Date();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        // 倒计时结束
        document.querySelector('.countdown').style.display = 'none';
        document.querySelector('.link').style.display = 'none';
        document.getElementById('marianas').style.display = 'block';
        return;
    }

    // 计算剩余时间
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // 更新显示
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// 每秒更新倒计时
setInterval(updateCountdown, 1000);

// 初始调用
updateCountdown();
