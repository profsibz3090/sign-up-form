const passwordElement = document.querySelector('#password');
const confirmPasswordElement = document.querySelector('#confirm-password');
const resultElement = document.querySelector('.results');

const password = passwordElement.value;
const confirmPassword = confirmPasswordElement.value;

console.log(passwordElement);
console.log(confirmPasswordElement.value);

const comparePasswords = () => {
   passwordElement.value === confirmPasswordElement.value? resultElement.textContent ="" : "passwords dont match"
};

// passwordElement.addEventListener('keyup', comparePasswords)
confirmPasswordElement.addEventListener('keyup', comparePasswords)
