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

//Analisis general

function medianaGeneral() {
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));
    // const medianaPorCadaNombre = nombres.map(nombre => medianaPorPersona(nombre))
    const mediana = plMath.calcularMediana(listaMedianas)
    return mediana;
}

function medianaTop10() {
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));
    const medianasOrdenadas = plMath.ordenarLista(listaMedianas);
    const cantidad = listaMedianas.length / 10;
    const limite = listaMedianas.length - cantidad;
    
    const top10 = medianasOrdenadas.slice(limite, medianasOrdenadas.length); // Crea un array con la copia de elementos del array
    const top_10 = medianasOrdenadas.splice(limite, medianasOrdenadas.length); // Crea un array tomando elemntos del array, lo que tome se elimina del array anteriror
    console.log({listaMedianas, medianasOrdenadas})

    const medianaTop10 = plMath.calcularMediana(top10);
    return medianaTop10;
}


const arr = [];

//const ne = prompt('Agrega un nuevo usuario');

const o = 'hola'
const s  ='llll'

const add = arr.push(o)
const add2 = arr.map(function() {
    return arr.push(s);
})

console.log(arr);
console.log(add2);
