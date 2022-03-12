const jumpingOnClouds = require("../jumping-on-clouds");

describe("jumping-on-clouds.js", () => {
  test("output should be 6", () => {
    expect(jumpingOnClouds([0, 0, 1, 0, 0, 0, 0, 1, 0, 0])).toEqual(6);
  });
  test("output should be 3", () => {
    expect(jumpingOnClouds([0, 0, 0, 1, 0, 0])).toEqual(3);
  });
  test("output should be 4", () => {
    expect(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])).toEqual(4);
  });
  test("output should be 28", () => {
    expect(
      jumpingOnClouds([
        0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0,
        1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1,
        0, 0,
      ])
    ).toEqual(28);
  });
  test("output should be 53", () => {
    expect(
      jumpingOnClouds([
        0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1,
        0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1,
        0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0,
        1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0,
        1, 0, 0, 0,
      ])
    ).toEqual(53);
  });
});
