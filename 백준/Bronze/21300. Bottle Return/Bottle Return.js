const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const bottleCnt = input[0].split(' ').map(Number);

console.log(bottleCnt.reduce((acc, cur) => (acc += cur), 0) * 5);
