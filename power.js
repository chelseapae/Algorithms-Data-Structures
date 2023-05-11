//Write a function called power which accepts a base and an exponent.
//The function should return the power of the base to the exponent.
//This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents.

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

//** O(n) Solution **//
function power(base, exp){
  if (exp === 0) {
      return 1
  }

 let result = 1;
 while (exp > 0) {
     result *= base
     exp--
 }
 return result
}

//** Recursive Solution **//
function power(base, exp){
     if (exp === 0) {
         return 1
     };
    return base * power(base, exp-1);
};