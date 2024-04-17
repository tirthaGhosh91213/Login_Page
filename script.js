const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnLogin = document.querySelector('.btnlogin-popup');
const closeIcon = document.querySelector('.icon_close');
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});
btnLogin.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});
closeIcon.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});