/* 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 
모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다. */

// a부터 b까지 1씩 더해가며 누적합에 더햄

function solution(a, b) {
  var answer = 0;
  let bigNum = a >= b ? a : b;
  let smallNum = a === bigNum ? b : a;
  do {
    answer += smallNum++;
  } while (smallNum <= bigNum);

  return answer;
}
