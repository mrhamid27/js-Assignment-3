var numbers = [10, 20, 10, 30, 10, 40, 20];
var searchNumber = 10;

var count = 0;

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] === searchNumber) {
    count++;
  }
}

console.log(searchNumber + " appears " + count + " times");