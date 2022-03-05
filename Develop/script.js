var generateBtn = document.querySelector("#generate");

// we will prompt the user as to which character types they wish to be included.
let lowerCase = 'abcdefghijklmnopqrstuvwyz';
let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWYZ';
let numeric = '1234567890';
let specialChars = ' !"#$%&()*+,-./:;<=>?@[]^_`{|}~';


// the following function takes the user selected criteria, and appends the strings together in let selectedChars.
function generatePassword () {
      let selectedChars = '';
         
      if (confirm('Would you like to include lowercase letters?')) {
        selectedChars += lowerCase;
      };
      
      if (confirm('Would you like to include UPPERCASE letters?')) {
        selectedChars += upperCase;
      };
      
      if (confirm('Would you like to include numbers?')) {
        selectedChars += numeric;
      };
      
      if (confirm('Would you like to include special characters?')) {
        selectedChars += specialChars;
      }

    // this statement throws an alert if no data type has been selected.
      if (selectedChars === '') {
        alert('Password must contain at least one character type!');
      } else {
      
    // prompts the user for password length.
      passwordLength = prompt('How long would you like the password to be? (enter a number between 8 to 128)?');
      passwordLength = Number(passwordLength);
            if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
              alert('Please enter a number between 8 and 128')
            } else {

              // applying a for loop that will iterate over the user-created string for the number of times specified by the password length.
                    let str = '';
                    for (let i = 0; i < passwordLength; i++) {
                      str += selectedChars.charAt(Math.floor(Math.random() * selectedChars.length));
                    }
                    return str;
            };
        }
};


// function defines the call of the generated password. 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//event listener on 'Generate Password' button.
generateBtn.addEventListener('click', function(event){
  event.preventDefault();
   writePassword();
});