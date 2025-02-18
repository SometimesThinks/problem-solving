const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, q] = input[0].split(' ').map(Number);
let forward = [];
let backward = [];
let access = -1;

for (let i = 1; i < q + 1; i++) {
  const action = input[i].split(' ');
  if (action[0] === 'A') {
    const page = Number(action[1]);
    forward = [];
    if (access !== -1) {
      backward.push(access);
    }
    access = page;
  } else if (action[0] === 'B') {
    if (backward.length) {
      forward.push(access);
      access = backward.pop();
    }
  } else if (action[0] === 'F') {
    if (forward.length) {
      backward.push(access);
      access = forward.pop();
    }
  } else {
    const temp = [];
    if (backward.length) temp.push(backward[0]);
    for (let i = 1; i < backward.length; i++) {
      if (temp[temp.length - 1] !== backward[i]) temp.push(backward[i]);
    }
    backward = temp;
  }
}
console.log(access);
console.log(backward.length ? backward.reverse().join(' ') : -1);
console.log(forward.length ? forward.reverse().join(' ') : -1);
