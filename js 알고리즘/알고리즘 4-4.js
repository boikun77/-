// 문제 : 인수로 전달 받은 두개의 문자열로 구성된 배열이 있다고 가정하자.
// 이떄 각 배열에서 단 한개만 존재하는 공통된 요소의 개수를 반환하라.

function solution(arr1, arr2) {
  const repeat1 = new Map();
  const repeat2 = new Map();

  arr1.forEach((str) => {
    repeat1.set(str, (repeat1.get(str) || 0) + 1);
  });
  arr2.forEach((str) => {
    repeat2.set(str, (repeat2.get(str) || 0) + 1);
  });

  if
}

// 알고리즘 4-4 풀이 note:

// 1. 반복되는 횟수를 구하여 그 횟수가 1 인 문자열을 구하고, 그 문자열이 두 배열에 모두 존재하는지 여부를 따지면 될거 같다.
// 2. 알고리즘 3-5 에서 반복되는 횟수를 Map 객체를 생성해 저장했다. 한번 시도해 보자.
