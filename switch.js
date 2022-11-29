switch(true) {
    case 1:
        console.log("Soy Uno!");
        break;
    case 10:
        console.log("Soy un 10!");
        break;
    case 100:
        console.log("Soy un cien!");
        break;
    default:
        console.log("No soy nada");
}


//Reto de juego de Piedra -  Papel - Tijera
var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

var a;
var b;

function juego(a, b) {
    switch(true) {
        case (a === "piedra" && b === "piedra"):
                console.log("Empate");
        break;
    
        case (a === "piedra" && b === "papel"):
                console.log("Gana papel");
        break;
    
        case ( a === "piedra" && b === "tijera"):
                console.log("Gana Piedra");
        break;

        case ( a === "tijera" && b === "piedra"):
            console.log("Gana Piedra");
        break;
    
        case (a === "tijera" && b === "papel"):
                console.log("Gana Tijera");
        break;

        case (a === "papel" && b === "tijera"):
                console.log("Gana Tijera");
        break;
        default:
            console.log("Empate");
    }
}

juego(piedra, papel);

