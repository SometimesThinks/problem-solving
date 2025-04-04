class AbsolutelyHeap {
  constructor() {
    this.values = [];
    this.length = 0;
  }
  push(value) {
    this.values.push([Math.abs(value), value]);
    this.length++;
    if (this.length) this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      let swap = null;
      if (parent[0] < element[0]) break;
      if (
        (parent[0] === element[0] && parent[1] > element[1]) ||
        parent[0] > element[0]
      ) {
        this.values[idx] = parent;
        this.values[parentIdx] = element;
        idx = parentIdx;
        swap = true;
      }
      if (!swap) break;
    }
  }
  pop() {
    if (!this.length) return 0;
    let min = this.values[0];
    let end = this.values.pop();
    this.length--;
    if (this.length) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return min[1];
  }
  bubbleDown() {
    let element = this.values[0];
    let idx = 0;
    let leftChild, rightChild;
    while (true) {
      let leftChildIdx = idx * 2 + 1;
      let rightChildIdx = idx * 2 + 2;
      let swap = null;

      if (leftChildIdx < this.length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild[0] < element[0]) swap = leftChildIdx;
        else if (leftChild[0] === element[0] && leftChild[1] < element[1])
          swap = leftChildIdx;
      }
      if (rightChildIdx < this.length) {
        rightChild = this.values[rightChildIdx];
        if (
          (!swap && rightChild[0] < element[0]) ||
          (swap && rightChild[0] < leftChild[0])
        )
          swap = rightChildIdx;
        else if (
          (!swap &&
            rightChild[0] === element[0] &&
            rightChild[1] < element[1]) ||
          (swap &&
            rightChild[0] === leftChild[0] &&
            rightChild[1] < leftChild[1])
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
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n').map(Number);

const n = input[0];
const absolutelyHeap = new AbsolutelyHeap();
const ans = [];

for (let i = 1; i < n + 1; i++) {
  const command = input[i];
  if (command) absolutelyHeap.push(command);
  else ans.push(absolutelyHeap.pop());
}
console.log(ans.join('\n'));
