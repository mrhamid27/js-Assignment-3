var numbers = [10, 20, 10, 30, 20, 40, 10];

var unique = [];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  if (!unique.includes(numbers[i])) {
    unique.push(numbers[i]);
  }
}

for (var i = 0; i < unique.length; i++) {
  sum += unique[i];
}

console.log("Unique array:", unique);
console.log("Sum:", sum);
