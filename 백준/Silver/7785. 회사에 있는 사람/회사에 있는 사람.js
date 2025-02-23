const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const logs = {};

for (let i = 1; i < n + 1; i++) {
  const log = input[i].split(' ');
  if (log[1] === 'enter') logs[log[0]] = 1;
  else delete logs[log[0]];
}
console.log(
  Object.keys(logs)
    .sort((a, b) => {
      if (a > b) return -1;
      else if (a < b) return 1;
      return 0;
    })
    .join('\n')
);
