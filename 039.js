/* 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 
배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 
예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다. */
// https://school.programmers.co.kr/learn/courses/30/lessons/12940

function solution(n, m) {
  var answer = [];
  let a = 0;
  let mul = n * m;
  if (n > m) {
    while (true) {
      a = n % m;
      n = m;
      m = a;
      if (n % m === 0) break;
    }
    answer.push(n);
    answer.push(mul / n);
  } else if (n < m) {
    while (true) {
      a = m % n;
      m = n;
      n = a;
      if (n % m === 0) break;
    }
    answer.push(m);
    answer.push(mul / m);
  } else if (n === m) {
    answer.push(n);
    answer.push(m);
  }

  return answer;
}

solution(3, 12);
