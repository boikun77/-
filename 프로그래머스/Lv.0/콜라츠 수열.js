const solution = (n) => {
  let result = [n]; //  변수에 할당된 값은 원시 값(primitive value)일 경우,  원시 값은 값을 복사하여 저장하며, 이후 해당 값이 변경되더라도 원래 값은 그대로 유지
  while (n !== 1) {
    //while 문은 조건식이 거짓이 될때까지 계속 실행.
    if (n % 2 === 0) {
      n = n / 2;
      result.push(n);
    } else {
      n = 3 * n + 1;
      result.push(n);
    }
    console.log(result);
  }
  return result;
};

console.log(solution(10));
