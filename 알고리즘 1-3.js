// 문제: num 라는 숫자열로 구성된 배열을 인수로 전달받은뒤, 임의의 숫자 i 와 j를 가정하고 num[i] 와 num[j] 의 값이 같고, i < j 인 경우를 'good pair' 라고 정의한다.
// 이때 인수로 전달 받은 배열내에서 'good pair' 가 나올수 있는 경우의 수를 반환하시오.

function solution(nums) {
  // let i;
  // let j;

  let Pcount = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] == nums[j] && i < j) {
        Pcount++;
      }
    }
  }
  return Pcount;
}

console.log(solution([1, 2, 3, 1, 1, 3]));
console.log(solution([1, 1, 1, 1]));

// 알고리즘 1-3 풀이 note.

// 1.숫자열로 구성된 배열을 인수로 받는 solution 이라는 함수 생성
// 2.i 와 j 변수 선언. > for 문에서 각 변수를 선언하므로 굳이 따로 선언 해줄 필요 없었다.
// 3.함수 내부에 good pair 를 생성하는 조건문 (for 문이 될듯 하다.) 작성 : 조건은 문제에서 대부분 주어짐.
// 4. 우선 i 와 j 의 범위는 0 부터 배열의 길이 일것이다.  그럼 i 가 0 이고 j 가 [0 ~ nums.length] 범위까지 증가하며 조건을 확인할수 있게 하고,
// 이 과정을 i 가 nums.length 까지 증가하며 반복될수 있도록 반복문 생성. 즉 for 문을 중첩해서 사용하면 두 숫자의 경우의 수를 모두 순회 할수 있다.
// 그리고 최종적으로 if 문을 사용하여 조건에 맞으면 Pcount++ 를 실행할수 있게 설계하면 최종적으로 원하는 'good pair ' 의 개수를 구할수 있다.
// 5.잊지말고 함수 상단에 good pair 의 개수를 순회하며 셀수 있게 Pcount 생성.
// 6.for 문이 종료되면 최종 Pcount 반환.
