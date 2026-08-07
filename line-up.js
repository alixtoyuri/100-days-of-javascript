/*
Instrucciones
Dado un nombre y un número, tu tarea consiste en escribir una oración utilizando ese nombre y ese número como numeral ordinal . Yaʻqūb espera que se utilicen números del 1 al 999.

Normas:

Números que terminan en 1 (a menos que terminen en 11) →"st"
Números que terminan en 2 (a menos que terminen en 12) →"nd"
Números que terminan en 3 (a menos que terminen en 13) →"rd"
Todos los demás números →"th"
Ejemplos:

"Mary", 1→"Mary, you are the 1st customer we serve today. Thank you!"
"John", 12→"John, you are the 12th customer we serve today. Thank you!"
"Dahir", 162→"Dahir, you are the 162nd customer we serve today. Thank you!"
*/
 //SOLUCIÓN

export const format = (name, number) => {
  let suffix = "th";
  const lastTwoDigits = number % 100;
  const lastDigit = number % 10;

  if (lastTwoDigits < 11 || lastTwoDigits > 13) {
    if (lastDigit === 1) suffix = "st";
    else if (lastDigit === 2) suffix = "nd";
    else if (lastDigit === 3) suffix = "rd";
  }

  return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`;
};
