// 문제 : 정수로 이루어진 nums 라는 배열을 인수로 받은뒤, 반복된 횟수가 적은 순서대로 나열해 새로운 배열을 반환해라.
// 만약 반복된 횟수가 같은 숫자가 있다면, 내림차순으로 정리해라.

function solution(nums) {
  const frequency = new Map(); // 각 숫자의 빈도수를 키와 값의 형태롤 저장하기 위해 map 객체 생성
  nums.forEach((num) => {
    frequency.set(num, (frequency.get(num) || 0) + 1); // frequency.get(num) 이 존재하는 경우 그 값에다 +1, 아니면 0+1 을 실행후 값 반환.
  }); // 여기까지 각 숫자의 반복 횟수를 frequecny 라는 맵 객체에 키와 값의 형태로 저장.

  // 이제 그 값을 토대로 오름차순 혹은 내림차순으로 정리 해보자.
  nums.sort((a, b) => {
    if (frequency.get(a) === frequency.get(b)) {
      return b - a;
    } else if (frequency.get(a) < frequency.get(b)) {
      return a - b;
    }
  });
  return nums;
}

const nums = [1, 1, 2, 2, 2, 3];
console.log(solution(nums)); // 출력: [3, 1, 1, 2, 2, 2]

// 알고리즘 3-5 풀이 note :

// 1. 필요한 메서드들이 무엇일지 먼저 생각해보자. 1. 반복된 횟수를 세는 메서드 2. 오름차순/내림차순으로 요소를 정리하는 메서드
// 이정도가 있겠다.
// 오름차순/내림차순 -- .sort() / reverse(b-a 도 가능) / 숫자열인 경우 비교함수(a,b=>a-b) 이 세가지 를 활용해 정리할수 있겠다.
// 2. 그렇다면 배열 내에서 어떤 요소가 몇번이나 중복 되었는지 구하는 방법은 무엇일까? 찾아보니 1. forEach() 2.reduce() 3.Map 객체 사용등이 있겠다. (https://hianna.tistory.com/459)
// 이 문제에서는 Map 객체와 forEach() 메서드를 같이 사용하면 되겠다.
