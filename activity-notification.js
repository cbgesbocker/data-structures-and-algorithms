function getMedianValue(arr) {
  let middle = (arr.length - 1) / 2;

  if (arr[middle] !== undefined) {
    return arr[middle];
  }

  let leftLook =
    arr[middle] === undefined
      ? arr[Math.floor((arr.length - 1) / 2)]
      : arr[middle];

  let rightLook =
    arr[middle] === undefined
      ? arr[Math.ceil((arr.length - 1) / 2)]
      : arr[middle];

  let found = null;
  while (arr[leftLook] === undefined || arr[rightLook] === undefined) {
    let l = arr[leftLook];
    let r = arr[rightLook];

    if (l !== undefined && r !== undefined) {
      found = (l + r) / 2;
    }
    leftLook--;
    rightLook++;
  }
  return found;
}

function activityNotifications(expenditure, d) {
  // Write your code here
  // 2x median
  let counter = 0;
  for (let i = 0; i <= expenditure.length; i++) {
    let expense = expenditure[i];
    let daysTrailedBack = 0;

    let trailingExpenses = [];

    while (i >= d && daysTrailedBack < d) {
      let value = expenditure[i - daysTrailedBack];
      trailingExpenses[value] = value;
      daysTrailedBack++;
    }
    if (
      trailingExpenses.length > 0 &&
      getMedianValue(trailingExpenses) * 2 > expense
    ) {
      counter++;
    }
  }
  return counter;
}

console.log(
  "Should be 2",
  activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5)
);
