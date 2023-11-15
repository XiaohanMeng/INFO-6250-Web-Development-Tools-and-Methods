import { fetchLogin, fetchLogout, fetchMessages, fetchPostMessage, fetchUsers } from "./services";
import state, {waitOnLogin, waitOnUsers, waitOnMessages, login, logout, setUsers, setMessages, setError} from "./state";
import {render, renderMessages} from "./render";

export function loginListener(appEl){
    appEl.addEventListener("submit", (e) =>{
        e.preventDefault();
        if(!e.target.classList.contains("login-form")){
            return;
        }

        const username = appEl.querySelector(".login-text").value;
        waitOnLogin();
        render({state, appEl});
        fetchLogin(username)
        .then(() =>{
            login(username);
            waitOnUsers();
            waitOnMessages();
            render({state, appEl});
            return Promise.all([fetchUsers(), fetchMessages()]);
        })
        .then((response) =>{
            setUsers(response[0]);
            setMessages(response[1]);
            render({state, appEl});
        })
        .catch((err) => {
            logout();
            setError(err?.error || 'ERROR');
            render({state, appEl});
        });
    });
}


export function logoutListener(appEl){
    appEl.addEventListener('click', (e) =>{
        if(!e.target.classList.contains('logout-btn')){
            return;
        }

        logout();
        render({state, appEl});
        fetchLogout()
        .catch((err) =>{
			setError(err?.error || 'ERROR');
			render({ state, appEl });
        });
    });
}


export function sendMessageListener(appEl){
    appEl.addEventListener("submit", (e) =>{
        if(!e.target.classList.contains('chat-form')){
            return;
        }

        const message = appEl.querySelector('.message-text');

        fetchPostMessage(message.value)
        .then((messages) =>{
            setMessages(messages);
            renderMessages({ state, appEl });
            message.value = '';
        })
        .catch((err) =>{
            setError(err?.error || 'ERROR');
            renderMessages({state, appEl});
        });
    });
}
