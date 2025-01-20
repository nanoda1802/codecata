// https://school.programmers.co.kr/learn/courses/30/lessons/136798

// 기사마다 번호 지정됨 1~number
// 각 기사는 무기 사려는데 무기 공격력은 자기 번호의 약수의 개수
// 다만 만약 사려는 무기의 공격력이 limit를 초과할 경우
// 강제로 공격력이 power인 무기 사야함

// 1부터 number까지 반복하며 약수의 개수를 구하는디
// number의 제곱근까지만
// limit 초과라면 power로 대체
// 구해놓은 것들의 총합 구해서 반환

function solution(number, limit, power) {
  let sum = 0;

  const calculateIron = (num) => {
    let count = 0;
    const sqrt = Math.sqrt(num);
    for (let i = 1; i <= Math.floor(sqrt); i++) {
      count += num % i === 0 ? 1 : 0;
    }
    count *= 2;
    if (Number.isInteger(sqrt)) count -= 1;
    return count;
  };

  for (let knight = 1; knight <= number; knight++) {
    let iron = calculateIron(knight);
    if (iron > limit) iron = power;
    sum += iron;
  }

  return sum;
}
