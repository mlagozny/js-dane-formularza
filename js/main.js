let button  = document.querySelector("button");

let name = document.getElementById("name");
let nameValue = document.getElementById("nameValue");

let surname = document.getElementById("surname");
let surnameValue = document.getElementById("surnameValue");

let phone = document.getElementById("phone");
let phoneValue = document.getElementById("phoneValue"); 

button.onclick = function() {
    name.textContent = nameValue.value
    surname.textContent = surnameValue.value
    phone.textContent = phoneValue.value
}

