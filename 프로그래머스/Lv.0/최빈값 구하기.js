// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
// 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요.
// 최빈값이 여러 개면 -1을 return 합니다.

const solution = (array) => {
  const countObject = array.reduce(
    (acc, cur) => ({ ...acc, [cur]: (acc[cur] || 0) + 1 }), // 각 숫자의 반복횟수 저장한 객체 생성
    {}
  );

  const mostFrequentValue = parseInt(
    // 가장 많이 반복된 숫자 찾아서 반환
    Object.keys(countObject).reduce((a, b) =>
      countObject[a] > countObject[b] ? a : b
    )
  );

  const objectValues = Object.values(countObject); // 반복된 횟수만 따로 모은 배열 get
  const mostRepeatedCount = Math.max(...objectValues); // 가장 많이 반복된 횟수 get

  if (objectValues.filter((num) => num === mostRepeatedCount).length > 1) {
    // 가장 많이 반복된 횟수가 2번 이상이면 -1 반환
    return -1;
  } else return mostFrequentValue; // 아니면 가장 많이 반복되 숫자 반환.
};

console.log(solution([1, 2, 3, 3, 3, 4]));

// 2024/5/13 일 1차 풀이.   더 쉽게 푸는 방법은???
