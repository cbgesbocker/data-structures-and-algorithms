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

function NodeFactory(id, adjacent) {
  return new Node(
    id,
    adjacent.map((val) => new Node(val, []))
  );
}

const nodes = [
  new Node(1, [NodeFactory(2, [3, 4, 5, 6])]),
  new Node(6, [NodeFactory(5, [3, 4])]),
  new Node(10, [NodeFactory(2, [3, 4, 5])]),
];
console.log(depthFirstSearch(nodes[0], 6));
