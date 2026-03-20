
/* Inputs:
 - En lista med ord
- En siffra som anger önskad längd
- En indikation på huruvida samma bokstav får förekomma mer 
  än en gång i ordet, eller om alla bokstäver måste vara unika
  */

function chooseWord(words, length, unique) {

//words = array med ord
//wordLength = siffra
//unique = true/false (boolean)

  if (!Array.isArray(words) || words.length === 0) {
    throw new Error("Word list cannot be empty");
  }

  if (!Number.isInteger(length) || length <= 0) {
    throw new Error("Word length must be a positive integer");
  }

  if (typeof unique !== "boolean") {
    throw new Error("Unique must be boolean");
  }
  
   let filteredWords = words.filter(word => word.length === length);

if (unique) {
    filteredWords = filteredWords.filter(word => {
      const letters = new Set(word.split(""));
      return letters.size === word.length;
    });
  }

  if (filteredWords.length === 0) {
    throw new Error("No matching word found");
  }

  const randomIndex = Math.floor(Math.random() * filteredWords.length);
  
  return filteredWords[randomIndex];
}

module.exports = chooseWord;