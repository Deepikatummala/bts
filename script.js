
  
  







let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const track = document.querySelector('.carousel-track');
const totalSlides = slides.length;

function updateCarousel(immediate = false) {
    if (immediate) {
        track.style.transition = 'none';
    } else {
        track.style.transition = 'transform 0.5s ease-in-out';
    }
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveSlide(direction) {
    if (direction === 1 && currentSlide === totalSlides - 1) {
        currentSlide++;
        updateCarousel();
        setTimeout(() => {
            currentSlide = 0;
            updateCarousel(true);
        }, 500);
    } else if (direction === -1 && currentSlide === 0) {
        currentSlide--;
        updateCarousel();
        setTimeout(() => {
            currentSlide = totalSlides - 1;
            updateCarousel(true);
        }, 500);
    } else {
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
        updateCarousel();
    }
}





