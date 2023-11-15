const messages = [];

function addMessage(username, message) {
    messages.push({username, message});
}

function getMessages(){
    return messages;
}

module.exports = {
    getMessages,
    addMessage
}