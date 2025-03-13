const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const ban = input[0];
const cars = input[1].split(' ');

console.log(
  cars.reduce((acc, cur) => {
    if (cur[cur.length - 1] === ban) return (acc += 1);
    else return acc;
  }, 0)
);
