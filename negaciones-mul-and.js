/*
Ejercicio 7 — Negaciones múltiples con AND
Escribe puedeAcamparAquí(estaProhibido, hayIncendioForestal) que devuelva true solo si no está prohibido y no hay incendio forestal.
*/

export function puedeAcamparAquí(estaProhibido, hayIncendioForestal) {
return !estaProhibido && !hayIncendioForestal;
}
