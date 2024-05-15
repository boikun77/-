// const solution = (dots) => {
//   const flatArray = dots.flat();
//   return (
//     Math.abs(flatArray[2] - flatArray[0]) *
//     Math.abs(flatArray[5] - flatArray[3])
//   );
// };


function solution(dots) {
  // 각 점의 x, y 좌표를 따로 저장
  const x = dots.map(point => point[0]);
  const y = dots.map(point => point[1]);
  
  // 변의 길이 계산
  const width = Math.max(...x) - Math.min(...x);
  const height = Math.max(...y) - Math.min(...y);
  
  // 직사각형의 넓이 계산
  const area = width * height;
  
  return area;   // 올바른 풀이
}
