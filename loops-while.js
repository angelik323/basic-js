var estudiantes = ["Gabriel", "Monica", "Amparo", "Heidi"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0) {
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante)
}