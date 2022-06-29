/*
 * Complete the 'stepPerms' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function climb(n, steps, ways) {
  let val = 0;
  for (let step of steps) {
    if (n - step === 0) {
      val++;
    } else if (n - step > 0) {
      if (!(step in ways)) {
        ways[n - step] = climb(n - step, steps, ways);
      }
      val += ways[n - step];
    }
  }
  return val;
}

function stepPerms(n) {
  let steps = [1, 2, 3];
  let ways = {};

  return climb(n, steps, ways);
}

console.log(stepPerms(3));
