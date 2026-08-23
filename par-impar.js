// Primera solución.
    let num = prompt("Digite un numero y determinaremos si es par o impar: ");
    if (num % 2 === 0){
        console.log("Es par");
    }
    if (num % 2 !== 0){
        console.log("Es impar");
    }

//Segunda solución aplicando buenas practicas.
    let num = Number(prompt("Digite un numero y determinaremos si es par o impar: "));
    if (num % 2 === 0){
        console.log("Es par");
    }
    if (num % 2 !== 0){
        console.log("Es impar");
    }
