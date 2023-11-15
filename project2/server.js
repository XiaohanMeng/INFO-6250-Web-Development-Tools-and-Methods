const express = require('express');
const cookieParser = require("cookie-parser");

const app = express();

const PORT = 3000;

app.use(cookieParser());
app.use(express.static('./public'));
app.use(express.json());

const users = require('./users');
const sessions = require('./sessions');
const messages = require('./messages');


// check if login
app.get('/api/v1/session', (req, res) => {

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
app.post('/api/v1/session', (req, res) =>{
    const { username } = req.body;

	if (!users.isValid(username)) {
		res.status(400).json({ error: 'required-username' });
		return;
	}

	if (username === 'dog') {
		res.status(403).json({ error: 'auth-insufficient' });
		return;
	}

	const sid = sessions.setSession(username);
	users.addUser(username);
	res.cookie('sid', sid);

    res.json(users.getUsers()); // return user list

});


// logout
app.delete('/api/v1/session', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getUsername(sid) : '';

    if(sid){
        res.clearCookie('sid');
    }

    if(username){
        sessions.deleteSession(sid);
        users.deleteUser(username);
    }

    res.json({username});
});


// get user lists
app.get('/api/v1/users', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getUsername(sid) : '';

    if(!sid || !users.isValid(username)){
        res.status(401).json({ error: 'auth-missing' });
        return;
    }

    res.json(users.getUsers());
    
});


// get messages
app.get('/api/v1/messages', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getUsername(sid) : '';

    if(!sid || !users.isValid(username)){
        res.status(401).json({ error: 'auth-missing' });
        return;
    }

    res.json(messages.getMessages());
});  


// post message
app.post('/api/v1/messages', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getUsername(sid) : '';

    if(!sid || !users.isValid(username)){
        res.status(401).json({ error: 'auth-missing' });
        return;
    }

    const message = req.body.message;
	if (!message) {
		res.status(400).json({ error: 'required-message' });
		return;
	}

	messages.addMessage(username, message);
	res.json(messages.getMessages());
});



app.listen(PORT, () => 
console.log(`listening on http://localhost:${PORT}`));