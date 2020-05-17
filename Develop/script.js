//Variables

var number = "0123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!@#$%^&+()"

// after the generate password button is pushed
function generatePassword(){

    var length = prompt("How many characters do you want it to be? Must be more than 8 but less than 128.");
      console.log(length);
    
    //for invalid number
    if (length < 8 || length > 128 || length === null) 
      alert("Must choose a number between 8 and 128!");
      return generatePassword();
    }
    
    // for valid number
    if( length = true) {
        var getNumber = confirm("Do you want numbers in your password?");
        var test = String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    console.log(test);
    
    var getLowerCase = confirm("Do you want lowercase characters?");
      console.log(lowerCase);
    
    var getUpperCase = confirm("Do you want uppercase characters?");
     console.log(upperCase);
    
    var getSpecial = confirm("Do you want special characters?")
     console.log(getSpecial);
    
    var getSpecial = confirm("Do you want special characters?");
      
    

    if (getNumber === false && getLowerCase === false && getUpperCase === false && getSpecial === false) 
      alert("Must choose ONE character type")
      // return generate Password
    }
     
    var possibleCharacters = "";
     
    if (getNumber === true){
    possibleCharacters += number;  
    }
     
    if (getLowerCase ===true) {
      possibleCharacters += lowerCase;
    }
     
    if (getUpperCase === true){
      possibleCharacters += getUpperCase
    }
     
    if (getSpecial === true) {
      possibleCharacters += special;
    }
     
    var randomPassword = "";
     
    for (var i = 0; 1 < length; i++){
      Math.floor((Math.random() * possibleCharacters.length) +1);
     
    var randomCharacter = possibleCharacters.charAt(randomNumber)
     
    randomPassword += randomCharacter;
    }
     
    console.log(randomPassword);


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
