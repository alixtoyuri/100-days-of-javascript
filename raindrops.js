/*
Your task is to convert a number into its corresponding raindrop sounds.

If a given number:

is divisible by 3, add "Pling" to the result.
is divisible by 5, add "Plang" to the result.
is divisible by 7, add "Plong" to the result.
is not divisible by 3, 5, or 7, the result should be the number as a string.
*/


export const convert = (num) => {
  let resultado = "";
  
  if(num % 3 === 0){
    resultado += "Pling";
  }
  if(num % 5 === 0){
    resultado += "Plang";
  }
  if(num % 7 === 0){
    resultado += "Plong";
  }
  if(resultado === ""){
    return String(num);
  }
  return resultado;
};
