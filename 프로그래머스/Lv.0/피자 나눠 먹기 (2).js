const solution = (n) => {
  let i = 1;

  for (i; (6 * i) % n != 0; i++) {} // 여기서 i 는 for문 블록 안에 있지 않으니 전역 스코프인가?? 그래서 i++ 가 갱신 되는듯 하다.
  return i;
};

console.log(solution(10));

console.log(10 % 6);

// 풀긴 풀었지만 뭔가 어설프다.. 다른 방법이 있을까?
