//Given an array of numbers, sort in ascending order using radix sort.

function radixSort(){

};

//getDigit(num, place) // returns the digit in num at the given place value
//getDigit(12345, 0) //5
//getDigit(12345, 1) //4
//getDigit(12345, 2) //3
//getDigit(12345, 5) //0

function getDigit(num, place){
  return Math.floor(Math.abs(num)/Math.pow(10, i)) % 10;
}

//digitCount(num) - returns the number of digits in num
//digitCount(1) // 1
//digitCount(25) // 2
//digitCount(314) // 3

function digitCount(num){
  let str = num.toString()
  return str.length;
}

//Or if you use math
// function digitCount(num){
//   if (num === 0) return 1;
//   return Math.floor(Math.log10(math.abs(num))) + 1;
// }

//mostDigits(nums) - Given an array of numbers, return the number of digits in the largest numbers in the list
//mostDigits([1234, 56, 7]) //4
//mostDigits([1, 1, 11111, 1]) //5
//mostDigits([12, 34 56, 78]) //2

function mostDigits(nums){
  let maxDigits = 0;
  for (var i = 0; i < nums.length; i++){
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
};