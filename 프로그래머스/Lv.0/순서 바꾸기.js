const solution = (num_list, n) => {
  const slicedArr = num_list.slice(n);
  const slicedArr2 = num_list.slice(0, n);
  return [...slicedArr, ...slicedArr2];
};
