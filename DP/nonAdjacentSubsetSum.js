const arr = [-2, 1, 3, -4, 5];
// const nonAdjacentSubset = (ar, pos, len) => {
//   if (pos < 0) {
//     if (len > 1) {
//       console.log(ar);
//     }
//     return 0;
//   } else {
//     const newAra = [...ar, arr[pos]];
//     nonAdjacentSubset(newAra, pos - 2, len + 1);
//     nonAdjacentSubset(ar, pos - 1, len);
//   }
// };
const nonAdjacentSubsetSum = (sum, pos, len) => {
  if (pos < 0) {
    if (len > 1) {
      return sum;
    }
    return 0;
  } else {
    return Math.max(
      nonAdjacentSubsetSum(sum + arr[pos], pos - 2, len + 1),
      nonAdjacentSubsetSum(sum, pos - 1, len)
    );
  }
};
console.log(nonAdjacentSubsetSum(0, arr.length - 1, 0));
