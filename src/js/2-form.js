
var keyData = "feedback-form-state";

const email = document.querySelector('.feedback-form [name="email"]');
const message = document.querySelector('.feedback-form [name="message"]');

email.addEventListener('change', e => {
    formData.email = email.value;
    localStorage.setItem(keyData, JSON.stringify(formData));
})
message.addEventListener('change', e => {
    formData.message = message.value;
    localStorage.setItem(keyData, JSON.stringify(formData));
})

var formData = JSON.parse(localStorage.getItem(keyData));
if (formData != undefined) {
    document.querySelector('.feedback-form [name="email"]').value = formData.email;
    document.querySelector('.feedback-form [name="message"]').value = formData.message;
}
else {
    formData = {
        email: "",
        message: ""
    }
}

document.querySelector('.feedback-form').addEventListener('submit', e => {
    e.preventDefault();
    if (formData.email == '' || formData.message == '') {
        alert('Fill please all fields');
        return;
    }
    console.log(formData);

    localStorage.removeItem(keyData);

    formData = {
        email: "",  
        message: ""
    };

    document.querySelector('.feedback-form [name="email"]').value = '';
    document.querySelector('.feedback-form [name="message"]').value = '';
})
