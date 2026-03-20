const chooseWord = require("./choose-word");

/* Innehåller följande:

-Testsenarion: Testar efter fel i själva funktionen/algoritmen 
för "lenght" och "unique". Testar inte "words" eftersom
testet använder sig av en mock-lista.

-Felhantering: Testar rätt felmeddelanden,
efter respektive fel i användarens input. 
Här testas även "words".

*/


/* Testsenarion:
Testar funtionalitet alleftersom de dyker upp i funktionen.
Words är en mock-lista med alla ord. Den är alltså 
självständig från orden som faktiskt är med, 
för att hitta fel i filtreringen.

- Length (längd på ord):
Testar att längden på orden som filtrera stämmer överens
med filteringen som gjorts:
- length = 5, bara ord på 5 bokstäver visas

- Unique (om det får vara dubletter av bokstäver i order eller ej):
Testar att valet av dubletter eller ej stämmer överens med filtreringen:
- unique = false, ord med dubletter tillåts (såsom order HALLÅ med 2st "L")
- unique = true, bara ord utan dubetter tillåts (alltså inte ordet HALLÅ)

- Om inget ord stämmer in på filtreringen: 
Korrekt felmeddelande visas.
- length = 15, och det finns inget ord med 15 bokstäver

*/

describe("Checks word selection - chooseWord", () => {

 //mock-lista med ord
 const words = ["CYKLA", "HALLÅ", "HUNDAR", "TRE"]; 
 
 test("finds words with correct length", () => {
 const result = chooseWord(words, 5, false);
    expect(result.length).toBe(5);
   
  });

  test("finds words with unique letters", () => {
 const result = chooseWord(words, 5, false);
    expect(["CYKLA","HALLÅ"]).toContain(result);
  });

  test("finds words with without unique letters", () => {
 const result = chooseWord(words, 5, true);
    expect(result).toBe("CYKLA");
  });

  test("throws error for 'no matching words' ", () => {
    expect(() => chooseWord(words, 15, false))
      .toThrow("No matching word found");
   
  });
});

/* Testar felhantering.
Testar respektive fel i input och skickar ut rätt felmeddelande:

- "words"
 - Fel typ av input:
 Input är inte en array

 - Tom lista:
 Array:en med ord är tom
 
 
- "length"
  - Negativt tal:
  Siffran för längd är negativ

  - Decimalt tal:
  Siffran för längd är ett deicmalt tal (inte ett heltal)

- "unique":
Är inte en Boolean (true/false)

*/

describe("Throws errors for wrong inputs - chooseWord", () => {


  test("words is not array", () => {
  expect(() => chooseWord("POTATIS", 5, false))
      .toThrow("Words must be an array");  
   
  });

 test("empty list of words", () => {
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