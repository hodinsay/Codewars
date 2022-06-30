// Reversed Strings


// Instructions:
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// Topic:
// String

// Solution:

function solution(str){
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
  }

// Short Solution:

const solution = (str) => str.split('').reverse().join('');