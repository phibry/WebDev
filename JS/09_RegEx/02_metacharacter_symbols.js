let re;
// Literal Characters
re = /hello/;
re = /hello/i; // casesensitive

// Metacharacter Symbols
re = /^h/i; // Must start with
re = /d$/i; // Must ends with
re = /^hello$/i; // Must begin and ends with
re = /h.llo/i; // Matches any ONE character
re = /h*llo/i; // Matches any character 0 or more times
re = /gre?a?y/i; // optional character
re = /gre?a?y\?/i; // Escape character, ? is not a literal and not optional

// String to match
// In order to test the patterns above, alter the str variable
const str = 'gray?';
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
