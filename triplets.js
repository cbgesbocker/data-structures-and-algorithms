function sortedUniqueValues(arr) {
  arr.sort((a, b) => a - b);
  let uniqueValues = {};
  return arr.reduce((acc, val) => {
    if (val in uniqueValues) {
      return acc;
    }
    uniqueValues[val] = 1;
    acc.push(val);
    return acc;
  }, []);
}

// Complete the triplets function below.
function triplets(a, b, c) {
  a = sortedUniqueValues(a);
  b = sortedUniqueValues(b);
  c = sortedUniqueValues(c);

  let i = 0;
  let j = 0;
  let k = 0;
  let result = 0;

  while (i < b.length) {
    while (a[j] <= b[i] && j < a.length) {
      j++;
    }
    while (c[k] <= b[i] && k < c.length) {
      k++;
    }
    result += j * k;
    i++;
  }
  return result;
}
