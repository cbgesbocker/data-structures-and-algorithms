function countTriplets(arr, r) {
  let count = 0;
  let dict = {};
  let dictPairs = {};

  for (let v of arr.reverse()) {
    // if we have a key in the pairs dictionary
    // that is within the ratio * value
    // add the number of pairs at that index
    if (dictPairs[v * r]) {
      count += dictPairs[v * r];
    }
    // if we have a key in the dict
    // that is within ratio * value
    // add to dict pairs
    if (dict[v * r]) {
      dictPairs[v] = dictPairs[v] || 0;
      dictPairs[v] = dictPairs[v] + dict[v * r];
    }
    // set value = previous values at number + 1
    dict[v] = dict[v] || 0;
    dict[v] = dict[v] + 1;
  }
  return count;
}

console.log(countTriplets("1 3 9 9 27 81".split(" "), 3));

// console.log(
//   countTriplets(
//     "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1".split(
//       " "
//     ),
//     1
//   )
// );
