let wrapper = document.querySelector('.wrapper');
let registerLink = document.querySelector('.register-link');
let loginLink = document.querySelector('.login-link');
let loginPopup = document.querySelector('.btn');
let iconClose = document.querySelector('.icon-closer');




registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});
loginPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});
