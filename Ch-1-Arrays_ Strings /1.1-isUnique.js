//determine if a string has all unique characters
//use O(1) space

function isUnique(str) {
  for (let char of str) {
    if (str.indexOf(char) !== str.lastIndexOf(char)) {
      return false;
    }
  }
  return true;
}

console.log(isUnique("aron") === true);
console.log(isUnique("aaron") === false);
