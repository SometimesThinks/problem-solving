const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [r, c] = input[0].split(' ').map(Number);
const vocaLst = [];
// 가로 낱말 vocaLst에 추가
input
  .slice(1)
  .map((str) => str.split('#'))
  .map((arr) => {
    for (const ele of arr) {
      if (ele.length > 1) {
        vocaLst.push(ele);
      }
    }
  });
// 가로 <-> 세로 변경 및 세로 낱말 vocaLst에 추가
input
  .slice(1)
  .map((str) => str.split(''))
  .reduce((acc, row) => {
    row.forEach((val, idx) => {
      acc[idx] = acc[idx] || [];
      acc[idx].push(val);
    });
    return acc;
  }, [])
  .map((str) => str.join(''))
  .map((str) => str.split('#'))
  .map((arr) => {
    for (const ele of arr) {
      if (ele.length > 1) {
        vocaLst.push(ele);
      }
    }
  });
console.log(vocaLst.sort()[0]);
