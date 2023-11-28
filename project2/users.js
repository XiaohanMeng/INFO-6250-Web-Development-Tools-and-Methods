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

module.exports = {
    isValid,
    users
}

