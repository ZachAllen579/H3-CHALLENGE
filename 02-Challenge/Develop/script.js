// Assignment Code
let generateBtn = document.querySelector("#generate");

let lowercaseAlphabet = ["a","b","c","d","e","f","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let uppercaseAlphabet = ["a","b","c","d","e","f","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"].join("").toUpperCase().split("");

let numbers = ["1","2","3","4","5","6","7","8","9","0"]

let specialCharacters = ["!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","^","_","`","{","|","}","~"]

let hasLowerCheckBox = document.getElementById("#lowercase");

let hasUpperCheckBox = document.getElementById("#uppercase");

let hasNumbersCheckBox = document.getElementById("#numbers");

let hasSpecialCharactersCheckBox = document.getElementById("#specialCharacters");



let startingPassword = [];

// let startingPassword = [...lowercaseAlphabet, ...uppercaseAlphabet, ...numbers, ... specialCharacters]

// Write password to the #password input


function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}


function generatePassword() {
  
  if (document.querySelector(hasLowerCheckBox) === checked) {
   let = startingPassword.concat(...lowercaseAlphabet)
  }
  
  if (document.querySelector(hasUpperCheckBox) === checked) {
  let = startingPassword.concat(...uppercaseAlphabet)
  }
  
  if (document.querySelector(hasNumbersCheckBox) === checked) {
  let = startingPassword.concat(...numbers)
  }
  
  if (document.querySelector(hasSpecialCharactersCheckBox) === checked) {
  let = startingPassword.concat(...specialCharacters)
  }

  let password = "";
  for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random()*startingPassword.length);
    let randomLetter = startingPassword[randomNumber]
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
