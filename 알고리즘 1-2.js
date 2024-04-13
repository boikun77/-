// 문제 : 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.

function solution(num1, num2) {
  if (num1 === num2) {
    return 1;
  } else {
    return -1;
  }
}

console.log(solution(1, 1));
console.log(solution(1, 2));

// 알고리즘 1-2 풀이 note.

// 1. num 1 과 num 2 를 인수로 받는 solution 함수 생성.
// 2. 전달 받은 인수를 비교해 일치 여부를 반환하는 조건문 생성.
