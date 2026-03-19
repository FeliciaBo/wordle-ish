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

/* testa funtionalitet:
- testa words
- testa wordLength
- testa unique

*/

describe("Checks word selection - chooseWord", () => {

 //mock-lista med ord
 const words = ["CYKLA", "HALLÅ, HUNDAR", "TRE", "BOWLA"]; 
 
 test("finds words with correct length", () => {
    
   
  });

  test("finds words with unique letters when required", () => {
    
   
  });

  test("throws error for 'no matching words' ", () => {
    
   
  });
});

/* testa felhantering för:
- testa words
- testa wordLength
- testa unique
*/

describe("Throws errors for wrong inputs - chooseWord", () => {

 test("empty list if words", () => {
    
   
  });

  test("invalid wordLength", () => {
    
   
  });

  test("unique is not boolean", () => {
    
   
  });
});