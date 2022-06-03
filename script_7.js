/**
 * Se pretende mediante codigo hacer waffles.
 * 
 *  Informacion:
 *      - 7 variables: huevo, aceite, leche,
 *          azucar, sal, harina, polvo de hornear.
 * 
 *  Procedimiento:
 *      - Definir (inicializar) cantidades para los ingredientes.
 *      - Crear varibles nuevas de ser nesesario asignar.
 *      - Mezclar (sumar) los ingredientes necesarios para 
 *          formar ingredientes secos e ingredidntes humedos.
 *     
 */

let huevo = 1;
let cdasAceite = 2;
let tazaLeche = 0.75;
let cdasAzucar = 2;
let pizcaSal = 1;
let tazaHarina = 1;
let cdtaPolvoHornear = 1;
let i = 1;

let ingredientesSecos = cdtaPolvoHornear + pizcaSal + cdasAzucar + tazaHarina;
let ingredientesHumedos = huevo + cdasAceite + tazaLeche;
let mezcla = ingredientesSecos + ingredientesHumedos;

// (Agregado)
function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function waffles(){
    while(mezcla == 8.75 && i <= 5){
        
        console.log(`Preparando waffle ${i}`);
        ++i;
        await delay(700);
        
    }
}
waffles();

setTimeout(console.log.bind(null,"\n¡Ya están listos!"), 3500);

