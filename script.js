// Assignment code here

var passwordObj = {
  numOfChar: 0,
  lowercase: false,
  uppercase: false,
  numbers: false,
  special: false,
  password: ''
};
var cancel;

// Prompt for password parameters wanted

// Check for cancellations
var checkCancellation = function(check) {
  if (check === null) {
    cancel = true;
    alert("You have cancelled the operation. Goodbye!");
    console.log('cancel ' + cancel);
  }
}

// Set the number of characters
var setPasswordLength = function() {
  passwordObj.numOfChar = prompt("How long do you want the password to be (in characters)? Enter a number between 8 and 128.");
  console.log("passwordObj.numOfChar " + passwordObj.numOfChar);
  if (passwordObj.numOfChar === NaN || passwordObj.numOfChar === null) {
    alert("You have cancelled the operation. Goodbye!");
    cancel = true;
    return;
  }
  passwordObj.numOfChar = parseInt(passwordObj.numOfChar);
  if (passwordObj.numOfChar < 8 || passwordObj.numOfChar > 128 || isNaN(passwordObj.numOfChar)) {
    alert("Please enter a number between 8 and 128.");
    setPasswordLength();
  }
  
}

// Prompt what kind of characters are wanted
var promptLowercase = function() {
  var charLowercase = prompt("Do you want the password to include lowercase characters? Enter 'yes' if you do. Otherwise leave it blank.");
  
  checkCancellation(charLowercase);
  if(cancel) {
    return;
  }

  if (charLowercase === 'yes') {
    passwordObj.lowercase = true;
  } else if (charLowercase === '') {
    // Do nothing
  } else {
    alert("Please enter 'yes' or leave it blank.")
    promptLowercase();
  }
}

var promptUppercase = function() {
  var charUppercase = prompt("Do you want the password to include uppercase characters? Enter 'yes' if you do. Otherwise leave it blank.");
  
  checkCancellation(charUppercase);
  if(cancel) {
    return;
  }
  charUppercase = charUppercase.toLowerCase();
  if (charUppercase === 'yes') {
    passwordObj.uppercase = true;
  } else if (charUppercase === '') {
    // Do nothing
  } else {
    alert("Please enter 'yes' or leave it blank.")
    promptUppercase();
  }
}

var promptNum = function() {
  var charNum = prompt("Do you want the password to include number characters? Enter 'yes' if you do. Otherwise leave it blank.");
  
  checkCancellation(charNum);
  if(cancel) {
    return;
  }
  charNum = charNum.toLowerCase();
  if (charNum === 'yes') {
    passwordObj.numbers = true;
  } else if (charNum === '') {
    // Do nothing
  } else {
    alert("Please enter 'yes' or leave it blank.")
    promptNum();
  }
}

var promptSpecial = function() {
  var charSpecial = prompt("Do you want the password to include special characters? Enter 'yes' if you do. Otherwise leave it blank.");
  
  checkCancellation(charSpecial);
  if(cancel) {
    return;
  }
  charSpecial = charSpecial.toLowerCase();
  if (charSpecial === 'yes') {
    passwordObj.special = true;
  } else if (charSpecial === '') {
    // Do nothing
  } else {
    alert("Please enter 'yes' or leave it blank.")
    promptSpecial();
  }
}

// Prompt for the types of characters required
var promptCharTypes = function() {
  promptLowercase();
  if(cancel) {
    return;
  }
  promptUppercase();
  if(cancel) {
    return;
  }
  promptNum();
  if(cancel) {
    return;
  }
  promptSpecial();
  if(cancel) {
    return;
  }

  // Check whether at least one character type has been selected
  if (passwordObj.lowercase === false && passwordObj.uppercase === false && passwordObj.numbers === false && passwordObj.special === false ) {
    alert("Please pick at least one password criteria.");
    promptCharTypes();
  }
}

// Generate the password based on criteria and number of characters requested
var generatePassword = function() {

  // Reset the password display to blank
  var passwordDisplay = document.querySelector("#password");
  passwordDisplay.value = 'test';
  console.log('passwordDisplay.value ' + passwordDisplay.value);

  setPasswordLength();
  if(cancel) {
    cancel = false;
    return '';
  }
  
  promptCharTypes();
  if(cancel) {
    cancel = false;
    return '';
  }

  console.log(passwordObj);

  // The various characters that are available to generate the password
  var lowercaseChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var uppercaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numChar = [0,1,2,3,4,5,6,7,8,9];
  var specChar = ['\'','\"','!','#','$','%','&','(',')','+',',','-','*','.','/',':',';','<','>','=','?','\\','@','[',']','^','_','`','{','}','~','|'];

  // Pick random charactrs from each set of characters requested. Then join them together to form the password.
  var counter = 0;
  while (counter < passwordObj.numOfChar) {
    if(passwordObj.lowercase === true) {
      passwordObj.password += lowercaseChar[Math.floor(Math.random() * lowercaseChar.length)];
      counter++;
    }
    if(passwordObj.uppercase === true) {
      passwordObj.password += uppercaseChar[Math.floor(Math.random() * uppercaseChar.length)];
      counter++;
    }
    if(passwordObj.numbers === true) {
      passwordObj.password += numChar[Math.floor(Math.random() * numChar.length)];
      counter++;
    }
    if(passwordObj.special === true) {
      passwordObj.password += specChar[Math.floor(Math.random() * specChar.length)];
      counter++;
    }
  }
  return passwordObj.password;

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
