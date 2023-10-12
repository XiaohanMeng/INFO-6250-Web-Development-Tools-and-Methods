const express = require('express');
const cookieParser = require('cookie-parser');
const uuidv4 = require('uuid').v4;

const app = express();
const PORT = 3000;

const loginPage = require('./login-web');
const gamePage = require('./game-web');
const userInfo = require('./user-data');
const errorPage = require('./error-web');

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./public'));

// check go to login page or game page
app.get('/', (req, res) => {
    const sid = req.cookies.sid;

    // check if the sid is valid
    if(!sid || !userInfo.sessionID[sid]){
        res.send(loginPage.loginWeb(userInfo));
        return;
    }
    const username = userInfo.sessionID[sid];

    // initialize the word string
    let wordShow = '';
    if(userInfo.inputWord[username] !== undefined){
        wordShow = userInfo.inputWord[username];
    }
    res.send(gamePage.gameWeb(wordShow, username));
    return;
});



app.post('/login', (req, res) => {
    // get the user name
    const username = req.body.username;

    // check the user name, if not correct, go to error page
    // NOTICE: Case sensitive accounts: Brown and brown are different accounts!
    const regex = /^[a-zA-Z0-9]+$/;
    const nameCheck = username.match(regex);

    if(username === 'dog' || !username || !nameCheck){
        res.status(401).send(errorPage.errorWeb());

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


app.post('/changeWord', (req, res) => {
    const sid = req.cookies.sid;
    if(!sid){
        return res.redirect('/');
    }

    const username = userInfo.sessionID[sid];
    const wordInput = req.body.word;

    // add new word to the data pool
    userInfo.newInput(username, wordInput);

    res.redirect('/');
});


app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));





