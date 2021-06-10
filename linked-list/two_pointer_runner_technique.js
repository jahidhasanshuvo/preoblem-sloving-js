const traverseLinkList = (head) => {
  var currentNode = head;
  var result = [];
  while (currentNode != null) {
    result.push(currentNode.data);
    currentNode = currentNode.next;
  }
  console.log(result.join("->"));
};
const insertIntoTail = (head, value) => {
  var currentNode = head;
  while (currentNode.next != null) {
    currentNode = currentNode.next;
  }
  currentNode.next = new Node(value);
  currentNode.next.next = null;
};
const twoPointerRunnerTechnique = (head) => {
  var fastPointer = head.next;
  var slowPointer = head;
  while (fastPointer.next != null) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
  }
  fastPointer = head;
  slowPointer = slowPointer.next;
  var newHead = new Node(fastPointer.data);
  insertIntoTail(newHead, slowPointer.data);
  while (slowPointer.next != null) {
    fastPointer = fastPointer.next;
    slowPointer = slowPointer.next;
    insertIntoTail(newHead, fastPointer.data);
    insertIntoTail(newHead, slowPointer.data);
  }
  console.log("-------from function")
  global.head = newHead
  traverseLinkList(newHead);
};
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
const global = {
  head:''
}
global.head = new Node(1);
insertIntoTail(global.head, 2);
insertIntoTail(global.head, 3);
insertIntoTail(global.head, 4);
insertIntoTail(global.head, 5);
insertIntoTail(global.head, 6);
insertIntoTail(global.head, 7);
insertIntoTail(global.head, 8);
insertIntoTail(global.head, 9);
insertIntoTail(global.head, 10);
traverseLinkList(global.head);
twoPointerRunnerTechnique(global.head);
traverseLinkList(global.head)
