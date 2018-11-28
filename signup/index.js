const checkbox = document.querySelector("#privacy-policy");
const btn = document.querySelector("#sign-up");
const forms = document.querySelectorAll(".form-group")
const validateForms = [...document.querySelectorAll(".form-group input")].filter(form => form.hasAttribute("required")).length;
const pwVal = document.querySelector("#password");
const confirmPwVal = document.querySelector("#confirm-password");

const toggleDisabled = () => {
    const validated = [...forms].filter(form => form.classList.contains("has-success"));
    const required = validated.filter(newlist => newlist.querySelector("input").hasAttribute("required"));

    if (checkbox.checked && required.length >= validateForms) {
        btn.removeAttribute("disabled");
    } else {
        btn.setAttribute("disabled", "");
    }
}

pwVal.addEventListener("change", () => {
    return pwVal.value === confirmPwVal.value;
});

confirmPwVal.addEventListener("change", () => {
    return confirmPwVal.value === pwVal.value;
});



if (forms.length > 0) {
    forms.forEach(form => (
        form.addEventListener("change", () => {
            toggleDisabled();
        })
    ))
}

if (checkbox && validateForms > 0) {
    checkbox.addEventListener("change", () => {
        toggleDisabled();
    });
}

