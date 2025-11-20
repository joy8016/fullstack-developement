let logregbox = document.querySelector('.logreg-box');

let loginLink = document.querySelector('.login-link');

let registerLink = document.querySelector('.register-link');
console.log(registerLink);

registerLink.addEventListener('click', ()=>{
    logregbox.classList.add('active');
});
loginLink.addEventListener('click', ()=>{
    logregbox.classList.remove('active');
});