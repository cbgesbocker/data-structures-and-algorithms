/*
 * Complete the 'maximumToys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY prices
 *  2. INTEGER k
 */

function maximumToys(prices, k) {
  // Write your code here
  prices.sort((a, b) => {
    if (a === b) return 0;
    if (a > b) return 1;
    if (a < b) return -1;
  });
  let totalMoney = k;
  let i = 0;
  let numToys = 0;
  while (totalMoney > 0 && i < prices.length) {
    if (totalMoney >= prices[i]) {
      totalMoney -= prices[i];
      numToys++;
    } else {
      break;
    }
    i++;
  }
  return numToys;
}
