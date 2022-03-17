/*
 * Complete the 'luckBalance' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. 2D_INTEGER_ARRAY contests
 */

function luckBalance(k, contests) {
  // Write your code here
  contests.sort((a, b) => {
    const luckA = a[0];
    const luckB = b[0];
    const isImportantA = a[1] === 1;
    const isImportantB = b[1] === 1;
    if ((isImportantA && isImportantB) || (!isImportantA && !isImportantB)) {
      return luckB - luckA;
    }
    return isImportantA ? -1 : 1;
  });
  let luckCount = 0;
  let losses = 0;
  for (let i = 0; i < contests.length; i++) {
    while (contests[i][1] === 1 && k > 0) {
      luckCount += contests[i][0];
      k--;
      i++;
    }
    let outOfAttempts = k < 1;
    if (outOfAttempts) {
      while (contests[i] !== undefined && contests[i][1] === 1) {
        losses -= contests[i][0];
        i++;
      }
    }
    while (contests[i] !== undefined && contests[i][1] === 0) {
      luckCount += contests[i][0];
      i++;
    }
  }
  return luckCount + losses;
}
