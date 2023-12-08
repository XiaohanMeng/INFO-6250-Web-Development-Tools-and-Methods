import { fetchWords, fetchGuessWord, fetchStartNewGame, fetchShowWordList } from "./services";
import { useEffect, useState } from "react";
// import { words } from './words.js';

function Word({username, setError, setLoading}){
	const [wordData, setWordData] = useState('');
    const [sameCount, setSameCount] = useState();
	const [tempWord, setTempWord] = useState("");
    const [countList, setCountList] = useState();
    const [guessList, setGuessList] = useState();

    const [wordList, setWordList] = useState([]);

    const submitHandler = (e) => {
		e.preventDefault();
        setLoading(true)
		fetchGuessWord(tempWord)
        .then(data => {

            setCountList(data.data.matchedLetters);
            setGuessList(data.data.guessedWords);

            setSameCount(data.data.samecount);
            setWordData(data.data.word);

            setTempWord('');
            setLoading(false)
            setError('')
        })
        .catch((err) => {
            setError(err?.error || "ERROR");
            setLoading(false)
        });
		setTempWord("");
	};

    const newgameHandler = (e) => {
        e.preventDefault();
        fetchStartNewGame(username)
        .then(data => { 
            setCountList(data.data.matchedLetters);
            setGuessList(data.data.guessedWords);

            setSameCount(data.data.samecount);
            setWordData(data.data.word);
            setTempWord('');
            setLoading(false)
            setError('')

        })
        .catch((err) => {
            setError(err?.error || "ERROR");
            setLoading(false)
        })
    }

	useEffect(() => {
        setLoading(false)
        fetchShowWordList()
        .then( data => {
            setWordList(Array.from(data.data));
        })
        .catch(error => {
            setError(error);
            setLoading(false);
        });
        fetchWords()
        .then(data => {
            setCountList(data.data.matchedLetters);
            setGuessList(data.data.guessedWords);

            setSameCount(data.data.samecount);
            setWordData(data.data.word);
            setLoading(false);
        })
        .catch(error => {
            setError(error);
            setLoading(false);
        });
	}, []);

    return(

        <div className="word">
            <h2>Guess word</h2>
            <div className="game-instruction">
                <p>How to play this game: a SECRET word will be selected in the list of POSSIBLE WORDS and you are going to guess what the word is. </p>
                <p>Each guess will show you how many letters of the word are the same as the secret word. Please do not guess a word that is not in the possible words. </p>
                <p>Now guess your word! </p>
            </div>

            <div className="words-field">
                <div className="possible-field">
                    <h3 className="possible-title">Possible words:</h3>
                    {wordList.map((word, index) => (
                        <span key={index}>{word} {' '}</span>
                    ))}
                </div>

                <div className="guessed-field">
                    <h3 className="guessed-title">Guessed words:</h3>
                    {(!wordData) && <p>No guessed words yet.</p>}
                    {wordData && <div className="guessed-area">
                        {guessList.map((word, index) => (
                            <span key={index}>{word} ({countList[index]}) {' '}</span>
                        ))}
                    </div>}

                    
                </div>

            </div>
            {sameCount === 5 && <p className="winning">Congratulations!! You Guess the word! You can start a NEW game!</p>}
            <form className="word-form" onSubmit={submitHandler}>
                <label className="form-label">
                <span>Guess the word: </span>
                <input
                    className="form-input"
                    value={tempWord}
                    onInput={(e) => {
                    setTempWord(e.target.value);
                }}
                />
                </label>
                <button type="submit" className="guess-btn">
                    Guess!
                </button>
            </form>


            <button onClick={newgameHandler} className="newgame-btn">
                New Game
            </button>
        </div>
    )
    
}

export default Word;
