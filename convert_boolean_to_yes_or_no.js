// ::::: Instructions :::::
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// function boolToWord( bool ){
//   ...
// }

// Solution 1:
function boolToWord(bool) {
  return bool === true ? "Yes" : "No";
}

// Solution 2: Refactor with arrow function
const boolToWord = (bool) => (bool === true ? "Yes" : "No");

// Solution 3: Refactor
const boolToWord = (bool) => (bool ? "Yes" : "No");
