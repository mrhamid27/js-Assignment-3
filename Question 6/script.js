var numbers = [10, 20, 25, 40, 55];

var isSorted = true;

for (var i = 0; i < numbers.length - 1; i++) {
  if (numbers[i] > numbers[i + 1]) {
    isSorted = false;
    break;
  }
}

if (isSorted) {
  console.log("Array is sorted");
} else {
  console.log("Array is not sorted");
}
