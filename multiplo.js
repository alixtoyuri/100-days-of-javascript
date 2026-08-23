//Determinar si num es divisible exactamente entre divisor.

//Primera solución
let num = Number(prompt("Determinar si num es divisible entre divisor \nDigite el número: "));
let divisor = Number(prompt("Digite el divisor: "));

if (num % divisor === 0){
    console.log("El número: "+num+" es divisible entre su divisor "+divisor+ ".");
} else if(num % divisor !==0){
    console.log("El número: "+num+" no es divisible entre su divisor "+divisor+ ".");
}


//Mejorar la validación de datos ingresados por el usuario
