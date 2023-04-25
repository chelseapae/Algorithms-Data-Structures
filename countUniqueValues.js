// Implement a function called countUniqueValues
// which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

// countUniqueValues([1, 1, 1, 1, 2]) // 2
// countUniqueValues([]) // 0
// countUniqueValues([-2, -1, -1, 0, 1]) // 4

//** O(n) Solution **//
function countUniqueValues(arr){
  if (arr.length === 0) {
      return 0;
  }

  let counter = {};
  for (let i = 0; i < arr.length; i++) {
      let current = arr[i];
      if (!counter[current]) {
          counter[current] = 1;
      } else {
          counter[current]++;
      }
  }
  return Object.keys(counter).length;
};