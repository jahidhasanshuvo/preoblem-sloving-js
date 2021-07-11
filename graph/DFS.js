let visited = {};
let graph = {};
const input = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
const DFS = (cell) => {
  if (visited[cell]) {
    return;
  } else {
    visited[cell] = true;
    graph[cell].map((item) => {
      DFS(item);
    });
  }
};
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    graph[[i, j]] = [];
    if (input[i][j] == 1) {
      visited[[i, j]] = false;
      if (i - 1 >= 0) {
        graph[[i, j]].push([i - 1, j]);
      }
      if (j - 1 >= 0) {
        graph[[i, j]].push([i, j - 1]);
      }
      if (i + 1 < input.length) {
        graph[[i, j]].push([i + 1, j]);
      }
      if (j + 1 < input[i].length) {
        graph[[i, j]].push([i, j + 1]);
      }
    }
  }
}
console.log(graph, visited);
let count = 0;
Object.keys(visited).map((item) => {
  if (!visited[item]) {
    count++;
    DFS(item);
  }
});
console.log(graph, visited, count);
