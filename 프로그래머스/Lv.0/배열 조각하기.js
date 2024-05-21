const solution = (arr, query) => {
  for (let i = 1; i < query.length; i++) {
    if (i % 2 === 0) {
      for (let j = arr.length; j > query[i] + 1; j--) {
        arr.pop();
      }
    } else {
      for (let j = 0; j < query[i]; j++) {
        arr.shift();
      }
    }
  }
  return arr;
};
