// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

/** O(n) solution **/
function areThereDuplicates() {
  let duplicateCounter = {}

  for (let val in arguments) {
      duplicateCounter[arguments[val]] = (duplicateCounter[arguments[val]] || 0) + 1;
  };

  for (let key in duplicateCounter) {
      if (duplicateCounter[key] > 1) {
          return true;
      };
  };

  return false;
};
