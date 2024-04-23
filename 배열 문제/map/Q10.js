// 문자열 배열을 Date 객체로 변환하는 함수를 작성하세요.
const dates = ["2020-01-01", "2020-02-01", "2020-03-01"];
const dateObjects = (dates) => dates.map((date) => "Date " + date);
console.log(dateObjects(dates)); // [Date 2020-01-01, Date 2020-02-01, Date 2020-03-01]
