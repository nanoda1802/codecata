// https://school.programmers.co.kr/learn/courses/30/lessons/134240

// 문자열을 만들어보아요!
// 각 음식 개수가 홀수면 짝수로 만들고, 그 절반만큼 음식을 반복해여!
// 그리고 만든 음식 배열과 0과 뒤집은 배열을 합쳐요! 완성!
function solution(food) {
  var answer = "";
  let newArr = [];

  food.shift();
  const arr = food.map((e) => {
    if (e % 2 === 0) {
      return e / 2;
    } else {
      return (e - 1) / 2;
    }
  });

  for (let i = 1; i <= arr.length; i++) {
    for (let j = 0; j < arr[i - 1]; j++) {
      newArr.push(i);
    }
  }

  answer = [...newArr, 0, ...newArr.reverse()].join("");

  return answer;
}

solution([1, 3, 4, 6]);
// repeat()를 까맣게 잊고 있었네...............
