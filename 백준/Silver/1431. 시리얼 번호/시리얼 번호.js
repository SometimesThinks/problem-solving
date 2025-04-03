const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const sirials = input.slice(1).sort((s1, s2) => {
  if (s1.length !== s2.length) return s1.length - s2.length;
  else {
    const sum1 = s1.split('').reduce((acc, cur) => {
      if (!isNaN(Number(cur))) return acc + Number(cur);
      else return acc;
    }, 0);
    const sum2 = s2.split('').reduce((acc, cur) => {
      if (!isNaN(Number(cur))) return acc + Number(cur);
      else return acc;
    }, 0);
    if (sum1 !== sum2) return sum1 - sum2;
    else return s1.localeCompare(s2);
  }
});

console.log(sirials.join('\n'));
