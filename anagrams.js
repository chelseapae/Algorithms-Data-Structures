// Given two strings, write a function to determine if the second string
// is an anagram of the first. An anagram is a word, phrase, or name
// formed by rearranging the letters of another, such as cinema, formed from iceman.

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('qwerty', 'qwywrt') // true

/** O(n) Solution **/
function validAnagram(str1, str2){
  let arr1 = str1.split('')
  let arr2 = str2.split('')

  if (arr1.length !== arr2.length) {
      return false;
  };

  let counterObj1 = {};
  let counterObj2 = {};

  for (let i = 0; i < arr1.length; i++) {
      counterObj1[arr1[i]] = (counterObj1[arr1[i]] || 0) + 1
  };

  for (let i = 0; i < arr2.length; i++) {
      counterObj2[arr2[i]] = (counterObj2[arr2[i]] || 0) + 1
  };

  for (let key in counterObj1) {
      if (!counterObj2[key]) {
          return false;
      };

      if (counterObj1[key] !== counterObj2[key]) {
          return false;
      };
  }
  return true;
}