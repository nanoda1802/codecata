/* 정수 n이 주어질 때, 
n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요. */

// n 이하의 짝수를 모두 구하고 그 값들을 배열에 넣고 배열 요소의 합을 구함?
// 아니면 짝수를 구할 때마다 누적합 변수에 더해줌? -> 이게 나을 듯?
function solution(n) {
    var answer = 0;

    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) answer += i;
    }

    return answer;
}