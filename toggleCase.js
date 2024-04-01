//Create a function that takes in a string as its parameter
function convertCase(input) {
//Break the string into items in an array so as to work on each individual letter
    const stringToArray = input.split("");
//Convert the letters in uppercase to lowercase and the letters in lowercase to uppercase
    for (i = 0; i < input.length; i++) {
      if (stringToArray[0] === input[i].toUpperCase()) {
    let toggleInput = stringToArray[i].toLowerCase();
    console.log(toggleInput);
  } else {
    let toggleInput = stringToArray[i].toUpperCase();
    console.log(toggleInput);
  } toggleInput = stringToArray[i].toUpperCase();
      }
    }
//Call the function for it to run
  convertCase("The quick Brown Fox");
  