const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const t = Number(input[0]);

for (let i = 1; i < t + 1; i++) {
  const n = Number(input[i]);
  const seq = Array.from({ length: n }, (val, idx) => idx + 1);
  const ans = [];
  const dfs = (exp, cnt) => {
    // 수열 범위 초과 시, return
    if (cnt >= n) return 0;
    // 표현식 완성 시, 수식 값 확인
    exp += String(seq[cnt]);
    if (exp.length === 2 * n - 1) {
      if (calculate(exp)) {
        ans.push(exp);
        return 1;
      }
      return 0;
    }
    for (const oper of ['+', '-', ' ']) dfs(exp + oper, cnt + 1);
  };
  const calculate = (exp) => {
    const newExp = [];
    let pre = '';
    for (const char of exp) {
      if (char === '+' || char === '-') {
        newExp.push(pre);
        newExp.push(char);
        pre = '';
      } else if (char === ' ') {
      } else {
        pre += char;
      }
    }
    if (pre.length) newExp.push(pre);
    // 계산 시작점
    const stack = [];
    for (const ex of newExp) {
      if (
        stack.length &&
        isNaN(Number(stack[stack.length - 1])) &&
        !isNaN(Number(ex))
      ) {
        const sign = stack.pop();
        const num = stack.pop();
        if (sign === '+') stack.push(String(Number(num) + Number(ex)));
        else if (sign === '-') stack.push(String(Number(num) - Number(ex)));
      } else {
        stack.push(ex);
      }
    }
    if (stack[0] === '0') return true;
    return false;
  };

  dfs('', 0);
  console.log(ans.sort().join('\n'));
  if (i !== t) console.log();
}
