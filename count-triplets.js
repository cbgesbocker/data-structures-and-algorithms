/**
 * You are given an array and you need to find number of tripets of
 * indices such that the elements at those indices are in geometric
 * progression for a given common ratio and .
 * @param {*} arr
 * @param {*} r
 */

// function countTriplets(arr, r) {
//   // O(n^2) loop over array -> inner loop -> if GP -> counter++
//   let tripletCount = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let initialValue = arr[i];
//     let indexValue = arr[i];
//     let isTriplet = [];
//     for (let j = i + 1; j < arr.length; j++) {
//       let compareIndexValue = arr[j];
//       const isRatio = compareIndexValue / indexValue === r;
//       if (!isRatio) {
//         console.log("not ratio", compareIndexValue, indexValue);
//         continue;
//       } else {
//         console.log("is ratio", compareIndexValue, indexValue);
//         isTriplet.push(true);
//         indexValue = compareIndexValue;
//       }
//     }
//     console.log(isTriplet);
//     if (isTriplet.length === 3) {
//       tripletCount++;
//     }
//   }
//   return tripletCount;
// }
function countTriplets(arr, r) {
  // O(n^2) loop over array -> inner loop -> if GP -> counter++
  let map = new Map();
  let ratioCount = 0;

  for (let i = 0; i < arr.length; i++) {
    let j = i;
    while (j < arr.length) {
      let value = arr[i];
      let nextValue = arr[j + 1];
      ratioCount += isRatio(value, nextValue, r) ? 1 : 0;
      j++;
    }
    console.log(ratioCount);
    if (ratioCount >= 3) {
      const mapVal = map.get(i);
      if (mapVal) {
        map.set(i, mapVal + 1);
      } else {
        map.set(i, 1);
      }
    }
  }
  console.log(map);
  return Array.from(map).reduce((acc, val) => {
    acc += val[1];
    return acc;
  }, 0);
}

function isRatio(value, nextVal, ratio) {
  return nextVal / ratio === value;
}

console.log("Should be 2", countTriplets([1, 2, 2, 4], 2));
