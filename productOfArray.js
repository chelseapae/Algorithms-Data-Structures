//Write a function called productOfArray which takes in an array of numbers
//and returns the product of them all.

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

//** O(n) Solution **//
function productOfArray(arr){
  if (arr.length === 0) {
      return 1;
  };

  let result = 1;
  while (arr.length > 0) {
      result *= arr[0];
      arr.shift();
  };
  return result;
};