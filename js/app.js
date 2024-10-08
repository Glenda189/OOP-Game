/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// document.addEventListener('DOMContentLoaded', () => {
//     const testPhrase = new Phrase('Hello World!');
//     testPhrase.addPhraseToDisplay();
// });

// const game = new Game();
// document.getElementById('btn__reset').addEventListener('click', () => {
//     game.startGame();
// });
let game;

document.getElementById('btn__reset').addEventListener('click', () => {
    if (game){
        game.resetGame();
    }
    game = new Game();
    game.startGame();
});
document.getElementById('qwerty').addEventListener('click', (event) => {
    if (event.target.className === 'key'){
        console.log('button clicked:', event.target.textContent);
        game.handleInteraction(event.target);
    }
});
