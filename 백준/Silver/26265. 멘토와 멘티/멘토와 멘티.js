const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const pairs = input
  .slice(1)
  .map((pair) => pair.split(' '))
  .sort((arr1, arr2) => {
    if (arr1[0] === arr2[0]) {
      return arr2[1] > arr1[1] ? 1 : -1;
    }
    return arr1[0] > arr2[0] ? 1 : -1;
  });

for (const pair of pairs) {
  console.log(...pair);
}
