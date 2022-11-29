//saludar estudiantes desde un ciclo:

var estudiantes = ["Gabriel", "Monica", "Amparo", "Heidi"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

//Forma 1:
for(i=0; i<estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}

//Forma 2:
for(var estudiante of estudiantes) {
    saludarEstudiantes(estudiante)
}