/* 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 
각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요. */

// https://school.programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
  var answer = "";

  answer = s.split(" ").map((word) => {
    let idx = 0;
    word = [...word].map((str) => {
      str = idx % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
      idx++;
      return str;
    });

    return word.join("") + " ";
  });
  let lastWord = answer[answer.length - 1];
  answer[answer.length - 1] = lastWord.substring(0, lastWord.length - 1);
  return answer.join("");
}
