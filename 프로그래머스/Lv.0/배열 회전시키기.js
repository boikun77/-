const solution = (numbers, direction) => {
  if (direction === "right") {
    numbers.unshift(numbers.pop());
  } else if (direction === "left") {
    numbers.push(numbers.shift());
  }
  return numbers;
};

console.log(solution([1, 2, 3], "right"));
