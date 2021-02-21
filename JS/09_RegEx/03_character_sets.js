let re;
// Brackets [] - Character Sets
// It has to be one of the characters insiede the brackets
re = /gr[ae]y/i; // must be an a or e
// Better solution than: re = /gre?a?y/i;
re = /[GF]ray/; // Must be an upper G or F
// Opposite with ^
// Can be anything except the characters inside the brackets
re = /[^GF]ray/; // Match anything except a G or F
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lower letter
re = /[A-Za-z]ray/; // Match any letter
re = /[0-9]ray/; // Match any digit
re = /[0-9][0-9]ray/; // Match any two digits

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exactly {n}-times the character before the braces
re = /Hel{2,4}o/i; // Must be between 2 and 4 times the character
re = /Hel{2,}o/i; // Atleast 2 times

// Parenthesis () - Grouping
re = /^([0-9]x){3}/; //

// String to match
// In order to test the patterns above, alter the str variable
const str = '3x3x3x';

// log results
const result = re.exec(str);
console.log(result);

// log function
function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);
