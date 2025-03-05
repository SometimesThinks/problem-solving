class PriorQueue {
  constructor() {
    this.values = [];
    this.length = 0;
  }
  enqueue(val, priority) {
    this.values.push([val, priority]);
    this.length++;
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.length - 1;
    const element = this.values[idx];
    while (idx) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element[1] >= parent[1]) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    this.length--;
    if (this.length) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const element = this.values[0];
    while (true) {
      let leftChild, rightChild;
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let swap = null;

      if (leftChildIdx < this.length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild[1] < element[1]) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < this.length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild[1] < element[1]) ||
          (swap !== null && rightChild[1] < leftChild[1])
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const m = Number(input[1]);
const [strCity, endCity] = input[m + 2].split(' ').map(Number);
const graph = Array.from({ length: n + 1 }, () => []);
const distance = Array.from({ length: n + 1 }, () => Infinity);
const previous = Array.from({ length: n + 1 }, () => -1);
const que = new PriorQueue();
// graph
for (let i = 2; i < m + 2; i++) {
  const [str, end, cost] = input[i].split(' ').map(Number);
  graph[str].push([end, cost]);
}
//
que.enqueue(strCity, 0);
distance[strCity] = 0;
previous[strCity] = 0;
while (que.length) {
  const [now, dist] = que.dequeue();
  if (dist > distance[now]) continue;
  for (let i = 0; i < graph[now].length; i++) {
    const next = graph[now][i][0];
    const tempCost = dist + graph[now][i][1];
    if (tempCost < distance[next]) {
      distance[next] = tempCost;
      que.enqueue(next, tempCost);
      previous[next] = now;
    }
  }
}
const path = [endCity];
let prev = endCity;
// 경로 정리
while (prev !== strCity) {
  path.push(previous[prev]);
  prev = previous[prev];
}
console.log(distance[endCity]);
console.log(path.length);
console.log(...path.reverse());
