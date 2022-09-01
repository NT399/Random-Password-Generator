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

  //Whether to include lowercase letters
  var lowercase = window.confirm("Would you like the password to include lowercase letters?");
  // validation of input
  if (lowercase == true) {
    window.alert("Lowercase letters will be included");
  } else {
    window.alert("Lowercase letters will not be included")}

  //Whether to include uppercase letters
  var uppercase = window.confirm("Would you like the password to include uppercase letters?");
  // validation of input
  if (uppercase == true) {
    window.alert("Uppercase letters will be included");
  } else {
    window.alert("Uppercase letters will not be included")}
  
  //Whether to include special characters
  var specialCharacters = window.confirm("Would you like the password to include special characters?");
    // validation of input
  if (specialCharacters == true) {
    window.alert("Special characters will be included");
  } else {
    window.alert("Special characters will not be included")}

  //Whether to include numbers
  var numbers = window.confirm("Would you like the password to include numbers?");
  // validation of input
  if (numbers == true) {
    window.alert("Numbers will be included");
  } else {
    window.alert("Numbers will not be included")}

  var finalPassword = [];

//Concatenating user preferences to a variable 'possibleCharacters'
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


