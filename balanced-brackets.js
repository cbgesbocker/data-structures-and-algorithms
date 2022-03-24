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

function isClosingSymbol(val) {
  return rightCharTypes.indexOf(val) !== -1;
}

// {(([])[])[]}
function isBalanced(s) {
  let result = "NO";

  let scannedPairs = [];
  for (let i = 0; i < s.length - 1; i++) {
    let charCount = 0;
    let j = i + 1;
    while (j < s.length) {
      if (s[i] === s[j]) {
        charCount++;
      }
      if (isClosingSymbol(s[i])) {
        i++;
        j++;
        continue;
      }
      if (isMatchedPair(s, i, j)) {
        charCount--;
        if (charCount <= 0) {
          console.log("char count", s[i], s[j], charCount);
          scannedPairs.push(true);
        }
      }
      j++;
    }
    if (scannedPairs.length === s.length / 2) {
      result = "YES";
      break;
    }
    if (!isMatchedPair(s, i, j)) {
      result = "NO";
    } else {
      result = "YES";
    }
  }
  return result;
}

// console.log(isBalanced("{([])[]}"));
// console.log(isBalanced("{(([])[])[]}"));
// console.log(isBalanced("{(([])[])[]]}"));
console.log(isBalanced("{[(])}"));
// console.log(isBalanced("{[(])}"));
