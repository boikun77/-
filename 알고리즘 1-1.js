// 문제 : 문자열 s 는 대문자와 소문자를 모두 포함하고 있다.
// 그렇다면.  받은 문자열에 p 의 개수와 y 의 개수가 같으면 true 를 반환하고, 그렇지 않으면 false 를 반환하는 solution 이라는 함수를 작성하라.
// 또한 p 와 y 가 둘다 없으면 true 를 반환하고,  개수를 구분할때 대소문자는 구분하지 않는다.

function solution(s) {
  s = s.toLowerCase(); // 받은 인수를 소문자로 통일시킨뒤 진행

  let pCount = 0; //각 문자마다 초기값 0 으로 설정
  let yCount = 0;

  if (s.includes("p" || "y")) {
    for (let i = 0; i < s.length; i++) {
      // p 의 개수 확인
      if (s[i] === "p") {
        pCount++;
      }
      // y 의 개수 확인
      else if (s[i] === "y") {
        yCount++;
      }
    }
    return pCount === yCount; // p 와 y 의 개수가 같은지 확인 일치하면 true, 아니면 false.
  } else {
    return true; // 인수가 p 와 y 를 둘다 포함하고 있지 않으면 true 반환.
  }
}

// 알고리즘 1-1 풀이 note.

// 문자열 s 는 대문자와 소문자를 모두 포함하고 있다.
// 그렇다면.  받은 문자열에 p 의 개수와 y 의 개수가 같으면 true 를 반환하고, 그렇지 않으면 false 를 반환하는 solution 이라는 함수를 작성하라.

// 또한 p 와 y 가 둘다 없으면 true 를 반환하고,  개수를 구분할때 대소문자는 구분하지 않는다.

// solution 함수 생성
// 문자열을 인수로 받는다.
// 문자열의 구성을 파악한다. ( P 의 개수, y 의 개수) -> 개수가 같거나 둘다 없으면 true , 틀리면 false
// 대소문자를 구분하지 않으므로 p/P , y/Y 모두 조건에 포함 시키기.

// 조건 —

// 받은 문자열의 대소문자를 구분하지 않는다고 했다. > .toLowerCase 를 써서 받은 인수를 초기에 통일시키는것도 좋을듯하다.  > s = s.toLowerCase();

// p, y가 전달 받은 인수에 존재 하는가?  > 둘다 없으면 true 반환(else) , 하나라도 존재 하면 개수 구분하는 식 구현 (if 문으로 구분)
// if 문 안에 또 다른 if 문 구현 — 개수 같으면 true 반환, 다르면 false 반환.

// 존재하는지 아닌지 구분하는법? > .indexOf 를 사용하여 리턴값이 -1 인지 확인. > .includes() 를 사용하는 편이 더 간편함.  — https://umanking.github.io/2022/07/17/javascript-string-example/
// 문자열의 내부의 특정 문자의 개수 확인 하는법??  > !!문자열은 유사 배열이므로 for 문으로 순회할 수 있다.!! 따라서 for 문으로 순회하며 배열의 요소를 찾듯이 요소의 개수를 세어주면 될거같다.
// 순회를 하며 개수를 확인할때에는 순회하며 count 를 누적해서 올려주는 것이 편하다. 따라서 각 p 와 y 마다 count 초기값을 0 으로 지정한뒤 순회하며 개수를 세어주면 되겠다. > https://pom12.tistory.com/entry/JavaScript-%EB%AC%B8%EC%9E%90%EC%97%B4%EC%97%90%EC%84%9C-%ED%8A%B9%EC%A0%95-%EB%AC%B8%EC%9E%90%EC%9D%98-%EA%B0%9C%EC%88%98%EB%A5%BC-%EC%84%B8%EB%8A%94-%EC%98%88
