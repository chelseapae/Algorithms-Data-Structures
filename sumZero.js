// Write a function called sumZero which accepts a sorted array
// of integers. The function should find the first pair
// where the sum is 0. Return an array that includes both values that
// sum to zero or undefined if a pair does not exist.
// ** The array is ALWAYS sorted

// sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
// sumZero([-2, 0, 1, 3]) // undefined
// sumZero([1, 2, 3]) // undefined

//** Time complexity - O(n^2) Solution && Space complexity is O(1) **//
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

