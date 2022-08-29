// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = "Refer to popup";
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Declaring variables
var numbers = ['1','2','3','4','5','6','7','8','9'];
var lowercaseletters = ['a','b','c','d','e','f','g','h', 'i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseletters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var SpecialCharacters = ['!', '@','#','$','%','^','&','*','(',')','-','_','=','+','[',']','{','}',':',';','"','<','>',',','.','/','?','|','*','~','`'];
var possibleCharacters = []

//User choices (this is in a function so that we can recall it later - maybe when we link to a button?)
var startPasswordGeneration = function() {
  var length = window.prompt("Enter password length");
  var lowercase = window.confirm("Lowercase letter?");
  var uppercase = window.confirm("Uppercase?");
  var specialCharacters = window.confirm("Special characters?");
  var numbers = window.confirm("Numeric?");
  var finalPassword = [];

//Pushing preferences to a variable 'possibleCharacters'
  if (lowercase == true) {
    possibleCharacters.push(lowercaseletters);
  } else if (uppercase == true) {
    possibleCharacters.push(uppercaseletters);
  } else if (specialCharacters == true) {
    possibleCharacters.push(SpecialCharacters);
  } else if (numbers == true) {
    possibleCharacters.push(numbers)
  }

//Console log for testing
  console.log(length);
  console.log(possibleCharacters.length)

//Math.random to generate random password
  for(var i=0; i<length; i++) {
    var index = Math.floor(Math.random() * possibleCharacters);
    var finalPassword = possibleCharacters[index];
  }
  
 //alert to show the final password
  window.alert(finalPassword);

  var TryAgain = window.confirm("Try again?");

  if (TryAgain) {
    startPasswordGeneration();
  }
};

startPasswordGeneration();