// console.log("deposit.js")
// step-01 add event listener to the deposit button
document.getElementById("btn-deposit").addEventListener("click",function(){
    // console.log("deposit button clicked")

    // step-2 get the deposit amount from the deposit input field
    // for input field use .value to the value inside the input field

    const depositField = document.getElementById("deposit-field");
    const depositAmount = depositField.value;
    
    console.log(depositAmount);
    



})