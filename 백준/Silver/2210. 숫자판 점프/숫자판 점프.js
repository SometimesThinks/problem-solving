const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const matrix = input.map((row) => row.split(' ').map(Number));
const ans = new Set();
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
const dfs = (strX, strY, res) => {
  if (res.length === 6) {
    ans.add(res);
    return;
  }
  for (let i = 0; i < 4; i++) {
    const tempX = strX + dx[i];
    const tempY = strY + dy[i];

    if (tempX >= 0 && tempX < 5 && tempY >= 0 && tempY < 5) {
      dfs(tempX, tempY, res + matrix[tempX][tempY]);
    }
  }
};

for (let r = 0; r < 5; r++) {
  for (let c = 0; c < 5; c++) {
    dfs(r, c, '');
  }
}
console.log(ans.size);
