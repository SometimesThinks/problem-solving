const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const qua = input[0].split(' ');

console.log(Number(qua[0]) + Number(qua[2]) === Number(qua[4]) ? 'YES' : 'NO');
