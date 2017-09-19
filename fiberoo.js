function fib(maxNum) {
  let base1 = 0;
  let base2 = 1;
  let temp = 0;
  const answer = [];

  answer.push(0);
  answer.push(1);
  for (let i = 2; i < maxNum; i++) {
    temp = base1 + base2;
    base1 = base2;
    base2 = temp;
    answer.push(temp);
  }
  return answer;
}

function numToStrings(arr) {
  return _.map(arr, function (num) { return `${num}`; });
}

const maxNum = 100;
//console.log(fib(maxNum));
console.log(numToStrings(fib(maxNum)));
