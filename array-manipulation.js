/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function arrayManipulationV4(n, queries) {
  // Write your code here
  let starts = new Map();
  let ends = new Map();
  for (let i = 1; i <= queries.length; i++) {
    let variableArray = queries[i - 1];
    let k = variableArray[2];
    if (k === 0) {
      continue;
    }
    let a = variableArray[0];
    starts.set(i, { index: a, value: k });
    let b = variableArray[1];
    ends.set(i, { index: b, value: k });
  }

  let startsTotal = Array.from(starts).reduce((acc, value) => {
    acc += value[1].index;
    return acc;
  }, 0);

  let endsTotal = Array.from(ends).reduce((acc, value) => {
    acc += value[1].index;
    return acc;
  }, 0);

  let middle = Math.floor(
    (startsTotal / starts.size + endsTotal / ends.size) / 2
  );
  console.log("middle", middle);
  let middleCountMap = new Map();
  let othersCountMap = new Map();
  for (let i = 1; i <= queries.length; i++) {
    let variableArray = queries[i - 1];
    let a = variableArray[0];
    let b = variableArray[1];
    let k = variableArray[2];
    if (k === 0) {
      continue;
    }
    if (middle >= a && middle <= b) {
      middleCountMap.set(i, { value: k });
    } else {
      othersCountMap.set(i, { value: k });
    }
  }

  let max = 0;
  console.log(middleCountMap.size, othersCountMap.size);
  if (middleCountMap.size >= othersCountMap.size) {
    console.log("using middle");
    for (let item of middleCountMap) {
      max += item[1].value;
    }
  } else {
    max = getMaxBrute(n, queries);
  }
  return max;
}

function getMaxBrute(n, queries) {
  console.log("getting max brute");
  let oneIndexedArrayCount = new Array(n + 1).fill(0, 0, n + 1);
  let max = null;

  for (let i = 1; i <= queries.length; i++) {
    let variableArray = queries[i - 1];
    let a = variableArray[0];
    let b = variableArray[1];
    let k = variableArray[2];
    if (k === 0) {
      continue;
    }
    for (let j = a; j <= b && j <= n; j++) {
      oneIndexedArrayCount[j] =
        oneIndexedArrayCount[j] === undefined ? k : oneIndexedArrayCount[j] + k;
      if (max === null) {
        max = oneIndexedArrayCount[j];
      }
      if (oneIndexedArrayCount[j] > max) {
        max = oneIndexedArrayCount[j];
      }
    }
  }
  return max;
}

console.log(
  "Should be 200",
  arrayManipulationV4(4, [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100],
  ])
);

console.log(
  "Should be 31",
  arrayManipulationV4(10, [
    [2, 6, 8],
    [3, 5, 7],
    [1, 8, 1],
    [5, 9, 15],
  ])
);

console.log(
  "Should be 8628",
  arrayManipulationV4(40, [
    [29, 40, 787],
    [9, 26, 219],
    [21, 31, 214],
    [8, 22, 719],
    [15, 23, 102],
    [11, 24, 83],
    [14, 22, 321],
    [5, 22, 300],
    [11, 30, 832],
    [5, 25, 29],
    [16, 24, 577],
    [3, 10, 905],
    [15, 22, 335],
    [29, 35, 254],
    [9, 20, 20],
    [33, 34, 351],
    [30, 38, 564],
    [11, 31, 969],
    [3, 32, 11],
    [29, 35, 267],
    [4, 24, 531],
    [1, 38, 892],
    [12, 18, 825],
    [25, 32, 99],
    [3, 39, 107],
    [12, 37, 131],
    [3, 26, 640],
    [8, 39, 483],
    [8, 11, 194],
    [12, 37, 502],
  ])
);

// console.log(
//   "Should be 2497169732",
//   arrayManipulationV4(10000000, require("./large-input-array-manipulation"))
// );
