const descriptionElement = document.getElementById('description');
const descriptionTexts = [
    "I am a Backend Engineer",
    "I love coding",
    "Passionate about technology",
    "I'm proeficient in Node.js, SQL, PHP, HTML, and JS",
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeDescription() {
    const currentText = descriptionTexts[textIndex];
    
    if (isDeleting) {
        descriptionElement.innerHTML = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        descriptionElement.innerHTML = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeDescription, 1000); 
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % descriptionTexts.length;
        setTimeout(typeDescription, 500); 
    } else {
        setTimeout(typeDescription, 50); 
}
}

document.addEventListener('DOMContentLoaded', typeDescription);
