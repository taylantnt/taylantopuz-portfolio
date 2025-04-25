// Open lightbox and display the clicked image
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');

// Show the lightbox when an image is clicked
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    lightbox.style.display = 'flex'; // Show the lightbox
    lightboxImage.src = item.src; // Set the lightbox image source
  });
});

// Hide the lightbox when the close button is clicked
lightboxClose.addEventListener('click', () => {
  lightbox.style.display = 'none'; // Hide the lightbox
});

// Hide the lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none'; // Hide the lightbox
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.getElementById("nav-links");
  var hamburger = document.getElementById("hamburger");

  hamburger.addEventListener("click", function() {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("open");
    document.body.classList.toggle("no-scroll");
  });
});
