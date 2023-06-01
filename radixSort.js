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