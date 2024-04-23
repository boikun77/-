//문제 : 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; // 인덱스 0 부터 마지막 인덱스 까지 순회하며 값을 누적.
  }

  return sum / numbers.length; // 요소들을 모두 더한 값을 배열의 길이 만큼 나누어 주면 평균값 완성.
}

// 알고리즘 1-4 풀이 note.

// 1. 정수로 된 numbers 배열을 인수로 받는 soluton 함수 생성.
// 2. 배열 내부의 원소들의 평균값을 구하려면 원소들을 모두 더한뒤 배열의 길이만큼 나누어주면 될듯하다.
// 3. 원소들의 값을 모두 더하려면 count 를 세는거처럼 초기값을 0 으로 해준뒤 배열을 순회하며 더해나가면 될듯하다. (for 문)
// 4. 요소들을 모두 더한뒤 배열의 길이만큼 나누어주면 일반적인 평균값을 구하는 절차가 될것이다.
