var prices = [150, 300, 80, 220];

var total = 0;

for (var i = 0; i < prices.length; i++) {
  total += prices[i];
}

if (total > 700) {
  console.log("20% discount");
} else if (total > 400) {
  console.log("10% discount");
} else {
  console.log("No discount");
}

console.log("Total:", total);
