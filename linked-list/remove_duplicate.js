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
const removeDuplicate = (head) => {
  currentNode = head;
  while (currentNode.next != null) {
    if (currentNode.data == currentNode.next.data) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }
};
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

head = new Node(9);
insertIntoTail(head, 2);
insertIntoTail(head, 3);
insertIntoTail(head, 4);
insertIntoTail(head, 4);
insertIntoTail(head, 4);
insertIntoTail(head, 5);
insertIntoTail(head, 6);
insertIntoTail(head, 7);
insertIntoTail(head, 8);
insertIntoTail(head, 9);
insertIntoTail(head, 9);
insertIntoTail(head, 10);
removeDuplicate(head);
traverseLinkList(head);
