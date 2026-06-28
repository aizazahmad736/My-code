const typingSpan = document.getElementById("typing");
const phrases = ["Frontend Developer", "CS Student", "Machine Learning Enthusiast"];
let phraseIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < phrases[phraseIndex].length) {
        typingSpan.textContent += phrases[phraseIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typingSpan.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", type);