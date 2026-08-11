var marks = [85, 72, 91, 60, 45, 78, 55];

var count = 0;

for (var i = 0; i < marks.length; i++) {
  if (marks[i] >= 80) {
    console.log("A Grade");
    count++;
  } else if (marks[i] >= 70) {
    console.log("B Grade");
  } else if (marks[i] >= 60) {
    console.log("C Grade");
  } else if (marks[i] >= 50) {
    console.log("D Grade");
  } else {
    console.log("F Grade");
  }
}

console.log("A Grade students:", count);
