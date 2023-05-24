//Given an array, sort it from smallest to largest, using a 'Bubblesort' technique

//bubbleSort([5, 2, 1, 4, 6]) // [1, 2, 4, 5, 6]
//bubbleSort([37, 45, 29, 8])

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

