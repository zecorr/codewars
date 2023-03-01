// ::::: Instructions :::::
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {
//   return 0;
// }

// Solution 1:
function getCount(str) {
  let counter = 0;
  const s = str.split("");
  for (let i = 0; i < s.length; i++) {
    if (
      s[i] === "a" ||
      s[i] === "e" ||
      s[i] === "i" ||
      s[i] === "o" ||
      s[i] === "u"
    ) {
      counter++;
    }
  }
  return counter;
}
