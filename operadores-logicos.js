/* AND ---> &&
Devuelve true cuando ambos valores que conecta son true
*/
true && true // → true
true && false // → false
false && false // → false

/* OR ||
El operador lógico OR se indica con || y devuelve true cuando cualquiera de los valores que conecta es true.
*/
true || true // → true
true || false // → true
false || false // → false


/* NOT !
El operador lógico NOT se indica con ! e invierte el valor de un valor booleano. 
Se pone delante del valor que queremos invertir.
*/
!true //false
!false //true



/* COMBINACIÓN DE OPERADORES: ARITMETICOS, LOGICOS Y DE COMPARACIÓN
Los operadores lógicos y los operadores de comparación 
se pueden combinar para crear expresiones más complejas. 
*/
2 < 3 && 3 < 4 // → true
2 + 2 < 3 && 10 < 8 * 2 // → false

//Las operaciones aritméticas tienen precedencia sobre las operaciones de comparación.
2 + 2 < 3 && 10 < 8 * 2
// Primero se hacen las operaciones aritméticas:
// → 4 < 3 && 10 < 16
// Ahora las comparaciones:
// → false && true
// Finalmente:
// → false


//Comprueba si 7 es mayor que 8 y menor que 10
7>8 && 7<10;

/*Tenemos un producto en una tienda. Cuesta 1500 y tenemos un descuento del 25%. Tengo 1150€ en mi cartera. 
Escribe un código que me diga si puedo comprarlo. No uses paréntesis */
1500 * 0.75 <= 1150


