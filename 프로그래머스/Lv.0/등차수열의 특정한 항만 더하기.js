const solution = (a, d, included) => {
  let array = [a];
  let count = 0;
  for (let i = 1; i < included.length; i++) {
    array.push(array[i - 1] + d);
  }
  console.log(array);
  for (let i = 0; i < included.length; i++) {
    if (included[i] === true) {
      // 불리언 값은 문자열이 아닌 불리언 값 그 자체! 따라서 "true" 와 비교하면 안된다.
      count += array[i]; // "included[i]가 i + 1항을 의미할 때" 라는 설명을 혼돈 하면 안된다.
    }
  }
  console.log(count);
  return count;
};

console.log(solution(3, 4, [true, false, false, true, true]));
