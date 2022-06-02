/*
 * Juan conduce 2,6Km (2600 metros) desde el punto A al B
 * y 691 metros desde el punto B al C.
 * ¿Recorrido total?
 * 1M == 1000mm
 */

var recorridoAB = 2600; //metros
var recorridoBC = 691;

var recorridoTotal = (recorridoAB + recorridoBC) * 1000;

console.log(`La distancia recorrida por el auto de Juan en milimetros es: ${recorridoTotal}mm.`);