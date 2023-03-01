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

// Solution 2: Refactor with Regular Expression - https://www.w3schools.com/js/js_regexp.asp
// /pattern/modifiers
// within str.match() the regular expression is setup by putting the pattern we're looking for within 2 forward slashes "/ /"
// putting "aeiou" within the regex will look for the exact phrase "aeiou".
// putting "aeiou" within square brackets "[aeiou]" allows us to find any of the characters within the brackets.
// putting the "i" modifier performs case-insensitive matching.
// putting the "g" modifier performs a global match (find all matches rather than stopping after the first match)
// putting .length at the end
function getCount(str) {
  return str.match(/[aeiou]/gi).length;
}
