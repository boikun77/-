const solution = (arr, queries) => {
  let result = [];
  queries.forEach((item) => {
    let optionalArr = [];
    for (let i = item[0]; i <= item[1]; i++) {
      if (arr[i] > item[2]) {
        optionalArr.push(arr[i]);
      }
    }
    optionalArr.length === 0
      ? result.push(-1)
      : result.push(Math.min(...optionalArr));
  });
  return result;
};
