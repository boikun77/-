// 문제 : 문자열 s 를 인수로 받는다고 가정하자.  그 문자열 안에는 두쌍의 "||" 이 존재한다.
// 이 두쌍의 || 사이에는 문자가 들어갈수도 있다.
// 그렇다면 받은 문자열 내에 '*' 가 몇개나 포함되는지 반환하되, 각 두개의 || 사이에 존재하는 * 은 카운트에 포함하지 않는다.
function solution(s) {
  const newArray = s.split("|"); // 이렇게 하면 split 으로 생성된 배열의 0,짝수번째 인덱스 에 포함되는 * 의 개수만 구하면 된다.
  let count = 0;
  for (let i = 0; i < newArray.length; i += 2) {
    for (let j = 0; j < newArray[i].length; j++) {
      let stingInsideArray = newArray[i];
      if (stingInsideArray[j].includes("*")) {
        // 각 newArray 의 짝수 인덱스의 문자열을 순회하며 '*' 의 중복값 누적
        count++;
      }
    }
  }
  return count; // 이떄 반환문의 위치에 따라 값이 달라지니 반환문의 위치를 잘 생각할것!!!.
}

console.log(solution("je***e|ee**es|we***we|ew*e|d**s"));

// 알고리즘 4-1 풀이 note:

// 1. 일단 문자열을 받아서 그 문자열에 특정  문자나 기호가 포함되는지의 여부와 그 개수를 파악하는 것은
// 알고리즘 1-1 에서 플어보았다. 그렇다면 여기서 추가적으로 고려해야 될 점은 || 사이에 포함된 문자열을 인식하고
// 구별하는 방법이 될거 같다.
// 2. string 메서드중 이 문제를 맞는 방법은 split 이 아닐까 한다. 특정 문자열, 즉 | 로 전체 문자열을 나눈뒤,
//
