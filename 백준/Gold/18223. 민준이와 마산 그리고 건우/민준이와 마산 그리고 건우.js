class PriorityQueue {
  constructor() {
    this.values = [];
    this.length = 0;
  }
  enqueue(value, priority) {
    this.values.push({ value, priority });
    this.length++;
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[idx] = parent;
      this.values[parentIdx] = element;
      idx = parentIdx;
    }
  }
  dequeue() {
    if (!this.length) return null;
    const min = this.values[0];
    const end = this.values.pop();
    this.length--;
    if (this.length) {
      this.values[0] = end;
      this.sinkDown();
    }
    return [min.value, min.priority];
  }
  sinkDown() {
    let idx = 0;
    const element = this.values[0];
    while (true) {
      const leftChildIdx = 2 * idx + 1;
      const rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < this.length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < this.length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap && rightChild.priority < leftChild.priority) ||
          (!swap && rightChild.priority < element.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (!swap) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [v, e, p] = input[0].split(' ').map(Number);
const graph = Array.from({ length: v + 1 }, () => []);
// 초기 간선 정보 [node, cost]
for (let i = 1; i < e + 1; i++) {
  const [s, e, w] = input[i].split(' ').map(Number);
  graph[s].push([e, w]);
  graph[e].push([s, w]);
}
// 문제 풀이 시작점
const distance = Array.from({ length: v + 1 }, () => Infinity);
const prev = Array.from({ length: v + 1 }, () => []);
const que = new PriorityQueue();
let ans = false;

distance[1] = 0;
que.enqueue(1, 0);
while (que.length) {
  const [loc, dist] = que.dequeue();
  if (dist > distance[loc]) continue;
  for (const [next, cost] of graph[loc]) {
    const newCost = dist + cost;
    if (newCost < distance[next]) {
      distance[next] = newCost;
      prev[next] = [loc];
      que.enqueue(next, newCost);
    } else if (newCost === distance[next]) {
      prev[next].push(loc);
    }
  }
}
// 이전 경로 탐색
const visited = Array.from({ length: v + 1 }, () => false);
const dfs = (str) => {
  if (str === p) return true;
  visited[str] = true;
  for (const ver of prev[str]) {
    if (!visited[ver]) {
      const result = dfs(ver);
      if (result) return true;
    }
  }
  return false;
};

console.log(dfs(v) ? 'SAVE HIM' : 'GOOD BYE');
