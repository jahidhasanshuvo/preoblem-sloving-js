const swap = (str, a, b) => {
  let temp = str[a];
  str[a] = str[b];
  str[b] = temp;
  return str;
};
const permutation = (str, point) => {
  if (point == str.length - 1) {
    console.log(str.join(""));
  } else {
    for (let i = point; i < str.length; i++) {
      str = swap(str, point, i);
      permutation(str, point + 1);
      str = swap(str, point, i); // this is needed as when the inner level recursion finished and back to the 2nd loop the string is changed

      // Do not need the backtrack as the real string is not changing
      //   let newStr = swap([...str], point, i);
      //   permutation(newStr, point + 1);
    }
  }
};
const str = "abc";
permutation(str.split(""), 0);
