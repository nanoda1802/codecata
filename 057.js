// https://school.programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
  const markTest = (pattern) => {
    let score = 0;
    let ex = pattern.slice(0, answers.length % pattern.length);

    if (answers.length >= pattern.length) {
      const repeat = Math.floor(answers.length / pattern.length);
      for (let i = 0; i < repeat; i++) {
        ex = [...pattern, ...ex];
      }
    }

    for (let num = 0; num < answers.length; num++) {
      if (answers[num] === ex[num]) score++;
    }

    return score;
  };

  const scores = [markTest([1, 2, 3, 4, 5]), markTest([2, 1, 2, 3, 2, 4, 2, 5]), markTest([3, 3, 1, 1, 2, 2, 4, 4, 5, 5])];
  const highScore = Math.max(...scores);

  const answer = scores.map((e, i) => (e === highScore ? i + 1 : 0)).filter((e) => e);

  return answer;
}

/* 실패작 - repeat이 쓰고 싶어서 억지로 문자열과 배열을 왔다갔다 했더니만... */
// function solution(answers) {
//   const markTest = (pattern) => {
//     let score = 0;
//     const count = answers.length;
//     let result = pattern.slice(0, count % pattern.length);
//     console.log(result);
//     if (count >= pattern.length) {
//       result += pattern.repeat(Math.trunc(count / pattern.length));
//       console.log(result);
//     }
//     answers.forEach((p, i) => {
//       if (`${p}` === result[i]) score++;
//     });
//     return score;
//   };

//   const scores = [markTest("12345"), markTest("21232425"), markTest("3311224455")];
//   const max = Math.max(...scores);

//   const rank = scores
//     .map((e, i) => {
//       if (e === max) {
//         return i + 1;
//       } else {
//         return false;
//       }
//     })
//     .filter((e) => e);

//   return rank;
// }
