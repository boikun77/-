const solution = (my_string, parts) => {
  let strArray = parts.flatMap(
    (
      item,
      index //flatMap 메서드는 map의 반환 결과물에 flat() 을 적용한 것과 같다.
    ) => my_string[index].split("").slice(item[0], item[1] + 1)
  );
  return strArray.join("");
};
