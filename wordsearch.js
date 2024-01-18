const vertical = function(arr, wordToFind) {
  let result = [];
  for (const keyArray in arr) {
    for (const value in arr[keyArray]) {
      if (!result[value]) {
        result[value] = [];
      }
      result[value][keyArray] = arr[keyArray][value];
    }
  }
  
  const verticalJoin = result.map(word => word.join(''));
  for (let l of verticalJoin) {
    if (l.includes(wordToFind)) return true;
  }
  return false;
};

const wordSearch = (letters, word) => {
  if (!letters || !word) {
    return false;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  return vertical(letters, word);
};

module.exports = wordSearch;