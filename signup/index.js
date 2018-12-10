const checkbox = document.getElementById("privacy-policy");
const btn = document.querySelector("#sign-up");
const forms = document.querySelectorAll(".form-group")
const validateForms = [...document.querySelectorAll(".form-group input")].filter(form => form.hasAttribute("required"));
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirm-password");

const toggleDisabled = () => {
    const validated = [...forms].filter(form => form.classList.contains("has-success"));
    const required = validated.filter(newlist => newlist.querySelector("input").hasAttribute("required"));

    if (checkbox.checked && required.length >= validateForms.length) {
        btn.removeAttribute("disabled");
    } else {
        btn.setAttribute("disabled", "");
    }
}

const checkIfEqual = () => {
    if (password.value === confirmpassword.value && password.closest(".form-group").classList.contains("has-success")) {
        confirmpassword.closest(".form-group").classList.remove("has-error");
        confirmpassword.closest(".form-group").classList.add("has-success");
        toggleDisabled();
    } else {
        confirmpassword.closest(".form-group").classList.remove("has-success");
        confirmpassword.closest(".form-group").classList.add("has-error");
        toggleDisabled();
    }
}

if (forms.length && validateForms.length) {
    if(checkbox){
        checkbox.addEventListener("click", () => toggleDisabled());
    }

    validateForms.forEach(form => (
        form.addEventListener("change", () => toggleDisabled())
    ));
}

if (password && confirmpassword) {
    confirmpassword.addEventListener("change", () => checkIfEqual());
    password.addEventListener("change", () => checkIfEqual());
}
