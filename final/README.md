# Final Project - Guess Word Game

Welcome to the Word Guessing Game! In this game, a secret word is chosen, and players take turns making guesses. The objective is to guess the secret word. Here are some key terms and rules:

## Terminology
* **Game**: Refers to a single round where one specific secret word is chosen, and the player makes multiple guesses.
* **New Game**: Initiates a new round by selecting a new secret word and restoring the list of possible words to the full list.
* **Valid Guess**: A guess that is one of the possible words and has not been guessed previously in the current game. Guesses are not case-sensitive.
* **Invalid Guess**: A guess that is either not on the full list of possible words or has been previously guessed in the current game.
* **Incorrect Guess**: A valid guess that is not the secret word.
* **Correct Guess**: A valid guess that matches the secret word (case-insensitive). It is essential to note that a guess that shares all the letters of the secret word but is not the actual word (e.g., EAT vs. TEA) is not considered a correct guess.


## Login
### User Authentication

- The login system explicitly disallows the use of the username "dog."
- Users with valid usernames will always be treated as existing users; there is no user registration process.
- If the entered username is invalid (including "dog"), the system will respond with a login form containing a message informing the user about the invalid username.

### Game Resumption

- If a user with a valid username, who is currently in the middle of a game, logs in:
  - They will be able to resume their existing game.


## Gameplay
* Start a new game to choose a new secret word and restore the list of possible words.
* Make valid guesses to discover the secret word.
* Statistics from previous games may be preserved for tracking and analysis.


Enjoy playing the Word Guessing Game, and may you make correct guesses to win each round!


## Command
* `npm install`, `npm run build`
* To run the server: `npm start` 
* To start the client: `npm run dev` 