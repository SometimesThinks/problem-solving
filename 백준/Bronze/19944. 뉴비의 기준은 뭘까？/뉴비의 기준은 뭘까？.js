const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

if (m > n) console.log('TLE!');
else if ([1, 2].includes(m)) console.log('NEWBIE!');
else console.log('OLDBIE!');
