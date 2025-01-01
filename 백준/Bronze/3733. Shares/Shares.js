const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

input.forEach((arr) => {
  const [n, s] = arr.split(' ').map(Number);
  console.log(Math.floor(s / (n + 1)));
});
