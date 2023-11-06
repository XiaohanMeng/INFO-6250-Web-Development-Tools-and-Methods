import render from './render';
import state, {errorMessage} from './state';
import { fetchLogin, fetchLogout, fetchSession, fetchSetWord, fetchWord } from './services';

const appEl = document.querySelector("#app");
const errorEl = document.querySelector(`.error-box`);


function login(appEl){
    appEl.addEventListener('click', (e) =>{
        if(e.target.classList.contains('login-btn')){
            const username = appEl.querySelector('.input').value;
            errorEl.innerHTML = "";
            fetchLogin(username)
            .then( () => {
                fetchWord()
                .then(response => {
                    const username = response.username;
                    const storedWord = response.storedWord;
                    state.username = username;
                    state.storedWord = storedWord;
                    render(username, storedWord, appEl);
                })
                .catch(err => {
                    console.warn("Error: ", err);
                    errorEl.innerHTML = `<p> ${errorMessage[`${err.error}`]}</p>`;

                    return;
                });
            })
            .catch(err => {
                console.warn("Error: ", err);
                if(err.error === 'auth-insufficient'){
                    errorEl.innerHTML = `<p> ${errorMessage[`${err.error}`]}</p>`;
                }
                else if(err.error === 'required-username'){
                    errorEl.innerHTML = `<p> ${errorMessage[`${err.error}`]}</p>`;
                }
                return;
                
            })
            return;
        }
    });
}


function addWord(appEl){
    appEl.addEventListener('click', (e) =>{
        if(e.target.classList.contains(`set-word`)){
            const inputEl = appEl.querySelector('input');
            const newWord = inputEl.value;

            fetchSetWord(newWord)
            .then(response => {
                const {username, storedWord} = response;
                state.username = username;
                state.word = storedWord;
                render(username, storedWord, appEl);
            })
            .catch(err => {
                console.warn("Error: ", err);
                errorEl.innerHTML = `<p> ${errorMessage[`${err.error}`]}</p>`;

                // console.log(err.error);
                return;
            })
            return;
        }
    });
}


function logout(appEl){
    appEl.addEventListener('click', (e) =>{
        if(e.target.classList.contains(`logout`)){
            fetchLogout()
            .then(() => {
                render('','',appEl);
                return;
            })
            .catch( err =>{
                console.warn("Error: ", err);
                errorEl.innerHTML = `<p> ${errorMessage[`${err.error}`]}</p>`;
                return;
            })
        }
    })
}


login(appEl);
addWord(appEl)
logout(appEl)


fetchSession()
.then(response => {
    if (!response.error && response.username) { // check if username exists
        const { username } = response;
        fetchWord(username)
        .catch( err => {
            console.warn("Error: ", err);
            errorEl.innerHTML = `<p> ${errorMessage[`${err.error}`]}</p>`;
            return;
        } )
        .then( response => {
            
            const { username, storedWord } = response;
            state.username = username;
            state.word = storedWord;
            errorEl.innerHTML = response.error ? errorEl.innerHTML : '';
            render(state.username, state.word, appEl);
            return;
        })
    } 
    // if username not exist, login page
    render('', '', appEl);
})
.catch(err => {
    console.warn("Error: ", err);
    render('','',appEl);

    return;
})