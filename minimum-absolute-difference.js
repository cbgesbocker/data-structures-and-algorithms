/*
 * Complete the 'minimumAbsoluteDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 *
 * https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms
 */

function minimumAbsoluteDifference(arr) {
  let minAbsDiff = 0;

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 1; i++) {
    let value = arr[i];
    let difference = Math.abs(value - arr[i + 1]);
    if (value === arr[i + 1]) {
      minAbsDiff = 0;
      break;
    }
    if (!minAbsDiff) {
      minAbsDiff = difference;
    } else {
      minAbsDiff = Math.min(difference, minAbsDiff);
    }
  }
  return minAbsDiff;
}
