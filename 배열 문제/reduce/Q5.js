// 문자열 배열을 하나의 문자열로 결합하는 함수를 작성하세요.
const words = ["Hello", "world", "this", "is", "great"];
const sentence = (words) => words.reduce((acc, cur) => acc + " " + cur);
console.log(sentence(words)); // 'Hello world this is great'
