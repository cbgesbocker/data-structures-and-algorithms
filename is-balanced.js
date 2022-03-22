/*
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

let leftCharTypes = ["{", "[", "("];
let rightCharTypes = ["}", "]", ")"];

function isMatchedPair(str, indexOne, indexTwo) {
  let leftValIndex = leftCharTypes.indexOf(str[indexOne]);
  let rightValIndex = rightCharTypes.indexOf(str[indexTwo]);

  if (leftValIndex === -1 || rightValIndex === -1) {
    return false;
  }
  return leftValIndex === rightValIndex;
}

function substringMatchedPairRec(arr, start = 0, finalResult) {
  if (arr.length === 0) {
    return finalResult;
  }
  let result = isMatchedPair(arr, start);
  if (result) {
    return substringMatchedPairRec(
      arr.slice(start + 1, arr.length - 1),
      start + 1,
      result
    );
  }
  return result;
}

function isBalanced(s) {
  let tempArr = [];
  let result = "NO";

  let arr = s.split("");
  let shouldBreak = false;
  while (arr.length) {
    let middleLeft = Math.floor((arr.length - 1) / 2);
    let middleRight = middleLeft + 1;
    if (isMatchedPair(s, middleLeft, middleRight)) {
      tempArr.push(arr.splice(middleLeft, 2));
      result = "YES";
    }
    if (rightCharTypes.includes(arr[middleRight])) {
      while (
        !isMatchedPair(s, middleLeft - 1, middleRight) &&
        middleLeft >= 0
      ) {
        middleLeft--;
      }
      if (middleLeft < 0) {
        // reached end of left
        result = "NO";
        shouldBreak = true;
        break;
      } else {
        tempArr.push(arr.splice(middleLeft, 1));
        tempArr.push(arr.splice(middleRight, 1));
      }
    } else {
      result = "NO";
    }
    if (shouldBreak) {
      break;
    }
  }
  console.log("temp arr", tempArr);
  return result;
}
