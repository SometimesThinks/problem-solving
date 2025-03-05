class PriorityQueue {
  constructor() {
    this.values = [];
    this.length = 0;
  }
  enqueue(x, y, priority) {
    this.values.push([x, y, priority]);
    this.length++;
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element[2] >= parent[2]) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    if (!this.length) return null;
    const min = this.values[0];
    const end = this.values.pop();
    this.length--;
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild[2] < element[2]) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild[2] < element[2]) ||
          (swap !== null && rightChild[2] < leftChild[2])
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
// n: 열의 수, m: 행의 수
const [n, m] = input[0].split(' ').map(Number);
const matrix = input.slice(1).map((str) => str.split('').map(Number));
const priorQue = new PriorityQueue();
const distance = Array.from({ length: m }, () =>
  Array.from({ length: n }, () => Infinity)
);
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

priorQue.enqueue(0, 0, 0);
distance[0][0] = 0;
while (priorQue.length) {
  const [nowX, nowY, dist] = priorQue.dequeue();
  if (dist > distance[nowX][nowY]) continue;
  for (let i = 0; i < 4; i++) {
    const tempX = nowX + dx[i];
    const tempY = nowY + dy[i];
    if (tempX >= 0 && tempX < m && tempY >= 0 && tempY < n) {
      const cost = dist + matrix[tempX][tempY];
      if (cost < distance[tempX][tempY]) {
        distance[tempX][tempY] = cost;
        priorQue.enqueue(tempX, tempY, cost);
      }
    }
  }
}
console.log(distance[m - 1][n - 1]);
