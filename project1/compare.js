function compare(target, word){
    target = target.toLowerCase();
    word = word.toLowerCase();
  
    // to store the count for each letters
    const letterCounts = {};
  
    for (let letter of target) {
      if (letterCounts[letter]) {
        letterCounts[letter]++;
      } else {
        letterCounts[letter] = 1;
      }
    }
    
    let matched = 0;
  
    for (let letter of word) {
      if (letterCounts[letter] && letterCounts[letter] > 0) {
        matched++;
        letterCounts[letter]--;
      }
    }
  
    return matched;
};


module.exports = compare;