const userNameInput = document.querySelector('#name-input');
const userNameOutput = document.querySelector('#name-output');

userNameInput.addEventListener('input', () => {
    const trimmedName = userNameInput.value.trim();
    userNameOutput.textContent = trimmedName || "Anonymous"
})

