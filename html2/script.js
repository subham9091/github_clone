// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get the signup form element
    const signupForm = document.querySelector('.email-signup');
    
    // Add a submit event listener to the form
    signupForm.addEventListener('submit', (event) => {
        // Prevent the form from submitting the traditional way
        event.preventDefault();

        // Get the email input value
        const emailInput = signupForm.querySelector('input[type="email"]').value;

        // Simple email validation (checking if email contains "@" and ".")
        if (validateEmail(emailInput)) {
            alert(`Thank you for signing up with ${emailInput}!`);
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Function to validate email address
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
