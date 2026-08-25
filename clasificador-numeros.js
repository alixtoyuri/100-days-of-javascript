/*
5. Clasificador de números
Crea:
classifyNumber(num)
El programa debe construir un resultado dependiendo de varias características.

Si:
es positivo → añadir "Positive"
es par → añadir "Even"
es divisible entre 5 → añadir "MultipleOf5"

Ejemplos:
2  → "PositiveEven"
10 → "PositiveEvenMultipleOf5"
15 → "PositiveMultipleOf5"
-4 → "Even"
Aquí tienes que volver a utilizar:
resultado += "..."
*/

//Primera Solución
let numbers = Number(prompt("Digite un numero: "));
let result = "";

if (numbers>=0){
    result += "Positive";
}
if (numbers % 2 === 0){
    result += "Even"; 
}
if (numbers % 5 === 0){
    result += "MultipleOf5";
} 
if (result === ""){
    console.log(num);
}

console.log(result);
