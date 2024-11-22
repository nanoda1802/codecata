/* 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 
약수의 개수가 짝수인 수는 더하고, 
약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요. */
function solution(left, right) {
  var answer = 0;
  let cnt = 0;
  for (; left <= right; left++) {
    cnt = 0;
    for (let i = 1; i <= left; i++) {
      left % i === 0 ? (cnt += 1) : cnt;
    }
    cnt % 2 === 0 ? (answer += left) : (answer -= left);
  }
  return answer;
}

// left부터 right까지의 모든 수 구하고

// 각각의 약수의 개수 구하고
// 짝수면 answer에 더하고, 홀수면 빼기
