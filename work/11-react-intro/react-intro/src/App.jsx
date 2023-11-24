import { useState } from 'react'
import './App.css'
import Login from './Login';
import Game from './Game';

function App() {
  
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState('');


    const handleLogin = (username) =>{
        // set user and login status
        setUser(username);
        setLoggedIn(true);
    }

    const handleLogout = () =>{
        setUser('');
        setLoggedIn(false);
    }

    return (
        <div className="app">
            {loggedIn ? (<Game onLogout={handleLogout} />) : (<Login onLogin={handleLogin} />)}
        </div>
    );
}

export default App;
