// https://school.programmers.co.kr/learn/courses/30/lessons/12926

let alpha = "abcdefghijklmnopqrstuvwxyz"; // 97~122
let ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 65~90

for (let i = 0; i < alpha.length; i++) {
  // console.log(ALPHA.charCodeAt(i));
}

// 영소문자의 UFT-18 코드는 97~122, 대문자는 65~90
// n만큼 밀었을 때 한 바퀴 도는 경우를 어쩌지?

function solution(s, n) {
  const answer = [...s].map((e) => {
    let code = e.charCodeAt(0) + n;
    if (e===" ") {
      return e;
    } else if (e === e.toLowerCase()) {
      if (code > 122) return String.fromCharCode(97 + code - 122 - 1);
    } else if (e === e.toUpperCase()) {
      if (code > 90) return String.fromCharCode(65 + code - 90 - 1);
    }
    return String.fromCharCode(code);
  });
  return answer.join("");
}
