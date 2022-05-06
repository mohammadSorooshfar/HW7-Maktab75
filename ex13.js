function tellDate(number) {
  let season, month, day;
  if (number > 186) {
    number -= 186;
    season = 2 + Math.ceil(number / 90);
    month = 6 + Math.ceil(number / 30);
    day = number % 30 == 0 ? 30 : number % 30;
  } else {
    season = Math.ceil(number / 93);
    month = Math.ceil(number / 31);
    day = number % 31 == 0 ? 31 : number % 31;
  }
  return { season, month, day };
}
console.log(tellDate(217));
