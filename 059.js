// https://school.programmers.co.kr/learn/courses/30/lessons/161989

// 벽의 총 길이? 총 개수? n
// 롤러의 길이? m
// 칠해야할 벽의 인덱스 + 1들의 배열? section
// 칠해야하는 최소 횟수 answer

// 최초 롤러칠 범위 "0번 인덱스 요소 + m - 1"
// section에서 몇 번째까지 속하는지 확인 후 다 칠하기
// 그 다음 요소로 이동해 반복

/* 첫 시도 및 서른 개 중 둘에서 오버플로우 발생한 슬픈 코드 */
// 자바스크립트 es6부터 꼬리재귀 지원한다매 ㅠㅠㅠ 사실 대부분 엔진이 안 한대
// function solution(n, m, section, answer = 0) {
//   if (section.length <= 0) return answer;
//   const paintOnce = section[0] + m - 1;
//   const leftWalls = section.filter((wall) => wall > paintOnce);

//   return solution(n, m, leftWalls, answer + 1);
// }

function solution(n, m, section) {
  let answer = 0;
  let idx = 0;

  while (idx < section.length) {
    const paintOnce = section[idx] + m - 1;
    while (idx < section.length && section[idx] <= paintOnce) {
      idx++;
    }
    answer++;
  }

  return answer;
}
