//https://school.programmers.co.kr/learn/courses/30/lessons/142086

// s를 순회혀
// 요소마다 자기를 indexOf()해
// 자기와 인덱스 값이 같으면 -1
// 다르면 자기 인덱스 - 찾은 인덱스 + 1
// answer 배열에 넣어
// => 얘는 실패

// s를 순회혀
// 매 요소마다 자기 기준으로 split해서 앞에만 가져와
// split은 하면 안 된다 중복 글자에서 다 나눠서...
// slice로 하자!
// 그거 배열로 만들어
// 그 배열에서 findIndex() 하고, 콜백함수에서 중복 개수 몇 갠지에 따라 분기 나누자
// 못 찾으면 알아서 -1 반환하고
// 중복 한 개면 정상적으로 인덱스 뽑고
// 중복이 여러 개면 앞에 놈들은 날리고 젤 마지막 녀석 뽑는 건데...

function solution(s) {
  var answer = [];
  [...s].forEach((el, idx, arr) => {
    let sameNumsIdx = [];
    let findIdx = arr.indexOf(el);
    while (findIdx !== -1) {
      sameNumsIdx.push(findIdx);
      findIdx = arr.indexOf(el, findIdx + 1);
    }
    const myIdx = sameNumsIdx.indexOf(idx) - 1;
    myIdx !== -1 ? answer.push(idx - sameNumsIdx[myIdx]) : answer.push(-1);
  });
  return answer;
}

// 와 lastIndexOf를 왜 생각 못 했지!!!!!!
// 그럼 초안처럼 slice 갈기고 쉽게 해결되는 건데!!!!

solution("banana");
solution("foobar");
