const passwordText = document.getElementById('password');
const passwordBtn = document.getElementById('new-password-btn');
const inputLength = document.getElementById('input-length');

function generatePassword() {
    if (inputLength.value === '') {
        alert('Please enter a paasword length');
        inputLength.value = ''
    }
    else if (isNaN(inputLength.value)) {
        alert('Please enter a valid paasword length');
        inputLength.value = ''
    } else if (inputLength.value > 100) {
        alert('Maximum length is 30.');
        inputLength.value = ''
    }
    else {

        const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const specialCharacters = "!@#$%^&*()-_";

        const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

        let password = '';

        for (let i = 0; i < inputLength.value; i++) {
            const randomIndex = Math.floor(Math.random() * allCharacters.length);
            password += allCharacters.charAt(randomIndex);
        }

        passwordText.innerHTML = password;
    }
}
