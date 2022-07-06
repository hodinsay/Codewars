// Even or Odd

// Instructions:
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// Topics;
// Fundamental

// Solution:

function even_or_odd(number) {
    if ( number % 2 === 0){
      return "Even"
    } else{
      return "Odd"
    }
}

// Short Solution: 

const even_or_odd = (number) => number % 2 === 0 ? "Even" : "Odd";