const solution = (
  my_string,
  indices // 안보고 다시 풀어보기
) => [...my_string].filter((item, index) => !indices.includes(index)).join(""); // 어떤 두 주체의 상관 관계를 이용해 반환값을 내야 할떄는 어느것을 기준으로, 또 어느것이 주체가 될지 하나씩 설계하면서 코드 작성하기.
// console.log(solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3]));
