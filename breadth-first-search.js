/*
 * Complete the 'bfs' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 *  3. 2D_INTEGER_ARRAY edges
 *  4. INTEGER s
 */

function bfs(n, m, edges, s) {
  // Write your code here
  let isVisited = [];

  let nextToVisit = edges[0];
  while (nextToVisit.length > 0) {
    let nodes = nextToVisit.pop();
    if (nodes.includes(n)) {
      return true;
    }
    nodes.forEach((node) => {
      isVisited[node] = true;
    });
    for (let node of nodes) {
      nextToVisit.push(node);
    }
  }
  return false;
}
