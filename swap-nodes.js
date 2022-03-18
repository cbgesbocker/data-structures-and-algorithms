class Tree {
  constructor(leftNode = null, rightNode = null) {
    this.index = 1;
    this.leftNode = leftNode;
    this.rightNode = rightNode;
  }

  setLeftNode(node) {
    this.leftNode = node;
  }

  setRightNode(node) {
    this.rightNode = node;
  }

  swap(index, indexToSwap) {
    let node = this.getNode(index);
    let nodeSwap = this.getNode(indexToSwap);
  }

  setNode(index, node) {
    node = node || this;
    if (this.leftNode.index === index) {
      this.leftNode = node;
    }
    if (this.rightNode.index === index) {
      this.rightNode = node;
    }
  }

  searchLeft(node, index) {
    node = node || this;
    while (!node.leftNode.isLeaf() && node.leftNode.index !== index) {
      node.node = node.leftNode;
    }
    if (node.index === index) {
      return node;
    }
    return node;
  }

  searchRight(node, index) {
    node = node || this;
    node.isVisited = true;
    if (node) {
      let lnode = this.searchLeft(node, index);
      if (index === lnode.index) {
        lnode.isVisited = true;
        return lnode;
      }
    }
    while (!node.rightNode.isLeaf() && node.rightNode.index !== index) {
      node.isVisited = true;
      node = node.rightNode;
    }
    if (node.index === index) {
      node.isVisited = true;
      return node;
    }
    return node;
  }

  getNode(index) {
    this.isVisited = true;
    if (this.leftNode.index === index) {
      this.leftNode.isVisited = true;
      return this.leftNode;
    }
    if (this.rightNode.index === index) {
      this.rightNode.isVisited = true;
      return this.rightNode;
    }
    let node = this.searchLeft(this, index);
    if (node.index === this.index) {
      node = this.searchRight(this, index);
    }
    return node;
  }
}
class Node {
  constructor(data, index, parent = null, leftNode = null, rightNode = null) {
    this.parent = parent;
    this.data = data;
    this.index = index;
    this.isVisited = false;
    this.leftNode = leftNode;
    this.rightNode = rightNode;
  }

  isLeaf() {
    return (
      this.data === -1 || (this.leftNode === null && this.rightNode === null)
    );
  }

  isSubTree() {
    return this.leftNode !== null && this.rightNode !== null;
  }
}

function swapNodes(indexes, queries) {
  // Write your code here
  // indexes [ [ 2, 3 ], [ -1, -1 ], [ -1, -1 ] ] queries [ 1, 1 ]

  let tree = buildTree(indexes);
  let nodeOne = tree.getNode(queries[0] + 3);
  let nodeTwo = tree.getNode(queries[0] + 2);
  console.log(nodeOne);
}

function buildTree(indexes) {
  let tree = new Tree(1);
  // add left nodes

  let i = 0;
  let prevLeftNode = null;
  let prevRightNode = null;
  let parent = null;
  while (indexes[i] !== undefined) {
    let leftNodeIndex = i + 2;
    let rightNodeIndex = i + 3;
    let leftNodeValue = indexes[i][0];
    let rightNodeValue = indexes[i][1];
    let lnode = new Node(leftNodeValue, leftNodeIndex, parent || tree);
    if (!prevLeftNode) {
      prevLeftNode = lnode;
      tree.setLeftNode(lnode);
    } else {
      parent = prevLeftNode;
      prevLeftNode.leftNode = lnode;
    }
    let rnode = new Node(rightNodeValue, rightNodeIndex, parent || tree);
    if (!prevRightNode) {
      prevRightNode = rnode;
      tree.setRightNode(rnode);
    } else {
      parent = prevRightNode;
      prevRightNode.rightNode = rnode;
    }
    i++;
  }
  return tree;
}

console.log(
  swapNodes(
    [
      [2, 3],
      [-1, -1],
      [-1, -1],
    ],
    [1, 1]
  )
);
