// set empty initalization, separate sessionid and gameData
const sessionID = {};
const gameData = {};

/* gameData: 
    userData.gameData[username] = {
        guessedWords: [],           the previous guessed words
        matchedLetters: [],         the mathched letters for previous guessed words
        lastWord: "",               the last guessed word
        lastMatch: 0,               how many letters matched in last guessed word
        secretWord: target,         the random secret word
        count: 0,                   the count of guessed words in one play, default is 0
        isValid: true,              the last word is valid or not (for showing in other screen), default is true
        winning: false,             win the game or not, defalut is false


    }
*/


// add new guess word into the guessed words array
// add new guess word to last guess word
function addGuessed(username, text, matchCount) { 
    gameData[username].guessedWords.push(text);
    gameData[username].matchedLetters.push(matchCount);
    gameData[username].lastWord = text;
    gameData[username].lastMatch = matchCount;
    gameData[username].count++;
    gameData[username].isValid = true;
};



const userData = {
    sessionID,
    gameData,
    addGuessed
};

module.exports = userData;