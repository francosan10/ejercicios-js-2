// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

// Number fuerza a que se introduzca un número
let filas = Number(prompt('Introduce numero de filas'));
let columnas = Number(prompt('Introduce numero de columnas'));
let ressultado = filas * columnas;
// INICIAMOS TABLA
document.write("<table border>");

for (i = 0; i < filas; i++) {
    // <tr> PARA COMENZAR UNA FILA
    document.write("<tr>");

    for (j = 0; j < columnas; j++) {
        // <td> PARA COMENZAR UNA CELDA
        document.write("<td>");
        document.write(ressultado);
        ressultado--;
        // </td> PARA CERRAR LA CELDA
        document.write("</td>");
    }
    // </tr> PARA CERRAR LA FILA
    document.write("</tr>");
}
// Y POR ÚLTIMO CERRAMOS LA TABLA CON </table>
document.write("</table>");