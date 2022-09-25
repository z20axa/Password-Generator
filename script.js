// ## Acceptance Criteria

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment code here
let password = "";

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";

var fillPassword = function (passwordlength, characters) {
  for (let i = 0; i < passwordlength; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};

var generatePassword = function ()  {
    let characters = "";

    // User prompt for password length (8-128 characters)
    var passwordlength = parseInt(prompt("Please choose the password length between 8-128 characters"))
    console.log (passwordlength)

    if( 8 > passwordlength || 128 < passwordlength){
        alert('incorrect details entered')
        return;
    }

    // User prompt for lowercase characters
    var includelowercase = confirm("Would you like your password to include lowercase characters?")
    console.log(includelowercase)

    // User prompt for uppercase characters
    var includeuppercase = confirm("Would you like your password to include uppercase characters?")
    console.log(includeuppercase)

    // User prompt for numeric characters
    var includenumeric = confirm("Would you like your password to include numeric characters?")
    console.log(includenumeric)

    // User prompt for special characters
    var includespecialcharacter = confirm("Would you like your password to include special characters?")
    console.log(includespecialcharacter)

    if(!(includelowercase || includeuppercase || includenumeric || includespecialcharacter)){
        alert("You need to select atleast one option")
        return;
    }

    if(includelowercase){
        password += lowercase.charAt(
        Math.floor(Math.random() * characters.length)
        );
        characters += lowercase
    }

    if(includeuppercase){
        password += uppercase.charAt(
        Math.floor(Math.random() * characters.length)
        );
        characters += uppercase;
    }


    if(includenumeric){
        password += numbers.charAt(
        Math.floor(Math.random() * characters.length)
        );
        characters += numbers;
    }

    if(includespecialcharacter){
        password += symbols.charAt(
        Math.floor(Math.random() * characters.length)
        );
        characters += symbols;
    }

    let updatedPassword = fillPassword(passwordlength - password.length, characters);
    return updatedPassword;
};


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
