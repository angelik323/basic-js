var miAuto = {
    marca: "Nissan",
    modelo: "March",
    annio: "2017",

    //Para acceder a los objetos:
    detalleAuto: function() {
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};
console.log(miAuto.detalleAuto()); 
