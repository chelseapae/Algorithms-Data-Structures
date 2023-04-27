// Write a function called maxSubArraySum which accepts
// an array of integers and a number called n. The function should
// calculate the maximum sum of n consecutive elements in the array.

//maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2) //10
//maxSubArraySum([4, 2, 1, 6], 1) //6
//maxSubArraySum([4, 2, 1, 6, 2], 4) //13
//maxSubArraySum([], 4) // null

//** O(n^2) Solution **//
function maxSubArraySum(arr, num){
  if (num > arr.length) {
    return null;
  };

  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i+j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

//** O(n) Solution **//
function maxSubArraySum2(arr, num) {
  if (arr.length < num) {
      return null;
  };

  let maxSum = 0;
  for (let i = 0; i < num; i++) {
      maxSum += arr[i];
  };

  let tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(tempSum, maxSum)
  }

  return maxSum
}