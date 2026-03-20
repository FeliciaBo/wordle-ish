/* Denna funktion är spelets sätt att välja ut ett ord 
att spela med. Den ska uppfylla följande kriterier:

Inputs:
 - En lista med ord - array
- En siffra som anger önskad längd - siffra
- En indikation på huruvida samma bokstav får förekomma mer än 
en gång i ordet, eller om alla bokstäver måste vara unika - boolean

Funktionalitet:
- Välj slumpmässigt ut ett ord ur listan som uppfyller 
  kriterierna i de övriga parametrarna
- Hantera på något väldefinierat sätt situationen 
  som uppstår när inget passande ord finns
- Output: Det slumpmässigt utvalda ordet */


function chooseWord(words, length, unique) {

  //felhantering
  
   if (!Array.isArray(words)) {
    throw new Error("Words must be an array");
  }

  if (words.length === 0) {
    throw new Error("Word list cannot be empty");
  }

  if (!Number.isInteger(length) || length <= 0) {
    throw new Error("Word length must be a positive integer");
  }

  if (typeof unique !== "boolean") {
    throw new Error("Unique must be boolean");
  }


  //filtrera ord

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