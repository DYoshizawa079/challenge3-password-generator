// Assignment code here

let password = {
  numOfChar: 0,
  lowercase: false,
  uppercase: false,
  numbers: false,
  special: false
};

// Prompt for password parameters wanted

// Set the number of characters
var setPasswordLength = function() {
  password.numOfChar = prompt("How long do you want the password to be (in characters)? Enter a number between 8 and 128.");
  password.numOfChar = parseInt(password.numOfChar);

  // Verify that a number between 8 and 128 has been entered
  if (password.numOfChar < 8 || password.numOfChar > 128 || isNaN(password.numOfChar)) {
    alert("Please enter a number between 8 and 128.");
    setPasswordLength();
  }
  console.log("password.numOfChar " + password.numOfChar);
}

// Prompt what kind of characters are wanted
var promptLowercase = function() {
  charLowercase = prompt("Do you want the password to include lowercase characters? Enter 'yes' if you do. Otherwise leave it blank.");
  charLowercase = charLowercase.toLowerCase();
  if (charLowercase === 'yes') {
    password.lowercase = true;
  } else if (charLowercase === '') {
    // Do nothing
  } else {
    alert("Please enter 'yes' or leave it blank.")
    promptLowercase();
  }
}

var promptUppercase = function() {
  charUppercase = prompt("Do you want the password to include uppercase characters? Enter 'yes' if you do. Otherwise leave it blank.");
  charUppercase = charUppercase.toLowerCase();
  if (charUppercase === 'yes') {
    password.uppercase = true;
  } else if (charUppercase === '') {
    // Do nothing
  } else {
    alert("Please enter 'yes' or leave it blank.")
    promptUppercase();
  }
}

var promptNum = function() {
  charNum = prompt("Do you want the password to include number characters? Enter 'yes' if you do. Otherwise leave it blank.");
  charNum = charNum.toLowerCase();
  if (charNum === 'yes') {
    password.numbers = true;
  } else if (charNum === '') {
    // Do nothing
  } else {
    alert("Please enter 'yes' or leave it blank.")
    promptNum();
  }
}

var promptSpecial = function() {
  charSpecial = prompt("Do you want the password to include special characters? Enter 'yes' if you do. Otherwise leave it blank.");
  charSpecial = charSpecial.toLowerCase();
  if (charSpecial === 'yes') {
    password.special = true;
  } else if (charSpecial === '') {
    // Do nothing
  } else {
    alert("Please enter 'yes' or leave it blank.")
    promptSpecial();
  }
}

// Generate the password based on criteria and number of characters requested
var generatePassword = function() {

  setPasswordLength();
  promptLowercase();
  promptUppercase();
  promptNum();
  promptSpecial();

  if (password.lowercase === false && password.uppercase === false) {
    alert("Please pick at least one password criteria.");
    promptLowercase();
    promptUppercase();
    promptNum();
    promptSpecial();
  }

  console.log(password);

  var result = '';

  var lowercaseChar = 'abcdefghijklmnopqrstuvwxyz';
  var lowercaseCharLength = lowercaseChar.length;

  var uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var uppercaseCharLength = uppercaseChar.length;

  var numChar = '0123456789';
  var numCharLength = numChar.length;

  var specChar = '!#$%&()*+,-./:;<>=?@[]\^_{}|~';
  var specCharLength = specChar.length;

  var counter = 0;
  while (counter < password.numOfChar) {
    if(password.lowercase === true) {
      result += lowercaseChar.charAt(Math.floor(Math.random() * lowercaseCharLength));
      counter++;
    }
    if(password.uppercase === true) {
      result += uppercaseChar.charAt(Math.floor(Math.random() * uppercaseCharLength));
      counter++;
    }
    if(password.numbers === true) {
      result += numChar.charAt(Math.floor(Math.random() * numCharLength));
      counter++;
    }
    if(password.special === true) {
      result += specChar.charAt(Math.floor(Math.random() * specCharLength));
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
