const images = document.querySelectorAll('.lightbox-trigger');
let currentIndex = 0;

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightbox-image');
        lightboxImage.src = image.src;
        lightbox.style.display = 'flex';
        currentIndex = index;
    });
});

document.querySelector('.lightbox-close').addEventListener('click', () => {
    document.getElementById('lightbox').style.display = 'none';
});

document.querySelector('.lightbox-prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    document.getElementById('lightbox-image').src = images[currentIndex].src;
});

document.querySelector('.lightbox-next').addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    document.getElementById('lightbox-image').src = images[currentIndex].src;
});
