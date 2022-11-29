//Hoisting es cuando las variables y las funciones se procesan antes de que se ejecute cualquier tipo de código.

console.log(miNombre)

var miNombre;

miNombre = "Angélica María"


//El hoisting también sucede en funciones:
hey();

function hey() {
    console.log("hola " + miNombre);
}

