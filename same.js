// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same.

// same([1, 2, 3], [4, 1, 9]) - true

/** O(n^2) solution **/
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    };

    for (let i = 0; i < arr1.length; i++) {
        let currentIndex = arr2.indexOf(arr1[i] ** 2)
        if (currentIndex === -1) {
            return false;
        }
        arr2.splice(currentIndex, 1)
    }
    return true
}

/** O(n) solution **/
function same2(arr1, arr2) {
  // if the lengths of the arr are different, return false
  if (arr1.length !== arr2.length) {
      return false;
  };

  // create two objects
  let freqCounter1 = {};
  let freqCounter2 = {};
  // iterate thru arr1
  for (let i = 0; i < arr1.length; i++) {
    // place the # as the key & # of instances as the value
      freqCounter1[arr1[i]] = (freqCounter1[arr1[i]] || 0) + 1;
  };

  // iterate thru arr2
  for (let i = 0; i < arr2.length; i++) {
    // place the # as the key & # of instances as the value
      freqCounter2[arr2[i]] = (freqCounter2[arr2[i]] || 0) + 1;
  };

  console.log(freqCounter1);
  console.log(freqCounter2);

  // iterate thru 1st object
  for (key in freqCounter1) {
  // if the key sqrd doesn't exist as a key in 2nd object
      if (!freqCounter2[key ** 2]){
          return false;
      };

  // if the values don't align between the 1st & 2nd objs
      if (freqCounter1[key] !== freqCounter2[key ** 2]) {
          return false;
      };
  }
  return true
}

