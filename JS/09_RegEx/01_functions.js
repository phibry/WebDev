// EVALUATION FUNCTIONS
// -> exec()
// -> test()
// -> match()
// -> search()
// -> replace()
let re;

// Regex
re = /hello/;
re = /hello/i; // i = case insensitive
// re = /hello/g; // Global search (searches for all instances of the input)

// console.log(re);
// console.log(re.source);

// exec() - Return result in an array or null
// const result = re.exec('hello world'); // match - hello
// const result = re.exec('hi world'); // no match - null
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - Returns true or false
// const result = re.test('Hello'); // uppercase -> false, with i-> true
// console.log(result);

// match() - Return result array or null
// smth like the opposite of exec, we put in the regex and match it to the paragraph
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

// search() - Return index of the first match
//    if not found returns -1
// const str = 'Hello There';
// const result = str.search(re);
// console.log(result);

// replace() - Return new string with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);
