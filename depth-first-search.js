//
//
//
function depthFirstSearch(source, destination, graph, visited = new Map()) {
  if (visited.get(source)) {
    return false;
  }
  visited.set(source, true);
  if (source === destination) {
    return true;
  }
  for (const node of source.adjacent || []) {
    if (depthFirstSearch(node, destination, visited)) {
      return true;
    }
  }
  console.log(visited);
  return false;
}

const nodes = [
  { adjacent: [{ id: 3, adjacent: [6] }], id: 1 },
  { adjacent: [{ id: 4, adjacent: [6] }], id: 2 },
  { adjacent: [{ id: 5, adjacent: [6] }], id: 3 },
  { adjacent: [{ id: 6, adjacent: [6] }], id: 4 },
  { adjacent: [{ id: 2, adjacent: [6] }], id: 5 },
  { adjacent: [{ id: 1, adjacent: [6] }], id: 6 },
];
console.log(depthFirstSearch(nodes[0], 6, nodes));
