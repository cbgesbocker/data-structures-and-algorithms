/*
 * Complete the 'countInversions' function below.
 *
 * https://www.hackerrank.com/challenges/ctci-merge-sort/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function countInversions(arr) {
  return countInversionsRec(arr, 0, arr.length - 1);
}

function merge(array, left, mid, right) {
  let numInversions = 0;
  let leftArraySize = mid - left + 1;
  let rightArraySize = right - mid;

  let leftArr = [];
  for (let i = 0; i < leftArraySize; i++) {
    leftArr[i] = array[i + left];
  }
  let rightArr = [];
  for (let i = 0; i < rightArraySize; i++) {
    rightArr[i] = array[i + mid + 1];
  }

  let leftIndex = 0;
  let rightIndex = 0;
  let index = left;
  while (leftIndex < leftArraySize && rightIndex < rightArraySize) {
    if (leftArr[leftIndex] <= rightArr[rightIndex]) {
      array[index] = leftArr[leftIndex];
      leftIndex++;
    } else {
      array[index] = rightArr[rightIndex];
      rightIndex++;
      numInversions += leftArraySize - leftIndex;
    }
    index++;
  }

  while (leftIndex < leftArraySize) {
    array[index] = leftArr[leftIndex];
    leftIndex++;
    index++;
  }
  while (rightIndex < rightArraySize) {
    array[index] = rightArr[rightIndex];
    rightIndex++;
    index++;
  }
  return numInversions;
}

function countInversionsRec(array, left, right) {
  let numInversions = 0;
  if (left >= right) {
    return 0;
  }
  let mid = Math.floor((left + right) / 2);

  numInversions = countInversionsRec(array, left, mid);
  numInversions += countInversionsRec(array, mid + 1, right);
  numInversions += merge(array, left, mid, right);
  return numInversions;
}
