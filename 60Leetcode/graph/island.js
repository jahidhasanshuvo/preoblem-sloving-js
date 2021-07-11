const input = [
  ["1", "1", "0", "0", "1"],
  ["1", "1", "0", "1", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
let count = 0;
const DFS = (i, j) => {
  if (
    i < 0 ||
    i >= input.length ||
    j < 0 ||
    j >= input[i].length ||
    input[i][j] == "0" ||
    visited[i][j] == true
  ) {
    return;
  } else {
    visited[i][j] = true;
    DFS(i + 1, j);
    DFS(i - 1, j);
    DFS(i, j + 1);
    DFS(i, j - 1);
  }
};
let visited = [];
visited = Array(input.length)
  .fill(null)
  .map(() => Array(input[0].length).fill("false"));
// for (let i = 0; i < input.length; i++) {
//   visited[i] = [];
//   for (let j = 0; j < input[i].length; j++) {
//     visited[i][j] = false;
//   }
// }
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (visited[i][j] != true && input[i][j] != "0") {
      count++;
      DFS(i, j);
    }
  }
}
console.log(visited, count);
