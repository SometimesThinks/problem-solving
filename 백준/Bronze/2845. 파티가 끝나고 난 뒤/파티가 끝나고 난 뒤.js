const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [l, p] = input[0].split(' ').map(Number);
const visits = input[1].split(' ').map(Number);

console.log(...visits.map((visit) => visit - l * p));
