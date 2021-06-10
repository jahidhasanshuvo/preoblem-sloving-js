const os = require("os");
console.log(os.platform());

const insert = (ara, compare, index) => {
  if (compare == ara.length) {
    return;
  } else {
    if (ara[compare] > ara[index]) {
      let temp = ara[index];
      ara[index] = ara[compare];
      ara[compare] = temp;
    }
    insert(ara, compare + 1, index);
  }
};

const sortArray = (ara, index) => {
  ara.push(4);
  // if (index == ara.length) {
  //   return;
  // } else {
  //   insert(ara, 0, index);
  //   sortArray(ara, index + 1);
  // }
};
const arr = [54, 2, 89, 6, 3, 4, 5, 12];
console.log(arr);
sortArray(arr, 1);
console.log(arr);
