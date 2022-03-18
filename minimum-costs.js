function getSum(arr) {
  return arr.reduce((acc, cur) => {
    acc += cur;
    return acc;
  }, 0);
}

// Complete the getMinimumCost function below.

// O ( log(N) + 2N )
function getMinimumCost(k, c) {
  if (k === c.length) {
    return getSum(c);
  }

  c.sort((a, b) => b - a);

  let numUsers = k;
  let usersList = [];

  for (let i = 0; i < c.length; i++) {
    // for each person and allowed purchase
    // purchase the most expensive flower
    while (numUsers > 0 && i < c.length) {
      usersList[i] = i;
      numUsers--;
      i++;
    }

    // all users have purchased the most expensive flowers first
    // now we need to purchase the rest in reverse order of the map
    let end = usersList.length - 1;
    let currentPurchaseNumber = 1;
    while (end >= 0 && i < c.length) {
      c[i] = c[i] * (1 + currentPurchaseNumber);
      end--;
      i++;
      if (end < 0 && i < c.length) {
        end = usersList.length - 1;
        currentPurchaseNumber++;
        continue;
      }
    }
  }
  return getSum(c);
}
