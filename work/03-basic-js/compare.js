"use strict";
/* DO NOT MODIFY EXCEPT WHERE ALLOWED */
module.exports = compare; // DO NOT MODIFY - USED FOR TESTING

function compare( word, guess ) {  // DO NOT MODIFY

/* YOU MAY MODIFY THE LINES BELOW */

  // convert to lower case for comparation
  word = word.toLowerCase();
  guess = guess.toLowerCase();

  // get all letters in common
  let commonLetters = 0;

  // get guess letter first
  for (let i = 0; i < guess.length; i++) {
    const char = guess.charAt(i);

    for(let j = 0; j < word.length; j++) {
      const char2 = word.charAt(j);
      if(char2 === char){
        commonLetters++;
        break;
      }
    }
  }

  return commonLetters;
}
