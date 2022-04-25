/*
 * Complete the 'rotLeft' function below.
 *
 * https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER d
 */

function rotLeft(a, d) {
  // Write your code here
  let original = [...a];
  let lastIndex = a.length;
  for (let i in a) {
    let index = i - d;
    if (index < 0) {
      index = lastIndex - Math.abs(index);
    }
    a[index] = original[i];
  }
  return a;
}
