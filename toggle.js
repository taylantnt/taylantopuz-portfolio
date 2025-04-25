const toggleContainer = document.getElementById('languageToggle');
    const toggleBall = document.querySelector('.toggle-ball');
    let isEnglish = true;

    function typewriterEffect(element, text) {
      element.classList.add('typing');
      element.textContent = ''; // Clear the content first
      let i = 0;
      const speed = 50; // Adjust typing speed here

      function typeNextChar() {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          setTimeout(typeNextChar, speed);
        } else {
          element.classList.remove('typing');
        }
      }

      typeNextChar();
    }

    toggleContainer.addEventListener('click', () => {
      // Target all elements that need translation
      const textElements = document.querySelectorAll('[data-en], [data-jp]');
      
      textElements.forEach(element => {
        if (element.hasAttribute('data-en') && element.hasAttribute('data-jp')) {
          const newText = isEnglish ? element.getAttribute('data-jp') : element.getAttribute('data-en');
          // Use typewriter effect for longer texts, immediate change for shorter ones
          if (newText && newText.length > 100) {
            typewriterEffect(element, newText);
          } else if (newText) {
            element.textContent = newText;
          }
        }
      });
      
      // Special handling for specific elements
      const firstParagraph = document.getElementById('firstParagraph');
      const secondParagraph = document.getElementById('secondParagraph');
      const categoryText = document.getElementById('categoryText');
      const photographyButton = document.getElementById('photographyButton');
      const videographyButton = document.getElementById('videographyButton');
      
      // Translate main hero section text
      if (firstParagraph) {
        firstParagraph.textContent = isEnglish ? 
          '大切な瞬間を東京とその周辺で捉える専門的な写真とビデオ撮影。結婚式、企業イベント、個人的なお祝いなど、あなたの物語を忠実に語る高品質な写真とビデオを提供します。' : 
          'Capture the essence of your cherished moments with professional photography and videography that faithfully narrate your story. Whether it be a solemn wedding ceremony, a corporate gathering, or a private celebration, I combine my creative acumen with technical proficiency to meticulously preserve every detail in exceptional quality.';
      }
      
      // Translate category prompt
      if (categoryText) {
        categoryText.textContent = isEnglish ? 
          'ポートフォリオを見るにはカテゴリーを選んでください' : 
          'Choose a category below to explore my portfolio';
      }
      
      // Translate buttons
      if (photographyButton) {
        const buttonText = photographyButton.lastChild;
        buttonText.textContent = isEnglish ? '写真撮影' : 'Photography';
      }
      
      if (videographyButton) {
        const buttonText = videographyButton.lastChild;
        buttonText.textContent = isEnglish ? 'ビデオ撮影' : 'Videography';
      }

      // Update the toggle ball's position and color, and the visibility of the labels
      if (isEnglish) {
        toggleBall.style.left = '51px'; // Move the ball to the right
        toggleBall.style.backgroundColor = '#BC002D'; // Change color to Japanese red
      } else {
        toggleBall.style.left = '1px'; // Move the ball to the left
        toggleBall.style.backgroundColor = '#0000ff'; // Change color to blue
      }

      isEnglish = !isEnglish;
    });