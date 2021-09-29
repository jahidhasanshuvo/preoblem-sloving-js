function Node(val, next) {
  this.val = val == undefined ? 0 : val;
  this.next = next == undefined ? null : next;
}
function constructLinkedListFromArray(arr) {
  let head = new Node();
  let currentHead = head;
  for (let i = 0; i < arr.length; i++) {
    currentHead.next = new Node(arr[i]);
    currentHead = currentHead.next;
  }
  return head.next;
}
function printLinkedList(head) {
  let currentHead = head;
  let result = "";
  while (currentHead) {
    result += currentHead.val + "->";
    currentHead = currentHead.next;
  }
  return result;
  ß;
}
// function reverseLinkedList(linkedlist) {
//   var node = linkedlist;
//   var previous = null;

//   while (node) {
//     // save next or you lose it!!!
//     var save = node.next;
//     // reverse pointer
//     node.next = previous;
//     // increment previous to current node
//     previous = node;
//     // increment node to next node or null at end of list
//     node = save;
//   }
//   return previous; // Change the list head !!!
// }

function reverseLinkedList(head) {
  let previous = null;
  while (head) {
    let tmp = head.next;
    head.next = previous;
    previous = head;
    head = tmp;
  }
  return previous;
}
const LinkedListArray = [1, 2, 3, 4, 5, 6];
const LinkedList = constructLinkedListFromArray(LinkedListArray);
console.log(JSON.stringify(printLinkedList(LinkedList)));
// console.log(LinkedList);
console.log(JSON.stringify(reverseLinkedList(LinkedList)));
