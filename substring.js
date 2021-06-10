// const str = "abcd";
// for (let i = 1; i <= str.length; i++) {
//   for (let j = 0; j <= str.length - i; j++) {
//     let res = "";
//     let len = j + i;
//     for (let k = j; k < len; k++) {
//       res += str[k];
//     }
//     console.log(res);
//   }
// }
const str = "Codingame";
for (let i = str.length; i > 0; i--) {
  let res = "";
  for (let j = 0; j < str.length; j++) {
    res += str[(j + i) % str.length];
  }
  console.log(res);
}
