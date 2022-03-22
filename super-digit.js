/*
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

function superDigit(n, k) {
  if (n.length === 1 && k === 1) {
    return n;
  }
  if (k === 1) {
    let total = 0;
    for (let i of n.split("")) {
      total += +i;
    }
    return total;
  }

  if (k % 100 === 0) {
    return +superDigitRec(n);
  }
  let finalStr = "";
  let i = 0;
  while (i < k) {
    finalStr += superDigitRec(n);
    i++;
  }

  return +superDigitRec(finalStr);
}

function superDigitRec(n) {
  if (n.length === 1) {
    return n;
  }
  let total = 0;
  for (let i of String(n)) {
    total += +i;
  }
  return superDigitRec(String(total));
}
