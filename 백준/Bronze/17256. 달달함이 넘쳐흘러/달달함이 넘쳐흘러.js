const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [ax, ay, az] = input[0].split(' ').map(Number);
const [cx, cy, cz] = input[1].split(' ').map(Number);

console.log(cx - az, cy / ay, cz - ax);
