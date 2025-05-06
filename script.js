// Toggle the mobile menu
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Carousel Functionality
const carousels = document.querySelectorAll('.gallery-item');

carousels.forEach(carousel => {
    const images = carousel.querySelectorAll('.carousel-image');
    const leftBtn = carousel.querySelector('.carousel-btn.left');
    const rightBtn = carousel.querySelector('.carousel-btn.right');
    let currentIndex = 0;

    // Initialize: Show the first image
    images[currentIndex].classList.add('active');

    // Handle left button click
    leftBtn.addEventListener('click', () => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Wrap around
        images[currentIndex].classList.add('active');
    });

    // Handle right button click
    rightBtn.addEventListener('click', () => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length; // Wrap around
        images[currentIndex].classList.add('active');
    });
});
