// How to add remove node from sorted linked list

// sorted ascending or descending?
// single or doubly linked list?
// what is the data values, int, double, floats?
// can we have repeated data items
class SortedLinkedList {
  headNode = null;

  constructor(headNode = null) {
    this.headNode = headNode;
  }

  // ( 1 ) - ( 2 ) - ( 3 ) - ( 4 )
  insert(data) {
    let node = new Node(data);
    let current = this.headNode;
    let previous = null;
    while (current !== null && data > current.data) {
      previous = current;
      current = current.next;
    }
    // if we never set previous
    if (previous == null) {
      this.headNode = node;
    } else {
      previous.next = node;
    }
    node.next = current;
  }

  remove() {
    let head = this.headNode;
    if (head === null) {
      throw new Error("No nodes in linked list");
    }
    this.headNode = head.next;
    return this.headNode;
  }

  displayList() {
    let current = this.headNode;
    console.log(`
Linked List Output:

`);
    while (current !== null) {
      current.displayData();
      current = current.next;
    }
    console.log("");
  }
}

class Node {
  data;
  next;
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  displayData() {
    console.log(this.i + " ");
  }
}

let list = new SortedLinkedList();
[1, 4, 3, 2, 5, 4, 3, 1, 12, 3, 12, 4, 5, 6, 6, 7, 7].forEach((element) => {
  list.insert(element);
});

list.remove();
list.remove();
list.remove();
list.remove();
list.remove();
list.remove();
list.remove();
list.remove();
console.log(JSON.stringify(list.headNode));
