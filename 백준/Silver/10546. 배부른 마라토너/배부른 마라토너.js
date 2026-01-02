const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const entry = new Map();
let idx = 1;

for (let i = 0; i < n; i++) {
  const name = input[idx++];
  entry.set(name, (entry.get(name) || 0) + 1);
}
for (let i = 0; i < n - 1; i++) {
  const name = input[idx++];
  entry.set(name, entry.get(name) - 1);
}
for (const [name, success] of entry.entries()) {
  if (success) {
    console.log(name);
    break;
  }
}
