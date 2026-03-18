
function feedback (guess, correctWord) {

//const result = [];
//const correctLetters = correctWord.split('');

if (!guess) {
 throw new Error("Input cannot be empty")
}

if (guess.length !== correctWord.length) {
 throw new Error("Your guess must be the same lenght as the correct word")
}

}

module.exports = feedback;
// itterera genom för att hitta - letter: incorrect | misplaced | correct