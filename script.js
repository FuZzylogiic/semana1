const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % 2; // Hay dos slides, por lo que el índice es 0 o 1
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + 2) % 2;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentSlide * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}