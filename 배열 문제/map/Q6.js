// 책 제목의 각 단어의 첫 글자를 모아서 새로운 문자열을 만드는 함수를 작성하세요.
const books = ["Game of Thrones", "Harry Potter", "Lord of the Rings"];
const initials = (books) =>
  books
    .map((book) => book.split(" "))
    .map((word) => word.map((letter) => letter[0]).join(""));
console.log(initials(books)); // ['GoT', 'HP', 'LotR']

// words 결과값.

//  [
//    ["Game", "of", "Thrones"],
//    ["Harry", "Potter"],
//    ["Lord", "of", "the", "Rings"],
//  ];

// words.map((word) => word.map((letter) => letter[0])  결과값.

//   [ 'G,o,T', 'H,P', 'L,o,t,R' ]

//  words.map((word) => word.map((letter) => letter[0]).join("")) 결과값

//   [ 'GoT', 'HP', 'LotR' ]
