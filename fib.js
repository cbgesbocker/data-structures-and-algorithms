//
// n = numbers in sequence
// n = 6
// 0, 1, 1, 2, 3, 5
// output -> 5
function fib(n, map = {}) {
  if (n === 0) {
    map[n] = n;
  } else if (n < 2) {
    map[n] = 1;
  }
  if (!(n in map)) {
    map[n] = fib(n - 1, map) + fib(n - 2, map);
  }
  return map[n];
}

console.log(fib(49));
