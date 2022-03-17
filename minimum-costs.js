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

  let minimumCost = null;
  let prevCostsFriendMap = new Map();
  console.log(c);
  // (curPurchase + prevPurchase) x c[i]
  for (let i = 0; i < c.length; i++) {
    while (k >= i) {
      minimumCost += c[i];
      minimumCost = !minimumCost ? c[i] : Math.min(c[i], minimumCost);
      prevCostsFriendMap = incrementMapValue(prevCostsFriendMap, i);
      i++;
    }
    let size = prevCostsFriendMap.size;
    let end = size - 1;
    while (prevCostsFriendMap.get(end) && i < c.length) {
      let value = prevCostsFriendMap.get(end);
      let nextValue = c[i];
      if (end < 0) {
        end = size - 1;
        continue;
      }
      minimumCost += value + nextValue;

      end--;
      i++;
    }
    console.log(prevCostsFriendMap);
  }
}
