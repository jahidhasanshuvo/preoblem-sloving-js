weights = [1, 2, 4, 5];
profits = [1, 4, 5, 7];
capacity = 7;
memoization = new Array(3 + 1).fill(0).map(() => new Array(7 + 1).fill(0));
// weights = [1, 3, 4];
// profits = [1, 2, 3];
const knapsack = (output, profit, pos, cap) => {
  if (pos < 0 || cap == 0) {
    console.log(output, profit);
    return 0;
  } else {
    if (weights[pos] <= cap) {
      if (memoization[pos][cap]) {
        console.log("fffff");
        return memoization[pos][cap];
      }
      output.push(weights[pos]);
      const include =
        profits[pos] +
        knapsack(output, profit + profits[pos], pos - 1, cap - weights[pos]);
      output.pop();
      const notInclude = knapsack(output, profit, pos - 1, cap);
      return (memoization[pos][cap] = Math.max(include, notInclude));
    } else {
      return knapsack(output, profit, pos - 1, cap);
    }
  }
};

console.log(knapsack([], 0, profits.length - 1, capacity));
memoization.map((item) => {
  console.log(item.join(" "));
});
