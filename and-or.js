/*
Ejercicio 6 — Combinar AND y OR (dos condiciones agrupadas)
Escribe puedeVotar(esCiudadano, tieneMasDe18, estaRegistrado) que devuelva true si es ciudadano y (tiene más de 18 o está registrado con permiso especial).
*/
export function puedeVotar(esCiudadano, tieneMasDe18, estaRegistrado) {
return esCiudadano && (tieneMasDe18 || estaRegistrado);
}
