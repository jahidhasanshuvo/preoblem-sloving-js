let input = [];
input = [10, 9, 2, 5, 3, 7, 101, 18];
// input = [7, 7, 7, 7, 7, 7, 7];
// input = [0, 1, 0, 3, 2, 3];

const LIS = (i, prev) => {
  if (i < 0) {
    return 0;
  } else {
    if (input[i] < prev) {
      return 1 + LIS(i - 1, input[i]);
    } else {
      return Math.max(LIS(i - 1, input[i]), LIS(i - 1, prev));
    }
  }
};
console.log(
  "Longest increasing subsuquence in recursion",
  LIS(input.length - 1, 999999)
);
///// dp is not completed
const dp = Array(input.length + 1).fill(1);
//   .map(() => Array(input.length + 1).fill(1));
for (let i = input.length - 1; i <= 0; i--) {
  for (let j = i + 1; j <= input.length; j++) {
    if (input[i] < input[j]) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1]);
    }
  }
}
console.log(dp);
console.log(parseInt(0 / 60));
