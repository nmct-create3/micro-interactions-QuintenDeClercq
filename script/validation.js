let email = {},
    password = {},
    signInButton;


const getDOMElement = function(){
    email.errorMessage = document.querySelector('.js-email-field');
    email.input = document.querySelector('.js-email-error-message');
    email.field = document.querySelector('.js-email-input');

    password.errorMessage = document.querySelector('.js-password-field');
    password.input = document.querySelector('.js-password-error-message');
    password.field = document.querySelector('.js-password-input');

    signInButton = document.addEventListener('.js-sign-in-button');
};


document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM loaded');
    
    getDOMElement();

});