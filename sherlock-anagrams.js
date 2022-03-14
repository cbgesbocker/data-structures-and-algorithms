/*
 * Complete the 'sherlockAndAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function sherlockAndAnagrams(s) {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    // a b b a
    for (let j = i; j < s.length; j++) {
      let charArray = s.substring(i, j + 1).split("");
      charArray.sort();
      let sortedStr = charArray.join("");
      let storedValue = map.get(sortedStr);
      if (storedValue) {
        map.set(sortedStr, storedValue + 1);
      } else {
        map.set(sortedStr, 1);
      }
    }
  }
  let total = Array.from(map).reduce((acc, value) => {
    // 1 -> 0, 2 -> 1, 3 -> 3 * 2 / 2 -> 3
    let normalized = (value[1] * (value[1] - 1)) / 2;
    acc += normalized;
    return acc;
  }, 0);
  return total;
}
