//  \    /
//   \  / 
//    \/
// search left then right by looping through children
// and searching down their children first recursively
// until we reach an edge.  Then bubble back down to root and continue 
// with previous executions.
function depthFirstSearch(source, destination, visited = new Map(), path = []) {
  if (visited.get(source.id)) {
    return { found: false };
  }
  visited.set(source.id, true);
  path.push(source);
  if (source.id === destination.id) {
    return { found: true, path };
  }
  for (const node of source.adjacent || []) {
    if (depthFirstSearch(node, destination, visited, path).found) {
      return { found: true, path };
    }
  }
  return { found: false };
}

const node1 = {
  id: 1,
  adjacent: []
}

const nodes = [
  { adjacent: [{ id: 2, adjacent: [{3}] }], id: 1 },
  { adjacent: [{ id: 3, adjacent: [] }], id: 2 },
  { adjacent: [{ id: 4, adjacent: [5] }], id: 3 },
  { adjacent: [{ id: 5, adjacent: [6] }], id: 4 },
  { adjacent: [{ id: 6, adjacent: [] }], id: 5 },
  { adjacent: [], id: 6 },
];
console.log(JSON.stringify(depthFirstSearch(nodes[0], 6)));
