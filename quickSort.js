//Given an array, sort it in ascending order, using quick sort.

function quickSort(arr, left=0, right=arr.length-1){
  if (left < right){
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex-1);
    quickSort(arr, pivotIndex+1, right);
  }
  return arr;
};

function pivot(arr, start=0, end=arr.length+1){
  function swap(array, i, j){
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };

  var pivot = arr[start];
  var swapIdx = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i)
    };
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}
//pivot([4, 8, 2, 1, 5, 7, 6, 3]) //3 <- returns the index of where 4 belongs