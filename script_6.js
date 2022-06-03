/**
 * Se pretende mediante codigo darle forma 
 * a un pan de ajo.
 * 
 *  Informacion:
 *      - 6 variables: ajo, mantequilla, Baguette
 *          sal Kosher, perejil, parmesano.
 * 
 *  Procedimiento:
 *      - Definir (inicializar) cantidades para los ingredientes.
 *      - Crear varibles nuevas de ser nesesario asignar.
 *      - Mezclar (sumar) los ingredientes necesarios para 
 *          formar la mantequilla de ajo.
 *      - Extender (sumar) la mezcla sobre el pan Baguette.
 *      - Espolvorear (sumar) con parmesano rallado.
 *      - Hornear a 220°C por 10' (mostrar salida).
 * 
 *  Requisito agregado por mi:
 *      - Cada linea "n minutos" y la última inclusive deben mostrase 
 *          de forma consecutiva con un retardo de un segundo o menos.
 *      - 1000 ms = 1 segundo.
 */

let ajoPicado = 4;
let mantecaBarra = 1;
let rebanadasBaguette = 2;
let salKosher = 0.5;
let cdasPerejilPicado = 2;
let parmesanoRallado = 0.25;

let mantecaDeAjo = mantecaBarra + ajoPicado + salKosher + cdasPerejilPicado;
let panDeAjo = rebanadasBaguette + mantecaDeAjo + parmesanoRallado;


// (Agregado)
function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

 async function horneado() {

    var i = 1;
    console.log(`${i} minuto`); 
    
    for(let i = 2; i <= 10; i++){
        await delay(700);
        console.log(`${i} minutos`);
              
    }
}
  
horneado();
  
setTimeout(console.log.bind(null,"\n¡El pan de ajo está listo!"), 7000);