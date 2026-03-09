const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, w, l] = input[0].split(' ').map(Number);
const trucks = input[1].split(' ').map(Number);
const bridge = Array.from({ length: w }, () => 0);
let time = 0;
let weight = 0;
let next = 0;

while (time < bridge.length) {
  if (bridge[time]) {
    weight -= bridge[time];
  }
  time++;
  if (weight + trucks[next] <= l) {
    if (next === n - 1) {
      time += w;
      break;
    }
    weight += trucks[next];
    bridge.push(trucks[next++]);
  } else {
    bridge.push(0);
  }
}
console.log(time);
