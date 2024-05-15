const solution = (s) => {
  const splitArray = s.split(" ");
  console.log(splitArray);

  let count = 0;
  for (let i = 0; i < splitArray.length; i++) {
    if (!isNaN(splitArray[i])) {
      count += parseInt(splitArray[i]);
    } else {
      count -= parseInt(splitArray[i - 1]);
    }
  }
  return count;
};

console.log(solution("1 2 Z 3"));
