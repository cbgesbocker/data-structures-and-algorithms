/*
 * Complete the 'countSwaps' function below.
 *
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function swap(array, indexOne, indexTwo) {
  let value = array[indexOne];
  let valueTwo = array[indexTwo];
  array[indexTwo] = value;
  array[indexOne] = valueTwo;
  return array;
}
function countSwaps(a) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] > a[j]) {
        a = swap(a, i, j);
        count++;
      }
    }
  }
  console.log(`Array is sorted in ${count} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[a.length - 1]}`);
  return a;
}

console.log("Should be 3");
console.log(countSwaps([6, 4, 1]));

module.exports = countSwaps;
