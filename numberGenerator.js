//Create a function that takes in two numbers as its parameters
function numberGenerator(num1, num2) {
//Create an array to hold the two numbers and the  generated numbers
    let numbers = [];
//Add one to the number that is less of the two input numbers then add the number gotten as a result to the numbers array
    if (num1 < num2) {
      let condition = num2 + 1;
      for (i = num1; i < condition; i++) {
        numbers.push(i);
      }
    } else if (num1 > num2) {
      let condition = num1 + 1;
      for (i = num2; i < condition; i++) {
        numbers.push(i);
      }
    }
    console.log(numbers);
    return numbers;
  }
// Call the function for it to run
  numberGenerator(1, 10);