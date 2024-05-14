const solution = (n) => {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    let count2 = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count2++; //약수의 개수 카운트
      }
    }
    if (count2 >= 3) {
      count++; // 약수가 3개 이상인 수 카운트
    }
  }
  return count;
};

console.log(solution(10));
