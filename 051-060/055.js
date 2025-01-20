// https://school.programmers.co.kr/learn/courses/30/lessons/159994

// goal을 순회 혀
// 같은 index로 두 뭉치 요소도 체크
// 예를 들어 goal[0]이 cards1[0]이랑 cards2[0] 둘 중 하나랑 같으면 통과
// 통과 못 하면 바로 NO
// 만약 전자랑 같다면 index1을 증가시켜서 또 비교
// 그렇게 다 비교 후 남은 카드가 없다면 YES
// 남는 카드가 있으면 NO

function solution(cards1, cards2, goal) {
  var answer = "";
  let idx1 = 0;
  let idx2 = 0;
  for (let word of goal) {
    let compare1 = word === cards1[idx1];
    let compare2 = word === cards2[idx2];
    if (compare1) {
      idx1 += 1;
      continue;
    } else if (compare2) {
      idx2 += 1;
      continue;
    } else {
      answer = "No";
      break;
    }
  }
  answer = answer !== "No" ? "Yes" : answer;
  return answer;
}

console.log(
  solution(
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
    ["string", "or", "integer"],
    ["string", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
  )
);
