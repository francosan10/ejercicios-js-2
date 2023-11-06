// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

const edad = parseInt(prompt('Ingrese su edad:'));

if (edad > 18 && edad < 75) {
    alert('Ya puedes conducir!');
} else if (edad < 18 || edad >75){
    alert('Tu edad no te permite conducir');
} else if(edad !== Number){
    alert('Ingresaste una letra, introduce un número');
} else {
    alert('Ingresaste una condición no valida');
}




