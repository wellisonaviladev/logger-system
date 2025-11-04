
const username = document.querySelector('#username-login');
const password = document.querySelector('#password-login');
const checkbox = document.querySelector('#checkbox-login');
const button = document.querySelector('#button-login');

button.addEventListener('click', (event) => {

    const usernameValue = username.value;
    const passwordValue = password.value;

    if (usernameValue === '' || passwordValue === '') {
        event.preventDefault()
        alert('Please fill in all the fields!');
        return;
    }

    if (usernameValue !== 'well' || passwordValue !== '123') {
        event.preventDefault();
        alert('Incorret username or password!');
        return;
    }

    alert('Acess granted!');

})