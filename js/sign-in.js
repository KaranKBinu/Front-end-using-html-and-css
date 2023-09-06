
// Get the elements
const passwordInput1 = document.getElementById('sign-in-password');
const passwordToggle1 = document.getElementById('sign-in-password-toggle');

// Add an event listener to the eye icon
passwordToggle1.addEventListener('click', () => {
    // Toggle the password field's type between "password" and "text"
    if (passwordInput1.type === 'password') {
        passwordInput1.type = 'text';
        passwordToggle1.classList.remove('fa-eye');
        passwordToggle1.classList.add('fa-eye-slash');
    } else {
        passwordInput1.type = 'password';
        passwordToggle1.classList.remove('fa-eye-slash');
        passwordToggle1.classList.add('fa-eye');
    }
});
