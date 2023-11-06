// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

let numero = prompt('Ingrese un número menor a 50');
let numeroEntero = parseInt(numero);

if (!isNaN(numeroEntero) && numeroEntero >= 1 && numeroEntero <=50) {
    console.log(numeroEntero);

    for (let i = numeroEntero; i >= 1; i--) {
        let linea = '';
        for (let j = 0; j < i; j++)
        linea += i;
        document.write(`${linea} <br>`);
    }

} else {
    alert('El número ingresado no es valido');
}