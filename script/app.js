const getDOMElement = function(){
    passwordInput = document.querySelector('.js-password-input');
    passwordToggle = document.querySelector('.js-password-toggle');
    console.log('I',passwordInput);
    console.log('T',passwordToggle);
};

const enableListeners = function(){
    passwordToggle.addEventListener('change', function(e){
        // console.log(e);
        if(e.target.checked){
            passwordInput.type = 'text';
        }
        else{
            passwordInput.type = 'password';
        }
    });
};

document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM loaded 🥳');
    
    getDOMElement();

    enableListeners();
});