// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Carousel navigation
const container = document.querySelector('.carousel-track-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function cardScrollAmount() {
    const card = container.querySelector('.project-card');
    const gap = 24;
    return card.offsetWidth + gap;
}

prevBtn.addEventListener('click', () => {
    container.scrollBy({ left: -cardScrollAmount(), behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
    container.scrollBy({ left: cardScrollAmount(), behavior: 'smooth' });
});
