var numbers = [12, 45, 23, 67, 34, 89, 10];

var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

var average = sum / numbers.length;

var count = 0;

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > average) {
    count++;
  }
}

console.log("Average:", average);
console.log("Numbers above average:", count);
