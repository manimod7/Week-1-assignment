/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
function removeNonAlphanumeric(string) {
  return string.replace(/[^a-z]+/g, '');
}

function isPalindrome(str) {
  str = str.toLowerCase();
  str = removeNonAlphanumeric(str);
  let str1 = str.toLowerCase().split("").reverse().join("");
  return str1===str;
}

module.exports = isPalindrome;
