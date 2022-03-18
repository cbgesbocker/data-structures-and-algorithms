/*
 * Complete the 'whatFlavors' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY cost
 *  2. INTEGER money
 */

function whatFlavors(cost, money) {
  // Write your code here
  let purchases = [];
  for (let i = 0; i < cost.length; i++) {
    let leftVal = cost[i];
    let shouldBreak = false;
    for (let k = i + 1; k < cost.length; k++) {
      let rightVal = cost[k];
      if (leftVal + rightVal === money) {
        purchases = [i + 1, k + 1];
        shouldBreak = true;
        break;
      }
    }
    if (shouldBreak) {
      break;
    }
  }
  console.log(...purchases);
}
