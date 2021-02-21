// Shorthand Character Classes
re = /\w/; // Word character - alphanumeric or _
re = /\w+/; // + = One or more characters
re = /\W/; // Non-Word characters, anything but alphanumeric or _
re = /\d/; // Match any digit
re = /\d+/; // Match any digit 0 or more times
re = /\D/; // Match any Non-digit
re = /\s/; // Match whitespace character
re = /\S/; // Non-whitespace character
re = /Hell\b/i; // Word boundary, matches only Hell in Hell and not in Hello

// Assertions
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x only if NOT followed by y

// String to match
// In order to test the patterns above, alter the str variable
const str = 'djkaöljkjxyjlöajd';

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
