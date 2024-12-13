//https://school.programmers.co.kr/learn/courses/30/lessons/12915
function solution(strings, n) {
  var answer = [];

  const newStrings = strings.sort(function (a, b) {
    // 글자 비교를 한 값을 담을 변수 설정, 값은 글자가 다르면 1 또는 -1, 같으면 0
    let compare = a[n].localeCompare(b[n]);
    // n번째 글자가 다르면 n번째 글자들 비교 기준으로 재정렬하고
    if (compare !== 0) {
      return compare;
      // n번째 글자가 같으면 문자열을 통째로 비교한 후 재정렬
    } else {
      compare = a.localeCompare(b);
      return compare;
    }
  });
  // 조건에 맞게 정렬한 새 배열을 answer에 넣고, 출력
  answer = [...newStrings];
  return answer;
}
