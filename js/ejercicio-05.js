/* 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: 

Input:  40773821 
Output: ‘L’
*/

while (true) {
    let dni = prompt('Ingresa tu número de DNI:');

        let numeroDNI = parseInt(dni);
        if (!isNaN(numeroDNI) && numeroDNI >= 0 && numeroDNI <= 99999999) {
            // Calcular el resto de la división entre el número y 23
            let resto = numeroDNI % 23;
            // Array de letras para el DNI
            let letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
            // Obtener la letra correspondiente
            let letra = letrasDNI[resto];
            // Mostrar la letra del DNI
            alert(`La letra correspondiente al número ${numeroDNI} es: ${letra}`);
        } else {
            alert('Por favor, ingresa un número válido.');
        }
    }