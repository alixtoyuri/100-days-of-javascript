/*
4. Sonidos de animales

Crea:

animalSound(animal)

Reglas:

"dog" → "Woof"
"cat" → "Meow"
"cow" → "Moo"

Si no reconoce el animal:

"unknown"

Aquí practicarás if / else if / else.

Objetivo: entender cuándo SÍ debes utilizar else if.
*/

// Primera Solución
let animales = prompt("Digite el animal para saber su sonido: ");

if(animales === "dog" || animales === "Dog" || animales === "DOG"){
    console.log("Woof");
} else if (animales === "cat" || animales === "Cat" || animales === "CAT"){
    console.log("Meow");
}else if (animales === "cow" || animales === "Cow" || animales === "COW"){
    console.log("Moo");
} else {
    console.log("unknown")
}
