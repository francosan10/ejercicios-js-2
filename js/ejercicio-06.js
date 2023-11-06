// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
1
22
333

for (let index = 1; index <= 30 ; index++) {
    console.log(index);
    let piramide = '';
    for (let linea = 0; linea < index; linea++) {
        piramide += index;
    }
    document.write(`${piramide} <br>`);
}