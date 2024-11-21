/* 정수 배열 numbers가 매개변수로 주어집니다. 
numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요. */

// 배열 순회 하며 총합 구하고 배열 길이로 나누기?

function solution(numbers) {
    var answer = 0;
    let sum = 0;

    numbers.forEach(function(num) {
        sum += num;
    });

    answer = sum / numbers.length;
    return answer;
}