const repeatedString = require("../repeated-string");

describe("repeated-string.js", () => {
  test("Should be 588525: ", () =>
    expect(repeatedString("aab", 882787)).toEqual(588525));

  test("Should be 51574523448: ", () =>
    expect(
      repeatedString(
        "kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm",
        736778906400
      )
    ).toEqual(51574523448));

  test("Should be 2: ", () => expect(repeatedString("ababa", 3)).toEqual(2));
});
