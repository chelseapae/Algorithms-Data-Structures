//Count the number of times a substring exists in a string.
//If it doesn't exist, return -1

//naiveStringSearch("lorie loled", "lol") //1

function naiveStringSearch(long, short) {
  let count = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++){
      if (short[j] !== long[i+j]) {
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
}