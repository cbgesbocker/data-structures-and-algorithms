/**
 */
function getMedian(index, map) {
  // look for map[<key>] after counting the map[<values>] up to
  // !map[<values>] >= index
  let medianIndex = 0;
  let result;
  for (let i = 0; i <= 201; i++) {
    let frequency = 0;
    if (map[i]) {
      frequency += map[i];
    }
    medianIndex += frequency;
    if (medianIndex >= index) {
      result = i;
      break;
    }
  }
  return result;
}

function activityNotificationsV2(expenditure, d) {
  let map = {};
  let notifications = 0;

  for (let i in expenditure) {
    let expense = expenditure[i];

    if (i >= d) {
      let median = getMedian(d / 2, map);
      if (d % 2 === 0) {
        let computedMedian = median + getMedian(d / 2 + 1, map);
        if (expense >= computedMedian) {
          notifications++;
        }
      } else {
        if (expense >= median * 2) {
          notifications++;
        }
      }
    }

    // add counter of number of expenses
    if (map[expense] === undefined) {
      map[expense] = 1;
    } else {
      map[expense] += 1;
    }

    // if index is greater than D, subtract the
    // previous counter value from the map to remove it
    if (i >= d) {
      let previous = expenditure[i - d];
      map[previous]--;
    }
  }
  return notifications;
}

// console.log("Should be 2");
// console.log(activityNotificationsV2([2, 3, 4, 2, 3, 6, 8, 4, 5], 5));
console.log("Should be 1");
console.log(activityNotificationsV2([10, 20, 30, 40, 50], 3));
console.log("Should be 770");
console.log(
  activityNotificationsV2(require("./input/activity-notification.2"), 9999)
);
