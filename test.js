document.addEventListener('DOMContentLoaded', function() {
  const switchElement = document.getElementById('switch');
  const switchContainer = document.querySelector('.switch-container');

  switchContainer.addEventListener('click', function() {
    switchElement.classList.toggle('on');
    // Add your custom functionality here
    if (switchElement.classList.contains('on')) {
      console.log('Switch is ON');
      document.body.style.backgroundColor = 'black';
      // Execute additional code for ON state
    } else {
      console.log('Switch is OFF');
      document.body.style.backgroundColor = 'white';
      // Execute additional code for OFF state
    }
  });
});
