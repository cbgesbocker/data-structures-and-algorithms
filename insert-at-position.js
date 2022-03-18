class Node {
  constructor(node, data) {
    this.next = node;
    this.data = data;
  }
}

function insertNodeAtPosition(llist, data, position) {
  // Write your code here
  let prevNode;
  let node = llist;
  let curPosition = 0;
  while (curPosition <= position) {
    let nextNode = node.next;
    if (curPosition === position) {
      let nodeInstance = new Node(node, data);
      prevNode.next = nodeInstance;
      node = nodeInstance;
    } else {
      prevNode = node;
      node = nextNode;
    }
    curPosition++;
  }
  return llist;
}
