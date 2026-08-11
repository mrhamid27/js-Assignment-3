var numbers = [45, 12, 89, 33, 89, 20];

var largest = numbers[0];
var secondlargest = numbers[0];

for (var i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    secondlargest = largest;
    largest = numbers[i];
  } else if (numbers[i] > secondlargest && numbers[i] != largest) {
    secondlargest = numbers[i];
  }
}
console.log(secondlargest);
