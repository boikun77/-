const solution = (my_string, overwrite_string, s) => {
  const orginalArray = my_string.split("");
  orginalArray.splice(
    // !! splice 메서드는 바인딩 된 원본 배열을 변경한다는것 주의하기 . 반환값은 제거한 배열 요소.
    s,
    overwrite_string.length,
    ...overwrite_string.split("")
  );

  return orginalArray.join("");
};

console.log(solution("He11oWor1d", "lloWorl", 2));
