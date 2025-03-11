 // Add a class to the logo after the animation ends
 const logo = document.querySelector('.animated-logo');
 logo.addEventListener('animationend', () => {
     logo.classList.add('finished');
 });
document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const carousel = document.getElementById('carousel');

    setTimeout(() => {
        splashScreen.classList.add('hidden');
        carousel.classList.add('visible');
    }, 3000);

    const carouselImages = document.getElementById('carousel-images');
    let currentIndex = 0;

    const updateCarousel = () => {
        const width = carousel.clientWidth;
        carouselImages.style.transform = `translateX(${-currentIndex * width}px)`;
    };

    const nextImage = () => {
        currentIndex = (currentIndex < carouselImages.children.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    };

    setInterval(nextImage, 5000);

    window.addEventListener('resize', updateCarousel);
    updateCarousel(); // Initial call to set the correct position
});