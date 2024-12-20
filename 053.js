// https://school.programmers.co.kr/learn/courses/30/lessons/138477

// 이ㅓ 와너ㅓㄴ 릳
// score를 순회해야겠지
// 그럼서 top K 배열에 값을 넣고 빼고
// splice?
// k-1 번째 요소까지는 그냥 넣고 k번째부터는
// 순회요소와 top K 배열요소 비교해 순호요소가 더 크면 최약체와 교체
// 그 담에 top K 중에 젤 못 한 점수 answer에 push

function solution(k, score) {
  var answer = [];

  const topK = [];
  let lowest = 0;

  score.forEach((e, i) => {
    if (i <= k - 1) {
      topK.push(e);
    } else {
      lowest = Math.min(...topK);
      if (e > lowest) {
        topK[topK.indexOf(lowest)] = e;
      }
    }
    lowest = Math.min(...topK);
    answer.push(lowest);
  });

  return answer;
}

// reduce하면서 값도 바로 바꾸고 그럴 수 없나????
// ??????? 이게 왜 됨???? ?????????????????????????
// 왜 통과?????????? ???????????????
// 뭐가 더 빠른지 궁금한뎅;

// lowest = topK.reduce((min, cur) => {
//   return min > cur ? cur : min;
// });
