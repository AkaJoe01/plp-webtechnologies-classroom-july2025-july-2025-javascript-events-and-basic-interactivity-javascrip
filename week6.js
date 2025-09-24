const form = document.getElementById("myForm");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("number");

number.oninput = function () {
    if (number.value.length < 14) {
        number.setCustomValidity("Enter your country code")
    } else {
        number.setCustomValidity("")
    }
};

form.onclick = function (e) {
    if (!email.value){
        e.preventDefault(); 
        errorMessage.textContent = "Email is required!"
    }
};

const modal = document.getElementById("modal");
const showform = document.getElementById("showForm");
const submit = document.getElementById("submit"); 

showform.onclick = function () {
    modal.style.display = "block";
};
submit.onclick = function () {
    modal.style.display = "none";
};