export function render({ state, appEl }) {
	const html = `
        ${generateErrorHtml(state)}
        ${generateLoginHtml(state)}
        ${generateChatHtml(state)}
    `;
	appEl.innerHTML = html;
}


function generateErrorHtml( state ) {
    if (!state.showError) {
          return "";
    }
    return `
        <div class="error"><p class="error-message">${state.errorMessage}</p></div>
    `;
  }

function generateLoginHtml(state) {

    if(state.isLoginPending){
        return `<div class="waiting">
            <p>Loading Login...</p>
        </div>`;
    }

    // into the chat page
    if(state.isLoggedIn){
        return "";
    }

    return `<div class="login">

        <h1>Login</h1>
        <form class="login-form">
            <input name="username" class="login-text" type="text" placeholder="Enter your username">
            <button type="submit" class="login-btn">Login</button>
        </form>
    </div>`;
}

function generateChatHtml(state) {
    if(!state.isLoggedIn){
        return "";
    }

    return `<div class="chat">
        <h1>Chat Room</h1>
        <div class="menu">
            <span>User: ${state.username}</span>
            <button class="logout-btn">Logout</button>
        </div>

        <div class="chat-content">
            <div class="chat-users">${generateUsersHtml(state)}</div>
            <div class="chat-messages">${generateMessagesHtml(state)}</div>
        </div>

        <div class="send-area">
            <form class="chat-form">
                <input class="message-text" name="message" placeholder="Enter your message"/>
                <button type="submit" class="send-btn">Send</button>
            </form>
        </div>
    </div>`;
}

function generateUsersHtml(state) {
    if(!state.isLoggedIn){
        return "";
    }

    if(state.isUserPending){
        return `<div class="waiting">
            <p>Loading Users...</p>
        </div>`;
    }
    
    return `
        <h2>Logged In Users</h2>
        <ul class="user-list"> ` + 
            Object.values(state.users).map((user) => {
                if (user) { // if true: logged in user
                    return `
                        <li>
                            <div class="user">
                                <span class="username">${user}</span>
                            </div>
                        </li>
                    `;
                }
                return '';
            }).join('') + 
        `</ul>`;
}


function generateMessagesHtml(state) {
    if(!state.isLoggedIn){
        return "";
    }

    if(state.isMessagePending){
        return `<div class="waiting">
            <p>Loading Messages...</p>
        </div>`;
    }

	return `
        <ol class="message-list">` + 
        state.messages
			.slice()
			.map((msg) => {
				return `
                    <div class="user-message">
                        <p class="send-message">${msg.username} : ${msg.message}</p>
                    </div>
                `;
			})
			.join('') + 
        `</ol>`;
}


export function renderUsers({ state, appEl }) {
	const usersEl = appEl.querySelector('.chat-users');
	if (!usersEl) return;
	usersEl.innerHTML = generateUsersHtml(state);
}

export function renderMessages({ state, appEl }) {
	const messagesEl = appEl.querySelector('.chat-messages');
	if (!messagesEl) return;
	messagesEl.innerHTML = generateMessagesHtml(state);
}
