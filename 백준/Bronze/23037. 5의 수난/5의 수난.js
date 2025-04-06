const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const origin = input[0];
let sum = 0;

for (let i = 0; i < origin.length; i++) sum += Number(origin[i]) ** 5;
console.log(sum);
