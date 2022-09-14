// step-1: add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function(){
    // console.log('submit');

// step-2: get the email address inside the email input field
// always remember to use .value to get text from an input field
const emailField = document.getElementById('user-email');
const email = emailField.value;
// console.log(email);

// step-3: get password
// 3.a: set id on the html element
// 3.b: get the element
// 3.c: get the value from the element
const passwordField = document.getElementById('user-password');
const password = passwordField.value;
// console.log(password);



// *********DO NOT VERIFY EMAIL PASSWORD ON THE CLIENT SIDE***********

// STEP-4: VERIFY EMAIL AND PASSWORD AND CHECK WETHER USER VAILD OR NOT
if(email === 'dadababu@gmail.com' && password === 'secret'){
    // console.log('valid user')
    window.location.href = 'bank.html';
    // windows likhle hobe na****
}
else{
    // console.log('invalid user')
    alert('information mismatched. Try again!!')
}

})