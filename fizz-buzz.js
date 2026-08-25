/*
3. FizzBuzz pequeño

Crea:

fizzBuzz(num)

Reglas:

divisible entre 3 → "Fizz"
divisible entre 5 → "Buzz"
divisible entre ambos → "FizzBuzz"
ninguno → el número como string

Ejemplos:

3  → "Fizz"
5  → "Buzz"
15 → "FizzBuzz"
7  → "7"
*/

//Primera Solución
let num = Number(prompt ("Digite un número: "));
let result="";

if(num % 3 === 0){
  result += "Fizz";
}
if(num%5=== 0){
  result += "Buzz";
}
if(num === ""){
  return String(num);
}


//Segunda Solución
let num = Number(prompt ("Digite un número: "));  
let result="";

if(num % 3 === 0){
  result += "Fizz";
}
if(num%5=== 0){
  result += "Buzz";
}
if(result === ""){
  console.log( num);
}
 console.log(result);

