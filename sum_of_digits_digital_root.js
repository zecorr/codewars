// ::::: Instructions :::::

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// function digitalRoot(n) {
// ...
// }

// Solution 1:
function digitalRoot(n) {
  // global variables
  let arr = String(n).split("");
  let newInt = 0;

  // convert array to integer
  const arrToInt = function () {
    for (let i = 0; i < arr.length; i++) {
      newInt += parseInt(arr[i]);
    }
  };

  // check length of array
  const checkLength = function () {
    let intLength = newInt.toString().length;
    for (let i = 0; i < intLength; i++) {
      if (intLength > 1) {
        arr = String(newInt).split("");
        newInt = 0;
        arrToInt();
      } else {
        return newInt;
      }
    }
  };

  arrToInt();
  checkLength();

  return newInt;
}
