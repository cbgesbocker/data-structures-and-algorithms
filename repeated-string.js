/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 * https://www.hackerrank.com/challenges/repeated-string/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
 */

function repeatedString(s, n) {
  // Write your code here
  let sampleString = s;
  let iterationsRequired = +n;

  if (sampleString.length < 1 || sampleString.length > 100) {
    throw new Error("String not in range");
  }

  if (n > Math.pow(10, 12) || n < 1) {
    throw new Error("Out of range");
  }

  if (s.length === 1 && s[0] === "a") {
    return iterationsRequired;
  }

  if (s.length === 1 && s[0] !== "a") {
    return 0;
  }

  // walk through the string, count 'a's
  // and reset string index when reached the end

  // "kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm"
  // 736778906400

  let splitString = sampleString.split("");
  let splitStringLenght = splitString.length;
  let numberAsInStr = +splitString.filter((str) => str === "a").length;
  let iterated = 0;

  if (numberAsInStr === 0) {
    return 0;
  }

  if (iterationsRequired < splitStringLenght) {
    return splitString.filter((str, i) => {
      return i < iterationsRequired && str === "a";
    }).length;
  }

  // number of full a blocks in iteration list
  let fullABlocksFound = Math.floor(iterationsRequired / splitStringLenght);

  // base A's found
  let foundA = fullABlocksFound * numberAsInStr;

  iterationsRequired =
    iterationsRequired - fullABlocksFound * splitStringLenght;

  while (iterationsRequired > iterated) {
    foundA += numberAsInStr;
    iterated += splitStringLenght;
    let walkBackwards = iterated - iterationsRequired;
    while (walkBackwards > 0) {
      if (splitString[splitStringLenght - walkBackwards] === "a") {
        foundA--;
      }
      walkBackwards--;
    }
  }

  let forwardIndex = 0;
  let stringIndexPointer = 0;

  // slow solution
  //   while (forwardIndex < iterationsRequired) {
  //     // advance to first 'a'
  //     while (
  //       sampleString[stringIndexPointer] !== "a" &&
  //       sampleString[stringIndexPointer] !== undefined &&
  //       forwardIndex < iterationsRequired
  //     ) {
  //       stringIndexPointer++;
  //       forwardIndex++;
  //     }
  //     // while we have 'a', up count
  //     while (
  //       sampleString[stringIndexPointer] === "a" &&
  //       forwardIndex < iterationsRequired
  //     ) {
  //       foundA++;
  //       stringIndexPointer++;
  //       forwardIndex++;
  //     }

  //     if (sampleString[stringIndexPointer] === undefined) {
  //       stringIndexPointer = 0;
  //     }
  return foundA;
}
console.log(repeatedString("x", 970770));
console.log("Should be 588525: ", repeatedString("aab", 882787));
console.log(
  "Should be 51574523448: ",
  repeatedString(
    "kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm",
    736778906400
  )
);
console.log("Should be 2: ", repeatedString("ababa", 3));

module.exports = repeatedString;
