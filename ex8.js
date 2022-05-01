let array = [4, 2, 7, 5, 9, 53, 5, 1, 7];
function insertionSort(arr, size) {
  let i, j, val;
  for (i = 1; i < size; i++) {
    val = arr[i];
    j = i - 1;
    while (j > -1 && arr[j] > val) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = val;
  }
}
insertionSort(array, array.length);
console.log(array);
