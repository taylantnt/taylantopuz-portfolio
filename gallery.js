// Select all elements with the class name 'individual'
document.querySelectorAll('.individual').forEach(individual => {
    // Add a click event listener to each 'individual' element
    individual.addEventListener('click', () => {
        // Get the value of the 'data-link' attribute of the clicked element
        const link = individual.getAttribute('data-link');
        // Redirect the browser to the URL specified in the 'data-link' attribute
        window.location.href = link;
    });
});

