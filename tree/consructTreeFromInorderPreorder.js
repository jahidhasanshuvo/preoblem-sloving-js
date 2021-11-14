/*

Question :  You have to construct a tree from preorder and inorder of the tree
input: 
    const inorder = [3, 1, 4, 0, 5, 2];
    const preorder = [0, 1, 3, 4, 2, 5];

output:
               0
          1        2
        3   4        5

hint:
    preorder = root -> left -> right
    inorder = left -> root -> right

1. As in preorder the root will come first so preorder[0] is the root of the tree. We will made the root node from preorder[0]
2. In inorder the root is in the middle position. so we have to find the preorder[0] from the inorder. from the exmaple we can see that 0 is in the middle of the inorder. All left element from 0 will be the left part for the rest of the tree. So we have to find the index of preorder[0] from inorder array
3. Then we will call the recursive function and assign it to left node. so here the function parameter range will be previous start to the rootNodeIndex-1
4. Then again do the same thing for right node. But the start will be from the rootNodeIndex + 1 to end.
*/

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}
const inorder = [3, 1, 4, 0, 5, 2];
const preorder = [0, 1, 3, 4, 2, 5];
let preoderIndex = 0;
const constructTree = (start, end) => {
  // if there is no left or right node then end will be less than start
  if (start > end) {
    return null;
  }

  //   preorder first element is the root node. we have to increse it because next element of
  //   preorder array will be the second root node
  let rootNode = new Node(preorder[preoderIndex++]);

  //   now we have to find the rootnode index in inorder array
  let rootNodeIndex = inorder.indexOf(rootNode.data);

  //   we will pass the left portion of array to the left node and right portion to the right node
  rootNode.left = constructTree(start, rootNodeIndex - 1);
  rootNode.right = constructTree(rootNodeIndex + 1, end);

  return rootNode;
};
const tree = constructTree(0, inorder.length - 1);
console.log(tree);
