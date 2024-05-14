const solution = (num_list, n) => {
  let acc = [];

  for (let i = 0; i < num_list.length; i += n) {
    acc.push(num_list.slice(i, i + n)); // 스프레드 문법은 원본 배열을 변경하지 않으므로 여기서는 사용하기 까다롭다.
  }
  return acc;
};

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2));
