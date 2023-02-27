// ::::: Instructions :::::
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// function evenOrOdd(number) {
//
// }

// Solution 1:
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else if (number % 2 !== 0) {
    return "Odd";
  }
}

// Solution 2: Refactor with ternary operator
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
