const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3000;


const users = require('./users');
const sessions = require('./sessions');
const wordList = require('./words')

app.use(cookieParser());
app.use(express.static('./dist'));
app.use(express.json());


// check if login
app.get('/api/session', (req, res) => {

    const sid = req.cookies.sid;
    const username = sid ? sessions.getUsername(sid) : '';

    if (!sid ||!users.isValid(username)) {
        res.status(401).json({ error: 'auth-missing' });
        return;
    }

    req.username = username;
    res.json({username});
})


// login
app.post('/api/session', (req, res) =>{
    const { username } = req.body;

    if(!users.isValid(username)) {
        res.status(400).json({ error: 'required-username' });
        return;
    }
  
    if(username === 'dog') {
        res.status(403).json({ error: 'auth-insufficient' });
        return;
    }
    
    const sid = sessions.setSession(username);

    users.setData(username);

    res.cookie('sid', sid);
  
    res.json({ username });

});


// logout
app.delete('/api/session', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getUsername(sid) : '';

    if(sid){
        res.clearCookie('sid');
    }

    if(username){
        sessions.deleteSession(sid);
    }

    res.json({ wasLoggedIn: !!username });
});


// start a new game
app.post('/api/games', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getUsername(sid) : '';

    if (!sid ||!users.isValid(username)) {
        res.status(401).json({ error: 'auth-missing' });
        return;
    }

    req.username = username;
    users.initData(username);
    // users.setSecretWord(username);

    const data = users.getData(username);

    res.json({data});
})


// show guessed word
app.get('/api/games', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getUsername(sid) : '';

    if(!sid || !username) {
        res.status(401).json({ error: 'auth-missing' });
        return;
    }
    
    const data = users.getData(username);


    res.json({ data });
  
});

// post guessing word
app.post('/api/guess', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getUsername(sid) : '';

    if (!sid ||!users.isValid(username)) {
        res.status(401).json({ error: 'auth-missing' });
        return;
    }

    const word = req.body.word.toLowerCase();

    const guessedList = users.getGuessList(username);

    if(!word && word !== ''){
        res.status(400).json({ error: 'required-word' });
        return;
    }
    if(!wordList.includes(word) || guessedList.includes(word)){
        res.status(400).json({ error: 'invalid-word' });
        return;
    }

    users.updateWord(username, word);

    const data = users.getData(username);

    res.json({data});
})



// show word list
app.get('/api/words', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getUsername(sid) : '';

    if(!sid || !username) {
        res.status(401).json({ error: 'auth-missing' });
        return;
    }
    
    const data = wordList;

    res.json({ data });
  
});


app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
  
  