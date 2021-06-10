const arr = [5, 2, 1, 3];
const sum = 4;
const subsetSumDP = () => {
  const dp = Array(arr.length + 1)
    .fill(0)
    .map(() => Array(sum + 1).fill(0));
  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j <= sum; j++) {
      if (i == 0) dp[i][j] = false;
      if (j == 0) dp[i][j] = true;
    }
  }

  for (let i = 1; i <= arr.length; i++) {
    for (let j = 1; j <= sum; j++) {
      if (arr[i - 1] <= j) {
        dp[i][j] = true;
        const include = dp[i - 1][j - arr[i - 1]];
        const notInclude = dp[i - 1][j];
        dp[i][j] = include || notInclude;
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  console.log(dp);
};
console.log(subsetSumDP());
