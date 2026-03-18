const feedback = require('./feedback');



/* Testsenarion:
- Testa rätt svar
- Testa med ord som ger: incorrect | misplaced | correct
- Testa ord med dubletter av bokstäver: "hallå" och "cykla"
*/

/*Felhantering:
- Testa tom input
- Testa för kort och för lång input
- Testa input med specialtecken och siffror
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



