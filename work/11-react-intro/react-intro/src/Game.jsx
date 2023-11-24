import { useState } from 'react';
import { compareWords } from './compareWords';

const Game = ({onLogout }) => {
    const [wordGuess, setWordGuess] = useState('');
    const [resultMessage, setResultMessage] = useState('');

    const target = "REACT";

    const handleGuess = (e) => {
        e.preventDefault();
        setWordGuess('');

        if(wordGuess.length !== 5){ // not valid word
            setResultMessage(`${wordGuess} was not a valid word.`)
        }else{
            if(wordGuess.toLowerCase() === target.toLowerCase()){ // get the word
                setResultMessage(`${wordGuess} is the secret word!`)
            }else{ // guessing
                const commonNumbers = compareWords(target, wordGuess);
                setResultMessage(`${wordGuess} had ${commonNumbers} letter(s) in common.`)
            }
        }


    };

    return (
        <div className='guess-page'>
            <div className="menu">
                <h1>Guess a Word</h1>        
                <button className="logout-btn" onClick={onLogout}>Logout</button>
            </div>

            <p className='instruction'>Guess a 5 letter word!</p>

			<form className="guess-form" onSubmit={handleGuess}>

                <input
                    type="text"
                    placeholder="Enter a 5 letter word"
                    value={wordGuess}
                    onInput={(e) => setWordGuess(e.target.value)}
                />

				<button type="submit" className="guess-btn">Guess</button>
			</form>

            {resultMessage && (<div className='result-field'><p className='result-message'>{resultMessage}</p></div>)}		
        
        </div>
    );
};

export default Game;
