// https://www.hackerrank.com/challenges/2d-array/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function isUndefined(value) {
  return value === undefined;
}

function arrayValueDefined(array, indexOne, indexTwo) {
  return (
    !isUndefined(array[indexOne]) && !isUndefined(array[indexOne][indexTwo])
  );
}

function hourglassSum(arr) {
  let i = 1;
  let maxSum = null;
  while (i < arr.length - 1) {
    let innerArray = arr[i];
    let j = 1;
    while (j < innerArray.length - 1) {
      let middle = innerArray[j];
      let top = arrayValueDefined(arr, i - 1, j) ? arr[i - 1][j] : undefined;
      let bottom = arrayValueDefined(arr, i + 1, j) ? arr[i + 1][j] : undefined;

      let topRight = arrayValueDefined(arr, i - 1, j + 1)
        ? arr[i - 1][j + 1]
        : undefined;

      let topLeft = arrayValueDefined(arr, i - 1, j - 1)
        ? arr[i - 1][j - 1]
        : undefined;

      let bottomLeft = arrayValueDefined(arr, i + 1, j - 1)
        ? arr[i + 1][j - 1]
        : undefined;

      let bottomRight = arrayValueDefined(arr, i + 1, j + 1)
        ? arr[i + 1][j + 1]
        : undefined;

      const sum =
        middle + top + bottom + topRight + topLeft + bottomRight + bottomLeft;

      if (maxSum === null) {
        maxSum = sum;
      }
      if (sum > maxSum) {
        maxSum = sum;
      }
      j++;
    }
    i++;
  }
  return maxSum;
}

let arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

let arr2 = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];
let arr3 = [
  [-1, 1, -1, 0, 0, 0],
  [0, -1, 0, 0, 0, 0],
  [-1, -1, -1, 0, 0, 0],
  [0, -9, 2, -4, -4, 0],
  [-7, 0, 0, -2, 0, 0],
  [0, 0, -1, -2, -4, 0],
];

console.log("Should be 19", hourglassSum(arr));
console.log("Should be 28", hourglassSum(arr2));
console.log("Should be 0", hourglassSum(arr3));
