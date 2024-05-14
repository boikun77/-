const solution = (numbers) => {
  const maxNum = Math.max(...numbers);
  if (numbers.filter((num) => num === maxNum).length >= 2) {
    //항상 예외처리, 다른 경우의 수를 생각하고 코드 매듭짖기.
    return maxNum ** 2;
  } else return Math.max(...numbers.filter((num) => num != maxNum)) * maxNum;
};

console.log(solution([1, -2, 3, 4, 5, 23, 351, 12, -231]));
