class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  insertIntoBst(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (value < currentNode.val) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
}

function BinarySearchTreeLCA(strArr) {
  let arr = strArr[0];
  arr = arr.substring(1, arr.length - 1).split(",");
  let value1 = strArr[1],
    value2 = strArr[2];
  console.log(value1, value2);
  let bst = new BST();
  arr.forEach((item) => {
    bst.insertIntoBst(item);
  });
  function findLca(node, val1, val2) {
    if (val1 < node.val && val2 < node.val) {
      return findLca(node.left, val1, val2);
    } else if (val1 > node.val && val2 > node.val) {
      return findLca(node.right, val1, val2);
    } else {
      return node.val;
    }
  }
  console.log(bst.root);
  return findLca(bst.root, value1, value2);
}

// keep this function call here
console.log(BinarySearchTreeLCA(["[3, 2, 1, 12, 4, 5, 13]", "5", "13"]));
