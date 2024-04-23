// 문제: 산길을 오르려 하는 자전거 라이더가 있다. 이 로드트립은 고도마다 n+1 의 포인트가 있고, 라이더는
// 이 트립을 0점, 즉 0의 고도에서 시작한다.
// 인수로 gain 이라는 배열을 받아 초기값이 0 인 지점에서 gain 배열의 요소를 차례대로 더하며 반환된 새로운 배열의 요소중 최대값을 구하라.

function solution(gain) {
  let altitude = [0];

  for (let i = 0; i < gain.length; i++) {
    altitude.push(altitude[i] + gain[i]);
  }
  return Math.max(...altitude);
}
console.log(solution([0, 1, 2, 3]));

// 알고리즘 3-2 풀이 note.

// 1. 인수로 받은 gain 배열의 요소를 인덱스 0 부터 초기값 0 에다가 더한 값을 새로운 배열로 생성한뒤 여기서 최대값을 반환하면 되겠다.
// 2. 그렇다면 일단 새롭게 만들어질 배열을 altitude 라고 생성한뒤 초기값을 [0] 으로 만들어 놓으면 되지 않을까.?
// 3. 그런뒤 gain 의 인덱스 값을 차례대로 더하며 altitude 배열뒤에 하나씩 추가.. altitude[i]와 gain[i] 를 더한값을 altitude 에 push 해주면 될거같다.
// 4. 그럼 최종적으로 얻게된 altitude 배열에서 최대값은 어떻게 찾을수 있을까? 전달된 요소중 최소/최대 값을 구하는 메서드는 Math.max() 를 사용하면 된다.
// 하지만 우리는 배열의 요소중 최대값을 구하려고 하기 때문에 스프레드 문법 , 즉 배열의 요소들을 배열 밖으로 꺼내서 숫자로 사용해야 하기 때문에 ...altitude
// 를 먼저 적용한뒤 Math.max() 를 사용해주면 배열 내부의 최대값을 구할수 있을것이다. (https://hianna.tistory.com/487)
