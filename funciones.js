//Hay dos tipos de funciones
    //Funciones Declarativas(maneja palabra reservada FUNCTION) y Funciones de Expresión (una variable que puede guardar una funcion completa)

//Declarativa: 
function miFuncion() {
    return 3;
} 

miFuncion();

//Expresión:
var miFuncion = function(a,b) {
    return a+b;
}

miFuncion();