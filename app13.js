function tellDate(number) {
  let season, month, day;
  if (number > 186) {
    number -= 186;
    season = 2 + Math.ceil(number / 90);
    month = 6 + Math.ceil(number / 30);
    let n = Math.floor(number / 30);
    day = number - n * 30;
  } else {
    season = Math.ceil(number / 93);
    month = Math.ceil(number / 31);
    let n = Math.floor(number / 31);
    day = number == n * 31 ? 31 : number - n * 31;
  }
  return { season, month, day };
}
console.log(tellDate(48));
