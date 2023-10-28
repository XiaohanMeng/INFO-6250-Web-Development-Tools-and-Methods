const express = require('express');
const cookieParser = require('cookie-parser');
const uuidv4 = require('uuid').v4;

const app = express();
const PORT = 3000;


const loginPage = require('./login-web');
const gamePage = require('./game-web');
const userInfo = require('./user-data');
const errorPage = require('./error-login-web');
const wordList = require('./words');
const compare = require('./compare');

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./public'));


app.get('/', (req, res) =>{
    const sid = req.cookies.sid;

    // check if the sid is valid
    if(!sid || !userInfo.sessionID[sid]){
        res.send(loginPage.loginWeb());
        return;
    }

    const username = userInfo.sessionID[sid];

    // if no data in this username, initialize them
    if (!userInfo.gameData[username]) {
        setGameData(username);
    }

    // ************************* Game page 还没确定
    res.send(gamePage.gameWeb(userInfo, username, wordList));

});


function setGameData(username){

    const target = wordList[Math.floor(Math.random() * wordList.length)];
    console.log("The secret word for " + username + " is " + target);

    userInfo.gameData[username] = {
        guessedWords: [],
        matchedLetters: [],
        lastWord: "",
        lastMatch: 0,
        secretWord: target,
        count: 0,
        isValid: true,
        winning: false
    };

}


app.post('/login', (req, res) => {
    // get the user name
    const username = req.body.username;

    // check the user name, if not correct, go to error page
    // NOTICE: Case sensitive accounts: Brown and brown are different accounts!
    const regex = /^[a-zA-Z0-9]+$/;
    const nameCheck = username.match(regex);

    if(username === 'dog' || !username || !nameCheck){
        res.status(401).send(errorPage.errorWeb(true));

        // return: set headers after they are sent to the client
        return;
    }

    // assign a session id by uuidv4
    const sid = uuidv4();
    userInfo.sessionID[sid] = username;

    // get cookies and back to /
    res.cookie('sid', sid);
    res.redirect('/');
});


app.post('/logout', (req, res) => {
    const sid = req.cookies.sid;

    // delete the cookie
    delete userInfo.sessionID[sid];
    res.clearCookie('sid');

    // redirct to home page
    res.redirect('/');
});



app.post('/new-game', (req, res) => {
    const sid = req.cookies.sid;

    // check if the sid is valid
    if(!sid || !userInfo.sessionID[sid]){
        res.send(errorPage.errorWeb(false));
        return;
    }

    const username = userInfo.sessionID[sid];
    // clear the data
    userInfo.gameData[username] = {};

    // set the data again
    setGameData(username);
    res.redirect('/');
});


app.post('/guess', (req, res) => {
    const sid = req.cookies.sid;

    // check if the sid is valid
    if(!sid || !userInfo.sessionID[sid]){
        res.send(errorPage.errorWeb(false));
        return;
    }

    const username = userInfo.sessionID[sid];
    let word = req.body.word;

    // check if the word is valid or not
    // guess word is case insensitive
    word = word.toLowerCase();

    const wordLists = Array.from(wordList);

    // word is not valid: not in the words list or already in the guessed words list
    if(!wordLists.includes(word) || userInfo.gameData[username].guessedWords.includes(word)){
        userInfo.gameData[username].isValid = false;
    }
    // word valid and match the secret word ==> win the game 
    else if(word === userInfo.gameData[username].secretWord){
        userInfo.addGuessed(username, word, word.length);
        userInfo.gameData[username].winning = true;
    }
    // word vlaid but not the secret word
    else{
        const match = compare(userInfo.gameData[username].secretWord, word);
        userInfo.addGuessed(username, word, match);
    }



    res.redirect('/');

});


app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));