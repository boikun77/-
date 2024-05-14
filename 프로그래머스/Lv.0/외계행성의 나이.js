const solution = (age) => {
  const intToString = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
    6: "g",
    7: "h",
    8: "i",
    9: "j",
  };

  const ageToSting = age.toString();
  return ageToSting
    .split("")
    .map((num) => intToString[num]) // 여기서 num 은 문자열.. intToString 의 키값도 암묵적으로 문자열로 변환되어 있음.
    .join("");
};

console.log(solution(100));
