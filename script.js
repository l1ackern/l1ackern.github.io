// Mortis-style Digital Rain
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = Math.random() * canvas.height / fontSize;
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0f0';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        const y = drops[i] * fontSize;
        ctx.fillText(text, i * fontSize, y);

        if (y > canvas.height && Math.random() > 0.98) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 50);

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

// Counter Animation
const targetDate = new Date('2025-12-31T23:59:59').getTime();

function updateCounter() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('whatsapp').textContent = String(days).padStart(4, '0');
    document.getElementById('facebook').textContent = String(hours).padStart(2, '0');
    document.getElementById('telegram').textContent = String(minutes).padStart(2, '0');
    document.getElementById('discord').textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCounter, 1000);
window.addEventListener('load', updateCounter);

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
