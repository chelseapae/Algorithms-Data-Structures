// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has
// it's corresponding value squared in the second array.
// The frequency of values must be the same.

// Naive solution
function same(arr1, arr2) {
  // if arr1 length doesn't eql arr2 length, return false
    if (arr1.length !== arr2.length) {
        return false;
    };

  // iterate thru arr1
    for (let i = 0; i < arr1.length; i++) {
        let currentIndex = arr2.indexOf(arr1[i] ** 2)
     // if the sqrd # isn't in arr2
        if (currentIndex === -1) {
            return false;
        }
           // else, cut that number out of arr2
            arr2.splice(currentIndex, 1)
    }
    return true
}