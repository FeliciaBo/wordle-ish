/* Denna funktion är spelets sätt att välja ut ett ord 
att spela med. Den ska uppfylla följande kriterier:

Inputs:
- En lista med ord
- En siffra som anger önskad längd
- En indikation på huruvida samma bokstav får förekomma mer 
  än en gång i ordet, eller om alla bokstäver måste vara unika

Funktionalitet:
- Välj slumpmässigt ut ett ord ur listan som uppfyller 
  kriterierna i de övriga parametrarna
- Hantera på något väldefinierat sätt situationen 
  som uppstår när inget passande ord finns
- Output: Det slumpmässigt utvalda ordet */

const chooseWord = require("./choose-word");

/* testa funtionalitet:
- testa words
- testa wordLength
- testa unique

*/

describe("Checks word selection - chooseWord", () => {

 //mock-lista med ord
 const words = ["CYKLA", "HALLÅ, HUNDAR", "TRE", "BOWLA"]; 
 
 test("finds words with correct length", () => {
 const result = chooseWord(words, 5, false);
    expect(result.length).toBe(5);
   
  });

  test("finds words with unique letters when required", () => {
 const result = chooseWord(words, 5, true);
    expect(["CYKLA", "BOWLA"]).toContain(result);
   
  });

  test("throws error for 'no matching words' ", () => {
    expect(() => chooseWord(words, 15, false))
      .toThrow("No matching word found");
   
  });
});

/* testa felhantering för:
- testa words
- testa wordLength
- testa unique
*/

describe("Throws errors for wrong inputs - chooseWord", () => {

 test("empty list if words", () => {
  expect(() => chooseWord([], 5, false))
      .toThrow("Word list cannot be empty");  
   
  });

  test("invalid word length", () => {
    expect(() => chooseWord(["CYKLA"], -1, false))
      .toThrow("Invalid word length - cannot be negative");  
   
  });

  test("unique is not boolean", () => {
    expect(() => chooseWord(["CYKLA"], 5, "maybe"))
      .toThrow("Unique must be boolean");  
   
  });
});