weights = [1, 2, 4, 5];
profits = [1, 4, 5, 7];
capacity = 7;
output = Array(profits.length + 1)
  .fill(-1)
  .map(() => Array(capacity + 1).fill(-1));
// console.log(output);
for (let i = 0; i <= profits.length; i++) {
  for (let j = 0; j <= capacity; j++) {
    if (i == 0 || j == 0) {
      output[i][j] = 0;
    } else {
      if (weights[i - 1] <= capacity) {
        let include = output[i - 1][j - weights[i - 1]] + profits[i - 1];
        if (!include) {
          console.log(123456);
          include = 0;
        }
        let notInclude = output[i - 1][j];
        output[i][j] = Math.max(include, notInclude);
      } else {
        output[i][j] = output[i - 1][j];
      }
    }
    // console.log(output[i][j]);
  }
}
output.map((i) => {
  console.log(i.join(" "));
});
