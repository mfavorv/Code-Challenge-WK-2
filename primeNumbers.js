 //Create a function that takes in an array of  numbers as its parameter
 let numbersToIterateOver = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
 function primeNumbers(numbersToIterateOver) {
// Create the array to hold the prime numbers to be returned
    let primeNumbersGenerated = [];
// Determine if the numbers in the array are prime or not
    function iterator(n) {
        let isPrime = true;
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                isPrime = false;
                break; // Exit the loop early if we find a divisor
            }
        }
//If the numbers are prime numbers and are greater than 1 then they are pushed to the primeNumbersGenerated array
        if (isPrime && n > 1) {
            primeNumbersGenerated.push(n);
        }
    }
//Run iterator function over each number in the array to check if the numbers are prime
    numbersToIterateOver.map(iterator);
  
    console.log(primeNumbersGenerated);
    return primeNumbersGenerated;
  }
  
// Call the function for it to run
  primeNumbers(numbersToIterateOver);
  