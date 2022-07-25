// Name Shuffler

// Instructions:

// Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"

// Solution:

function nameShuffler(str){
    return str.split(' ').reverse().join(' ');
  }

// Short Solution:

const nameShuffler = (str) => str.split(' ').reverse().join(' ');

