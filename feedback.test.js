const feedback = require('./feedback');

/* Innehåller följande:

-Testsenarion: Testar efter fel i själva funktionen/algoritmen 
(correct, misplaced, incorrect och dubletter)

-Felhantering: Testar rätt felmeddelanden,
efter respektive fel i användarens input (gissningen)

*/


/* Testsenarion:
Testerna är uppbyggda från enklast till mest komplex funktionalitet.
På så vis är det lättare att se var funktionaliteten gått sönder 
utifrån var testerna misslyckas (om de gör det).

1. Testa helt rätt svar: 
Alla bokstäver stämmer och är på rätt ställen.
Allt borde därför vara "corect".

2. Testa svar som innehåller både rätt och felplacerade: 
Alla ord finns alltså med, men vissa är på fel ställen.
Testar den simplaste versionen av felplacerade bokstaver 
(ej dubletter)

3. Testa svar som innehåller både rätt och fel: 
Bokstäverna är antingen rätt och på rätt ställen, 
eller inte med i ordet alls.
Testar för bokstäver som är helt fel.

4. Testa ord med dubletter av bokstäver:
Endast är en av bokstäverna i det korrekta ordet: 
ex. "hallå" och "cykla" där bara ena L:et är korrekt och andra ör fel
Testar den mer komplexa funtionaliteten för felplacerade ord

Vad är trasigt?
Om test nr. _ misslyckas:
- 1: grundlogiken är trasig
- 2: "misplaced"-logiken är fel/trasig
- 3: "incorrect"-logiken är fel/trasig
- 4: dublett-logiken är fel/trasig

*/

describe("Check output for different answers", () => {

  test("1. Completely correct guess", () => {
    const result = feedback("CYKLA", "CYKLA");
    expect(result).toEqual([
      "C: correct",
      "Y: correct",
      "K: correct",
      "L: correct",
      "A: correct"
    ]);
  });

  test("2. Misplaced guess", () => {
    const result = feedback("CYALK", "CYKLA");
    expect(result).toEqual([
      "C: correct",
      "Y: correct",
      "A: misplaced",
      "L: correct",
      "K: misplaced"
    ]);
  });

test("3. Incorrect guess", () => {
    const result = feedback("BOWLA", "CYKLA");
    expect(result).toEqual([
      "B: incorrect",
      "O: incorrect",
      "W: incorrect",
      "L: correct",
      "A: correct"
    ]);
  });



test("4. Duplicate letters", () => {
    const result = feedback("HALLÅ", "CYKLA");
    expect(result).toEqual([
      "H: incorrect",
      "A: misplaced",
      "L: incorrect",
      "L: correct",
      "Å: incorrect"
    ]);
  });
});




/*Felhantering:
Här testas felhantering för användarens gissning, som ska avbryta funktionen och 
ge ett felmeddelande om gissningen inte uppfyller kraven för input.

Saker som testas:
- Tom input
- För kort input
- För lång input
- Input med specialtecken 
- Input med siffror

*/

describe("Throw error messages for wrong input", () => {

    test("empty guess", () => {
    expect(() => feedback("", "CYKLA"))
    .toThrow("Input cannot be empty");

   });

   test("too short guess", () => {
    expect(() => feedback("HEJ", "CYKLA"))
    .toThrow("Your guess must be the same lenght as the correct word");
   });

   test("too long guess", () => {
    expect(() => feedback("HEJHEJHEJ", "CYKLA"))
    .toThrow("Your guess must be the same lenght as the correct word");
   });
  
  test("guess includes special characters", () => {
    expect(() => feedback("Hej!!", "CYKLA"))
    .toThrow("Your guess can only contain letters");
   });

  test("guess includes numbers", () => {
    expect(() => feedback("12345", "CYKLA"))
    .toThrow("Your guess can only contain letters");
   });


  });



