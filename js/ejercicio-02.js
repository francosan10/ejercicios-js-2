/* 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota: 0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente
Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
*/

let nota = prompt('Ingrese su nota');
let notaEntera = parseInt(nota);

if (notaEntera >= 0 && notaEntera <= 10 ) {
    switch (true) {
        case (notaEntera >= 0 && notaEntera <= 2):
          alert('Muy deficiente');
          break;
        case (notaEntera >= 3 && notaEntera <= 4):
          alert('Insuficiente');
          break;
        case (notaEntera >= 5 && notaEntera <= 6):
          alert('Suficiente');
          break;
        case (notaEntera === 7):
          alert('Bien');
          break;
        case (notaEntera >= 8 && notaEntera <= 9):
          alert('Notable');
          break;
        case (notaEntera === 10):
          alert('Sobresaliente');
          break;
      }
    } else if (isNaN(notaEntera)) {
      alert('Introduce un número válido');

    } else {
      alert('Número erróneo');
    }

