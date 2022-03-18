/*
 * Complete the 'pairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

function pairs(k, arr) {
  // Write your code here
  let dict = {};
  arr.sort((a, b) => b - a);
  let total = 0;
  for (let i of arr) {
    if (i + k in dict) {
      dict[i + k] = dict[i + k] + 1;
      total += 1;
    }
    dict[i] = dict[i] ? dict[i] + 1 : 1;
  }
  return total;
}
