const uuid = require('uuid').v4;

const sessions = {}; // sessions[sid] = {username}

const onlineUsers = {}; // onlineUsers[sid] = { key: username, value:sids) };

function setSession(username){
    const sid = uuid();
    sessions[sid] = {username};
    if(!onlineUsers[username]){
        onlineUsers[username] = [sid];
    }else{
        onlineUsers[username].push(sid);
    }

    return sid;
}


function getUsername(sid){
	return sessions[sid]?.username;
}


function deleteSession(sid){
    const session = sessions[sid];
    if(session){
        const username = session.username;

        if(Array.isArray(onlineUsers[username])){
            const index = onlineUsers[username].indexOf(sid);
            if(index !== -1){
                onlineUsers[username].splice(index, 1);
            }

            if(onlineUsers[username].length === 0){
                delete onlineUsers[username];
            }
        }
    }
    delete sessions[sid];
}

function getOnlineUsers(){
    return Object.keys(onlineUsers);

}

module.exports = {
    setSession,
    getUsername,
    deleteSession,
    getOnlineUsers,
    sessions,
    onlineUsers
}

