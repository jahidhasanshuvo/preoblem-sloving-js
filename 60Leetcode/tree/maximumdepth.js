function Node(val, left, right) {
  this.val = val;
  this.left = left ?? null;
  this.right = right ?? null;
}
const maxDepth = (head) => {
  if (head != null) {
    return 1 + Math.max(maxDepth(head.left), maxDepth(head.right));
  } else return 0;
};
const head = new Node(3);
const node2 = new Node(9);
const node3 = new Node(20);
const node4 = new Node(15);
const node5 = new Node(7);
head.left = node2;
head.right = node3;
node2.left = node4;
node2.right = node5;
console.log(maxDepth(head));
