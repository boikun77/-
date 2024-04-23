// 문자열 배열의 각 요소에 느낌표를 추가하는 함수를 작성하세요.
const words = ["hello", "world", "example"];
const addExclamation = (words) => words.map((word) => (word += "!"));
console.log(addExclamation(words)); // ['hello!', 'world!', 'example!']
