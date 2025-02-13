class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  dequeue() {
    if (!this.head) return -1;
    let curHead = this.head;
    this.head = curHead.next;
    this.length--;
    if (!this.head) this.tail = null;
    return curHead.val;
  }
  size() {
    return this.length;
  }
  empty() {
    return this.length > 0 ? 0 : 1;
  }
  front() {
    if (!this.head) return -1;
    return this.head.val;
  }
  back() {
    if (!this.head) return -1;
    return this.tail.val;
  }
}

const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const que = new Queue();
const ans = []; // 시간 초과 방지

for (let i = 1; i < n + 1; i++) {
  const command = input[i].split(' ');

  switch (command[0]) {
    case 'push':
      que.enqueue(Number(command[1]));
      break;
    case 'pop':
      ans.push(que.dequeue());
      break;
    case 'size':
      ans.push(que.size());
      break;
    case 'empty':
      ans.push(que.empty());
      break;
    case 'front':
      ans.push(que.front());
      break;
    case 'back':
      ans.push(que.back());
      break;
  }
}
console.log(ans.join('\n'));
