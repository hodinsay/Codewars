// Convert a string to an array

// Instruction: 
// Write a function to split a string and convert it into an array of words.

// Examples (Input -> Output):
// * "Robin Singh" ==> ["Robin", "Singh"]

// * "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// Topics:
// String, Array

// Solution: 
function stringToArray(string){
    return string.split(" ")
}

// Short Solution: 
const stringToArray = string => string.split(" ");