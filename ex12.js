function counter(number) {
  let countOdd = 0;
  let countEven = 0;
  let countZero = 0;
  while (number >= 1) {
    let temp = number % 10;
    number = Math.floor(number / 10);
    if (temp % 2 == 0) {
      countEven++;
      if (temp == 0) {
        countZero++;
      }
    } else {
      countOdd++;
    }
  }
  return { countEven, countOdd, countZero };
}
console.log(counter(4513050));
