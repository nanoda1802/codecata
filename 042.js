/* 한국중학교에 다니는 학생들은 각자 정수 번호를 갖고 있습니다. 

이 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사라고 합니다. 

예를 들어, 5명의 학생이 있고, 각각의 정수 번호가 순서대로 -2, 3, 0, 2, -5일 때, 
첫 번째, 세 번째, 네 번째 학생의 정수 번호를 더하면 0이므로 세 학생은 삼총사입니다. 
또한, 두 번째, 네 번째, 다섯 번째 학생의 정수 번호를 더해도 0이므로 세 학생도 삼총사입니다. 
따라서 이 경우 한국중학교에서는 두 가지 방법으로 삼총사를 만들 수 있습니다.
한국중학교 학생들의 번호를 나타내는 정수 배열 number가 매개변수로 주어질 때, 
학생들 중 삼총사를 만들 수 있는 방법의 수를 return 하도록 solution 함수를 완성하세요. */

// https://school.programmers.co.kr/learn/courses/30/lessons/131705

// 배열을 순회를 혀
// 자기 제외하고 자기 보다 큰 인덱스 값만 남겨 새 배열 만드러
// 그 놈을 또 순회를 혀
// 자기 제외하고 자기 보다 큰 인덱스 값만 남겨 새 배열 만드러
// 자기1 자기2 합이랑 막내 배열 값들 비교해서 0인 애들만 남겨

function solution(number) {
  var answer = 0;
  let secondArr = number;
  for (let num1 of number) {
    [num1, ...secondArr] = secondArr;
    let thirdArr = secondArr;
    for (let num2 of secondArr) {
      [num2, ...thirdArr] = thirdArr;
      for (let num3 of thirdArr) {
        if (num1 + num2 + num3 === 0) {
          answer++;
        }
      }
    }
  }
  return answer;
}

solution([-2, 3, 0, 2, -5]);
