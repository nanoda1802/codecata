//https://school.programmers.co.kr/learn/courses/30/lessons/77484

// lottos의 0의 개수 n
// lottos에서 0을 필터링하고 비교해보기 -> 일치하는 개수 m
// 생각해보니 굳이 필터링할 필요가 있나
// 답은 [m+n, m], 그런데 m이 0이면 1로 바꾸기
// 그 담에 7에서 빼줘야 등수가 나와따

function solution(lottos, win_nums) {
  let result = [];
  let zeroCount = 0;
  let validNumCount = 0;

  for (let num of lottos) {
    if (num === 0) {
      zeroCount += 1;
    } else if (win_nums.includes(num)) {
      validNumCount += 1;
    }
  }

  result.push(validNumCount + zeroCount || 1, validNumCount || 1);

  return result.map((num) => 7 - num);
}

console.log(solution([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]));
