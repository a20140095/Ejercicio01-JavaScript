alert("Bienvenido al restaurante. Esta es tu cuenta.");
var entrada = parseInt(prompt("Inserta tu Costo de Entrada"));
var plato = parseInt(prompt("Costo del Plato Principal"));
var postre = parseInt(prompt("Y ahora el costo del postre"));
//Operaciones
var total = entrada + plato + postre
var IGV = (total*0.18)+total

//Mostrar Resultados
console.log("El costo de la entrada es: " + entrada);
console.log("El costo del plato principal es: " + plato);
console.log("El costo del postre " + postre);
console.log("El costo total es " + total);
console.log("El costo con IGV es: " + IGV);
