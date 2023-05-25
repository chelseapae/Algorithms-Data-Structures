//Given an array, sort it by placing smallest values into sorted position first AKA using Selection Sort

//selectionSort([5, 3, 4, 1, 2]) //[1, 2, 3, 4, 5]

function selectionSort(arr){
  for (var i = 0; i < arr.length; i++){
    let lowest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    var temp = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = temp;
  }
  return arr;
}