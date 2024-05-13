const solution = (n) => {
  let oddNumbers = [];
  for (let i = 1; i <= n; i += 2) {
    oddNumbers.push(i);
  }
  return oddNumbers;
};

console.log(solution(12));

// 1차 문제풀이. for 문 말고 다르게 푸는 방법??
