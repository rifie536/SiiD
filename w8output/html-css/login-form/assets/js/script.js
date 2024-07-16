document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if(localStorage.getItem('email')) {
        emailInput.value = localStorage.getItem('email');
        // localStorage.clear();
    }
    if(localStorage.getItem('password')) {
        passwordInput.value = localStorage.getItem('password');
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        localStorage.setItem('email', emailInput.value);
        localStorage.setItem('password', passwordInput.value);

        emailInput.value = "";
        passwordInput.value = "";

    });
});