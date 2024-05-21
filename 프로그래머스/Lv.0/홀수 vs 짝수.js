const solution = (num_list) => {
  let sumOfOdd = num_list.reduce(
    (acc, num, index) => (index % 2 === 0 ? acc + num : acc),
    0
  );
  let sumOfEven = num_list.reduce(
    (acc, num, index) => (index % 2 === 1 ? acc + num : acc),
    0
  );
  return sumOfOdd > sumOfEven
    ? sumOfOdd !== sumOfEven
      ? sumOfOdd
      : sumOfOdd
    : sumOfEven !== sumOfOdd
    ? sumOfEven
    : sumOfEven;
};
