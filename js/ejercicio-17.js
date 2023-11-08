// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

let texto = prompt("Introduce un texto:");
texto = texto.toLowerCase();

let primeraPosicion = -1;

for (var i = 0; i < texto.length; i++) {
    if (texto[i] === 'a' || texto[i] === 'e' || texto[i] === 'i' || texto[i] === 'o' || texto[i] === 'u') {
        // Si es una vocal, almacena la posición y rompe el bucle
        primeraPosicion = i;
        break;
    }
}

// Verifica si se encontró alguna vocal y muestra la posición
if (primeraPosicion !== -1) {
    document.write("La posición de la primera vocal es: " + (primeraPosicion + 1)); // Suma 1 porque las posiciones comienzan desde 1
} else {
    document.write("No se encontraron vocales en el texto.");
}


