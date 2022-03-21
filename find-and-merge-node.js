// This is a "method-only" submission.
// You only need to complete this method.

function findMergeNode(headA, headB) {
  let currentA = headA;
  let currentB = headB;
  let prevA = [];
  while (currentA) {
    prevA.push(currentA);
    currentA = currentA.next;
  }
  let commonNode = {};
  while (currentB) {
    if (prevA.includes(currentB)) {
      commonNode = currentB;
      break;
    }
    currentB = currentB.next;
  }
  return commonNode.data;
}
