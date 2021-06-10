// const arr = [3, 5, -7, 8, 10];
const arr = [-2, 1, 3, -4, 5];
let dp = [];
const nonAdjacentSubsetSum = () => {
  dp[0] = 0;
  dp[1] = Math.max(0, arr[0]);
  for (let i = 2; i <= arr.length; i++) {
    dp[i] = Math.max(dp[i - 2] + arr[i - 1], dp[i - 1]);
  }
  console.log(dp);
  return dp[arr.length];
};
console.log(nonAdjacentSubsetSum());
