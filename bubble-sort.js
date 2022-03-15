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
  return count;
}

console.log("Should be 4", countSwaps([6, 4, 1]));
