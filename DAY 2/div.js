var sum = 0;

for (var i = 1; i < 10; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}
document.write("The sum of multiples of 3 and 5 under 10 is: " + sum);
