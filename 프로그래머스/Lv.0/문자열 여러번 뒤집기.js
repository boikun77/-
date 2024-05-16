const solution = (my_string, queries) => {
  const stirngArray = my_string.split("");
  queries.forEach((query) =>
    stirngArray.splice(
      query[0],
      query[1] - query[0] + 1,
      ...stirngArray.slice(query[0], query[1] + 1).reverse()
      //스프레드 문법(...)이 stirngArray에 먼저 적용되고,
      // slice 메서드가 적용되지 않는 이유는 JavaScript의 문법과 평가 순서 때문 :
      // 스프레드 문법은 배열이나 객체 리터럴, 함수 호출 시에 사용되며, 메서드 체이닝의 일부로 사용되지 않습니다.
    )
  );
  return stirngArray.join("");
};
