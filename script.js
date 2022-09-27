// Declaring global variables
var password = "";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";

// Function to generate the password based on the user input password length and criterias 
var fillPassword = function (passwordlength, characters) {
  for (i = 0; i < passwordlength; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};

// Function to randomly select the characters to create the password based on the user input password length and criterias
var generatePassword = function ()  {
    //Declaring local variable 
    var characters = "";

    // User prompt for password length (8-128 characters)
    var passwordlength = parseInt(prompt("Please choose the password length between 8-128 characters"))
    console.log (passwordlength)
    // Confirm the password lengh based on criteria
    if( 8 > passwordlength || 128 < passwordlength){
        alert('Incorrect password length details entered')
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

    // Alert if user doesn't select any of the character criterias
    if(!(includelowercase || includeuppercase || includenumeric || includespecialcharacter)){
        alert("You need to select at least one criteria option")
        return;
    }

    // Randomly select lowercase characters if user selected password to include lowercase characters
    if(includelowercase){
        password += lowercase.charAt(
        Math.floor(Math.random() * characters.length)
        );
        characters += lowercase
    }

    // Randomly select uppercase characters if user selected password to include uppercase characters
    if(includeuppercase){
        password += uppercase.charAt(
        Math.floor(Math.random() * characters.length)
        );
        characters += uppercase;
    }

    // Randomly select numeric characters if user selected password to include numeric characters
    if(includenumeric){
        password += numbers.charAt(
        Math.floor(Math.random() * characters.length)
        );
        characters += numbers;
    }

    // Randomly select special characters if user selected password to include special characters
    if(includespecialcharacter){
        password += symbols.charAt(
        Math.floor(Math.random() * characters.length)
        );
        characters += symbols;
    }

    // Fill password with characters randomly selected per use input criterias selected
    updatedPassword = fillPassword(passwordlength - password.length, characters);
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
