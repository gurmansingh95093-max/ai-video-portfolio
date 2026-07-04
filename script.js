// Smooth animation on page load
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Fade-in effect
document.body.style.opacity = "0";
document.body.style.transition = "opacity 1s ease";

// Active navigation link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// Service card hover animation
const cards = document.querySelectorAll(".service-card, .card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });
});

// Console message
console.log("🚀 Gurman Singh Portfolio Website Loaded Successfully");
