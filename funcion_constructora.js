//Hacer objetos de forma mas automática
/*
¿Qué pasa si tengo una lista de 30 carros, cada uno con atributos y objetos diferentes?

Podemos hacer una función constructora:
    vamos a generar un template de un objeto, donde se van a generar una opciones que van a ser los parámetros
    y sus propiedades y después se a poder hacer nuevas instancias con un operador especial.
*/

//Función constructora
function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

//Iniciar a construir el objeto:
var autoNuevo = new auto("Tesla", "Model 3", "2020");
var autoNuevo2 = new auto("Tesla", "Model X", "2018");
var autoNuevo3 = new auto("Nissan", "March", "2017");

