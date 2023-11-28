import { fetchLogin, fetchLogout, fetchSession, fetchMessages, fetchPostMessage, fetchUsers } from "./services";
import state, {waitOnLogin, waitOnUsers, waitOnMessages, login, logout, setUsers, setMessages, setError} from "./state";
import { SERVER, CLIENT } from "./constants";
import {render, renderUsers, renderMessages} from "./render";
import { loginListener, logoutListener, sendMessageListener } from "./listeners";

const appEl = document.querySelector("#app");


loginListener(appEl);
logoutListener(appEl);
sendMessageListener(appEl);

checkSession();

function checkSession() {
	waitOnLogin();
	render({ state, appEl });
	fetchSession()
    .then((session) => {
        login(session.username);
        waitOnUsers();
        waitOnMessages();
        render({ state, appEl });
        return Promise.all([fetchUsers(), fetchMessages()]);
    })
    .then((resp) => {
        setUsers(resp[0]);
        setMessages(resp[1]);
        render({ state, appEl });
    })
    .catch((err) => {
        if (err?.error === SERVER.AUTH_MISSING) {
            logout();
            render({ state, appEl });
        } else {
            setError(err?.error || 'ERROR');
            render({ state, appEl });
        }
    })
    .then(() => {
        setInterval(reloadPages, 5000);
    });
}

function reloadPages() {
    if(!state.isLoggedIn){ // login, go to chat page
        return;
    }

	fetchUsers()
    .then((users) => {
        setUsers(users);
        renderUsers({ state, appEl });
        return fetchMessages();
    })
    .then((messages) => {
        // check if have new messages
        if (messages.length === state.messages.length){
            return;
        } 
        setMessages(messages);
        renderMessages({ state, appEl });
    })
    .catch((err) => {
        if (err?.error === SERVER.AUTH_MISSING) {
            logout();
            setError(err?.error || 'ERROR');
        }else{
            setError(err?.error || 'ERROR');

        }
        render({ state, appEl });
        
    });
}