const uuid = require('uuid').v4;


const sessions = {}; // sessions[sid] = {username}

function setSession(username){
    const sid = uuid();
    sessions[sid] = {username};
    
    return sid;
}


function getUsername(sid){
	return sessions[sid]?.username;
}


function deleteSession(sid){
    delete sessions[sid];
}

module.exports = {
    setSession,
    getUsername,
    deleteSession,
}

