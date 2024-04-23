// 문자열의 길이가 5 이상인 항목만 필터링하는 함수를 작성하세요.
const strings = ["react", "js", "node", "express"];
const longStrings = (strings) => strings.filter((string) => string.length >= 5);
console.log(longStrings(strings)); // ['react', 'node', 'express']
