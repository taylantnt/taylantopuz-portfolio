// Add animation order for staggered effect
document.addEventListener("DOMContentLoaded", function () {
  const gridItems = document.querySelectorAll(".gallery-item");
  gridItems.forEach((item, index) => {
    item.style.setProperty("--animation-order", index);
  });
});

// Initialize Hammer.js on the lightbox
const hammer = new Hammer(lightbox);

// Handle swipe left (next image)
hammer.on("swipeleft", function () {
  showNext();
});

// Handle swipe right (previous image)
hammer.on("swiperight", function () {
  showPrev();
});

// Prevent lightbox from closing when clicking inside the image
lightboxImage.addEventListener("click", function (event) {
  event.stopPropagation();
});

// Close the lightbox when clicking outside the image
lightbox.addEventListener("click", closeLightbox);

// Handle keyboard navigation
document.addEventListener("keydown", function (event) {
  if (lightbox.style.display === "flex") {
    if (event.key === "ArrowRight") {
      showNext();
    } else if (event.key === "ArrowLeft") {
      showPrev();
    } else if (event.key === "Escape") {
      closeLightbox();
    }
  }
});

