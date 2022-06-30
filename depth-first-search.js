//
//
//
function depthFirstSearch(source, destination, visited = new Map()) {
  if (visited.get(source.id)) {
    return false;
  }
  visited.set(source.id, true);
  if (source.id === destination.id) {
    return true;
  }
  for (const node of source.adjacent || []) {
    if (depthFirstSearch(node, destination, visited)) {
      return true;
    }
  }
  return false;
}

class Node {
  constructor(id, adjacent) {
    this.adjacent = adjacent;
    this.id = id;
  }
}

const nodes = [
  { adjacent: [{ id: 6, adjacent: [1] }], id: 1 },
  { adjacent: [{ id: 6, adjacent: [2] }], id: 2 },
  { adjacent: [{ id: 5, adjacent: [6] }], id: 3 },
  { adjacent: [{ id: 5, adjacent: [6] }], id: 4 },
  { adjacent: [{ id: 2, adjacent: [6] }], id: 5 },
  { adjacent: [{ id: 1, adjacent: [6] }], id: 6 },
];
console.log(depthFirstSearch(nodes[0], 6));
