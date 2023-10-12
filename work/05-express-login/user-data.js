
// set empty initalization
const inputWord = {};
const sessionID = {};

// add new word in data pool
function newInput(username, word){
    inputWord[username] = word;
}

const UserData = {
    inputWord,
    sessionID,
    newInput
};

module.exports = UserData;