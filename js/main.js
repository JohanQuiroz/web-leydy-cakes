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
        numVisible: 3,
        indicators: true,
    });
    setInterval( () => {
        M.Carousel.getInstance(carouselElements[0]).next();
    }, 3000);

}




