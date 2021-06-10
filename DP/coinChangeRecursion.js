const coinChange = (output, total, pos) => {
  if (total == 0) {
    console.log(output);
  } else if (pos == denominator.length) {
    return;
  } else {
    if (denominator[pos] <= total) {
      coinChange(output, total, pos + 1);
      output += denominator[pos];
      coinChange(output, total - denominator[pos], pos);
    }
  }
};

//////////////////////////// how many ways ///////////////////
const countWaysCoinChange = (total, pos) => {
  if (total == 0) {
    // if (noc < 0) {
    //   return 0;
    // }
    return 0;
  } else if (pos == denominator.length) {
    return 9999;
  } else {
    if (denominator[pos] <= total) {
      const notInclude = countWaysCoinChange(total, pos + 1);
      const include = 1 + countWaysCoinChange(total - denominator[pos], pos);
      return Math.min(notInclude, include);
    } else {
      return countWaysCoinChange(total, pos + 1);
    }
  }
};

const denominator = [1, 3, 5, 10];
const target = 17;
coinChange("", target, 0);
console.log(countWaysCoinChange(target, 0));
