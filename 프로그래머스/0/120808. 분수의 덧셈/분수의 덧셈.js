function gcp(a, b) {
  let r = 1;
  while (b > 0) {
    r = a % b;
    a = b;
    b = r;
  }
  return a;
}

function solution(numer1, denom1, numer2, denom2) {
  const [p1, p2] = [denom1, denom2];
  const ans = [];

  numer1 *= p2;
  denom1 *= p2;
  numer2 *= p1;
  denom2 *= p1;
  ans.push((numer1 + numer2) / gcp(numer1 + numer2, denom1));
  ans.push(denom1 / gcp(numer1 + numer2, denom1));
  return ans;
}