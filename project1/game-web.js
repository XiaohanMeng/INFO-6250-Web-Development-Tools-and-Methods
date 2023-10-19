const gamePage = {
    gameWeb:function(userInfo, username, wordList){
        return `
            <!doctype html>
            <html lang="en">
            <head>
                <title>Word Game Page</title>
                <link rel="stylesheet" href="game.css">
            </head>
            <body>
                <header>
                    <form action="/logout" class="game-logout" method="POST">
                        <button type="submit" class="logout-btn">Logout</button>
                    </form>

                    <h1>Word Game</h1>

                    <form action="/new-game" class="newgame-form" method="POST">
                        <button type="submit" class="newgame-btn">New game!</button>
                    </form>
            
                </header>
                <main>
                    <div class="game">
                        <div class="game-info">
                            <h2 class="game-title">${username}, Welcome to word game!</h2>
                            <p class="game-instruction">How to play this game: a SECRET word will be selected in the list of POSSIBLE WORDS and you are going to guess what the word is. <br>
                            Each guess will show you how many letters of the word are the same as the secret word. Please do not guess a word that is not in the possible words, and do not repeat guessing the same word. <br>
                            Now it's time to guess your word!</p>
                        </div>

                        <div class="words-field">

                            <div class="possible-field">
                                <h3 class="possible-title">Possible words:</h3>
                                
                                ${gamePage.getPossibleWords(wordList)}
                            </div>

                            <div class="guessed-field">
                                <h3 class="guessed-title">Guessed words:</h3>

                                ${gamePage.getGuessedWords(userInfo, username)}
                            </div>

                            
                        </div>

                        <div class="input-field">
                            <div class="word-info">
                                <p class="valid-count">The count of this game: ${userInfo.gameData[username].count}</p>
                                <p class="recent-word">The last guessed word is: ${userInfo.gameData[username].lastWord}</p>
                                <p class="valid-count">The matched letters: ${userInfo.gameData[username].lastMatch}</p>
                            </div>
                            <form action="/guess" class="game-form" method="POST">
                                <input name="word" class="word-text" type="text" placeholder="Enter your word" />
                                <button type="submit" class="word-btn">Submit Your Guess</button>
                                <div class="error-message">
                                    ${gamePage.errorMessage(userInfo,username)}
                                </div>
                            </form>

                            
                        
                        </div>

                        <div class="winning">
                            ${gamePage.winningMessage(userInfo,username)}
                        </div>


                    </div>
                </main>
                
            </body>
            </html>
        `;
    },

    getPossibleWords: function(wordList) {
        const words = Array.from(wordList);
        return `<div class="possible-words">` +
        Object.values(words).map( word => `
            <span> ${word} </span>
        `).join('') +
        `</div>`;
    },


    getGuessedWords: function(userInfo, username) {
        return `<div class="guessed-words">` +
        Object.values(userInfo.gameData[username].guessedWords).map( (word, index) => `
            <span> ${word}</span>
            <span> ${userInfo.gameData[username].matchedLetters[index]} </span>
        `).join('') +
        `</div>`;
    },

    // if not valid, show the message
    errorMessage: function(userInfo, username) {
        if(!userInfo.gameData[username].isValid){
            return `<p class="error-text">This is not a valid word. Please enter a word from possible words that you haven't guessed yet. </p>`;
        }
        return` <br/>`;
    },

    // if win, show the message
    winningMessage: function(userInfo, username) {
        if(userInfo.gameData[username].winning){
            return `<p class="winning-text">Congratulations! <br> You Guess the word! <br> The target word is: ${userInfo.gameData[username].secretWord}. <br> You can start a NEW game! </p>`;
        }
        return` <br/>`;
    }

};

module.exports = gamePage;