let val;

const today = new Date();
let birthday = new Date('12-7-1992 11:25:09');
birthday = new Date('December 7 1992');
birthday = new Date('12/7/1992');

// val = today.toString();
val = birthday;
val = today.getMonth(); // zero based: jan=0, feb=1 etc.
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2); // set month to march
birthday.setDate(12); // 12. of the month
birthday.setFullYear(1985); // set year
birthday.setHours(3); // Set hours
birthday.setMinutes(30); // Set Minutes
birthday.setSeconds(33); // Set Seconds

console.log(val);
console.log(birthday);
