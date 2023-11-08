// 15- Realiza un script que cuente el número de vocales que tiene un texto.

let texto = prompt('Ingrese un texto');
texto = texto.toLowerCase();
let vocal;
let contador = 0;

for (let index = 0; index < texto.length; index++) {
    vocal = texto.charAt(index); 
    if (vocal =='a' || vocal =='e' || vocal =='i' || vocal =='o' || vocal =='u') {
        contador ++;
    }
}

document.write(`El número de vocales es: ${contador}.`);