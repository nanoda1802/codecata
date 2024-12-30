// https://school.programmers.co.kr/learn/courses/30/lessons/12901

function solution(a, b) {
  var answer = "";
  const theDay = new Date(2016, a - 1, b).getDay();
  switch (theDay) {
    case 0:
      answer = "SUN";
      break;
    case 1:
      answer = "MON";
      break;
    case 2:
      answer = "TUE";
      break;
    case 3:
      answer = "WED";
      break;
    case 4:
      answer = "THU";
      break;
    case 5:
      answer = "FRI";
      break;
    case 6:
      answer = "SAT";
      break;
  }
  return answer;
}

solution(5, 24);
