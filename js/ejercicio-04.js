// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let numero = 0;
let resultado = 0;
do {
    let numero = prompt('Ingrese un número');
    if (!isNaN(parseInt(numero)) && numero != null) {
        resultado = resultado + parseInt(numero);
    } else {
        if (numero != null) {
            alert(`${numero} no es un numero`);
        }
    }
} while (numero != null);

document.write(resultado);
