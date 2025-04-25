document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const carousel = document.querySelector('.testimonial-carousel');
  let scrollAmount = 0;

  prevButton.addEventListener('click', function() {
    carousel.scrollBy({
      top: 0,
      left: -300,
      behavior: 'smooth'
    });
  });

  nextButton.addEventListener('click', function() {
    carousel.scrollBy({
      top: 0,
      left: 300,
      behavior: 'smooth'
    });
  });
});
