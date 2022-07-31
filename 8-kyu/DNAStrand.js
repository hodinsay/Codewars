// Complementary DNA


// Description:
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// Topics:
// Fundamentals

// Solution 1: 

function DNAStrand(dna) {
    return dna.replace(/./g, function(c) {
      return DNAStrand.pairs[c]
    })
  }
  
  DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  }

// Solution 2:

function DNAStrand(dna){
    let str = '';
    
    for (let i = 0; i <= dna.length; i++){
      if(dna[i] === 'A'){
        str += 'T';
      } else if (dna[i] === 'T'){
          str += 'A';
      } else if (dna[i] === 'G'){
          str += 'C';
      } else if (dna[i] === 'C'){
          str += 'G';
      }
    }
      return str;
  }
