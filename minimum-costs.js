function getSum(arr) {
  return arr.reduce((acc, cur) => {
    acc += cur;
    return acc;
  }, 0);
}

function incrementMapValue(map, key) {
  let val = map.get(key);
  if (val) {
    map.set(key, val + 1);
  } else {
    map.set(key, 1);
  }
  return map;
}
// Complete the getMinimumCost function below.
function getMinimumCost(k, c) {
  if (k === c.length) {
    return getSum(c);
  }

  c.sort((a, b) => b - a);

  let numUsers = k;
  let userNumPurchasesMap = new Map();
  let minCost = 0;

  for (let i = 0; i < c.length; i++) {
    // for each person and allowed purchase
    // purchase the most expensive flower
    while (numUsers > 0 && i < c.length) {
      userNumPurchasesMap = incrementMapValue(userNumPurchasesMap, i);
      minCost += c[i];
      numUsers--;
      i++;
    }

    // all users have purchased the most expensive flowers first
    // now we need to purchase the rest in reverse order of the map
    let end = userNumPurchasesMap.size - 1;
    let currentPurchaseNumber = 1;
    while (end >= 0 && i < c.length) {
      let value = c[i];
      minCost += (1 + currentPurchaseNumber) * value;
      end--;
      i++;
      if (end < 0 && i < c.length) {
        end = userNumPurchasesMap.size - 1;
        currentPurchaseNumber++;
        continue;
      }
    }
  }
  return minCost;
}

console.log("Should be 15", getMinimumCost(2, [2, 5, 6]));
console.log("Should be 29", getMinimumCost(3, [1, 3, 5, 7, 9]));
console.log(
  "Should be 163578911. Off by",
  163578911 -
    +getMinimumCost(
      3,
      [
        39022, 42645, 68826, 80038, 99010, 43924, 24063, 1599, 87447, 56875,
        72992, 98098, 13224, 48818, 503, 72176, 25188, 2845, 2371, 28149, 3093,
        89766, 76894, 33722, 53327, 95985, 92744, 94148, 2424, 68445, 31285,
        71617, 51260, 60826, 77991, 95010, 21175, 66502, 64299, 26217, 78902,
        93242, 39074, 43343, 35026, 46356, 66880, 30578, 81577, 550800,
      ]
    )
);
