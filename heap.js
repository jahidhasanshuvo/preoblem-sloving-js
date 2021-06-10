// leftChild = index * 2;
// rightChild = index * 2 + 1;
// parent = index / 2

const heap = [];
const iuput = [15, 2, 56, 3, 1, 8, 9];
const getLeftChildrenIndex = (index) => {
  return index * 2;
};
const getRigthChildrenIndex = (index) => {
  return index * 2 + 1;
};
const getParentIndex = (index) => {
  return parseInt(index / 2);
};
const heapifyUp = () => {
  let index = heap.length - 1;
  while (heap[index] < heap[getParentIndex(index)]) {
    const temp = heap[getParentIndex(index)];
    heap[getParentIndex(index)] = heap[index];
    heap[index] = temp;
    index = getParentIndex(index);
  }
};
const heapifyDown = () => {
  let index = 0;
  while (heap[getLeftChildrenIndex(index)]) {
    let smallestChildrenIndex = getLeftChildrenIndex(index);
    if (heap[smallestChildrenIndex] > heap[getRigthChildrenIndex(index)]) {
      smallestChildrenIndex = getRigthChildrenIndex(index);
    }
    if (heap[smallestChildrenIndex] >= heap[index]) {
      break;
    } else {
      const temp = heap[smallestChildrenIndex];
      heap[smallestChildrenIndex] = heap[index];
      heap[index] = temp;
    }
    index = smallestChildrenIndex;
  }
};
const insert = (item) => {
  let index = heap.length;
  heap[index] = item;
  heapifyUp();
};
const remove = () => {
  const item = heap[0];
  const index = heap.length - 1;
  heap[0] = heap[index];
  heap.splice(index);
  heapifyDown();
  return item;
};
iuput.forEach((item) => {
  insert(item);
});
console.log(heap);
const sorted = [...heap];
let result = [];
sorted.map(() => {
  result.push(remove());
});
console.log(`heap=${heap}\nsorted=${result}`);
