const arr = [5, 2, 1, 3];
const subsetSum = (pos, sum) => {
  if (pos == arr.length) {
    console.log(sum);
    if (sum == 0) {
      return true;
    }
    return false;
  } else {
    return subsetSum(pos + 1, sum - arr[pos]) || subsetSum(pos + 1, sum);
  }
};

console.log(subsetSum(0, 9));
