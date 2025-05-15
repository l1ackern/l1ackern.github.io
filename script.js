document.addEventListener('DOMContentLoaded', () => {
    // 设置倒计时目标时间（1229天18小时04分14秒从现在开始）
    const now = new Date();
    const targetDate = new Date(now.getTime() + (1229 * 24 * 60 * 60 * 1000) + (18 * 60 * 60 * 1000) + (4 * 60 * 1000) + (14 * 1000));

    // 获取 DOM 元素
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const marianasWebEl = document.getElementById('marianas-web');
    const countdownEl = document.querySelector('.countdown');

    // 倒计时函数
    function updateCountdown() {
        const now = new Date();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            // 倒计时结束，显示 MarianasWeb
            countdownEl.style.display = 'none';
            marianasWebEl.classList.remove('hidden');
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        daysEl.textContent = days;
        hoursEl.textContent = hours;
        minutesEl.textContent = minutes;
        secondsEl.textContent = seconds;
    }

    // 点击跳转链接
    daysEl.parentElement.addEventListener('click', () => {
        window.open('https://chat.whatsapp.com/Ca4vxYoUXfw9o5qkQK9LfH', '_blank');
    });
    hoursEl.parentElement.addEventListener('click', () => {
        window.open('https://www.facebook.com/profile.php?id=100076137814695&mibextid=wwXIfr&mibextid=wwXIfr', '_blank');
    });
    minutesEl.parentElement.addEventListener('click',  () => {
        window.open('https://t.me/+tpGtShXErUg2OWY1', '_blank');
    });
    secondsEl.parentElement.addEventListener('click', () => {
        window.open('https://discord.gg/96ePBBRKAs', '_blank');
    });

    // 每秒更新倒计时
    updateCountdown();
    setInterval(updateCountdown, 1000);
});
