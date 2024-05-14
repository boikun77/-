const solution = (my_string) =>
  my_string
    .split("")
    .filter((str) => !isNaN(str)) //문자열 타입이든 숫자 타입이든 숫자가 입력되면 isNaN() 함수는 false를 리턴, 즉 문자열내 숫자도 숫자로 취급해 따로 취득 할수 있다.  https://hianna.tistory.com/385
    .map((num) => parseInt(num))
    .sort((a, b) => a - b);
