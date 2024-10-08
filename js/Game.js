/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }
//Phrases for game 
createPhrases(){
    return [
        new Phrase ('I love cheese'),
        new Phrase ('Flowers are so beautiful'),
        new Phrase ('Italy has the best pasta'),
        new Phrase ('The Golden Gate Bridge is in San Francisco'),
        new Phrase ('Sunny summer days are over')
    ];
}
    startGame(){
        this.resetGame();
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
    //get a random phrase and set it as the active phrase 
    this.activePhrase = this.getRandomPhrase();
    // add the phrase to the display
    this.activePhrase.addPhraseToDisplay();
    }
// reset game 
    resetGame() {
        const phraseUL = document.querySelector('#phrase ul');
        // console.log('before reset, phrase UL content:', phraseUL.innerHTML);
        if (phraseUL){
            while (phraseUL.firstChild){
                phraseUL.removeChild(phraseUL.firstChild);
            }
        }
        // console.log('number of keys found:', keys.length);
//reset keyboard
        const keys = document.querySelectorAll('#qwerty button');
        keys.forEach(button => {
        // console.log('resetting button:', button.textContent);
            button.disabled = false;
            button.className = 'key';
        });
// reset hearts 
        const hearts = document.querySelectorAll('.tries img');
        hearts.forEach(heart => heart.src = 'images/liveHeart.png');
//reset missed 
        this.missed = 0;
    }
// Select Random phrase from phrases property 
    getRandomPhrase() {
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomIndex];
    }
// Checks to see if the button clicked 
    handleInteraction(button){
        button.disabled = true;
        const guessedLetter = button.textContent;
        if (this.activePhrase.checkLetter(guessedLetter)){
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(guessedLetter);
            if (this.checkForWin()){
                this.gameOver(true);
            }
             } else {
                button.classList.add('wrong');
                this.removeLife();
    
            }
    }      
//Increases missed count and removes a life from scoreboard
    removeLife(){
    const hearts = document.querySelectorAll('.tries img');
    hearts [this.missed].src = 'images/lostHeart.png';
    this.missed += 1;
    if (this.missed === 5) {
        this.gameOver(false);
    }
    }
// Checks if the player has revealed all letters 
    checkForWin(){
        const hiddenLetters = document.querySelectorAll('.hide.letter');
        return hiddenLetters.length === 0;
    }
// Display the original start screen
    gameOver(win){
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'flex';
        const message = document.getElementById('game-over-message');
        if(win){
            overlay.className = 'win';
            message.textContent = 'Congratulations, You Won!';
        } else {
            overlay.className = 'lose';
            message.textContent = 'Sorry, better luck next time!';
        }
    }
};