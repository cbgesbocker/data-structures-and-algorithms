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
  for (let i = 0; i <= arr.length - k; i++) {
    let unfairness = arr[i + (k - 1)] - arr[i];
    minUnfairness = !minUnfairness
      ? unfairness
      : Math.min(unfairness, minUnfairness);
  }
  return minUnfairness;
}

console.log(maxMin(3, [100, 200, 300, 350, 400, 401, 402]));
