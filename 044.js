// https://school.programmers.co.kr/learn/courses/30/lessons/86491

// size를 내리미든 오름이든 균일하게 정렬혀
// size[0] 최대 size[1] 최대값 찾어
// 둘이 곱해서 리턴혀

function solution(sizes) {
  var answer = 0;

  let widths = [];
  let heights = [];

  sizes.forEach((e) => {
    e.sort((a, b) => a - b);
    widths.push(e[0]);
    heights.push(e[1]);
  });

  answer = Math.max(...widths) * Math.max(...heights);

  return answer;
}

solution([
  [91, 50],
  [77, 51],
  [50, 1],
  [50, 50],
]);

solution([
  [14, 4],
  [19, 6],
  [6, 16],
  [18, 7],
  [7, 11],
]);

// function solution(sizes) {
//   var answer = 0;
//   let widths = [];
//   let heights = [];
//   sizes.forEach((e) => {
//     e.sort((a, b) => a - b);
//     console.log("1. 너비 높이 정렬 : ", e);
//     widths.push(e[0]);
//     heights.push(e[1]);
//     // console.log("2. 너비 잘 들어갔나? : ", widths);
//     // console.log("3. 높이 잘 들어갔나? : ", heights);
//   });
//   // console.log("4. 너비 모음 : ", widths, " / 최댓값 : ", Math.max(...widths));
//   // console.log("5. 높이 모음 : ", heights, " / 최댓값 : ", Math.max(...heights));
//   answer = Math.max(...widths) * Math.max(...heights);
//   console.log("----구분선----");
//   return answer;
// }
