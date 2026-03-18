const feedback = require('./feedback');

/* Innehåller följande:

-Testsenarion: Testar efter fel i själva funktionen

-Felhantering: Testar efter fel i användarens input (gissningen)

*/



/* Testsenarion:
Här testas funktionaliteten allteftersom den blir mer avancerad, 
först testas helt rätt svar, sedan svar som är delvis rätt och delvis fel 
och svar som är delvis rätt, fel och med felplacerade bokstäver.
Slutgiltigen testas svar som innehåller flera av samma bokstav, när bara en av dom är rätt.

Om testet misslyckas bör det göra det nerifrån och upp. Utifrån var det går fel kan man 
bestämma var funktionaliteten gått sönder: ex. om den bara klarar av de två första testerna 
med "rätt" + "rätt och fel svar" kan man dra slutsatsen att koden för "misplaced" inte fungerar.


Utförligare beskrivningar för testerna:

- Testa helt rätt svar: Alla bokstäver stämmer och är på rätt ställen

- Testa svar som innehåller både rätt och fel: Bokstäverna är delvis rätt och på rätt ställen, 
resten är helt fel och är inte med i det korrekta ordet. 
Uppfyller kraven för första testet och mer.

- Testa svar som innehåller både rätt, fel och felplacerade: 
Bokstäverna är delvis rätt, delvis fel och resten felplacerade
som är delvis rätt, delvis fel och resten felplacerade. 
Uppfyller kraven för de två föregående testerna och mer.

- Testa ord med dubletter av bokstäver, där det endast är en av npkstaven i det korrekta ordet: 
ex. "hallå" och "cykla" där bara ena L:et är korrekt och andra ör fel
Uppfyller kraven för de föregående testerna och den specifika funtionaliteten.
*/

describe("Check output for different answers", () => {

  test("Completely correct guess", () => {
    const result = feedback("CYKLA", "CYKLA");
    expect(result).toEqual([
      "C: correct",
      "Y: correct",
      "K: correct",
      "L: correct",
      "A: correct"
    ]);
  });

test("Correct and incorrect guess", () => {
    const result = feedback("BOWLA", "CYKLA");
    expect(result).toEqual([
      "B: incorrect",
      "O: incorrect",
      "W: incorrect",
      "L: correct",
      "A: correct"
    ]);
  });

test("Correct, incorrect and misplaced guess", () => {
    const result = feedback("LAKAN", "CYKLA");
    expect(result).toEqual([
      "L: misplaced",
      "A: misplaced",
      "K: correct",
      "A: misplaced",
      "N: incorrrect"
    ]);
  });

//test som kollar efter ord med dubbla bokstäver

});




/*Felhantering:
Här testas felhantering för användarens gissning, som ska avbryta funktionen och 
ge ett felmeddelande om gissningen inte uppfyller kraven för input:

- Testa tom input
- Testa för kort input
- Testa för lång input
- Testa input med specialtecken 
- Testa input med siffror

*/

describe("Trow error messages for wrong input", () => {

    test("Empty guess", () => {
    expect(() => feedback("", "CYKLA"))
    .toThrow("Input cannot be empty");

   });

   test("Too short guess", () => {
    expect(() => feedback("HEJ", "CYKLA"))
    .toThrow("Your guess must be the same lenght as the correct word");
   });

   test("Too long guess", () => {
    expect(() => feedback("HEJHEJHEJ", "CYKLA"))
    .toThrow("Your guess must be the same lenght as the correct word");
   });
  
  test("Guess includes special characters", () => {
    expect(() => feedback("Hej!!", "CYKLA"))
    .toThrow("Your guess can only contain letters");
   });

  test("Guess includes numbers", () => {
    expect(() => feedback("12345", "CYKLA"))
    .toThrow("Your guess can only contain letters");
   });


  });



