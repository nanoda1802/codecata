// https://school.programmers.co.kr/learn/courses/30/lessons/12977

// n개 중 3 개를 고르는 경우의 수
// 소수 판별 알고리즘

// 내가 알기로 소수는 1과 자기 자신만을 약수로 갖는 수
// 즉 나 이외의 값으로 나누어 떨어지지 않는 수....

function solution(nums) {
  let answer = 0;

  const isPrime = (N) => {
    for (let i = 2; i <= Math.sqrt(N); i++) {
      if (N % i === 0) {
        return 0;
      }
    }
    return 1;
  };

  const combinations = [];

  const nCm = (n, combi) => {
    if (combi.length === 3) {
      combinations.push([...combi]);
      return;
    }

    for (let i = n; i < nums.length; i++) {
      combi.push(nums[i]);
      nCm(i + 1, combi);
      combi.pop();
    }
  };

  nCm(0, []);

  for (let combi of combinations) {
    answer += isPrime(combi[0] + combi[1] + combi[2]);
  }

  return answer;
}

solution([1, 2, 3, 4]);

/* 예시 알고리즘 */
// function combinations(arr, m) {
//   const result = [];

//   function helper(start, chosen) {
//     if (chosen.length === m) {
//       result.push([...chosen]); // 조합을 결과 배열에 추가
//       return;
//     }

//     for (let i = start; i < arr.length; i++) {
//       chosen.push(arr[i]); // 현재 요소 추가
//       helper(i + 1, chosen); // 다음 요소 탐색
//       chosen.pop(); // 백트래킹
//     }
//   }

//   helper(0, []);

//   return result;
// }

// const arr = [1, 2, 3, 4, 5, 6];
// const m = 3;
// const result = combinations(arr, m);
// console.log(result);
