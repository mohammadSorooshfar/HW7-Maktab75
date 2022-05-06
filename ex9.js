function binarySearch(array, value) {
  let first = 0;
  let last = array.length - 1;

  while (first <= last) {
    let middle = Math.floor((first + last) / 2);
    if (array[middle] === value) {
      return middle;
    } else if (array[middle] < value) {
      first = middle + 1;
    } else {
      last = middle - 1;
    }
  }

  return -1;
}

let arr = [1, 2, 3, 8, 9, 10, 13, 14, 46];

console.log(binarySearch(arr, 13));
