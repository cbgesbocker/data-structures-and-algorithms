/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 *
 *  https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
 */

function countingValleys(steps, path) {
  if (2 > steps || steps > Math.pow(10, 6)) {
    console.log(steps, path);
    throw new Error("out of range");
  }

  let valleysTraversed = 0;
  let level = 0;
  while (steps > 1) {
    const direction = path[steps - 1];
    switch (direction) {
      case "U":
        if (level === 0) valleysTraversed++;
        level++;

        break;
      case "D":
        level--;
        break;
      default:
        throw new Error('path[i] not "U" or "D"');
        break;
    }
    steps--;
  }
  return valleysTraversed;
}

module.exports = valleysTraversed;
