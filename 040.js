/* 자연수 n이 매개변수로 주어집니다. 
n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요. */
// https://school.programmers.co.kr/learn/courses/30/lessons/68935

// 진행 중!!

function solution(n) {
  let arr = [];
  let answer = 0;

  while (n % 3 === 0) {
    arr.push(n % 3);
    n = Math.trunc(n / 3);
  }
  // 이미 뒤집어져서 들어감
  arr.map((el) => {
    let i = arr.length - 1;
    let el10 = el * 3 ** i--;
    answer += el10;
    return el10;
  });

  return answer;
}
