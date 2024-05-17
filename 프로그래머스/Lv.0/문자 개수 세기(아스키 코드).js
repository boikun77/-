function solution(my_string) {
  const counts = new Array(52).fill(0);

  for (let char of my_string) {
    // 대문자의 경우
    if (char >= "A" && char <= "Z") {
      const index = char.charCodeAt(0) - "A".charCodeAt(0);
      counts[index]++;
    }
    // 소문자의 경우
    else if (char >= "a" && char <= "z") {
      const index = char.charCodeAt(0) - "a".charCodeAt(0) + 26;
      counts[index]++;
    }
  }

  return counts;
}
console.log(solution("Programmers"));

// console.log(solution("ihrhbakrfpndopljhygc", 4, 2));
