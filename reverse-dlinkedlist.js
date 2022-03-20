/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */

function reverse(llist) {
  let node = llist;
  let prevNodes = [node];

  // go to the end of the list
  // [1,2,3,4]
  while (node.next) {
    prevNodes.push(node.next);
    node = node.next;
  }
  // at end
  // [1,2,3,4] at 4
  // while previous nodes
  // set head
  llist = node;
  prevNodes.pop();

  // [1,2,3,4] at 4 next -> 3, 3 prev -> 4
  while (node && node.prev) {
    // pull last node out of array
    node.next = prevNodes.pop();
    if (node.next) {
      node.next.prev = node;
    }
    node = node.next;
  }
  return llist;
}
