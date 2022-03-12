const hourglassSum = require("../hour-glass-sum");
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

describe("hour-glass-sum.js", () => {
  test("Should be 19", () => {
    expect(hourglassSum(arr)).toEqual(19);
  });
  test("Should be 28", () => {
    expect(hourglassSum(arr2)).toEqual(28);
  });
  test("Should be 0", () => {
    expect(hourglassSum(arr3)).toEqual(0);
  });
});
