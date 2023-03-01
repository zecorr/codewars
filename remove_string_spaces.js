//::::: Instructions :::::
// Simple, remove the spaces from the string, then return the resultant string.

// function noSpace(x){
//
// }

// Solution 1:
function noSpace(x) {
  return x.split(" ").join("");
}

// Solution 2: Refactor with arrow function
const noSpace = (x) => x.split(" ").join("");
