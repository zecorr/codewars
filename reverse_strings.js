// ::::: Instructions :::::

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// function solution(str){

// }

// Solution 1:
function solution(str) {
  let splitStr = str.split("");
  let reverseStr = splitStr.reverse();
  let joinStr = reverseStr.join("");
  return joinStr;
}

// Solution 2: Refactor using arrow function
const solution = (str) => str.split("").reverse().join("");
