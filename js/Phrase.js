/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay(){
        // console.log('Displaying test');
        const phraseUL = document.querySelector('#phrase ul');
        phraseUL.innerHTML = ''; //Clear any previous content
    // iterate through each character in the phrase 
    for (let char of this.phrase){
        let li = document.createElement('li');
    //check if the character is a space and assign appropriate class 
    if (char === ' ') {
        li.className = 'space';
    } else {
        li.className = `hide letter ${char}`;
        li.textContent = char;
        }
        phraseUL.appendChild(li);
        }
    }
    checkLetter(letter){
        return this.phrase.includes(letter);
    }
    showMatchedLetter(letter) {
        const letterElements = document.querySelectorAll(`.${letter}`);
        letterElements.forEach(element => {
            element.classList.replace('hide','show');
        });
    }
   
}
