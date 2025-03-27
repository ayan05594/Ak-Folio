// Typing effect for hero section
const sentences = [
    "Data Scientist",
    "Analyst",
    "Python Developer",
    "AI Enthusiast"
];
let speed = 50;
const container = document.getElementById('typing-container');

function typeWriter(index) {
    if (index < sentences.length) {
        let sentence = sentences[index];
        let typed = "";
        let i = 0;

        function typeCharacter() {
            if (i < sentence.length) {
                typed += sentence.charAt(i);
                container.innerHTML = typed;
                i++;
                setTimeout(typeCharacter, speed);
            } else {
                setTimeout(eraseText, 1500);
            }
        }

        function eraseText() {
            if (typed.length > 0) {
                typed = typed.slice(0, -1);
                container.innerHTML = typed;
                setTimeout(eraseText, speed);
            } else {
                setTimeout(() => typeWriter(index + 1), 500);
            }
        }

        typeCharacter();
    } else {
        typeWriter(0);
    }
}

// Smooth scrolling navigation
document.addEventListener('DOMContentLoaded', () => {
    typeWriter(0);
    
    const scrollLinks = document.querySelectorAll('.scroll-to');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offset = 70;
                window.scrollTo({
                    top: targetSection.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// External link handler
function openLink(url) {
    window.open(url, '_blank');
}

// Animation triggers
document.addEventListener("DOMContentLoaded", () => {
    const animatables = document.querySelectorAll(".logo, .dcv, .heading, .sub-heading");
    animatables.forEach(element => {
        element.classList.add("animate-slide-in");
    });

    // Section reveal animations
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        document.querySelectorAll('.about-hd, .skills-hd, .edu-card, .pr-card').forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            el.classList.toggle('visible', elTop < triggerBottom);
        });

        document.querySelectorAll('.card, .about-p p').forEach((el, index) => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                setTimeout(() => el.classList.add('visible'), index * 150);
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
});

// Removed carousel-related code as it's not needed in the final version