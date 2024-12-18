/* 정수 n을 입력받아 n의 약수를 모두 더한 값을 
리턴하는 함수, solution을 완성해주세요. */
function solution(n) {
  var answer = 0;
  let divisor = 0;
  while (divisor <= n) {
    n % divisor === 0 ? (answer += divisor) : answer;
    divisor++;
  }
  return answer;
}
