const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('Password');
const password2 = document.getElementById('password2');

//Show Error Message

function showError(input,message){

    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
    
}

//Show Success Message

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

//Check email is valid

function isValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


//Check input length

function checkLenght(input, min, ma
    x){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    
}else if (input.value.length > max){
    showError(input, `${getFieldName(input)} must be less than ${max} characters`);
}else{
    showSuccess(input);
}
}

//Get field name

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


//Passwords Match

function checkPasswordsMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Passwords do not match')

    }
}


//Event Listeners

form.addEventListener('submit',function(e){

    e.preventDefault();

    if(username.value === ''){
        showError(username,'Username is required')
    } else{
        showSuccess(username)
    }

    if(email.value === ''){
        showError(email,'Email is required')
    } else if(!isValidEmail(email.value)){
        showError(email,'Email is not valid')

    }else{
        showSuccess(email)
    }

    if(Password.value === ''){
        showError(Password,'Password is required')
    } else{
        showSuccess(Password)
    }

    if(password2.value === ''){
        showError(password2,'Password 2 is required')
    } else{
        showSuccess(password2)
    }

    checkLenght(username,3,15);
    checkLenght(password,6,25);
    checkPasswordsMatch(Password, password2)

    
})