/* 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 
단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다. */
function solution(s) {
  var answer = "";
  if (s.length % 2 === 0) {
    let even_center = s.length / 2;
    answer = s.slice(even_center - 1, even_center + 1);
  } else {
    let odd_center = (s.length - 1) / 2;
    answer = s.slice(odd_center, odd_center + 1);
  }
  return answer;
}
