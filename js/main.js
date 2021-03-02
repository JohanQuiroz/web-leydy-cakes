// VARIABLES

const carouselElements = document.querySelectorAll('.carousel');

loadEventListeners();

function loadEventListeners() {
    document.addEventListener('DOMContentLoaded', initCarousel);
}

// FUNCIONES

function initCarousel() {
    M.Carousel.init(carouselElements, {
        duration: 1500,
        dist: -60,
        shift: 5,
        padding: 100,
        numVisible: 5,
        indicators: true
    });
}