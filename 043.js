/* 숫자로 이루어진 문자열 t와 p가 주어질 때, t에서 p와 길이가 같은 부분문자열 중에서, 
이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return하는 함수 solution을 완성하세요.
예를 들어, t="3141592"이고 p="271" 인 경우, t의 길이가 3인 부분 문자열은 314, 141, 415, 159, 592입니다. 
이 문자열이 나타내는 수 중 271보다 작거나 같은 수는 141, 159 2개 입니다. */

// https://school.programmers.co.kr/learn/courses/30/lessons/147355

// t에서 p의길이만큼 뽑는 경우의 수 전부 뽑고
// p랑 다 비교해보고 작거나 같으면 체크

// t를 순회혀 스트링도 유사배열이라 가능
// 순회 요소부터 p의 길이만큼의 숫자 뽑아서 배열에 넣어
// 그 배열 요소 전부 p랑 크기 비교혀
// 작거나 같으면 answer에 1 더해

function solution(t, p) {
  let nums = [];
  for (let i = 0; i < t.length - p.length + 1; i++) {
    let num = t[i];
    for (let j = 0; j < p.length - 1; j++) {
      num += t[i + 1 + j];
    }
    nums.push(num);
  }
  const newNums = nums.filter((e) => +e <= +p);
  return newNums.length;
}

// 되자나... 하지만 정작 안 씀 ㅋㅋ
console.log([..."abcdefg"]);

solution("500220839878", "7");
