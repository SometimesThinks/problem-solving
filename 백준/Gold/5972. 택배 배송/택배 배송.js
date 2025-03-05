class PriorQueue {
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
    while (idx) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
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
    const element = this.values[idx];
    let leftChild, rightChild;
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 1;
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
// n: 헛간의 수, m: 길의 수
const [n, m] = input[0].split(' ').map(Number);
const graph = Array.from({ length: n + 1 }, () => []);
// 초기 길, 여물 초기화
for (let i = 1; i < m + 1; i++) {
  const [str, end, cost] = input[i].split(' ').map(Number);
  graph[str].push({ value: end, priority: cost });
  graph[end].push({ value: str, priority: cost });
}
const que = new PriorQueue();
const distance = Array.from({ length: n + 1 }, () => Infinity);

que.enqueue(1, 0);
distance[1] = 0;
while (que.length) {
  const { value, priority } = que.dequeue();
  if (priority > distance[value]) continue;
  for (const road of graph[value]) {
    const nextVal = road.value;
    const tempCost = priority + road.priority;
    if (tempCost < distance[nextVal]) {
      distance[nextVal] = tempCost;
      que.enqueue(nextVal, tempCost);
    }
  }
}
console.log(distance[n]);
