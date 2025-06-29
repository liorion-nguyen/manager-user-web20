const fullName = document.getElementById('fullName');
const avatar = document.getElementById('avatar');
const btnLogout = document.getElementById('btnLogout');

const user = JSON.parse(localStorage.getItem('userActive'));
if (!user) {
    window.location.href = 'http://127.0.0.1:5500/login/';
}
fullName.innerHTML = user.fullName;
if (user.avatar) {
    avatar.src = user.avatar;
}

btnLogout.addEventListener('click', () => {
    localStorage.removeItem('userActive');
    window.location.href = 'http://127.0.0.1:5500/login/';
});