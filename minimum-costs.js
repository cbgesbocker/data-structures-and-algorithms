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

  for (let i = 0; i < c.length; i++) {
    // for each person and allowed purchase
    // purchase the most expensive flower
    while (numUsers > 0 && i < c.length) {
      userNumPurchasesMap = incrementMapValue(userNumPurchasesMap, i);
      numUsers--;
      i++;
    }

    // all users have purchased the most expensive flowers first
    // now we need to purchase the rest in reverse order of the map
    let end = userNumPurchasesMap.size - 1;
    let currentPurchaseNumber = 1;
    while (end >= 0 && i < c.length) {
      c[i] = c[i] * (1 + currentPurchaseNumber);
      end--;
      i++;
      if (end < 0 && i < c.length) {
        end = userNumPurchasesMap.size - 1;
        currentPurchaseNumber++;
        continue;
      }
    }
  }
  console.log(c);
  return getSum(c);
}

console.log("Should be 15", getMinimumCost(2, [2, 5, 6]));
console.log("Should be 29", getMinimumCost(3, [1, 3, 5, 7, 9]));
