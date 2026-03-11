function stalinSort(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      array.splice(i + 1, 1);
      i--;
    }
  }
}
