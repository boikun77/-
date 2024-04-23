// 주어진 단어 배열에서 's'로 시작하는 단어만 필터링하는 함수를 작성하세요.
const words = ["sky", "rock", "forest", "squirrel", "dirt"];
const sWords = (words) => words.filter((word) => word.startsWith("s")); //startsWith()/endsWith() string 메서드 기억하기
console.log(sWords(words)); // ['sky', 'squirrel']
