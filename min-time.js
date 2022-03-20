// Complete the minTime function below.
function minTime(machines, goal) {
  let count = 0;
  let d = 0;
  let map = {};

  // store the count of the occurances of each machine output frequency
  for (let val of machines) {
    map[val] = map[val] ? map[val] + 1 : 1;
  }

  // until we reach our goal
  while (count < goal) {
    d++;

    // walk up to days and count
    // number of divisible points by days
    let i = 0;
    while (i < machines.length) {
      if (d % machines[i] === 0) {
        // 6 / 2 = 3 -> 1
        // 6 / 3 = 2 -> 1
        count += map[machines[i]];
      }
      i++;
    }
  }
  return d;
}

function minTimeV2(machines, goal) {
  let smallest = Infinity;
  let largest = -Infinity;

  for (const machine of machines) {
    smallest = machine < smallest ? machine : smallest;
    largest = machine > largest ? machine : largest;
  }

  const minRate = Math.ceil(goal / machines.length);
  let minDays = minRate * smallest;
  let maxDays = minRate * largest;

  while (minDays < maxDays) {
    const midDays = Math.floor((minDays + maxDays) / 2);
    let items = 0;
    for (let machine of machines) {
      items += Math.floor(midDays / machine);
    }
    if (items < goal) {
      minDays = midDays + 1;
    } else {
      maxDays = midDays;
    }
  }
  return minDays;
}

console.log(minTimeV2([2, 3], 5));
