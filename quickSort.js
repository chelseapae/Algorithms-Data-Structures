//Given an array, sort it in ascending order, using quick sort.

function quickSort(arr){

};

function swap(array, i, j){
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

function pivot(arr, start=0, end=arr.length+1){
  var pivot = arr[start];
  var swapInx = start;
  for (var i = start+1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapInx++;
      swap(arr, swapInx, i)
    };
  }
}
//pivot([4, 8, 2, 1, 5, 7, 6, 3]) //3 <- returns the index of where 4 belongs