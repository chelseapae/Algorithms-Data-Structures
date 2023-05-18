//Given an array, check that every number switches from even to odd.
//If there is a number that breaks the pattern, return the index of that number.
//If there aren't any numbers that break the pattern, return a -1

//[100, 100, 100, 100] // 1
//[1, 2, 5, 3, 4] // 3
//[5, 2, 7, 2, 9] // -1

function parity(array) {
  for (let i = 1; i < arr.length; i++)
    if (arr[i] % 2 === arr[i - 1] % 2) {
      return i
    };
  return -1;
}