const repeatedString = require("../repeated-string");

describe("repeated-string.js", () => {
  test("Should be 588525: ", () => expect(repeatedString("aab", 882787)).toEqual(588525);

  console.log(
    "Should be 51574523448: ",
    repeatedString(
      "kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm",
      736778906400
    )
  );
  console.log("Should be 2: ", repeatedString("ababa", 3));
});
