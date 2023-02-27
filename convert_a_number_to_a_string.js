// ::::: Instructions :::::
// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// function numberToString(num) {
//    Return a string of the number here!
// }

// Solution 1:
// is a global function in JavaScript that can be used to convert any value to a string, including numbers.
// It works by taking the value passed to it as an argument and returning a string representation of that value.
// Since it is a global function, it can be used anywhere in your JavaScript code without needing to be called on a specific object.
function numberToString(num) {
  return String(num);
}

// Solution 2:
// is a method giving you more control over how the number is represented allowing you to convert a number to a string in a specific base.
// num.toString(2) will convert a number to a binary string. eg. numberToString(5) will output '101'.
// num.toString(16) will convert a number to a hexadecimal string. eg. numberToString(12648430) will output 'c0ffee'
function numberToString(num) {
  return num.toString();
}

// Solution 3: Refactor preferred method with arrow function
const numberToString = (num) => String(num);
