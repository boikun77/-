const solution = (arr, queries) => {
  queries.forEach((item) => {
    [arr[item[0]], arr[item[1]]] = [arr[item[1]], arr[item[0]]]; // 배열의 디스트럭쳐링 .. 구조분해 할당 사용.
  });
  return arr;
};
