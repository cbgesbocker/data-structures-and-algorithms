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

//
function bfs(n, m, edges, s) {
  let visited = [];

  let queue = [edges[0]];

  while (queue.length) {
    let nodes = queue.pop();
    if (nodes.includes(n)) {
      return true;
    }
    nodes.forEach((n) => {
      visited[n] = true;
      queue.push(n);
    });
  }
}
