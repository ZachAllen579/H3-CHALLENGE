// Assignment Code
let generateBtn = document.querySelector("#generate");

let hasLowerBtn = document.querySelector("#hasLower");

let hasUpperBtn = document.querySelector("#hasUpper");

let hasNumbersBtn = document.querySelector("#hasNumbers");

let hasSpecialCharactersBtn = document.querySelector("#hasSpecialCharacters");

let lowercaseAlphabet = ["a","b","c","d","e","f","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let uppercaseAlphabet = ["a","b","c","d","e","f","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"].join("").toUpperCase().split("");

let numbers = ["1","2","3","4","5","6","7","8","9","0"]

let specialCharacters = ["!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","^","_","`","{","|","}","~"]

let randomPassword = [...lowercaseAlphabet, ...uppercaseAlphabet, ...numbers, ... specialCharacters]

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}



function generatePassword() {

  // if (hasLowerBtn.addEventListener("click")) {
  
  // }
  // if (hasUpperBtn.addEventListener("click")) {
  
  // }
  // if (hasNumbersBtn.addEventListener("click")) {
  
  // }
  // if (hasSpecialCharactersBtn.addEventListener("click")) {
  
  // }
  
  
  let password = "";
  for (let i = 0; i < 3; i++) {
    let randomNumber = Math.floor(Math.random()*randomPassword.length);
    let randomLetter = randomPassword[randomNumber]
    password += randomLetter;
  }
  
  for (let i = 0; i < 3; i++) {
    let randomNumber = Math.floor(Math.random()*lowercaseAlphabet.length);
    let randomLetter = lowercaseAlphabet[randomNumber]
    password += randomLetter;
  }
  
  for (let i = 0; i < 3; i++) {
    let randomNumber = Math.floor(Math.random()*uppercaseAlphabet.length);
    let randomLetter = uppercaseAlphabet[randomNumber]
    password += randomLetter;
  }

  for (let i = 0; i < 3; i++) {
    let randomNumber = Math.floor(Math.random()*numbers.length);
    let randomLetter = numbers[randomNumber]
    password += randomLetter;
  }
  
  for (let i = 0; i < 3; i++) {
    let randomNumber = Math.floor(Math.random()*specialCharacters.length);
    let randomLetter = specialCharacters[randomNumber]
    password += randomLetter;
  }
  return password;
}

function name(params) {
  Lower
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
