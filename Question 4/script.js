var numbers = [5, 12, 7, 20, 15, 8];

var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    sum += numbers[i];
  }
}

console.log(sum);
