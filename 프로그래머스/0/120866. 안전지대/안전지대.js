function solution(board) {
  const n = board.length;
  const dx = [-1, 0, 1, 0, 1, 1, -1, -1];
  const dy = [0, 1, 0, -1, -1, 1, 1, -1];
  let res = 0;

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] === 1) {
        for (let i = 0; i < 8; i++) {
          const tx = r + dx[i];
          const ty = c + dy[i];
          if (tx >= 0 && tx < n && ty >= 0 && ty < n) {
            if (board[tx][ty] === 0) board[tx][ty] = 2;
          }
        }
      }
    }
  }
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] === 0) res += 1;
    }
  }
  return res;
}