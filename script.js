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


var numbers = ['1','2','3','4','5','6','7','8','9'];
var letters = ['a','b','c','d','e','f','g','h', 'i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var SpecialCharacters = ['!', '@','#','$','%','^','&','*','(',')','-','_','=','+','[',']','{','}',':',';','"','<','>',',','.','/','?','|','*','~','`'];

var startPasswordGeneration = function() {
  var length = window.prompt("Enter password length");
  var lowercase = window.confirm("Lowercase letter?");
  var uppercase = window.confirm("Uppercase?");
  var specialCharacters = window.confirm("Special characters?")

  if (lowercase = true) {
    console.log("placeholder - to update the code")
  }

  var index = Math.floor(Math.random() * length);
  var FinalPassword = numbers[index];

  window.alert(FinalPassword);

  var TryAgain = window.confirm("Try again?");

  if (TryAgain) {
    startPasswordGeneration();
  }
};

startPasswordGeneration();