//https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  var answer = [];
  let childNums = numbers;
  for (let n of numbers) {
    [n, ...childNums] = childNums;
    for (let m of childNums) {
      if (!answer.includes(n + m)) {
        answer.push(n + m);
      }
    }
  }
  return answer.sort((a, b) => a - b);
}

solution([2, 1, 3, 4, 1]);
solution([5, 0, 2, 7]);

// Set은 중복 요소가 없대!!
