// 문제 : 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다.
// 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

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

  let result = ""; // 카운트를 하기위해 빈 문자열 생성
  let currentWord = ""; // for 문을 순회하며 인덱스로 인수를 검사해야 함으로 stringToNum 안의 프로퍼티 와 일치할때 까지 한글자씩 스택을 해주어 단어로 만들어야 한다.

  for (let i = 0; i < numbers.length; i++) {
    currentWord += numbers[i]; // 단어, 즉 숫자를 가리키는 단어가 될때까지 인덱스의 문자 누적.
    if (stringToNum.hasOwnProperty(currentWord)) {
      // 그 후에 누적된 currentWord 가 식별할수 있는 숫자단어가 되면 result 에 프로퍼티 값 추가.
      result += stringToNum[currentWord];
      currentWord = ""; // result 에 추가후 다시 단어를 만들기 위해 초기화.
    }
  }
  return parseInt(result, 10); // 완성된 result 값을 10 진법의 숫자로 변환.
}

console.log(solution("onetwothree")); // 위 과정을 거치면 문자열 사이에 공백이 없어도 문자를 식별해 결과값 생성 가능.

// 알고리즘 2-4 풀이 note.

// 1. 인수로 전달받은 문자열을 숫자로 바꿔 출력하는게 목표이다.
// 2. 그렇다면 문자열로 쓰여진 숫자표기를 어떻게 진짜 숫자 데이터 타입으로 변환할수 있을까??
// 3. 따로 변경해주는 메서드는 찾아보니 없는것 같다. 그럼 1-10 까지 지정을 해주어야겠다.
// 4. 1 대 1 로 값을 지정해주는 방식이 필요하니 객체, 즉 키와 값으로 지정해서 숫자의 목록을 만들면 좋을것 같다.
// 5. 그 후 인수로 받은 문자열, numbers 에 생성한 객체의 키 가 존재하면 그 키를 값으로 바꿔주는 함수를 생성한다.
// 6. 문자열 내부의 특정 요소의 유무를 확인하려면 .includes 를 사용해야하나?? 여기서 깨닳은점 한가지- 문자열은 유사배열 객체이므로 string,배열,객체 메서드를 모두 사용할수 있다.
// 따라서 문제에 따라 어떠한 메서드를 적용해 사용할 것인지를 먼저 생각 하는것이 문제 해결 방법의 가장 기초이자 중요한 사항인것 같다.
// 여기서는 생성한 stringToNum 객체의 프로퍼티의 존재 유무를 따져야 하므로 'hasOwnProperty' 를 써줘도 괜찮을것 같다.
// 7. 문자열의 인덱스를 순회하며 확인을 한뒤 반환값을 도출해야 하니 for 문과 count; 즉, 누적해서 결과물을 더하는 공간이 필요할 것이다.
