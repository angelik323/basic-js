var articulos = [
    { nombre: "Bici", costo: "3000"},
    { nombre: "TV", costo: "2500"},
    { nombre: "Libro", costo: "320"},
    { nombre: "Celular", costo: "10000"},
    { nombre: "Laptop", costo: "20000"},
    { nombre: "Teclado", costo: "500"},
    { nombre: "Audifonos", costo: "1700"}
];

//==============.find()==========================
// .find() --> este método ayuda a encontrar algo dentro del array anterior
// este método no modifica el array anterior, sino que va a generar un array nuevo con el valor que le estoy pasando si es que lo encuentra
// ya que este método .find() lo que hace es validar un true o un false
// si el artículo de la lista existe lo voy a regresar sino, no lo voy a regresar, en caso que exista genera el nuevo array

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});
/*
Lo que estamos haciendo es generar un nuevo array que va a ser igual al articulo que en este caso ha encontrado
en consola 
encuentraArticulo
{nombre: 'Laptop', costo: '20000'}
*/


//===================== .forEach() ==========================
/**
 * Este método a diferencia de los que hemos estado viendo, este método NO ME GENERA UN NUEVO ARRAY, simplemente genera un filtrado
 * sobre el array anterior (artículos sin modificarlo) y me va a regresar cosas.
 */
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});


//===================== .some() ==========================
/**
 * Este método nos trae tambén una validación de verdadero o falso (true o false)
 * para artículos que cumplan esa validación
 * también genera un nuevo array sin modificar el inicial de la linea 1
 */
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});
/**
 * en consola
 * articulosBaratos
 * true
 */
