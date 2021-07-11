let graph = {},
  step = 0,
  visited = {},
  distance = {},
  beginWord = "hit",
  endWord = "cog",
  wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
const BFS = (start) => {
  const queue = [start];
  visited[start] = true;
  while (queue.length != 0) {
    let curr = queue.shift();
    console.log(curr);
    graph[curr].forEach((element) => {
      if (!visited[element]) {
        queue.push(element);
        visited[element] = true;
        distance[element] = distance[curr] + 1;
      }
    });
  }
};
const oneWordDifference = (wordA, wordB) => {
  let count = 0;
  for (let i = 0; i < wordA.length; i++) {
    if (wordA[i] != wordB[i]) {
      count++;
    }
  }
  return count == 1 ? true : false;
};
wordList.unshift(beginWord);
for (let i = 0; i < wordList.length; i++) {
  visited[wordList[i]] = false;
  distance[wordList[i]] = 0;
  graph[wordList[i]] = [];
  for (let j = i + 1; j < wordList.length; j++) {
    if (oneWordDifference(wordList[i], wordList[j])) {
      graph[wordList[i]].push(wordList[j]);
    }
  }
}
console.log(graph);
BFS("hit");
console.log(distance["cog"] + 1);
