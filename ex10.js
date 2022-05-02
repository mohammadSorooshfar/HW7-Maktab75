function sumOfProducts(number, limit) {
  let lastValid = Math.floor(limit / number);
  let sum = Math.floor((lastValid * (lastValid + 1)) / 2);
  return sum * number;
}
console.log(sumOfProducts(8, 72));
