/*
 * Complete the 'maximumSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. LONG_INTEGER_ARRAY a
 *  2. LONG_INTEGER m
 */
function maximumSum(a, m) {
  // get subarray
  let matrix = [];
  let maxMod = -Infinity;

  let j = 0;
  let max = a.length;
  let minMod = Infinity;
  while (j < max) {
    let i = j;
    while (i < max) {
      maxMod = Math.max(getSum(a.slice(i, max)) % m, maxMod);
      i++;
    }
    max--;
  }
  return maxMod;
}
function getSum(arr) {
  return arr.reduce((acc, cur) => {
    acc += cur;
    return acc;
  }, 0);
}

function maximumSumV2(a, m) {
  let done = [];
  let max = 0;
  let L = [];
  for (let i in a) {
    L[i + 1] = L[i - 1] + a[i - 1];
  }

  for (let i of a) {
    let val = a[i];
    let x = val % m;
    let j = done.indexOf(x);
    if (j < i) {
      max = Math.max(max, (L[i] - done[j]) % m);
    }
    done[j] = x;
  }
  return max;
}
function getSum(arr) {
  return arr.reduce((acc, cur) => {
    acc += cur;
    return acc;
  }, 0);
}
