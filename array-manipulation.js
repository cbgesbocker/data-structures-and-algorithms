/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 * https://www.hackerrank.com/challenges/crush/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
 */

function arrayManipulationV5(n, queries) {
  // a b k
  // 1 5 3
  // 4 8 7
  // 6 9 1
  let values = new Array(n + 2).fill(0, 0, n + 2);

  for (let i = 0; i < queries.length; i++) {
    let variableArray = queries[i];
    let a = variableArray[0];
    let b = variableArray[1];
    let k = variableArray[2];
    values[a] = values[a] += k;
    values[b + 1] -= k;
  }

  let max = 0;
  let sum = 0;

  for (let j = 0; j < values.length; j++) {
    sum += values[j];
    max = Math.max(sum, max);
  }
  return max;
}

console.log(
  "Should be 200",
  arrayManipulationV5(5, [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100],
  ])
);

console.log(
  "Should be 31",
  arrayManipulationV5(10, [
    [2, 6, 8],
    [3, 5, 7],
    [1, 8, 1],
    [5, 9, 15],
  ])
);

console.log(
  "Should be 8628",
  arrayManipulationV5(40, [
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

console.log(
  "Should be 2497169732",
  arrayManipulationV5(
    10000000,
    require("./input/large-input-array-manipulation")
  )
);
