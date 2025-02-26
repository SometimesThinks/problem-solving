const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

for (let i = 0; i < input.length - 1; i++) {
  const [boy, girl] = input[i].split(' ').map(Number);
  console.log(boy + girl);
}
