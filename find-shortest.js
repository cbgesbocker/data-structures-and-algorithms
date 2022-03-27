// Complete the findShortest function below.

/*
 * For the unweighted graph, <name>:
 *
 * 1. The number of nodes is <name>Nodes.
 * 2. The number of edges is <name>Edges.
 * 3. An edge exists between <name>From[i] to <name>To[i].
 *
 */

function findShortest(graphNodes, graphFrom, graphTo, ids, val) {
  // solve here
  let map = {};
  for (let i = 1; i < graphNodes + 1; i++) {
    map[i] = map[i] || { nodes: [], color: "" };
    let index = i - 1;
    if (graphFrom[index] !== undefined && graphTo[index] !== undefined) {
      if (i !== graphTo[i - 1]) {
        map[i].nodes.push(graphTo[i - 1]);
      }
      if (i !== graphFrom[i - 1]) {
        map[i].nodes.push(graphFrom[i - 1]);
      }
    }
    map[i].color = ids[i - 1];
  }
  const distance = getShortestPath(map, val);
  return distance === Infinity ? -1 : distance;
}

function getShortestPath(mapNodes, color) {
  let distance = Infinity;
  let isVisited = {};
  let rootVisited = {};
  for (let node in mapNodes) {
    isVisited[node] = { [node]: true };
    rootVisited[node] = true;
    let foundColor = false;
    let mapNode = mapNodes[node];
    if (mapNode.color === color) {
      let innerDistance = 0;
      let queue = mapNode.nodes;
      while (queue.length > 0) {
        let qnode = queue.pop();
        let qmapNode = mapNodes[qnode];
        if (isVisited[node][qnode] || rootVisited[qnode]) {
          continue;
        }
        isVisited[node][qnode] = true;
        innerDistance++;
        if (qmapNode.color === color) {
          foundColor = true;
          break;
        }
        queue.push(...qmapNode.nodes);
      }
      if (foundColor) {
        distance = Math.min(distance, innerDistance);
      }
    }
  }
  return distance;
}

console.log(
  "should be 3",
  findShortest(5, [1, 1, 2, 3], [2, 3, 4, 5], [1, 2, 3, 3, 2], 2)
);
