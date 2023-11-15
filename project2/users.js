const users = {};

function isValid(username){
    
    if (!username) {
		return false;
	}

    const name = username.trim();

	if (!name.match(/^[A-Za-z0-9_]+$/)) {
		return false;
	}
    if(name.length > 20){
        return false;
    }

    return true;

}

function getUsers(){
    return users;
}

function addUser(username){
    users[username] = true;

    return users;
}

function deleteUser(username){
	if (users[username]) {
		users[username] = false;
	}

    return users;
}


module.exports = {
    isValid,
    getUsers,
    addUser,
    deleteUser,
    users
}

