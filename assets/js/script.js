// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if ( password === -1 ) {
    passwordText.value = "Failed to generate password!";
  } else {
    passwordText.value = password;
  }

}


function generatePassword() {
  var passwordLength;
  // Check if password length is actually a number and is within bounds
  if ( !(passwordLength = +(prompt("Please input the desired password length (At least 8 and at most 128", "Password length"))) 
         || ( passwordLength < 8 ) || (passwordLength > 128 ) ) {
      alert("Invalid input!!! Try again")
      return -1;
  }

  var useLowerCase = confirm("Use lowercase letters?");
  var useUpperCase = confirm("Use uppercase letters?");
  var useNumericCharacters = confirm("Use numeric characters?");
  var useSpecialCharacters = confirm("Use special characters?");
  if ( !useLowerCase && !useUpperCase && !useNumericCharacters && !useSpecialCharacters ) {
    alert("You said no to everything! I need at least one character set to use. Please try again");
    return -1;
  }

  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/? "; 
  var finishedPassword = new Array(passwordLength)
  var passIndex = 0;
  var passNum = new Uint8Array(1);
  var passChar = '';

  while ( passIndex < finishedPassword.length) {

    window.crypto.getRandomValues(passNum);
    // passChar is now converted from a number to a corresponding UTF-16 character
    passChar = String.fromCharCode(passNum[0]);

    if ( useLowerCase && lowercaseChars.includes(passChar) ) {
      finishedPassword[passIndex] = passChar;
    }
    else if ( useUpperCase && uppercaseChars.includes(passChar) ) {
      finishedPassword[passIndex] = passChar;
    }
    else if ( useNumericCharacters && numericChars.includes(passChar) ) {
      finishedPassword[passIndex] = passChar;
    }
    else if ( useSpecialCharacters && specialChars.includes(passChar) ) {
      finishedPassword[passIndex] = passChar;
    }
    else {
      // Still here? Number must have not corresponded to a character typable on a typical keyboard. Loop again
      continue;
    }
    // Number must have been added to password. Increment index to add next character to the password
    passIndex++;
  }

  return finishedPassword.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
