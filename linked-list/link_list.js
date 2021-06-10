class Node {
    constructor(data){
      this.data = data;
        // this.next = null;
    }
    next = null
  }
  const head = new Node(4)
  const nodeTwo = new Node(5)
  const nodeThree = new Node(6)
  const nodeFour = new Node(7)
  head.next = nodeTwo;
  nodeTwo.next = nodeThree;
  nodeThree.next = nodeFour;
  nodeFour.next = null;
  const traverseLinkList = (head) => {
    var currentNode = head
    while(currentNode != null) {
      console.log("current Node-",currentNode.data)
      currentNode = currentNode.next
    }
  }
  traverseLinkList(head)
  