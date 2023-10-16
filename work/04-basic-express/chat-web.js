const { messages } = require("./chat");

const chatWeb = {
  chatPage: function(chat) {
    // Fill in/modify anything below!
    return `
      <!doctype html>
      <html>
        <head>
          <title>Chat</title>
          <link rel="stylesheet" href="chat.css">
        </head>
        <body>
          <div id="chat-app">
            ${chatWeb.getUserList(chat)}
            ${chatWeb.getMessageList(chat)}
            ${chatWeb.getOutgoing(chat)}
          </div>
        </body>
      </html>
  `;
  },

  getMessageList: function(chat) {
    return `<ol class="messages">` +
      // Fill in
      // Generate the HTML for the list of messages

      Object.values(chat.messages).map( message => `
      <li>
        <div class="message">
          <div class="sender-info">
              <img class="sender-avatar" alt="avatar of ${message.sender}" src="/images/avatar-${message.sender}.jpg"/>
            </div>
            <div class="massage-info">
              <span class="message-username">${message.sender}</span>
              <p class="message-text">${message.text}</p>
            </div>
        <div>
      </li>
      `).join('') +

      `</ol>`;
  },

  getUserList: function(chat) {
    return `<ul class="users">` +
    Object.values(chat.users).map( user => `
      <li>
        <div class="user">
          <span class="username">${user}</span>
        </div>
      </li>
    `).join('') +
    `</ul>`;
  },

  getOutgoing: function() {
    // Fill in
    // Generate the HTML for a form to send a message
    return `
    <div class="sender-area">
      <form action="/chat" method="post" class="sender-form">
        <input type="hidden" name="username" value="Amit"/>
        <input class="send-message" name="text" placeholder="Enter your message"/>
        <button type="submit" class="send-btn">Send</button>
      </form>
    </div>
    `
  }
};
module.exports = chatWeb;
