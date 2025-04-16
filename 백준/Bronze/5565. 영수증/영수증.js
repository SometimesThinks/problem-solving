const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const tenPrice = Number(input[0]);
const ninePrice = input.slice(1).reduce((acc, cur) => acc + Number(cur), 0);

console.log(tenPrice - ninePrice);
