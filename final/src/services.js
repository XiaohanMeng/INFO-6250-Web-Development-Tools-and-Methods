export function fetchLogin(username) {
    return fetch('/api/session/', {
        method: 'POST',
        headers: {
            'content-type': 'application/json', 
        },
        body: JSON.stringify( { username } ),
    })

  .catch(() => Promise.reject({ error: 'network-error' }))
  .then( response => {
      if(!response.ok) {  
          return response.json().then( err => Promise.reject(err) );
      }
      return response.json(); 
  });
}

export function fetchSession(){
    return fetch('/api/session/' ,{
        method: 'GET',
    })
    .catch( () => Promise.reject({ error: 'network-error' }) )
    .then( response => {
        if(!response.ok) { 
            return response.json().then( err => Promise.reject(err) );
        }
        return response.json(); 
    });
}

export function fetchLogout(){
    return fetch('/api/session/',{
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        }
    })
    .catch( () => Promise.reject({ error: 'network-error' }) )
    .then( response => {
        if(!response.ok) { 
            return response.json().then( err => Promise.reject(err) );
        }
        return response.json(); 
    });
}

// show last guessed word
export function fetchWords(){
    return fetch('/api/games/',{
        method: 'GET',
    })
    .catch( () => Promise.reject({ error: 'network-error' }) )
    .then( response => {
        if(!response.ok) { 
            return response.json().then( err => Promise.reject(err) );
        }
        return response.json(); 
    });
}

// post guess word
export function fetchGuessWord(word){
    return fetch('/api/guess/',{
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify( { word } ),
    })
    .catch( () => Promise.reject({ error: 'network-error' }) )
    .then( response => {
        if(!response.ok) { 
            return response.json().then( err => Promise.reject(err) );
        }
        return response.json(); 
    });
}

// start new game
export function fetchStartNewGame(username){
    return fetch('/api/games/', {
        method: 'POST',
        headers: {
            'content-type': 'application/json', 
        },
        body: JSON.stringify( { username } ),
    })
    .catch(() => Promise.reject({ error: 'network-error' }))
    .then(response => {
        if (!response.ok) {
            return response.json().then(err => Promise.reject(err));
        }
        return response.json();
    });
}


// show word list
export function fetchShowWordList(){
    return fetch('/api/words/',{
        method: 'GET',
    })
    .catch( () => Promise.reject({ error: 'network-error' }) )
    .then( response => {
        if(!response.ok) { 
            return response.json().then( err => Promise.reject(err) );
        }
        return response.json(); 
    });
}




