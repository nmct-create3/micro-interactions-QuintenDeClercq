const handleFloatingLabel = function(){
    const floatingInput = document.querySelector('.js-name-input'),
        floatingLabel = document.querySelector('.js-name-label');

    floatingInput.addEventListener('blur', function(){
        if(floatingInput.value){
            floatingLabel.classList.add("is-floating");
        }else{
            floatingLabel.classList.remove("is-floating");
        }
    });
};


document.addEventListener( 'DOMContentLoaded', function() {
    console.log( 'Script loaded!' );
    handleFloatingLabel();
});