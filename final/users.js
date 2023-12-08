const wordList = require('./words');
const compare = require('./compare');

const users = {};


function isValid(username) {
    let isValid = true;
    isValid = !!username && username.trim();
    isValid = isValid && username.match(/^[A-Za-z0-9_]+$/);
    return isValid;
}


function getData(username){
    const data = users[username];
    return data;
}

function setSecretWord(username){
    const target = wordList[Math.floor(Math.random() * wordList.length)];
    console.log("The secret word for " + username + " is " + target);

    users[username].secret = target;
}


function updateWord(username, word){

    const match = compare(users[username].secret, word);
    users[username].word = word;
    users[username].samecount = match;
    users[username].guessedWords.push(word);
    users[username].matchedLetters.push(match);
}

function getGuessList(username){
    return users[username].guessedWords;
}

function setData(username){
    
    if(!users[username]){
        initData(username);
    }
}

function initData(username){
    users[username] = {
        guessedWords: [],
        matchedLetters: [],
        word: '',
        samecount: 0,
        secret: ''};
    setSecretWord(username);
}


function getSecret(username){
    return users[username]?.secret;
}

module.exports = {
    isValid,
    setSecretWord,
    updateWord,
    setData,
    getSecret,
    getData,
    getGuessList,
    initData,

};
