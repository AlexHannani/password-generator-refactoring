// Assignment Code
var generateBTn = document.querySelector("#generate");
var chosenChar = []
var password = ""

var arLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var arSpecial = ["!", "@", "#", "$", "%", "&", "*", "?", "_", "-", "^"];

function generatePassword() {
  var characterLength = prompt("How many characters do you want your password to be? Please select a number between 8 and 128")
  if (characterLength < 8 || characterLength > 128) {
    alert("Please enter a number between 8 and 128");
    generatePassword();
  }

  function characterSelection() {
    var userSelectUpperCase = confirm("Do you want to include uppercase characters?")
    var userSelectLowerCase = confirm("Do you want to include lowercase characters?")
    var userSelectNumbers = confirm("Do you want to include numbers?")
    var userSelectSpecial = confirm("Do you want to include speical characters?")
  
    
  }
}