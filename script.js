// 设置倒计时目标时间（示例：2025年12月29日18:04:14）
const targetDate = new Date("2025-12-29T18:04:14").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        document.querySelector(".countdown").classList.add("hidden");
        document.getElementById("marianas").classList.remove("hidden");
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}

// 每秒更新倒计时
const countdownInterval = setInterval(updateCountdown, 1000);

// 社交媒体链接
document.querySelectorAll(".countdown div").forEach((div, index) => {
    div.addEventListener("click", () => {
        const links = [
            "https://chat.whatsapp.com/Ca4vxYoUXfw9o5qkQK9LfH",
            "https://www.facebook.com/profile.php?id=100076137814695&mibextid=wwXIfr&mibextid=wwXIfr",
            "https://t.me/+tpGtShXErUg2OWY1",
            "https://discord.gg/96ePBBRKAs"
        ];
        window.location.href = links[index];
    });
});

// 初始调用
updateCountdown();
