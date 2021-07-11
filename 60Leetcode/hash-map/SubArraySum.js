// https://www.youtube.com/watch?v=20v8zSo2v18

const input = [3, 9, -2, 4, 1, -7, 2, 6, -5, 8, -3, -7, 6, 2, 1];
const k = 5;
let hashMap = new Map();
hashMap.set(0, 1);
let sum = 0;
let result = 0;
input.forEach((el) => {
  sum += el;
  let occur = hashMap.get(sum) ?? 0;
  hashMap.set(sum, occur + 1);
  if (hashMap.get(sum - k) > 0) {
    result += hashMap.get(sum - k);
  }
});
console.log(result);
