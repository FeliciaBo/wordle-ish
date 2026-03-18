const feedback = require('./feedback');



/* Testsenarion:
- Testa rätt svar
- Testa med ord som ger: incorrect | misplaced | correct
- Testa ord med dubletter av bokstäver: "hallå" och "cykla"
*/
 
describe("Error handling for feedback", () => {

    test("Trow errror message for empty guess", () => {
    expect(() => feedback("", "CYKLA"))
    .toThrow("Input cannot be empty");

   });
  });


/*Felhantering:
- Testa tom input
- Testa för kort och för lång input
- Testa input med specialtecken och siffror
*/

