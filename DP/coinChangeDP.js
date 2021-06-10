//////////////////////////// how many ways ///////////////////
const countWaysCoinChange = (total) => {
  const dp = Array(denominator.length + 1)
    .fill(-1)
    .map(() => Array(total + 1).fill(-1));
  for (let i = 0; i <= denominator.length; i++) {
    for (let j = 0; j <= total; j++) {
      if (i == 0) {
        dp[i][j] = 9999999;
      }
      if (j == 0) {
        dp[i][j] = 0;
      }
    }
  }
  for (let i = 1; i <= denominator.length; i++) {
    for (let j = 1; j <= total; j++) {
      if (j - denominator[i - 1] >= 0) {
        dp[i][j] = Math.min(1 + dp[i][j - denominator[i - 1]], dp[i - 1][j]);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[denominator.length][total];
};
const denominator = [1, 4, 5];
const target = 8;
console.log(countWaysCoinChange(target));
