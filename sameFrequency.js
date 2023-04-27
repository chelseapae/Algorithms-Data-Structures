// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

/** O(n) solution **/
function sameFrequency(num1, num2){
    let str1 = num1.toString();
    let str2 = num2.toString();

    if (str1.length !== str2.length) {
        return false;
    };

    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < str1.length; i++) {
      obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
    };
    for (let i = 0; i < str2.length; i++) {
      obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
    };

    for (key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        };
        if (!obj2[key]) {
            return false;
        };
    }
  return true;
};