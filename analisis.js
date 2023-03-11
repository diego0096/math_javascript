console.log(salarios)

//Analisis personal de Juanita

function encontrarPersona(personaEnBusqueda) {
    return salarios.find(persona => persona.name == personaEnBusqueda);

    /* const persona = salarios.find((persona) => {
        persona.name == personaEnBusqueda
    });
    return persona; */
}

function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    const salarios = trabajos.map(function (elemento) {
        return elemento.salario
    })

    const medianaSalarios = plMath.calcularMediana(salarios);

    console.log(salarios)
    console.log(medianaSalarios);
    return medianaSalarios;
}