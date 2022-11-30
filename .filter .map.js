//FILTER
var articulos = [
    { nombre: "Bici", costo: "3000"},
    { nombre: "TV", costo: "2500"},
    { nombre: "Libro", costo: "320"},
    { nombre: "Celular", costo: "10000"},
    { nombre: "Laptop", costo: "20000"},
    { nombre: "Teclado", costo: "500"},
    { nombre: "Audifonos", costo: "1700"}
];

//filter lo que hace es agregar a un nuevo array sólo los artículos que cumplen la validación
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

/*
en consola
articulosFiltrados
*/


//.MAP
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

/*
en consola
nombreArticulos
(7) ['Bici', 'TV', 'Libro', 'Celular', 'Laptop', 'Teclado', 'Audifonos']
*/

