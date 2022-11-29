//Hacer función constructora de carros menos manual, mi objetivo será recorrer los objetos con .map

function visorCarros() {
    const listCars = [
        {"marca": "Nissan", "modelo": "March", "annio": "2017"},
        {"marca": "Tesla", "modelo": "Model 3", "annio": "2020"},
        {"marca": "Spark", "modelo": "GT", "annio": "2013"},
        {"marca": "Nissan", "modelo": "Versa", "annio": "2022"}
    ];

    return(
        listCars.map((cars)=>{
            return[
                cars.marca,
                cars.modelo,
                cars.annio
            ];
        })
    )
}