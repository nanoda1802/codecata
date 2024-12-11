//https://school.programmers.co.kr/learn/courses/30/lessons/81301

/* 영단어 숫자 비교용 객체 */
const table = {
  zero: "0",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

/* 영단어 배열 */
const spells = Object.keys(table);

/* 함수 */
function solution(s) {
  // 변수 모음
  let answer = [];
  const spreads = [...s];
  let word = "";
  // [1] 숫자와 영단어 깔끔하게 분리한 요소들 갖는 배열 1차 제작
  const arr = spreads.map((e, i) => {
    let result = e;
    // 마지막 글자는 조작 X (안하면 빈문자열 추가로 생김)
    if (i === spreads.length - 1) return e;
    // [1-1] 현재 글자가 숫자면 쉼표 붙이기
    if (!isNaN(+e)) {
      result = `${e},`;
      // [1-2] 숫자가 아닌 경우
    } else {
      // [1-2 a] 다음 글자가 숫자면 쉼표 붙이기
      if (!isNaN(spreads[i + 1])) {
        result = `${e},`;
        word = ""; // 영단어 초기화
        // [1-2 b] 다음 글자도 문자면 영단어 만들기
      } else {
        word = `${word}${e}`; // 한 글자씩 한땀한땀
        // 영단어 완성 시 쉼표 붙이기
        if (spells.includes(word)) {
          result = `${e},`;
          word = ""; // 영단어 초기화
        }
      }
    }
    return result;
  });
  // [2] 한 글자씩인 배열 요소들을 숫자 하나, 영단어 하나로 가공
  const newArr = arr.join("").split(",");
  // [3] 영단어들을 대응되는 숫자로 변환
  answer = newArr.map((e) => {
    return isNaN(+e) ? table[e] : e;
  });
  // [4] 배열을 문자열로 바꾼 후, 숫자로 최종 변환해 반환
  return +answer.join("");
}

solution("one4seveneight");
solution("23four5six7");
solution("2three45sixseven");
solution("123");

// 현재 인덱스가 숫자면 쉼표 찍고, 글잔데 다음 인덱스가 숫자면 쉼표 찍음
// 이거 안 되네 단어랑 단어 구분을 못 혀
// NaN은 falsy하다!! isNaN에 들어간 문자열은 자동 형변환이 되나본데

/* 실패 : 단어랑 단어 구분도 못 하고, 죄다 쉼표 찍고 난리 났음 */
// function solution(s) {
//   var answer = 0;
//   const str = [...s];

//   const newStr = str.map((e, i) => {
//     console.log("!!숫자니 영어니!! : ", e);
//     if (!isNaN(e)) {
//       console.log("!!조건1체크!!");
//       return `${e},`;
//     } else {
//       console.log("!!조건2체크!!");
//       if (!isNaN(str[i + 1])) {
//         console.log("!!조건3체크!!");
//         return `${e},`;
//       } else {
//         return e;
//       }
//     }
//   });
//   console.log("!!쉼표 잘 들어갔니!! : ", newStr);

//   answer = newStr
//     .join("")
//     .split(",")
//     .map((e) => {
//       if (isNaN(e)) table[e];
//     });
//   console.log("!!구분 잘 됐니!! : ", answer);

//   return +answer.join("");
// }
