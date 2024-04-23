// 문제 : 숫자로 구성된 nums 와 index 배열이 있다고 가정하자.
// 그렇다면 주어진 규칙을 따르는 target 배열을 생성하라.
// 1. 초기의 target 배열의 상태는 빈배열이다.
// 2. 그후에 target 배열에 두 배열을 순서대로 검색하며 nums[i] 의 값을 index[i] 의 인덱스에 저장하라.

function createTargetArray(nums, index) {
  const target = []; // 빈 target 배열 생성
  for (let i = 0; i < nums.length; i++) {
    target.splice(index[i], 0, nums[i]);
    // nums 의 배열을 순회하며 target 배열에 index[i]에 해당하는 인덱스에
    // 아무요소도 제거하지 않고 nums[i] 에 해당하는 값 추가. splice!
  }
  return target;
}

// 테스트
const nums = [1, 2, 3, 4, 5];
const index = [0, 1, 2, 2, 1];
console.log(createTargetArray(nums, index));

// 3-1  문제풀이 note.

// 1. 우선 처음으로 세팅 해야될 조건들을 살펴보면, target 을 빈 배열로 생성, nums 와 index 배열을 인수로 전달받는 함수 생성,
// 두 배열을 순회 하며 참조할수 있는 for 문 생성정도가 있겠다.
// 2. nums 의 배열을 순회하며 target 배열에 index[i]에 해당하는 인덱스에
//    아무요소도 제거하지 않고 nums[i] 에 해당하는 값 추가. splice! (https://www.freecodecamp.org/korean/news/javascript-splice-method/)
