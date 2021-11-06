// Assignment code here

let password = {
  numOfChar: 0,
  lowercase: false,
  uppercase: false,
  numbers: false,
  special: false
};

// Prompt for password parameters wanted
var setPasswordLength = function() {
  password.numOfChar = prompt("How long do you want the password to be (in characters)? Enter a number between 8 and 128.");
  password.numOfChar = parseInt(password.numOfChar);
  console.log("password.numOfChar" + password.numOfChar);
}

var promptCharacters = function() {
  charLowercase = prompt("Do you want the password to include lowercase characters? Enter 'yes' if you do.");
  charLowercase = charLowercase.toLowerCase();
  if (charLowercase === 'yes') {
    password.lowercase = true;
  }
  charUppercase = prompt("Do you want the password to include uppercase characters? Enter 'yes' if you do.");
  charUppercase = charUppercase.toLowerCase();
  if (charUppercase === 'yes') {
    password.uppercase = true;
  }
  console.log(password);
}

// Generate the password based on criteria and number of characters requested
var generatePassword = function() {

  setPasswordLength();
  promptCharacters();

  var result = '';

  var lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
  var lowercaseCharactersLength = lowercaseCharacters.length;

  var uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var uppercaseCharactersLength = uppercaseCharacters.length;

  var counter = 0;
  while (counter < password.numOfChar) {
    if(password.lowercase === true) {
      result += lowercaseCharacters.charAt(Math.floor(Math.random() * lowercaseCharactersLength));
      counter++;
    }
    if(password.uppercase === true) {
      result += uppercaseCharacters.charAt(Math.floor(Math.random() * uppercaseCharactersLength));
      counter++;
    }
  }
  return result;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
