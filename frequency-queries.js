// Complete the freqQuery function below.

function incrementMapValue(map, key, increment, defaultValue = 0) {
  let value = map.get(key);
  if (value) {
    map.set(key, value + increment);
  } else {
    map.set(key, defaultValue);
  }
  return [map, value ? value + increment : defaultValue, value || defaultValue];
}

function freqQueryV2(queries) {
  // O(q) + O(n)
  let valueOccuranceMap = new Map();
  let occuranceValueMap = new Map();
  let result = [];

  for (let i = 0; i < queries.length; i++) {
    let operationCode = queries[i][0];
    let value = queries[i][1];
    switch (operationCode) {
      case 1:
        let [incrementedMap, incrementedValue] = incrementMapValue(
          valueOccuranceMap,
          value,
          1,
          1
        );
        valueOccuranceMap = incrementedMap;
        occuranceValueMap.set(incrementedValue, incrementedMap);
        break;
      case 2:
        let [decrementedMap, decrementedValue, originalValue] =
          incrementMapValue(valueOccuranceMap, value, -1);
        valueOccuranceMap = decrementedMap; // 2 -> 0
        if (decrementedValue <= 0) {
          valueOccuranceMap.delete(value);
        }
        occuranceValueMap.set(originalValue, valueOccuranceMap);
        break;
      case 3:
        const occurances = occuranceValueMap.get(value);
        if (!occurances) result.push(0);
        else {
          result = getOccuranceCountExact(occurances, value, result);
        }
        break;
    }
  }
  return result;
}

function getOccuranceCountExact(occurances, value, result) {
  let resultValue = 0;
  for (let [key, mapVal] of occurances) {
    if (mapVal === value) {
      resultValue = 1;
      break;
    }
  }
  result.push(resultValue);
  return result;
}
// Complete the freqQuery function below.
// function freqQuery(queries) {
//   // O(q) + O(n)
//   let array = [];
//   let valueOccurances = {};
//   let occuranceMap = new Map();
//   let result = [];

//   for (let i = 0; i < queries.length; i++) {
//     let operationCode = queries[i][0];
//     let value = queries[i][1];
//     let response = runOperation(
//       operationCode,
//       value,
//       valueOccurances,
//       occuranceMap
//     );

//     if (operationCode === 3) {
//       result.push(response ? 1 : 0);
//     } else {
//       valueOccurances = response.valueOccurances;
//       occuranceMap = response.occuranceMap;
//     }
//   }
//   return result;
// }

// function updateOccurances(
//   valueOccurances,
//   occuranceMap,
//   value,
//   operationNumber
// ) {
//   operationNumber = operationNumber || 1;
//   valueOccurances[value] = valueOccurances[value] || 0;
//   let occurances = valueOccurances[value];
//   valueOccurances[value] += occurances + operationNumber;
//   // remove [occurances - 1]: Map<value, [storedOccurances]>
//   // set [occurances]: Map<[value], [storedOccurances]>

//   let toUpdateAddMap =
//     occuranceMap.get(occurances + operationNumber) || new Map();
//   let toUpdateDeleteMap = occuranceMap.get(occurances) || new Map();

//   let oldOccurances = toUpdateDeleteMap.get(value);
//   if (oldOccurances && oldOccurances <= 0) {
//     console.log("deleting");
//     occuranceMap.delete(occurances);
//   } else {
//     let newValue = oldOccurances ? oldOccurances + operationNumber : 0;
//     toUpdateDeleteMap.set(value);
//   }

//   let newOccurances = toUpdateAddMap.get(value) || 0;
//   newOccurances++;
//   toUpdateAddMap.set(value, newOccurances);
//   occuranceMap.set(occurances + operationNumber, toUpdateAddMap);
//   return {
//     valueOccurances,
//     occuranceMap,
//   };
// }

// function runOperation(operationCode, value, valueOccurances, occuranceMap) {
//   let occurances = false;
//   let response;
//   switch (operationCode) {
//     case 1:
//       response = updateOccurances(valueOccurances, occuranceMap, value);
//       valueOccurances = response.valueOccurances;
//       break;
//     case 2:
//       response = updateOccurances(valueOccurances, occuranceMap, value, -1);
//       occuranceMap = response.occuranceMap;
//       break;
//     case 3:
//       occurances = occuranceMap.get(value);
//       console.log("value", value, occurances);
//       occurances = occurances ? occurances.size > 0 : occurances;
//       break;
//   }
//   return response || occurances;
// }

const response = freqQueryV2(
  require("./input/frequency-queries.5").slice(0, 250)
);
let expected = require("./input/frequency-queries.expected.5");
response.forEach((item, i) => {
  if (item !== expected[i]) {
    console.log("error at index", i);
    console.log("item", item);
    console.log("expected", expected[i]);
  }
});
