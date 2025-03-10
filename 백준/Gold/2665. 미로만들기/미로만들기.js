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
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element >= parent.priority) break;
      this.values[idx] = parent;
      this.values[parentIdx] = element;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    this.length--;
    if (this.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const element = this.values[0];
    let leftChild, rightChild;
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let swap = null;
      if (leftChildIdx < this.length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < this.length) {
        rightChild = this.values[idx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
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
const matrix = input.slice(1).map((row) => row.split('').map(Number));
const que = new PriorityQueue();
const distance = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => Infinity)
);
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

que.enqueue([0, 0], 0);
while (que.length) {
  const {
    value: [nx, ny],
    priority: dis,
  } = que.dequeue();
  if (dis > distance[nx][ny]) continue;
  for (let i = 0; i < 4; i++) {
    const tx = nx + dx[i];
    const ty = ny + dy[i];
    if (tx >= 0 && tx < n && ty >= 0 && ty < n) {
      const nextDis = dis + (matrix[tx][ty] === 1 ? 0 : 1);
      if (nextDis < distance[tx][ty]) {
        distance[tx][ty] = nextDis;
        que.enqueue([tx, ty], nextDis);
      }
    }
  }
}
console.log(distance[n - 1][n - 1]);
