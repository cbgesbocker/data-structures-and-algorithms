function fibonacci(n) {
  const fib = fibonacciRec(n, [0, 1], 1);
  return fib[n];
}

function fibonacciRec(n, arr, i) {
  if (i === n) return arr;
  arr[arr.length] = arr[i - 1] + arr[i];
  return fibonacciRec(n, arr, i + 1);
}
