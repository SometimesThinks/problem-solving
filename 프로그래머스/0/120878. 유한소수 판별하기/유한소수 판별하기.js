function gcp(a, b) {
  let r = 1;
  while (b > 0) {
    r = a % b;
    a = b;
    b = r;
  }
  return a;
}

function solution(a, b) {
  const g = gcp(a, b);
  a /= g;
  b /= g;

  while (!(b % 2)) b /= 2;
  while (!(b % 5)) b /= 5;
  if (b === 1) return 1;
  else return 2;
}