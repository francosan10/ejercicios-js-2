// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 
1
12
123
1234

let numero = prompt('Ingrese un número hasta el 50');
let numeroEntero = parseInt(numero);

if (!isNaN(numeroEntero) && numeroEntero >= 1 && numeroEntero <= 50) {
    for (let i = 1; i <= numeroEntero; i++) {
        let linea = '';
        for (let j = 1; j <= i; j++) {
            linea += j;
        }
        document.write(`${linea} <br>`);
    }
} else {
    alert('El número ingresado no es valido');
}