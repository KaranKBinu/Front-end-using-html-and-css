
// //----------------------------------------------------------------------
// // Defines a function to load the create-account content
// function loadCreateAccount() {
//     // Get the container element where you want to load the create-account content
//     const createAccountContainer = document.getElementById('create-account-container');

//     // Create a new XMLHttpRequest for loading the create-account content
//     const createAccountXhr = new XMLHttpRequest();

//     // Configure the request for create-account
//     createAccountXhr.open('GET', 'create-account.html', true);

//     // Define the onload event handler for create-account
//     createAccountXhr.onload = function () {
//         if (createAccountXhr.status === 200) {
//             createAccountContainer.innerHTML = createAccountXhr.responseText;
//         }
//     };

//     // Send the request for create-account
//     createAccountXhr.send();
// }

// // Call the loadCreateAccount function to load the create-account content
// loadCreateAccount();


// //----------------------------------------------------------------------
// // Defines a function to load the create-account content
// function loadSignIntoAccount() {
//     // Get the container element where you want to load the create-account content
//     const SignIntoAccountContainer = document.getElementById('sign-into-account-container');

//     // Create a new XMLHttpRequest for loading the create-account content
//     const SignIntoAccountXhr = new XMLHttpRequest();

//     // Configure the request for create-account
//     SignIntoAccountXhr.open('GET', 'sign-in.html', true);

//     // Define the onload event handler for create-account
//     SignIntoAccountXhr.onload = function () {
//         if (SignIntoAccountXhr.status === 200) {
//             SignIntoAccountContainer.innerHTML = SignIntoAccountXhr.responseText;
//         }
//     };

//     // Send the request for create-account
//     SignIntoAccountXhr.send();
// }

// // Call the loadSignIntoAccount function to load the create-account content
// loadSignIntoAccount();

//javascript to toggle password type
const passwordInput = document.getElementById('password');
const passwordToggle = document.getElementById('password-toggle');

passwordToggle.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggle.classList.remove('fa-eye');
        passwordToggle.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        passwordToggle.classList.remove('fa-eye-slash');
        passwordToggle.classList.add('fa-eye');
    }
});

// JavaScript to toggle password visibility for the "confirmPassword" field
const confirmPasswordInput = document.getElementById('confirmPassword');
const confirmPasswordToggle = document.getElementById('confirm-password-toggle');

confirmPasswordToggle.addEventListener('click', () => {
    if (confirmPasswordInput.type === 'password') {
        confirmPasswordInput.type = 'text';
        confirmPasswordToggle.classList.remove('fa-eye');
        confirmPasswordToggle.classList.add('fa-eye-slash');
    } else {
        confirmPasswordInput.type = 'password';
        confirmPasswordToggle.classList.remove('fa-eye-slash');
        confirmPasswordToggle.classList.add('fa-eye');
    }
});
