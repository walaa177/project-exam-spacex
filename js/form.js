const firstName = document.querySelector("#contactForm");


firstName.addEventListener("submit",validateForm);
function validateForm(event){
    event.preventDefault();
    const name = document.querySelector("#name");
    const nameError = document.querySelector("#nameError");
    const nameValue = name.value;
    const email = document.querySelector("#email");
    const emailError = document.querySelector("#emailError");
    const noEmail= document.querySelector("#noEmail");
    const message = document.querySelector("#message"); 
    const noMessage = document.querySelector("#noMessage");
    
    if (checkInput(nameValue) === true) {
        nameError.style.display = "none"
    } else {
        nameError.style.display = "block";
    }
    if (checkInput(email.value) === true) {
        noEmail.style.display = "none";
    } else {
        noEmail.style.display = "block";
    }
    
    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
    if (checkInput(message.value) === true) {
        noMessage.style.display = "none";
    } else {
        noMessage.style.display = "block";
    }

}
function checkInput(name) {
    const inputValue = name.trim();
    const valueLength = inputValue.length;
    if(valueLength >= 2) {
        return true;
    } else {
        return false;
    }
}
function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}