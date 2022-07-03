// Are You Playing Banjo?

// Instructions:
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

// Topics:
// Strings

// Solution:

function areYouPlayingBanjo(name) {
    if (name.toLowerCase().charAt(0) == 'r'){
      name = name + ' plays banjo';
    }else{
      name = name + ' does not play banjo';
    }
    return name;
  }

// Short Solution:

const areYouPlayingBanjo = name => name.toLowerCase().charAt(0) == 'r' ? name += ' plays banjo' : name += ' does not play banjo';