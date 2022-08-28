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


var options = {
numbers: ['1','2','3','4','5','6','7','8','9'],
letters: ['a','b','c','d','e','f','g','h'],
SpecialCharacters: ['!', '@','#']
};

var startPasswordGeneration = function() {
  var userChoice1 = window.prompt("Enter password length");
  var userChoice2 = window.prompt("Select type of characters")

  if (!userChoice1) {
    return;
  }

  var index = Math.floor(Math.random() * userChoice1);
  var FinalPassword = options.numbers[index];

  window.alert(FinalPassword);

  var TryAgain = window.confirm("Try again?");

  if (TryAgain) {
    startPasswordGeneration();
  }
};

startPasswordGeneration();