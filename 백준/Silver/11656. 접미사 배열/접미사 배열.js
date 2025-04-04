const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const s = input[0];
const prefixs = [];

for (let i = 0; i < s.length; i++) prefixs.push(s.slice(i));
console.log(prefixs.sort((a, b) => a.localeCompare(b)).join('\n'));
