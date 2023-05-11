//Write a function called recursiveRange which accepts a number and
//adds up all the numbers from 0 to the number passed to the function

// recursiveRange(6) // 21
// recursiveRange(10) // 55

//** O(n) Solution **//
function recursiveRange(num){
  if (num === 0) {
      return 0;
  };

  let sum = 0;
  while (num > 0) {
      sum += num;
      num--;
  };
  return sum;
};

//** Recursive Solution **//
function recursiveRange(num){
  if (num === 0) {
      return 0;
  };

  return num + recursiveRange(num - 1);
};