const size = 42;

const visited = [];
const visitedGroup = [];

const graph = [
  [1, 2],
  [2, 3],
  [1, 3],
  [3, 4],
];

let path = [];

const depthFirstSearch = function depthFirstSearch(index, graph) {
  if (visitedGroup[index]) return;
  visitedGroup[index] = true;
  path.push(index);

  const neighbors = graph[index];
  for (let i = 0; i < neighbors.length - 1; i++) {
    const vertex = neighbors[i];
    if (!visited[vertex]) {
      depthFirstSearch(i, graph);
    }
  }
};

depthFirstSearch(3, graph);
console.log(path);
