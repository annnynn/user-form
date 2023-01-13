/*
# - Add onSubmit Handler on form
# - Validate Input Values
# - Show error message if input is invalid
# - Hidde error message on input change
*/
const form = document.getElementById("my-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const imageInput = document.getElementById("image");
const error = document.getElementById("error");


// ეს ერრორი მინდა მოხდეს ყველა ინფუთზე, ამიტომ:
const inputs = [nameInput, emailInput, imageInput];
for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    input.addEventListener("input", function() {
        if (!hasAppError) return;
        error.textContent = ""
        error.classList.remove("error");
        hasAppError = false;
    })

}

let hasAppError = false;


form.addEventListener("submit", onSubmit);

function isValid(name, email, image) {
    if (name === "") {
        return false;
    }

    if (!email.includes("@")) {
        return false;
    }

    if (!image.includes("https")) {
        return false;
    }

    return true;
}

function onSubmit(event) {
    event.preventDefault(); // აღარ დარეფრეშდება

    const userName = nameInput.value;
    const userEmail = emailInput.value;
    const userImage = imageInput.value;

    const isValidValues = isValid(userName, userEmail, userImage);

    if (!isValidValues) {
        error.textContent = "Please fill in inputs with valid values";
        error.classList.add("error");
        hasAppError = true;
    }
    console.log(isValidValues); // უკავშირდება იმ მნიშვნელობას, რაც იმ კონკრეტულ ინფუთში ჩავწერეთ
}