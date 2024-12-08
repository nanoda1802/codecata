/* 자연수 n이 매개변수로 주어집니다. 
n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요. */
// https://school.programmers.co.kr/learn/courses/30/lessons/68935

// 진행 중!!

function solution(n) {
  var answer = 0;

  answer = n.toString(3);
  answer = answer.split("").reverse().join("");
  answer = parseInt(answer, 3).toString(10);

  return +answer;
}
