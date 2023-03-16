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

function proyeccionPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let porcentajesCrecimiento = [];

    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioAnterior = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioAnterior;
        const porcentajeCrecimiento = crecimiento / salarioAnterior;
        console.log(porcentajeCrecimiento);
        porcentajesCrecimiento.push(porcentajeCrecimiento)
    }

    const medianaPorcentajesCrecimiento = plMath.calcularMediana(porcentajesCrecimiento);

    console.log({ porcentajesCrecimiento, medianaPorcentajesCrecimiento })

    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
    const nuevoSalario = ultimoSalario + aumento;

    return nuevoSalario;
}

//Analisis empresarial

const empresas = {};
// salarios.forEach(persona => tabla)
for (persona of salarios) {
    for (trabajo of persona.trabajos) {
        if (!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {}
        }
        if (!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = [];
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}

console.log(empresas)

function medianaEmpresaYear(nombre, year) {
    if (!empresas[nombre]) {
        console.warn('La empresa no existe')
    } else if (!empresas[nombre][year]) {
        console.warn('La empresa no dio salarios ese año')
    } else {
        return plMath.calcularMediana(empresas[nombre][year]);
    }
}

function proyeccionPorEmpresa(nombre, year) {
    if (!empresas[nombre]) {
        console.warn('La empresa no existe');
    } else {
        const empresYears = Object.values(empresas[nombre])
        const listaMedianaYears = empresYears.map(() => {
            return medianaEmpresaYear(nombre, year);
        })

        let porcentajesCrecimiento = [];

        for (let i = 1; i < listaMedianaYears.length; i++) {
            const salarioActual = listaMedianaYears[i];
            const salarioAnterior = listaMedianaYears[i - 1];
            const crecimiento = salarioActual - salarioAnterior;
            const porcentajeCrecimiento = crecimiento / salarioAnterior;
            console.log(porcentajeCrecimiento);
            porcentajesCrecimiento.push(porcentajeCrecimiento)
        }

        const medianaPorcentajesCrecimiento = plMath.calcularMediana(porcentajesCrecimiento);
        const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1].salario;
        const aumento = ultimaMediana * medianaPorcentajesCrecimiento;
        const nuevaMediana = ultimaMediana + aumento;

        return nuevaMediana;
    }
}
