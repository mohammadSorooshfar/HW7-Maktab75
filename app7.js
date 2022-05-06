let array = [3, 6, 2, 1, 7, 53, 72, 4, 23, 41, 26];

function selectionSort(arr, size) {
  let i, j, minIndex;
  for (i = 0; i < size - 1; i++) {
    minIndex = i;
    for (j = i + 1; j < size; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}
selectionSort(array, array.length);
console.log(array);
