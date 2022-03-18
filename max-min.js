/*
 * Complete the 'maxMin' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

function maxMin(k, arr) {
  // Write your code here
  arr.sort((a, b) => a - b);

  let minUnfairness = null;
  for (let i = 0; i < arr.length - (k + 1); i++) {
    const slice = arr.slice(i, i + k);
    let computedValue = Math.max(...slice) - Math.min(...slice);
    if (!minUnfairness) {
      minUnfairness = computedValue;
    } else {
      minUnfairness = Math.min(computedValue, minUnfairness);
    }
  }
  return minUnfairness;
}
