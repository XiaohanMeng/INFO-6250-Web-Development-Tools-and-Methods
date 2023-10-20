const gamePage = {
    gameWeb:function(userWord, username){
        return `
            <!doctype html>
            <html lang="en">

            <head>
                <title>Word Game Page</title>
                <link rel="stylesheet" href="styles.css">
            </head>

            <body>
                <header>
                    <h1>Word Game</h1>

                    <form action="/logout" class="game-logout" method="POST">
                        <button type="submit" class="logout-btn">Logout</button>
                    </form>
                    
                </header>

                <main>
                    <div class="game">
                        <h2 class="game-title">Welcom ${username} !</h2>
                        <p class="game-instruction">Please enter your word.</p>
                        <h3 class="game-updated-word">Your word is: ${userWord}</h3>

                        <form action="/changeWord" class="game-form" method="POST">
                            <input name="word" class="word-text" type="text" placeholder="Enter your word" />
                            <button type="submit" class="word-btn">Submit Word</button>
                        </form>

                        
                    </div>
                </main>
                
            </body>

            </html>
        `;
    }
};

module.exports = gamePage;