let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Get modal and buttons
const authModal = document.getElementById('auth-modal');
const joinButtons = document.querySelectorAll('.nav-btn, .btn'); // All "Join Us" buttons
const closeModal = document.querySelector('.close-modal');
const showRegister = document.getElementById('show-register');
const showLogin = document.getElementById('show-login');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// Open modal when "Join Us" is clicked
joinButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        authModal.style.display = 'flex';
        loginForm.style.display = 'block'; // Show login form by default
        registerForm.style.display = 'none'; // Hide register form
    });
});

// Close modal when close button is clicked
closeModal.addEventListener('click', () => {
    authModal.style.display = 'none';
});

// Close modal when clicking outside the modal
window.addEventListener('click', (e) => {
    if (e.target === authModal) {
        authModal.style.display = 'none';
    }
});

// Switch to Register Form
showRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});

// Switch to Login Form
showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
});


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

//Typing Text Code

const typed = new Typed('.multiple-text', {
    strings: ['Physical Fitness', 'Weight Gain', 'Strenght Training', 'Fat Loss', 'Weight Lifting', 'Running'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
});