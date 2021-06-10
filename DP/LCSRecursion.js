const strA = "xzabcdefghijklmn";
const strB = "xychjk";
const LargestCommonSubsequence = (posA, posB) => {
  if (posA >= strA.length - 1 || posB >= strB.length - 1) {
    if (strA[posA] == strB[posB]) {
      return 1;
    }
    return 0;
  } else {
    if (strA[posA] == strB[posB]) {
      return 1 + LargestCommonSubsequence(posA + 1, posB + 1);
    } else {
      return Math.max(
        LargestCommonSubsequence(posA + 1, posB),
        LargestCommonSubsequence(posA, posB + 1)
      );
    }
  }
};
console.log(LargestCommonSubsequence(0, 0));
