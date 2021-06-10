const strA = "xzabcdefghijklmn";
const strB = "xychjk";
const dp = Array(strA.length + 1)
  .fill(-1)
  .map(() => Array(strB.length + 1).fill(-1));
for (let i = 0; i <= strA.length; i++) {
  for (let j = 0; j <= strB.length; j++) {
    if (i == 0 || j == 0) {
      dp[i][j] = 0;
    } else if (strA[i - 1] == strB[j - 1]) {
      dp[i][j] = 1 + dp[i - 1][j];
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
}
console.log(dp[strA.length][strB.length]);
