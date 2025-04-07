const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const thous = Number(input[0]);
const mili = Number(input[1]);

console.log(thous * 1000 + mili * 10000);
