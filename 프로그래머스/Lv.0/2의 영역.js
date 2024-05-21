const solution = (arr) => {
  if (arr.includes(2)) {
    for (let i = arr.length - 1; arr[i] !== 2; i--) {
      arr.pop();
    }
    const firstIndex = arr.findIndex((num) => num === 2);
    return arr.slice(firstIndex);
  } else {
    return [-1];
  }
};

console.log(solution([1, 2, 1, 4, 5, 2, 9]));

// 이렇게 푸는게 맞는지 모르겠다.
