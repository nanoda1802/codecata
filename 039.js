/* 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 
배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 
예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다. */
// https://school.programmers.co.kr/learn/courses/30/lessons/12940

// 해결중!!!!!!!!!



function solution(n, m) {
  var answer = [];

  const getGCD = (x, y) => {
    let num1 = x,
      num2 = y;
    let r = 1;
  
    while (true) {
      r = num1 % num2;
      if (r === 0) {
        return num2;
      } else {
        num1 = num2;
        num2 = r;
      }
    }
  };

  if (n === m) {
    answer = [n, m];
  } else if (n > m) {
    let gcd = getGCD(n, m);
    answer = [gcd, (n * m) / gcd];
  } else if (n < m) {
    let gcd = getGCD(m, n);
    answer = [gcd, (n * m) / gcd];
  }

  return answer;
}
