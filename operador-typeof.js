/*
El operador typeof devuelve una cadena de texto que indica el tipo de un operando. 
Puede ser usado con cualquier tipo de operando, incluyendo variables y literales.
*/

//Example
//Tengo una variable llamada dogId pero no tengo claro si es una cadena de texto. Escribe el código necesario para asegurarte.
typeof dogId === 'string'


//Diferencia entre undefined y null
//null sólo puede tener el valor null
let rolloDePapel = null


//el tipo undefined sólo puede tener el valor undefined
let rolloDePapel // -> undefined

//Comparaciones de null y undefined
null === undefined // -> false


//Sólo cuando comparamos null con null o undefined con undefined obtenemos true:
null === null // -> true
undefined === undefined // -> true

