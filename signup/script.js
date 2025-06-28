import { showAlert } from '../common/script.js';
// Lấy các phần tử từ DOM
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const terms = document.getElementById('terms');

const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', () => {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (!terms.checked) {
        showAlert('Please agree to the terms and conditions');
        return;
    }
    if (fullName.value.length < 5 || !fullName.value.includes(' ')) {
        showAlert('Full name must be at least 5 characters and contain a space');
        return;
    }
    if (!email.value.includes('@')) {
        showAlert('Please enter a valid email address');
        return;
    }
    if (password.value.length < 6) {
        showAlert('Password must be at least 6 characters');
        return;
    }
    if (password.value !== confirmPassword.value) {
        showAlert('Passwords do not match');
        return;
    }
    const user = {
        fullName: fullName.value,
        email: email.value,
        password: password.value,
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    showAlert('Sign up successful');
});