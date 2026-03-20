
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

  if (typeof length !== "number" || length <= 0) {
    throw new Error("Invalid word length - cannot be negative");
  }

  if (typeof unique !== "boolean") {
    throw new Error("Unique must be boolean");
  }
   let filtered = words.filter(word => word.length === length);


  const randomIndex = Math.floor(Math.random() * filtered.length);
  
  return filtered[randomIndex];
}

module.exports = chooseWord;