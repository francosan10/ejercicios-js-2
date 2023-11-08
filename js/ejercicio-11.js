// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. 
let nombre1 = prompt('Ingrese su nombre');
let edad1 = prompt('Ingrese su edad');

let nombre2 = prompt('Ingrese su nombre');
let edad2 = prompt('Ingrese su edad');

let nombre3 = prompt('Ingrese su nombre');
let edad3 = prompt('Ingrese su edad');

let edadMayor = Math.max(edad1, edad2, edad3);

switch (true) {
    case (edadMayor == edad1):
        document.write(`${nombre1} tiene ${edad1} y es el mayor.`);
        break;
    case (edadMayor == edad2):
        document.write(`${nombre2} tiene ${edad2} y es el mayor.`);
        break;
    case (edadMayor == edad3):
        document.write(`${nombre3} tiene ${edad3} y es el mayor.`);
        break;
    default:
        alert('Ingresa una edad valida');
}