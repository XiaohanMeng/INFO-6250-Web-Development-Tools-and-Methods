import { useState } from 'react'
import Error from './Error';
import Loading from './Loading';
import Login from './Login';
import Word from './Word';
// import { fetchLogin, fetchLogout, fetchSession, fetchGuessedWord, fetchStartNewGame, } from './services';
import './App.css'

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [username, setUsername] = useState("");


    return(
        <div className="app">
            <h1>Guess A Word</h1>
            <main>
                <Error error={error}/>
                <Loading loading={loading}/>
                <Login username={username} setUsername={setUsername} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setError={setError} setLoading={setLoading}/>
                {isLoggedIn && <Word username={username} setError={setError} setLoading={setLoading}/>}
            </main>
        </div>
    )



}

export default App
