document.addEventListener('DOMContentLoaded', () => {
  const toggleContainer = document.getElementById('languageToggle');
  const toggleBall = document.querySelector('.toggle-ball');
  let isEnglish = true;

  toggleContainer.addEventListener('click', () => {
    // Toggle the language state
    isEnglish = !isEnglish;

    // Update the visual state of the toggle
    toggleContainer.classList.toggle('active', !isEnglish); // Add or remove 'active' class
    toggleBall.style.transform = isEnglish ? 'translateX(3px)' : 'translateX(27px)';

    // Update the language on the page
    updateLanguage(isEnglish ? 'en' : 'jp');
  });

  // Function to update the language
  function updateLanguage(language) {
    const textElements = document.querySelectorAll('[data-en], [data-jp]');
    textElements.forEach((element) => {
      const newText = language === 'en' ? element.getAttribute('data-en') : element.getAttribute('data-jp');
      if (newText) {
        element.textContent = newText;
      }
    });
  }

  // Initialize with English
  updateLanguage('en');
});