const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const maze = input.slice(1).map((e) => e.split(' ').map(Number));

for (let r = 0; r < n; r++) {
  for (let c = 0; c < m; c++) {
    if (r === 0 && c === 0) {
    } else if (r === 0) {
      maze[r][c] = maze[r][c - 1] + maze[r][c];
    } else if (c === 0) {
      maze[r][c] = maze[r - 1][c] + maze[r][c];
    } else {
      maze[r][c] =
        Math.max(maze[r][c - 1], maze[r - 1][c], maze[r - 1][c - 1]) +
        maze[r][c];
    }
  }
}
console.log(maze[n - 1][m - 1]);
