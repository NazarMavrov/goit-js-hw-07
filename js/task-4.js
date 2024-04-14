const form = document.querySelector('.login-form');

const onFormSubmit = (event) => {
    event.preventDefault();
    const userEmail = event.currentTarget.elements.email.value.trim();
    const userPassword = event.currentTarget.elements.password.value.trim();
    if (userEmail === "" || userPassword === "") {
        alert('All form fields must be filled in');
        return
    }

    const info = {
        email: userEmail,
        password: userPassword
    }
    console.log(info);

    event.currentTarget.reset();

};

form.addEventListener('submit', onFormSubmit)
