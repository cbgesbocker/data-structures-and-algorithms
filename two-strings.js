/*
 * Complete the 'twoStrings' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 *
 * Given two strings, determine if they share a common substring. A substring may be as small as one character.
 */

function twoStrings(s1, s2) {
  // Write your code here
  // O(s1) + O(s2) -> find smaller string, loop over s1, then inner loop over s2 and check for existance
  let stringToUse = s1.length < s2.length ? s1 : s2;
  let stringToCompare = s1.length < s2.length ? s2 : s1;

  let index = 0;
  let found = false;

  // O ( s1 + s2 )
  while (stringToUse[index] !== undefined) {
    if (stringToCompare.includes(stringToUse[index])) {
      found = true;
      break;
    }
    index++;
  }
  return found ? "YES" : "NO";
  // O (smallerString) -> loop over smaller string and
}

console.log("Should be NO", twoStrings("writetoyourparents", "fghmqzldbc"));
