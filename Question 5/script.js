var numbers = [10, -5, 20, -8, 0, 15, -3];

var positive = [];
var negative = [];

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    positive.push(numbers[i]);
  } else if (numbers[i] < 0) {
    negative.push(numbers[i]);
  }
}

console.log("Positive:", positive);
console.log("Negative:", negative);
