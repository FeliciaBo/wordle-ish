const chooseWord = require("./choose-word");

/* Innehåller följande:

-Testsenarion: Testar efter fel i själva funktionen/algoritmen 
efter respektive input (words, length, unique)

-Felhantering: Testar rätt felmeddelanden,
efter respektive fel i användarens input

*/


/* testa funtionalitet:
- testa words
- testa wordLength
- testa unique

- testa ingen matchning

*/

describe("Checks word selection - chooseWord", () => {

 //mock-lista med ord
 const words = ["CYKLA", "HALLÅ, HUNDAR", "TRE"]; 
 
 test("finds words with correct length", () => {
 const result = chooseWord(words, 5, false);
    expect(result.length).toBe(5);
   
  });

  test("finds words with without unique letters", () => {
 const result = chooseWord(words, 5, true);
    expect(["CYKLA", "BOWLA"]).toContain(result);
  });

  test("finds words with with unique letters", () => {
 const result = chooseWord(words, 5, false);
    expect(["CYKLA","HALLÅ"]).toContain(result);
  });

  test("throws error for 'no matching words' ", () => {
    expect(() => chooseWord(words, 15, false))
      .toThrow("No matching word found");
   
  });
});

/* testa felhantering för:
- testa words
- testa wordLength:
  - negativt tal
  - decimalt tal
- testa unique
*/

describe("Throws errors for wrong inputs - chooseWord", () => {

 test("empty list if words", () => {
  expect(() => chooseWord([], 5, false))
      .toThrow("Word list cannot be empty");  
   
  });

  test("invalid word length", () => {
    expect(() => chooseWord(["CYKLA"], -1, false))
      .toThrow("Word length must be a positive integer");  
   
  });

  test("length is not an integer", () => {
  expect(() => chooseWord(["CYKLA"], 5.5, false))
    .toThrow("Word length must be a positive integer");
});

  test("unique is not boolean", () => {
    expect(() => chooseWord(["CYKLA"], 5, "maybe"))
      .toThrow("Unique must be boolean");  
   
  });
});