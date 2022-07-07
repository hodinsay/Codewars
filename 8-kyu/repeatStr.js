//String Repeat

// Instructions:
// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// Topics:
// Strings

// Solution:

function repeatStr (n, s) {
    return s.repeat(n);
}

// Short Solution:

const repeatStr = (n, s) => s.repeat(n);