// https://school.programmers.co.kr/learn/courses/30/lessons/135808

// score 배열에서 m개 씩 뽑아 최대 이익을 내는 법
// 최대한 높은 점수로 채우고 낮은 점수는 버려지도록 또는 낮은 점수끼리 모이도록
// score를 내림차순으로 정렬
// 앞에서 m개 빼고 그 m개 중 최소 가격 곱해서 박스 판매액 구하고
// 재귀시키고, 함수 시작 부분에 score.length가 m보다 작으면 리턴

/* 수정 예정 */
function solution(k, m, score) {
  if (score.length < m) return 0;

  score.sort((a, b) => b - a);

  const box = score.splice(0, m);
  const price = box.length * Math.min(...box);

  return price + solution(k, m, score);
}

/* 일단 정답 */
function solution(k, m, score) {
  score.sort((a, b) => b - a);

  let totalProfit = 0;

  for (let i = 0; i < score.length; i += m) {
    if (i + m > score.length) break;

    const minScore = score[i + m - 1];
    totalProfit += minScore * m;
  }

  return totalProfit;
}
