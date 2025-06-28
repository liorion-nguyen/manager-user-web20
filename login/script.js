import { showAlert } from '../common/script.js';

const email = document.getElementById('email');
const password = document.getElementById('password');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (email.value.length < 5 || !email.value.includes('@')) {
        showAlert('Please enter a valid email address');
        return;
    }
    if (password.value.length < 6) {
        showAlert('Password must be at least 6 characters');
        return;
    }
    const user = users.find(user => user.email == email.value && user.password == password.value);
    if (!user) {
        showAlert('Invalid email or password');
        return;
    }
    localStorage.setItem('userActive', JSON.stringify(user));
    window.location.href = '../dashboard/';
});