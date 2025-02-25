const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [k, n, m] = input[0].split(' ').map(Number);

console.log(k * n - m >= 0 ? k * n - m : 0);
