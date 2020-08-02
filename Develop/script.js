// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  var lowerLetter = "abcdefghijklmnopqrstuvwxyz".split("")
  var upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  var numerals = "0123456789".split("")
  var specChar = "!@#$%^&*".split("")
}

function generatePassword() {
  var availableChar = []
  var passwordArr = []
  
  var lowerLetter = confirm("Would you like to use lower letters?");
  var upperLetter = confirm("Would you like to use upper letters?");
  var numerals = confirm("Would you like to use numbers?");
  var specChar = confirm("Would you like to use special characters?");
  var passCharCount = prompt("Choose a password length between 8 and 128")
  
  if (lowerLetter === true) {
    availableChar.push(lowerLetter)
  }
  if (upperLetter === true) {
    availableChar.push(upperLetter)
  }
  if (numerals === true) {
    availableChar.push(numerals)
  }
  if (specChar === true) {
    availableChar.push(specChar)
  }

  for (var i = 0; i < passCharCount; i++) {
    passwordArr = Math.floor(Math.random) * availableChar
    passwordArr.push(passCharCount)
    console.log(availableChar)
  }

  return password;  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



