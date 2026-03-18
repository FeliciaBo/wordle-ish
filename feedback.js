
function feedback (guess, correct) {

const result = [];
//const letter = correct.split('');

//error handling
if (!guess) {
 throw new Error("Input cannot be empty")
}

if (guess.length !== correct.length) {
 throw new Error("Your guess must be the same lenght as the correct word")
}

if (!/^[A-Za-zÅÄÖåäö]+$/.test(guess)) {
    throw new Error("Your guess can only contain letters");
  }

  // itterera genom för att hitta - letter: incorrect | misplaced | correct
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === correct[i]) {
      result.push(guess[i] + ": correct");
      
    } else if (guess[i] !== correct[i]){
      result.push(guess[i] + ": incorrect");
      }
    
  }

return result;

}


module.exports = feedback;
