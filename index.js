let loginForm = document.getElementById("login-form");
let signupForm = document.getElementById("signup-form");
let indicator = document.getElementById("indicator");

function register() {
    signupForm.style.transform = "translateX(0px)"
    loginForm.style.transform = "translateX(0px)"
    indicator.style.transform = "translateX(100px)"
}

function login() {
    signupForm.style.transform = "translateX(300px)"
    loginForm.style.transform = "translateX(300px)"
    indicator.style.transform = "translateX(0px)"
}