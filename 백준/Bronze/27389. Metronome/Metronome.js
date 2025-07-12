const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = parseFloat(input[0]);
const cycle = n / 4.0;

console.log(Number.isInteger(cycle) ? cycle.toFixed(1) : cycle);
