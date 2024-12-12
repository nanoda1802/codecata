//https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  var answer = [];
  for (let e of commands) {
    const start = e[0] - 1;
    const end = e[1];
    const targetIndex = e[2] - 1;
    const newArr = array.slice(start, end).sort((a, b) => a - b);
    answer.push(newArr[targetIndex]);
  }
  return answer;
}

// 왜 갑자기 쉬워짐?
