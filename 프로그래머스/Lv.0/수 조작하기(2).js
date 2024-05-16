const solution = (numLog) => {
  let resultIndex = numLog.map(
    (
      num,
      index,
      arr // map 에서 해당 순회 요소, 요소의 인덱스, 해당 배열도 매개변수 지정후 사용가능하다!
    ) =>
      arr[index + 1] - arr[index] === 1
        ? "w"
        : arr[index + 1] - arr[index] === -1
        ? "s"
        : arr[index + 1] - arr[index] === 10
        ? "d"
        : "a"
  );
  resultIndex.pop();
  return resultIndex.join("");
};
