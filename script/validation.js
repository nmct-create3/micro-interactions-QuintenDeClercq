let email = {}, password = {}, signInButton;


const getDOM = function(){
    email.field = document.querySelector('.js-email-field');
    email.errorMessage = document.querySelector('.js-email-error-message');
    email.input = document.querySelector('.js-email-input');

    password.field = document.querySelector('.js-password-field');
    password.errorMessage = document.querySelector('.js-password-error');
    password.input = document.querySelector('.js-password-input');

    signInButton = document.querySelector('.js-sign-in-button');
};

const isValidEmailAddress = function(emailAddress) {
    // Basis manier om e-mailadres te checken.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isEmpty = function(fieldValue) {
    return !fieldValue || !fieldValue.length;
 };

const addErrors = function(field){
    field.classList.add('has-error');
};
const removeErrors = function(field){
    field.classList.remove('has-error');
};

const doubleCheckEmail = function(){
    if(isValidEmailAddress(email.input.value)){
        removeErrors(email.field);
        email.input.removeEventListener('input', doubleCheckEmail);
    }
    else {
        if(isEmpty(email.input.value)) email.errorMessage.innerHTML = 'This field is required';
        else email.errorMessage.innerHTML = 'The email is not valid';
    }
};

const doubleCheckPassword = function(){
    if(isValidPassword(email.input.value)){
        removeErrors(password.field);
        email.input.removeEventListener('input', doubleCheckPassword);
    }
    else {
        if(isEmpty(password.input.value)) password.errorMessage.innerHTML = 'This field is required';
        else password.errorMessage.innerHTML = 'The password is not valid';
    }
};

const isValidPassword = function(password) {
    return password.length > 2;
  };

const enableInteraction = function(){

    email.input.addEventListener('blur', function(event){
        const typedInput = event.target.value;
        if(!isValidEmailAddress(typedInput)){
            addErrors(email.field);
            if(isEmpty(typedInput)){
                email.errorMessage.innerHTML = 'This field is required';
            } else email.errorMessage.innerHTML = 'The email is not valid';

            email.input.addEventListener('input' ,doubleCheckEmail);
        }

    });

    password.input.addEventListener('blur', function(event){
        const typedInput = event.target.value;
        if(!isValidPassword(typedInput)){
            addErrors(password.field);
            if(isEmpty(typedInput)){
                password.errorMessage.innerHTML = 'This field is required';
            } else password.errorMessage.innerHTML = 'The password is not valid';

            password.input.addEventListener('input' ,doubleCheckPassword);
        }
    });

};

document.addEventListener('DOMContentLoaded', function(){
    console.log('ready to go');
    getDOM();
    enableInteraction();

});