var frutas = [
    "Manzana",
    "Fresa",
    "Pera",
    "Banano"
];

console.log(frutas);

//Para ver la longitud de un array se debe poner el .length
console.log(frutas.length);

//Para acceder a un solo elemento de la lista
console.log(frutas[1]);

//Para agregar mas frutas a mi Array
var masFrutas = frutas.push["piña"];

//Para borrar el último elemento de la lista
var ultimo = frutas.pop();

//Agregar un elemento de primero en la lista
var nuevaLongitud = frutas.unshift("Mora");

//Borrar el primer elemento de una lista
var borrarFruta = frutas.shift("Fresa");

//Para llamar una posición de un elemento de la lista
var saberPosicion = frutas.indexOf("Pera");