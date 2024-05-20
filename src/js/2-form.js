let formData = {
  email: "",
  message: "",
}
const keyData = "feedback-form-state";

const email = document.querySelector('.feedback-form [name="email"]');
const message = document.querySelector('.feedback-form [name="message"]');

document.querySelector('.feedback-form').addEventListener('input', e => {
  formData.email = email.value;
  formData.message = message.value;
  
  localStorage.setItem(keyData, JSON.stringify(formData));
})

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

    e.currentTarget.reset();
})

function checkStorage() {
  if (JSON.parse(localStorage.getItem(keyData)) != undefined) {
    formData = JSON.parse(localStorage.getItem(keyData));
    document.querySelector('.feedback-form [name="email"]').value = formData.email;
    document.querySelector('.feedback-form [name="message"]').value = formData.message;
  }
  else {
    formData = {
      email: "",
      message: ""
    }
  }
}
checkStorage();
