const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const money = input.slice(0, input.length - 1).map(Number);

console.log(money.reduce((acc, cur) => (acc += cur), 0));
