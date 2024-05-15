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
      count++; // 약수가 3개 이상인 수 카운트  !!! for 문의 흐름, 코드의 전반적인 흐름, 변수의 재할당 시점등 잘 파악하고 코드 블록 배치할것!!
    }
  }
  return count;
};

console.log(solution(10));
