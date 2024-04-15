function solution(numbers) {
  const stringToNum = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let result = "";
  let currentWord = "";

  // 문자열을 순회하면서 각 문자를 currentWord에 추가하고, currentWord가 stringToNum 객체의 키로 존재할 때 숫자로 변환합니다.
  for (let i = 0; i < numbers.length; i++) {
    currentWord += numbers[i];
    // 만약 currentWord가 stringToNum 객체의 키로 존재하는 경우
    if (stringToNum.hasOwnProperty(currentWord)) {
      // 결과에 해당 숫자를 추가하고, currentWord를 초기화합니다.
      result += stringToNum[currentWord];
      currentWord = "";
    }
  }
  // 변환된 문자열을 숫자로 변환하여 반환합니다.
  return parseInt(result, 10);
}

console.log(solution("onetwothree"));
