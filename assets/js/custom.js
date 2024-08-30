document.getElementById('submitBtn').addEventListener('click', function() {
    // Clear previous error messages
    let errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(msg) {
        msg.textContent = ''; // Clear previous error messages
    });

    // Validate Email
    let email = document.getElementById('email');
    let emailValue = email.value.trim();
    let emailError = email.closest('.form-outline').nextElementSibling; // Select the correct error message div
    if (!validateEmail(emailValue)) {
        emailError.textContent = 'Please enter a valid email address.';
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }

    // Validate Password
    let password = document.getElementById('password');
    let passwordValue = password.value.trim();
    let passwordError = password.closest('.form-outline').nextElementSibling; // Select the correct error message div
    if (passwordValue.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        password.classList.add('is-invalid');
    } else {
        password.classList.remove('is-invalid');
    }

    // Add your additional validations here...
});

function validateEmail(email) {
    // Basic email validation regex
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


