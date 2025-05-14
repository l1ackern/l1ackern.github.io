// 数字雨效果
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0f0';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 33);

window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});

// 标题逐字显示
const titleElement = document.getElementById('title');
const titleText = 'Primordial HQ²';
let titleIndex = 0;

function typeTitle() {
    if (titleIndex < titleText.length) {
        titleElement.textContent += titleText.charAt(titleIndex);
        titleIndex++;
        setTimeout(typeTitle, 200);
    }
}

window.addEventListener('load', typeTitle);

// 终端打字效果
const terminalText = document.getElementById('terminal-text');
const terminalPhrases = [
    'Initializing system...',
    'Scanning network...',
    'Bypassing firewall...',
    'Access granted.'
];
let phraseIndex = 0;
let charIndex = 0;

function typeTerminal() {
    if (phraseIndex < terminalPhrases.length) {
        const currentPhrase = terminalPhrases[phraseIndex];
        if (charIndex <= currentPhrase.length) {
            terminalText.textContent = currentPhrase.substring(0, charIndex) + '_';
            charIndex++;
            setTimeout(typeTerminal, 100);
        } else {
            setTimeout(() => {
                charIndex = 0;
                phraseIndex = (phraseIndex + 1) % terminalPhrases.length;
                terminalText.textContent = '';
                typeTerminal();
            }, 2000);
        }
    }
}

window.addEventListener('load', typeTerminal);

// 支付提示
function showPaymentInfo() {
    document.getElementById('payment-info').classList.remove('hidden');
}

function closePaymentInfo() {
    document.getElementById('payment-info').classList.add('hidden');
}
