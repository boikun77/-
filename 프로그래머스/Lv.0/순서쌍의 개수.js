const solution = (n) => {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (i * j === n) {
        count++;
      }
    }
  }
  return count;
}; // 이 방법도 틀리지는 않으나 계산하는데 시간이 너무 많이 걸림.
console.log(solution(100));

const solution = (n) => {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      // i가 n의 약수인 경우
      if (n / i === i) {
        // i가 n의 제곱근인 경우
        count++;
      } else {
        // i가 n의 제곱근이 아닌 경우
        // i와 n/i 모두 약수
        count += 2;
      }
    }
  }
  return count;
}; // 지선생 추천 코드 .... 이해가 안된다...
