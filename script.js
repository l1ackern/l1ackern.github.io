// Matrix Digital Rain
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

// Title Typing Animation
const titleElement = document.getElementById('title');
const titleText = 'Primordial HQ²';
let titleIndex = 0;

function typeTitle() {
    if (titleIndex < titleText.length) {
        titleElement.textContent += titleText.charAt(titleIndex);
        titleIndex++;
        setTimeout(typeTitle, 100);
    }
}

window.addEventListener('load', typeTitle);

// Terminal Typing Animation
const terminalElement = document.getElementById('terminal-text');
const terminalTexts = [
    'whoami',
    'nmap -sS target',
    'msfconsole',
    'wireshark --interface eth0',
    'sudo su'
];
let textIndex = 0;
let charIndex = 0;
let currentText = '';

function typeTerminal() {
    if (textIndex < terminalTexts.length) {
        if (charIndex < terminalTexts[textIndex].length) {
            currentText += terminalTexts[textIndex].charAt(charIndex);
            terminalElement.textContent = currentText;
            charIndex++;
            setTimeout(typeTerminal, 100);
        } else {
            setTimeout(() => {
                currentText = '';
                terminalElement.textContent = '';
                charIndex = 0;
                textIndex = (textIndex + 1) % terminalTexts.length;
                typeTerminal();
            }, 1000);
        }
    }
}

window.addEventListener('load', () => setTimeout(typeTerminal, 1000));

// Payment Popup
function showPaymentInfo() {
    document.getElementById('payment-info').classList.remove('hidden');
}

function closePaymentInfo() {
    document.getElementById('payment-info').classList.add('hidden');
}
