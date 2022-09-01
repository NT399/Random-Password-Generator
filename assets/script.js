// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declaring variables
var numbers1 = ['1','2','3','4','5','6','7','8','9'];
var lowercaseletters = ['a','b','c','d','e','f','g','h', 'i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var uppercaseletters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var SpecialCharacters1 = ['!', '@','#','$','%','^','&','*','(',')','-','_','=','+','[',']','{','}',':',';','"','<','>',',','.','/','?','|','*','~','`',];
var possibleCharacters = []

//User choices in relation to the specifications of the password
var startPasswordGeneration = function() {
  var length = window.prompt("Enter the amount of characters for the password");
  if (!length) {
    return;
  } if ((length<8) || (length>128)){
    window.alert("Please enter a length that is 8 or more characters and 128 or less characters")
    startPasswordGeneration()
  }
  var lowercase = window.confirm("Would you like the password to include lowercase letters?");
  var uppercase = window.confirm("Would you like the password to include uppercase letters?");
  var specialCharacters = window.confirm("Would you like the password to include special characters?");
  var numbers = window.confirm("Would you like the password to include numbers?");
  var finalPassword = [];

//Concatenating preferences to a variable 'possibleCharacters'
  if (lowercase == true) {
    possibleCharacters=possibleCharacters.concat(lowercaseletters);
  } if (uppercase == true) {
    possibleCharacters=possibleCharacters.concat(uppercaseletters);
  } if (specialCharacters == true) {
    possibleCharacters=possibleCharacters.concat(SpecialCharacters1);
  } if (numbers == true) {
    possibleCharacters=possibleCharacters.concat(numbers1)
  }

//Console log for testing
  console.log(length);
  console.log(possibleCharacters)
  console.log(SpecialCharacters1.length)

//Math.random to generate random password
  for(var i=0; i<length; i++) {
    var index = Math.floor(Math.random() * possibleCharacters.length);
       finalPassword += possibleCharacters[index];
  }
 
 //alert to show the final password
  window.alert("Your password is: " + finalPassword);

  // Write password to the #password input
  var password = finalPassword;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //This clears the function at the end to reset it after each press of the button
  possibleCharacters.length=0;
};

// Add event listener to generate button
generateBtn.addEventListener("click", startPasswordGeneration);


