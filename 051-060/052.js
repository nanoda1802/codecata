// https://school.programmers.co.kr/learn/courses/30/lessons/132267
function solution(a, b, n) {
  var answer = 0;

  let remainder = n % a;
  let newCoke = Math.trunc(n / a) * b;
  let prevCoke = n;

  while (newCoke + remainder >= a) {
    answer += newCoke;
    prevCoke = newCoke;
    if (newCoke + remainder < a) break;
    newCoke = Math.trunc((newCoke + remainder) / a) * b;
    remainder = (prevCoke + remainder) % a;
  }
  return answer + newCoke;
}

// n개를 준다! a로 나눈다! 새로 받은 콜라는 그 몫에 b를 곱한 것,
// 그리고 나머지도 생겼겄지
// 몫에 b 곱한 것 + 나머지를 또 a로 나눈다!
// 몫이 0 또는 1, 나머지가 0이 될 때까지 반복한다!

solution(3, 1, 20);
